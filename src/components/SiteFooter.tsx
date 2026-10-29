import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { mailHref, nav, site, telHref } from '@/content/site';
import { services } from '@/content/services';
import { FacebookIcon, InstagramIcon, LogoMark } from './Icons';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="brand" aria-label={`${site.name} – úvodní stránka`}>
            <LogoMark size={44} />
            <span className="brand__text">
              <span className="brand__name">Zemní práce RT</span>
              <span className="brand__sub">Radim Teplý, Velké Meziříčí</span>
            </span>
          </Link>
          <p>Rodinná firma. Naše práce je zároveň naším koníčkem, a proto je pro nás hlavní spokojený zákazník.</p>
          <div className="social-row">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Zemní práce RT">
              <FacebookIcon />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Zemní práce RT">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <nav aria-label="Služby v patičce">
          <h2 className="site-footer__title">Služby</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/sluzby/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Firma">
          <h2 className="site-footer__title">Firma</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
            </li>
          </ul>
        </nav>

        <address className="site-footer__contact">
          <h2 className="site-footer__title">Kontakt</h2>
          <a href={telHref}>
            <Phone size={17} aria-hidden="true" /> {site.phoneDisplay}
          </a>
          <a href={mailHref}>
            <Mail size={17} aria-hidden="true" /> {site.email}
          </a>
          <span>
            <MapPin size={17} aria-hidden="true" /> {site.address.locality}, {site.address.postalCode}
          </span>
          <span className="site-footer__ico">
            {site.owner}, IČO {site.ico}
          </span>
        </address>
      </div>
      <div className="wrap site-footer__bottom">
        <span>
          © {year} {site.name}
        </span>
        <Link href="/ochrana-osobnich-udaju">Web nepoužívá cookies</Link>
      </div>
    </footer>
  );
}
