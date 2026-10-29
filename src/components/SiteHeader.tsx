'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { nav, site, telHref } from '@/content/site';
import { FacebookIcon, InstagramIcon, LogoMark } from './Icons';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Zavření menu po navigaci (bez efektu – stav se srovná při renderu).
  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('menu-open');
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} – úvodní stránka`}>
          <LogoMark size={38} />
          <span className="brand__text">
            <span className="brand__name">Zemní práce RT</span>
            <span className="brand__sub">Radim Teplý, Velké Meziříčí</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Hlavní navigace">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href={telHref} aria-label={`Zavolat ${site.phoneDisplay}`}>
            <Phone size={17} aria-hidden="true" />
            <span>{site.phoneDisplay}</span>
          </a>
          <Link className="btn btn--primary btn--sm header-cta" href="/kontakt#poptavka">
            Poptávka
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setOpenedAt(pathname);
              setOpen((v) => !v);
            }}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            <span className="sr-only">{open ? 'Zavřít menu' : 'Otevřít menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={open} inert={!open}>
        <nav aria-label="Mobilní navigace">
          <ul>
            <li>
              <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
                Úvod
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a className="btn btn--primary" href={telHref}>
            <Phone size={18} aria-hidden="true" /> Zavolat {site.phoneDisplay}
          </a>
          <div className="social-row">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Zemní práce RT">
              <FacebookIcon />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Zemní práce RT">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
