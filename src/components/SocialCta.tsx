import { site } from '@/content/site';
import { FacebookIcon, InstagramIcon } from './Icons';

export default function SocialCta() {
  return (
    <div className="social-cta">
      <div>
        <h2 className="h3">Fotky z aktuálních staveb</h2>
        <p>Průběžně je přidáváme na sociální sítě. Sledujte, na čem zrovna pracujeme.</p>
      </div>
      <div className="social-cta__links">
        <a className="btn btn--ghost" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={19} /> Instagram {site.social.instagramHandle}
        </a>
        <a className="btn btn--ghost" href={site.social.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon size={19} /> Facebook
        </a>
      </div>
    </div>
  );
}
