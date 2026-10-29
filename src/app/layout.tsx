import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zemní práce RT | JCB 3CX, výkopy a terénní úpravy',
  description: 'Zemní práce RT – výkopové práce, terénní úpravy, příprava základů a inženýrské sítě s traktorbagr JCB 3CX. Velká Bíteš a okolí.',
  applicationName: 'Zemní práce RT',
  openGraph: { title: 'Zemní práce RT', description: 'Terén. V našich rukou.', type: 'website', locale: 'cs_CZ' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0a1015' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
