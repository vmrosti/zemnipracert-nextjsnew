import Link from 'next/link';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><Link href="#top" className="brand footer-brand"><span className="brand-symbol"><span></span><span></span><span></span></span><span className="brand-wordmark">ZEMNÍ PRÁCE <b>RT.</b></span></Link><p>Od prvního výkopu<br/>po poslední srovnání.</p><a className="footer-up" href="#top" aria-label="Zpět nahoru"><ArrowUpRight/></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Zemní práce RT</span><span>Poctivá práce. Pevný základ.</span><a href="#kontakt">Kontakt <MoveUpRight size={13}/></a></div>
  </footer>;
}
