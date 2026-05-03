import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Free Health Newsletter 2026 — Weekly Wellness Tips | Healthy Vibes Hub',
  description: 'Join 125,000+ readers of the Healthy Vibes Hub newsletter. Get expert-curated health tips, nutrition advice, and wellness guides delivered every Tuesday. Free to subscribe.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/newsletter' },
};

const benefits = [
  { icon: '🥗', title: 'Weekly Nutrition Tips', desc: 'Evidence-based nutrition advice from registered dietitians — easy to apply, backed by science.' },
  { icon: '💪', title: 'Fitness & Workout Plans', desc: 'Expert workout programs and exercise guides you can start this week, no gym required.' },
  { icon: '🧠', title: 'Mental Wellness Strategies', desc: 'Clinically-backed mindfulness, stress management, and emotional health techniques.' },
  { icon: '🍽️', title: 'Healthy Recipe of the Week', desc: 'One new nutritionist-approved recipe every week — quick, delicious, and under 500 calories.' },
  { icon: '🔬', title: 'Latest Health Research', desc: 'We scan the latest peer-reviewed studies and translate them into actionable takeaways.' },
  { icon: '🎯', title: 'Personalized Health Goals', desc: 'Practical weekly challenges and goal-setting prompts to keep your wellness journey on track.' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'Austin, TX', text: 'I have been subscribed for 2 years. It is the only newsletter I actually read every week. The recipes alone are worth it.' },
  { name: 'David K.', location: 'Chicago, IL', text: 'Finally a health newsletter that cites real research and does not just sell me supplements. Highly recommend.' },
  { name: 'Amanda R.', location: 'Seattle, WA', text: 'The mental health section has genuinely improved my daily routine. Evidence-based advice that actually works.' },
];

export default function NewsletterPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(160deg, var(--emerald) 0%, var(--emerald-mid) 60%, #0a5c3e 100%)', padding: '80px 0 72px', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>✉ Free Weekly Newsletter</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
            Get Expert Health Tips Delivered Every Tuesday — Free
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 36 }}>
            Join 125,000+ readers who get the best health, nutrition, fitness, and wellness content from Healthy Vibes Hub — curated by 48 certified health professionals.
          </p>
          <NewsletterForm variant="default" />
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: 14 }}>
            No spam. Unsubscribe anytime. Read our <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <div style={{ background: 'var(--charcoal)', padding: '28px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap' }}>
            {[{ num: '125,000+', label: 'Active Subscribers' }, { num: '48', label: 'Expert Contributors' }, { num: '97%', label: 'Open Rate' }, { num: 'Every Tuesday', label: 'Delivery Day' }].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--gold-light)' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>What You Will Get</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>Every Issue Includes</h2>
          </div>
          <div className="grid-3">
            {benefits.map((b, i) => (
              <div key={i} style={{ padding: '28px 24px', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px', marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Reader Reviews</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>What Our Subscribers Say</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ fontSize: 24, color: 'var(--gold)', marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 16 }}>&quot;{t.text}&quot;</p>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--emerald-pale)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 12 }}>Ready to Start Your Wellness Journey?</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: 28 }}>Join 125,000+ readers. Free, and you can unsubscribe anytime.</p>
          <NewsletterForm variant="compact" />
        </div>
      </section>
    </>
  );
}
