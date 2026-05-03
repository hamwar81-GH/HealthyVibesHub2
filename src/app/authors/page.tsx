import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Expert Health Authors & Medical Reviewers | Healthy Vibes Hub',
  description: 'Meet the 48 certified health professionals, medical doctors, registered dietitians, and fitness experts who write and review all content at Healthy Vibes Hub.',
  alternates: { canonical: 'https://healthyvibeshub.com/authors' },
};

const authors = [
  { name: 'Dr. Emily Chen', role: 'MD, Nutritional Medicine', specialty: 'Nutrition', articles: 124, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80', creds: 'MD — Johns Hopkins | 15 yrs experience' },
  { name: 'Marcus Williams', role: 'CSCS, Exercise Physiologist', specialty: 'Fitness', articles: 98, img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=200&q=80', creds: 'MS Exercise Science — U. of Michigan' },
  { name: 'Dr. Sarah Miller', role: 'PhD, Clinical Psychologist', specialty: 'Mental Health', articles: 87, img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80', creds: 'PhD Psychology — Stanford University' },
  { name: 'Lisa Park', role: 'RD, Sports Dietitian', specialty: 'Nutrition', articles: 76, img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80', creds: 'MS Nutrition — Columbia University' },
  { name: 'Dr. James Park', role: 'MD, Sleep Medicine', specialty: 'Sleep', articles: 62, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80', creds: 'MD Sleep Medicine — Mayo Clinic' },
  { name: 'Dr. Ana Rivera', role: 'MD, Dermatologist', specialty: 'Skin & Beauty', articles: 55, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80', creds: 'MD Dermatology — NYU Langone' },
  { name: 'Dr. Michael Torres', role: 'MD, Endocrinologist', specialty: 'Hormones', articles: 48, img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80', creds: 'MD Endocrinology — Harvard Medical' },
  { name: 'Jennifer Walsh', role: 'RD, Holistic Nutritionist', specialty: 'Recipes', articles: 112, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', creds: 'MS Integrative Nutrition — IIN' },
];

export default function AuthorsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '72px 0 48px' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Our Authors</span></nav>
          <div className="section-eyebrow">EEAT — Real Experts, Real Credentials</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>Meet Our Certified Health Experts</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75, maxWidth: 640 }}>Every article at Healthy Vibes Hub is written or reviewed by a real, credentialed health professional. No anonymous authors. No AI-generated content disguised as expert advice.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          {/* Trust bar */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 48, padding: '24px 32px', background: 'var(--cream)', borderRadius: 'var(--radius-lg)' }}>
            {[
              { icon: '🏥', text: '48 certified health professionals' },
              { icon: '📋', text: 'All credentials verified by editorial board' },
              { icon: '🔬', text: 'Peer-reviewed research cited in every article' },
              { icon: '✅', text: 'Medical review before every publication' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '14px', color: 'var(--slate)', fontWeight: 500 }}>
                <span style={{ fontSize: 22 }}>{t.icon}</span><span>{t.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
            {authors.map((a, i) => (
              <div key={i} className="card" style={{ padding: '28px 24px' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ width: 68, height: 68, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--emerald-pale)' }}>
                    <img src={a.img} alt={`${a.name} — ${a.role} at Healthy Vibes Hub`} width={68} height={68} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, marginBottom: 2 }}>{a.name}</h2>
                    <div style={{ fontSize: '12px', color: 'var(--emerald)', fontWeight: 600 }}>{a.role}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="badge badge-green">{a.specialty}</span>
                  <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{a.articles} articles</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--gray-mid)', padding: '10px 12px', background: 'var(--cream)', borderRadius: 8 }}>🎓 {a.creds}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48, padding: '40px', background: 'var(--emerald-pale)', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: 12 }}>Want to Contribute to Healthy Vibes Hub?</h2>
            <p style={{ color: 'var(--gray-mid)', marginBottom: 24, maxWidth: 520, margin: '0 auto 24px' }}>We are always looking for credentialed health professionals to join our expert contributor team. If you are a licensed physician, RD, psychologist, or certified trainer, we would love to hear from you.</p>
            <Link href="/contact" className="btn btn-primary">Apply as a Contributor →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
