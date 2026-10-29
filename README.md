# Zemní práce RT — Next.js web

Responzivní prezentační web pro zemní práce s hlavním vizuálem traktorbagra JCB 3CX, animovanými vstupy sekcí, pohyblivým pásem služeb, interaktivními kartami služeb a realizací, mobilním menu a mobilním CTA.

## Spuštění lokálně

Požadavky: Node.js 20.9+.

```bash
npm install
npm run dev
```

Produkční kontrola a spuštění:

```bash
npm run build
npm run start
```

## Nasazení na Vercel

1. Nahrajte obsah této složky do kořenového adresáře GitHub repozitáře.
2. Importujte repozitář do Vercel.
3. Framework preset ponechte `Next.js`; Build Command `npm run build`.
4. Po nasazení zkontrolujte kontaktní údaje a upravte je na skutečné údaje firmy.

## Před zveřejněním

- Ověřte telefon, e-mail a oblast působnosti v `src/app/page.tsx`.
- Texty a fotografie realizací jsou prezentační návrh; nahraďte je skutečnými referencemi firmy, aby web neprezentoval ilustrační zakázky jako ověřené realizace.
- Kontaktní formulář je front-endový návrh. Pro reálné doručování poptávek připojte e-mailovou/API službu.
