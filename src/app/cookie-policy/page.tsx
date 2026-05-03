import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | Healthy Vibes Hub',
  description: 'Learn how Healthy Vibes Hub uses cookies and tracking technologies. Manage your cookie preferences and understand your rights under GDPR and CCPA.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/cookie-policy' },
};

const cookieTypes = [
  { name: 'Strictly Necessary Cookies', required: true, desc: 'These cookies are required for the website to function and cannot be switched off. They are usually set in response to actions you take, like setting your cookie preferences or filling in forms.', examples: ['Session cookies', 'Security cookies', 'Load-balancing cookies'] },
  { name: 'Analytics Cookies', required: false, desc: 'We use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience. All data is anonymized.', examples: ['Google Analytics (_ga, _gid)', 'Hotjar (visitor behavior)', 'Internal traffic analysis'] },
  { name: 'Advertising Cookies', required: false, desc: 'These cookies are used by Google AdSense and other advertising networks to serve you relevant advertisements. They track browsing habits across websites.', examples: ['Google AdSense cookies', 'DoubleClick cookies', 'Interest-based ad cookies'] },
  { name: 'Functional Cookies', required: false, desc: 'These cookies allow the website to remember your preferences and provide enhanced features like saved search results, language preferences, and theme settings.', examples: ['Language preferences', 'Cookie consent status', 'Newsletter opt-in status'] },
];

export default function CookiePolicyPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #fff 100%)', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Cookie Policy</span></nav>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 12 }}>Cookie Policy</h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '15px' }}>Last updated: May 1, 2026</p>
          <p style={{ fontSize: '16px', color: 'var(--slate)', lineHeight: 1.75, marginTop: 16 }}>Healthy Vibes Hub uses cookies and similar tracking technologies on our website. This policy explains what cookies we use, why we use them, and how you can manage your preferences.</p>
        </div>
      </section>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 8 }}>What Are Cookies?</h2>
          <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, marginBottom: 40 }}>Cookies are small text files stored on your device by your browser when you visit websites. They help websites remember information about your visit, making your next visit easier and the site more useful. Cookies cannot run programs or deliver viruses to your computer.</p>

          <h2 style={{ fontSize: '1.3rem', marginBottom: 24 }}>Cookies We Use</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
            {cookieTypes.map((c, i) => (
              <div key={i} style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--emerald-muted)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px' }}>{c.name}</h3>
                  <span className={`badge ${c.required ? 'badge-green' : 'badge-blue'}`}>{c.required ? 'Always Active' : 'Optional'}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.7, marginBottom: 12 }}>{c.desc}</p>
                <div style={{ fontSize: '13px', color: 'var(--gray-mid)' }}>
                  <strong>Examples:</strong> {c.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.3rem', marginBottom: 16 }}>How to Manage Cookies</h2>
          <div style={{ background: 'var(--cream)', padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: 32 }}>
            <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, marginBottom: 16 }}>You can control and manage cookies in several ways:</p>
            {[
              { title: 'Browser Settings', desc: 'Most browsers allow you to block or delete cookies through their settings. Note that blocking all cookies may affect website functionality.' },
              { title: 'Cookie Consent Banner', desc: 'When you first visit our site, you can accept or decline non-essential cookies via our consent banner.' },
              { title: 'Google Ad Settings', desc: 'Opt out of Google personalized ads at adssettings.google.com.' },
              { title: 'Your Online Choices', desc: 'Manage preferences for multiple ad networks at youronlinechoices.com (EU) or optout.networkadvertising.org (US).' },
            ].map(m => (
              <div key={m.title} style={{ marginBottom: 12 }}>
                <strong style={{ fontSize: '14px', color: 'var(--charcoal)' }}>{m.title}:</strong>
                <span style={{ fontSize: '14px', color: 'var(--slate)', marginLeft: 8 }}>{m.desc}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '14px', color: 'var(--gray-mid)' }}>For questions about our cookie practices, contact: <a href="mailto:privacy@healthyvibeshub.com" style={{ color: 'var(--emerald)' }}>privacy@healthyvibeshub.com</a></p>
        </div>
      </section>
    </>
  );
}
