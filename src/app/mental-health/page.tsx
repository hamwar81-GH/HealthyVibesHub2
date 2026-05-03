import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Mental Health Guide 2026 — Anxiety, Stress & Wellness | Healthy Vibes Hub',
  description: 'Evidence-based mental health articles on anxiety, depression, stress management, mindfulness, and emotional wellbeing. 160+ expert-reviewed guides at Healthy Vibes Hub.',
  alternates: { canonical: 'https://healthyvibeshub.com/mental-health' },
  openGraph: { title: 'Mental Health Guide 2026 | Healthy Vibes Hub', url: 'https://healthyvibeshub.com/mental-health' },
};

const articles = [
  { title: 'Science-Backed Techniques to Reduce Anxiety Instantly (Therapist Approved)', excerpt: 'Clinical psychologists share the most effective evidence-based strategies for managing anxiety, panic attacks, and chronic stress.', readTime: '10 min', date: 'Apr 22, 2026', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80', tags: ['Anxiety', 'CBT'] },
  { title: 'The 5-Minute Morning Routine That Transforms Your Mental Health', excerpt: 'Psychiatrists and psychologists agree: these five brief morning habits create measurable improvements in mood, focus, and resilience.', readTime: '7 min', date: 'Apr 20, 2026', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=500&q=80', tags: ['Morning Routine', 'Mindfulness'] },
  { title: 'How to Stop Negative Thinking Patterns (Cognitive Reframing Guide)', excerpt: 'Cognitive Behavioral Therapy techniques you can apply today to break the cycle of rumination, catastrophizing, and self-doubt.', readTime: '13 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80', tags: ['CBT', 'Depression'] },
  { title: 'Burnout Recovery: A Complete 30-Day Mental Reset Plan', excerpt: 'Are you burned out? This step-by-step, clinically-informed 30-day plan helps you recover energy, motivation, and mental clarity.', readTime: '15 min', date: 'Apr 15, 2026', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&q=80', tags: ['Burnout', 'Recovery'] },
  { title: 'Mindfulness Meditation for Beginners: How to Start Today', excerpt: 'A practical, research-backed guide to starting a mindfulness practice — no experience needed. Includes a 7-day beginner plan.', readTime: '9 min', date: 'Apr 12, 2026', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=500&q=80', tags: ['Meditation', 'Mindfulness'] },
  { title: 'How Exercise Improves Mental Health: The Neuroscience Explained', excerpt: 'Exercise is as effective as antidepressants for mild-to-moderate depression. Here is the brain science that explains why.', readTime: '11 min', date: 'Apr 10, 2026', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80', tags: ['Depression', 'Exercise'] },
];

const topics = ['Anxiety & Panic', 'Depression', 'Stress Management', 'Mindfulness', 'Burnout Recovery', 'Sleep & Mood', 'Trauma & PTSD', 'Relationships', 'Self-Esteem', 'Work-Life Balance'];

const faqs = [
  { q: 'What are the most effective ways to manage anxiety naturally?', a: 'Evidence-based natural approaches include diaphragmatic breathing, progressive muscle relaxation, regular aerobic exercise, cognitive reframing (CBT techniques), limiting caffeine, and quality sleep. Always consult a mental health professional for persistent anxiety.' },
  { q: 'How do I know if I have depression or just feel sad?', a: 'Clinical depression lasts more than two weeks and includes persistent low mood, loss of interest, fatigue, changes in sleep and appetite, and difficulty concentrating. Sadness is typically linked to a specific event and resolves. If symptoms persist, please consult a licensed mental health professional.' },
  { q: 'Does mindfulness meditation actually work for stress?', a: 'Yes — decades of clinical research show mindfulness reduces cortisol levels, lowers anxiety, improves emotional regulation, and reduces symptoms of depression. Even 10 minutes daily produces measurable benefits within 8 weeks.' },
];

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };

export default function MentalHealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Mental Health</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#7c3aed' }}>160+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>🧠 Mental Health & Wellness Guide 2026</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Evidence-based mental health guides written and reviewed by licensed clinical psychologists and therapists. Your emotional wellbeing matters.</p>
            <div style={{ marginTop: 20, padding: '14px 18px', background: '#fef3cd', borderRadius: 'var(--radius-md)', border: '1px solid #fbbf24', fontSize: '13px', color: '#92400e' }}>
              ⚠️ <strong>Medical Disclaimer:</strong> This content is for educational purposes only and is not a substitute for professional mental health care. If you are in crisis, please contact the <strong>988 Suicide & Crisis Lifeline</strong> by calling or texting <strong>988</strong>.
            </div>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Mental Health — Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Mental Health Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/mental-health" style={{ width: 200, flexShrink: 0, display: 'block' }}>
                      <img src={a.img} alt={`${a.title} - mental health healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>{a.tags.map(t => <span key={t} className="badge badge-purple">{t}</span>)}</div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}><Link href="/mental-health" style={{ color: 'var(--charcoal)' }}>{a.title}</Link></h3>
                      <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 12 }}>{a.excerpt}</p>
                      <div style={{ display: 'flex', gap: 16, fontSize: '12px', color: 'var(--gray-mid)' }}><span>⏱ {a.readTime} read</span><span>📅 {a.date}</span></div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
              <div style={{ marginTop: 48 }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 24 }}>Mental Health FAQs</h2>
                {faqs.map((f, i) => (
                  <details key={i} style={{ background: '#f5f3ff', borderRadius: 'var(--radius-md)', padding: '18px 22px', marginBottom: 12, border: '1px solid #ddd6fe' }}>
                    <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>{f.q}</summary>
                    <p style={{ marginTop: 12, fontSize: '14px', color: 'var(--gray-mid)', lineHeight: 1.8 }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: '#f5f3ff', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1.1rem', marginBottom: 12 }}>🧠 Popular Topics</h3>
                {topics.map(t => <Link key={t} href="/mental-health" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #ddd6fe', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <div style={{ background: '#fef2f2', borderRadius: 'var(--radius-lg)', padding: 20, marginTop: 24, border: '1px solid #fecaca' }}>
                <h4 style={{ fontWeight: 700, color: '#991b1b', marginBottom: 8, fontSize: '14px' }}>🆘 Crisis Resources</h4>
                <p style={{ fontSize: '13px', color: '#7f1d1d', lineHeight: 1.7 }}>If you or someone you know is in crisis:<br /><strong>988 Lifeline:</strong> Call or text 988<br /><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
