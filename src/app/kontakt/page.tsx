import { ExternalLink } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import { site } from '@/content/site';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'Kontakt', path: '/kontakt' }];

export const metadata = pageMetadata({
  title: 'Kontakt – poptávka zemních prací',
  description: `Poptejte zemní a výkopové práce: tel. ${site.phoneDisplay}, ${site.email}. Zemní práce RT, ${site.owner}, Velké Meziříčí a okolí.`,
  path: '/kontakt',
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Kontakt"
        lead="Pokud potřebujete projekt vyřešit co nejdříve, neváhejte se ozvat. Nejrychlejší je zavolat."
      />
      <ContactSection title="Napište nám" />
      <section className="section section--paper">
        <div className="wrap split">
          <div className="area">
            <h2 className="h2">Kde pracujeme</h2>
            <p>Převážně v okolí Velkého Meziříčí, po domluvě i dál.</p>
            <ul className="town-list town-list--light">
              {site.areaServed.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="text-link" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
              Velké Meziříčí na Mapy.cz <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
          <div>
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
        </div>
      </section>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
