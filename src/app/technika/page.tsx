import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/PageHero';
import { machine } from '@/content/machine';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'Technika', path: '/technika' }];

export const metadata = pageMetadata({
  title: 'Technika – traktorbagr JCB 3CX, lžíce 30–150 cm',
  description:
    'Traktorbagr JCB 3CX: hmotnost 8 t, hloubka výkopu až 6 m, průjezdní šířka 2,5 m, výkon 68 kW. Lžíce 30–150 cm, třídicí lžíce a paletizační vidle 2 t.',
  path: '/technika',
});

/** Rozměry předního nakladače – orientační hodnoty výrobce pro standardní lopatu. */
const loader = [
  ['Výška výsypu', '2,72 m'],
  ['Nakládací výška', '3,20 m'],
  ['Výška čepu lopaty', '3,45 m'],
  ['Vodorovný dosah při max. výsypné výšce', '0,78 m'],
  ['Úhel naklonění vzad', '45°'],
  ['Výsypný úhel', '43°'],
  ['Šířka lopaty', '2 235 mm'],
  ['Objem lopaty (SAE, navršený)', '1,0 m³'],
] as const;

const maxBucket = Math.max(...machine.buckets.map((b) => b.width));

export default function TechnikaPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title={machine.name}
        lead="Pro veškeré práce používáme pečlivě udržovanou a spolehlivou techniku JCB. Stroj průběžně doplňujeme o nové nástroje, abychom zvládli co nejvíc prací jedním strojem."
        image="/images/technika-jcb.jpg"
        imageAlt="Traktorbagr JCB 3CX se zdviženým rýpadlem za soumraku"
      />

      <section className="section section--paper">
        <div className="wrap split">
          <div className="split__head">
            <h2 className="h2">Parametry stroje</h2>
            <p>{machine.uses}</p>
            <p>
              Motor s výkonem 68 kW a kroutícím momentem 408 Nm dává stroji sílu při nakládání na stavbě i při přejezdu
              po silnici mezi zakázkami.
            </p>
          </div>
          <dl className="spec-grid spec-grid--light">
            {machine.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--concrete" aria-labelledby="lzice-title">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2" id="lzice-title">
              Lžíce v měřítku
            </h2>
            <p>Šířku lžíce volíme podle toho, co se do výkopu ukládá. Užší rýha znamená méně výkopku i zásypu.</p>
          </div>
          <ul className="buckets">
            {machine.buckets.map((b) => (
              <li key={b.label}>
                <span className="buckets__bar" style={{ inlineSize: `${(b.width / maxBucket) * 100}%` }}>
                  <span>{b.width} cm</span>
                </span>
                <span className="buckets__label">
                  <b>{b.label}</b> {b.use}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--night machine" aria-labelledby="nakladac-title">
        <div className="wrap machine__grid">
          <div className="machine__media">
            <Image
              src="/images/hero-jcb.jpg"
              alt="Přední nakládací lopata traktorbagru JCB 3CX"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              quality={65}
            />
          </div>
          <div className="machine__copy">
            <h2 className="h2" id="nakladac-title">
              Přední nakladač
            </h2>
            <p>
              Víceúčelová přední lopata nabírá, nakládá, rozhrnuje a srovnává. Paletizační vidle s nosností 2 t
              zvládnou složit i přemístit palety s materiálem.
            </p>
            <dl className="spec-list spec-list--dark">
              {loader.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="small">Orientační hodnoty výrobce pro standardní lopatu. Liší se podle konfigurace stroje a pneumatik.</p>
            <Link className="text-link text-link--light" href="/sluzby">
              Co se strojem děláme
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
