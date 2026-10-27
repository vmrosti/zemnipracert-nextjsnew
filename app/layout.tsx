import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RT® — Ground in motion', description: 'Zemní práce bez kompromisů. Precizní práce s terénem, technikou a časem.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="cs"><body>{children}</body></html>; }
