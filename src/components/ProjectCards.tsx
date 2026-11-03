import Image from 'next/image';
import Link from 'next/link';
import { projectFallback, projectPhoto, projects } from '@/content/projects';
import { pickImage } from '@/lib/images';

/** Vodorovný pás zakázek se scroll-snap – bez JavaScriptu. */
export default function ProjectCards() {
  return (
    <ul className="project-strip" aria-label="Typy našich zakázek">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Link href={`/realizace#${p.slug}`} className="project-card">
            <span className="project-card__media">
              <Image src={pickImage(projectPhoto(p.slug), projectFallback(i))} alt="" fill sizes="(max-width: 640px) 80vw, 320px" quality={65} />
            </span>
            <span className="project-card__title">{p.title}</span>
            <span className="project-card__text">{p.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
