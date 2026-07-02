# Password Generator — pasuwadoseisei.com

An SEO-optimized Japanese password generator website built with Astro, deployable to Cloudflare Pages.  
Targets Japanese users searching for password generation tools, with 12 interactive tools and 22 blog posts.

## Site Overview

| Item | Value |
|------|-------|
| **URL** | https://www.pasuwadoseisei.com |
| **Language** | Japanese (ja) |
| **Framework** | Astro v5 (Static Site Generator) |
| **Deploy Target** | Cloudflare Pages |
| **Total Pages** | 40 (12 tools + 22 blog posts + 5 utility pages) |
| **Build Size** | ~912 KB |
| **Build Time** | ~400ms |

## Feature Image

The site's main OG image is located at:

```
public/images/password-generator-og.jpg
```

This 1200×630 JPEG is used as the default Open Graph and Twitter Card image across all pages. Individual pages can override it via the `ogImage` prop on layouts.

## Tech Stack

- **[Astro](https://astro.build/)** v5 — Static site generator with zero-JS by default
- **Vanilla CSS** — Custom properties, responsive design, print styles
- **JavaScript** — Client-side only for interactive password generators (CSPRNG via `Crypto.getRandomValues()`)
- **Cloudflare Pages** — Global CDN deployment with automatic HTTPS

## Project Structure

```
pasuwadoseisei/
├── astro.config.mjs          # Astro config (site URL, compression, inline CSS)
├── package.json               # Dependencies and scripts
├── setup.md                   # Full setup guide (Japanese)
├── readme_eng.md              # This file
├── public/                    # Static assets (copied as-is to dist/)
│   ├── favicon.svg            # Lock icon SVG favicon
│   ├── robots.txt             # Crawler rules
│   ├── sitemap.xml            # XML sitemap (37 URLs)
│   ├── _headers               # Cloudflare Pages security headers
│   ├── _redirects             # Cloudflare Pages redirect rules
│   └── images/
│       └── password-generator-og.jpg   # Default OG image (1200×630)
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Global shell (meta, OGP, JSON-LD, header, footer)
│   │   ├── ToolLayout.astro   # Tool page layout (HowTo + SoftwareApp schema)
│   │   └── BlogLayout.astro   # Blog post layout (Article schema)
│   ├── components/
│   │   ├── Header.astro       # Sticky header with lock icon SVG
│   │   ├── Footer.astro       # 4-column footer with links
│   │   ├── PasswordGenerator.astro  # Reusable PW gen UI (vanilla JS + CSPRNG)
│   │   ├── StructuredData.astro     # JSON-LD generator (10 schema types)
│   │   └── RelatedTools.astro       # Related tools grid
│   ├── pages/
│   │   ├── index.astro        # Homepage (hero + tool + FAQ + stats + features)
│   │   ├── about.astro        # About page (E-E-A-T: author info, founding date)
│   │   ├── contact.astro      # Contact page (trust signal)
│   │   ├── privacy.astro      # Privacy policy (trust signal)
│   │   ├── tools/             # 12 tool pages
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
│   │   └── blog/              # 22 blog posts
│   │       ├── index.astro
│   │       └── *.astro
│   └── styles/
│       └── global.css         # Global styles (custom properties, responsive, print)
└── dist/                      # Build output (git-ignored)
```

## Tools (12 types)

| Tool | Description | URL |
|------|-------------|-----|
| Password Generator (Standard) | Customizable length & char types, strength meter | `/tools/password-generator/` |
| 8-Digit Password Generator | Fixed 8-char passwords | `/tools/8-digit-password-generator/` |
| 12-Digit Password Generator | Fixed 12-char passwords | `/tools/12-digit-password-generator/` |
| 16-Digit Password Generator | Fixed 16-char high-security passwords | `/tools/16-digit-password-generator/` |
| Strong Password Generator | All char types, 16-char default | `/tools/strong-password-generator/` |
| PIN Code Generator | 4–8 digit numeric PINs | `/tools/pin-generator/` |
| Random Password Generator | CSPRNG-based fully random passwords | `/tools/random-password-generator/` |
| ID / Username Generator | Random alphanumeric IDs | `/tools/id-generator/` |
| Bulk Password Generator | Generate 5–100 passwords at once | `/tools/bulk-password-generator/` |
| Memorable Password Generator | Word-based passphrases | `/tools/memorable-password-generator/` |
| Special Character Password | Symbol-rich high-complexity passwords | `/tools/special-character-password/` |
| Excel-Friendly Generator | Alphanumeric only (no symbols) | `/tools/excel-password-generator/` |

## Blog Posts (22 articles)

All posts target keywords from Google Search Console data. Categories: パスワードの基礎 (Password Basics), セキュリティ (Security), ツール比較 (Tool Comparison), テクニック (Techniques).

Key articles include:
- 8-Digit Password Guide (`/blog/8-digit-password-guide/`)
- How to Auto-Generate Safe Passwords (`/blog/auto-generate-safe-password/`)
- 12-Digit Password Guide (`/blog/12-digit-password-guide/`)
- How to Create Strong Passwords (`/blog/how-to-create-strong-password/`)
- Password Reuse Risks (`/blog/password-reuse-risks/`)
- And 17 more...

## SEO Features Implemented

### Structured Data (JSON-LD) — 10 types
| Type | Where | Purpose |
|------|-------|---------|
| `WebSite` | All pages | Site identity + search action |
| `Organization` | All pages | E-E-A-T: organization info |
| `BreadcrumbList` | All pages (with breadcrumbs) | Rich snippet in SERP |
| `FAQPage` | Home + 5 tool pages | FAQ rich snippet eligibility |
| `HowTo` | 4 tool pages | How-to rich snippet eligibility |
| `SoftwareApplication` | Home + tool pages | App-style rich snippet |
| `Article` | Blog posts | Article rich snippet + author info |
| `SearchAction` | Home | Site search in SERP |
| `Offer` | Tool pages | Price = 0 (free) badge |
| `Question`+`Answer` | FAQ sections | Q&A rich snippet |

### E-E-A-T Signals
- **Experience**: 12 tools + 22 articles demonstrating domain expertise
- **Expertise**: Cryptographic random number generator (`Crypto.getRandomValues()`), password strength calculator
- **Authoritativeness**: `/about` page (founder name, founding date, location), `/contact` page, `/privacy` policy
- **Trustworthiness**: 100% client-side processing (no server data transmission), HTTPS, security headers

### On-Page SEO (per-page)
- Individual `<title>` (30–60 chars with keyword)
- `<meta name="description">` (100–160 chars with keyword)
- `<link rel="canonical">`
- `<meta name="robots">` (index,follow with max-snippet/max-image-preview)
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`)
- Twitter Card (`summary_large_image` with `twitter:site`)
- `hreflang` (ja + x-default)
- Proper heading hierarchy (h1 → h2 → h3)
- Internal linking (RelatedTools, footer navigation, contextual links)

### Performance Optimizations
- Static site generation (no server-side processing at request time)
- CSS auto-inlining (`inlineStylesheets: 'auto'`)
- Google Fonts with `preconnect` + `preload`
- `font-display: swap` to prevent FOIT
- HTML compression (`compressHTML: true`)
- Responsive images (max-width 100%)
- Touch-friendly tap targets

### Accessibility (a11y)
- ARIA labels on interactive elements
- `:focus-visible` outlines
- Semantic HTML5 elements
- `sr-only` screen-reader-only text
- `role="alert"` on toast notifications
- `prefers-reduced-motion` support
- Proper `lang="ja"` attribute

### Technical
- `robots.txt` with sitemap reference
- `sitemap.xml` (37 URLs with priority + changefreq)
- `_headers` (Cloudflare Pages security headers)
- `_redirects` (Cloudflare Pages 301 redirects)
- Mobile-first responsive design
- Print stylesheet (`@media print`)
- `theme-color`, `color-scheme`, `mobile-web-app-capable` meta tags

## Development

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build → dist/
npm run preview      # Preview production build
```

## Deployment (Cloudflare Pages)

### Method 1: Git Integration (Recommended)
1. Push repo to GitHub/GitLab
2. Cloudflare Dashboard → Workers & Pages → Pages → Connect to Git
3. Build settings:
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Build output**: `dist`
4. Set custom domain: `pasuwadoseisei.com`

### Method 2: Direct Upload
Just upload the `dist/` folder via Cloudflare Pages dashboard.

### Method 3: Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist/ --project-name=pasuwadoseisei
```

## Google Search Console Setup

1. Register `pasuwadoseisei.com` in Search Console
2. Verify ownership (DNS TXT record recommended)
3. Submit sitemap: `https://www.pasuwadoseisei.com/sitemap.xml`
4. Replace the `google-site-verification` meta tag in `src/layouts/BaseLayout.astro` with your actual verification code

## Google Analytics Setup

Add your GA4 measurement ID to `src/layouts/BaseLayout.astro`:

```astro
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Adding a New Tool Page

1. Create `src/pages/tools/your-tool.astro`
2. Use `ToolLayout` with FAQ/HowTo data
3. Add interactive UI (extend `PasswordGenerator` or write custom)
4. Update `src/components/RelatedTools.astro`
5. Update `src/pages/tools/index.astro`
6. Add URL to `public/sitemap.xml`
7. Run `npm run build` to verify

## Adding a New Blog Post

1. Create `src/pages/blog/your-slug.astro`
2. Use `BlogLayout` with title, description, date, category
3. Add to the `posts` array in `src/pages/blog/index.astro`
4. Add URL to `public/sitemap.xml`
5. Target relevant keywords in title, headings, and body
6. Include internal links to relevant tools

## Key SEO Tasks (Weekly)

- [ ] Check Google Search Console for new keyword opportunities
- [ ] Monitor indexing status (all 40 pages should be indexed)
- [ ] Check for 404 errors
- [ ] Review Core Web Vitals in PageSpeed Insights

## Key SEO Tasks (Monthly)

- [ ] Update 1–2 existing blog posts with fresh content
- [ ] Write 1 new blog post targeting a rising keyword
- [ ] Audit internal linking structure
- [ ] Check competitor rankings and content gaps

## License & Copyright

&copy; 2024-2025 Yosin / pasuwadoseisei.com  
All rights reserved.
