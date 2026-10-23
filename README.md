# Zemní práce RT — Studio edition

Designově výrazný, responzivní web pro zemní práce postavený na Next.js App Router + TypeScript. Směr je editorial/premium: typografický hero, ostré lokální fotografie, krémová plocha, grafitové sekce, střídmý žlutý akcent a střídání velkých obrazových kompozic.

## Spuštění

Po instalaci Node.js LTS otevři terminál v kořenové složce projektu:

```bash
npm install
npm run dev
```

Otevři `http://localhost:3000`.

Produkční build:

```bash
npm run build
npm run start
```

## Fotografie

Fotografie jsou lokálně v `public/images/` a nepoužívají externí URL:

- `hero-jcb.jpg` — hlavní úvodní fotografie
- `technika-jcb.jpg` — sekce o technice / firmě
- `realizace-zaklady.jpg` — realizace, základy
- `realizace-teren.jpg` — realizace, terén
- `realizace-site.jpg` — realizace, stroj / práce v terénu
- `realizace-vykop.jpg` — detail výkopu
- `realizace-stroj.jpg` — technika

Jde o ilustrační vizuální podklady, ne o ověřené fotografie skutečných zakázek firmy. Před zveřejněním je doporučeno nahradit je vlastními fotografiemi v podobném poměru stran. Při výměně zachovej názvy souborů, případně uprav cesty v `src/app/page.tsx`.

## Před zveřejněním doplnit

1. Ověřený telefon, e-mail a oblast působnosti.
2. Skutečné reference, fotografie a potvrzené údaje o zkušenostech/počtu zakázek. Číselné údaje ve statistice jsou označeny jako údaje k potvrzení.
3. Produkční formulář: nyní připraví zprávu ve výchozí e-mailové aplikaci přes `mailto:`. Pro odesílání přímo na serveru je potřeba napojit backend nebo formulářovou službu.
4. Skutečnou doménu v `src/app/sitemap.ts` a případně metadata Open Graph.

## Animace a přístupnost

- jemný pohyb hero fotografie
- vstup sekcí přes `IntersectionObserver`
- hover stavy tlačítek, služeb a projektů
- plynule animovaný ticker
- navigace zvýrazňující právě prohlíženou sekci
- mobilní navigace a spodní CTA
- respektuje `prefers-reduced-motion`

## Struktura

- `src/app/page.tsx` — stránka a interakce
- `src/app/globals.css` — design systém, responzivita a animace
- `src/app/layout.tsx` — metadata a kořen layoutu
- `public/images/` — lokální obrázky
