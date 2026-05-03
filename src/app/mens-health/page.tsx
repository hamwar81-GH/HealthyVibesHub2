import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: "Men's Health Guide 2026 — Testosterone, Fitness & Wellness | Healthy Vibes Hub",
  description: "Expert men's health articles on testosterone, muscle building, heart health, prostate health, and male fitness. 175+ doctor-reviewed guides at Healthy Vibes Hub.",
  alternates: { canonical: 'https://www.healthyvibeshub.com/mens-health' },
};

const articles = [
  { title: 'Testosterone Optimization: Natural Strategies That Actually Work', excerpt: 'Testosterone levels are dropping across the board. An endocrinologist reviews the 12 science-backed strategies for optimizing T naturally.', readTime: '10 min', date: 'Apr 27, 2026', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80', tags: ['Testosterone', 'Hormones'] },
  { title: 'Heart Health for Men Over 40: The Complete Prevention Guide', excerpt: 'Cardiovascular disease is the number one killer of men. A cardiologist explains the exact lifestyle changes that reduce risk by up to 80%.', readTime: '13 min', date: 'Apr 24, 2026', img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&q=80', tags: ['Heart Health', 'Prevention'] },
  { title: 'How to Build Muscle After 40: Science-Based Training Guide', excerpt: 'Building muscle at 40+ requires a different approach. A certified strength coach explains progressive overload, recovery, and nutrition for mature lifters.', readTime: '12 min', date: 'Apr 21, 2026', img: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&q=80', tags: ['Muscle Building', 'Over 40'] },
  { title: 'Prostate Health: What Every Man Needs to Know After 50', excerpt: 'Prostate conditions affect 50% of men over 50. A urologist explains prevention, symptoms, screening, and the lifestyle factors that matter most.', readTime: '11 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80', tags: ['Prostate', 'Cancer Prevention'] },
];

const topics = ['Testosterone', 'Heart Health', 'Muscle Building', 'Prostate Health', 'ED & Sexual Health', 'Mental Health for Men', 'Male Nutrition', 'Hair Loss', 'Sleep for Men', 'Stress & Cortisol'];

export default function MensHealthPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Men's Health</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#2563eb' }}>175+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>♂️ Men's Health Guide 2026 — Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Expert health guidance for men at every age — from testosterone and fitness to heart health and mental wellbeing, reviewed by medical doctors.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Men's Health — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Men's Health Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/mens-health" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - men's health healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge badge-blue">{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/mens-health" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
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
              <div style={{ background: '#eff6ff', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#2563eb', fontSize: '1.1rem', marginBottom: 12 }}>♂️ Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/mens-health" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #bfdbfe', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
