import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Zemní práce RT | Pevné základy. Dobře odvedená práce.',
  description: 'Zemní a výkopové práce, základy, terénní úpravy a příprava pozemků. Spolehlivá technika a férová domluva.',
  applicationName: 'Zemní práce RT',
  metadataBase: new URL('https://www.zemniprace-rt.cz'),
  openGraph: { title: 'Zemní práce RT', description: 'Pevné základy. Dobře odvedená práce.', type: 'website', locale: 'cs_CZ' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
