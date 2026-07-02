# セットアップガイド — パスワード生成 (pasuwadoseisei.com)

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [ローカル開発環境](#2-ローカル開発環境)
3. [プロジェクト構成](#3-プロジェクト構成)
4. [開発ワークフロー](#4-開発ワークフロー)
5. [SEO運用ガイド](#5-seo運用ガイド)
6. [Cloudflare Pages デプロイ](#6-cloudflare-pages-デプロイ)
7. [Google Search Console 設定](#7-google-search-console-設定)
8. [Google Analytics 設定](#8-google-analytics-設定)
9. [運用チェックリスト](#9-運用チェックリスト)
10. [トラブルシューティング](#10-トラブルシューティング)

---

## 1. プロジェクト概要

`pasuwadoseisei.com` は日本語ユーザー向けのパスワード生成Webサイト。  
Google 検索経由でユーザーを獲得するためのSEOファースト設計。

- **URL**: https://www.pasuwadoseisei.com
- **フレームワーク**: Astro v5 (Static Site Generation)
- **デプロイ先**: Cloudflare Pages
- **言語**: 日本語 (ja)
- **ファビコン**: 鍵（ロック）アイコン SVG

### ターゲットキーワード（主要）

| キーワード | 検索意図 | 対策ページ |
|-----------|---------|-----------|
| パスワード生成 8桁 | 8桁パスワードを作りたい | `/tools/8-digit-password-generator/` |
| 安全なパスワードを自動生成 | 安全なパスワードが欲しい | `/tools/password-generator/` |
| パスワード生成 無料 | 無料ツールを探している | `/tools/` |
| ランダムパスワード | ランダムな文字列が欲しい | `/tools/random-password-generator/` |
| パスワード作成 安全 | 安全な作り方を知りたい | `/blog/safe-password-creation-tips/` |
| 強力なパスワードを 作成 する 方法 | How-to記事を求めている | `/blog/how-to-create-strong-password/` |

---

## 2. ローカル開発環境

### 必要条件

- **Node.js** >= 18.0.0（推奨: 20.x LTS）
- **npm** >= 9.0.0

### 初回セットアップ

```bash
# リポジトリをクローン
git clone <repository-url> pasuwadoseisei
cd pasuwadoseisei

# 依存関係をインストール
npm install

# 開発サーバーを起動（ホットリロード付き）
npm run dev
```

開発サーバーは `http://localhost:4321` で起動します。

### ビルド & プレビュー

```bash
# プロダクションビルド
npm run build

# ビルド結果の確認（ローカルプレビュー）
npm run preview
```

ビルド成果物は `dist/` ディレクトリに出力されます。

---

## 3. プロジェクト構成

```
pasuwadoseisei/
├── astro.config.mjs        # Astro設定（サイトURL、ビルド設定）
├── package.json             # 依存関係とスクリプト
├── tsconfig.json            # TypeScript設定
├── setup.md                 # ← このファイル
├── README.md                # 簡易README
├── public/                  # 静的ファイル（ビルド時にそのままコピー）
│   ├── favicon.svg          # ロックアイコンのファビコン
│   ├── robots.txt           # クローラー設定
│   ├── sitemap.xml          # XMLサイトマップ
│   ├── _headers             # Cloudflare Pages用セキュリティヘッダー
│   └── _redirects           # Cloudflare Pages用リダイレクトルール
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro     # 基本レイアウト（全ページ共通のmeta/OGP）
│   │   ├── ToolLayout.astro     # ツールページ用レイアウト
│   │   └── BlogLayout.astro     # ブログ記事用レイアウト
│   ├── components/
│   │   ├── Header.astro         # グローバルヘッダー
│   │   ├── Footer.astro         # グローバルフッター
│   │   ├── PasswordGenerator.astro  # パスワード生成UI（再利用可能）
│   │   └── RelatedTools.astro   # 関連ツール一覧
│   ├── pages/
│   │   ├── index.astro          # TOPページ
│   │   ├── tools/               # ツールページ（12ページ）
│   │   │   ├── index.astro
│   │   │   ├── password-generator.astro
│   │   │   ├── 8-digit-password-generator.astro
│   │   │   ├── 12-digit-password-generator.astro
│   │   │   ├── 16-digit-password-generator.astro
│   │   │   ├── strong-password-generator.astro
│   │   │   ├── pin-generator.astro
│   │   │   ├── random-password-generator.astro
│   │   │   ├── id-generator.astro
│   │   │   ├── bulk-password-generator.astro
│   │   │   ├── memorable-password-generator.astro
│   │   │   ├── special-character-password.astro
│   │   │   └── excel-password-generator.astro
│   │   └── blog/                 # ブログ記事（22記事）
│   │       ├── index.astro
│   │       ├── 8-digit-password-guide.astro
│   │       ├── auto-generate-safe-password.astro
│   │       ├── ... (全22記事)
│   └── styles/
│       └── global.css         # グローバルCSS（カスタムプロパティ）
└── dist/                      # ビルド出力（git管理外）
```

---

## 4. 開発ワークフロー

### 新しいツールを追加する

1. `src/pages/tools/` に `.astro` ファイルを作成
2. レイアウトに `ToolLayout` を使用
3. ツールのUIを `PasswordGenerator` コンポーネント（または独自実装）で構築
4. `public/sitemap.xml` にURLを追加
5. SEOタイトル・descriptionを設定
6. `src/components/RelatedTools.astro` にツールを追加
7. `src/pages/tools/index.astro` にツールを追加
8. ビルド確認: `npm run build`

### 新しいブログ記事を追加する

1. `src/pages/blog/` に `{slug}.astro` を作成
2. レイアウトに `BlogLayout` を使用
3. 記事カテゴリを設定（パスワードの基礎 / セキュリティ / ツール比較 / テクニック）
4. 狙うキーワードをtitle・description・h1・h2に自然に配置
5. `src/pages/blog/index.astro` の `posts` 配列に追加
6. `public/sitemap.xml` にURLを追加
7. ビルド確認: `npm run build`

### CSSを変更する

- グローバルなスタイルは `src/styles/global.css` に記述
- コンポーネント固有のスタイルは各 `.astro` ファイルの `<style>` タグに記述
- カラーはCSSカスタムプロパティ（`--primary`, `--text` など）経由で定義

---

## 5. SEO運用ガイド

### 月次SEOタスク

- [ ] Google Search Consoleで掲載順位・クリック数を確認
- [ ] 新規キーワードの発見と記事追加
- [ ] 既存記事の内容更新（年に1回程度）
- [ ] サイトスピードの確認（PageSpeed Insights）
- [ ] 被リンク状況の確認

### 各ページのSEO設定項目

| 項目 | 設定内容 |
|------|---------|
| `<title>` | 30〜60文字。キーワードを含め、`| パスワード生成` で締める |
| `<meta description>` | 100〜160文字。キーワードを含め、クリックしたくなる文章 |
| `<link rel="canonical">` | 重複コンテンツ防止。全ページに設定済み |
| `og:title` / `og:description` | SNSシェア用。title/descriptionと同一でOK |
| 見出し構造 | h1 → h2 → h3 の順序を守る |
| パンくずリスト | 全ページに設置済み（JSON-LD対応） |
| URL | 日本語を含めない、`kebab-case` を使用 |
| 内部リンク | 関連ツール・関連記事へのリンクを設置 |
| 画像alt属性 | 装飾画像以外はaltテキストを設定 |

### キーワード選定基準

Search Consoleのデータから、以下の条件で優先順位をつける：

1. **掲載順位 10〜30位** かつ 表示回数が多いもの → 対策しやすい
2. **掲載順位 4〜10位** → もう少しで上位表示できる
3. **表示回数は少ないが、関連性が高いもの** → 記事を充実させたい
4. **clicks=0 だが impressions が多いもの** → クリック率改善の余地あり

---

## 6. Cloudflare Pages デプロイ

### 方法A: Git連携（推奨）

1. リポジトリを GitHub / GitLab にプッシュ
2. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Pages
3. 「Connect to Git」でリポジトリを選択
4. ビルド設定:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. 環境変数: なし
6. 「Save and Deploy」
7. デプロイ完了後、「Custom domains」から `pasuwadoseisei.com` を設定
8. DNS設定が自動または手動で行われます

### 方法B: Wrangler CLI

```bash
# Wranglerをインストール
npm install -g wrangler

# Cloudflareにログイン
wrangler login

# デプロイ
wrangler pages deploy dist/ --project-name=pasuwadoseisei

# プレビューブランチ（ staging ）
wrangler pages deploy dist/ --project-name=pasuwadoseisei --branch=staging
```

### 方法C: 手動アップロード

1. `npm run build` を実行
2. Cloudflare Pages の管理画面を開く
3. 「Upload assets」から `dist/` ディレクトリをドラッグ＆ドロップ
4. デプロイ完了

### カスタムドメイン設定

1. Cloudflare Pages → 該当プロジェクト → Custom domains
2. 「Set up a custom domain」をクリック
3. `pasuwadoseisei.com` を入力
4. DNSレコードが自動的に追加される
5. SSL/TLS証明書も自動発行

### リダイレクト設定

`public/_redirects` ファイル（Cloudflare Pages で自動適用）:

| ルール | 内容 |
|--------|------|
| `/tools/password-8-digit → /tools/8-digit-password-generator` | 旧URLからの301リダイレクト |
| `/tools/password-12-digit → /tools/12-digit-password-generator` | 同上 |
| `/tools/password-16-digit → /tools/16-digit-password-generator` | 同上 |
| `/tools/pin-code-generator → /tools/pin-generator` | 同上 |

### セキュリティヘッダー

`public/_headers` ファイルで全ページに以下を設定済み:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 7. Google Search Console 設定

### 初期設定

1. [Google Search Console](https://search.google.com/search-console/) にアクセス
2. 「URL プレフィックス」に `https://www.pasuwadoseisei.com` を入力
3. 所有権確認方法を選択：
   - **推奨**: DNS 確認（TXTレコードをDNSに追加）
   - **代替**: HTML タグ確認（`src/layouts/BaseLayout.astro` の `google-site-verification` を書き換え）
4. 所有権確認後、sitemap.xml を登録: `https://www.pasuwadoseisei.com/sitemap.xml`

### 運用モニタリング

確認すべき項目（週1回推奨）:

- **パフォーマンス** → 検索クエリの表示回数・クリック数・CTR・掲載順位
- **掲載** → インデックス登録されたページ数（全37ページが登録されているか）
- **URL検査** → 新規追加・更新したページがインデックスされているか

### インデックス改善

新規ページを追加したら Search Console で「URL検査」→「インデックス登録をリクエスト」を実行。

---

## 8. Google Analytics 設定

### Google Analytics 4 の設置

1. [Google Analytics](https://analytics.google.com/) で GA4 プロパティを作成
2. 測定ID（`G-XXXXXXXXXX`）を取得
3. `src/layouts/BaseLayout.astro` の `<head>` 内にトラッキングコードを追加:

```astro
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

注意: このコードは Astro の `<script>` タグではクライアントサイドで動作させるため、`is:inline` ディレクティブが必要です。

実際の実装:

```astro
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 9. 運用チェックリスト

### 初回デプロイ前

- [ ] `google-site-verification` を実際の確認コードに書き換える
- [ ] Astro設定の `site` が正しいURLになっている
- [ ] `sitemap.xml` のURLがすべて正しい
- [ ] `robots.txt` が正しいSitemap URLを指している
- [ ] `_headers` / `_redirects` が正しい
- [ ] `npm run build` が成功する
- [ ] `npm run preview` で全ページが表示できる
- [ ] 全ツールが正しく動作する（パスワード生成→コピー）
- [ ] モバイル表示が崩れていない
- [ ] ファビコンが表示される

### デプロイ後（毎週）

- [ ] Search Console で新規キーワードをチェック
- [ ] 404エラーがないか確認
- [ ] サイトスピードを確認（Core Web Vitals）
- [ ] インデックス状況を確認

### デプロイ後（毎月）

- [ ] 表示回数が増えているキーワードの記事を強化
- [ ] 古い記事の内容を更新
- [ ] 新規キーワードに対応した記事を追加
- [ ] 競合サイトの動向をチェック

---

## 10. トラブルシューティング

### ビルドが失敗する

```bash
# node_modules をクリア
rm -rf node_modules
npm install

# Astroのキャッシュをクリア
rm -rf dist
npm run build
```

### 開発サーバーが起動しない

```bash
# ポートの競合を確認
lsof -i :4321
# 別のポートで起動
npx astro dev --port 4322
```

### ツールのJavaScriptが動かない

1. ブラウザの開発者ツールでコンソールエラーを確認
2. `PasswordGenerator.astro` の `<script>` タグ内のDOM参照が正しいか確認
3. コンポーネントの `id` プロパティが一意であることを確認

### Cloudflare Pages で404エラー

1. `dist/` ディレクトリに該当のHTMLが存在するか確認
2. SPAモードが必要な場合は `public/_redirects` にルールを追加
3. Cloudflare Pages の設定で「Not found behavior」を確認

### Sitemapが認識されない

1. `https://www.pasuwadoseisei.com/sitemap.xml` にアクセスできるか確認
2. `robots.txt` のSitemap URLが正しいか確認
3. Search Console で再送信

---

> **最終更新**: 2025年7月  
> **保守者**: yosin  
> **スタック**: Astro + Cloudflare Pages
