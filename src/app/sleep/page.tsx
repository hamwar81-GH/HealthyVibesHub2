import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Sleep Health Guide 2026 — Better Sleep Tips & Science | Healthy Vibes Hub',
  description: 'Discover 95+ expert sleep health articles on insomnia, sleep hygiene, circadian rhythm, and sleep disorders at Healthy Vibes Hub. Sleep better starting tonight.',
  alternates: { canonical: 'https://healthyvibeshub.com/sleep' },
};

const articles = [
  { title: '7 Evidence-Based Sleep Hacks for Better Deep Sleep Tonight', excerpt: 'Sleep scientists share the most effective, research-validated strategies for falling asleep faster and achieving restorative deep sleep.', readTime: '9 min', date: 'Apr 27, 2026', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&q=80', tags: ['Sleep Tips', 'Deep Sleep'] },
  { title: 'Sleep Apnea Signs You Should Never Ignore (Doctor Explains)', excerpt: 'Undiagnosed sleep apnea affects 30 million Americans. A board-certified sleep physician walks through every warning sign.', readTime: '8 min', date: 'Apr 24, 2026', img: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=500&q=80', tags: ['Sleep Apnea', 'Disorders'] },
  { title: 'The Ideal Sleep Schedule: What Science Says About Bedtime', excerpt: 'Chronobiology research reveals the optimal sleep and wake times for different chronotypes — find yours and optimize your rest.', readTime: '10 min', date: 'Apr 21, 2026', img: 'https://images.unsplash.com/photo-1455642305367-68834a9b8fe9?w=500&q=80', tags: ['Circadian Rhythm', 'Schedule'] },
  { title: 'Best Foods and Supplements That Help You Sleep Better', excerpt: 'Certain foods and nutrients directly support melatonin production and sleep quality. A registered dietitian shares the evidence.', readTime: '8 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', tags: ['Nutrition', 'Melatonin'] },
];

const topics = ['Insomnia', 'Sleep Apnea', 'Circadian Rhythm', 'Sleep Hygiene', 'REM Sleep', 'Napping', 'Sleep Supplements', 'Children\'s Sleep', 'Sleep & Weight', 'Dreams & REM'];

export default function SleepPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Sleep Health</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#0694a2' }}>95+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>😴 Sleep Health Guide 2026 — Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Expert-reviewed sleep health guides from board-certified sleep physicians. Improve your sleep quality and wake up feeling your best.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Sleep — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Sleep Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/sleep" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - sleep health healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge" style={{ background: '#ecfeff', color: '#0694a2' }}>{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/sleep" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
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
              <div style={{ background: '#ecfeff', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#0694a2', fontSize: '1.1rem', marginBottom: 12 }}>😴 Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/sleep" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #cffafe', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
