import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HTML Sitemap — All Pages | Healthy Vibes Hub',
  description: 'Browse all pages on Healthy Vibes Hub — health categories, wellness articles, recipes, expert guides, and more. Complete site map for easy navigation.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/sitemap' },
};

const sections = [
  {
    title: '🏠 Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Our Expert Authors', href: '/authors' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
  {
    title: '🥗 Health Categories',
    links: [
      { label: 'Nutrition & Healthy Eating', href: '/nutrition' },
      { label: 'Fitness & Exercise', href: '/fitness' },
      { label: 'Mental Health & Wellness', href: '/mental-health' },
      { label: 'Sleep Health', href: '/sleep' },
      { label: 'Weight Loss', href: '/weight-loss' },
      { label: "Women's Health", href: '/womens-health' },
      { label: "Men's Health", href: '/mens-health' },
      { label: 'Beauty & Skin Health', href: '/beauty-skin' },
      { label: 'Healthy Recipes', href: '/recipes' },
      { label: 'Health Blog', href: '/blog' },
    ],
  },
  {
    title: '🔧 Free Health Tools',
    links: [
      { label: 'BMI Calculator — Check Your Body Mass Index', href: '/tools/bmi-calculator' },
      { label: 'Calorie Calculator — Find Your Daily Needs', href: '/tools/calorie-calculator' },
      { label: 'Water Intake Calculator — Daily Hydration', href: '/tools/water-tracker' },
      { label: 'Sleep Calculator — Best Bedtime & Wake Times', href: '/tools/sleep-timer' },
    ],
  },
  {
    title: '📋 Legal & Policies',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
    ],
  },
  {
    title: '🌿 Top Nutrition Articles',
    links: [
      { label: '15 Superfoods That Boost Your Immune System', href: '/nutrition' },
      { label: 'The Mediterranean Diet: Complete Meal Plan', href: '/nutrition' },
      { label: 'Best Vitamins & Supplements Guide 2026', href: '/nutrition' },
      { label: 'Anti-Inflammatory Foods Grocery List', href: '/nutrition' },
      { label: 'Gut Health Guide: Build a Healthy Microbiome', href: '/nutrition' },
    ],
  },
  {
    title: '💪 Top Fitness Articles',
    links: [
      { label: '30-Day Home Workout Plan for Beginners', href: '/fitness' },
      { label: 'How to Lose Belly Fat: Science-Backed Guide', href: '/fitness' },
      { label: 'Best Strength Training for Women Over 40', href: '/fitness' },
      { label: 'HIIT vs Cardio: Which Burns More Fat?', href: '/fitness' },
      { label: 'Recovery After Workouts: Expert Guide', href: '/fitness' },
    ],
  },
  {
    title: '🧠 Top Mental Health Articles',
    links: [
      { label: 'Science-Backed Anxiety Reduction Techniques', href: '/mental-health' },
      { label: '5-Minute Morning Routine for Mental Health', href: '/mental-health' },
      { label: 'How to Stop Negative Thinking Patterns', href: '/mental-health' },
      { label: 'Burnout Recovery: 30-Day Mental Reset Plan', href: '/mental-health' },
      { label: 'Mindfulness Meditation for Beginners', href: '/mental-health' },
    ],
  },
  {
    title: '🍽️ Top Recipes',
    links: [
      { label: 'High-Protein Meal Prep: 20 Recipes Under 400 Cal', href: '/recipes' },
      { label: 'Mediterranean Quinoa Bowl', href: '/recipes' },
      { label: '15 Healthy Smoothie Recipes for Weight Loss', href: '/recipes' },
      { label: 'Anti-Inflammatory Turmeric Chicken', href: '/recipes' },
      { label: 'Overnight Oats 8 Ways', href: '/recipes' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Sitemap</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 12 }}>HTML Sitemap — Healthy Vibes Hub</h1>
          <p style={{ fontSize: '16px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>
            Browse every page on Healthy Vibes Hub. Find health guides, expert articles, tools, and more.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 36 }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px',
                  letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--emerald)',
                  marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid var(--emerald-pale)'
                }}>{s.title}</h2>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        fontSize: '14px', color: 'var(--slate)',
                        padding: '6px 0',
                        borderBottom: '1px solid var(--gray-light)',
                        transition: 'color var(--transition)',
                      }}
                      >
                        <span style={{ color: 'var(--emerald-light)', fontSize: '10px' }}>▶</span>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: '28px 32px', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', marginBottom: 4 }}>Looking for something specific?</h2>
              <p style={{ fontSize: '14px', color: 'var(--gray-mid)' }}>Use our search or browse by health category above.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/blog" className="btn btn-primary" style={{ fontSize: '14px' }}>Browse All Articles</Link>
              <Link href="/contact" className="btn btn-outline" style={{ fontSize: '14px' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
