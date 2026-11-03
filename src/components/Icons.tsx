import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };

export function FacebookIcon({ size = 20, ...p }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M13.5 21.95v-7.7h2.6l.4-3h-3V9.33c0-.87.24-1.46 1.49-1.46h1.6V5.18a21.4 21.4 0 0 0-2.33-.12c-2.3 0-3.88 1.4-3.88 3.98v2.21H7.77v3h2.61v7.7A10 10 0 1 1 22 12a10 10 0 0 1-8.5 9.95Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, ...p }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Značka RT – stejný tvar používá i favicona (src/app/icon.svg). */
export function LogoMark({ size = 40, ...p }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 72 72" aria-hidden="true" {...p}>
      <defs>
        <linearGradient id="rt-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".18" stopColor="#777b7e" />
          <stop offset=".36" stopColor="#f5f5f5" />
          <stop offset=".56" stopColor="#777b7e" />
          <stop offset=".76" stopColor="#e6e7e8" />
          <stop offset="1" stopColor="#45494c" />
        </linearGradient>
        <linearGradient id="rt-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfdfd" />
          <stop offset=".45" stopColor="#8f9498" />
          <stop offset="1" stopColor="#35393c" />
        </linearGradient>
        <filter id="rt-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity=".32" />
        </filter>
      </defs>
      <path d="M8 5h43l16 16v31L51 67H8L4 62V10Z" fill="#202326" stroke="url(#rt-metal)" strokeWidth="3.5" filter="url(#rt-shadow)" />
      <path d="M13 13h34l11 11v23L47 59H13V13Z" fill="none" stroke="url(#rt-metal)" strokeWidth="3" />
      <path d="M17 21h25c8 0 12 4 12 10 0 4-2 7-6 9l7 11H43l-7-10h-7v10H17V21Zm12 9v4h10c2 0 3-1 3-2s-1-2-3-2H29Z" fill="url(#rt-face)" stroke="#25292c" strokeWidth="1.2" />
      <path d="M40 21h16v8h-4v22H41V29h-4v-8Z" fill="url(#rt-face)" stroke="#25292c" strokeWidth="1.2" />
      <path d="M10 8h39" stroke="#fff" strokeOpacity=".7" strokeWidth="1" />
    </svg>
  );
}
