'use client';
import { useState } from 'react';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export default function CalorieCalculatorClient() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('1.375');
  const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');
  const [result, setResult] = useState<{ bmr: number; tdee: number; target: number; protein: number; carbs: number; fat: number } | null>(null);

  const activityLevels = [
    { value: '1.2', label: 'Sedentary (desk job, little exercise)' },
    { value: '1.375', label: 'Lightly Active (1–3 days/week exercise)' },
    { value: '1.55', label: 'Moderately Active (3–5 days/week)' },
    { value: '1.725', label: 'Very Active (6–7 days/week hard training)' },
    { value: '1.9', label: 'Extremely Active (athlete, physical job)' },
  ];

  const calculate = () => {
    const a = parseFloat(age), h = parseFloat(height), w = parseFloat(weight), act = parseFloat(activity);
    if (!a || !h || !w) return;
    // Mifflin-St Jeor Equation
    const bmr = gender === 'male'
      ? (10 * w) + (6.25 * h) - (5 * a) + 5
      : (10 * w) + (6.25 * h) - (5 * a) - 161;
    const tdee = Math.round(bmr * act);
    const target = goal === 'lose' ? tdee - 500 : goal === 'gain' ? tdee + 300 : tdee;
    const protein = Math.round(w * 1.8); // ~1.8g per kg
    const fat = Math.round((target * 0.25) / 9);
    const carbs = Math.round((target - (protein * 4) - (fat * 9)) / 4);
    setResult({ bmr: Math.round(bmr), tdee, target, protein, carbs, fat });
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, var(--cream) 100%)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/nutrition">Nutrition</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">Calorie Calculator</span>
          </nav>
          <div className="section-eyebrow" style={{ color: '#d97706' }}>Free Nutrition Tool</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 12 }}>🍎 Calorie Calculator 2026 — Find Your Daily Calorie Needs</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Calculate your exact daily calorie requirements using the Mifflin-St Jeor equation — the most accurate method endorsed by dietitians. Get personalized macros for your goal.</p>
        </div>
      </section>

      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Calorie Calculator — Top Ad" /></div></div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <div style={{ background: 'var(--cream)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: 24, fontFamily: 'var(--font-body)' }}>Enter Your Details</h2>

                {/* Gender toggle */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Biological Sex</label>
                  <div style={{ display: 'flex', background: '#fff', borderRadius: 'var(--radius-full)', padding: 4, boxShadow: 'var(--shadow-sm)', width: 'fit-content', gap: 0 }}>
                    {(['male', 'female'] as const).map(g => (
                      <button key={g} onClick={() => setGender(g)} style={{
                        padding: '9px 28px', borderRadius: 'var(--radius-full)', fontWeight: 600,
                        fontSize: '14px', transition: 'var(--transition)',
                        background: gender === g ? 'var(--emerald)' : 'transparent',
                        color: gender === g ? '#fff' : 'var(--gray-mid)',
                      }}>{g.charAt(0).toUpperCase() + g.slice(1)}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
                  {[
                    { label: 'Age (years)', placeholder: 'e.g. 30', value: age, set: setAge },
                    { label: 'Height (cm)', placeholder: 'e.g. 170', value: height, set: setHeight },
                    { label: 'Weight (kg)', placeholder: 'e.g. 70', value: weight, set: setWeight },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: 6, color: 'var(--slate)' }}>{f.label}</label>
                      <input type="number" placeholder={f.placeholder} value={f.value} onChange={e => f.set(e.target.value)}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '15px', fontFamily: 'var(--font-body)', outline: 'none' }} />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: 6, color: 'var(--slate)' }}>Activity Level</label>
                  <select value={activity} onChange={e => setActivity(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }}>
                    {activityLevels.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: 8, color: 'var(--slate)' }}>Your Goal</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                    {([
                      { v: 'lose', icon: '📉', label: 'Lose Weight', sub: '−500 cal/day' },
                      { v: 'maintain', icon: '⚖️', label: 'Maintain', sub: 'TDEE calories' },
                      { v: 'gain', icon: '📈', label: 'Build Muscle', sub: '+300 cal/day' },
                    ] as const).map(g => (
                      <button key={g.v} onClick={() => setGoal(g.v)} style={{
                        padding: '14px 10px', borderRadius: 'var(--radius-md)', border: `2px solid ${goal === g.v ? 'var(--emerald)' : 'var(--gray-light)'}`,
                        background: goal === g.v ? 'var(--emerald-pale)' : '#fff', cursor: 'pointer', textAlign: 'center', transition: 'var(--transition)',
                      }}>
                        <div style={{ fontSize: 24, marginBottom: 4 }}>{g.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: goal === g.v ? 'var(--emerald)' : 'var(--charcoal)' }}>{g.label}</div>
                        <div style={{ fontSize: '11px', color: 'var(--gray-mid)' }}>{g.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={calculate} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px' }}>
                  Calculate My Calories →
                </button>

                {result && (
                  <div style={{ marginTop: 28 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                      <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '20px', textAlign: 'center', border: '1px solid var(--gray-light)' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gray-mid)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Basal Metabolic Rate</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--emerald)' }}>{result.bmr}</div>
                        <div style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>calories at rest</div>
                      </div>
                      <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '20px', textAlign: 'center', border: '1px solid var(--gray-light)' }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gray-mid)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Maintenance (TDEE)</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, color: '#3182ce' }}>{result.tdee}</div>
                        <div style={{ fontSize: '12px', color: 'var(--gray-mid)' }}>calories/day</div>
                      </div>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, var(--emerald) 0%, var(--emerald-mid) 100%)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'center', marginBottom: 20, color: '#fff' }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6, opacity: 0.8 }}>🎯 Your Daily Target</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800 }}>{result.target}</div>
                      <div style={{ fontSize: '14px', opacity: 0.85 }}>calories per day</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: 12, color: 'var(--charcoal)' }}>Recommended Daily Macros</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                        {[
                          { label: 'Protein', val: `${result.protein}g`, color: '#e53e3e', sub: `${result.protein * 4} cal` },
                          { label: 'Carbs', val: `${result.carbs}g`, color: '#d97706', sub: `${result.carbs * 4} cal` },
                          { label: 'Fat', val: `${result.fat}g`, color: '#7c3aed', sub: `${result.fat * 9} cal` },
                        ].map(m => (
                          <div key={m.label} style={{ background: '#fff', border: `2px solid ${m.color}22`, borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'center' }}>
                            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: m.color }}>{m.val}</div>
                            <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: 2 }}>{m.label}</div>
                            <div style={{ fontSize: '11px', color: 'var(--gray-mid)' }}>{m.sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 40, padding: '24px', background: 'var(--cream)', borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: 12 }}>How Is This Calculated?</h2>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.85 }}>
                  This calculator uses the <strong>Mifflin-St Jeor equation</strong>, which is considered the most accurate formula for estimating Basal Metabolic Rate (BMR) by the Academy of Nutrition and Dietetics. Your BMR is then multiplied by your activity factor (TDEE). Goal adjustments follow standard clinical recommendations: a 500 calorie daily deficit for safe weight loss (~0.5kg/week), or a 300 calorie surplus for lean muscle gain.
                </p>
                <div style={{ marginTop: 16, padding: '14px', background: '#fef3cd', borderRadius: 'var(--radius-md)', border: '1px solid #fbbf24', fontSize: '13px', color: '#92400e' }}>
                  ⚠️ These calculations are estimates. Individual metabolism varies. Consult a registered dietitian for a personalized nutrition plan.
                </div>
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>

            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ marginTop: 24, background: '#fffbeb', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ color: '#d97706', fontSize: '1rem', marginBottom: 12 }}>🔧 More Health Tools</h3>
                {[
                  { label: 'BMI Calculator', href: '/tools/bmi-calculator' },
                  { label: 'Water Intake Tracker', href: '/tools/water-tracker' },
                  { label: 'Sleep Timer', href: '/tools/sleep-timer' },
                ].map(t => <Link key={t.label} href={t.href} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid #fde68a', fontSize: '14px', color: '#d97706', fontWeight: 600 }}>→ {t.label}</Link>)}
              </div>
              <div style={{ marginTop: 24, background: '#fff', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', marginBottom: 12 }}>📚 Related Articles</h3>
                {[
                  { label: 'How Much Protein Do You Really Need?', href: '/nutrition' },
                  { label: 'Intermittent Fasting: Does It Work?', href: '/weight-loss' },
                  { label: 'The Mediterranean Diet Meal Plan', href: '/nutrition' },
                ].map(a => <Link key={a.label} href={a.href} style={{ display: 'block', fontSize: '13px', color: 'var(--slate)', padding: '8px 0', borderBottom: '1px solid var(--gray-light)' }}>{a.label}</Link>)}
              </div>
              <AdUnit type="rectangle" label="300×250 Rectangle Ad" style={{ marginTop: 24 }} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
