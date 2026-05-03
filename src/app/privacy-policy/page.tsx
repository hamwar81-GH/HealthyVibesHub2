import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Healthy Vibes Hub',
  description: 'Read Healthy Vibes Hub\'s Privacy Policy to understand how we collect, use, and protect your personal information. GDPR and CCPA compliant.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/privacy-policy' },
  robots: { index: true, follow: true },
};

const sections = [
  { id: 'information-collected', title: '1. Information We Collect', content: `We may collect the following types of information when you use Healthy Vibes Hub:

**Personal Information You Provide:**
• Name and email address (when subscribing to our newsletter)
• Contact form submissions (name, email, message)
• Comments or feedback you submit

**Automatically Collected Information:**
• IP address and approximate location (country/city level)
• Browser type and version
• Device type (desktop, mobile, tablet)
• Pages visited and time spent on our site
• Referring website URL
• Search queries used within our site

**Cookies and Tracking:**
We use cookies and similar technologies for analytics, advertising, and site functionality. See our Cookie Policy for full details.` },
  { id: 'how-we-use', title: '2. How We Use Your Information', content: `We use collected information to:

• Send our newsletter and health content updates (with your consent)
• Respond to your inquiries and contact form submissions
• Analyze website traffic and improve user experience
• Serve relevant advertisements through Google AdSense and similar platforms
• Comply with legal obligations
• Prevent fraud and ensure site security

We never sell your personal information to third parties.` },
  { id: 'advertising', title: '3. Advertising & Google AdSense', content: `Healthy Vibes Hub participates in the Google AdSense program and may use other third-party advertising networks. These services use cookies to serve ads based on your browsing history.

• Google's use of advertising cookies enables it to serve ads based on your visits to our site and other sites on the internet.
• You may opt out of personalized advertising by visiting Google's Ad Settings at adssettings.google.com.
• For more about how Google uses information from sites that use its services, visit: policies.google.com/technologies/partner-sites` },
  { id: 'cookies', title: '4. Cookies', content: `We use the following types of cookies:

**Essential Cookies:** Required for the website to function (cannot be disabled).
**Analytics Cookies:** Google Analytics helps us understand how visitors use our site.
**Advertising Cookies:** Used by Google AdSense to serve relevant advertisements.
**Preference Cookies:** Remember your preferences and settings.

You can manage cookie preferences in your browser settings or via our Cookie Consent banner. See our full Cookie Policy for details.` },
  { id: 'your-rights', title: '5. Your Rights (GDPR & CCPA)', content: `Depending on your location, you may have the following rights:

• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Request correction of inaccurate personal data.
• **Deletion:** Request deletion of your personal data (Right to be Forgotten).
• **Portability:** Request your data in a portable format.
• **Opt-Out:** Opt out of marketing communications at any time.
• **Non-Discrimination:** We will not discriminate against you for exercising your privacy rights.

To exercise your rights, contact: privacy@healthyvibeshub.com` },
  { id: 'dmca', title: '6. DMCA & Copyright', content: `All original content on Healthy Vibes Hub is protected by copyright. Unauthorized reproduction is prohibited.

If you believe content on our site infringes your copyright, please send a DMCA takedown notice to: dmca@healthyvibeshub.com

Our content is protected by DMCA. We respond to all valid DMCA notices within 5 business days.` },
  { id: 'contact-privacy', title: '7. Contact Us About Privacy', content: `For any privacy-related questions or to exercise your rights, contact us at:

Email: privacy@healthyvibeshub.com
Mail: Privacy Officer, Healthy Vibes Hub, 123 Wellness Ave, Suite 200, New York, NY 10001, USA

We respond to all privacy requests within 30 days.` },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Privacy Policy</span></nav>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '15px' }}>Last updated: May 1, 2026 | Effective: May 1, 2026</p>
          <p style={{ fontSize: '16px', color: 'var(--slate)', lineHeight: 1.75, marginTop: 16 }}>Healthy Vibes Hub ("we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, use, share, and protect information in relation to healthyvibeshub.com.</p>
        </div>
      </section>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {/* TOC */}
          <div style={{ background: 'var(--cream)', borderRadius: 'var(--radius-lg)', padding: '24px 28px', marginBottom: 40 }}>
            <h2 style={{ fontSize: '15px', fontWeight: 700, marginBottom: 12, color: 'var(--slate)' }}>Table of Contents</h2>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 20 }}>
              {sections.map(s => <li key={s.id}><a href={`#${s.id}`} style={{ color: 'var(--emerald)', fontSize: '14px' }}>{s.title}</a></li>)}
            </ol>
          </div>
          {sections.map(s => (
            <div key={s.id} id={s.id} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: '1.2rem', color: 'var(--emerald)', marginBottom: 16 }}>{s.title}</h2>
              <div style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, whiteSpace: 'pre-line', background: 'var(--cream)', padding: '24px', borderRadius: 'var(--radius-md)' }}>{s.content}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
