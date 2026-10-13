"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, HardHat, Layers3, MapPin, Menu, MoveUpRight, Phone, ShieldCheck, Shovel, Truck, X } from "lucide-react";

const services = [
  { n: "01", title: "Výkopy základů", text: "Přesné výkopy pro rodinné domy, garáže, přístavby i menší stavby.", icon: Layers3 },
  { n: "02", title: "Přípojky a rýhy", text: "Příprava tras pro vodu, elektřinu, kanalizaci a další inženýrské sítě.", icon: Shovel },
  { n: "03", title: "Terénní úpravy", text: "Srovnání pozemku, modelace terénu a příprava ploch před další prací.", icon: MoveUpRight },
  { n: "04", title: "Nakládka a přesun zeminy", text: "Manipulace se zeminou a materiálem podle podmínek a rozsahu zakázky.", icon: Truck },
];
const steps = [
  ["01", "Domluvíme se", "Řeknete mi, co potřebujete, kde se práce budou dělat a v jakém termínu."],
  ["02", "Navrhnu řešení", "Upřesníme rozsah, přístup na pozemek i cenu. Bez nepříjemných překvapení."],
  ["03", "Pustíme se do práce", "Pracuji pečlivě, s ohledem na okolí a na to, co bude na výkop navazovat."],
];
const appear = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", work: "", message: "" });
  const [sent, setSent] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka zemních prací – ${form.name}`);
    const body = encodeURIComponent(`Jméno: ${form.name}\nTelefon: ${form.phone}\nTyp práce: ${form.work || "Neuvedeno"}\n\nPopis: ${form.message}`);
    window.location.href = `mailto:doplnit@email.cz?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <main>
    <div className="topline"><div className="container topline-inner"><span><span className="status-dot" /> Beru nové zakázky</span><span className="topline-right"><MapPin size={13} /> Působnost: doplňte oblast působení <span className="topline-sep">/</span> <a href="#kontakt">Nezávazná poptávka <ArrowRight size={12} /></a></span></div></div>
    <header className="header"><div className="container nav-wrap">
      <a className="brand" href="#domu" aria-label="Zemní práce RT – úvod"><span className="brand-mark"><span>RT</span><i /></span><span className="brand-text">ZEMNÍ PRÁCE <b>RT</b><small>POCTIVĚ OD ZÁKLADU</small></span></a>
      <button className="menu-toggle" aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Hlavní navigace"><a onClick={closeMenu} href="#sluzby">Služby</a><a onClick={closeMenu} href="#pristup">Jak pracuji</a><a onClick={closeMenu} href="#o-mne">O mně</a><a onClick={closeMenu} href="#kontakt">Kontakt</a><a className="nav-cta" onClick={closeMenu} href="#kontakt">Poptat práci <ArrowUpRightIcon /></a></nav>
    </div></header>

    <section className="hero" id="domu"><div className="hero-grid" /><div className="container hero-inner">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.div className="eyebrow" variants={appear}><span className="eyebrow-line" /> ZEMNÍ A VÝKOPOVÉ PRÁCE</motion.div>
        <motion.h1 variants={appear}>Dobrý základ.<br /><span>Pořádná práce.</span></motion.h1>
        <motion.p className="hero-lead" variants={appear}>Od prvního výkopu až po finální úpravu terénu. Spolehlivě, přesně a s respektem k vašemu pozemku.</motion.p>
        <motion.div className="hero-actions" variants={appear}><a className="button button-yellow" href="#kontakt">Poptat zemní práce <ArrowRight size={17} /></a><a className="text-link" href="#sluzby">Prohlédnout služby <ArrowDownRight size={16} /></a></motion.div>
        <motion.div className="hero-proof" variants={appear}><div className="proof-icon"><ShieldCheck size={19} /></div><div><strong>Osobní domluva</strong><span>Od první zprávy po hotovou práci</span></div><div className="proof-divider" /><div><strong>JCB technika</strong><span>Na práci, která má smysl</span></div></motion.div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96, x: 22 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
        <div className="visual-label"><span className="visual-label-dot" /> PŘIPRAVENO DO TERÉNU <span className="label-index">RT / 01</span></div>
        <div className="visual-image"><div className="visual-glow" /><div className="visual-sun" /><div className="terrain terrain-back" /><div className="terrain terrain-front" />
          <svg className="excavator" viewBox="0 0 680 470" role="img" aria-label="Ilustrace žlutého rypadla JCB na staveništi" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="cab" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f9d547"/><stop offset="1" stopColor="#dba900"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#29332c"/><stop offset="1" stopColor="#101511"/></linearGradient><linearGradient id="arm" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe56b"/><stop offset="1" stopColor="#d9a900"/></linearGradient></defs>
            <ellipse cx="348" cy="390" rx="260" ry="34" fill="#11140f" opacity=".5"/>
            <path d="M127 340 Q118 322 138 307 L415 305 Q445 311 449 340 L439 370 Q430 389 399 389 L169 389 Q137 386 127 365Z" fill="#20231e" stroke="#52564a" strokeWidth="4"/><path d="M153 343 L420 343 L412 369 L169 369Z" fill="#4b4e43"/><path d="M173 347 L190 347 L183 365 L166 365Z M213 347 L230 347 L223 365 L206 365Z M253 347 L270 347 L263 365 L246 365Z M293 347 L310 347 L303 365 L286 365Z M333 347 L350 347 L343 365 L326 365Z M373 347 L390 347 L383 365 L366 365Z" fill="#171a15"/>
            <path d="M207 311 L239 222 L319 216 L351 310Z" fill="url(#cab)" stroke="#9f7e06" strokeWidth="4"/><path d="M250 232 L306 228 L329 292 L228 292Z" fill="url(#glass)" stroke="#252920" strokeWidth="6"/><path d="M263 238 L286 236 L300 285 L246 285Z" fill="#78867b" opacity=".2"/><path d="M209 306 L348 306 L360 328 L193 328Z" fill="#e4b500"/><path d="M227 315 L338 315 L333 329 L218 329Z" fill="#20231e"/><rect x="286" y="301" width="35" height="11" rx="2" fill="#f6d337"/><text x="292" y="309" fontSize="8" fontWeight="900" fill="#25271f">JCB</text>
            <path d="M306 227 L335 168 L367 173 L354 237 L337 253 L317 247Z" fill="url(#arm)" stroke="#9f7e06" strokeWidth="4"/><path d="M354 176 L382 114 L409 123 L388 188 L367 199Z" fill="url(#arm)" stroke="#9f7e06" strokeWidth="4"/><path d="M399 126 L423 130 L405 184 L389 179Z" fill="#252920"/><path d="M402 176 L428 186 L452 220 L437 235 L410 203Z" fill="#d9ad00" stroke="#8f7100" strokeWidth="4"/><path d="M438 225 L455 217 L473 245 L458 269 L438 261 L427 246Z" fill="#282b24" stroke="#11140f" strokeWidth="5"/><path d="M451 249 L466 252 L455 274 L443 270Z" fill="#6e7165"/>
            <path d="M200 306 L168 300 L157 319 L184 328Z" fill="#e3b500"/><path d="M191 329 L172 329 L168 342 L197 342Z" fill="#1b1e18"/><path d="M128 357 L104 357 L91 375 L123 377 L143 366Z" fill="#242720"/><circle cx="178" cy="357" r="8" fill="#a9ab9d"/><circle cx="218" cy="357" r="8" fill="#a9ab9d"/><circle cx="258" cy="357" r="8" fill="#a9ab9d"/><circle cx="298" cy="357" r="8" fill="#a9ab9d"/><circle cx="338" cy="357" r="8" fill="#a9ab9d"/><circle cx="378" cy="357" r="8" fill="#a9ab9d"/><path d="M190 313 L201 300 L209 302 L207 315Z" fill="#ffec9b"/>
          </svg>
          <div className="visual-stamp"><span className="stamp-top">POCTIVĚ</span><span className="stamp-mid">OD</span><strong>ZÁKLADU</strong><span className="stamp-star">✳</span></div>
          <div className="visual-bottom"><span>01 — VÝKOPY A TERÉNNÍ ÚPRAVY</span><span>PRÁCE, KTERÁ DRŽÍ</span></div>
        </div>
        <div className="visual-caption"><span>01 / 04</span><span className="caption-line" /><span>Váš pozemek. Naše práce.</span></div>
      </motion.div>
    </div><a className="scroll-cue" href="#sluzby"><span>SCROLL PRO VÍCE</span><ChevronDown size={15} /></a></section>

    <section className="ticker" aria-label="Nabídka služeb"><div className="ticker-track"><span>VÝKOPY ZÁKLADŮ <i>✳</i></span><span>TERÉNNÍ ÚPRAVY <i>✳</i></span><span>PŘÍPOJKY A RÝHY <i>✳</i></span><span>PŘÍPRAVA POZEMKŮ <i>✳</i></span><span>VÝKOPY ZÁKLADŮ <i>✳</i></span><span>TERÉNNÍ ÚPRAVY <i>✳</i></span></div></section>

    <section className="section services-section" id="sluzby"><div className="container"><motion.div className="section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={appear}><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> CO UMÍM ZAŘÍDIT</div><h2>Od hrubé práce<br />k <span>čistému výsledku.</span></h2></div><p>Každý pozemek je jiný. Proto se nejdřív domluvíme na tom, co potřebujete — a pak najdeme rozumný postup.</p></motion.div>
      <div className="services-grid">{services.map((service, i) => <motion.article className="service-card" key={service.n} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={{ ...appear, show: { ...appear.show, transition: { ...appear.show.transition, delay: i * 0.07 } } }}><div className="service-top"><span>{service.n} / SLUŽBA</span><service.icon size={23} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt" aria-label={`Poptat službu ${service.title}`}><ArrowUpRightIcon /></a></motion.article>)}</div>
      <div className="service-note"><span className="note-symbol">✳</span><p>Nejste si jistí, co přesně potřebujete? <strong>Zavolejte nebo napište.</strong> Probereme možnosti a domluvíme další postup.</p><a href="#kontakt">Probrat zakázku <ArrowRight size={16} /></a></div>
    </div></section>

    <section className="approach-section" id="pristup"><div className="container approach-layout"><div className="approach-intro"><div className="eyebrow"><span className="eyebrow-line" /> JEDNODUŠE A NA ROVINU</div><h2>Žádné sliby.<br /><span>Viditelná práce.</span></h2><p>Na zemních pracích záleží. Když se něco udělá špatně na začátku, později to stojí čas i peníze. Proto dávám důraz na domluvu, přesnost a rozumné řešení.</p><a className="button button-outline" href="#kontakt">Domluvit nezávaznou konzultaci <ArrowRight size={16} /></a><div className="approach-mark">RT<span> / 02</span></div></div>
      <div className="steps">{steps.map(([n, title, text]) => <motion.div className="step" key={n} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={appear}><div className="step-num">{n}</div><div className="step-content"><h3>{title}</h3><p>{text}</p></div><ArrowDownRight className="step-arrow" size={21} /></motion.div>)}</div></div></section>

    <section className="about-section" id="o-mne"><div className="container about-layout"><div className="about-visual"><div className="about-big-number">RT<span>.</span></div><div className="about-grid-lines" /><div className="about-tag"><HardHat size={18} /><span>ROZUMÍM PRÁCI V TERÉNU</span></div><div className="about-corner">PEVNÝ ZÁKLAD<br />ZAČÍNÁ TADY.</div></div><div className="about-copy"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> KDO ZA TÍM STOJÍ</div><h2>Malá domluva.<br /><span>Pořádný kus práce.</span></h2><p>Za Zemními pracemi RT stojí osobní přístup a snaha odvést práci tak, aby na ni šlo bez obav navázat. Každou zakázku řeším individuálně — podle místa, rozsahu a vašich potřeb.</p><p>Chcete vědět, jestli je váš projekt vhodný? Ozvěte se. Řekneme si otevřeně, co dává smysl a co bude potřeba.</p><div className="about-values"><div><Check size={16} /><span>Férová domluva</span></div><div><Check size={16} /><span>Pečlivé provedení</span></div><div><Check size={16} /><span>Praktická řešení</span></div></div><a className="text-link dark-link" href="#kontakt">Pojďme probrat váš projekt <ArrowRight size={16} /></a></div></div></section>

    <section className="contact-section" id="kontakt"><div className="container contact-layout"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> MÁTE PROJEKT?</div><h2>Začněme<br /><span>od začátku.</span></h2><p>Napište mi, co potřebujete vykopat, upravit nebo připravit. Ozvu se vám a domluvíme další krok.</p><div className="contact-method"><div className="contact-method-icon"><Phone size={19} /></div><div><span>NEJRYCHLEJŠÍ CESTA</span><strong>Doplňte telefonní číslo</strong><small>Po úpravě webu sem vložte své číslo.</small></div></div><div className="contact-method"><div className="contact-method-icon"><Clock3 size={19} /></div><div><span>DOMLUVA</span><strong>Podle možností a rozsahu zakázky</strong><small>Termín i postup probereme předem.</small></div></div></div>
      <div className="contact-form-wrap"><div className="form-heading"><div><span className="form-kicker">NEZÁVAZNÁ POPTÁVKA</span><h3>Co pro vás můžu udělat?</h3></div><span className="form-index">RT / 03</span></div><form onSubmit={submitForm}><div className="form-row"><label>Jméno<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jak vám mám říkat?" /></label><label>Telefon nebo e-mail<input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Kam se vám ozvat" /></label></div><label>O jakou práci jde?<select value={form.work} onChange={e => setForm({ ...form, work: e.target.value })}><option value="">Vyberte typ práce</option><option>Výkop základů</option><option>Přípojka / rýha</option><option>Terénní úpravy</option><option>Příprava pozemku</option><option>Jiná práce</option></select></label><label>Krátce popište zakázku<textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Kde se práce budou dělat, co potřebujete a kdy…" /></label><button className="button button-yellow form-submit" type="submit">Odeslat poptávku <ArrowRight size={17} /></button><p className="form-privacy">Odesláním se otevře váš e-mailový program s připravenou poptávkou. Nic se neukládá na webu.</p>{sent && <p className="form-feedback">Pokud se e-mail neotevřel, zkontrolujte nastavení poštovního programu a adresu příjemce v kódu webu.</p>}</form></div>
    </div></section>

    <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#domu"><span className="brand-mark"><span>RT</span><i /></span><span className="brand-text">ZEMNÍ PRÁCE <b>RT</b><small>POCTIVĚ OD ZÁKLADU</small></span></a><p>Nejdřív dobrá domluva.<br />Potom pořádná práce.</p><a className="footer-up" href="#domu">ZPĚT NAHORU <ArrowUpRightIcon /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Zemní práce RT</span><span>Výkopy · Terénní úpravy · Příprava pozemků</span><span>Web připravený pro další rozvoj</span></div></footer>
  </main>;
}
function ArrowUpRightIcon() { return <MoveUpRight size={16} strokeWidth={1.8} />; }
