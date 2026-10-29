import { useId } from 'react';

/**
 * Podpisový prvek webu: řez zeminou (ornice, hlína, jíl, štěrk) s hloubkovým měřítkem
 * do 6 m – skutečné hloubky výkopu stroje JCB 3CX. Rýha se při načtení jednou „vykope“.
 */
export default function Strata({ ruler = true, animate = false }: { ruler?: boolean; animate?: boolean }) {
  const id = `gravel${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <div className={`strata${animate ? ' strata--dig' : ''}`} aria-hidden="true">
      <svg className="strata__layers" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <defs>
          <pattern id={id} width="22" height="14" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.2" fill="#6a7174" />
            <circle cx="15" cy="9" r="1.6" fill="#7d8487" />
            <circle cx="9" cy="12" r="1.1" fill="#5c6366" />
          </pattern>
        </defs>
        <path d="M0 14 C180 4 300 22 480 12 S800 2 980 14 1260 20 1440 8 V160 H0Z" fill="var(--soil-1)" />
        <path d="M0 46 C220 36 380 56 620 44 S1000 34 1180 48 1360 52 1440 42 V160 H0Z" fill="var(--soil-2)" />
        <path d="M0 86 C160 80 420 96 700 84 S1100 76 1440 88 V160 H0Z" fill="var(--soil-3)" />
        <path d="M0 122 C300 116 520 130 820 120 S1240 114 1440 124 V160 H0Z" fill="var(--gravel)" />
        <path d="M0 122 C300 116 520 130 820 120 S1240 114 1440 124 V160 H0Z" fill={`url(#${id})`} opacity=".55" />
      </svg>
      {ruler && (
        <div className="strata__ruler">
          <span className="strata__trench" />
          <ol>
            {[0, 1, 2, 3, 4, 5, 6].map((m) => (
              <li key={m}>{m} m</li>
            ))}
          </ol>
          <p>Výkop až do 6 m</p>
        </div>
      )}
    </div>
  );
}
