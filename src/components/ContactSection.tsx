import { Mail, MapPin, Phone } from 'lucide-react';
import { mailHref, site, telHref } from '@/content/site';
import ContactForm from './ContactForm';
import { FacebookIcon, InstagramIcon } from './Icons';

export default function ContactSection({
  title = 'Poptejte zemní práce',
  lead = 'Napište, co potřebujete, nebo rovnou zavolejte. Jednodušší věci domluvíme po telefonu, u složitějších se přijedeme podívat a připravíme cenovou kalkulaci.',
  defaultService,
  headingLevel = 'h2',
}: {
  title?: string;
  lead?: string;
  defaultService?: string;
  headingLevel?: 'h1' | 'h2';
}) {
  const H = headingLevel;
  return (
    <section className="contact" id="poptavka" aria-labelledby="poptavka-title">
      <div className="wrap contact__grid">
        <div className="contact__info">
          <H className="h2" id="poptavka-title">
            {title}
          </H>
          <p className="lead">{lead}</p>
          <a className="contact__phone" href={telHref}>
            <Phone size={26} aria-hidden="true" />
            <span>
              <small>Volejte</small>
              {site.phoneDisplay}
            </span>
          </a>
          <ul className="contact__lines">
            <li>
              <Mail size={18} aria-hidden="true" /> <a href={mailHref}>{site.email}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" /> {site.address.locality} a okolí
            </li>
          </ul>
          <div className="social-row social-row--labelled">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon /> Facebook
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> Instagram
            </a>
          </div>
        </div>
        <div className="contact__form">
          <ContactForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
