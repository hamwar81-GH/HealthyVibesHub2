import { MetadataRoute } from 'next';

const BASE = 'https://healthyvibeshub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/nutrition`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/fitness`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/mental-health`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/sleep`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/weight-loss`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/womens-health`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/mens-health`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/beauty-skin`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE}/recipes`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/authors`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/newsletter`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/editorial-guidelines`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/terms-of-use`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/sitemap`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/tools/bmi-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tools/calorie-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tools/water-tracker`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/tools/sleep-timer`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  return staticRoutes;
}
