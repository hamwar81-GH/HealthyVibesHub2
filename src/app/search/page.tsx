import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Search Health Articles | Healthy Vibes Hub',
  description: 'Search 1,800+ expert-reviewed health, nutrition, fitness, and wellness articles on Healthy Vibes Hub.',
  robots: { index: false, follow: true },
};

const suggestedSearches = [
  'Mediterranean diet', 'anxiety relief', 'weight loss tips', 'sleep better',
  'protein intake', 'HIIT workout', 'anti-aging skincare', 'testosterone naturally',
  'intermittent fasting', 'gut health', 'mindfulness meditation', 'healthy recipes',
];

const popularArticles = [
  { title: '15 Superfoods That Boost Your Immune System in 2026', href: '/nutrition', category: 'Nutrition' },
  { title: 'The Ultimate 30-Day Home Workout Plan', href: '/fitness', category: 'Fitness' },
  { title: 'Science-Backed Anxiety Reduction Techniques', href: '/mental-health', category: 'Mental Health' },
  { title: '7 Evidence-Based Sleep Hacks for Deep Sleep', href: '/sleep', category: 'Sleep' },
  { title: 'High-Protein Meal Prep: 20 Recipes Under 400 Cal', href: '/recipes', category: 'Recipes' },
  { title: 'Intermittent Fasting: Does It Really Work?', href: '/weight-loss', category: 'Weight Loss' },
];

export default function SearchPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '60px 0 48px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Search</span>
          </nav>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: 20 }}>Search Healthy Vibes Hub</h1>
          <form action="/search" method="GET" role="search" style={{ position: 'relative' }}>
            <input
              type="search"
              name="q"
              placeholder="Search nutrition, fitness, mental health, recipes..."
              aria-label="Search all health articles"
              autoFocus
              style={{
                width: '100%', padding: '16px 64px 16px 24px',
                borderRadius: 'var(--radius-full)', border: '2px solid var(--emerald-muted)',
                fontSize: '16px', fontFamily: 'var(--font-body)',
                boxShadow: 'var(--shadow-md)', outline: 'none',
                background: '#fff',
              }}
            />
            <button type="submit" aria-label="Search" style={{
              position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: 'var(--radius-full)',
              background: 'var(--emerald)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
            }}>🔍</button>
          </form>

          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: '13px', color: 'var(--gray-mid)', marginRight: 4, alignSelf: 'center' }}>Popular:</span>
            {suggestedSearches.map(s => (
              <a key={s} href={`/search?q=${encodeURIComponent(s)}`} style={{
                padding: '5px 14px', borderRadius: 'var(--radius-full)',
                background: '#fff', border: '1px solid var(--emerald-muted)',
                fontSize: '13px', color: 'var(--slate)', fontWeight: 500,
                transition: 'var(--transition)',
              }}
              >{s}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 24, color: 'var(--charcoal)' }}>🔥 Popular Articles</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {popularArticles.map((a, i) => (
              <Link key={i} href={a.href} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 0', borderBottom: '1px solid var(--gray-light)',
                color: 'var(--charcoal)', transition: 'color var(--transition)',
                gap: 12,
              }}
              >
                <span style={{ fontSize: '15px', fontWeight: 500 }}>{a.title}</span>
                <span className="badge badge-green" style={{ flexShrink: 0 }}>{a.category}</span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ color: 'var(--gray-mid)', marginBottom: 16 }}>Can't find what you're looking for?</p>
            <Link href="/contact" className="btn btn-outline">Ask Our Experts →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
