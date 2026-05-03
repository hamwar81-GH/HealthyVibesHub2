import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Beauty & Skin Health Guide 2026 — Best Skincare Tips | Healthy Vibes Hub',
  description: 'Dermatologist-reviewed skincare guides, anti-aging routines, and beauty-from-within tips. Top skincare advice and healthy beauty articles at Healthy Vibes Hub 2026.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/beauty-skin' },
};

const articles = [
  { title: 'The Ultimate Anti-Aging Skincare Routine for Every Budget', excerpt: 'A board-certified dermatologist builds the perfect anti-aging routine from drugstore to luxury — with the science behind every step.', readTime: '7 min', date: 'Apr 26, 2026', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80', tags: ['Anti-Aging', 'Skincare Routine'] },
  { title: 'Best Skincare Ingredients for Glowing Skin: Dermatologist Guide', excerpt: 'Retinol, niacinamide, vitamin C, hyaluronic acid — a dermatologist ranks and explains every proven active ingredient for radiant skin.', readTime: '10 min', date: 'Apr 23, 2026', img: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=500&q=80', tags: ['Ingredients', 'Glow'] },
  { title: 'How to Treat Acne as an Adult: A Dermatologist\u2019s Complete Guide', excerpt: 'Adult acne is different from teenage breakouts and needs a different approach. Here is what actually works, backed by clinical research.', readTime: '11 min', date: 'Apr 20, 2026', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80', tags: ['Acne', 'Adult Skin'] },
  { title: 'The Best Foods for Glowing Skin: What to Eat for Clear Skin', excerpt: 'Beauty truly starts from within. A nutritional dermatologist reveals the top foods, nutrients, and hydration habits for luminous skin.', readTime: '9 min', date: 'Apr 17, 2026', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80', tags: ['Nutrition', 'Clear Skin'] },
];

const topics = ['Skincare Routines', 'Anti-Aging', 'Acne Treatment', 'SPF & Sun Protection', 'Natural Beauty', 'Hair Care', 'Body Care', 'Ingredient Guide', 'Dry Skin', 'Oily Skin'];

export default function BeautySkinPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Beauty & Skin</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#ea580c' }}>Expert Dermatologist Guides</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>✨ Beauty & Skin Health Guide 2026 — Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Dermatologist-reviewed skincare guides, evidence-based beauty tips, and skin health science — because real beauty starts with healthy skin.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Beauty — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Beauty & Skin Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/beauty-skin" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - skincare healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge" style={{ background: '#fff7ed', color: '#ea580c' }}>{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/beauty-skin" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
                      <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 12 }}>{a.excerpt}</p>
                      <div style={{ display: 'flex', gap: 16, fontSize: '12px', color: 'var(--gray-mid)' }}><span>⏱ {a.readTime} read</span><span>📅 {a.date}</span></div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: '#fff7ed', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#ea580c', fontSize: '1.1rem', marginBottom: 12 }}>✨ Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/beauty-skin" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #fed7aa', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
