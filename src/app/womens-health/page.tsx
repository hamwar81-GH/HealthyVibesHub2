import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: "Women's Health Guide 2026 — Hormones, Fitness & Wellness | Healthy Vibes Hub",
  description: "Expert women's health articles on hormonal balance, pregnancy, menopause, PCOS, fertility, and female fitness. 210+ doctor-reviewed guides at Healthy Vibes Hub.",
  alternates: { canonical: 'https://www.healthyvibeshub.com/womens-health' },
};

const articles = [
  { title: 'Hormonal Balance After 35: A Complete Lifestyle Guide for Women', excerpt: 'Hormonal shifts after 35 affect everything from mood to metabolism. Gynecologists explain what is happening and how to thrive.', readTime: '11 min', date: 'Apr 28, 2026', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80', tags: ['Hormones', 'Over 35'] },
  { title: 'PCOS Symptoms, Diet, and Management: Complete 2026 Guide', excerpt: 'Polycystic ovary syndrome affects 1 in 10 women. An endocrinologist explains diagnosis, treatment, and the best dietary approaches.', readTime: '14 min', date: 'Apr 25, 2026', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80', tags: ['PCOS', 'Hormones'] },
  { title: 'Menopause Symptoms: What to Expect and How to Manage Them', excerpt: 'Hot flashes, brain fog, weight gain — a board-certified OB-GYN explains every menopause symptom and evidence-based relief options.', readTime: '12 min', date: 'Apr 22, 2026', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80', tags: ['Menopause', 'Hormones'] },
  { title: 'Best Strength Training Programs for Women (All Fitness Levels)', excerpt: 'Women who lift live longer, stronger, and healthier. A certified female strength coach shares beginner to advanced programs.', readTime: '10 min', date: 'Apr 19, 2026', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&q=80', tags: ['Fitness', 'Strength Training'] },
];

const topics = ['Hormonal Health', 'PCOS', 'Menopause', 'Fertility', 'Pregnancy Wellness', 'Perimenopause', 'Female Fitness', 'Thyroid Health', 'Bone Density', 'Sexual Health'];

export default function WomensHealthPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #fff0f9 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Women's Health</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#d53f8c' }}>210+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>♀️ Women's Health Guide 2026 — Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Doctor-reviewed women's health articles on hormones, reproductive health, fitness, and wellness — written specifically for women at every life stage.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Women's Health — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Women's Health Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/womens-health" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - women's health healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge" style={{ background: '#fff0f9', color: '#d53f8c' }}>{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/womens-health" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
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
              <div style={{ background: '#fff0f9', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#d53f8c', fontSize: '1.1rem', marginBottom: 12 }}>♀️ Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/womens-health" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #fce7f3', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
