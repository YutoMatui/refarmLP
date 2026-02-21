type ContactPayload = {
  shopName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
};

function normalizeText(input: unknown): string {
  const value = String(input ?? "").trim();
  if (!value) return "";
  try {
    const recovered = Buffer.from(value, "latin1").toString("utf8");
    if (/[\u3040-\u30ff\u4e00-\u9fff]/.test(recovered)) {
      return recovered.trim();
    }
  } catch {
    // noop
  }
  return value;
}

function readJsonBody(req: any): Promise<ContactPayload> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString("utf8");
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

async function addToNotion(data: Required<ContactPayload>) {
  const notionSecret = process.env.NOTION_SECRET;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionSecret || !notionDatabaseId) {
    console.warn("[Notion] NOTION_SECRET or NOTION_DATABASE_ID is not set. Skipping.");
    return;
  }

  const dbResponse = await fetch(`https://api.notion.com/v1/databases/${notionDatabaseId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionSecret}`,
      "Notion-Version": "2022-06-28",
    },
  });

  if (!dbResponse.ok) {
    const error = await dbResponse.text();
    throw new Error(`Notion DB schema error: ${error}`);
  }

  const dbJson = await dbResponse.json();
  const dbProperties = (dbJson.properties ?? {}) as Record<string, { type?: string }>;
  const titleEntry = Object.entries(dbProperties).find(([, prop]) => prop?.type === "title");
  if (!titleEntry) {
    throw new Error("Notion database has no title property.");
  }

  const notionProperties: Record<string, unknown> = {
    [titleEntry[0]]: {
      title: [{ text: { content: data.shopName } }],
    },
  };

  if (dbProperties["担当者名"]?.type === "rich_text") {
    notionProperties["担当者名"] = {
      rich_text: [{ text: { content: data.contactPerson } }],
    };
  }
  if (dbProperties["電話番号"]?.type === "phone_number") {
    notionProperties["電話番号"] = {
      phone_number: data.phone,
    };
  }
  if (dbProperties["メールアドレス"]?.type === "email") {
    notionProperties["メールアドレス"] = {
      email: data.email,
    };
  }
  if (dbProperties["ステータス"]?.type === "select") {
    notionProperties["ステータス"] = {
      select: { name: "04_フォーム入力済み" },
    };
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${notionSecret}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: notionDatabaseId },
      properties: notionProperties,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Notion API error: ${error}`);
  }
}

async function sendAutoReplyEmail(data: Required<Pick<ContactPayload, "shopName" | "contactPerson" | "email">>) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || "noreply@refarmkobe.com";

  if (!resendApiKey) {
    console.warn("[Resend] RESEND_API_KEY is not set. Skipping.");
    return;
  }

  const emailBody = `${data.shopName} ${data.contactPerson}様

この度は、神戸のこだわり野菜仕入れサービス「ベジコベ」のお試し（1000円分）にお申し込みいただき、誠にありがとうございます。`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [data.email],
      subject: "【重要】お試し野菜（1000円分）のお申し込みありがとうございます / ベジコベ",
      text: emailBody,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const payload = (req.body && Object.keys(req.body).length > 0)
      ? (req.body as ContactPayload)
      : await readJsonBody(req);

    const shopName = normalizeText(payload.shopName);
    const contactPerson = normalizeText(payload.contactPerson);
    const phone = normalizeText(payload.phone);
    const email = normalizeText(payload.email);

    if (!shopName || !contactPerson || !phone || !email) {
      return res.status(400).json({ message: "全ての項目を入力してください。" });
    }

    await addToNotion({ shopName, contactPerson, phone, email });
    try {
      await sendAutoReplyEmail({ shopName, contactPerson, email });
    } catch (mailError) {
      console.error("[api/contact] Non-blocking resend error:", mailError);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[api/contact] Error:", error);
    return res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
}
