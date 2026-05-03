'use client';
import { useState } from 'react';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export default function WaterTrackerClient() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [activity, setActivity] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [climate, setClimate] = useState<'cool' | 'moderate' | 'hot'>('moderate');
  const [result, setResult] = useState<{ liters: number; cups: number; oz: number; glasses: number } | null>(null);

  const calculate = () => {
    let w = parseFloat(weight);
    if (!w) return;
    if (unit === 'lbs') w = w * 0.453592;
    // Base: 35ml per kg body weight
    let ml = w * 35;
    // Activity adjustments
    if (activity === 'low') ml *= 0.9;
    else if (activity === 'high') ml *= 1.2;
    // Climate adjustments
    if (climate === 'hot') ml *= 1.15;
    else if (climate === 'cool') ml *= 0.95;
    const liters = Math.round(ml / 100) / 10;
    const cups = Math.round(ml / 236.6 * 10) / 10;
    const oz = Math.round(ml / 29.574);
    const glasses = Math.round(ml / 250);
    setResult({ liters, cups, oz, glasses });
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #ecfeff 0%, var(--cream) 100%)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/nutrition">Nutrition</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">Water Intake Calculator</span>
          </nav>
          <div className="section-eyebrow" style={{ color: '#0694a2' }}>Free Hydration Tool</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 12 }}>💧 Daily Water Intake Calculator 2026</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>How much water should YOU drink daily? Get a personalized recommendation based on your weight, activity level, and climate — backed by hydration science from Healthy Vibes Hub.</p>
        </div>
      </section>

      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Water Tracker — Top Ad" /></div></div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <div style={{ background: '#ecfeff', borderRadius: 'var(--radius-xl)', padding: '36px', border: '1px solid #cffafe' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: 24, fontFamily: 'var(--font-body)' }}>Personalize Your Hydration</h2>

                {/* Weight + unit */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Your Body Weight</label>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <input type="number" placeholder={unit === 'kg' ? 'e.g. 70' : 'e.g. 154'} value={weight} onChange={e => setWeight(e.target.value)}
                      style={{ flex: 1, padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid #a5f3fc', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }} />
                    <div style={{ display: 'flex', background: '#fff', borderRadius: 'var(--radius-full)', padding: 4, boxShadow: 'var(--shadow-sm)', gap: 0 }}>
                      {(['kg', 'lbs'] as const).map(u => (
                        <button key={u} onClick={() => setUnit(u)} style={{
                          padding: '8px 20px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '14px',
                          background: unit === u ? '#0694a2' : 'transparent',
                          color: unit === u ? '#fff' : 'var(--gray-mid)', transition: 'var(--transition)',
                        }}>{u}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Activity Level</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                    {([
                      { v: 'low', icon: '🚶', label: 'Low', sub: 'Mostly sitting' },
                      { v: 'moderate', icon: '🚴', label: 'Moderate', sub: 'Some exercise' },
                      { v: 'high', icon: '🏋️', label: 'High', sub: 'Daily workouts' },
                    ] as const).map(a => (
                      <button key={a.v} onClick={() => setActivity(a.v)} style={{
                        padding: '14px 10px', borderRadius: 'var(--radius-md)', textAlign: 'center', cursor: 'pointer',
                        border: `2px solid ${activity === a.v ? '#0694a2' : '#a5f3fc'}`,
                        background: activity === a.v ? '#cffafe' : '#fff', transition: 'var(--transition)',
                      }}>
                        <div style={{ fontSize: 24, marginBottom: 4 }}>{a.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: activity === a.v ? '#0694a2' : 'var(--charcoal)' }}>{a.label}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gray-mid)' }}>{a.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Climate */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Climate / Temperature</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                    {([
                      { v: 'cool', icon: '❄️', label: 'Cool', sub: 'Below 15°C / 60°F' },
                      { v: 'moderate', icon: '🌤️', label: 'Moderate', sub: '15–25°C / 60–77°F' },
                      { v: 'hot', icon: '☀️', label: 'Hot', sub: 'Above 25°C / 77°F' },
                    ] as const).map(c => (
                      <button key={c.v} onClick={() => setClimate(c.v)} style={{
                        padding: '14px 10px', borderRadius: 'var(--radius-md)', textAlign: 'center', cursor: 'pointer',
                        border: `2px solid ${climate === c.v ? '#0694a2' : '#a5f3fc'}`,
                        background: climate === c.v ? '#cffafe' : '#fff', transition: 'var(--transition)',
                      }}>
                        <div style={{ fontSize: 24, marginBottom: 4 }}>{c.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: climate === c.v ? '#0694a2' : 'var(--charcoal)' }}>{c.label}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gray-mid)' }}>{c.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={calculate} className="btn" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px', background: '#0694a2', color: '#fff', borderRadius: 'var(--radius-full)' }}>
                  Calculate My Water Intake →
                </button>

                {result && (
                  <div style={{ marginTop: 28, background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', border: '2px solid #a5f3fc' }}>
                    <div style={{ textAlign: 'center', marginBottom: 24 }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#0694a2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>💧 Your Daily Water Target</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, color: '#0694a2', lineHeight: 1 }}>{result.liters}L</div>
                      <div style={{ fontSize: '15px', color: 'var(--gray-mid)', marginTop: 4 }}>per day</div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      {[
                        { val: `${result.cups}`, label: 'US Cups', icon: '☕' },
                        { val: `${result.oz} oz`, label: 'Fluid Ounces', icon: '📏' },
                        { val: `${result.glasses}`, label: '250ml Glasses', icon: '🥤' },
                      ].map(m => (
                        <div key={m.label} style={{ background: '#ecfeff', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center' }}>
                          <div style={{ fontSize: 22, marginBottom: 4 }}>{m.icon}</div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#0694a2' }}>{m.val}</div>
                          <div style={{ fontSize: '11px', color: 'var(--gray-mid)' }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                    {/* Hydration tips */}
                    <div style={{ marginTop: 20, padding: '16px', background: '#ecfeff', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px', color: '#0694a2', marginBottom: 8 }}>💡 Hydration Tips</div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {[
                          'Start with 500ml of water immediately after waking up',
                          'Drink a glass before each meal to aid digestion',
                          'Set hourly reminders if you tend to forget',
                          'Herbal teas and water-rich foods count toward your intake',
                        ].map(t => <li key={t} style={{ fontSize: '13px', color: 'var(--slate)', display: 'flex', gap: 8 }}><span>✓</span>{t}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>

            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ marginTop: 24, background: '#ecfeff', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ color: '#0694a2', fontSize: '1rem', marginBottom: 12 }}>🔧 More Health Tools</h3>
                {[
                  { label: 'BMI Calculator', href: '/tools/bmi-calculator' },
                  { label: 'Calorie Calculator', href: '/tools/calorie-calculator' },
                  { label: 'Sleep Timer', href: '/tools/sleep-timer' },
                ].map(t => <Link key={t.label} href={t.href} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid #a5f3fc', fontSize: '14px', color: '#0694a2', fontWeight: 600 }}>→ {t.label}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
