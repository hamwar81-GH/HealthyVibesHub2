'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  { label: 'Nutrition', href: '/nutrition', icon: '🥗' },
  { label: 'Fitness', href: '/fitness', icon: '💪' },
  { label: 'Mental Health', href: '/mental-health', icon: '🧠' },
  { label: 'Sleep', href: '/sleep', icon: '😴' },
  { label: 'Weight Loss', href: '/weight-loss', icon: '⚖️' },
  { label: "Women's Health", href: '/womens-health', icon: '♀️' },
  { label: "Men's Health", href: '/mens-health', icon: '♂️' },
  { label: 'Beauty & Skin', href: '/beauty-skin', icon: '✨' },
  { label: 'Recipes', href: '/recipes', icon: '🍽️' },
  { label: 'Blog', href: '/blog', icon: '📝' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) window.location.href = `/search?q=${encodeURIComponent(search.trim())}`;
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--emerald)', color: '#fff', fontSize: '13px', padding: '8px 0' }}>
        <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span>🌿 Expert-Reviewed Health Content You Can Trust</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="tel:+18001234567" style={{ color: '#fff', opacity: 0.9 }}>📞 1-800-123-4567</a>
            <a href="mailto:hello@healthyvibeshub.com" style={{ color: '#fff', opacity: 0.9 }}>✉️ hello@healthyvibeshub.com</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        style={{
          position: 'sticky', top: 0, zIndex: 900,
          background: scrolled ? 'rgba(255,254,249,0.97)' : 'var(--warm-white)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? 'var(--shadow-md)' : '0 1px 0 rgba(0,0,0,0.06)',
          transition: 'var(--transition)',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '14px 32px', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" aria-label="Healthy Vibes Hub Home" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{
              width: 42, height: 42,
              background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-light) 100%)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', flexShrink: 0,
              boxShadow: 'var(--shadow-emerald)',
            }} aria-hidden="true">🌿</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', color: 'var(--emerald)', lineHeight: 1.1 }}>
                Healthy Vibes Hub
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--gray-mid)', textTransform: 'uppercase' }}>
                Wellness · Nutrition · Life
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }} className="desktop-nav">
            {categories.slice(0, 7).map(c => (
              <Link key={c.href} href={c.href} style={{
                padding: '7px 13px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px', fontWeight: 500,
                color: 'var(--slate)',
                transition: 'var(--transition)',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--emerald-pale)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--emerald)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--slate)';
                }}
              >{c.label}</Link>
            ))}
            <Link href="/recipes" style={{ padding: '7px 13px', borderRadius: 'var(--radius-full)', fontSize: '14px', fontWeight: 500, color: 'var(--slate)', transition: 'var(--transition)' }}>Recipes</Link>
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                width: 40, height: 40,
                borderRadius: 'var(--radius-full)',
                background: 'var(--emerald-pale)',
                color: 'var(--emerald)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', transition: 'var(--transition)',
              }}
            >🔍</button>
            <Link href="/newsletter" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '14px' }}>
              Newsletter
            </Link>
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none',
                width: 40, height: 40,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--emerald-pale)',
                color: 'var(--emerald)',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}
              className="mobile-menu-btn"
            >{menuOpen ? '✕' : '☰'}</button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div style={{ background: 'var(--emerald-pale)', padding: '16px 0', borderTop: '1px solid var(--emerald-muted)' }}>
            <div className="container">
              <form onSubmit={handleSearch} role="search" className="search-wrapper" style={{ maxWidth: '100%' }}>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search articles, recipes, health tips..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search Healthy Vibes Hub"
                  autoFocus
                />
                <button type="submit" className="search-btn" aria-label="Submit search">🔍</button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <nav aria-label="Mobile navigation" style={{ background: '#fff', borderTop: '1px solid var(--emerald-muted)', padding: '16px 0' }}>
            <div className="container">
              {categories.map(c => (
                <Link key={c.href} href={c.href} onClick={() => setMenuOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 0', borderBottom: '1px solid var(--gray-light)',
                  fontSize: '15px', fontWeight: 500, color: 'var(--slate)',
                }}>
                  <span>{c.icon}</span>{c.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
