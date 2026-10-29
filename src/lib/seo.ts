import type { Metadata } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';

export const absoluteUrl = (path = '/') => `${site.url}${path === '/' ? '' : path}`;

/** Jednotné metadata pro každou stránku – canonical, OG, Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      url,
      siteName: site.name,
      title,
      description,
      ...(image ? { images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': businessId,
    name: site.name,
    alternateName: `Zemní práce ${site.owner}`,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    taxID: site.ico,
    founder: { '@type': 'Person', name: site.owner },
    image: absoluteUrl('/opengraph-image.jpg'),
    logo: absoluteUrl('/icon.svg'),
    priceRange: 'Dle kalkulace',
    currenciesAccepted: 'CZK',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    sameAs: [site.social.facebook, site.social.instagram],
    knowsAbout: ['Zemní práce', 'Výkopové práce', 'Terénní úpravy', 'Inženýrské sítě', 'JCB 3CX'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Zemní a výkopové práce',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: absoluteUrl(`/sluzby/${s.slug}`) },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'cs-CZ',
    publisher: { '@id': businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Úvod', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(s: { title: string; metaDescription: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.title,
    description: s.metaDescription,
    url: absoluteUrl(`/sluzby/${s.slug}`),
    provider: { '@id': businessId },
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
