'use client';
import { useState } from 'react';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export default function BMICalculator() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState<{ bmi: number; category: string; color: string; advice: string } | null>(null);

  const calculate = () => {
    let bmi: number;
    if (unit === 'metric') {
      const h = parseFloat(height) / 100;
      const w = parseFloat(weight);
      if (!h || !w) return;
      bmi = w / (h * h);
    } else {
      const totalIn = (parseFloat(heightFt) * 12) + parseFloat(heightIn || '0');
      const w = parseFloat(weight);
      if (!totalIn || !w) return;
      bmi = (w / (totalIn * totalIn)) * 703;
    }
    bmi = Math.round(bmi * 10) / 10;
    let category: string, color: string, advice: string;
    if (bmi < 18.5) { category = 'Underweight'; color = '#3182ce'; advice = 'Consider increasing caloric intake with nutrient-dense foods. Consult a registered dietitian for personalized guidance.'; }
    else if (bmi < 25) { category = 'Healthy Weight'; color = '#0a6847'; advice = 'Great work! Maintain your healthy lifestyle with balanced nutrition, regular exercise, and quality sleep.'; }
    else if (bmi < 30) { category = 'Overweight'; color = '#d97706'; advice = 'Moderate lifestyle adjustments — including a balanced diet and regular exercise — can help reach a healthier weight.'; }
    else { category = 'Obese'; color = '#e53e3e'; advice = 'Consult your physician for a personalized weight management plan. Small sustainable changes make a big difference.'; }
    setResult({ bmi, category, color, advice });
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/blog">Tools</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">BMI Calculator</span>
          </nav>
          <div className="section-eyebrow">Free Health Tool</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 12 }}>🏃 BMI Calculator 2026 — Healthy Vibes Hub</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Calculate your Body Mass Index (BMI) instantly. Understand what your BMI means for your health and get expert advice on next steps.</p>
        </div>
      </section>

      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="BMI Calculator — Top Ad" /></div></div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <div style={{ background: 'var(--cream)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
                {/* Unit Toggle */}
                <div style={{ display: 'flex', marginBottom: 28, background: '#fff', borderRadius: 'var(--radius-full)', padding: 4, boxShadow: 'var(--shadow-sm)', width: 'fit-content' }}>
                  {(['metric', 'imperial'] as const).map(u => (
                    <button key={u} onClick={() => setUnit(u)} style={{
                      padding: '9px 24px', borderRadius: 'var(--radius-full)',
                      fontWeight: 600, fontSize: '14px', transition: 'var(--transition)',
                      background: unit === u ? 'var(--emerald)' : 'transparent',
                      color: unit === u ? '#fff' : 'var(--gray-mid)',
                    }}>{u.charAt(0).toUpperCase() + u.slice(1)}</button>
                  ))}
                </div>

                {/* Inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                  {unit === 'metric' ? (
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Height (cm)</label>
                      <input type="number" placeholder="e.g. 175" value={height} onChange={e => setHeight(e.target.value)}
                        style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '16px', fontFamily: 'var(--font-body)', outline: 'none' }} />
                    </div>
                  ) : (
                    <>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Height (ft)</label>
                        <input type="number" placeholder="5" value={heightFt} onChange={e => setHeightFt(e.target.value)}
                          style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '16px', fontFamily: 'var(--font-body)', outline: 'none' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Height (in)</label>
                        <input type="number" placeholder="9" value={heightIn} onChange={e => setHeightIn(e.target.value)}
                          style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '16px', fontFamily: 'var(--font-body)', outline: 'none' }} />
                      </div>
                    </>
                  )}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <input type="number" placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 154'} value={weight} onChange={e => setWeight(e.target.value)}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--gray-light)', fontSize: '16px', fontFamily: 'var(--font-body)', outline: 'none' }} />
                  </div>
                </div>

                <button onClick={calculate} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px' }}>
                  Calculate My BMI →
                </button>

                {result && (
                  <div style={{ marginTop: 28, background: '#fff', borderRadius: 'var(--radius-lg)', padding: '28px', border: `2px solid ${result.color}22`, textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-mid)', marginBottom: 8 }}>Your BMI</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, color: result.color, lineHeight: 1 }}>{result.bmi}</div>
                    <div style={{ marginTop: 8, display: 'inline-block', padding: '6px 20px', borderRadius: 'var(--radius-full)', background: `${result.color}18`, color: result.color, fontWeight: 700, fontSize: '15px' }}>{result.category}</div>
                    <p style={{ marginTop: 16, fontSize: '14px', color: 'var(--slate)', lineHeight: 1.75 }}>{result.advice}</p>
                  </div>
                )}
              </div>

              {/* BMI Chart */}
              <div style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: 20 }}>BMI Categories — What Do They Mean?</h2>
                {[
                  { range: 'Below 18.5', cat: 'Underweight', color: '#3182ce', desc: 'May indicate nutritional deficiencies or underlying conditions. Consult a doctor.' },
                  { range: '18.5 – 24.9', cat: 'Healthy Weight', color: '#0a6847', desc: 'Associated with the lowest risk of weight-related health problems.' },
                  { range: '25.0 – 29.9', cat: 'Overweight', color: '#d97706', desc: 'Slightly elevated risk for cardiovascular disease, diabetes, and joint problems.' },
                  { range: '30.0 and above', cat: 'Obese', color: '#e53e3e', desc: 'Significantly elevated risk for type 2 diabetes, heart disease, sleep apnea, and more.' },
                ].map(b => (
                  <div key={b.cat} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'center' }}>
                    <div style={{ width: 90, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: b.color, flexShrink: 0 }}>{b.range}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: b.color, marginBottom: 3 }}>{b.cat}</div>
                      <div style={{ fontSize: '13px', color: 'var(--gray-mid)' }}>{b.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: '16px', background: '#fef3cd', borderRadius: 'var(--radius-md)', border: '1px solid #fbbf24', fontSize: '13px', color: '#92400e' }}>
                  ⚠️ <strong>Important:</strong> BMI is a screening tool, not a diagnostic measure. It does not account for muscle mass, bone density, or fat distribution. Always consult a healthcare professional for a comprehensive health assessment.
                </div>
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>

            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ marginTop: 24, background: 'var(--emerald-pale)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ color: 'var(--emerald)', fontSize: '1rem', marginBottom: 12 }}>🔧 More Health Tools</h3>
                {[
                  { label: 'Calorie Calculator', href: '/tools/calorie-calculator' },
                  { label: 'Water Intake Tracker', href: '/tools/water-tracker' },
                  { label: 'Sleep Timer', href: '/tools/sleep-timer' },
                ].map(t => <Link key={t.label} href={t.href} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid var(--emerald-muted)', fontSize: '14px', color: 'var(--emerald)', fontWeight: 600 }}>→ {t.label}</Link>)}
              </div>
              <div style={{ marginTop: 24, background: '#fff', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', marginBottom: 12 }}>📚 Related Articles</h3>
                {[
                  { label: 'How to Lose Belly Fat: Science Says...', href: '/weight-loss' },
                  { label: 'The Best Diet for Your Body Type', href: '/nutrition' },
                  { label: 'Exercise Guide for Every Fitness Level', href: '/fitness' },
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
