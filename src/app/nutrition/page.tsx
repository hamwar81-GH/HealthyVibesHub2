import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Nutrition Tips & Healthy Eating Guide 2026 | Healthy Vibes Hub',
  description: 'Discover 280+ expert-reviewed nutrition articles on healthy eating, superfoods, meal planning, vitamins, and diet science at Healthy Vibes Hub. Your best nutrition resource for 2026.',
  alternates: { canonical: 'https://healthyvibeshub.com/nutrition' },
  openGraph: { title: 'Nutrition Tips & Healthy Eating Guide 2026', description: 'Expert-reviewed nutrition and healthy eating content at Healthy Vibes Hub.', url: 'https://healthyvibeshub.com/nutrition' },
};

const articles = [
  { title: '15 Superfoods That Actually Boost Your Immune System in 2026', excerpt: 'Science-backed foods that strengthen immunity, reduce inflammation, and support longevity ranked by nutritional density.', readTime: '8 min', date: 'Apr 28, 2026', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', tags: ['Superfoods', 'Immunity'] },
  { title: 'The Mediterranean Diet: Complete Meal Plan & Shopping List', excerpt: 'Everything you need to start the Mediterranean diet — a week-by-week meal plan, shopping list, and science behind why it works.', readTime: '14 min', date: 'Apr 25, 2026', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80', tags: ['Mediterranean', 'Diet Plan'] },
  { title: 'Best Vitamins and Supplements: What Science Actually Says', excerpt: 'Which supplements are worth taking? Our expert nutritionists review the latest research on vitamins D, B12, omega-3, and more.', readTime: '12 min', date: 'Apr 22, 2026', img: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&q=80', tags: ['Supplements', 'Vitamins'] },
  { title: 'How Much Protein Do You Really Need? (Calculator + Guide)', excerpt: 'Protein intake recommendations vary widely. Here is what the science actually says about protein needs for different goals.', readTime: '10 min', date: 'Apr 20, 2026', img: 'https://images.unsplash.com/photo-1544025162-d76538387798?w=500&q=80', tags: ['Protein', 'Macros'] },
  { title: 'Anti-Inflammatory Foods: The Complete Grocery List', excerpt: 'Chronic inflammation drives disease. Stock your kitchen with these 40 powerful anti-inflammatory foods recommended by dietitians.', readTime: '11 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80', tags: ['Anti-Inflammatory', 'Foods'] },
  { title: 'Gut Health Guide: How to Build a Healthy Microbiome', excerpt: 'Your gut microbiome influences everything from mood to immunity. Learn how to nourish your gut bacteria with science-backed strategies.', readTime: '13 min', date: 'Apr 15, 2026', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80', tags: ['Gut Health', 'Microbiome'] },
];

const faqs = [
  { q: 'What is the healthiest diet in 2026?', a: 'The Mediterranean diet consistently ranks as one of the healthiest dietary patterns, supported by decades of research. It emphasizes whole grains, vegetables, lean proteins, healthy fats, and minimal processed foods.' },
  { q: 'How many calories should I eat per day?', a: 'Caloric needs vary by age, sex, weight, height, and activity level. Most adults need between 1,600–2,400 calories daily, but individual needs differ. Use our calorie calculator for a personalized estimate.' },
  { q: 'What are the best foods to eat every day for optimal health?', a: 'Nutritionists recommend daily servings of leafy greens, berries, whole grains, lean proteins, legumes, nuts, and healthy fats like olive oil. Variety and minimally processed foods are key.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function NutritionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">Nutrition</span>
          </nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow">280+ Expert Articles</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>
              Healthy Vibes Hub Nutrition Guide 2026
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>
              Science-backed nutrition advice, meal plans, and healthy eating tips — reviewed by registered dietitians and certified nutritionists. Start eating better today.
            </p>
          </div>
        </div>
      </section>
      <AdUnit type="leaderboard" label="Nutrition Page — Top Banner" style={{ margin: '0 auto', maxWidth: 1200 }} />
      {/* Main content */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Nutrition Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {articles.map((a, i) => (
                  <article key={i} className="card" style={{ display: 'flex', gap: 0, flexDirection: 'row', overflow: 'hidden' }}>
                    <Link href="/nutrition" style={{ width: 200, flexShrink: 0 }}>
                      <img src={a.img} alt={`${a.title} - healthy vibes hub nutrition`} width={200} height={150} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Link>
                    <div style={{ padding: '20px 24px', flex: 1 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        {a.tags.map(t => <span key={t} className="badge badge-green">{t}</span>)}
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>
                        <Link href="/nutrition" style={{ color: 'var(--charcoal)' }}>{a.title}</Link>
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 12 }}>{a.excerpt}</p>
                      <div style={{ display: 'flex', gap: 16, fontSize: '12px', color: 'var(--gray-mid)' }}>
                        <span>⏱ {a.readTime} read</span><span>📅 {a.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              {/* In-content ad */}
              <AdUnit type="in-content" label="728×280 In-Content Ad" style={{ marginTop: 40 }} />
              {/* FAQ */}
              <div style={{ marginTop: 48 }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 24 }}>Nutrition FAQs</h2>
                {faqs.map((f, i) => (
                  <details key={i} style={{ background: 'var(--cream)', borderRadius: 'var(--radius-md)', padding: '18px 22px', marginBottom: 12, border: '1px solid var(--emerald-muted)' }}>
                    <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '15px' }}>{f.q}</summary>
                    <p style={{ marginTop: 12, fontSize: '14px', color: 'var(--gray-mid)', lineHeight: 1.8 }}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: 'var(--emerald-pale)', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: 'var(--emerald)', fontSize: '1.1rem', marginBottom: 12 }}>🥗 Top Nutrition Topics</h3>
                {['Superfoods', 'Meal Planning', 'Vitamins & Supplements', 'Gut Health', 'Anti-Inflammatory Diet', 'Protein & Macros', 'Hydration', 'Weight Management'].map(t => (
                  <Link key={t} href="/nutrition" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid var(--emerald-muted)', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>
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
