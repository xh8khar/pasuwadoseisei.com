# パスワード生成 | pasuwadoseisei.com

パスワード生成のためのSEO最適化済み日本語Webサイト。Astroで構築し、Cloudflare Pagesにデプロイ可能。

## 技術スタック

- [Astro](https://astro.build/) v5 - Static Site Generator
- Vanilla CSS (Custom Properties)
- Cloudflare Pages デプロイ対応

## 開発

```bash
npm install
npm run dev      # 開発サーバー起動 (localhost:4321)
npm run build    # 本番ビルド (dist/ に出力)
npm run preview  # ビルド結果のプレビュー
```

## デプロイ (Cloudflare Pages)

### 方法1: Cloudflare Dashboard (推奨)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログイン
2. 「Workers & Pages」→「Pages」→「Connect to Git」
3. リポジトリを接続
4. ビルド設定:
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 環境変数は不要
6. デプロイ完了後、カスタムドメイン `pasuwadoseisei.com` を設定

### 方法2: Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy dist/ --project-name=pasuwadoseisei
```

### 方法3: 手動アップロード

`dist/` ディレクトリをCloudflare Pagesの管理画面からアップロード。

## サイト構成

### ツール (12個)
| URL | 内容 |
|-----|------|
| `/tools/password-generator` | パスワード生成（標準） |
| `/tools/8-digit-password-generator` | 8桁パスワード生成 |
| `/tools/12-digit-password-generator` | 12桁パスワード生成 |
| `/tools/16-digit-password-generator` | 16桁パスワード生成 |
| `/tools/strong-password-generator` | 強力なパスワード生成 |
| `/tools/pin-generator` | 暗証番号(PIN)生成 |
| `/tools/random-password-generator` | ランダムパスワード生成 |
| `/tools/id-generator` | ID・ユーザー名生成 |
| `/tools/bulk-password-generator` | 一括パスワード生成 |
| `/tools/memorable-password-generator` | 覚えやすいパスワード生成 |
| `/tools/special-character-password` | 記号入りパスワード生成 |
| `/tools/excel-password-generator` | Excel向けパスワード生成 |

### ブログ (22記事)
キーワード分析に基づいたSEO記事を22本用意。

### SEO設定
- 全ページに適切な title/meta description
- canonical URL設定
- Open Graph / Twitter Card対応
- パンくずリスト (JSON-LD対応)
- sitemap.xml
- robots.txt
- _headers（セキュリティヘッダー）
- _redirects（301リダイレクト）

## Google Search Console 設定

1. Search Console に `pasuwadoseisei.com` を登録
2. DNS確認またはHTMLファイルでの所有権確認
3. sitemap.xml を送信: `https://www.pasuwadoseisei.com/sitemap.xml`

## 注意点

- `src/layouts/BaseLayout.astro` の `google-site-verification` メタタグは実際の確認コードに書き換えること
- ファビコンはSVG形式。必要に応じて .ico ファイルに差し替え可能
