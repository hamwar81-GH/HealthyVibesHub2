import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Weight Loss Guide 2026 — Best Diet & Fat Loss Tips | Healthy Vibes Hub',
  description: 'Science-backed weight loss strategies, diet plans, and fat-burning tips from registered dietitians and fitness experts. 145+ proven weight loss articles at Healthy Vibes Hub.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/weight-loss' },
};

const articles = [
  { title: 'Intermittent Fasting: Does It Really Work? New Research Reveals...', excerpt: 'We analyzed 40+ clinical trials on intermittent fasting to give you the most up-to-date, honest assessment of what it does and does not do.', readTime: '13 min', date: 'Apr 25, 2026', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80', tags: ['Intermittent Fasting', 'Research'] },
  { title: 'How to Lose 10 Pounds Safely: The Only Guide You Need', excerpt: 'A dietitian-approved, medically safe approach to losing 10 pounds without crash dieting, metabolism damage, or muscle loss.', readTime: '12 min', date: 'Apr 22, 2026', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80', tags: ['Fat Loss', 'Diet Plan'] },
  { title: 'Why You Are Not Losing Weight Despite Eating Less (Doctor Explains)', excerpt: 'Metabolic adaptation, hormonal imbalances, hidden calories, and sleep debt — the real reasons your weight loss has stalled.', readTime: '11 min', date: 'Apr 19, 2026', img: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&q=80', tags: ['Plateau', 'Metabolism'] },
  { title: 'The Best High-Protein Low-Calorie Foods for Weight Loss', excerpt: 'Protein is the king of macronutrients for weight loss. Registered dietitians rank the 25 best high-protein foods for satiety and fat loss.', readTime: '10 min', date: 'Apr 16, 2026', img: 'https://images.unsplash.com/photo-1544025162-d76538387798?w=500&q=80', tags: ['Protein', 'Low Calorie'] },
];

const topics = ['Calorie Counting', 'Intermittent Fasting', 'Keto Diet', 'Mediterranean Diet', 'Low-Carb', 'Belly Fat', 'Metabolism', 'Appetite Control', 'Exercise for Fat Loss', 'Emotional Eating'];

export default function WeightLossPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Weight Loss</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#d97706' }}>145+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>⚖️ Weight Loss Guide 2026 — Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Sustainable, science-backed weight loss strategies from registered dietitians and medical doctors. No fads. No myths. Just what works.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Weight Loss — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Weight Loss Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/weight-loss" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - weight loss guide healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge badge-gold">{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/weight-loss" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
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
              <div style={{ background: '#fffbeb', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#d97706', fontSize: '1.1rem', marginBottom: 12 }}>⚖️ Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/weight-loss" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #fde68a', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
