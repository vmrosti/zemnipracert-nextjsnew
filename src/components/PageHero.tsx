import Image from 'next/image';
import type { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Strata from './Strata';

export default function PageHero({
  title,
  lead,
  crumbs,
  image,
  imageAlt = '',
  children,
}: {
  title: ReactNode;
  lead: string;
  crumbs: { name: string; path: string }[];
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${image ? ' page-hero--image' : ''}`}>
      {image && (
        <div className="page-hero__media">
          <Image src={image} alt={imageAlt} fill priority fetchPriority="high" sizes="(max-width: 860px) 200vw, 55vw" quality={70} />
        </div>
      )}
      <div className="wrap page-hero__inner">
        <Breadcrumbs items={crumbs} />
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {children}
      </div>
      <Strata ruler={false} />
    </section>
  );
}
