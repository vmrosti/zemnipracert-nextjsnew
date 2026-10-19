import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronRight, Clock3, HardHat, Layers3, MapPin, Ruler, ShieldCheck, Shovel, Truck, Waves, Zap } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const services = [
  { n: '01', icon: Shovel, title: 'Výkopy a základy', text: 'Základové pasy, patky, sklepy i výkopy pro nové stavby.' },
  { n: '02', icon: Waves, title: 'Inženýrské sítě', text: 'Příprava tras a výkopů pro vodu, kanalizaci i další přípojky.' },
  { n: '03', icon: Layers3, title: 'Modelace terénu', text: 'Srovnání, úpravy sklonů a příprava pozemku pro další etapu.' },
  { n: '04', icon: Truck, title: 'Nakládka a přesun', text: 'Manipulace se zeminou a materiálem podle možností zakázky.' },
];
const projects = [
  { num: '01', title: 'Základy rodinného domu', type: 'ZÁKLADY / SOUKROMÁ VÝSTAVBA', image: '/images/realizace-zaklady.jpg', cls: 'project-feature' },
  { num: '02', title: 'Příprava pozemku', type: 'TERÉNNÍ ÚPRAVY', image: '/images/realizace-teren.jpg', cls: 'project-tall' },
  { num: '03', title: 'Výkopové práce', type: 'VÝKOPY / PŘÍPRAVA STAVBY', image: '/images/realizace-vykop.jpg', cls: '' },
];

