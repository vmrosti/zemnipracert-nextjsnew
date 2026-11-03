import Link from 'next/link';
import Strata from '@/components/Strata';
import { site, telHref } from '@/content/site';

export const metadata = { title: 'Stránka nenalezena', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-hero page-hero--404">
      <div className="wrap page-hero__inner">
        <h1 className="page-hero__title">Tady jsme nic nevykopali</h1>
        <p className="page-hero__lead">
          Stránka neexistuje nebo se přesunula. Zkuste služby, nebo nám rovnou zavolejte na{' '}
          <a href={telHref}>{site.phoneDisplay}</a>.
        </p>
        <div className="page-hero__actions">
          <Link className="btn btn--primary" href="/">
            Na úvodní stránku
          </Link>
          <Link className="btn btn--ghost" href="/sluzby">
            Přehled služeb
          </Link>
        </div>
      </div>
      <Strata />
    </section>
  );
}
