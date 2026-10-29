import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import Process from '@/components/Process';
import ProjectCards from '@/components/ProjectCards';
import ServiceRows from '@/components/ServiceRows';
import SocialCta from '@/components/SocialCta';
import Strata from '@/components/Strata';
import { faq } from '@/content/faq';
import { machine } from '@/content/machine';
import { site, telHref } from '@/content/site';
import { faqSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image
            src="/images/hero-jcb.jpg"
            alt="Traktorbagr JCB 3CX na rozkopaném pozemku za soumraku"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 640px) 300vw, 100vw"
            quality={70}
          />
        </div>
        <div className="wrap hero__inner">
          <h1 className="hero__title" id="hero-title">
            <span className="hero__title-main">Zemní a výkopové práce</span>
            <span className="hero__title-place">Velké Meziříčí a okolí</span>
          </h1>
          <p className="hero__lead">
            Rodinná firma Radima Teplého. Výkopy pro základy domů, přípojky, bazény a jímky, terénní úpravy, cesty
            i odvoz materiálu se strojem JCB 3CX.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={telHref}>
              <Phone size={20} aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <Link className="btn btn--ghost btn--lg" href="#poptavka">
              Poslat poptávku
            </Link>
          </div>
        </div>
        <Strata animate />
      </section>

      <section className="section section--paper" aria-labelledby="sluzby-title">
        <div className="wrap split">
          <div className="split__head">
            <h2 className="h2" id="sluzby-title">
              Co pro vás uděláme
            </h2>
            <p>
              Realizujeme části staveb i stavby na klíč. Od první rýhy po srovnaný pozemek, včetně odvozu zeminy
              a úklidu.
            </p>
            <Link className="text-link" href="/sluzby">
              Přehled všech služeb
            </Link>
          </div>
          <ServiceRows />
        </div>
      </section>

      <section className="section section--concrete" aria-labelledby="postup-title">
        <div className="wrap">
          <h2 className="h2" id="postup-title">
            Jak zakázka probíhá
          </h2>
          <Process />
        </div>
      </section>

      <section className="section section--night machine" aria-labelledby="stroj-title">
        <div className="wrap machine__grid">
          <div className="machine__media">
            <Image
              src="/images/realizace-stroj.jpg"
              alt="Traktorbagr JCB 3CX zepředu s přední lopatou a zadním rýpadlem"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              quality={68}
            />
          </div>
          <div className="machine__copy">
            <h2 className="h2" id="stroj-title">
              Jeden stroj na výkop, nakládku i rovnání
            </h2>
            <p>
              Pracujeme s pečlivě udržovaným traktorbagrem {machine.name}. Vpředu nakládací lopata, vzadu rýpadlo
              s osmi lžícemi od 30 do 150 cm a paletizační vidle.
            </p>
            <dl className="spec-grid">
              {machine.specs.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link className="text-link text-link--light" href="/technika">
              Technika a lžíce
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="zakazky-title">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h2" id="zakazky-title">
              Na čem pracujeme
            </h2>
            <Link className="text-link" href="/realizace">
              Všechny zakázky
            </Link>
          </div>
          <ProjectCards />
          <SocialCta />
        </div>
      </section>

      <section className="section section--concrete" aria-labelledby="faq-area-title">
        <div className="wrap split split--faq">
          <div className="area">
            <h2 className="h2" id="faq-area-title">
              Kde pracujeme
            </h2>
            <p>Převážně v okolí Velkého Meziříčí. Po domluvě přijedeme i dál.</p>
            <ul className="town-list">
              {site.areaServed.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <Faq items={faq} />
        </div>
      </section>

      <ContactSection />
      <JsonLd data={faqSchema(faq)} />
    </>
  );
}
