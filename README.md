# 🌿 Healthy Vibes Hub

**A production-ready, fully SEO-optimized premium health & wellness website built with Next.js 14.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/healthyvibeshub)

---

## 🚀 Features

- ✅ **Full SEO** — sitemap.xml, robots.txt, canonical URLs, meta tags, Open Graph, Twitter Cards
- ✅ **Schema Markup** — Organization, WebSite, FAQPage, BreadcrumbList JSON-LD
- ✅ **EEAT Compliance** — About, Authors, Editorial Guidelines, Contact, Privacy, Terms, Cookies
- ✅ **10 Health Categories** — Nutrition, Fitness, Mental Health, Sleep, Weight Loss, Women's, Men's, Beauty, Recipes, Blog
- ✅ **AdSense Ready** — Premium ad placements (leaderboard, sidebar, in-content, rectangle, mobile banner)
- ✅ **RSS Feed** — `/feed.xml` for content syndication
- ✅ **Newsletter Page** — Full subscription landing page
- ✅ **Search Page** — Site-wide search functionality
- ✅ **404 Page** — Custom not found page
- ✅ **Responsive** — Mobile-first, works on all devices
- ✅ **Performance** — Lazy-loaded images, no render blocking, Vercel-optimized
- ✅ **Security Headers** — XSS, CSRF, clickjacking protection via Vercel config

---

## 📁 Project Structure

```
healthyvibeshub/
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout + global SEO + Schema
│   │   ├── page.tsx              ← Homepage
│   │   ├── sitemap.ts            ← Auto-generated sitemap.xml
│   │   ├── robots.ts             ← robots.txt
│   │   ├── not-found.tsx         ← 404 page
│   │   ├── feed.xml/route.ts     ← RSS feed
│   │   ├── nutrition/page.tsx
│   │   ├── fitness/page.tsx
│   │   ├── mental-health/page.tsx
│   │   ├── sleep/page.tsx
│   │   ├── weight-loss/page.tsx
│   │   ├── womens-health/page.tsx
│   │   ├── mens-health/page.tsx
│   │   ├── beauty-skin/page.tsx
│   │   ├── recipes/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── authors/page.tsx
│   │   ├── editorial-guidelines/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-of-use/page.tsx
│   │   ├── cookie-policy/page.tsx
│   │   ├── sitemap/page.tsx      ← HTML sitemap
│   │   ├── search/page.tsx
│   │   └── newsletter/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AdUnit.tsx            ← Replace with real AdSense code
│   │   ├── BackToTop.tsx
│   │   └── CategoryPageTemplate.tsx
│   └── styles/
│       └── globals.css
├── next.config.js
├── vercel.json
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## 🚀 Deploy to Vercel

### Option 1 — Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Set your custom domain: `healthyvibeshub.com`

### Option 3 — One-Click Deploy
Click the **Deploy with Vercel** button at the top of this README.

---

## 💰 Google AdSense Integration

Replace the `<AdUnit>` placeholder components with real AdSense code.

Open `src/components/AdUnit.tsx` and replace with:

```tsx
// Install: npm install @types/google-adsense (optional)
// Add to layout.tsx <head>:
// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />

export default function AdUnit({ type }: { type: string }) {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
```

**Ad Placements in this template:**
| Placement | Type | Location |
|-----------|------|----------|
| Top Leaderboard | 728×90 | Below hero on all pages |
| Sidebar Top | 300×600 | Right sidebar |
| Sidebar Mid | 300×250 | Right sidebar lower |
| In-Content | 728×280 | Mid-article |
| Bottom Leaderboard | 728×90 | End of content |
| Mobile Banner | 320×50 | Mobile only |

---

## 🔍 Google Search Console

1. Deploy to Vercel and point `healthyvibeshub.com` domain
2. Go to [search.google.com/search-console](https://search.google.com/search-console)
3. Add property → Domain → `healthyvibeshub.com`
4. Verify via DNS TXT record (add in Vercel domain settings)
5. Submit sitemap: `https://healthyvibeshub.com/sitemap.xml`

Update the `google` verification code in `src/app/layout.tsx`:
```tsx
verification: {
  google: 'YOUR_ACTUAL_VERIFICATION_CODE',
},
```

---

## 📊 SEO Checklist

- [x] Unique title & meta description on every page
- [x] Canonical URLs on all pages
- [x] Open Graph & Twitter Card tags
- [x] Organization + WebSite + FAQ schema markup
- [x] BreadcrumbList schema on category/inner pages
- [x] XML sitemap at `/sitemap.xml`
- [x] robots.txt at `/robots.txt`
- [x] RSS feed at `/feed.xml`
- [x] Single H1 per page — correct heading hierarchy
- [x] All images have alt text with keywords
- [x] Internal linking throughout
- [x] No orphan pages — all pages linked in nav/footer
- [x] All external links open in `_blank` with `noopener noreferrer`
- [x] EEAT pages: About, Authors, Editorial Guidelines, Contact
- [x] Legal pages: Privacy, Terms, Cookies
- [x] HTML sitemap at `/sitemap`
- [x] Back-to-top button
- [x] Mobile-responsive design
- [x] Security headers via `vercel.json`
- [x] index.php redirect → homepage

---

## 📞 Support

- **Email:** hello@healthyvibeshub.com
- **Website:** https://healthyvibeshub.com

---

*Built with ❤️ for health & wellness.*
