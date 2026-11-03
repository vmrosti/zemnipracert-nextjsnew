# Zemní práce RT – web

Nový web pro **zemniprace-rt.cz** (Radim Teplý, Velké Meziříčí).
Next.js 16 (App Router, Turbopack, React Compiler), React 19, TypeScript. Všechny stránky jsou předgenerované jako statické.

## Spuštění

Požadavky: Node.js 20.9+

```bash
npm install
npm run dev        # vývoj na http://localhost:3000
npm run build      # produkční build (obsahuje kontrolu typů)
npm run start      # spuštění buildu
```

## Kde co upravit

| Co | Soubor |
|---|---|
| Telefon, e-mail, IČO, adresa, sociální sítě, obce | `src/content/site.ts` |
| Služby (8 stránek /sluzby/…), texty, FAQ ke službám | `src/content/services.ts` |
| Zakázky na webu | `src/content/projects.ts` |
| Obecné časté dotazy | `src/content/faq.ts` |
| Parametry stroje a lžíce | `src/content/machine.ts` |
| Vzhled | `src/app/globals.css` |
| Bezpečnostní hlavičky, obrázky | `next.config.ts` |
| Přesměrování starých adres `?page=…` | `src/proxy.ts` |

Údaje z `site.ts` se propisují všude – hlavička, patička, formulář, e-maily i strukturovaná data pro Google.

## Fotky zakázek

Nahrajte do `public/images/zakazky/` s názvem podle `slug` v `src/content/projects.ts`:

```
public/images/zakazky/jezirka-a-bazeny.jpg
public/images/zakazky/jimky-a-retencni-nadrze.jpg
public/images/zakazky/zaklady-rodinnych-domu.jpg
public/images/zakazky/vykopy-inzenyrskych-siti.jpg
public/images/zakazky/terenni-a-lesni-upravy.jpg
public/images/zakazky/benzina-velke-mezirici.jpg
```

- Na šířku, ideálně 4 : 3, min. 1600 px, JPG do ~500 kB. Převod na AVIF/WebP dělá web sám.
- Chybějící fotka = zobrazí se ilustrační obrázek. Fotky se načtou při dalším buildu.
- Méně zakázek: smažte položku v poli. Nová zakázka: přidejte položku + fotku `<slug>.jpg`.
- Ilustrační obrázky v `public/images/` (`hero-jcb.jpg`, `technika-jcb.jpg`, `realizace-*.jpg`) jsou AI ilustrace – nahraďte je vlastními fotkami se stejným názvem.

## Poptávkový formulář

Odesílá přes [Resend](https://resend.com) (zdarma do 3 000 e-mailů/měsíc), bez dalších knihoven.

1. Na resend.com přidejte a ověřte doménu `zemniprace-rt.cz` (DNS záznamy).
2. Nastavte proměnné prostředí (vzor v `.env.example`): `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`.

Bez klíče: ve vývoji se poptávka vypíše do konzole, v produkci formulář odkáže na telefon a e-mail.
Ochrana: kontrola na serveru, skryté pole proti robotům, minimální doba vyplnění, limit 5 odeslání / 10 min / IP (v paměti instance – pro tvrdý globální limit napojte Upstash Redis), limit velikosti požadavku 64 kB, ochrana Server Actions proti cizímu původu (vestavěná v Next.js).

## Nasazení na Vercel

1. Nahrajte projekt do GitHub repozitáře a importujte ho ve Vercelu (preset Next.js).
2. V *Settings → Environment Variables* nastavte proměnné z `.env.example`.
3. Připojte doménu `zemniprace-rt.cz` (a `www` jako přesměrování na hlavní).
4. Po nasazení:
   - Google Search Console + Seznam Webmaster: ověření přes `GOOGLE_SITE_VERIFICATION` / `SEZNAM_SITE_VERIFICATION`, odeslat `https://zemniprace-rt.cz/sitemap.xml`.
   - Profil firmy na Google a Firmy.cz – stejné jméno, telefon a adresa jako na webu (důležité pro lokální SEO).
   - Výkon ověřte na https://pagespeed.web.dev.
   - Hlavička HSTS obsahuje `preload`. Až web poběží stabilně na HTTPS (i subdomény), můžete doménu přihlásit na https://hstspreload.org.

## Co web obsahuje

**SEO:** unikátní title/description a canonical na každé stránce, Open Graph obrázek, `sitemap.xml`, `robots.txt`, manifest, JSON-LD (LocalBusiness s IČO, oblastí působnosti a sociálními sítěmi, Service, BreadcrumbList, FAQPage, WebSite), samostatná stránka pro každou službu, lokální H1, 301 přesměrování všech starých adres `?page=…`, `/cookies`, `/uvod.php`.

**Bezpečnost:** Content-Security-Policy (jen vlastní doména, bez rámů a cizích skriptů), HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP/CORP, `/.well-known/security.txt`, žádné cookies ani třetí strany (proto není potřeba cookie lišta). CSP obsahuje `'unsafe-inline'` pro skripty, protože web je statický a Next.js vkládá inline data stránky; varianta s nonce by vynutila serverové renderování každé stránky. Web nezobrazuje obsah od uživatelů, takže riziko je minimální.

**Výkon:** statické stránky, CSS vložené do HTML, vlastní podmnožina písma Archivo pro češtinu (57 kB, jeden soubor, bez Google Fonts), AVIF/WebP obrázky s roční cache, prioritní načtení hlavního obrázku, minimum JavaScriptu (FAQ i galerie fungují bez JS).

**Přístupnost:** odkaz „Přeskočit na obsah“, viditelný focus, ovládání z klávesnice, `prefers-reduced-motion`, chybové hlášky formuláře propojené s poli.

## Licence písma

Archivo – SIL Open Font License, viz `src/fonts/OFL.txt`.
