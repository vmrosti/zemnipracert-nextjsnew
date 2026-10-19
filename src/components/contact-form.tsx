'use client';
import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka zemních prací – ${name}`);
    const body = encodeURIComponent(`Jméno: ${name}\nTelefon: ${phone}\n\nPoptávka:\n${message}`);
    window.location.href = `mailto:info@zemniprace-rt.cz?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Jméno a příjmení<input required value={name} onChange={e => setName(e.target.value)} placeholder="Jak vám máme říkat?" /></label><label>Telefon<input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+420 …" /></label></div>
    <label>Co potřebujete udělat?<textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Popište stručně váš projekt, místo a termín…" rows={4}/></label>
    <button className="button-v2 button-black form-submit" type="submit">Odeslat poptávku <ArrowUpRight size={18}/></button>
    {sent && <p className="form-note"><CheckCircle2 size={16}/> Otevírám váš e-mailový program s připravenou poptávkou.</p>}
    <p className="privacy-note">Odesláním se otevře váš e-mailový program. Formulář data nikam neukládá.</p>
  </form>;
}
