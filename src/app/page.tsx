import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronRight, Clock3, HardHat, Layers3, MapPin, MoveUpRight, Ruler, ShieldCheck, Shovel, Truck, Waves, Wrench } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const services = [
  { n: '01', icon: Shovel, title: 'Výkopy a základy', text: 'Základové pasy, patky, sklepy, bazény i výkopy pro menší stavby.' },
  { n: '02', icon: Waves, title: 'Inženýrské sítě', text: 'Příprava tras pro vodu, kanalizaci, elektřinu a další přípojky.' },
  { n: '03', icon: Layers3, title: 'Terénní úpravy', text: 'Srovnání pozemku, modelace terénu a příprava ploch pro další práci.' },
  { n: '04', icon: Truck, title: 'Nakládka a odvoz', text: 'Manipulace se zeminou a materiálem, odvoz po předchozí domluvě.' },
];
const projects = [
  { num: '01', title: 'Základy rodinného domu', type: 'VÝKOPY · SOUKROMÁ VÝSTAVBA', image: '/images/realizace-zaklady.jpg', cls: 'project-large' },
  { num: '02', title: 'Příprava pozemku', type: 'TERÉNNÍ ÚPRAVY', image: '/images/realizace-teren.jpg', cls: '' },
  { num: '03', title: 'Výkopové práce', type: 'VÝKOPY · PŘÍPRAVA STAVBY', image: '/images/realizace-vykop.jpg', cls: '' },
];
export default function Home() {
  return <main id="top">
    <section className="hero">
      <div className="hero-photo" role="img" aria-label="Pracovní stroj na stavbě" />
      <div className="hero-grain" />
      <div className="hero-inner page-wrap">
        <div className="hero-kicker"><span className="kicker-line"/> ZEMNÍ A VÝKOPOVÉ PRÁCE <span className="kicker-location"><MapPin size={13}/> VYSOČINA A OKOLÍ</span></div>
        <h1>Každý dobrý<br/>projekt začíná<br/><em>pevnou půdou.</em></h1>
        <div className="hero-lower"><p>Spolehlivé zemní práce od prvního záběru<br className="desktop-only"/> až po čistě připravené místo pro další stavbu.</p><a href="#sluzby" className="hero-scroll">Prozkoumat služby <ArrowDownRight size={17}/></a></div>
      </div>
      <div className="hero-stamp"><span>RT</span><span>POCTIVĚ.<br/>PŘESNĚ.<br/>VČAS.</span></div>
      <div className="hero-bottomline"><span>01 / 04</span><span className="line"/><span>PRÁCE, KTERÁ MÁ PEVNÝ ZÁKLAD</span></div>
    </section>

    <section className="intro section-light" id="o-nas">
      <div className="page-wrap intro-grid"><div className="section-index"><span>01</span><span className="index-rule"/> KDO JSME</div><div className="intro-copy"><p className="eyebrow">MALÁ FIRMA. VELKÁ ODPOVĚDNOST.</p><h2>Nejde jen o to<br/>vykopat díru.<br/><span>Jde o to udělat to správně.</span></h2><div className="intro-bottom"><p>Každý pozemek je jiný. Proto začínáme domluvou, pokračujeme promyšlenou prací a končíme místem připraveným na další krok. Bez zbytečných řečí — s důrazem na výsledek.</p><a className="text-link" href="#kontakt">Řekněte nám, co plánujete <ArrowUpRight size={17}/></a></div></div><div className="intro-side"><div className="big-number">RT<span>.</span></div><p>Praktický přístup.<br/>Moderní technika.<br/>Lidská domluva.</p><span className="side-decoration">ZEMNÍ PRÁCE / 2026</span></div></div>
    </section>

    <section className="services section-dark" id="sluzby">
      <div className="page-wrap"><div className="section-heading"><div><div className="section-index light-index"><span>02</span><span className="index-rule"/> CO UMÍME</div><h2>Od prvního výkopu<br/><span>po hotový terén.</span></h2></div><p>Jasně domluvený rozsah, rozumný postup a práce, na kterou se dá navázat.</p></div>
        <div className="service-list">{services.map(({n, icon: Icon, title, text}) => <a href="#kontakt" className="service-row" key={n}><span className="service-num">{n}</span><span className="service-icon"><Icon strokeWidth={1.5}/></span><span className="service-main"><span className="service-title">{title}</span><span className="service-desc">{text}</span></span><span className="service-arrow"><ArrowUpRight size={21}/></span></a>)}</div>
        <div className="services-foot"><span><span className="yellow-dot"/> POTŘEBUJETE NĚCO JINÉHO?</span><a href="#kontakt">Napište nám. Probereme možnosti. <ArrowRight size={16}/></a></div>
      </div>
    </section>

    <section className="machine-section" id="technika"><div className="machine-image"><Image src="/images/technika-jcb.jpg" alt="Pracovní stroj JCB při zemních pracích" fill sizes="(max-width: 800px) 100vw, 55vw" priority={false}/><div className="image-label">TECHNIKA V TERÉNU <span>RT / 01</span></div></div><div className="machine-copy section-yellow"><div className="section-index"><span>03</span><span className="index-rule"/> NAŠE TECHNIKA</div><p className="eyebrow">PŘIPRAVENÁ DO PRÁCE</p><h2>Správný stroj.<br/><em>Správně<br/>odvedená práce.</em></h2><p className="machine-desc">Technika je důležitá. Stejně důležité je ale vědět, jak ji použít — bezpečně, efektivně a s ohledem na váš pozemek.</p><div className="machine-points"><div><Check size={17}/><span>Vhodně zvolený postup</span></div><div><Check size={17}/><span>Důraz na přesnost a okolí</span></div><div><Check size={17}/><span>Domluva před zahájením</span></div></div><a className="button button-dark" href="#kontakt">Probrat váš projekt <ArrowUpRight size={17}/></a><span className="machine-mark">RT.</span></div></section>

    <section className="projects section-light" id="realizace"><div className="page-wrap"><div className="section-heading project-heading"><div><div className="section-index"><span>04</span><span className="index-rule"/> UKÁZKY PRÁCE</div><h2>Výsledek mluví<br/><span>sám za sebe.</span></h2></div><p>Každá realizace začíná konkrétním zadáním. Tady se brzy objeví fotografie našich skutečných zakázek.</p></div><div className="project-grid">{projects.map((p) => <article className={`project-card ${p.cls}`} key={p.num}><div className="project-image"><Image src={p.image} alt={p.title} fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="project-number">/{p.num}</span><span className="project-open"><ArrowUpRight size={20}/></span></div><div className="project-meta"><div><span>{p.type}</span><h3>{p.title}</h3></div><ChevronRight size={19}/></div></article>)}</div><div className="project-note"><span className="note-dot"/> FOTOGRAFIE JSOU DOČASNÉ NÁHLEDY — PŘED SPUŠTĚNÍM JE VYMĚŇTE ZA VLASTNÍ REALIZACE.</div></div></section>

    <section className="reasons section-cream"><div className="page-wrap reasons-grid"><div className="reasons-lead"><div className="section-index"><span>05</span><span className="index-rule"/> PROČ RT</div><h2>Dobrá práce<br/>se pozná <em>na místě.</em></h2><p>Nemusíme slibovat nemožné. Raději si dopředu řekneme, co je potřeba, jaký bude postup a co od nás můžete čekat.</p></div><div className="reason-items"><div className="reason-item"><span className="reason-icon"><Ruler/></span><div><h3>Přesnost</h3><p>Respekt k zadání, rozměrům a návaznosti dalších prací.</p></div></div><div className="reason-item"><span className="reason-icon"><ShieldCheck/></span><div><h3>Férová domluva</h3><p>Rozsah a očekávání si vyjasníme před začátkem.</p></div></div><div className="reason-item"><span className="reason-icon"><Clock3/></span><div><h3>Rozumný postup</h3><p>Plánujeme tak, aby práce navazovala a zbytečně nestála.</p></div></div><div className="reason-item"><span className="reason-icon"><HardHat/></span><div><h3>Odpovědnost</h3><p>Na stavbě záleží na detailech i na bezpečném provedení.</p></div></div></div></div></section>

    <section className="contact-section" id="kontakt"><div className="page-wrap contact-grid"><div className="contact-lead"><div className="section-index light-index"><span>06</span><span className="index-rule"/> POJĎME TO PROBRAT</div><h2>Máte plán?<br/><em>Rozjedeme ho.</em></h2><p>Popište nám, co potřebujete. Ozveme se a společně probereme nejvhodnější řešení.</p><div className="contact-direct"><span className="direct-icon"><MoveUpRight/></span><div><span>NEJRYCHLEJŠÍ CESTA</span><strong>Pošlete nám základní informace</strong><small>Typ práce · místo · předpokládaný termín</small></div></div><div className="contact-coordinates"><span><MapPin size={16}/> Vysočina a okolí</span><span><Wrench size={16}/> Zemní a výkopové práce</span></div></div><div className="contact-form-wrap"><div className="form-heading"><span>POPTÁVKA / 01</span><span className="yellow-dot"/></div><ContactForm/></div></div></section>
    <section className="last-call"><div className="page-wrap last-call-inner"><span>RT.</span><p>Dobrá stavba začíná<br/><em>dobře připraveným terénem.</em></p><a href="#kontakt" aria-label="Kontaktovat nás"><ArrowUpRight size={26}/></a></div></section>
  </main>;
}
