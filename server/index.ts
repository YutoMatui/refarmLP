import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

function buildMailBody(data: { shopName: string; contactPerson: string }) {
  const recipient = `${data.shopName} ${data.contactPerson}様`;
  const lineUrl = "https://lin.ee/UX0sUuD";
  const docUrl =
    "https://drive.google.com/file/d/1MMkfhqfWHBs3UVv-8mROUD9UYAT3J9rp/view?usp=sharing";

  const text = `${recipient}

この度は、神戸のこだわり野菜のお試しにお申し込みいただき、誠にありがとうございます。りふぁーむの松井と申します。

お試し野菜のお受け取り、および専用発注システムのご利用に向けて、まずは【公式LINEへのご登録】をお願いいたします。

▼公式LINEのご登録はこちら（1タップで完了します）
${lineUrl}

【お試し野菜お届けまでの3ステップ】
1. 上記URLより、ベジコベ公式LINEの「友だち追加」をお願いします。
2. 担当者よりLINEのメッセージにて、「発注システムへの初回ログインURL・パスワード」をお送りいたします。
3. アプリにログインし、お好きな野菜を選んでご注文ください。（※ご注文時にお届け日時のご指定が可能です）

【料金・ご請求に関する重要なお知らせ】
初回のお試しについて:
「野菜代金1,000円分（税込）まで」および「配送料」が【無料】となります。（※野菜代金が1,000円を超過した分につきましては、別途請求書を発行させていただきます）

2回目以降のご注文について:
2回目以降のご利用からは、通常通り「野菜代金」および「配送料」が発生いたします。なお、ベジコベは入会金や月額費用などは一切かかりませんのでご安心ください。

【ベジコベ サービス資料】
${docUrl}

システムの操作方法や野菜についてご不明な点がございましたら、そのままLINEのメッセージでお気軽にご質問いただけます。
${recipient}のお店づくりを、美味しい神戸の野菜を通じて全力でサポートさせていただきます。

まずは公式LINEでのご登録を心よりお待ちしております！

ベジコベ（運営：りふぁーむ）
担当：松井 優人
連絡先：090-9614-4516
メール：refarmkobe@gmail.com`;

  const html = `
  <div style="margin:0;background:#f5fdf8;padding:24px 12px;font-family:'Noto Sans JP',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1f2937;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #d1fae5;border-radius:18px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#059669,#10b981);padding:24px;color:#ffffff;">
        <h1 style="margin:10px 0 0;font-size:26px;line-height:1.4;font-weight:800;">お試し野菜のお申し込みありがとうございます</h1>
      </div>
      <div style="padding:24px;">
        <p style="margin:0 0 16px;font-size:16px;font-weight:700;">${recipient}</p>
        <p style="margin:0 0 14px;line-height:1.9;">この度は、神戸のこだわり野菜のお試しにお申し込みいただき、誠にありがとうございます。りふぁーむの松井と申します。</p>
        <p style="margin:0 0 18px;line-height:1.9;">お試し野菜のお受け取り、および専用発注システムのご利用に向けて、まずは<strong>【公式LINEへのご登録】</strong>をお願いいたします。</p>

        <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:12px;padding:16px;margin:0 0 18px;">
          <div style="font-size:13px;color:#065f46;margin-bottom:8px;">▼公式LINEのご登録はこちら（1タップで完了します）</div>
          <a href="${lineUrl}" style="display:inline-block;background:#06c755;color:#fff;text-decoration:none;font-weight:700;border-radius:10px;padding:10px 14px;">公式LINEに登録する</a>
        </div>

        <h2 style="margin:0 0 10px;font-size:17px;color:#065f46;">【お試し野菜お届けまでの3ステップ】</h2>
        <ol style="margin:0 0 18px;padding-left:20px;line-height:1.9;">
          <li>上記URLより、ベジコベ公式LINEの「友だち追加」をお願いします。</li>
          <li>担当者よりLINEのメッセージにて、「発注システムへの初回ログインURL・パスワード」をお送りいたします。</li>
          <li>アプリにログインし、お好きな野菜を選んでご注文ください。（※ご注文時にお届け日時のご指定が可能です）</li>
        </ol>

        <h2 style="margin:0 0 10px;font-size:17px;color:#065f46;">【料金・ご請求に関する重要なお知らせ】</h2>
        <p style="margin:0 0 8px;font-weight:700;">初回のお試しについて</p>
        <p style="margin:0 0 14px;line-height:1.9;">「野菜代金1,000円分（税込）まで」および「配送料」が【無料】となります。（※野菜代金が1,000円を超過した分につきましては、別途請求書を発行させていただきます）</p>
        <p style="margin:0 0 8px;font-weight:700;">2回目以降のご注文について</p>
        <p style="margin:0 0 14px;line-height:1.9;">2回目以降のご利用からは、通常通り「野菜代金」および「配送料」が発生いたします。なお、ベジコベは入会金や月額費用などは一切かかりませんのでご安心ください。</p>

        <h2 style="margin:0 0 10px;font-size:17px;color:#065f46;">【ベジコベ サービス資料】</h2>
        <p style="margin:0 0 16px;line-height:1.9;"><a href="${docUrl}" style="color:#047857;">${docUrl}</a></p>

        <p style="margin:0 0 8px;line-height:1.9;">システムの操作方法や野菜についてご不明な点がございましたら、そのままLINEのメッセージでお気軽にご質問いただけます。</p>
        <p style="margin:0 0 18px;line-height:1.9;">${recipient}のお店づくりを、美味しい神戸の野菜を通じて全力でサポートさせていただきます。</p>
        <p style="margin:0 0 18px;font-weight:700;">まずは公式LINEでのご登録を心よりお待ちしております！</p>

        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="margin:0;font-size:13px;line-height:1.8;color:#4b5563;">
          ベジコベ（運営：りふぁーむ）<br/>
          担当：松井 優人<br/>
          連絡先：090-9614-4516<br/>
          メール：refarmkobe@gmail.com
        </p>
      </div>
    </div>
  </div>`;

  return { text, html };
}

