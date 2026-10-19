'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Phone, MoveUpRight } from 'lucide-react';

const links = [{ href: '#sluzby', label: 'Služby' }, { href: '#technika', label: 'Technika' }, { href: '#realizace', label: 'Realizace' }, { href: '#o-nas', label: 'Náš přístup' }, { href: '#kontakt', label: 'Kontakt' }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="#top" className="brand" aria-label="Zemní práce RT – úvod" onClick={() => setOpen(false)}>
        <span className="brand-symbol"><span></span><span></span><span></span></span>
        <span className="brand-wordmark">ZEMNÍ PRÁCE <b>RT.</b></span>
      </Link>
      <nav className={`desktop-nav ${open ? 'nav-open' : ''}`} aria-label="Hlavní navigace">
        {links.map((link, i) => <a key={link.href} href={link.href} className={i === 0 ? 'nav-active' : ''} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href="#kontakt" className="mobile-contact" onClick={() => setOpen(false)}>Kontakt <MoveUpRight size={16}/></a>
      </nav>
      <a className="nav-cta" href="#kontakt"><span>Domluvit zakázku</span><ArrowUpRight size={17}/></a>
      <button className="menu-toggle" aria-label={open ? 'Zavřít menu' : 'Otevřít menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}
