import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zemní práce RT | Terén. V našich rukou.',
  description: 'Profesionální zemní práce, výkopy základů, terénní úpravy, demolice a inženýrské sítě. Moderní technika, férové jednání a kvalitně odvedená práce.',
  applicationName: 'Zemní práce RT',
  openGraph: { title: 'Zemní práce RT', description: 'Terén. V našich rukou.', type: 'website', locale: 'cs_CZ' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0a1015' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