function buildAdminNotificationMailBody(data: {
  shopName: string;
  contactPerson: string;
  phone: string;
  email: string;
}) {
  const text = `フォーム入力がありました。

店舗名: ${data.shopName}
担当者名: ${data.contactPerson}
電話番号: ${data.phone}
メールアドレス: ${data.email}`;

  const html = `
  <div style="margin:0;background:#f8fafc;padding:24px 12px;font-family:'Noto Sans JP',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1f2937;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
      <div style="background:#111827;padding:16px 20px;color:#ffffff;">
        <h1 style="margin:0;font-size:18px;line-height:1.4;font-weight:700;">フォーム入力通知</h1>
      </div>
      <div style="padding:20px;">
        <p style="margin:0 0 14px;line-height:1.8;">LPフォームに新しい入力がありました。</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;width:160px;">店舗名</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.shopName}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">担当者名</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.contactPerson}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">電話番号</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.phone}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">メールアドレス</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.email}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>`;

  return { text, html };
}

// ---- バックエンド処理 (Notion API + Gmail SMTP) ----
async function addToNotion(data: {
  shopName: string;
  contactPerson: string;
  phone: string;
  email: string;
}) {
  const notionSecret = process.env.NOTION_SECRET;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionSecret || !notionDatabaseId) {
    throw new Error("NOTION_SECRET or NOTION_DATABASE_ID is not set.");
  }

  const dbResponse = await fetch(`https://api.notion.com/v1/databases/${notionDatabaseId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${notionSecret}`,
      "Notion-Version": "2022-06-28",
    },
  });

  if (!dbResponse.ok) {
    const error = await dbResponse.json();
    console.error("[Notion] Database schema fetch error:", JSON.stringify(error));
    throw new Error(`Notion DB schema error: ${JSON.stringify(error)}`);
  }

  const dbJson = await dbResponse.json();
  const dbProperties = (dbJson.properties ?? {}) as Record<string, { type?: string; options?: Array<{ name: string }> }>;

  const titleEntry = Object.entries(dbProperties).find(([, prop]) => prop?.type === "title");
  if (!titleEntry) {
    throw new Error("Notion database has no title property.");
  }

  const findPropertyByType = (type: string, preferredNames: string[]) => {
    for (const name of preferredNames) {
      if (dbProperties[name]?.type === type) return name;
    }
    return Object.entries(dbProperties).find(([, prop]) => prop?.type === type)?.[0];
  };

  const notionProperties: Record<string, unknown> = {
    [titleEntry[0]]: {
      title: [{ text: { content: data.shopName } }],
    },
  };

  const contactProperty = findPropertyByType("rich_text", ["担当者名", "ご担当者名", "担当者", "Contact Person"]);
  if (contactProperty) {
    notionProperties[contactProperty] = {
      rich_text: [{ text: { content: data.contactPerson } }],
    };
  }

  const phoneProperty = findPropertyByType("phone_number", ["電話番号", "TEL", "電話", "Phone"]);
  if (phoneProperty) {
    notionProperties[phoneProperty] = {
      phone_number: data.phone,
    };
  }

  const emailProperty = findPropertyByType("email", ["メールアドレス", "Email", "E-mail"]);
  if (emailProperty) {
    notionProperties[emailProperty] = {
      email: data.email,
    };
  }

  const statusProperty = findPropertyByType("select", ["ステータス", "Status"]);
  if (statusProperty) {
    notionProperties[statusProperty] = {
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
    const error = await response.json();
    console.error("[Notion] Error:", JSON.stringify(error));
    throw new Error(`Notion API error: ${JSON.stringify(error)}`);
  }

  console.log("[Notion] Page created successfully.");
}

