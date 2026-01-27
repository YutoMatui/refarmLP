# Meta Pixel コンバージョントラッキング設定

## 概要
Meta（Facebook）広告のコンバージョンを計測するため、Meta Pixelコードを実装しました。
これにより、LINE公式アカウントへの遷移や資料ダウンロードのリクエストを計測できるようになります。

## 実装内容

### 1. Meta Pixelコードの追加
**ファイル**: `client/index.html`

Meta Pixel ID: `1860893351213953` を使用して、以下を実装しました：
- Pixel初期化コード（`<head>`タグ内に追加）
- PageView イベントの自動トラッキング
- JavaScriptが無効な環境でも動作する`<noscript>`タグ

### 2. Meta Pixel ユーティリティライブラリの作成
**ファイル**: `client/src/lib/fbpixel.ts`

以下の関数を実装：

#### 主要なトラッキング関数
- **`trackLineClick(location: string)`**
  - LINE公式アカウントへの遷移時に呼び出される
  - Facebookの標準イベント「Lead」を送信
  - パラメータ:
    - `content_name`: "LINE Registration"
    - `content_category`: "Conversion"
    - `value`: 1（重要度を示す値）
    - `source`: クリック元のセクション名

- **`trackDownloadClick(location: string)`**
  - 資料ダウンロードリクエスト時に呼び出される
  - Facebookの標準イベント「Lead」を送信
  - パラメータ:
    - `content_name`: "Document Download"
    - `content_category`: "Conversion"
    - `value`: 0.5
    - `source`: クリック元のセクション名

#### その他の関数
- `trackPageScroll()`: セクション閲覧のトラッキング
- `trackFAQOpen()`: FAQ開閉のトラッキング

### 3. 各コンポーネントへのトラッキング実装

以下のすべてのCTAボタンにMeta Pixelトラッキングを追加しました：

#### HeroSection
**ファイル**: `client/src/components/HeroSection.tsx`
- 「LINEで無料相談を始める」ボタン → `trackLineClick("Hero Section")`
- 「資料をダウンロード」ボタン → `trackDownloadClick("Hero Section")`

#### CTASection
**ファイル**: `client/src/components/CTASection.tsx`
- 「早わかり資料を見る」ボタン → `trackDownloadClick("CTA Section")`
- 「LINEから無料相談する」ボタン → `trackLineClick("CTA Section")`

#### FooterCTASection
**ファイル**: `client/src/components/FooterCTASection.tsx`
- 「無料で利用開始」ボタン → `trackLineClick("Footer CTA Section")`
- 「資料請求」ボタン → `trackDownloadClick("Footer CTA Section")`

#### StickyCTA（モバイル固定CTA）
**ファイル**: `client/src/components/StickyCTA.tsx`
- 「無料で利用開始」ボタン → `trackLineClick("Sticky CTA")`
- 「資料請求」ボタン → `trackDownloadClick("Sticky CTA")`

#### Header（ヘッダーナビゲーション）
**ファイル**: `client/src/components/Header.tsx`
- デスクトップとモバイルメニューの両方のCTAボタン
- 「LINEで相談する」ボタン → `trackLineClick("Header")`
- 「資料請求」ボタン → `trackDownloadClick("Header")`

## トラッキングされるイベント

### 標準イベント
1. **PageView**（自動）
   - ページ読み込み時に自動的に送信
   - ユーザーがLPを訪問したことを記録

2. **Lead**（カスタム実装）
   - LINE登録またはダウンロードリクエストが発生した時に送信
   - コンバージョンとして計測される

### カスタムイベント（将来の拡張用）
- `SectionView`: セクション閲覧
- `FAQOpen`: FAQ開閉

## Meta広告マネージャーでの確認方法

### 1. イベントマネージャーで確認
1. Meta広告マネージャーにログイン
2. 「イベントマネージャー」を開く
3. Pixel ID `1860893351213953` を選択
4. 「概要」タブで以下のイベントが記録されているか確認：
   - PageView
   - Lead

### 2. コンバージョンAPIとの連携
Meta Pixel Event Test Tool を使用してリアルタイムでイベントをテストできます：
https://developers.facebook.com/tools/pixel/

### 3. カスタムコンバージョンの設定
広告マネージャーで以下のようなカスタムコンバージョンを作成できます：
- イベント: `Lead`
- パラメータ: `content_name` = "LINE Registration"
- コンバージョン名: "LINE登録"

## デバッグ方法

### ブラウザのコンソールで確認
1. ブラウザの開発者ツールを開く（F12）
2. コンソールタブを選択
3. 以下のコマンドで`fbq`が正しく読み込まれているか確認：
```javascript
console.log(window.fbq);
```

### Meta Pixel Helperの使用
Chrome拡張機能「Meta Pixel Helper」をインストールすると、
ページ上でPixelが正しく動作しているかリアルタイムで確認できます。

ダウンロード: https://chrome.google.com/webstore/detail/meta-pixel-helper/

## 注意事項

1. **プライバシーポリシー**
   - Meta Pixelの使用をプライバシーポリシーに明記する必要があります
   - クッキーの使用について利用者に通知が必要です

2. **GA4との併用**
   - このLP�は既にGA4トラッキングも実装されています
   - Meta PixelとGA4は独立して動作し、互いに干渉しません
   - 両方のデータを比較することで、より正確な分析が可能です

3. **iOS 14.5以降の制限**
   - Apple ATT（App Tracking Transparency）により、一部のユーザーでトラッキングが制限される可能性があります
   - Metaのコンバージョン API（サーバーサイド）の導入も検討してください

## 今後の拡張案

1. **より詳細なイベントトラッキング**
   - スクロール深度のトラッキング
   - 滞在時間のトラッキング
   - フォーム入力の開始・完了トラッキング

2. **カスタムオーディエンスの活用**
   - Pixelデータを使用したリターゲティング
   - 類似オーディエンスの作成

3. **コンバージョンAPIの実装**
   - サーバーサイドでのイベント送信
   - ブラウザの制限を回避した正確なトラッキング

## 参考リンク

- [Meta Pixel 公式ドキュメント](https://developers.facebook.com/docs/meta-pixel)
- [標準イベントの一覧](https://developers.facebook.com/docs/meta-pixel/reference)
- [コンバージョンAPIのガイド](https://developers.facebook.com/docs/marketing-api/conversions-api)
