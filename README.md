# VegeKobe LP

神戸・三宮エリアの飲食店オーナー向け野菜仕入れサービス「ベジコベ」のランディングページです。

## 主な変更点

1.  **デザイン刷新**:
    *   ヒーローセクションにスマホモックアップを配置し、直感的な操作感を訴求。
    *   ベジコベのロゴ（添付画像）をヘッダー・フッター・ヒーローに配置。
    *   アイコンを刷新（プレースホルダーまたはAI生成画像を使用）。

2.  **コンテンツ強化**:
    *   **Solution Grid**: 9つのメリットを「タノム風」グリッドで訴求。
    *   **Marketing Support**: リピートに繋がる「野菜の物語」の仕組みを解説。
    *   **Onboarding Flow**: 導入までの4ステップを可視化。
    *   **Pricing**: 3つのプランを比較しやすく表示。

3.  **GA4計測実装**:
    *   `src/lib/gtag.ts` にユーティリティを実装。
    *   主要アクション（LINE登録、スクロール、FAQ開閉など）にイベントトラッキングを設定。
    *   `src/components/GoogleAnalytics.tsx` で初期化処理を実装。

## 設定

### Google Analytics 4

`client/src/lib/gtag.ts` の `GA_MEASUREMENT_ID` をご自身の測定ID（G-XXXXXXXXXX）に変更してください。

```typescript
// client/src/lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

## 開発・ビルド

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

## 画像アセット

*   `client/public/images/logo.png`: ベジコベロゴ
*   `client/public/images/hero-smartphone-mockup.png`: AI生成のヒーロー画像
*   `client/public/images/icons/*`: アイコン類（現在はプレースホルダーが一部含まれます。必要に応じて差し替えてください）
