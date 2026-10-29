/**
 * Jediný zdroj pravdy pro firemní údaje.
 * Údaje převzaty z původního webu zemniprace-rt.cz. Při změně je upravte jen tady –
 * propíší se do hlavičky, patičky, strukturovaných dat (JSON-LD) i e-mailů.
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://zemniprace-rt.cz').replace(/\/$/, ''),
  name: 'Zemní práce RT',
  legalName: 'Radim Teplý',
  owner: 'Radim Teplý',
  description:
    'Rodinná firma Radima Teplého z Velkého Meziříčí. Výkopy pro základy rodinných domů, přípojky inženýrských sítí, bazény, jezírka a jímky, terénní úpravy, cesty a odvoz materiálu se strojem JCB 3CX.',
  phone: '+420605751228',
  phoneDisplay: '605 751 228',
  email: 'info@zemniprace-rt.cz',
  ico: '09417834',
  address: {
    locality: 'Velké Meziříčí',
    postalCode: '594 01',
    region: 'Kraj Vysočina',
    country: 'CZ',
  },
  /** Přibližný střed Velkého Meziříčí – pro strukturovaná data. */
  geo: { lat: 49.3552, lng: 16.0122 },
  /** Obce, kde firma typicky pracuje. Uvádějte jen místa, kam skutečně jezdíte. */
  areaServed: [
    'Velké Meziříčí',
    'Křižanov',
    'Měřín',
    'Velká Bíteš',
    'Netín',
    'Osová Bítýška',
    'Oslavice',
    'Bory',
    'Žďár nad Sázavou',
    'Třebíč',
    'Náměšť nad Oslavou',
  ],
  social: {
    facebook: 'https://www.facebook.com/Zemn%C3%AD-pr%C3%A1ce-RT-110107427503626',
    instagram: 'https://www.instagram.com/zemnipracert',
    instagramHandle: '@zemnipracert',
  },
  mapUrl: 'https://mapy.cz/zakladni?q=Velk%C3%A9%20Mezi%C5%99%C3%AD%C4%8D%C3%AD',
} as const;

export const nav = [
  { label: 'Služby', href: '/sluzby' },
  { label: 'Technika', href: '/technika' },
  { label: 'Realizace', href: '/realizace' },
  { label: 'O nás', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const telHref = `tel:${site.phone}`;
export const mailHref = `mailto:${site.email}`;
