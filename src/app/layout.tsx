import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import JsonLd from '@/components/JsonLd';
import MobileCallBar from '@/components/MobileCallBar';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { site } from '@/content/site';
import { localBusinessSchema, websiteSchema } from '@/lib/seo';
import './globals.css';

/** Archivo (OFL) – vlastní podmnožina pro češtinu, osy váha 400–900 a šířka 85–125 %, 57 kB. */
const archivo = localFont({
  src: '../fonts/archivo-cz-var.woff2',
  variable: '--font-archivo',
  weight: '400 900',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  adjustFontFallback: 'Arial',
  declarations: [{ prop: 'font-stretch', value: '85% 125%' }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Zemní a výkopové práce Velké Meziříčí | Zemní práce RT',
    template: '%s | Zemní práce RT',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.owner,
  publisher: site.name,
  category: 'construction',
  keywords: [
    'zemní práce Velké Meziříčí',
    'výkopové práce',
    'výkop základů',
    'výkop přípojky',
    'výkop bazénu',
    'terénní úpravy',
    'JCB 3CX',
    'traktorbagr Vysočina',
  ],
  alternates: { canonical: site.url },
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: site.url,
    siteName: site.name,
    title: 'Zemní a výkopové práce Velké Meziříčí | Zemní práce RT',
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  other: {
    'geo.region': 'CZ-63',
    'geo.placename': site.address.locality,
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.SEZNAM_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
          ...(process.env.SEZNAM_SITE_VERIFICATION
            ? { other: { 'seznam-wmt': process.env.SEZNAM_SITE_VERIFICATION } }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0F1417',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={archivo.variable}>
      <body>
        <a className="skip-link" href="#obsah">
          Přeskočit na obsah
        </a>
        <SiteHeader />
        <main id="obsah" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MobileCallBar />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