async function sendAutoReplyEmail(data: {
  shopName: string;
  contactPerson: string;
  email: string;
}) {
  const gmailUser = process.env.GMAIL_USER || "refarmkobe@gmail.com";
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailAppPassword) {
    throw new Error("GMAIL_APP_PASSWORD is not set.");
  }

  const nodemailerModuleName = "nodemailer";
  const nodemailer = (await import(nodemailerModuleName)) as any;
  const transporter = nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const { text, html } = buildMailBody(data);

  await transporter.sendMail({
    from: `"ベジコベ" <${gmailUser}>`,
    to: data.email,
    subject: "【重要】お試し野菜のお申し込みありがとうございます / ベジコベ",
    text,
    html,
  });

  console.log(`[Gmail SMTP] Email sent to ${data.email}`);
}

async function sendAdminNotificationEmail(data: {
  shopName: string;
  contactPerson: string;
  phone: string;
  email: string;
}) {
  const gmailUser = process.env.GMAIL_USER || "refarmkobe@gmail.com";
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailAppPassword) {
    throw new Error("GMAIL_APP_PASSWORD is not set.");
  }

  const nodemailerModuleName = "nodemailer";
  const nodemailer = (await import(nodemailerModuleName)) as any;
  const transporter = nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const { text, html } = buildAdminNotificationMailBody(data);

  await transporter.sendMail({
    from: `"ベジコベ" <${gmailUser}>`,
    to: "refarmkobe@gmail.com",
    subject: "【ベジコベLP】フォーム入力通知",
    text,
    html,
    replyTo: data.email,
  });

  console.log("[Gmail SMTP] Admin notification sent to refarmkobe@gmail.com");
}
// ---- バックエンド処理 終わり ----

async function startServer() {
  const app = express();
  const server = createServer(app);

  // JSON body parsing
  app.use(express.json());

  // ---- API Routes ----
  app.post("/api/contact", async (req, res) => {
    const shopName = normalizeText(req.body?.shopName);
    const contactPerson = normalizeText(req.body?.contactPerson);
    const phone = normalizeText(req.body?.phone);
    const email = normalizeText(req.body?.email);

    // Basic validation
    if (!shopName || !contactPerson || !phone || !email) {
      return res.status(400).json({ message: "全ての項目を入力してください。" });
    }

    try {
      // 1. Notionデータベースに保存
      await addToNotion({ shopName, contactPerson, phone, email });

      // 2. 自動返信メール送信
      await sendAutoReplyEmail({ shopName, contactPerson, email });
      await sendAdminNotificationEmail({ shopName, contactPerson, phone, email });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("[/api/contact] Error:", error);
      return res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
  });
  // ---- API Routes 終わり ----

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
