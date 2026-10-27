'use client';
import { useEffect, useRef, useState } from 'react';

const missions = [
  { n: '01', title: 'ZÁKLADY', sub: 'Od prvního záběru po pevný bod.', text: 'Výkopy základů, příprava stavebních ploch a přesné usazení terénu. Začínáme správně — protože všechno důležité stojí na tom, co není vidět.', tag: 'BUILD / 01', metric: '± 20 mm', metricLabel: 'důraz na přesnost' },
  { n: '02', title: 'TERÉN', sub: 'Dáme prostoru nový tvar.', text: 'Modelace terénu, srovnání ploch, svahy i finální úpravy. Pracujeme s terénem, ne proti němu.', tag: 'SHAPE / 02', metric: '360°', metricLabel: 'pohled na celek' },
  { n: '03', title: 'SÍTĚ', sub: 'To důležité vede pod povrchem.', text: 'Přípojky, rýhy, odvodnění a technická infrastruktura. Čisté provedení, promyšlený postup a respekt k místu.', tag: 'CONNECT / 03', metric: '01—∞', metricLabel: 'od přípojky po celek' },
  { n: '04', title: 'ODVOZ', sub: 'Pryč s překážkami. Vzhůru k výsledku.', text: 'Odvoz zeminy, návoz materiálu a příprava prostoru pro další fázi projektu. Bez zbytečných prostojů.', tag: 'MOVE / 04', metric: 'ON SITE', metricLabel: 'když je potřeba' },
];

