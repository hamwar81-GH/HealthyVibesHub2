import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const SITE_URL = 'https://healthyvibeshub.com';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SMWND5SBTT';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Healthy Vibes Hub | Best Health & Wellness Guide 2026',
    template: '%s | Healthy Vibes Hub',
  },
  description:
    'Healthy Vibes Hub is your trusted source for expert-reviewed health, nutrition, fitness, mental wellness, sleep, and lifestyle advice. Live your healthiest life in 2026.',
  keywords: [
    'healthy vibes hub', 'health and wellness', 'nutrition tips', 'fitness guide',
    'mental health', 'weight loss', 'healthy recipes', 'sleep health', 'womens health',
    'mens health', 'healthy lifestyle 2026',
  ],
  authors: [{ name: 'Healthy Vibes Hub Editorial Team', url: SITE_URL }],
  creator: 'Healthy Vibes Hub',
  publisher: 'Healthy Vibes Hub',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Healthy Vibes Hub',
    title: 'Healthy Vibes Hub | Best Health & Wellness Guide 2026',
    description: 'Expert-reviewed health, nutrition, fitness, and wellness content to help you live your best life.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Healthy Vibes Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@healthyvibeshub',
    creator: '@healthyvibeshub',
    title: 'Healthy Vibes Hub | Best Health & Wellness Guide 2026',
    description: 'Expert-reviewed health, nutrition, fitness, and wellness content.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Healthy Vibes Hub',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [
    'https://www.youtube.com/@healthyvibeshub',
    'https://www.instagram.com/healthyvibeshub',
    'https://www.pinterest.com/healthyvibeshub',
    'https://www.tiktok.com/@healthyvibeshub',
    'https://www.facebook.com/healthyvibeshub',
  ],
  contactPoint: { '@type': 'ContactPoint', email: 'hello@healthyvibeshub.com', contactType: 'editorial' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Wellness Ave, Suite 200',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Healthy Vibes Hub',
  url: SITE_URL,
  description: 'Your trusted health and wellness resource for expert-reviewed content on nutrition, fitness, mental health, and more.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const siteNavSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Healthy Vibes Hub Navigation',
  itemListElement: [
    { '@type': 'SiteLinksSearchBox', target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={q}` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ga4-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="beforeInteractive"
        />
        <Script
          id="ga4-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a6847" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" type="application/rss+xml" title="Healthy Vibes Hub RSS" href={`${SITE_URL}/feed.xml`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
