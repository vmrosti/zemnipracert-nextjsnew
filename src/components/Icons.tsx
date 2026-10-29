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
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" {...p}>
      <path d="M8 4h48a4 4 0 0 1 4 4v36L44 60H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z" fill="var(--amber, #FFB81C)" />
      <path
        d="M13 46V17h12.4c6 0 9.4 3 9.4 8 0 3.6-1.9 6.1-5 7.2L36 46h-7.2l-5.4-12.6h-3.9V46H13Zm6.5-18h5.3c2.3 0 3.5-1 3.5-2.9s-1.2-2.9-3.5-2.9h-5.3V28Z"
        fill="#0F1417"
      />
      <path d="M36.5 17H56v5.6h-6.5V46H43V22.6h-6.5V17Z" fill="#0F1417" />
    </svg>
  );
}
