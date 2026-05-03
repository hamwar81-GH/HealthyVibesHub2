import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Healthy Vibes Hub Editorial & Support Team',
  description: 'Contact the Healthy Vibes Hub team for editorial inquiries, advertising opportunities, corrections, or general questions. We respond within 48 business hours.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/contact' },
};

const contactInfo = [
  { icon: '✉️', title: 'General Inquiries', value: 'hello@healthyvibeshub.com', href: 'mailto:hello@healthyvibeshub.com' },
  { icon: '📝', title: 'Editorial & Corrections', value: 'editorial@healthyvibeshub.com', href: 'mailto:editorial@healthyvibeshub.com' },
  { icon: '💼', title: 'Advertising & Partnerships', value: 'ads@healthyvibeshub.com', href: 'mailto:ads@healthyvibeshub.com' },
  { icon: '📢', title: 'Press & Media', value: 'press@healthyvibeshub.com', href: 'mailto:press@healthyvibeshub.com' },
  { icon: '📞', title: 'Phone', value: '1-800-123-4567', href: 'tel:+18001234567' },
  { icon: '📍', title: 'Office Address', value: '123 Wellness Ave, Suite 200, New York, NY 10001', href: '#' },
];

export default function ContactPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '72px 0 48px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Contact Us</span>
          </nav>
          <div className="section-eyebrow">Get in Touch</div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>Contact Healthy Vibes Hub</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>
            Have a question, correction request, or partnership inquiry? Our team responds within 48 business hours.
          </p>
        </div>
      </section>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 24 }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {contactInfo.map(c => (
                  <a key={c.title} href={c.href} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px', background: 'var(--cream)', borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>
                    <div style={{ width: 44, height: 44, background: 'var(--emerald-pale)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--charcoal)', marginBottom: 4 }}>{c.title}</div>
                      <div style={{ fontSize: '14px', color: 'var(--emerald)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 28, padding: '20px', background: 'var(--emerald-pale)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--emerald)', marginBottom: 10 }}>🕐 Response Times</h3>
                {['General inquiries: Within 48 hours', 'Editorial corrections: Within 24 hours', 'Advertising inquiries: Within 2 business days', 'Press requests: Within 24 hours'].map(t => (
                  <div key={t} style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: 6 }}>✓ {t}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 24 }}>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
