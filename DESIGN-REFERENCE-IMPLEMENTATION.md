# Zemní práce RT – redesign podle schválené předlohy

Tento projekt používá jako jedinou vizuální referenci poslední schválený světlý návrh homepage.

## Vizuální pravidla
- Paleta: bílá, světle šedá, grafitová a žlutá JCB (`#F7B900`). Zelená/lime se nepoužívá.
- Logo: kovový monogram RT a wordmark Zemní práce RT.
- Homepage: průhledná světlá navigace, hero s JCB 3CX a diagonálním světlým panelem, čtyři obrazové služby, světlá sekce O nás, benefit list a kontrastní panel JCB 3CX.
- Podstránky: světlé hero s diagonální geometrií a fotografickým panelem, bílé/světle šedé obsahové sekce, grafitové kontaktní a technické panely, žluté akcenty.
- Responzivita: navigace a hero se skládají do mobilního layoutu; služby jsou na mobilu ve dvou sloupcích.

## Obrázky
Soubory v `public/images/` jsou obrazové výřezy z odsouhlaseného AI návrhu homepage, aby kompozice, barevnost a stroj odpovídaly předloze. Nejsou to dokumentární fotografie skutečných realizací firmy. Před ostrým zveřejněním doporučujeme nahradit výřezy skutečnými fotografiemi firmy při zachování poměrů stran a ořezu.

## Zachované funkce
- Všechny stávající URL a podstránky včetně detailů služeb.
- Kontaktní formulář a server action.
- SEO metadata, sitemap, robots, JSON-LD a navigace.
- Firemní kontaktní údaje a odkazy.

## Lokální kontrola
```bash
npm ci
npm run typecheck
npm run build
npm run start
```

Poznámka: v prostředí, kde byl redesign připraven, instalace npm závislostí opakovaně skončila timeoutem. Produkční build proto nebylo možné ověřit; po rozbalení ZIPu je nutné provést uvedené příkazy lokálně nebo v CI.
