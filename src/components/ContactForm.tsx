'use client';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will respond within 48 hours.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 6, color: 'var(--slate)' }}>Full Name *</label>
        <input type="text" required placeholder="Your full name"
          style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none' }} />
      </div>
      <div>
        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 6, color: 'var(--slate)' }}>Email Address *</label>
        <input type="email" required placeholder="your@email.com"
          style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none' }} />
      </div>
      <div>
        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 6, color: 'var(--slate)' }}>Subject *</label>
        <select required style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }}>
          <option value="">Select a subject</option>
          <option>General Question</option>
          <option>Content Correction</option>
          <option>Advertising Inquiry</option>
          <option>Press / Media</option>
          <option>Contributor Application</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 6, color: 'var(--slate)' }}>Message *</label>
        <textarea required placeholder="How can we help you?" rows={6}
          style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }} />
      </div>
      <p style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>
        By submitting, you agree to our <a href="/privacy-policy" style={{ color: 'var(--emerald)' }}>Privacy Policy</a>.
      </p>
      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Send Message →
      </button>
    </form>
  );
}
