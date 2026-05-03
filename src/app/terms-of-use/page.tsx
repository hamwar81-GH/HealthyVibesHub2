import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Healthy Vibes Hub',
  description: 'Read the Terms of Use for Healthy Vibes Hub. These terms govern your use of our website and health content.',
  alternates: { canonical: 'https://healthyvibeshub.com/terms-of-use' },
};

const terms = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using healthyvibeshub.com, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website.' },
  { title: '2. Medical Disclaimer', body: 'IMPORTANT: The content on Healthy Vibes Hub is intended for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.\n\nIf you think you may have a medical emergency, call your doctor, local emergency number, or 911 immediately.' },
  { title: '3. Intellectual Property', body: 'All content on Healthy Vibes Hub — including articles, images, graphics, logos, and design — is the exclusive property of Healthy Vibes Hub or its content suppliers and is protected by U.S. and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.\n\nLimited personal, non-commercial use is permitted with proper attribution linking back to the original article.' },
  { title: '4. User Conduct', body: 'When using our website, you agree not to:\n• Use the site for any unlawful purpose\n• Attempt to gain unauthorized access to any part of our systems\n• Scrape, harvest, or data-mine our content without permission\n• Upload or transmit viruses or malicious code\n• Use our site to spam other users\n• Impersonate Healthy Vibes Hub staff or medical professionals' },
  { title: '5. Third-Party Links & Advertising', body: 'Our website may contain links to third-party websites and display advertisements from third-party ad networks including Google AdSense. These links and ads are provided for your convenience and do not constitute an endorsement of those sites or products. We have no control over third-party sites and are not responsible for their content or privacy practices.' },
  { title: '6. Affiliate Disclosure', body: 'Healthy Vibes Hub participates in affiliate programs. Some links on our site may be affiliate links, meaning we may earn a commission if you click through and make a purchase. This does not affect our editorial independence. We only recommend products we genuinely believe are beneficial. Affiliate relationships are disclosed in compliance with FTC guidelines.' },
  { title: '7. Limitation of Liability', body: 'To the fullest extent permitted by law, Healthy Vibes Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or its content. Our total liability shall not exceed $100 USD.' },
  { title: '8. Changes to Terms', body: 'We reserve the right to update these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the site after changes constitutes acceptance of the new terms. We will note the effective date at the top of this page.' },
  { title: '9. Governing Law', body: 'These Terms shall be governed by the laws of the State of New York, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in New York County, New York.' },
  { title: '10. Contact', body: 'For questions about these terms: legal@healthyvibeshub.com\n\nHealthy Vibes Hub\n123 Wellness Ave, Suite 200\nNew York, NY 10001, USA' },
];

export default function TermsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #fff 100%)', padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Terms of Use</span></nav>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 12 }}>Terms of Use</h1>
          <p style={{ color: 'var(--gray-mid)', fontSize: '15px' }}>Last updated: May 1, 2026</p>
        </div>
      </section>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {terms.map((t, i) => (
              <div key={i}>
                <h2 style={{ fontSize: '1.1rem', color: 'var(--emerald)', marginBottom: 12 }}>{t.title}</h2>
                <div style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, whiteSpace: 'pre-line', padding: '20px 24px', background: 'var(--cream)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--emerald-muted)' }}>{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
