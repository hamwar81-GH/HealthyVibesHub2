import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

interface CategoryPageProps {
  title: string;
  h1: string;
  description: string;
  icon: string;
  color: string;
  bg: string;
  slug: string;
  articleCount: string;
  articles: { title: string; excerpt: string; readTime: string; date: string; img: string; tags: string[] }[];
  topics: string[];
}

export default function CategoryPageTemplate({ title, h1, description, icon, color, bg, slug, articleCount, articles, topics }: CategoryPageProps) {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg, ${bg} 0%, #fff 100%)`, padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">{title}</span>
          </nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color }}>{articleCount} Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
              {icon} {h1}
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>{description}</p>
          </div>
        </div>
      </section>

      <div style={{ padding: '12px 0', background: '#f9fafb' }}>
        <div className="container"><AdUnit type="leaderboard" label={`${title} — Top Banner Ad`} /></div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest {title} Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href={`/${slug}`} style={{ width: 200, flexShrink: 0 }}>
                      <img src={a.img} alt={`${a.title} - ${title.toLowerCase()} at healthy vibes hub`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        {a.tags.map(t => <span key={t} className="badge badge-green">{t}</span>)}
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>
                        <Link href={`/${slug}`} style={{ color: 'var(--charcoal)' }}>{a.title}</Link>
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 12 }}>{a.excerpt}</p>
                      <div style={{ display: 'flex', gap: 16, fontSize: '12px', color: 'var(--gray-mid)' }}>
                        <span>⏱ {a.readTime} read</span><span>📅 {a.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: bg, borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color, fontSize: '1.1rem', marginBottom: 12 }}>{icon} Popular Topics</h3>
                {topics.map(t => (
                  <Link key={t} href={`/${slug}`} style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.06)', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>
                ))}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
