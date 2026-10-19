# Zemní práce RT — Next.js web

Moderní responzivní prezentační web vytvořený v Next.js App Router + TypeScript.

## Spuštění lokálně

1. Nainstalujte Node.js LTS.
2. V této složce spusťte `npm install`.
3. Spusťte `npm run dev` a otevřete `http://localhost:3000`.
4. Produkční build: `npm run build`, spuštění `npm start`.

## Co projekt obsahuje

- Next.js App Router, TypeScript, SEO metadata a Open Graph.
- Responzivní navigaci s mobilním menu.
- Úvodní hero, služby, techniku, ukázky realizací, výhody a kontaktní poptávku.
- Kontaktní formulář, který připraví e-mail v uživatelově e-mailovém programu. Pro opravdové odesílání bez e-mailového programu je nutné doplnit API/backend a cílovou e-mailovou adresu.
- Lokální obrázky v `public/images/`.

## DŮLEŽITÉ PŘED ZVEŘEJNĚNÍM

Kontaktní e-mail `info@zemniprace-rt.cz` je pracovní placeholder. Nahraďte ho skutečným e-mailem v `src/components/contact-form.tsx`. Doplňte skutečné telefonní číslo, oblast působení, právní údaje a ověřte všechny nabízené služby. Metadata domény upravte v `src/app/layout.tsx`.

### Jak vyměnit obrázky

Nahraďte soubory stejnými názvy (zachovejte pomlčky a příponu), nebo upravte cesty v `src/app/page.tsx`:

- `hero-jcb.jpg` — hlavní fotografie v úvodním banneru, ideálně široká 2000 × 1200 px.
- `technika-jcb.jpg` — fotografie stroje, ideálně 1400 × 1600 px nebo širší.
- `realizace-zaklady.jpg` — realizace základů.
- `realizace-teren.jpg` — terénní úpravy.
- `realizace-vykop.jpg` — výkopové práce.
- `realizace-site.jpg`, `realizace-stroj.jpg` — doplňkové obrázky (zatím připravené pro rozšíření galerie).

Aktuální fotografie jsou pouze dočasné vizuální náhledy odvozené z dřívějšího konceptu designu, nikoli doložené fotografie skutečných zakázek. Před zveřejněním je nahraďte vlastními fotografiemi firmy.

## Nasazení

Projekt lze nasadit na Vercel nebo na server podporující Node.js. Pro Vercel připojte Git repozitář, ponechte výchozí nastavení Next.js a deployněte. Pokud chcete vlastní doménu, nastavte ji v projektu hostingu a upravte `metadataBase`.
