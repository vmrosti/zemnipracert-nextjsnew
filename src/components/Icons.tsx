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

/** Kovový geometrický monogram RT – vektorová značka pro hlavičku i patičku. */
export function LogoMark({ size = 56, ...p }: P) {
  return (
    <svg width={size} height={Math.round(size * 0.78)} viewBox="0 0 180 140" role="img" aria-label="Logo RT" {...p}>
      <defs>
        <linearGradient id="rt-steel" x1="0" y1="0" x2=".95" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".18" stopColor="#7c8287" />
          <stop offset=".32" stopColor="#f8f9f9" />
          <stop offset=".52" stopColor="#8c9297" />
          <stop offset=".7" stopColor="#f4f5f5" />
          <stop offset=".86" stopColor="#666d72" />
          <stop offset="1" stopColor="#e4e7e9" />
        </linearGradient>
        <linearGradient id="rt-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".42" stopColor="#aeb4b8" />
          <stop offset=".72" stopColor="#555c61" />
          <stop offset="1" stopColor="#d9dddf" />
        </linearGradient>
        <filter id="rt-shadow" x="-25%" y="-25%" width="150%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.4" />
          <feOffset dx="1.5" dy="3.5" result="offset" />
          <feComponentTransfer><feFuncA type="linear" slope=".38" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter="url(#rt-shadow)" strokeLinejoin="bevel">
        <path d="M10 10 H119 L166 56 V83 L126 123 H37 L10 96 Z"
          fill="#202428" stroke="url(#rt-steel)" strokeWidth="5" />
        <path d="M22 22 H113 L153 61 V78 L122 111 H43 L22 89 Z"
          fill="none" stroke="url(#rt-steel)" strokeWidth="4" />
        <text x="89" y="96" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif"
          fontSize="78" fontWeight="900" fontStyle="italic" letterSpacing="-9"
          fill="url(#rt-face)" stroke="#282d31" strokeWidth="2.2" paintOrder="stroke">RT</text>
        <path d="M17 14 H118 L162 57" fill="none" stroke="#fff" strokeOpacity=".78" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
