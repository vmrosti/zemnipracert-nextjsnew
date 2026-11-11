import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – zemní a výkopové práce`,
    short_name: site.name,
    description: site.description,
    lang: 'cs',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1417',
    theme_color: '#0F1417',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
