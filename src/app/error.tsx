'use client';

import { site, telHref } from '@/content/site';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="page-hero page-hero--404">
      <div className="wrap page-hero__inner">
        <h1 className="page-hero__title">Stránku se nepodařilo načíst</h1>
        <p className="page-hero__lead">
          Zkuste to znovu. Pokud chyba trvá, zavolejte na <a href={telHref}>{site.phoneDisplay}</a>.
        </p>
        <div className="page-hero__actions">
          <button className="btn btn--primary" type="button" onClick={reset}>
            Načíst znovu
          </button>
        </div>
      </div>
    </section>
  );
}
