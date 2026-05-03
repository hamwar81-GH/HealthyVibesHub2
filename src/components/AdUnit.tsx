import { CSSProperties } from 'react';

type AdType = 'leaderboard' | 'rectangle' | 'sidebar' | 'in-content' | 'mobile-banner';

interface AdUnitProps {
  type: AdType;
  label?: string;
  style?: CSSProperties;
}

const heights: Record<AdType, number> = {
  leaderboard: 90,
  rectangle: 250,
  sidebar: 600,
  'in-content': 280,
  'mobile-banner': 50,
};

export default function AdUnit({ type, label = 'Advertisement', style }: AdUnitProps) {
  return (
    <div
      className={`ad-unit ad-unit-${type}`}
      style={{
        height: heights[type],
        width: '100%',
        ...style,
      }}
      aria-label="Advertisement"
      role="complementary"
    >
      <span style={{ fontSize: 28 }}>📢</span>
      <span style={{ fontSize: 13 }}>{label}</span>
      {/* Replace the div below with actual AdSense code: */}
      {/* <ins className="adsbygoogle" ... /> */}
    </div>
  );
}
