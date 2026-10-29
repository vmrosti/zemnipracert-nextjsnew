import Link from 'next/link';
import { MessageSquareText, Phone } from 'lucide-react';
import { telHref } from '@/content/site';

/** Spodní lišta na mobilu – telefon a poptávka vždy na dosah palce. */
export default function MobileCallBar() {
  return (
    <div className="call-bar" role="region" aria-label="Rychlý kontakt">
      <a href={telHref} className="call-bar__call">
        <Phone size={19} aria-hidden="true" /> Zavolat
      </a>
      <Link href="/kontakt#poptavka" className="call-bar__form">
        <MessageSquareText size={19} aria-hidden="true" /> Poptávka
      </Link>
    </div>
  );
}
