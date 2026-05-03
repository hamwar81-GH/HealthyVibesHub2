import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Healthy Recipes 2026 -- Easy Nutritious Meals | Healthy Vibes Hub',
  description: 'Browse 320+ easy, delicious, and nutritionist-approved healthy recipes for every meal and dietary need at Healthy Vibes Hub. Quick, low-calorie, high-protein meal ideas for 2026.',
  alternates: { canonical: 'https://www.healthyvibeshub.com/recipes' },
};

const recipes = [
  { title: 'High-Protein Meal Prep: 20 Recipes Under 400 Calories', excerpt: 'A week of satisfying, protein-packed meals you can prep in just 2 hours on Sunday. Each meal is under 400 calories and tastes amazing.', readTime: '9 min', date: 'Apr 29, 2026', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80', tags: ['Meal Prep', 'High Protein'], calories: '< 400 cal', time: '30 min' },
  { title: 'Mediterranean Quinoa Bowl -- The Perfect Healthy Lunch', excerpt: 'A vibrant, satisfying quinoa bowl packed with vegetables, chickpeas, feta, and a lemon-herb dressing. Ready in 20 minutes.', readTime: '5 min', date: 'Apr 27, 2026', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80', tags: ['Vegetarian', 'Lunch'], calories: '380 cal', time: '20 min' },
  { title: '15 Healthy Smoothie Recipes for Energy and Weight Loss', excerpt: 'Nutrient-dense, filling smoothies that support your health goals -- from fat-burning green smoothies to protein-packed post-workout blends.', readTime: '7 min', date: 'Apr 24, 2026', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80', tags: ['Smoothies', 'Breakfast'], calories: '< 300 cal', time: '5 min' },
  { title: 'Anti-Inflammatory Turmeric Chicken -- Easy Weeknight Dinner', excerpt: 'A vibrant, healing chicken dish loaded with anti-inflammatory spices. Ready in 30 minutes and loaded with flavor and nutrition.', readTime: '6 min', date: 'Apr 21, 2026', img: 'https://images.unsplash.com/photo-1544025162-d76538387798?w=500&q=80', tags: ['Dinner', 'Anti-Inflammatory'], calories: '320 cal', time: '30 min' },
  { title: 'Low-Carb Cauliflower Fried Rice -- Better Than Takeout', excerpt: 'This veggie-packed cauliflower fried rice satisfies cravings without the carbs. Under 250 calories and ready in 15 minutes.', readTime: '5 min', date: 'Apr 18, 2026', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80', tags: ['Low-Carb', 'Dinner'], calories: '250 cal', time: '15 min' },
  { title: 'Overnight Oats 8 Ways -- Healthy Breakfasts for the Whole Week', excerpt: 'Eight delicious overnight oat combinations that take just 5 minutes to prepare the night before. Healthy, filling, and endlessly customizable.', readTime: '7 min', date: 'Apr 15, 2026', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80', tags: ['Breakfast', 'Meal Prep'], calories: '350 cal', time: '5 min' },
];

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Smoothies', 'Meal Prep', 'Vegetarian', 'Vegan', 'Low-Carb', 'High-Protein', 'Gluten-Free', 'Desserts'];

export default function RecipesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #fff 100%)', padding: '56px 0' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Healthy Recipes</span></nav>
          <div style={{ maxWidth: 700 }}>
            <div className="section-eyebrow" style={{ color: '#e53e3e' }}>320+ Nutritionist-Approved Recipes</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 16 }}>🍽️ Healthy Recipes 2026 -- Healthy Vibes Hub</h1>
            <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Easy, delicious, and nutritionist-approved healthy recipes for every meal, diet, and goal. Eat well, feel great, live longer.</p>
          </div>
        </div>
      </section>
      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Recipes -- Top Banner Ad" /></div></div>
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {/* Recipe filter tabs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36, paddingBottom: 20, borderBottom: '1px solid var(--gray-light)' }}>
            {categories.map(c => (
              <Link key={c} href="/recipes" style={{ padding: '7px 16px', borderRadius: 'var(--radius-full)', background: 'var(--gray-light)', fontSize: '13px', fontWeight: 600, color: 'var(--slate)', transition: 'var(--transition)' }}
              >{c}</Link>
            ))}
          </div>
          <div className="grid-main-sidebar">
            <div>
              <h2 style={{ fontSize: '1.4rem', marginBottom: 28 }}>Latest Healthy Recipes</h2>
              <div className="grid-2">
                {recipes.map((r, i) => (
                  <article key={i} className="card">
                    <Link href="/recipes" style={{ display: 'block', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <img src={r.img} alt={`${r.title} - healthy recipe at healthy vibes hub`} width={400} height={250} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      />
                    </Link>
                    <div style={{ padding: '18px' }}>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>{r.tags.map(t => <span key={t} className="badge badge-red">{t}</span>)}</div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.4, marginBottom: 10 }}>
                        <Link href="/recipes" style={{ color: 'var(--charcoal)' }}>{r.title}</Link>
                      </h3>
                      <p style={{ fontSize: '12px', color: 'var(--gray-mid)', lineHeight: 1.6, marginBottom: 12 }}>{r.excerpt}</p>
                      <div style={{ display: 'flex', gap: 12, fontSize: '12px' }}>
                        <span style={{ background: 'var(--emerald-pale)', color: 'var(--emerald)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>🔥 {r.calories}</span>
                        <span style={{ background: 'var(--gray-light)', color: 'var(--gray-mid)', padding: '3px 10px', borderRadius: 'var(--radius-full)', fontWeight: 600 }}>⏱ {r.time}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>
            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ background: '#fff5f5', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ color: '#e53e3e', fontSize: '1.1rem', marginBottom: 12 }}>🍽️ Recipe Categories</h3>
                {categories.map(t => <Link key={t} href="/recipes" style={{ display: 'block', padding: '8px 0', borderBottom: '1px solid #fed7d7', fontSize: '14px', color: 'var(--slate)' }}>→ {t}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
