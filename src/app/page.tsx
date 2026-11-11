import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Clock3, Cog, Handshake, HardHat, Truck, Cable, Shovel, Phone } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { faq } from '@/content/faq';
import { site, telHref } from '@/content/site';
import { faqSchema } from '@/lib/seo';

const cards = [
  { title: 'Zemní práce', text: 'Výkopové práce, terénní úpravy', href: '/sluzby/vykopove-prace', image: '/images/realizace-vykop.jpg', icon: Shovel },
  { title: 'Inženýrské sítě', text: 'Přípojky, vodovody, kanalizace', href: '/sluzby/inzenyrske-site-a-pripojky', image: '/images/realizace-site.jpg', icon: Cable },
  { title: 'Demolice', text: 'Bezpečně a profesionálně', href: '/sluzby/demolice', image: '/images/realizace-zaklady.jpg', icon: HardHat },
  { title: 'Přeprava materiálu', text: 'Štěrky, zeminy, stavební materiály', href: '/sluzby/doprava-a-manipulace', image: '/images/realizace-teren.jpg', icon: Truck },
];

export default function HomePage() {
  return (
    <>
      <section className="showcase-hero" aria-labelledby="hero-title">
        <div className="showcase-hero__photo"><Image src="/images/hero-jcb.jpg" alt="Traktorbagr JCB 3CX při zemních pracích" fill priority sizes="100vw" quality={92} /></div>
        <div className="showcase-hero__wash" />
        <div className="showcase-hero__angle" />
        <div className="wrap showcase-hero__content">
          <p className="eyebrow"><span /> Profesionální zemní práce <span /></p>
          <h1 id="hero-title">Zemní práce <em>RT</em></h1>
          <p className="showcase-hero__tagline">Síla, přesnost, spolehlivost</p>
          <p className="showcase-hero__lead">Moderní technika, zkušený tým a důraz na kvalitu.<br />Zemní práce, které posouvají vaše plány kupředu.</p>
          <div className="showcase-hero__actions">
            <Link className="btn btn--primary btn--lg" href="/sluzby">Naše služby <ArrowUpRight size={19} /></Link>
            <Link className="btn btn--outline btn--lg" href="/o-nas">O nás</Link>
          </div>
        </div>
        <div className="showcase-hero__edge" />
      </section>

      <section className="showcase-services" aria-label="Hlavní služby">
        <div className="showcase-services__grid">
          {cards.map(({ title, text, href, image, icon: Icon }) => (
            <Link className="showcase-service" href={href} key={title}>
              <div className="showcase-service__image"><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 25vw" quality={90} /></div>
              <div className="showcase-service__shade" />
              <div className="showcase-service__copy"><Icon size={34} strokeWidth={1.8} /><span><b>{title}</b><small>{text}</small></span><ArrowUpRight className="showcase-service__arrow" size={22} /></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="showcase-about">
        <div className="showcase-about__image"><Image src="/images/realizace-stroj.jpg" alt="Zemní práce na pozemku" fill sizes="(max-width: 800px) 100vw, 25vw" quality={90} /></div>
        <div className="showcase-about__copy">
          <p className="eyebrow eyebrow--yellow">O nás <span /></p>
          <h2>Spolehlivý partner<br />pro vaše projekty</h2>
          <p>Jsme firma s dlouholetou praxí v oblasti zemních prací. Naším cílem je kvalitní provedení, spolehlivost a spokojenost zákazníků.</p>
          <Link className="btn btn--primary" href="/o-nas">Více o nás <ArrowUpRight size={18} /></Link>
        </div>
        <ul className="showcase-benefits">
          <li><BadgeCheck /><span>Kvalita a spolehlivost</span></li>
          <li><Clock3 /><span>Dodržení termínů</span></li>
          <li><Cog /><span>Moderní technika</span></li>
          <li><Handshake /><span>Individuální přístup</span></li>
        </ul>
        <Link href="/technika" className="showcase-machine">
          <Image src="/images/technika-jcb.jpg" alt="Traktorbagr JCB 3CX" fill sizes="(max-width: 800px) 100vw, 30vw" quality={90} />
          <span className="showcase-machine__shade" />
          <span className="showcase-machine__copy"><small>Technika</small><b>JCB 3CX</b><span>Výkonná a všestranná technika<br />pro každou práci.</span><i>Detaily techniky <ArrowUpRight size={16} /></i></span>
        </Link>
      </section>

      <section className="section section--white showcase-proof">
        <div className="wrap showcase-proof__grid">
          <div><span className="eyebrow eyebrow--yellow">Co umíme</span><h2 className="h2">Od prvního výkopu<br />po hotový terén.</h2><p>Jeden stroj, široké možnosti a osobní přístup. Domluvíme rozsah, termín i návaznost dalších prací.</p><Link className="text-link" href="/sluzby">Prohlédnout všechny služby <ArrowUpRight size={17} /></Link></div>
          <div className="showcase-proof__stats"><div><strong>6 m</strong><span>maximální hloubka výkopu</span></div><div><strong>30–150</strong><span>šířky lžic v centimetrech</span></div><div><strong>2 t</strong><span>nosnost paletizačních vidlí</span></div></div>
        </div>
      </section>

      <section className="section section--concrete showcase-faq">
        <div className="wrap split">
          <div><p className="eyebrow eyebrow--yellow">Kde pracujeme</p><h2 className="h2">Vysočina a okolí.</h2><p>Převážně v okolí Velkého Meziříčí. Po domluvě přijedeme i dál.</p><ul className="town-list">{site.areaServed.map((town) => <li key={town}>{town}</li>)}</ul></div>
          <Faq items={faq} />
        </div>
      </section>
      <section className="showcase-cta-band"><div className="wrap"><div><p className="eyebrow eyebrow--yellow">Máte projekt?</p><h2>Proměníme plán<br />v hotovou práci.</h2></div><div><p>Ozvěte se nám. Probereme, co potřebujete, a navrhneme další postup.</p><a className="btn btn--primary btn--lg" href={telHref}><Phone size={18} /> {site.phoneDisplay}</a><Link className="text-link text-link--light" href="/kontakt">Nebo nám pošlete poptávku <ArrowUpRight size={16} /></Link></div></div></section>
      <ContactSection title="Pojďme probrat váš projekt" lead="Popište nám, co potřebujete. Ozveme se vám a domluvíme další postup." />
      <JsonLd data={faqSchema(faq)} />
    </>
  );
}
