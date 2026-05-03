import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Health Blog 2026 — Latest Wellness Articles | Healthy Vibes Hub',
  description: 'Browse the latest expert-reviewed health, nutrition, fitness, and wellness articles on the Healthy Vibes Hub blog. New content published weekly by certified health professionals.',
  alternates: { canonical: 'https://healthyvibeshub.com/blog' },
};

const allPosts = [
  { category: 'Nutrition', href: '/nutrition', title: '15 Superfoods That Actually Boost Your Immune System in 2026', date: 'Apr 28, 2026', readTime: '8 min', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', author: 'Dr. Emily Chen' },
  { category: 'Fitness', href: '/fitness', title: 'The Ultimate 30-Day Home Workout Plan for Beginners', date: 'Apr 25, 2026', readTime: '12 min', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', author: 'Marcus Williams' },
  { category: 'Mental Health', href: '/mental-health', title: 'Science-Backed Techniques to Reduce Anxiety Instantly', date: 'Apr 22, 2026', readTime: '10 min', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', author: 'Dr. Sarah Miller' },
  { category: 'Sleep', href: '/sleep', title: '7 Evidence-Based Sleep Hacks for Better Deep Sleep Tonight', date: 'Apr 27, 2026', readTime: '9 min', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80', author: 'Dr. James Park' },
  { category: 'Recipes', href: '/recipes', title: 'High-Protein Meal Prep: 20 Recipes Under 400 Calories', date: 'Apr 29, 2026', readTime: '9 min', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', author: 'Lisa Park RD' },
  { category: "Women's Health", href: '/womens-health', title: 'Hormonal Balance After 35: A Complete Lifestyle Guide', date: 'Apr 28, 2026', readTime: '11 min', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', author: 'Dr. Emily Chen' },
  { category: "Men's Health", href: '/mens-health', title: 'Testosterone Optimization: Natural Strategies That Work', date: 'Apr 27, 2026', readTime: '10 min', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', author: 'Marcus Williams' },
  { category: 'Beauty & Skin', href: '/beauty-skin', title: 'The Ultimate Anti-Aging Skincare Routine for Every Budget', date: 'Apr 26, 2026', readTime: '7 min', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', author: 'Dr. Ana Rivera' },
  { category: 'Weight Loss', href: '/weight-loss', title: 'Intermittent Fasting: Does It Really Work? Science Says...', date: 'Apr 25, 2026', readTime: '13 min', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80', author: 'Lisa Park RD' },
];

const categoryColors: Record<string, string> = {
  'Nutrition': 'badge-green', 'Fitness': 'badge-blue', 'Mental Health': 'badge-purple',
  'Sleep': '', "Women's Health": '', "Men's Health": 'badge-blue',
  'Beauty & Skin': '', 'Weight Loss': 'badge-gold', 'Recipes': 'badge-red',
};

export default function BlogPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Health Blog</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow">Expert-Reviewed Content</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>📝 Healthy Vibes Hub — Health Blog 2026</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>The latest expert-reviewed health, nutrition, fitness, and wellness articles from our team of 48 certified health professionals. New articles published every week.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Blog — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>All Health Articles</h2>
              <div className="grid-2">
                {allPosts.map((p, i) => (
                  <article key={i} className="card">
                    <Link href={p.href} style={{ display: 'block', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <img src={p.img} alt={`${p.title} - healthy vibes hub blog`} width={400} height={250} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      />
                    </Link>
                    <div style={{ padding: '18px' }}>
                      <span className={`badge ${categoryColors[p.category] || 'badge-green'}`} style={{ marginBottom: 10, display: 'inline-block' }}>{p.category}</span>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 10 }}>
                        <Link href={p.href} style={{ color: 'var(--charcoal)' }}>{p.title}</Link>
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--gray-mid)', marginTop: 8 }}>
                        <span>{p.author}</span>
                        <span>{p.readTime} read</span>
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--gray-mid)', marginTop: 4 }}>{p.date}</div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="Blog — In-Content Ad" style={{ marginTop: 40 }} />
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: 'var(--emerald)', fontSize: '1.1rem', marginBottom: 12 }}>📂 Browse by Category</h3>
                {['Nutrition', 'Fitness', 'Mental Health', 'Sleep', 'Weight Loss', "Women's Health", "Men's Health", 'Beauty & Skin', 'Recipes'].map(c => (
                  <Link key={c} href={`/${c.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-')}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '14px', color: 'var(--slate)' }}>
                    <span>{c}</span><span style={{ color: 'var(--emerald)' }}>→</span>
                  </Link>
                ))}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
