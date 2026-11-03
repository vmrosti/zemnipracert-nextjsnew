import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { mailHref, site } from '@/content/site';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'Ochrana osobních údajů', path: '/ochrana-osobnich-udaju' }];

export const metadata = {
  ...pageMetadata({
    title: 'Ochrana osobních údajů a cookies',
    description: 'Jak Zemní práce RT zpracovávají údaje z poptávkového formuláře. Web nepoužívá cookies ani sledovací nástroje.',
    path: '/ochrana-osobnich-udaju',
  }),
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Ochrana osobních údajů" lead="Stručně a srozumitelně: co od vás víme, proč a jak dlouho." />
      <section className="section section--paper">
        <div className="wrap narrow prose">
          <h2 className="h3">Správce</h2>
          <p>
            {site.owner}, IČO {site.ico}, {site.address.locality} {site.address.postalCode}. Kontakt:{' '}
            <a href={mailHref}>{site.email}</a>, tel. {site.phoneDisplay}.
          </p>

          <h2 className="h3">Jaké údaje zpracováváme a proč</h2>
          <p>
            Když odešlete poptávku, zpracováváme jméno, telefon, e-mail, místo stavby a text zprávy. Používáme je jen
            k tomu, abychom vám odpověděli, připravili nabídku a případně zakázku zrealizovali. Právním základem je
            jednání o smlouvě na vaši žádost (čl. 6 odst. 1 písm. b GDPR).
          </p>

          <h2 className="h3">Jak dlouho</h2>
          <p>
            Pokud zakázka nevznikne, poptávku smažeme nejpozději do jednoho roku. Pokud vznikne, uchováváme údaje po dobu
            nutnou k plnění smlouvy a podle zákonných povinností (např. účetní a daňové předpisy).
          </p>

          <h2 className="h3">Kdo k údajům má přístup</h2>
          <p>
            Údaje nikomu neprodáváme ani nepředáváme k marketingu. Technicky je zpracovávají jen poskytovatelé, bez
            kterých web nefunguje: hosting webu a služba pro doručení e-mailu s poptávkou.
          </p>

          <h2 className="h3">Cookies a měření návštěvnosti</h2>
          <p>
            Tento web nepoužívá cookies, reklamní ani analytické sledovací nástroje. Proto se vás na nic neptáme
            v cookie liště. Server hostingu může krátkodobě uchovávat technické záznamy (IP adresa, čas požadavku) kvůli
            bezpečnosti a ochraně před útoky.
          </p>

          <h2 className="h3">Vaše práva</h2>
          <p>
            Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování a právo vznést námitku. Stačí napsat
            na <a href={mailHref}>{site.email}</a>. Stížnost můžete podat u Úřadu pro ochranu osobních údajů (uoou.gov.cz).
          </p>
        </div>
      </section>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