export default function Home() {
  return <main id="top">
    <section className="hero-v2">
      <div className="hero-v2-image"><Image src="/images/hero-jcb.jpg" alt="Pásové rypadlo JCB při práci v terénu" fill priority sizes="100vw" /></div>
      <div className="hero-v2-overlay" />
      <div className="hero-v2-content page-wrap">
        <div className="hero-v2-kicker"><span className="live-dot"/> ZEMNÍ A VÝKOPOVÉ PRÁCE <span className="kicker-divider"/> VYSOČINA A OKOLÍ</div>
        <h1>TERÉN.<br/><span>V NAŠICH</span><br/><em>RUKOU.</em></h1>
        <div className="hero-v2-bottom"><p>Dobře připravený terén není detail.<br/>Je to začátek celé stavby.</p><a href="#sluzby" className="round-link"><span>POZNAT<br/>RT</span><ArrowDownRight size={23}/></a></div>
      </div>
      <div className="hero-side-label">ZEMNÍ PRÁCE / RT — 2026</div>
      <div className="hero-image-caption"><span className="caption-line"/><span>TECHNIKA, KTERÁ JEDE DO PRÁCE</span></div>
      <div className="hero-v2-bottom-edge"><span>01 — 06</span><span className="edge-line"/><span>POCTIVĚ. PŘESNĚ. VČAS.</span></div>
    </section>

    <div className="marquee-band" aria-label="Zemní práce, výkopy, základy, terénní úpravy"><div className="marquee-track">{Array.from({length: 4}, (_, i) => <span key={i}>VÝKOPY <b>✳</b> ZÁKLADY <b>✳</b> INŽENÝRSKÉ SÍTĚ <b>✳</b> TERÉNNÍ ÚPRAVY <b>✳</b> <strong>ZEMNÍ PRÁCE RT</strong> <b>✳</b></span>)}</div></div>

    <section className="manifesto section-light" id="o-nas"><div className="page-wrap manifesto-grid"><div className="section-index"><span>01</span><i/> NÁŠ PŘÍSTUP</div><div className="manifesto-main"><p className="eyebrow">MÉNĚ ŘEČÍ. VÍC HOTOVÉ PRÁCE.</p><h2>Stavba nezačíná<br/>na papíře. <em>Začíná<br/>pod nohama.</em></h2><div className="manifesto-footer"><p>Víme, že každá zakázka je jiná. Proto se nejdřív ptáme, pak navrhneme postup a nakonec necháme za sebe mluvit výsledek. Bez zbytečných slibů. S respektem k vašemu času i pozemku.</p><a className="line-link" href="#kontakt">Pojďme probrat váš projekt <ArrowUpRight size={18}/></a></div></div><div className="manifesto-side"><div className="outline-rt">RT<span>.</span></div><div className="manifesto-stamp"><span className="stamp-cross">✳</span><span>POCTIVÁ<br/>PRÁCE<br/>OD ZÁKLADU</span></div><div className="manifesto-side-foot">MÍSTNÍ PŘÍSTUP <span/> KONKRÉTNÍ VÝSLEDEK</div></div></div></section>

    <section className="services-v2 section-dark" id="sluzby"><div className="page-wrap"><div className="section-heading-v2"><div><div className="section-index index-light"><span>02</span><i/> CO PRO VÁS UDĚLÁME</div><h2>Od prvního<br/><em>záběru.</em></h2></div><div className="section-heading-note"><span className="yellow-rule"/><p>Dobrá příprava ušetří starosti v dalších etapách. Připravíme místo tak, aby na naši práci mohli navázat další.</p></div></div><div className="services-grid-v2">{services.map(({n, icon: Icon, title, text}) => <a href="#kontakt" className="service-card-v2" key={n}><div className="service-card-top"><span>{n} / 04</span><span className="service-icon-v2"><Icon size={25} strokeWidth={1.4}/></span></div><div><h3>{title}</h3><p>{text}</p></div><div className="service-card-foot"><span>PROBRAT ZAKÁZKU</span><ArrowUpRight size={19}/></div></a>)}</div><div className="service-bottom-note"><span><Zap size={16}/> NEJSTE SI JISTÍ, CO PŘESNĚ POTŘEBUJETE?</span><a href="#kontakt">Popište nám záměr. Zbytek probereme společně <ArrowRight size={16}/></a></div></div></section>

    <section className="machine-v2" id="technika"><div className="machine-v2-photo"><Image src="/images/technika-jcb.jpg" alt="Žlutý pracovní stroj JCB v terénu" fill sizes="(max-width: 800px) 100vw, 58vw"/><span className="photo-corner">RT / STROJOVÝ PARK</span><div className="photo-number">01<span> / TECHNIKA</span></div></div><div className="machine-v2-copy"><div className="section-index"><span>03</span><i/> NAŠE TECHNIKA</div><p className="eyebrow">SÍLA JE V DOBRÉM OVLÁDÁNÍ.</p><h2>Nejde jen<br/>o výkon.<br/><em>Jde o cit.</em></h2><p className="machine-v2-description">Moderní stroj je základ. O výsledku ale rozhoduje i zkušenost, správně zvolený postup a ohled na místo, kde pracujeme.</p><div className="machine-checks"><div><Check size={17}/> Promyšlený postup práce</div><div><Check size={17}/> Důraz na přesnost a okolí</div><div><Check size={17}/> Jasná domluva předem</div></div><a href="#kontakt" className="button-v2 button-black">PROBRAT VÁŠ PROJEKT <ArrowUpRight size={18}/></a><span className="machine-v2-ghost">JCB.</span></div></section>

    <section className="projects-v2 section-light" id="realizace"><div className="page-wrap"><div className="projects-head-v2"><div><div className="section-index"><span>04</span><i/> UKÁZKY PRÁCE</div><h2>Proměňujeme<br/><em>plány v terén.</em></h2></div><div className="projects-head-right"><p>Každá stavba má svůj příběh. Tady najdete ukázky typů prací, které umíme zajistit.</p><span className="project-count">GALERIE <b>— 03</b></span></div></div><div className="project-grid-v2">{projects.map((p) => <article className={`project-card-v2 ${p.cls}`} key={p.num}><div className="project-image-v2"><Image src={p.image} alt={p.title} fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="project-num-v2">/{p.num}</span><span className="project-arrow-v2"><ArrowUpRight size={21}/></span></div><div className="project-meta-v2"><div><span>{p.type}</span><h3>{p.title}</h3></div><ChevronRight size={19}/></div></article>)}</div><div className="gallery-disclaimer"><span/> Obrázky jsou dočasné ilustrační podklady. Před spuštěním webu je nahraďte fotografiemi skutečných realizací.</div></div></section>

    <section className="why-v2"><div className="why-photo"><Image src="/images/realizace-stroj.jpg" alt="Pracovní technika při úpravě terénu" fill sizes="(max-width: 800px) 100vw, 40vw"/><div className="why-photo-overlay"><span>RT.</span><p>NA KVALITĚ<br/>ZÁLEŽÍ OD<br/>PRVNÍHO DNE.</p></div></div><div className="why-copy"><div className="section-index index-light"><span>05</span><i/> PROČ ZEMNÍ PRÁCE RT</div><h2>Dobrá práce<br/>je vidět. <em>A cítit.</em></h2><p className="why-intro">Na stavbě rozhodují detaily. Proto sázíme na srozumitelnou domluvu, odpovědný přístup a výsledek, na který lze navázat.</p><div className="why-points"><div><span>01</span><div><h3>Férová domluva</h3><p>Rozsah, termín a očekávání si vyjasníme před začátkem.</p></div><ShieldCheck/></div><div><span>02</span><div><h3>Pečlivé provedení</h3><p>Respektujeme zadání, okolí stavby i návaznost dalších prací.</p></div><Ruler/></div><div><span>03</span><div><h3>Praktický přístup</h3><p>Hledáme řešení pro konkrétní pozemek, ne univerzální sliby.</p></div><Clock3/></div></div></div></section>

    <section className="contact-v2" id="kontakt"><div className="contact-v2-bg"/><div className="page-wrap contact-v2-grid"><div className="contact-v2-lead"><div className="section-index index-light"><span>06</span><i/> DALŠÍ KROK JE NA VÁS</div><h2>Máte plán?<br/><em>Rozjedeme ho.</em></h2><p>Napište nám, co potřebujete připravit. Probereme místo, rozsah a nejvhodnější další krok.</p><div className="contact-info-card"><div className="contact-info-icon"><MapPin size={20}/></div><div><span>KDE PRACUJEME</span><strong>Vysočina a okolí</strong><small>Konkrétní lokalitu nám napište do poptávky.</small></div></div><div className="contact-direct-line"><span className="contact-line"/><span>POPTÁVKA / RT — 01</span></div></div><div className="contact-v2-form"><div className="form-topline"><span>ŘEKNĚTE NÁM O SVÉM PROJEKTU</span><span className="live-dot"/></div><ContactForm/></div></div></section>
    <section className="final-strip"><div className="page-wrap final-strip-inner"><span className="final-mark">RT<span>.</span></span><p>Nejdřív pevný základ.<br/><em>Potom všechno ostatní.</em></p><a href="#top" aria-label="Zpět nahoru"><ArrowUpRight size={24}/></a></div></section>
  </main>;
}
