import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export const metadata: Metadata = {
  title: 'Healthy Vibes Hub | Best Health & Wellness Guide 2026',
  description: 'Healthy Vibes Hub -- your trusted source for expert-reviewed nutrition, fitness, mental health, sleep science, and wellness tips. Live your healthiest life in 2026.',
  alternates: { canonical: 'https://www.healthyvibeshub.com' },
};

const heroSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Healthy Vibes Hub -- Best Health & Wellness Guide 2026',
  url: 'https://www.healthyvibeshub.com',
  description: 'Expert-reviewed health, nutrition, fitness, and wellness content.',
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.healthyvibeshub.com' }] },
};

const featuredArticles = [
  { category: 'Nutrition', badge: 'badge-green', href: '/nutrition', title: '15 Superfoods That Actually Boost Your Immune System in 2026', excerpt: 'Science-backed foods that strengthen immunity, reduce inflammation, and support longevity -- ranked by nutritional density and bioavailability.', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', author: 'Dr. Emily Chen', date: 'Apr 28, 2026' },
  { category: 'Fitness', badge: 'badge-blue', href: '/fitness', title: 'The Ultimate 30-Day Home Workout Plan for Beginners (No Equipment)', excerpt: 'Build strength, burn fat, and improve cardiovascular health with this expert-designed, progressive bodyweight program.', readTime: '12 min read', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', author: 'Marcus Williams', date: 'Apr 25, 2026' },
  { category: 'Mental Health', badge: 'badge-purple', href: '/mental-health', title: 'Science-Backed Techniques to Reduce Anxiety and Stress Instantly', excerpt: 'Clinical psychologists reveal the most effective evidence-based strategies for managing anxiety, panic, and daily stress.', readTime: '10 min read', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', author: 'Dr. Sarah Miller', date: 'Apr 22, 2026' },
];

const categories = [
  { label: 'Nutrition', href: '/nutrition', icon: '🥗', color: 'var(--emerald)', bg: 'var(--emerald-pale)', desc: '280+ articles', count: '280+' },
  { label: 'Fitness', href: '/fitness', icon: '💪', color: '#3182ce', bg: '#ebf8ff', desc: '190+ workouts', count: '190+' },
  { label: 'Mental Health', href: '/mental-health', icon: '🧠', color: '#7c3aed', bg: '#f5f3ff', desc: '160+ guides', count: '160+' },
  { label: 'Sleep', href: '/sleep', icon: '😴', color: '#0694a2', bg: '#ecfeff', desc: '95+ tips', count: '95+' },
  { label: 'Weight Loss', href: '/weight-loss', icon: '⚖️', color: '#d97706', bg: '#fffbeb', desc: '145+ strategies', count: '145+' },
  { label: "Women's Health", href: '/womens-health', icon: '♀️', color: '#d53f8c', bg: '#fff0f9', desc: '210+ articles', count: '210+' },
  { label: "Men's Health", href: '/mens-health', icon: '♂️', color: '#2563eb', bg: '#eff6ff', desc: '175+ articles', count: '175+' },
  { label: 'Recipes', href: '/recipes', icon: '🍽️', color: '#e53e3e', bg: '#fff5f5', desc: '320+ recipes', count: '320+' },
];

const trendingPosts = [
  { num: '01', category: 'Sleep', href: '/sleep', title: '7 Evidence-Based Sleep Hacks for Better Deep Sleep Tonight', date: 'Apr 27, 2026' },
  { num: '02', category: 'Nutrition', href: '/nutrition', title: 'The Mediterranean Diet Meal Plan: Complete 7-Day Guide', date: 'Apr 25, 2026' },
  { num: '03', category: 'Fitness', href: '/fitness', title: 'How to Lose Belly Fat: What Actually Works According to Science', date: 'Apr 23, 2026' },
  { num: '04', category: 'Mental Health', href: '/mental-health', title: 'The 5-Minute Morning Routine That Transforms Your Mental Health', date: 'Apr 20, 2026' },
  { num: '05', category: 'Beauty', href: '/beauty-skin', title: 'Best Skincare Ingredients for Glowing Skin: Dermatologist Guide', date: 'Apr 18, 2026' },
];

const latestArticles = [
  { category: 'Recipes', href: '/recipes', title: 'High-Protein Meal Prep: 20 Recipes Under 400 Calories', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80', readTime: '9 min', date: 'Apr 29, 2026' },
  { category: "Women's Health", href: '/womens-health', title: 'Hormonal Balance After 35: A Complete Lifestyle Guide', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', readTime: '11 min', date: 'Apr 28, 2026' },
  { category: "Men's Health", href: '/mens-health', title: 'Testosterone Optimization: Natural Strategies That Work', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80', readTime: '10 min', date: 'Apr 27, 2026' },
  { category: 'Beauty & Skin', href: '/beauty-skin', title: 'The Ultimate Anti-Aging Skincare Routine for Every Budget', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', readTime: '7 min', date: 'Apr 26, 2026' },
  { category: 'Weight Loss', href: '/weight-loss', title: 'Intermittent Fasting: Does It Really Work? Science Says...', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80', readTime: '13 min', date: 'Apr 25, 2026' },
  { category: 'Sleep', href: '/sleep', title: 'Sleep Apnea Signs You Should Never Ignore (Doctor Explains)', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80', readTime: '8 min', date: 'Apr 24, 2026' },
];

const stats = [
  { num: '2.4M+', label: 'Monthly Readers' },
  { num: '1,800+', label: 'Expert Articles' },
  { num: '48', label: 'Health Experts' },
  { num: '125K+', label: 'Newsletter Subscribers' },
];

const experts = [
  { name: 'Dr. Emily Chen', role: 'MD, Nutritional Medicine', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80', articles: 124 },
  { name: 'Marcus Williams', role: 'CSCS, Exercise Physiologist', img: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=200&q=80', articles: 98 },
  { name: 'Dr. Sarah Miller', role: 'PhD, Clinical Psychology', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80', articles: 87 },
  { name: 'Lisa Park', role: 'RD, Sports Dietitian', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&q=80', articles: 76 },
];

const faqs = [
  { q: 'Is the health content on Healthy Vibes Hub medically reviewed?', a: 'Yes. All articles on Healthy Vibes Hub are reviewed by licensed medical professionals, certified nutritionists, or credentialed fitness experts before publication. We maintain strict editorial guidelines to ensure accuracy and reliability.' },
  { q: 'How often is new health content published?', a: 'We publish 5–7 new articles every week across all health categories. Our newsletter delivers the best new content directly to your inbox every Tuesday.' },
  { q: 'Can I trust nutrition and fitness advice from Healthy Vibes Hub?', a: 'Our content is based on peer-reviewed research and reviewed by certified health professionals. However, always consult your physician before making significant changes to your diet or exercise routine.' },
  { q: 'What health topics does Healthy Vibes Hub cover?', a: 'We cover a wide range of wellness topics including nutrition, fitness, mental health, sleep science, weight management, women\'s health, men\'s health, skincare, and healthy recipes -- all in one place.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* --- HERO --- */}
      <section style={{ background: 'linear-gradient(160deg, #e6f4ef 0%, var(--cream) 60%, #fef9ee 100%)', padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 500, height: 500, background: 'radial-gradient(circle, rgba(10,104,71,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 300, height: 300, background: 'radial-gradient(circle, rgba(212,168,71,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div className="animate-fade-up">
              <div className="section-eyebrow">Trusted by 2.4M+ Readers</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, color: 'var(--charcoal)', lineHeight: 1.12, marginBottom: 20 }}>
                Your Complete <span style={{ color: 'var(--emerald)' }}>Healthy Vibes Hub</span> for 2026 Wellness
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--gray-mid)', lineHeight: 1.75, marginBottom: 32 }}>
                Expert-reviewed nutrition guides, science-backed fitness plans, mental wellness strategies, and 1,800+ healthy lifestyle articles -- all in one place. Start your wellness journey today.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                <Link href="/nutrition" className="btn btn-primary">Explore Articles →</Link>
                <Link href="/about" className="btn btn-outline">Our Experts</Link>
              </div>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                {stats.map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--emerald)' }}>{s.num}</div>
                    <div style={{ fontSize: '13px', color: 'var(--gray-mid)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-up-2" style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '4/3' }}>
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=720&q=85"
                  alt="Healthy Vibes Hub - nutritious foods and wellness lifestyle"
                  width={720} height={540}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="eager"
                />
              </div>
              {/* Floating card */}
              <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 'var(--radius-md)', padding: '14px 20px', boxShadow: 'var(--shadow-lg)', display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, background: 'var(--emerald-pale)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🏆</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--charcoal)' }}>Expert-Reviewed</div>
                  <div style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>48 certified health professionals</div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: -16, right: -16, background: 'var(--gold)', borderRadius: 'var(--radius-md)', padding: '12px 16px', boxShadow: '0 8px 24px rgba(212,168,71,0.3)', color: '#fff' }}>
                <div style={{ fontWeight: 800, fontSize: '20px', lineHeight: 1 }}>1,800+</div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>Health Articles</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .hero-grid{grid-template-columns:1fr!important;} }`}</style>
      </section>

      {/* --- AD: LEADERBOARD --- */}
      <div style={{ padding: '16px 0', background: '#f9fafb' }}>
        <div className="container">
          <AdUnit type="leaderboard" label="Top Banner Advertisement" />
        </div>
      </div>

      {/* --- CATEGORIES GRID --- */}
      <section className="section-sm" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Browse by Topic</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: 12 }}>All Health Categories</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: 480, margin: '0 auto' }}>From nutrition science to mental wellness -- explore every aspect of healthy living.</p>
          </div>
          <div className="grid-4">
            {categories.map(c => (
              <Link key={c.href} href={c.href} className="card" style={{ padding: '24px 20px', textAlign: 'center', background: c.bg, boxShadow: 'none', border: `1px solid ${c.color}22` }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '15px', color: 'var(--charcoal)', marginBottom: 4 }}>{c.label}</h3>
                <div style={{ fontSize: '12px', color: c.color, fontWeight: 600 }}>{c.count} Articles</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED ARTICLES --- */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-eyebrow">Editor's Picks</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>Top Health Articles This Week</h2>
            </div>
            <Link href="/blog" className="btn btn-outline" style={{ fontSize: '14px' }}>View All Articles →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {featuredArticles.map((a, i) => (
              <article key={i} className="card">
                <Link href={a.href} style={{ display: 'block' }}>
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                    <img src={a.img} alt={`${a.title} - Healthy Vibes Hub`} width={600} height={338} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                  </div>
                </Link>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span className={`badge ${a.badge}`}>{a.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{a.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>
                    <Link href={a.href} style={{ color: 'var(--charcoal)', transition: 'color var(--transition)' }}
                    >{a.title}</Link>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: 16 }}>{a.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--gray-light)', paddingTop: 14 }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--charcoal)' }}>{a.author}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRENDING + AD SIDEBAR --- */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <div className="section-eyebrow">Popular Now</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 28 }}>Trending Health Articles</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {trendingPosts.map((p, i) => (
                  <article key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--emerald-muted)', lineHeight: 1, flexShrink: 0, minWidth: 48 }}>{p.num}</div>
                    <div>
                      <span className="badge badge-green" style={{ marginBottom: 8 }}>{p.category}</span>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.5, marginBottom: 6 }}>
                        <Link href={p.href} style={{ color: 'var(--charcoal)' }}
                        >{p.title}</Link>
                      </h3>
                      <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{p.date}</span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="ad-unit ad-unit-in-content" style={{ marginTop: 32 }}>
                <span style={{ fontSize: '32px' }}>📢</span>
                <span>Advertise Here -- 728×90 In-Content Ad</span>
              </div>
            </div>
            {/* Sidebar */}
            <aside aria-label="Sidebar">
              <AdUnit type="sidebar" label="300×600 Sidebar Advertisement" />
              <div style={{ background: 'var(--emerald-pale)', borderRadius: 'var(--radius-lg)', padding: 28, marginTop: 28 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: 8, color: 'var(--emerald)' }}>🌿 Health Tip of the Day</h3>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.7 }}>"Drinking 500ml of water first thing in the morning boosts metabolism by up to 30% for 30–40 minutes." -- Harvard Health</p>
                <Link href="/nutrition" className="btn btn-primary" style={{ marginTop: 16, fontSize: '13px', padding: '10px 20px' }}>Read More Tips →</Link>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, color: 'var(--slate)' }}>Popular Categories</h3>
                {categories.map(c => (
                  <Link key={c.href} href={c.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '14px', color: 'var(--slate)' }}
                  >
                    <span>{c.icon} {c.label}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{c.count}</span>
                  </Link>
                ))}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Advertisement" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>

      {/* --- LATEST ARTICLES GRID --- */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-eyebrow">Fresh Content</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Latest Health Articles</h2>
            </div>
            <Link href="/blog" className="btn btn-outline" style={{ fontSize: '14px' }}>See All →</Link>
          </div>
          <div className="grid-3">
            {latestArticles.map((a, i) => (
              <article key={i} className="card">
                <Link href={a.href}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={a.img} alt={`${a.title} - healthy vibes hub`} width={400} height={250} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    />
                  </div>
                </Link>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span className="badge badge-green">{a.category}</span>
                    <span style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{a.readTime} read</span>
                  </div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.45, marginBottom: 12 }}>
                    <Link href={a.href} style={{ color: 'var(--charcoal)' }}
                    >{a.title}</Link>
                  </h3>
                  <div style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>{a.date}</div>
                </div>
              </article>
            ))}
          </div>
          {/* In-content ad */}
          <AdUnit type="leaderboard" label="728×90 In-Content Advertisement" style={{ marginTop: 40 }} />
        </div>
      </section>

      {/* --- EXPERT TEAM --- */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>EEAT -- Expertise & Authority</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', marginBottom: 12 }}>Meet Our Health Experts</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: 540, margin: '0 auto' }}>Every article on Healthy Vibes Hub is written or reviewed by licensed medical professionals, registered dietitians, and certified fitness experts.</p>
          </div>
          <div className="grid-4">
            {experts.map((e, i) => (
              <Link key={i} href="/authors" className="card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 16px', border: '3px solid var(--emerald-pale)' }}>
                  <img src={e.img} alt={`${e.name} - health expert at Healthy Vibes Hub`} width={80} height={80} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 700, marginBottom: 4 }}>{e.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--emerald)', fontWeight: 500, marginBottom: 8 }}>{e.role}</p>
                <span className="badge badge-green">{e.articles} Articles</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/authors" className="btn btn-outline">Meet All Experts →</Link>
          </div>
        </div>
      </section>

      {/* --- HEALTH TOOLS PROMO SECTION --- */}
      <section className="section-sm" style={{ background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--slate) 100%)', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: '🍎', title: 'Calorie Calculator', desc: 'Calculate your daily caloric needs for weight loss or gain.', href: '/tools/calorie-calculator' },
              { icon: '💧', title: 'Water Intake Tracker', desc: 'Find out exactly how much water you should drink daily.', href: '/tools/water-tracker' },
              { icon: '🏃', title: 'BMI Calculator', desc: 'Check your Body Mass Index and what it means for your health.', href: '/tools/bmi-calculator' },
              { icon: '😴', title: 'Sleep Timer', desc: 'Calculate the optimal bedtime for your wake-up schedule.', href: '/tools/sleep-timer' },
            ].map((t, i) => (
              <Link key={i} href={t.href} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px 20px',
                transition: 'var(--transition)',
                display: 'block',
              }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ background: '#fff', borderRadius: 'var(--radius-md)', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <summary style={{ fontWeight: 600, fontSize: '15px', cursor: 'pointer', color: 'var(--charcoal)', lineHeight: 1.5, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {f.q} <span style={{ color: 'var(--emerald)', flexShrink: 0, marginLeft: 12 }}>＋</span>
                </summary>
                <p style={{ fontSize: '14px', color: 'var(--gray-mid)', lineHeight: 1.8, marginTop: 14, borderTop: '1px solid var(--gray-light)', paddingTop: 14 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM AD --- */}
      <div style={{ padding: '16px 0', background: '#f9fafb' }}>
        <div className="container">
          <AdUnit type="leaderboard" label="Bottom Leaderboard Advertisement" />
        </div>
      </div>
    </>
  );
}
