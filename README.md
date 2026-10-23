# Zemní práce RT — Readable Premium (Next.js)

Redesign navazující na předchozí verzi. Hlavní úprava: výrazně čitelnější typografie, vyšší kontrast, větší velikosti textů v navigaci, službách, realizacích, kontaktním formuláři a patičce. Zachované jsou animace při scrollování, hover stavy, pohyblivý pás, rozbalovací detaily služeb, ovládání galerie a mobilní CTA.

## Spuštění

Požadavky: Node.js LTS.

```bash
npm install
npm run dev
```

Otevři http://localhost:3000.

Produkční build: `npm run build`; spuštění po buildu: `npm start`.

## Struktura

- `src/app/page.tsx` — hlavní stránka a interakce
- `src/app/globals.css` — design, responzivita a animace
- `public/images/` — lokální obrazové podklady
- `public/design-reference.png` — vizuální reference

## Před nasazením

- Nahraď ukázkové fotografie vlastními fotografiemi skutečné techniky a realizací.
- Ověř kontaktní telefon, e-mail, oblast působení a všechny číselné reference.
- Formulář otevře e-mailový program uživatele (`mailto:`); nejde o serverové odesílání. Pro produkční formulář napoj API nebo formulářovou službu.
- Ověř, že firemní název a použití loga JCB odpovídají oprávněnému použití.
