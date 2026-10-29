import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: [string, number, MetadataRoute.Sitemap[number]['changeFrequency']][] = [
    ['/', 1, 'monthly'],
    ['/sluzby', 0.9, 'monthly'],
    ['/kontakt', 0.8, 'yearly'],
    ['/realizace', 0.7, 'monthly'],
    ['/technika', 0.6, 'yearly'],
    ['/o-nas', 0.5, 'yearly'],
    ['/ochrana-osobnich-udaju', 0.1, 'yearly'],
  ];
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority })),
    ...services.map((s) => ({
      url: absoluteUrl(`/sluzby/${s.slug}`),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
      images: [absoluteUrl(s.image)],
    })),
  ];
}
