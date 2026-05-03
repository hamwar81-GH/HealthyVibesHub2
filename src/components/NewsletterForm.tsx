'use client';

export default function NewsletterForm({ variant = 'default' }: { variant?: 'default' | 'compact' | 'dark' }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your email provider (Mailchimp, ConvertKit, etc.)
    alert('Thanks for subscribing! Check your inbox for confirmation.');
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <input type="email" placeholder="Enter your email address" required aria-label="Email address"
          style={{ flex: 1, minWidth: 240, padding: '13px 20px', borderRadius: 'var(--radius-full)', border: '2px solid var(--emerald-muted)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }} />
        <button type="submit" className="btn btn-primary">Subscribe Free →</button>
      </form>
    );
  }

  if (variant === 'dark') {
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
        <input type="email" placeholder="Your email address" required aria-label="Email address for newsletter"
          className="newsletter-input" style={{ flex: 1, minWidth: '200px' }} />
        <button type="submit" className="btn" style={{ background: '#fff', color: 'var(--emerald)', fontWeight: 700 }}>
          Subscribe Free →
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 480, margin: '0 auto' }}>
      <input type="text" placeholder="Your first name" required aria-label="First name"
        style={{ padding: '14px 20px', borderRadius: 'var(--radius-full)', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none' }} />
      <input type="email" placeholder="Your email address" required aria-label="Email address"
        style={{ padding: '14px 20px', borderRadius: 'var(--radius-full)', border: '2px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none' }} />
      <button type="submit" className="btn" style={{ background: 'var(--gold)', color: '#fff', justifyContent: 'center', fontSize: '16px', padding: '14px 32px', fontWeight: 700 }}>
        Subscribe Free — Join 125,000+ Readers →
      </button>
    </form>
  );
}
