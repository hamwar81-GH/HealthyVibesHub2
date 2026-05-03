'use client';
import Link from 'next/link';

const categories = [
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'Fitness & Exercise', href: '/fitness' },
  { label: 'Mental Health', href: '/mental-health' },
  { label: 'Sleep Health', href: '/sleep' },
  { label: 'Weight Loss', href: '/weight-loss' },
  { label: "Women's Health", href: '/womens-health' },
  { label: "Men's Health", href: '/mens-health' },
  { label: 'Beauty & Skin', href: '/beauty-skin' },
  { label: 'Healthy Recipes', href: '/recipes' },
  { label: 'Health Blog', href: '/blog' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Authors', href: '/authors' },
  { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Advertise With Us', href: '/contact' },
  { label: 'HTML Sitemap', href: '/sitemap' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
  { label: 'DMCA & Copyright', href: '/privacy-policy#dmca' },
];

const socials = [
  { icon: '▶', label: 'YouTube', href: 'https://www.youtube.com/@healthyvibeshub', color: '#ff0000' },
  { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/healthyvibeshub', color: '#e1306c' },
  { icon: '📌', label: 'Pinterest', href: 'https://www.pinterest.com/healthyvibeshub', color: '#e60023' },
  { icon: '🎵', label: 'TikTok', href: 'https://www.tiktok.com/@healthyvibeshub', color: '#000' },
  { icon: 'f', label: 'Facebook', href: 'https://www.facebook.com/healthyvibeshub', color: '#1877f2' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,0.85)' }}>
      {/* Newsletter banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-mid) 100%)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
            ✉ Free Newsletter
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: 12 }}>
            Get Weekly Health Tips Delivered
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
            Join 125,000+ readers. Expert-curated wellness advice, recipes, and science-backed tips — every Tuesday.
          </p>
          <form style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }} action="/newsletter" method="GET">
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email address for newsletter"
              className="newsletter-input"
              style={{ flex: 1, minWidth: '200px' }}
            />
            <button type="submit" className="btn" style={{ background: '#fff', color: 'var(--emerald)', fontWeight: 700 }}>
              Subscribe Free →
            </button>
          </form>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: 14 }}>
            No spam. Unsubscribe anytime. Read our <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px 32px', marginBottom: 56 }}>
            {/* Brand col */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-light) 100%)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🌿</div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#fff' }}>Healthy Vibes Hub</span>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
                Your trusted, expert-reviewed source for health, nutrition, fitness, and holistic wellness since 2020. All content reviewed by certified health professionals.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${s.label}`}
                    style={{
                      width: 38, height: 38,
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '15px', color: '#fff',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.color; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                  >{s.icon}</a>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(255,255,255,0.06)', borderRadius: 10, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
                📍 123 Wellness Ave, Suite 200<br />New York, NY 10001, USA<br />
                📞 <a href="tel:+18001234567" style={{ color: 'rgba(255,255,255,0.7)' }}>1-800-123-4567</a><br />
                ✉️ <a href="mailto:hello@healthyvibeshub.com" style={{ color: 'rgba(255,255,255,0.7)' }}>hello@healthyvibeshub.com</a>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 20 }}>Health Topics</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {categories.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', transition: 'var(--transition)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-light)'; (e.currentTarget as HTMLElement).style.paddingLeft = '6px'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; (e.currentTarget as HTMLElement).style.paddingLeft = '0'; }}
                    >{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 20 }}>Company</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {company.map(c => (
                  <li key={c.href}>
                    <Link href={c.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', transition: 'var(--transition)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold-light)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                    >{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust signals */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 20 }}>Trust & Safety</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '✅', text: 'Medically Reviewed Content' },
                  { icon: '🔒', text: 'SSL Secured & GDPR Compliant' },
                  { icon: '📋', text: 'Editorial Independence Policy' },
                  { icon: '🏥', text: 'Licensed Health Professionals' },
                  { icon: '🛡️', text: 'DMCA Protected Content' },
                ].map(t => (
                  <div key={t.text} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
                    <span>{t.icon}</span><span>{t.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 12 }}>Legal</h4>
                {legal.map(l => (
                  <div key={l.href} style={{ marginBottom: 8 }}>
                    <Link href={l.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>{l.label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
              © {year} Healthy Vibes Hub. All rights reserved. Content is for informational purposes only and not a substitute for professional medical advice.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="/feed.xml" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>RSS Feed</a>
              <a href="https://www.dmca.com/Protection/Status.aspx?ID=healthyvibeshub" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>DMCA Protected</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
