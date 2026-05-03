import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Healthy Vibes Hub',
  description: 'The page you are looking for could not be found. Browse our health categories or search for what you need.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)', textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ maxWidth: 560 }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🌿</div>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'var(--emerald)', marginBottom: 8 }}>404</h1>
        <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 600, marginBottom: 16 }}>Oops — Page Not Found</h2>
        <p style={{ color: 'var(--gray-mid)', fontSize: '16px', lineHeight: 1.75, marginBottom: 32 }}>
          The health article or page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <Link href="/" className="btn btn-primary">Go Home →</Link>
          <Link href="/blog" className="btn btn-outline">Browse Articles</Link>
          <Link href="/search" className="btn btn-outline">Search</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
          {[
            { icon: '🥗', label: 'Nutrition', href: '/nutrition' },
            { icon: '💪', label: 'Fitness', href: '/fitness' },
            { icon: '🧠', label: 'Mental Health', href: '/mental-health' },
            { icon: '😴', label: 'Sleep', href: '/sleep' },
            { icon: '🍽️', label: 'Recipes', href: '/recipes' },
            { icon: '⚖️', label: 'Weight Loss', href: '/weight-loss' },
          ].map(c => (
            <Link key={c.href} href={c.href} style={{ padding: '14px', background: '#fff', borderRadius: 'var(--radius-md)', fontSize: '13px', fontWeight: 600, color: 'var(--slate)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 24 }}>{c.icon}</span>{c.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
