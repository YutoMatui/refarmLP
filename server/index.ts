import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---- バックエンド処理 (Notion API + Resend) ----
async function addToNotion(data: {
  shopName: string;
  contactPerson: string;
  phone: string;
  email: string;
}) {
  const notionSecret = process.env.NOTION_SECRET;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  if (!notionSecret || !notionDatabaseId) {
    console.warn("[Notion] NOTION_SECRET or NOTION_DATABASE_ID is not set. Skipping.");
    return;
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
      properties: {
        // タイトル（店名）
        Name: {
          title: [{ text: { content: data.shopName } }],
        },
        // 担当者名
        担当者名: {
          rich_text: [{ text: { content: data.contactPerson } }],
        },
        // 電話番号
        電話番号: {
          phone_number: data.phone,
        },
        // メールアドレス
        メールアドレス: {
          email: data.email,
        },
        // ステータス（SelectまたはStatus型）
        ステータス: {
          select: { name: "04_フォーム入力済み" },
        },
      },
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
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || "noreply@refarmkobe.com";

  if (!resendApiKey) {
    console.warn("[Resend] RESEND_API_KEY is not set. Skipping email.");
    return;
  }

  const emailBody = `${data.shopName} ${data.contactPerson}様

この度は、神戸のこだわり野菜仕入れサービス「ベジコベ」のお試し（1000円分）にお申し込みいただき、誠にありがとうございます。りふぁーむの松井と申します。

お試し野菜の受け取り、および専用発注アカウントの発行を進めるため、【以下の公式LINEへのご登録】をお願いいたします。

▼公式LINEのご登録はこちら（1タップで完了します）
https://lin.ee/UX0sUuD

【LINE登録後の流れ】
1. 上記URLよりLINEの「友だち追加」をお願いします。
2. 後ほどベジコベのお客様専用アカウントを発行いたします。
3. スマホから簡単に、1000円分のお好きな野菜をご注文いただけます！

※操作方法などでご不明な点がございましたら、そのままLINEのメッセージでお気軽にご質問ください。
※より詳細なベジコベのサービス資料はこちらからご確認いただけます：
[※資料URL]

お店づくり、そして神戸のお客さまに喜ばれるメニュー作りを、美味しい野菜を通じて全力でサポートさせていただきます。
公式LINEでのご登録をお待ちしております！

--------------------------------------------------
ベジコベ（運営：りふぁーむ）
担当：松井 優人
--------------------------------------------------`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [data.email],
      subject:
        "【重要】お試し野菜（1000円分）のお申し込みありがとうございます / ベジコベ",
      text: emailBody,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("[Resend] Error:", JSON.stringify(error));
    throw new Error(`Resend API error: ${JSON.stringify(error)}`);
  }

  console.log(`[Resend] Email sent to ${data.email}`);
}
// ---- バックエンド処理 終わり ----

async function startServer() {
  const app = express();
  const server = createServer(app);

  // JSON body parsing
  app.use(express.json());

  // ---- API Routes ----
  app.post("/api/contact", async (req, res) => {
    const { shopName, contactPerson, phone, email } = req.body;

    // Basic validation
    if (!shopName || !contactPerson || !phone || !email) {
      return res.status(400).json({ message: "全ての項目を入力してください。" });
    }

    try {
      // 1. Notionデータベースに保存
      await addToNotion({ shopName, contactPerson, phone, email });

      // 2. 自動返信メール送信
      await sendAutoReplyEmail({ shopName, contactPerson, email });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("[/api/contact] Error:", error);
      // Notion/Resendのエラーがあってもユーザー体験を壊さないためにエラーを握りつぶさず記録するが、
      // 送信成功として返す（データが消えるよりも体験の連続性を優先する場合はtrueにする）
      // 厳密にしたい場合は以下をコメントアウト解除:
      // return res.status(500).json({ message: "サーバーエラーが発生しました。" });
      return res.status(200).json({ success: true });
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
