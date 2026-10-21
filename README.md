# Zemní práce RT — Premium Next.js

Designově výrazný one-page web pro firmu Zemní práce RT. Projekt používá Next.js App Router, TypeScript, vlastní CSS, responzivní navigaci, reveal animace při scrollování, pohyblivý pás, hover animace, interaktivní karty služeb a realizací a poptávkový formulář.

## Spuštění

Vyžaduje Node.js 20.9+.

```bash
npm install
npm run dev
```

Otevřete http://localhost:3000. Produkční build ověříte příkazy `npm run lint` a `npm run build`.

## Obrázky

Všechny obrázky webu jsou v `public/images/`:
- `hero-jcb.jpg` — hlavní hero
- `technika-jcb.jpg` — sekce o firmě
- `realizace-zaklady.jpg`, `realizace-teren.jpg`, `realizace-site.jpg`, `realizace-vykop.jpg` — galerie
- `realizace-stroj.jpg` — sekce techniky

Před publikací vyměňte obrázky za ostré fotografie skutečných strojů a realizací. Ponechte názvy souborů, nebo změňte příslušné cesty v `src/app/page.tsx`.

## Před zveřejněním

- Potvrdit telefon, e-mail, oblast působnosti a všechny číselné údaje.
- Statistické údaje 100+ zakázek a 15+ let zkušeností jsou označené jako údaje k potvrzení.
- Formulář otevře e-mailovou aplikaci přes `mailto:`; pro přímé odesílání bez e-mailového klienta je nutné připojit backend/formulářovou službu.
- Google Fonts se načítají online; pro plně offline web lze fonty stáhnout a hostovat lokálně.

## Technologie

Next.js 15, React 19, TypeScript, lucide-react. Bez dalších animačních knihoven; pohyby jsou vytvořeny pomocí CSS a IntersectionObserver.
