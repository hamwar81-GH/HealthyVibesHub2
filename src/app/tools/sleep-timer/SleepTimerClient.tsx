'use client';
import { useState } from 'react';
import Link from 'next/link';
import AdUnit from '@/components/AdUnit';

export default function SleepTimerClient() {
  const [mode, setMode] = useState<'wake' | 'sleep'>('wake');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [sleepTime, setSleepTime] = useState('22:30');
  const [results, setResults] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const SLEEP_CYCLE = 90; // minutes
  const FALL_ASLEEP = 14; // average minutes to fall asleep

  const calculate = () => {
    const times: string[] = [];
    if (mode === 'wake') {
      // Given wake-up time, find ideal bedtimes (work backwards)
      const [wH, wM] = wakeTime.split(':').map(Number);
      const wakeMins = wH * 60 + wM;
      // 6 cycles (9h), 5 cycles (7.5h), 4 cycles (6h), 3 cycles (4.5h)
      for (const cycles of [6, 5, 4, 3]) {
        const bedMins = wakeMins - (cycles * SLEEP_CYCLE) - FALL_ASLEEP;
        const adjustedMins = ((bedMins % 1440) + 1440) % 1440;
        const h = Math.floor(adjustedMins / 60);
        const m = adjustedMins % 60;
        const label = cycles >= 5 ? ' ✨ Ideal' : cycles === 4 ? ' 👍 Good' : ' ⚠️ Short';
        times.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} — ${cycles} cycles (${Math.round(cycles * SLEEP_CYCLE / 60 * 10) / 10}h sleep)${label}`);
      }
      setNote(`Based on waking at ${wakeTime}. Allow ~14 min to fall asleep.`);
    } else {
      // Given sleep time, find ideal wake times (work forward)
      const [sH, sM] = sleepTime.split(':').map(Number);
      const sleepMins = sH * 60 + sM + FALL_ASLEEP;
      for (const cycles of [6, 5, 4, 3]) {
        const wakeMins = (sleepMins + cycles * SLEEP_CYCLE) % 1440;
        const h = Math.floor(wakeMins / 60);
        const m = wakeMins % 60;
        const label = cycles >= 5 ? ' ✨ Ideal' : cycles === 4 ? ' 👍 Good' : ' ⚠️ Short';
        times.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} — ${cycles} cycles (${Math.round(cycles * SLEEP_CYCLE / 60 * 10) / 10}h sleep)${label}`);
      }
      setNote(`Based on sleeping at ${sleepTime}. Includes ~14 min to fall asleep.`);
    }
    setResults(times);
  };

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, var(--cream) 100%)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
            <Link href="/sleep">Sleep Health</Link><span className="breadcrumb-sep">›</span>
            <span aria-current="page">Sleep Calculator</span>
          </nav>
          <div className="section-eyebrow" style={{ color: '#7c3aed' }}>Free Sleep Tool</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 12 }}>😴 Sleep Calculator 2026 — Best Bedtime & Wake-Up Times</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Wake up feeling refreshed — every time. Our sleep calculator uses 90-minute sleep cycle science to find your perfect bedtime or wake-up time.</p>
        </div>
      </section>

      <div style={{ padding: '12px 0', background: '#f9fafb' }}><div className="container"><AdUnit type="leaderboard" label="Sleep Timer — Top Ad" /></div></div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid-main-sidebar">
            <div>
              <div style={{ background: '#f5f3ff', borderRadius: 'var(--radius-xl)', padding: '36px', border: '1px solid #ddd6fe' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: 24, fontFamily: 'var(--font-body)' }}>Calculate Your Sleep Schedule</h2>

                {/* Mode toggle */}
                <div style={{ display: 'flex', background: '#fff', borderRadius: 'var(--radius-full)', padding: 4, boxShadow: 'var(--shadow-sm)', width: 'fit-content', marginBottom: 28 }}>
                  {([
                    { v: 'wake', label: '⏰ I need to wake at...' },
                    { v: 'sleep', label: '🛏️ I\'m going to sleep at...' },
                  ] as const).map(m => (
                    <button key={m.v} onClick={() => setMode(m.v)} style={{
                      padding: '10px 20px', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '14px',
                      background: mode === m.v ? '#7c3aed' : 'transparent',
                      color: mode === m.v ? '#fff' : 'var(--gray-mid)', transition: 'var(--transition)',
                    }}>{m.label}</button>
                  ))}
                </div>

                {mode === 'wake' ? (
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>⏰ Wake-up Time</label>
                    <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)}
                      style={{ padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid #ddd6fe', fontSize: '22px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff', color: '#7c3aed', fontWeight: 700 }} />
                    <p style={{ fontSize: '13px', color: 'var(--gray-mid)', marginTop: 8 }}>We will calculate the best times to fall asleep tonight.</p>
                  </div>
                ) : (
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginBottom: 8, color: 'var(--slate)' }}>🛏️ Bedtime</label>
                    <input type="time" value={sleepTime} onChange={e => setSleepTime(e.target.value)}
                      style={{ padding: '13px 16px', borderRadius: 'var(--radius-md)', border: '2px solid #ddd6fe', fontSize: '22px', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff', color: '#7c3aed', fontWeight: 700 }} />
                    <p style={{ fontSize: '13px', color: 'var(--gray-mid)', marginTop: 8 }}>We will calculate the best times to wake up tomorrow.</p>
                  </div>
                )}

                <button onClick={calculate} className="btn" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px', background: '#7c3aed', color: '#fff', borderRadius: 'var(--radius-full)' }}>
                  Calculate Sleep Schedule →
                </button>

                {results.length > 0 && (
                  <div style={{ marginTop: 28 }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#7c3aed', marginBottom: 4 }}>
                      {mode === 'wake' ? '🌙 Ideal Bedtimes Tonight' : '☀️ Ideal Wake-Up Times Tomorrow'}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-mid)', marginBottom: 16 }}>{note}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {results.map((r, i) => (
                        <div key={i} style={{
                          padding: '16px 20px',
                          background: i === 0 ? 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)' : i === 1 ? '#ede9fe' : '#f5f3ff',
                          borderRadius: 'var(--radius-md)',
                          color: i === 0 ? '#fff' : 'var(--charcoal)',
                          fontFamily: 'var(--font-body)', fontWeight: i === 0 ? 700 : 500, fontSize: '15px',
                        }}>
                          {r}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, padding: '14px 16px', background: '#ede9fe', borderRadius: 'var(--radius-md)', fontSize: '13px', color: '#5b21b6' }}>
                      💡 <strong>Pro Tip:</strong> The first two options give you 5–6 full sleep cycles (7.5–9 hours) — the gold standard for cognitive performance, immune function, and metabolic health.
                    </div>
                  </div>
                )}
              </div>

              {/* Sleep science explainer */}
              <div style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 16 }}>Why Sleep Cycles Matter</h2>
                <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, marginBottom: 16 }}>
                  Your sleep is divided into repeating <strong>90-minute cycles</strong>, each consisting of light sleep, deep sleep (slow-wave sleep), and REM sleep. Waking up mid-cycle — even after 8 hours — leaves you feeling groggy. Waking at the end of a complete cycle feels natural and refreshed.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  {[
                    { stage: 'Light Sleep (N1 & N2)', icon: '🌙', desc: 'Transition phase. Heart rate slows, body temperature drops. Easily awakened.' },
                    { stage: 'Deep Sleep (N3)', icon: '💤', desc: 'Physical restoration. Growth hormone release, immune repair, memory consolidation.' },
                    { stage: 'REM Sleep', icon: '🌀', desc: 'Mental restoration. Dreaming, emotional processing, learning consolidation.' },
                  ].map(s => (
                    <div key={s.stage} style={{ background: '#f5f3ff', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: 6, color: '#7c3aed' }}>{s.stage}</div>
                      <div style={{ fontSize: '13px', color: 'var(--gray-mid)', lineHeight: 1.6 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <AdUnit type="in-content" label="In-Content Advertisement" style={{ marginTop: 40 }} />
            </div>

            <aside>
              <AdUnit type="sidebar" label="300×600 Sidebar Ad" />
              <div style={{ marginTop: 24, background: '#f5f3ff', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1rem', marginBottom: 12 }}>🔧 More Health Tools</h3>
                {[
                  { label: 'BMI Calculator', href: '/tools/bmi-calculator' },
                  { label: 'Calorie Calculator', href: '/tools/calorie-calculator' },
                  { label: 'Water Intake Tracker', href: '/tools/water-tracker' },
                ].map(t => <Link key={t.label} href={t.href} style={{ display: 'block', padding: '10px 0', borderBottom: '1px solid #ddd6fe', fontSize: '14px', color: '#7c3aed', fontWeight: 600 }}>→ {t.label}</Link>)}
              </div>
              <div style={{ marginTop: 24, background: '#fff', border: '1px solid var(--gray-light)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <h3 style={{ fontWeight: 700, fontSize: '14px', marginBottom: 12 }}>😴 Sleep Articles</h3>
                {[
                  { label: '7 Evidence-Based Sleep Hacks', href: '/sleep' },
                  { label: 'Sleep Apnea: Signs to Never Ignore', href: '/sleep' },
                  { label: 'Best Foods That Help You Sleep', href: '/sleep' },
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
