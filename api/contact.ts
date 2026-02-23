import { createHash } from "crypto";

type ContactPayload = {
  shopName?: string;
  contactPerson?: string;
  address?: string;
  phone?: string;
  email?: string;
  meta?: {
    eventId?: string;
    eventSourceUrl?: string;
    fbp?: string;
    fbc?: string;
  };
};

type RefarmInviteInfo = {
  inviteUrl: string;
  accessCode: string;
  expiresAt?: string;
  restaurantId?: number;
  created?: boolean;
};

type RefarmInvitePayload = Required<Pick<ContactPayload, "shopName" | "contactPerson" | "address" | "phone" | "email">>;

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

function extractPrefectureAndCity(address: string): { prefecture?: string; city?: string } {
  const normalized = address.trim();
  if (!normalized) return {};

  const prefMatch = normalized.match(/^(東京都|北海道|(?:京都|大阪)府|.{2,3}県)/);
  const prefecture = prefMatch?.[1];
  const withoutPref = prefecture ? normalized.slice(prefecture.length) : normalized;
  const cityMatch = withoutPref.match(/^(.+?[市区町村])/);
  const city = cityMatch?.[1];

  return { prefecture, city };
}

function getFirstHeaderValue(value: string | string[] | undefined): string | undefined {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

function resolveClientIp(req: any): string | undefined {
  const forwardedFor = getFirstHeaderValue(req.headers?.["x-forwarded-for"]);
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim();
  return getFirstHeaderValue(req.headers?.["x-real-ip"]) || req.socket?.remoteAddress;
}

async function sendMetaConversionEvent(data: {
  shopName: string;
  contactPerson: string;
  address: string;
  phone: string;
  email: string;
  eventId: string;
  eventSourceUrl?: string;
  fbp?: string;
  fbc?: string;
  clientUserAgent?: string;
  clientIpAddress?: string;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) return;

  const apiVersion = process.env.META_GRAPH_API_VERSION || "v22.0";
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;
  const siteUrl = process.env.SITE_URL;
  const { prefecture, city } = extractPrefectureAndCity(data.address);

  const userData: Record<string, unknown> = {
    client_user_agent: data.clientUserAgent,
    client_ip_address: data.clientIpAddress,
    em: [sha256(normalizeEmail(data.email))],
    ph: [sha256(normalizePhone(data.phone))],
    st: prefecture ? [sha256(prefecture)] : undefined,
    ct: city ? [sha256(city)] : undefined,
    fbp: data.fbp || undefined,
    fbc: data.fbc || undefined,
  };

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "CompleteRegistration",
        event_time: Math.floor(Date.now() / 1000),
        event_id: data.eventId,
        action_source: "website",
        event_source_url: data.eventSourceUrl || siteUrl,
        user_data: userData,
        custom_data: {
          content_name: "Form Submit Button Click",
          content_category: "LP Conversion",
          value: 1,
          currency: "JPY",
          shop_name: data.shopName,
          contact_person: data.contactPerson,
        },
      },
    ],
  };

  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const endpoint = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Meta CAPI error (${response.status}): ${errorText}`);
  }
}

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

function buildMailBody(data: { shopName: string; contactPerson: string; invite?: RefarmInviteInfo | null }) {
  const recipient = `${data.shopName} ${data.contactPerson}様`;
  const lineUrl = "https://lin.ee/UX0sUuD";
  const docUrl =
    "https://drive.google.com/file/d/1MMkfhqfWHBs3UVv-8mROUD9UYAT3J9rp/view?usp=sharing";
  const inviteSectionText = data.invite
    ? `
【初回ログイン手順（3ステップ）】
1. 公式LINEを友だち追加してください。
2. 下記の連携URLを公式LINEのトークに貼り付けて送信した後、そのままURLをタップしてください。（LINEからのみアクセス可能なURLのためです）
   連携URL: ${data.invite.inviteUrl}
