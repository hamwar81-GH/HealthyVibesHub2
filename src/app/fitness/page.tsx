import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Fitness & Workout Guide 2026 — Best Exercise Tips | Healthy Vibes Hub',
  description: 'Expert fitness guides, workout plans, and exercise science for all levels. 190+ science-backed fitness articles at Healthy Vibes Hub — your best fitness resource for 2026.',
  alternates: { canonical: 'https://healthyvibeshub.com/fitness' },
  openGraph: { title: 'Fitness & Workout Guide 2026 | Healthy Vibes Hub', description: '190+ expert workout plans and fitness tips at Healthy Vibes Hub.', url: 'https://healthyvibeshub.com/fitness' },
};

const articles = [
  { title: 'The Ultimate 30-Day Home Workout Plan for Beginners (No Equipment)', excerpt: 'Build real strength and endurance from scratch with this progressive, expert-designed bodyweight program you can do in 20 minutes a day.', readTime: '12 min', date: 'Apr 25, 2026', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80', tags: ['Beginner', 'Home Workout'] },
  { title: 'How to Lose Belly Fat Fast: What Science Actually Recommends', excerpt: 'Forget the myths. Here is exactly what peer-reviewed research says about losing visceral fat safely and permanently.', readTime: '10 min', date: 'Apr 22, 2026', img: 'https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&q=80', tags: ['Weight Loss', 'HIIT'] },
  { title: 'Best Strength Training Program for Women Over 40', excerpt: 'Resistance training is the single most effective intervention for women over 40. Here is a proven 3-day program to build muscle and bone density.', readTime: '11 min', date: 'Apr 20, 2026', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&q=80', tags: ['Strength', 'Women'] },
  { title: 'HIIT vs Steady-State Cardio: Which Burns More Fat in 2026?', excerpt: 'New research settles the debate. We compare calorie burn, fat loss, muscle retention, and cardiovascular benefits of both approaches.', readTime: '9 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&q=80', tags: ['HIIT', 'Cardio'] },
  { title: 'The Perfect Push-Up: Form, Variations & Progression Guide', excerpt: 'Master the most effective bodyweight exercise with proper form tips, 12 progressive variations, and a 6-week progression plan.', readTime: '8 min', date: 'Apr 16, 2026', img: 'https://images.unsplash.com/photo-1530822847156-5df684ec5933?w=500&q=80', tags: ['Bodyweight', 'Upper Body'] },
  { title: 'Recovery After Workouts: Everything You Are Doing Wrong', excerpt: 'Poor recovery is the number one reason people plateau. Sports physiologists explain the optimal recovery protocol for maximum gains.', readTime: '10 min', date: 'Apr 14, 2026', img: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=500&q=80', tags: ['Recovery', 'Performance'] },
];

const topics = ['Home Workouts', 'Gym Training', 'HIIT Cardio', 'Strength Training', 'Yoga & Flexibility', 'Running Plans', 'Weight Loss Workouts', 'Core & Abs', 'Upper Body', 'Lower Body'];

const faqs = [
  { q: 'How many days per week should I work out for best results?', a: 'Most fitness experts recommend 3–5 days of structured exercise per week. Beginners should start with 3 days, while advanced athletes may train 5–6 days with proper recovery.' },
  { q: 'Is 20 minutes of exercise enough to see results?', a: 'Yes — consistent 20-minute high-intensity workouts can produce significant fitness improvements, especially for beginners. Quality and consistency matter more than duration.' },
  { q: 'What is the best exercise to lose weight?', a: 'A combination of resistance training (to build metabolism-boosting muscle) and cardiovascular exercise (to burn calories) is most effective. Diet and sleep are equally important.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function FitnessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #ebf8ff 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Fitness</span>
          </nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#3182ce' }}>190+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>💪 Healthy Vibes Hub Fitness & Workout Guide 2026</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Science-backed workout plans, exercise guides, and fitness tips from certified personal trainers and exercise physiologists. Reach your fitness goals in 2026.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Fitness — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Fitness Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/fitness" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - fitness guide healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge badge-blue">{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/fitness" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
                      <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 12 }}>{a.excerpt}</p>
                      <div style={{ display: 'flex', gap: 16, fontSize: '12px', color: 'var(--gray-mid)' }}><span>⏱ {a.readTime} read</span><span>📅 {a.date}</span></div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
              <div style={{ marginTop: 48 }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 24 }}>Fitness FAQs</h2>
                {faqs.map((f, i) => (
                  <details key={i} style={{ background: '#ebf8ff', borderRadius: 'var(--radius-md)', padding: '18px 22px', marginBottom: 12, border: '1px solid #bee3f8' }}>
                    <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>{f.q}</summary>
                    <p style={{ marginTop: 12, fontSize: '14px', color: 'var(--gray-mid)', lineHeight: 1.8 }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: '#ebf8ff', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#3182ce', fontSize: '1.1rem', marginBottom: 12 }}>💪 Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/fitness" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #bee3f8', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
