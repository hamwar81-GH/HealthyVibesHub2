import { NextResponse } from 'next/server';

const BASE = 'https://www.healthyvibeshub.com';

const feed = [
  { title: '15 Superfoods That Actually Boost Your Immune System in 2026', link: `${BASE}/nutrition`, date: 'Mon, 28 Apr 2026 09:00:00 GMT', category: 'Nutrition', desc: 'Science-backed foods that strengthen immunity, reduce inflammation, and support longevity ranked by nutritional density.' },
  { title: 'The Ultimate 30-Day Home Workout Plan for Beginners', link: `${BASE}/fitness`, date: 'Fri, 25 Apr 2026 09:00:00 GMT', category: 'Fitness', desc: 'Build real strength and endurance from scratch with this progressive, expert-designed bodyweight program.' },
  { title: 'Science-Backed Techniques to Reduce Anxiety Instantly', link: `${BASE}/mental-health`, date: 'Tue, 22 Apr 2026 09:00:00 GMT', category: 'Mental Health', desc: 'Clinical psychologists share evidence-based strategies for managing anxiety and chronic stress.' },
  { title: '7 Evidence-Based Sleep Hacks for Better Deep Sleep Tonight', link: `${BASE}/sleep`, date: 'Mon, 27 Apr 2026 09:00:00 GMT', category: 'Sleep Health', desc: 'Sleep scientists share the most effective, research-validated strategies for restorative deep sleep.' },
  { title: 'High-Protein Meal Prep: 20 Recipes Under 400 Calories', link: `${BASE}/recipes`, date: 'Tue, 29 Apr 2026 09:00:00 GMT', category: 'Recipes', desc: 'A week of satisfying, protein-packed meals you can prep in just 2 hours on Sunday.' },
  { title: 'Intermittent Fasting: Does It Really Work?', link: `${BASE}/weight-loss`, date: 'Fri, 25 Apr 2026 09:00:00 GMT', category: 'Weight Loss', desc: 'We analyzed 40+ clinical trials on intermittent fasting to give you the most honest assessment.' },
];

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Healthy Vibes Hub — Health &amp; Wellness Blog</title>
    <link>${BASE}</link>
    <description>Expert-reviewed health, nutrition, fitness, and wellness articles. Trusted by 2.4M+ monthly readers.</description>
    <language>en-us</language>
    <copyright>Copyright ${new Date().getFullYear()} Healthy Vibes Hub</copyright>
    <managingEditor>editorial@healthyvibeshub.com (Healthy Vibes Hub Editorial Team)</managingEditor>
    <webMaster>tech@healthyvibeshub.com (Healthy Vibes Hub Tech Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Health &amp; Wellness</category>
    <image>
      <url>${BASE}/logo.png</url>
      <title>Healthy Vibes Hub</title>
      <link>${BASE}</link>
    </image>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    ${feed.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${item.date}</pubDate>
      <category>${item.category}</category>
      <description><![CDATA[${item.desc}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
