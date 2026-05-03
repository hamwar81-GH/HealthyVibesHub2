import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Editorial Guidelines & Standards | Healthy Vibes Hub',
  description: 'Learn how Healthy Vibes Hub creates, reviews, and updates health content. Our strict editorial process ensures every article is accurate, unbiased, and evidence-based.',
  alternates: { canonical: 'https://healthyvibeshub.com/editorial-guidelines' },
};

export default function EditorialGuidelinesPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, var(--emerald-pale) 0%, var(--cream) 100%)', padding: '72px 0 48px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="breadcrumb-sep">›</span><span aria-current="page">Editorial Guidelines</span></nav>
          <div className="section-eyebrow">Trust & Transparency</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: 16 }}>Editorial Guidelines & Content Standards</h1>
          <p style={{ fontSize: '17px', color: 'var(--gray-mid)', lineHeight: 1.75 }}>Last updated: May 1, 2026. At Healthy Vibes Hub, we hold ourselves to the highest standards in health content publishing. Here is exactly how we create, review, fact-check, and update every article.</p>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {[
              {
                title: '1. Our Editorial Mission',
                content: `Healthy Vibes Hub exists to provide accurate, actionable, and evidence-based health information to the public. We believe everyone deserves access to the same quality of health information that a knowledgeable physician would provide to a friend.

Our editorial mission is to bridge the gap between medical research and everyday readers — translating complex science into practical, accessible guidance without compromising accuracy or nuance.`,
              },
              {
                title: '2. Writer & Reviewer Qualifications',
                content: `All content on Healthy Vibes Hub is either written or reviewed (or both) by a credentialed health professional relevant to the topic:

• Medical articles: Written or reviewed by licensed MDs or DOs with specialty board certification
• Nutrition content: Written or reviewed by Registered Dietitians (RD) or PhDs in nutritional science  
• Fitness content: Written or reviewed by Certified Strength and Conditioning Specialists (CSCS) or licensed exercise physiologists
• Mental health content: Written or reviewed by licensed clinical psychologists (PhD/PsyD) or licensed therapists (LCSW, LPC)
• Dermatology/beauty: Written or reviewed by board-certified dermatologists

No health content is published without at least one qualifying expert review.`,
              },
              {
                title: '3. Evidence Standards & Citations',
                content: `We prioritize the highest levels of scientific evidence:

Tier 1 (preferred): Systematic reviews and meta-analyses from peer-reviewed journals
Tier 2: Randomized controlled trials (RCTs)  
Tier 3: Cohort and observational studies
Tier 4: Expert opinion from recognized medical authorities

All statistics, clinical claims, and health recommendations must be sourced from peer-reviewed research published in reputable journals. We cite PubMed, NIH, WHO, CDC, and major academic medical centers. We do not cite press releases, blogs, or social media as primary sources.`,
              },
              {
                title: '4. The Review & Publication Process',
                content: `Every article goes through the following steps before publication:

Step 1 — Assignment: A credentialed writer is matched to the topic based on their specialty.
Step 2 — Research & Writing: The author reviews peer-reviewed literature and drafts the article.
Step 3 — Medical/Expert Review: A second qualified reviewer checks medical accuracy, citation quality, and clinical appropriateness.
Step 4 — Editorial Review: Our editorial team reviews for clarity, readability, SEO, and policy compliance.
Step 5 — Fact-Check: Our fact-checking team verifies all statistics, claims, and citations.
Step 6 — Legal Review (when applicable): Content involving medications, treatments, or legal health claims is reviewed by our legal counsel.
Step 7 — Publication with Author Attribution: Published with full bylines and credential disclosures.`,
              },
              {
                title: '5. Corrections & Update Policy',
                content: `Health science evolves rapidly. We are committed to keeping our content current and correcting errors promptly.

Update Cycles: All major health articles are reviewed and updated at least annually, or sooner if new significant research emerges.

Corrections: If we publish an error, we will correct it with a visible correction notice at the top of the article, noting what was changed and when. We do not silently edit errors.

To report a factual inaccuracy: editorial@healthyvibeshub.com`,
              },
              {
                title: '6. Editorial Independence & Advertising Policy',
                content: `Healthy Vibes Hub maintains strict editorial independence from our advertising and commercial partners:

• Advertisers have zero influence over editorial content or coverage decisions.
• We do not accept payment in exchange for favorable editorial coverage.
• Sponsored content is clearly labeled as "Sponsored" or "Advertisement."
• Product recommendations in editorial content are based solely on expert opinion and evidence — never advertiser relationships.
• Our editorial team and commercial team operate completely independently.`,
              },
              {
                title: '7. AI & Automation Policy',
                content: `We do not publish AI-generated health content. All articles on Healthy Vibes Hub are written by human experts. We may use AI tools to assist with grammar, SEO optimization, or research summarization, but all final content decisions, medical claims, and health recommendations are made by our human expert contributors and editorial team.`,
              },
            ].map((s, i) => (
              <div key={i}>
                <h2 style={{ fontSize: '1.25rem', marginBottom: 16, color: 'var(--emerald)' }}>{s.title}</h2>
                <div style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.85, whiteSpace: 'pre-line', background: 'var(--cream)', padding: '24px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--emerald)' }}>{s.content}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: '32px', background: 'var(--emerald-pale)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: 12 }}>Questions About Our Editorial Standards?</h2>
            <p style={{ color: 'var(--gray-mid)', marginBottom: 20 }}>We are committed to full transparency. Reach out to our editorial team anytime.</p>
            <Link href="/contact" className="btn btn-primary">Contact Our Editorial Team →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
