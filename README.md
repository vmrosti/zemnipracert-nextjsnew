# Zemní práce RT — Next.js / WOW design

Redesign webu pro zemní a výkopové práce. Next.js App Router, TypeScript, React, vlastní CSS a Lucide ikony. Bez Tailwindu.

## Spuštění lokálně

Vyžaduje Node.js LTS.

```bash
npm install
npm run dev
```

Otevřete http://localhost:3000. Produkční build ověříte pomocí `npm run build`.

## Struktura

- `src/app/page.tsx` — obsah landing page
- `src/app/globals.css` — kompletní design a responzivní styly
- `src/components/site-header.tsx` — navigace a mobilní menu
- `src/components/contact-form.tsx` — formulář vytváří e-mail přes `mailto:`; data se nikam neukládají
- `public/images/` — lokální obrazové podklady
- `design-reference.png` — statický vizuální směr návrhu, nikoli hotový web

## Výměna fotografií

Nahraďte soubory při zachování názvů (nebo upravte odpovídající cesty v `src/app/page.tsx`):

- `hero-jcb.jpg` — hlavní hero fotografie
- `technika-jcb.jpg` — sekce techniky
- `realizace-zaklady.jpg` — ukázka základů
- `realizace-teren.jpg` — ukázka terénních úprav
- `realizace-vykop.jpg` — ukázka výkopů
- `realizace-stroj.jpg` — fotografie v sekci „Proč RT“
- `realizace-site.jpg` — doplňkový obrazový podklad

Současné fotky jsou ilustrační, nikoli potvrzené fotografie skutečných zakázek. Před publikací je vyměňte za vlastní fotografie a doplňte ověřené kontaktní údaje.

## Před zveřejněním

- Ověřte e-mail v `src/components/contact-form.tsx` (aktuálně `info@zemniprace-rt.cz`).
- Ověřte doménu v `src/app/layout.tsx`.
- Doplňte skutečné telefonní číslo a přesné kontaktní údaje.
- Formulář nyní otevírá výchozí e-mailovou aplikaci; pro odesílání přímo z webu je potřeba napojit backend nebo formulářovou službu.
- Google Fonts jsou načítány online.
