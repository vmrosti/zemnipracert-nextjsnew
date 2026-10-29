import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/content/services';

export default function ServiceRows({ exclude }: { exclude?: string }) {
  return (
    <ul className="service-rows">
      {services
        .filter((s) => s.slug !== exclude)
        .map((s) => (
          <li key={s.slug}>
            <Link href={`/sluzby/${s.slug}`}>
              <span className="service-rows__title">{s.title}</span>
              <span className="service-rows__text">{s.short}</span>
              <ChevronRight className="service-rows__icon" size={22} aria-hidden="true" />
            </Link>
          </li>
        ))}
    </ul>
  );
}
