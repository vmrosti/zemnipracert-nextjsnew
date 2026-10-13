# Zemní práce RT — moderní web

Moderní responzivní web v Next.js, Reactu a TypeScriptu s animacemi Framer Motion, SEO metadaty a poptávkovým formulářem.

## Spuštění lokálně

Po instalaci Node.js 20.9+:

```bash
npm install
npm run dev
```

Otevřete http://localhost:3000.

## Nasazení na Vercel

1. Nahrajte celý obsah složky do nového GitHub repozitáře.
2. Ve Vercelu zvolte **Add New → Project** a importujte repozitář.
3. Framework Next.js se detekuje automaticky. Klikněte na **Deploy**.

## Před zveřejněním doplňte

V `app/page.tsx` vyhledejte `doplnit` a upravte:

- oblast působení v horním pruhu,
- e-mail `doplnit@email.cz` ve funkci `submitForm`,
- telefonní číslo a kontaktní údaje v sekci Kontakt,
- konkrétní nabídku služeb, pokud se liší od uvedených,
- případně texty o firmě podle skutečnosti.

Formulář v této verzi otevře e-mailový program návštěvníka s připravenou poptávkou. Pro odesílání bez e-mailového programu připojte serverovou akci/API a e-mailovou službu (např. Resend) nebo formulářový backend.

## SEO před spuštěním

- V `app/layout.tsx` nahraďte `metadataBase` skutečnou doménou.
- Doplňte město/region do titulků a popisů podle reálné působnosti.
- Přidejte reálné fotografie stroje a hotových zakázek.
- Po nasazení nastavte Google Search Console a firemní profil na Googlu.

## Struktura

- `app/page.tsx` — obsah a interakce webu
- `app/globals.css` — kompletní vizuální styl a responzivní pravidla
- `app/layout.tsx` — SEO metadata a základní rozvržení
