import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us — Our Story, Mission & Expert Team | Healthy Vibes Hub',
  description: 'Learn about Healthy Vibes Hub — our mission, editorial standards, expert team of 48 certified health professionals, and our commitment to accurate, trustworthy health information.',
  alternates: { canonical: 'https://healthyvibeshub.com/about' },
};

const team = [
  { name: 'Dr. Emily Chen', role: 'MD, Nutritional Medicine & Internal Medicine', bio: 'Board-certified internal medicine physician with 15 years of clinical experience and a fellowship in nutritional medicine. Dr. Chen leads our medical review board.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80', creds: 'MD, MBA — Johns Hopkins University' },
  { name: 'Marcus Williams', role: 'CSCS, Exercise Physiologist & Strength Coach', bio: 'Certified Strength and Conditioning Specialist with 12 years of experience training elite athletes and everyday fitness enthusiasts. Specializes in functional fitness and fat loss.', img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=200&q=80', creds: 'MS Exercise Science — University of Michigan' },
  { name: 'Dr. Sarah Miller', role: 'PhD, Licensed Clinical Psychologist', bio: 'Licensed clinical psychologist with expertise in cognitive behavioral therapy, anxiety disorders, and workplace mental health. Author of two peer-reviewed books on CBT.', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80', creds: 'PhD Psychology — Stanford University' },
  { name: 'Lisa Park', role: 'RD, Registered Dietitian & Sports Nutritionist', bio: 'Registered dietitian with 10 years of experience in clinical nutrition and sports dietetics. Lisa specializes in evidence-based weight management and performance nutrition.', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80', creds: 'MS Nutrition — Columbia University, CDN' },
];

const milestones = [
  { year: '2020', event: 'Healthy Vibes Hub founded with a team of 5 health experts' },
  { year: '2021', event: 'Reached 100,000 monthly readers and launched newsletter' },
  { year: '2022', event: 'Medical review board established with 12 certified professionals' },
  { year: '2023', event: 'Expanded to 500+ articles across 10 health categories' },
  { year: '2024', event: 'Surpassed 1 million monthly readers and won Best Health Blog award' },
  { year: '2026', event: '2.4M+ monthly readers, 1,800+ articles, 48 expert contributors' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '72px 0 56px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">About Us</span></nav>
          <div className="section-eyebrow">Our Story</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: 20, maxWidth: 700 }}>
            About Healthy Vibes Hub — Your Trusted Wellness Partner
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.8, maxWidth: 680 }}>
            Healthy Vibes Hub was founded in 2020 with one mission: to make expert, science-backed health information accessible to everyone. No hype. No misinformation. Just trustworthy guidance from real health professionals.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">Who We Are</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 16 }}>A Team of 48 Certified Health Professionals</h2>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.85, marginBottom: 16 }}>Healthy Vibes Hub is not a content farm or AI blog. Every article is written and reviewed by licensed physicians, registered dietitians, certified personal trainers, clinical psychologists, and other credentialed health professionals.</p>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.85, marginBottom: 24 }}>Our team of 48 expert contributors spans specialties from internal medicine and sports nutrition to clinical psychology and dermatology. Every piece of content on our site goes through a rigorous multi-step editorial review process before publication.</p>
              <Link href="/authors" className="btn btn-primary">Meet Our Full Team →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🏥', num: '48', label: 'Expert Contributors' },
                { icon: '📝', num: '1,800+', label: 'Published Articles' },
                { icon: '👥', num: '2.4M+', label: 'Monthly Readers' },
                { icon: '⭐', num: '4.9/5', label: 'Reader Rating' },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--emerald-pale)', borderRadius: 'var(--radius-lg)', padding: '24px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--emerald)' }}>{s.num}</div>
                  <div style={{ fontSize: '13px', color: 'var(--gray-mid)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">What We Do</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 32, maxWidth: 600 }}>Comprehensive Health Coverage Across 10 Categories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {[
              { icon: '🥗', title: 'Nutrition', desc: 'Evidence-based dietary advice, meal plans, supplement reviews, and nutritional science from registered dietitians.' },
              { icon: '💪', title: 'Fitness', desc: 'Workout programs, exercise guides, and sports science from certified personal trainers and exercise physiologists.' },
              { icon: '🧠', title: 'Mental Health', desc: 'Evidence-based mental wellness content from licensed clinical psychologists and therapists.' },
              { icon: '😴', title: 'Sleep Science', desc: 'Sleep health guides and insomnia solutions from board-certified sleep medicine physicians.' },
              { icon: '⚖️', title: 'Weight Management', desc: 'Medically sound, sustainable weight loss and management strategies grounded in clinical research.' },
              { icon: '🍽️', title: 'Healthy Recipes', desc: 'Nutritionist-approved, easy-to-make recipes that are as delicious as they are good for you.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-eyebrow">Our Journey</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 36 }}>From Startup to 2.4M Monthly Readers</h2>
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 2, background: 'var(--emerald-muted)', borderRadius: 2 }} />
            {milestones.map((m, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: 28, paddingLeft: 20 }}>
                <div style={{ position: 'absolute', left: -28, top: 4, width: 16, height: 16, background: 'var(--emerald)', borderRadius: '50%', border: '3px solid var(--emerald-pale)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--emerald)', fontSize: '1.1rem' }}>{m.year}</div>
                <div style={{ color: 'var(--slate)', fontSize: '15px', marginTop: 4 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="section-eyebrow">EEAT — Expertise & Authority</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 12 }}>Meet Our Lead Health Experts</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: 36, maxWidth: 600 }}>Our content is produced and reviewed by real, credentialed professionals — not anonymous writers.</p>
          <div className="grid-2">
            {team.map((e, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-md)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--emerald-pale)' }}>
                  <img src={e.img} alt={`${e.name} - ${e.role} at Healthy Vibes Hub`} width={72} height={72} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', marginBottom: 4 }}>{e.name}</h3>
                  <div style={{ fontSize: '12px', color: 'var(--emerald)', fontWeight: 600, marginBottom: 8 }}>{e.role}</div>
                  <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 8 }}>{e.bio}</p>
                  <span className="badge badge-green">{e.creds}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/authors" className="btn btn-primary">Meet All 48 Experts →</Link>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section style={{ background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-mid) 100%)', padding: '64px 0', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🛡️</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#fff', marginBottom: 16 }}>Our Trust Commitment</h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 28 }}>We never publish sponsored health claims disguised as editorial content. We clearly label all sponsored content and advertisements. Our editorial team operates independently. We follow the strictest editorial guidelines in health publishing, aligned with HONcode principles.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/editorial-guidelines" className="btn" style={{ background: '#fff', color: 'var(--emerald)' }}>Our Editorial Guidelines →</Link>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>Contact Our Team</Link>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="section-sm" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: 20 }}>Get in Touch</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {[
              { icon: '✉️', label: 'Editorial', value: 'editorial@healthyvibeshub.com', href: 'mailto:editorial@healthyvibeshub.com' },
              { icon: '📢', label: 'Press & Media', value: 'press@healthyvibeshub.com', href: 'mailto:press@healthyvibeshub.com' },
              { icon: '💼', label: 'Advertising', value: 'ads@healthyvibeshub.com', href: 'mailto:ads@healthyvibeshub.com' },
              { icon: '📍', label: 'Office', value: '123 Wellness Ave, New York, NY 10001', href: '/contact' },
            ].map(c => (
              <a key={c.label} href={c.href} style={{ display: 'block', padding: '20px', background: 'var(--cream)', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: '14px', color: 'var(--emerald)', fontWeight: 500 }}>{c.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