3. ログイン画面で、下記の4桁パスワードを入力してください。
   4桁パスワード: ${data.invite.accessCode}

※上記URLは発行から7日で有効期限が切れます。
※期限切れの場合は、公式LINEに店名を入れてお問い合わせください。担当者がご案内します。`
    : `
【初回ログイン手順（3ステップ）】
1. 公式LINEを友だち追加してください。
2. 連携URLの案内を担当者から公式LINEでお送りします。トーク内に表示されたURLをタップしてください。
3. ログイン画面で、担当者から案内された4桁パスワードを入力してください。

※手順が分からない場合は、公式LINEに店名を入れてお問い合わせください。担当者が公式LINEでご案内します。`;

  const text = `${recipient}

この度は、神戸のこだわり野菜のお試しにお申し込みいただき、誠にありがとうございます。りふぁーむの松井と申します。

お試し野菜のお受け取り、および専用発注システムのご利用に向けて、まずは【公式LINEへのご登録】をお願いいたします。

▼公式LINEのご登録はこちら（1タップで完了します）
${lineUrl}
${inviteSectionText}

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

  const inviteSectionHtml = data.invite
    ? `
        <h2 style="margin:0 0 10px;font-size:17px;color:#065f46;">【初回ログイン手順（3ステップ）】</h2>
        <ol style="margin:0 0 14px;padding-left:20px;line-height:1.9;">
          <li>公式LINEを友だち追加してください。</li>
          <li>下記の連携URLを公式LINEのトークに貼り付けて送信した後、そのままURLをタップしてください。（LINEからのみアクセス可能なURLのためです）</li>
          <li>ログイン画面で、下記の4桁パスワードを入力してください。</li>
        </ol>
        <div style="background:#ecfeff;border:1px solid #a5f3fc;border-radius:12px;padding:14px;margin:0 0 18px;">
          <p style="margin:0 0 8px;font-size:13px;color:#155e75;">連携URL</p>
          <p style="margin:0 0 12px;word-break:break-all;"><a href="${data.invite.inviteUrl}" style="color:#0f766e;font-weight:700;">${data.invite.inviteUrl}</a></p>
          <p style="margin:0 0 6px;font-size:13px;color:#155e75;">4桁パスワード</p>
          <p style="margin:0;font-size:24px;letter-spacing:0.2em;font-weight:800;color:#0f766e;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">${data.invite.accessCode}</p>
        </div>
        <p style="margin:0 0 18px;font-size:13px;line-height:1.8;color:#0f172a;">※上記URLは発行から7日で有効期限が切れます。期限切れの場合は、公式LINEに店名を入れてお問い合わせください。担当者がご案内します。</p>
        <p style="margin:0 0 18px;font-size:13px;line-height:1.8;color:#0f172a;">※手順が分からない場合は、公式LINEに店名を入れてお問い合わせください。担当者が公式LINEでご案内します。</p>
    `
    : `
        <h2 style="margin:0 0 10px;font-size:17px;color:#065f46;">【初回ログイン手順（3ステップ）】</h2>
        <ol style="margin:0 0 18px;padding-left:20px;line-height:1.9;">
          <li>公式LINEを友だち追加してください。</li>
          <li>連携URLの案内を担当者から公式LINEでお送りします。トーク内に表示されたURLをタップしてください。</li>
          <li>ログイン画面で、担当者から案内された4桁パスワードを入力してください。</li>
        </ol>
        <p style="margin:0 0 18px;font-size:13px;line-height:1.8;color:#0f172a;">※手順が分からない場合は、公式LINEに店名を入れてお問い合わせください。担当者が公式LINEでご案内します。</p>
    `;

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
        ${inviteSectionHtml}

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
  address: string;
  phone: string;
  email: string;
  refarmResult?: RefarmInviteInfo | null;
  refarmError?: string | null;
}) {
  const refarmStatus = data.refarmResult
    ? `成功
連携URL: ${data.refarmResult.inviteUrl}
4桁パスワード: ${data.refarmResult.accessCode}
対象Restaurant ID: ${data.refarmResult.restaurantId ?? "N/A"}`
    : `失敗
理由: ${data.refarmError ?? "不明なエラー"}`;

  const text = `フォーム入力がありました。

店舗名: ${data.shopName}
担当者名: ${data.contactPerson}
所在地: ${data.address}
電話番号: ${data.phone}
メールアドレス: ${data.email}

refarm連携: ${refarmStatus}`;

  const refarmStatusHtml = data.refarmResult
    ? `
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">refarm連携</th>
            <td style="padding:8px;border:1px solid #e5e7eb;color:#065f46;font-weight:700;">成功</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">連携URL</th>
            <td style="padding:8px;border:1px solid #e5e7eb;word-break:break-all;">${data.refarmResult.inviteUrl}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">4桁パスワード</th>
            <td style="padding:8px;border:1px solid #e5e7eb;font-family:ui-monospace,monospace;font-weight:700;">${data.refarmResult.accessCode}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">Restaurant ID</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.refarmResult.restaurantId ?? "N/A"}</td>
          </tr>
    `
    : `
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">refarm連携</th>
            <td style="padding:8px;border:1px solid #e5e7eb;color:#b91c1c;font-weight:700;">失敗</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">失敗理由</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.refarmError ?? "不明なエラー"}</td>
          </tr>
    `;

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
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">所在地</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.address}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">電話番号</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.phone}</td>
          </tr>
          <tr>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;background:#f9fafb;">メールアドレス</th>
            <td style="padding:8px;border:1px solid #e5e7eb;">${data.email}</td>
          </tr>
          ${refarmStatusHtml}
        </table>
      </div>
    </div>
  </div>`;

  return { text, html };
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

async function addToNotion(data: Required<Pick<ContactPayload, "shopName" | "contactPerson" | "address" | "phone" | "email">>) {
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
    const error = await dbResponse.text();
    throw new Error(`Notion DB schema error: ${error}`);
  }

  const dbJson = await dbResponse.json();
  const dbProperties = (dbJson.properties ?? {}) as Record<string, { type?: string }>;
  const titleEntry = Object.entries(dbProperties).find(([, prop]) => prop?.type === "title");
  if (!titleEntry) {
    throw new Error("Notion database has no title property.");
  }

  const usedProperties = new Set<string>([titleEntry[0]]);
  const findPropertyByType = (type: string, preferredNames: string[], allowFallback = true) => {
    for (const name of preferredNames) {
      if (dbProperties[name]?.type === type && !usedProperties.has(name)) return name;
    }
    if (!allowFallback) return undefined;
    return Object.entries(dbProperties).find(([name, prop]) => prop?.type === type && !usedProperties.has(name))?.[0];
  };

  const notionProperties: Record<string, unknown> = {
    [titleEntry[0]]: {
      title: [{ text: { content: data.shopName } }],
    },
  };

  const contactProperty = findPropertyByType("rich_text", ["担当者名", "ご担当者名", "担当者", "Contact Person"]);
  if (contactProperty) {
    usedProperties.add(contactProperty);
    notionProperties[contactProperty] = {
      rich_text: [{ text: { content: data.contactPerson } }],
    };
  }

  const addressProperty = findPropertyByType("rich_text", ["所在地", "住所", "Address"], false);
  if (addressProperty) {
    usedProperties.add(addressProperty);
    notionProperties[addressProperty] = {
      rich_text: [{ text: { content: data.address } }],
    };
  }

  const phoneProperty = findPropertyByType("phone_number", ["電話番号", "TEL", "電話", "Phone"]);
  if (phoneProperty) {
    usedProperties.add(phoneProperty);
    notionProperties[phoneProperty] = {
      phone_number: data.phone,
    };
  }
  const emailProperty = findPropertyByType("email", ["メールアドレス", "Email", "E-mail"]);
  if (emailProperty) {
    usedProperties.add(emailProperty);
    notionProperties[emailProperty] = {
      email: data.email,
    };
  }
  const statusProperty = findPropertyByType("select", ["ステータス", "Status"]);
  if (statusProperty) {
    usedProperties.add(statusProperty);
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
    const error = await response.text();
    throw new Error(`Notion API error: ${error}`);
  }
}

async function registerRestaurantAndIssueInvite(payload: RefarmInvitePayload): Promise<RefarmInviteInfo> {
  const baseUrl = process.env.REFARM_API_BASE_URL;
  const apiKey = process.env.REFARM_LP_API_KEY;

  if (!baseUrl) {
    throw new Error("REFARM_API_BASE_URL is not set.");
  }
  if (!apiKey) {
    throw new Error("REFARM_LP_API_KEY is not set.");
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/integrations/lp/register_and_invite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-lp-api-key": apiKey,
    },
    body: JSON.stringify({
      shop_name: payload.shopName,
      contact_person: payload.contactPerson,
      address: payload.address,
      phone: payload.phone,
      email: payload.email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Refarm integration failed (${response.status}): ${errorText}`);
  }

  const json = (await response.json()) as {
    invite_url: string;
    access_code: string;
    expires_at?: string;
    restaurant_id?: number;
    created?: boolean;
  };

  return {
    inviteUrl: json.invite_url,
    accessCode: json.access_code,
    expiresAt: json.expires_at,
    restaurantId: json.restaurant_id,
    created: json.created,
  };
}

