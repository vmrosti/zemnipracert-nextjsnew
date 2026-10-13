import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zemniprace-rt-nextjs.vercel.app"),
  title: { default: "Zemní práce RT | Výkopy, terénní úpravy a příprava pozemků", template: "%s | Zemní práce RT" },
  description: "Zemní a výkopové práce pro domy, zahrady i firmy. Výkopy základů, přípojky, terénní úpravy a příprava pozemků. Ozvěte se pro nezávaznou nabídku.",
  keywords: ["zemní práce", "výkopové práce", "JCB", "výkopy základů", "terénní úpravy", "přípojky", "příprava pozemků"],
  openGraph: { type: "website", locale: "cs_CZ", siteName: "Zemní práce RT", title: "Zemní práce RT — Poctivá práce. Pevný základ.", description: "Výkopy, terénní úpravy a příprava pozemků. Spolehlivě, přesně a bez zbytečných řečí." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#171914" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
