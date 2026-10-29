import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { site } from '@/content/site';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'O nás', path: '/o-nas' }];

export const metadata = pageMetadata({
  title: 'O nás – rodinná firma Radima Teplého',
  description:
    'Zemní práce RT je rodinná firma Radima Teplého z Velkého Meziříčí. Zakázky řešíme v nejkratším možném termínu, svědomitě a s úklidem a předáním na konci.',
  path: '/o-nas',
});

const principles = [
  {
    title: 'V nejkratším možném termínu',
    text: 'Termín domluvíme hned. Když něco spěchá, ozvěte se – o zbytek se postaráme.',
  },
  {
    title: 'Cena předem',
    text: 'Po domluvě nebo obhlídce připravíme cenovou kalkulaci, ať víte, s čím počítat.',
  },
  {
    title: 'Svědomitě a s rozmyslem',
    text: 'Ke každé zakázce přistupujeme tak, abychom 100% splnili vaše očekávání.',
  },
  {
    title: 'Úklid a předání',
    text: 'Práce končí uklizeným místem a předáním hotové zakázky, ne odjezdem stroje.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Rodinná firma, která ráda kope"
        lead="Naše práce je zároveň naším koníčkem. Proto je pro nás vždy na prvním místě spokojený zákazník."
      />

      <section className="section section--paper">
        <div className="wrap about">
          <div className="prose">
            <p>
              Jsme rodinná firma z Velkého Meziříčí, kterou vede {site.owner}. Realizujeme části staveb i stavby na klíč
              – od výkopu základů a přípojek přes bazény, jezírka a jímky po terénní úpravy, cesty a odvoz materiálu.
            </p>
            <p>
              Můžeme nabídnout moderní vybavení, silné zázemí a flexibilitu při řešení vaší zakázky. Stroj JCB 3CX
              průběžně doplňujeme o nové nástroje, aby toho zvládl co nejvíc.
            </p>
            <p>Působíme převážně v okolí Velkého Meziříčí. Potřebujete spolehlivou firmu na zemní nebo výkopové práce? Ozvěte se.</p>
          </div>
          <div className="about__media">
            <Image
              src="/images/realizace-teren.jpg"
              alt="Krajina Vysočiny s rozkopaným terénem"
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              quality={65}
            />
          </div>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="wrap">
          <h2 className="h2">Na čem si zakládáme</h2>
          <ul className="principles">
            {principles.map((p) => (
              <li key={p.title}>
                <h3 className="h3">{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap narrow">
          <h2 className="h2">Fakturační údaje</h2>
          <dl className="spec-list">
            <div>
              <dt>Podnikatel</dt>
              <dd>{site.owner}</dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>{site.ico}</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>
                {site.address.locality}, {site.address.postalCode}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ContactSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