function Terrain({ active }: { active: number }) {
  return <div className={`terrain terrain-${active}`} aria-hidden="true">
    <div className="terrain-orb" />
    <svg className="contours" viewBox="0 0 900 650" preserveAspectRatio="xMidYMid slice">
      {Array.from({length: 19}, (_,i) => <path key={i} d={`M ${-180+i*12} ${210+i*9} C ${40+i*18} ${-30+i*11}, ${300+i*9} ${90+i*15}, ${460+i*10} ${40+i*14} S ${700+i*9} ${130+i*10}, ${1050+i*11} ${-30+i*13}`} />)}
      {Array.from({length: 13}, (_,i) => <path key={`b${i}`} d={`M ${-100+i*18} ${500-i*4} C ${120+i*12} ${330-i*8}, ${280+i*15} ${650-i*12}, ${520+i*9} ${430-i*13} S ${760+i*10} ${520-i*6}, ${1000+i*14} ${360-i*8}`} />)}
    </svg>
    <div className="terrain-axis axis-a"/><div className="terrain-axis axis-b"/>
    <div className="terrain-coord coord-a">49°17′ N<br/>16°13′ E</div><div className="terrain-coord coord-b">RT / FIELD SYSTEMS<br/>ACTIVE TERRAIN MODEL</div>
    <div className="terrain-ring ring-a"/><div className="terrain-ring ring-b"/><div className="terrain-ring ring-c"/>
    <div className="terrain-cross">+</div><div className="terrain-cross cross-two">+</div>
    <div className="terrain-label"><span>LIVE TERRAIN STUDY</span><b>RT—{String(active+1).padStart(2,'0')}</b></div>
  </div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({x: 0, y: 0});
  const [sent, setSent] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    const onMove = (e: MouseEvent) => setMouse({x:(e.clientX/window.innerWidth-.5)*2,y:(e.clientY/window.innerHeight-.5)*2});
    window.addEventListener('scroll', onScroll, {passive:true}); window.addEventListener('mousemove', onMove);
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); }), {threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    return () => {window.removeEventListener('scroll',onScroll);window.removeEventListener('mousemove',onMove);obs.disconnect();};
  }, []);
  const go = (id:string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); };
  return <main>
    <div className="noise" aria-hidden="true"/>
    <header className={`nav ${scrolled?'nav-scrolled':''}`}>
      <a className="brand" href="#top" aria-label="RT domů"><span className="brand-mark">RT<span>®</span></span><span className="brand-line"/><span className="brand-caption">GROUND<br/>IN MOTION</span></a>
      <div className="nav-right"><span className="nav-location"><i/> VELKÁ BÍTEŠ / CZ</span><button className="nav-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Otevřít menu"><span>{menuOpen?'ZAVŘÍT':'MENU'}</span><b className={menuOpen?'x':''}><i/><i/></b></button></div>
    </header>
    <div className={`menu-overlay ${menuOpen?'menu-visible':''}`} aria-hidden={!menuOpen}>
      <div className="menu-meta">RT® / NAVIGACE <span>2026 — CZ</span></div><nav>{[['01','PŘÍSTUP','top'],['02','CO DĚLÁME','missions'],['03','JAK PRACUJEME','method'],['04','SPOJME SE','contact']].map(a=><button key={a[0]} onClick={()=>go(a[2])}><small>{a[0]}</small>{a[1]}<span>↗</span></button>)}</nav><p className="menu-foot">ZEMNÍ PRÁCE · TERÉNNÍ ŘEŠENÍ · TECHNIKA</p>
    </div>
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-grid"/>
      <div className="hero-topline"><span>PRECISION EARTHWORKS</span><span>EST. / FIELD READY</span></div>
      <div className="hero-copy" style={{transform:`translate3d(${mouse.x*-7}px,${mouse.y*-5}px,0)`}}>
        <div className="eyebrow"><span className="eyebrow-dot"/> ZEMNÍ PRÁCE / RT</div>
        <h1>WE MOVE<br/><em>THE</em> <strong>GROUND.</strong></h1>
        <div className="hero-bottom"><p>Každý terén má svůj potenciál.<br/>My víme, jak ho dostat na povrch.</p><button className="round-link" onClick={()=>go('missions')} aria-label="Prozkoumat služby">↓</button></div>
      </div>
      <Terrain active={active}/>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><div className="scroll-track"><i/></div><span>01 / 04</span></div>
      <div className="hero-vertical">TECHNIKA × PŘESNOST × POHYB</div>
      <div className="hero-bottomline"><span>BUILT AROUND THE TERRAIN.</span><span>49°17′ N — 16°13′ E</span></div>
    </section>
    <section className="manifesto" id="method">
      <div className="manifesto-top reveal"><span className="section-tag">[ 01 — OUR POINT OF VIEW ]</span><span className="manifesto-side">NEJDE JEN O ZEMINU.<br/>JDE O TO, CO NA NÍ VZNIKNE.</span></div>
      <h2 className="manifesto-heading reveal">NEJDŘÍV JE<br/>JEN <span className="outline-word">PROSTOR.</span><br/>PAK JE Z NĚJ<br/><span className="accent-word">NĚCO VÍC<span className="dot">.</span></span></h2>
      <div className="manifesto-bottom reveal"><span className="vertical-number">RT / 001</span><p>Pracujeme s terénem, časem a technikou tak, aby další krok projektu mohl začít přesně tam, kde má.</p><span className="manifesto-arrow">↘</span></div>
      <div className="manifesto-stamp">THOUGHTFUL<br/>BY NATURE</div>
    </section>
    <section className="missions" id="missions">
      <div className="missions-head reveal"><div><span className="section-tag">[ 02 — CAPABILITIES ]</span><h2>ČTYŘI ZPŮSOBY.<br/><span>JEDEN SMĚR.</span></h2></div><p>Od prvního záběru po poslední detail. Vyberte oblast, kterou potřebujete posunout.</p></div>
      <div className="mission-layout">
        <div className="mission-list" role="tablist" aria-label="Oblasti služeb">{missions.map((m,i)=><button key={m.n} role="tab" aria-selected={active===i} className={`mission-item ${active===i?'mission-active':''}`} onClick={()=>setActive(i)}><span className="mission-no">{m.n}</span><span className="mission-name">{m.title}</span><span className="mission-plus">{active===i?'↗':'+'}</span><span className="mission-line"/></button>)}</div>
        <div className="mission-stage" role="tabpanel" key={active}>
          <Terrain active={active}/><div className="stage-top"><span>{missions[active].tag}</span><span>RT / 0{active+1}</span></div>
          <div className="stage-content"><span className="stage-kicker">FIELD CAPABILITY — {missions[active].n}</span><h3>{missions[active].sub}</h3><p>{missions[active].text}</p><button className="text-link" onClick={()=>go('contact')}>PROBRAT VÁŠ PROJEKT <span>↗</span></button></div>
          <div className="stage-metric"><strong>{missions[active].metric}</strong><span>{missions[active].metricLabel}</span></div>
          <div className="stage-corner">INTERACTIVE<br/>FIELD MODULE</div>
        </div>
      </div>
      <div className="mission-foot"><span>01—04 / CAPABILITIES</span><span>VYBERTE OBLAST A OBJEVTE DETAIL <b>↗</b></span></div>
    </section>
    <section className="process">
      <div className="process-bgword" aria-hidden="true">METHOD</div>
      <div className="process-intro reveal"><span className="section-tag">[ 03 — HOW WE WORK ]</span><h2>ŽÁDNÉ ZBYTEČNÉ<br/><span>POHYBY.</span></h2><p>Dobrá práce není o tom, kolik zeminy přemístíme. Je o tom, jak chytře se k výsledku dostaneme.</p></div>
      <div className="process-steps">{[{n:'01',t:'POCHOPIT',d:'Nejdřív místo, zadání a co má na konci vzniknout.'},{n:'02',t:'NAPLÁNOVAT',d:'Správný stroj, postup a návaznost. Bez improvizace na úkor výsledku.'},{n:'03',t:'PROVÉST',d:'Přesně, bezpečně a s respektem k okolí i času.'}].map((s,i)=><div className="process-step reveal" key={s.n}><span>{s.n}</span><div><h3>{s.t}</h3><p>{s.d}</p></div><i>{['⌖','⌁','↗'][i]}</i></div>)}</div>
      <div className="process-bottom"><span>RT® / FIELD LOGIC</span><span>LESS FRICTION. BETTER GROUND.</span></div>
    </section>
    <section className="contact" id="contact">
      <div className="contact-orbit" aria-hidden="true"><i/><i/><i/><b>RT</b></div>
      <div className="contact-content reveal"><span className="section-tag">[ 04 — START A PROJECT ]</span><h2>CO MÁME<br/><span>POSUNOUT?</span></h2><p>Popište nám místo, záměr nebo problém. Ozveme se a společně najdeme další krok.</p><a className="contact-mail" href="mailto:info@zemniprace-rt.cz" onClick={e=>{e.preventDefault();go('contact-form')}}>ZAČÍT KONVERZACI <span>↗</span></a></div>
      <form id="contact-form" className="contact-form reveal" onSubmit={e=>{e.preventDefault();setSent(true)}}>
        <div className="form-head"><span>PROJECT INTAKE / 001</span><span>~ 2 MIN</span></div>
        <label>VAŠE JMÉNO<input required name="name" placeholder="Jak vám říkáme?" /></label>
        <label>E-MAIL / TELEFON<input required name="contact" placeholder="Kam se ozvat?" /></label>
        <label>CO POTŘEBUJETE?<select name="service" defaultValue=""><option value="" disabled>Vyberte oblast</option><option>Výkopové práce</option><option>Terénní úpravy</option><option>Přípojky a sítě</option><option>Odvoz / návoz materiálu</option><option>Jiné zadání</option></select></label>
        <label>STRUČNĚ O PROJEKTU<textarea name="message" rows={2} placeholder="Místo, rozsah, termín…"/></label>
        <button className="submit-btn" type="submit">{sent?'DĚKUJEME — DEMO ODESLÁNO':'ODESLAT POPTÁVKU'} <span>↗</span></button>
        <p className="form-note">DEMO FORMULÁŘ — PŘED SPUŠTĚNÍM NAPOJIT NA E-MAIL / BACKEND.</p>
      </form>
      <footer><a className="footer-logo" href="#top">RT<span>®</span></a><span>ZEMNÍ PRÁCE / CZ</span><span>MADE FOR THE GROUND WE SHARE.</span><a href="#top">ZPĚT NAHORU ↑</a><small>© RT — 2026</small></footer>
    </section>
  </main>;
}
