'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Clock3, Construction, Earth, Hammer, HardHat, Layers3, MapPin, Menu, MoveUpRight, Phone, Route, ShieldCheck, Truck, X, Zap } from 'lucide-react';

const services = [
  { no: '01', icon: Construction, title: 'Výkopové práce', desc: 'Základy, přípojky, bazény, vodovody i kanalizace.', detail: 'Od přesného výkopu základových pasů po rozsáhlé zemní práce. Každý zásah plánujeme s ohledem na terén, návaznosti a termín.' },
  { no: '02', icon: Layers3, title: 'Úpravy terénu', desc: 'Roviny, svahy, zahrady a příprava pozemků.', detail: 'Srovnání a modelace terénu, skrývka ornice, zásypy i finální úprava okolí stavby pro další etapu projektu.' },
  { no: '03', icon: Route, title: 'Inženýrské sítě', desc: 'Přípojky, kabely, odpady a vodovody.', detail: 'Výkopy pro vodu, kanalizaci a další přípojky s důrazem na přesnost, bezpečný postup a koordinaci na místě.' },
  { no: '04', icon: Hammer, title: 'Demolice', desc: 'Menší objekty, betonové konstrukce a bourací práce.', detail: 'Řízené bourání menších stavebních objektů včetně přípravy pracoviště a následného odklizení materiálu.' },
  { no: '05', icon: Truck, title: 'Nakládka a odvoz', desc: 'Zemina, štěrk, stavební materiál.', detail: 'Zajistíme manipulaci se zeminou i odvoz podle charakteru zakázky. Jedna domluva, méně starostí.' },
  { no: '06', icon: Earth, title: 'Příprava pozemků', desc: 'Zahrady, příjezdy, komunikace a stavební plochy.', detail: 'Od prvního odkopu po připravený podklad. Pomůžeme dostat pozemek do stavu, ve kterém se dá pokračovat.' },
];
const projects = [
  { no: '01', title: 'Základy rodinného domu', place: 'Vysočina', image: '/images/realizace-zaklady.jpg', type: 'ZÁKLADY' },
  { no: '02', title: 'Příprava terénu', place: 'Vysočina', image: '/images/realizace-teren.jpg', type: 'TERÉN' },
  { no: '03', title: 'Výkop pro přípojky', place: 'Vysočina', image: '/images/realizace-site.jpg', type: 'SÍTĚ' },
  { no: '04', title: 'Zemní práce na pozemku', place: 'Vysočina', image: '/images/realizace-vykop.jpg', type: 'VÝKOPY' },
];
const nav = [{ label: 'Úvod', href: '#uvod' }, { label: 'Služby', href: '#sluzby' }, { label: 'Technika', href: '#technika' }, { label: 'Realizace', href: '#realizace' }, { label: 'O nás', href: '#o-nas' }, { label: 'Kontakt', href: '#kontakt' }];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [activeNav, setActiveNav] = useState('uvod');

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveNav(visible.target.id);
    }, { rootMargin: '-18% 0px -58% 0px', threshold: [0, .15, .35, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const shiftProject = (direction: number) => setActiveProject((current) => (current + direction + projects.length) % projects.length);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="announcement"><span className="announcement-dot" /> <span>TERÉN. V NAŠICH RUKOU.</span><span className="announcement-right">Zemní práce • Vysočina a okolí</span></div>
    <header className="site-header">
      <a className="brand" href="#uvod" aria-label="Zemní práce RT – úvod" onClick={closeMenu}><span className="brand-mark">RT<span>↗</span></span><span className="brand-copy"><b>ZEMNÍ PRÁCE <i>RT</i></b><small>JCB · TERÉN · VÝKOPY · ÚPRAVY</small></span></a>
      <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Hlavní navigace">{nav.map((item, i) => <a key={item.href} className={activeNav === item.href.slice(1) ? 'nav-active' : ''} href={item.href} onClick={closeMenu}>{item.label}</a>)}</nav>
      <div className="header-actions"><a className="header-phone" href="tel:+420777123456"><Phone size={15} /> <span>+420 777 123 456</span></a><a className="button button-yellow header-cta" href="#kontakt">Poptávka <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero" id="uvod">
        <div className="hero-photo" aria-hidden="true"><Image src="/images/hero-jcb.jpg" alt="" fill priority sizes="100vw" className="hero-image" /></div>
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-gridline" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> PROFESIONÁLNÍ ZEMNÍ PRÁCE <span className="eyebrow-index">/ 01</span></div>
          <h1>TERÉN.<br/><span>V NAŠICH</span><br/><em>RUKOU.</em></h1>
          <p className="hero-intro">Od prvního výkopu po hotový terén.<br/>Moderní technika. Přesná práce. Férová domluva.</p>
          <div className="hero-buttons"><a className="button button-yellow button-large" href="#kontakt">Pojďme na váš projekt <ArrowRight size={18}/></a><a className="button button-outline button-large" href="#sluzby">Poznat naše služby <ArrowDownRight size={18}/></a></div>
        </div>
        <div className="hero-bottom"><div className="hero-scroll"><span className="scroll-line"/> <span>POSUŇTE NÍŽ</span></div><div className="hero-caption"><span className="caption-number">01</span><span><b>JCB 3CX</b><small>Pracovní výkon bez kompromisů</small></span><ArrowUpRight size={19}/></div><div className="hero-count">01 <span>/</span> 04</div></div>
        <div className="hero-side-note">PŘESNOST <span>×</span> VÝKON <span>×</span> SPOLEHLIVOST</div>
      </section>

      <div className="ticker" aria-label="Naše priority"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <div className="ticker-run" key={i}><span>VÝKOPY</span><b>✳</b><span>TERÉNNÍ ÚPRAVY</span><b>✳</b><span>INŽENÝRSKÉ SÍTĚ</span><b>✳</b><span>MODERNÍ TECHNIKA</span><b>✳</b><span>FÉROVÁ DOMLUVA</span><b>✳</b></div>)}</div></div>

      <section className="services section-light" id="sluzby">
        <div className="section-shell services-shell">
          <div className="services-intro reveal" data-reveal><div className="eyebrow"><span className="eyebrow-line"/> CO PRO VÁS UDĚLÁME</div><h2>Velké plány.<br/><span>Pořádné</span> základy.</h2><p>Každý projekt začíná dobrým plánem a poctivou přípravou. Přijedeme, probereme možnosti a navrhneme postup, který dává smysl.</p><a className="text-link" href="#kontakt">Probrat váš projekt <ArrowUpRight size={17}/></a><div className="service-index"><strong>06</strong><span>SLUŽEB<br/>JEDEN PARTNER</span></div></div>
          <div className="service-grid">{services.map((service, i) => { const Icon = service.icon; return <button className={`service-card reveal delay-${(i % 3) + 1} ${activeService === i ? 'service-card-active' : ''}`} data-reveal key={service.no} onClick={() => setActiveService(activeService === i ? null : i)} aria-expanded={activeService === i}><span className="service-top"><span className="service-no">{service.no} /</span><Icon className="service-icon" strokeWidth={1.45}/></span><span className="service-title">{service.title}</span><span className="service-desc">{service.desc}</span><span className="service-card-bottom"><span>{activeService === i ? 'Skrýt detail' : 'Zjistit více'}</span><ArrowUpRight size={17}/></span>{activeService === i && <span className="service-detail">{service.detail}</span>}</button>; })}</div>
        </div>
      </section>

      <section className="about" id="o-nas">
        <div className="about-image"><Image src="/images/technika-jcb.jpg" alt="Detail pracovního stroje JCB" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="about-shade"/>
        <div className="about-copy reveal" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> KDO STOJÍ ZA STROJEM</div><h2>Práce, za kterou<br/><span>si stojíme.</span></h2><p>Nejde jen o to přesunout zeminu. Jde o to, aby vše sedělo, navazovalo a bylo hotové tak, jak jsme si domluvili. Na kvalitě práce i komunikaci záleží stejně.</p><a className="button button-yellow" href="#kontakt">Seznámit se s námi <ArrowRight size={17}/></a></div>
        <div className="stats-panel reveal" data-reveal><div className="stat"><span className="stat-icon"><HardHat size={21}/></span><strong>100<span>+</span></strong><small>realizovaných zakázek*</small></div><div className="stat"><span className="stat-icon"><Clock3 size={21}/></span><strong>15<span>+</span></strong><small>let zkušeností*</small></div><div className="stat"><span className="stat-icon"><ShieldCheck size={21}/></span><strong>100<span>%</span></strong><small>důraz na kvalitní práci</small></div><p>* Údaje před zveřejněním potvrďte podle skutečnosti.</p></div>
        <div className="about-vertical">ZKUŠENOST <span>—</span> PŘESNOST <span>—</span> ODPOVĚDNOST</div>
      </section>

      <section className="projects section-light" id="realizace">
        <div className="section-shell"><div className="section-heading reveal" data-reveal><div><div className="eyebrow"><span className="eyebrow-line"/> VÝSLEDEK MLUVÍ ZA NÁS</div><h2>Z místa, kde byl<br/><span>jen plán.</span></h2></div><div className="heading-side"><p>Ukázky prací, na kterých je vidět přístup, technika a výsledek. Každý pozemek je jiný. Poctivý standard zůstává.</p><div className="project-controls"><button onClick={() => shiftProject(-1)} aria-label="Předchozí realizace"><ChevronLeft/></button><button onClick={() => shiftProject(1)} aria-label="Další realizace"><ChevronRight/></button><span>0{activeProject + 1}<i> / 0{projects.length}</i></span></div></div></div>
          <div className="project-grid">{projects.map((project, i) => <article key={project.no} className={`project-card reveal delay-${i + 1} ${i === activeProject ? 'project-featured' : ''}`} data-reveal><a href="#kontakt" className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 90vw, 25vw" /><span className="project-type">{project.type}</span><span className="project-arrow"><ArrowUpRight/></span><span className="project-no">{project.no}</span></a><div className="project-meta"><div><h3>{project.title}</h3><span><MapPin size={12}/>{project.place}</span></div><ArrowUpRight size={17}/></div></article>)}</div>
          <div className="projects-foot"><span>01 — 04 / VÝBĚR REALIZACÍ</span><span className="foot-line"/><a className="text-link" href="#kontakt">Máte podobný projekt? <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="equipment" id="technika"><div className="equipment-image"><Image src="/images/realizace-stroj.jpg" alt="Zemní stroj připravený k práci" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div className="equipment-copy reveal" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> STROJ, KTERÝ UMÍ ZABRAT</div><h2>Správná technika.<br/><span>Čistá práce.</span></h2><p>Výsledek začíná správně zvoleným vybavením a zkušeným člověkem za ovládáním. Pracujeme efektivně, s rozmyslem a respektem k okolí.</p><div className="equipment-points"><div><Check size={15}/> Univerzální stroj JCB</div><div><Check size={15}/> Přesné výkopy i terénní úpravy</div><div><Check size={15}/> Flexibilní řešení podle zakázky</div></div><a className="button button-outline" href="#kontakt">Zjistit dostupnost <ArrowUpRight size={17}/></a></div><div className="equipment-spec"><span className="spec-kicker">NAŠE TECHNIKA <b> / 01</b></span><div className="spec-title">JCB <span>3CX</span></div><p>Univerzální rypadlo-nakladač</p><div className="spec-line"><span>01</span><b>Výkon a všestrannost</b><Zap size={17}/></div><div className="spec-line"><span>02</span><b>Práce v omezeném prostoru</b><Layers3 size={17}/></div><div className="spec-line"><span>03</span><b>Výkop · nakládka · úpravy</b><Construction size={17}/></div><small>Konkrétní dostupnost a parametry ověříme podle typu zakázky.</small></div></section>

      <section className="contact" id="kontakt"><div className="contact-backdrop"><Image src="/images/realizace-teren.jpg" alt="" fill sizes="100vw"/></div><div className="contact-overlay"/><div className="section-shell contact-shell"><div className="contact-intro reveal" data-reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> DALŠÍ KROK JE NA VÁS</div><h2>Máte plán?<br/><span>Rozjedeme ho.</span></h2><p>Popište nám, co potřebujete. Ozveme se, doladíme detaily a připravíme nezávaznou nabídku.</p><div className="contact-links"><a href="tel:+420777123456"><span><Phone size={17}/></span><div><small>ZAVOLEJTE NÁM</small><b>+420 777 123 456</b></div><ArrowUpRight size={16}/></a><a href="mailto:info@zemniprace-rt.cz"><span><MoveUpRight size={17}/></span><div><small>NAPIŠTE NÁM</small><b>info@zemniprace-rt.cz</b></div><ArrowUpRight size={16}/></a><div className="contact-location"><span><MapPin size={17}/></span><div><small>KDE PŮSOBÍME</small><b>Vysočina a okolí</b></div></div></div></div>
          <form className="contact-form reveal delay-2" data-reveal onSubmit={(e) => { e.preventDefault(); const data = new FormData(e.currentTarget); const subject = encodeURIComponent(`Poptávka – ${String(data.get('service') || 'zemní práce')}`); const body = encodeURIComponent(`Jméno: ${data.get('name')}\nTelefon: ${data.get('phone')}\nE-mail: ${data.get('email')}\nSlužba: ${data.get('service')}\n\nZpráva:\n${data.get('message')}`); setSent(true); window.location.href = `mailto:info@zemniprace-rt.cz?subject=${subject}&body=${body}`; }}>
            <div className="form-top"><span>NEZÁVAZNÁ POPTÁVKA</span><span>01 <i>/ 04</i></span></div><h3>Řekněte nám<br/>o svém projektu.</h3><div className="form-grid"><label>Jméno a příjmení<input name="name" placeholder="Jak vám máme říkat?" required /></label><label>Telefon<input name="phone" type="tel" placeholder="+420 ..." required /></label><label>E-mail<input name="email" type="email" placeholder="vas@email.cz" required /></label><label>Co potřebujete?<select name="service" defaultValue=""><option value="" disabled>Vyberte službu</option>{services.map(s => <option key={s.no}>{s.title}</option>)}</select></label><label className="form-message">Pár slov o zakázce<textarea name="message" placeholder="Místo, rozsah prací, termín…" rows={3} required/></label></div><button className="button button-yellow form-submit" type="submit">{sent ? 'Otevřít e-mail znovu' : 'Odeslat poptávku'} <ArrowRight size={17}/></button><p className="form-note">Tlačítko otevře váš e-mailový program s připravenou zprávou.</p>
          </form><div className="contact-stamp">POCTIVĚ.<br/><span>OD ZAČÁTKU</span><i>✳</i></div></div></section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#uvod"><span className="brand-mark">RT<span>↗</span></span><span className="brand-copy"><b>ZEMNÍ PRÁCE <i>RT</i></b><small>TERÉN. V NAŠICH RUKOU.</small></span></a><div className="footer-nav">{nav.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</div><div className="footer-right"><span>© {new Date().getFullYear()} ZEMNÍ PRÁCE RT</span><a href="#uvod" aria-label="Zpět nahoru"><ArrowUpRight size={18}/></a></div></footer>
    <div className="bottom-mobile-cta"><a href="tel:+420777123456"><Phone size={17}/> Zavolat</a><a href="#kontakt">Poptat zakázku <ArrowRight size={16}/></a></div>
  </>;
}
