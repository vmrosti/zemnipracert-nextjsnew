import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import SocialCta from '@/components/SocialCta';
import { projectFallback, projectPhoto, projects } from '@/content/projects';
import { getService } from '@/content/services';
import { pickImage } from '@/lib/images';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';

const crumbs = [{ name: 'Realizace', path: '/realizace' }];

export const metadata = pageMetadata({
  title: 'Realizace – jezírka, jímky, základy, sítě a cesty',
  description:
    'Ukázky zakázek Zemní práce RT: jezírka a bazény, jímky a retenční nádrže, základy rodinných domů, výkopy sítí, terénní úpravy a Benzina Velké Meziříčí.',
  path: '/realizace',
});

export default function RealizacePage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="Naše zakázky"
        lead="Každý náš projekt začíná vaším přáním. Tady je přehled prací, které děláme nejčastěji."
      />

      <section className="section section--paper">
        <div className="wrap">
          <div className="project-grid">
            {projects.map((p, i) => {
              const service = getService(p.service);
              return (
                <article key={p.slug} id={p.slug} className="project-tile">
                  <div className="project-tile__media">
                    <Image
                      src={pickImage(projectPhoto(p.slug), projectFallback(i))}
                      alt={`Zakázka: ${p.title}`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      quality={65}
                    />
                  </div>
                  <h2 className="h3">{p.title}</h2>
                  {p.place && <p className="project-tile__place">{p.place}</p>}
                  <p>{p.text}</p>
                  {service && (
                    <Link className="text-link" href={`/sluzby/${service.slug}`}>
                      {service.title}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
          <SocialCta />
        </div>
      </section>

      <ContactSection />
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
