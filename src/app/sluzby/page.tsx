import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { faq } from '@/content/faq';
import { services } from '@/content/services';
import { breadcrumbSchema, faqSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'Služby', path: '/sluzby' }];

export const metadata = pageMetadata({
  title: 'Služby – výkopy, základy, přípojky, terénní úpravy',
  description:
    'Přehled zemních prací: výkopy, základy rodinných domů, přípojky inženýrských sítí, bazény a jímky, terénní úpravy, cesty, doprava materiálu a demolice. Velké Meziříčí.',
  path: '/sluzby',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Služby"
        lead="Provádíme veškeré zemní a výkopové práce. Od hloubení bazénů a jezírek přes výkopy inženýrských sítí po rovnání terénu a práci s paletizačními vidlemi."
      />

      <section className="section section--paper">
        <div className="wrap service-index">
          {services.map((s) => (
            <article className="service-card" key={s.slug} id={s.slug}>
              <Link href={`/sluzby/${s.slug}`} className="service-card__media" tabIndex={-1} aria-hidden="true">
                <Image src={s.image} alt="" fill sizes="(max-width: 700px) 100vw, 40vw" quality={62} />
              </Link>
              <div className="service-card__body">
                <h2 className="h3">
                  <Link href={`/sluzby/${s.slug}`}>{s.title}</Link>
                </h2>
                <p>{s.short}</p>
                <ul className="check-list check-list--compact">
                  {s.includes.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <Link className="text-link" href={`/sluzby/${s.slug}`}>
                  Více o službě {s.title.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--concrete">
        <div className="wrap narrow">
          <Faq items={faq} />
        </div>
      </section>

      <ContactSection />
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faq)]} />
    </>
  );
}
