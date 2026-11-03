import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Phone } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { machine } from '@/content/machine';
import { getService, services } from '@/content/services';
import { site, telHref } from '@/content/site';
import { breadcrumbSchema, faqSchema, pageMetadata, serviceSchema } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<'/sluzby/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/sluzby/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<'/sluzby/[slug]'>) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const crumbs = [
    { name: 'Služby', path: '/sluzby' },
    { name: s.title, path: `/sluzby/${s.slug}` },
  ];
  const related = s.related.map(getService).filter((r) => r !== undefined);

  return (
    <>
      <PageHero crumbs={crumbs} title={s.title} lead={s.short} image={s.image} imageAlt={s.imageAlt}>
        <div className="page-hero__actions">
          <a className="btn btn--primary" href={telHref}>
            <Phone size={18} aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a className="btn btn--ghost" href="#poptavka">
            Poptat {s.title.toLowerCase()}
          </a>
        </div>
      </PageHero>

      <section className="section section--paper">
        <div className="wrap article-grid">
          <article className="prose">
            {s.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2 className="h2">Co zahrnuje</h2>
            <ul className="check-list">
              {s.includes.map((item) => (
                <li key={item}>
                  <Check size={19} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>

            <h2 className="h2">S čím počítat</h2>
            <div className="notes">
              {s.notes.map((n) => (
                <div key={n.title}>
                  <h3 className="h3">{n.title}</h3>
                  <p>{n.text}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="aside-card" aria-label="Stroj pro tuto práci">
            <h2 className="h3">{machine.name}</h2>
            <dl className="spec-list">
              {machine.specs.slice(0, 4).map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
            <Link className="text-link" href="/technika">
              Lžíce a parametry stroje
            </Link>
            <a className="btn btn--primary btn--block" href={telHref}>
              <Phone size={18} aria-hidden="true" /> Zavolat
            </a>
          </aside>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="wrap split">
          <Faq items={s.faq} title={`Časté dotazy: ${s.title.toLowerCase()}`} />
          <div>
            <h2 className="h2">Mohlo by se hodit</h2>
            <ul className="service-rows service-rows--single">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/sluzby/${r.slug}`}>
                    <span className="service-rows__title">{r.title}</span>
                    <span className="service-rows__text">{r.short}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection title={`Poptávka: ${s.title.toLowerCase()}`} defaultService={s.title} />
      <JsonLd data={[serviceSchema(s), breadcrumbSchema(crumbs), faqSchema(s.faq)]} />
    </>
  );
}