async function sendAutoReplyEmail(data: {
  shopName: string;
  contactPerson: string;
  email: string;
  invite?: RefarmInviteInfo | null;
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
}

async function sendAdminNotificationEmail(
  data: {
    shopName: string;
    contactPerson: string;
    address: string;
    phone: string;
    email: string;
    refarmResult?: RefarmInviteInfo | null;
    refarmError?: string | null;
  },
) {
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
    const address = normalizeText(payload.address);
    const phone = normalizeText(payload.phone);
    const email = normalizeText(payload.email);

    if (!shopName || !contactPerson || !address || !phone || !email) {
      return res.status(400).json({ message: "全ての項目を入力してください。" });
    }

    const eventId =
      normalizeText(payload.meta?.eventId) ||
      `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    const eventSourceUrl = normalizeText(payload.meta?.eventSourceUrl);
    const clientUserAgent = getFirstHeaderValue(req.headers?.["user-agent"]);
    const clientIpAddress = resolveClientIp(req);
    const fbp = normalizeText(payload.meta?.fbp);
    const fbc = normalizeText(payload.meta?.fbc);

    await addToNotion({ shopName, contactPerson, address, phone, email });

    let refarmInvite: RefarmInviteInfo | null = null;
    let refarmError: string | null = null;

    try {
      refarmInvite = await registerRestaurantAndIssueInvite({
        shopName,
        contactPerson,
        address,
        phone,
        email,
      });
    } catch (error) {
      refarmError = error instanceof Error ? error.message : "不明なエラー";
      console.error("[api/contact] Refarm integration failed:", error);
    }

    await sendAutoReplyEmail({ shopName, contactPerson, email, invite: refarmInvite });
    await sendAdminNotificationEmail({
      shopName,
      contactPerson,
      address,
      phone,
      email,
      refarmResult: refarmInvite,
      refarmError,
    });

    try {
      await sendMetaConversionEvent({
        shopName,
        contactPerson,
        address,
        phone,
        email,
        eventId,
        eventSourceUrl: eventSourceUrl || undefined,
        fbp: fbp || undefined,
        fbc: fbc || undefined,
        clientUserAgent,
        clientIpAddress,
      });
    } catch (error) {
      console.error("[api/contact] Meta CAPI send failed:", error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[api/contact] Error:", error);
    return res.status(500).json({ message: "サーバーエラーが発生しました。" });
  }
}
