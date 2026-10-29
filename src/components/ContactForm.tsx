'use client';

import Link from 'next/link';
import { useActionState, useEffect, useRef, useState } from 'react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { sendInquiry, type Field, type InquiryState } from '@/app/actions';
import { services } from '@/content/services';
import { site, telHref } from '@/content/site';

const initial: InquiryState = { status: 'idle' };

export default function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [state, action, pending] = useActionState(sendInquiry, initial);
  const [startedAt, setStartedAt] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => setStartedAt(String(Date.now())), []);
  useEffect(() => {
    if (state.status !== 'idle') statusRef.current?.focus();
  }, [state]);

  if (state.status === 'success') {
    return (
      <div className="form-done" ref={statusRef} tabIndex={-1} role="status">
        <CheckCircle2 size={36} aria-hidden="true" />
        <h3 className="h3">Poptávku jsme přijali</h3>
        <p>
          Ozveme se vám co nejdřív, obvykle během pracovního dne. Pokud to spěchá, zavolejte na{' '}
          <a href={telHref}>{site.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  const err = (f: Field) => state.errors?.[f];
  const val = (f: Field, fallback = '') => state.values?.[f] ?? fallback;
  const fieldProps = (f: Field) => ({
    id: `f-${f}`,
    name: f,
    'aria-invalid': err(f) ? true : undefined,
    'aria-describedby': err(f) ? `e-${f}` : undefined,
  });

  return (
    <form className="inquiry" action={action}>
      {state.status === 'error' && state.message && (
        <div className="form-alert" role="alert" ref={statusRef} tabIndex={-1}>
          {state.message}
        </div>
      )}

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Jméno a příjmení</label>
          <input {...fieldProps('name')} autoComplete="name" required minLength={2} maxLength={80} defaultValue={val('name')} />
          <FieldError f="name" msg={err('name')} />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Telefon</label>
          <input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="Číslo, na kterém vás zastihneme" defaultValue={val('phone')} />
          <FieldError f="phone" msg={err('phone')} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-email">
            E-mail <span className="field__opt">(nebo telefon)</span>
          </label>
          <input {...fieldProps('email')} type="email" autoComplete="email" maxLength={120} placeholder="jmeno@email.cz" defaultValue={val('email')} />
          <FieldError f="email" msg={err('email')} />
        </div>
        <div className="field">
          <label htmlFor="f-service">Co potřebujete</label>
          <select {...fieldProps('service')} defaultValue={val('service', defaultService)}>
            <option value="">Vyberte službu</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Jiné">Něco jiného</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-place">Místo stavby</label>
        <input {...fieldProps('place')} autoComplete="address-level2" maxLength={120} placeholder="Obec, případně ulice" defaultValue={val('place')} />
      </div>

      <div className="field">
        <label htmlFor="f-message">Popis práce</label>
        <textarea
          {...fieldProps('message')}
          rows={5}
          required
          minLength={10}
          maxLength={3000}
          placeholder="Co se má kopat nebo upravit, přibližné rozměry, přístup na pozemek a termín."
          defaultValue={val('message')}
        />
        <FieldError f="message" msg={err('message')} />
      </div>

      {/* Antispam: pole pro roboty (skryté) + čas otevření formuláře. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Nevyplňujte</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="t" value={startedAt} />

      <div className="field field--check">
        <input {...fieldProps('consent')} type="checkbox" required defaultChecked={val('consent') === 'on'} />
        <label htmlFor="f-consent">
          Souhlasím se zpracováním údajů za účelem vyřízení poptávky (
          <Link href="/ochrana-osobnich-udaju">podrobnosti</Link>).
        </label>
        <FieldError f="consent" msg={err('consent')} />
      </div>

      <button className="btn btn--primary btn--block" type="submit" disabled={pending}>
        {pending ? (
          <>
            <LoaderCircle className="spin" size={19} aria-hidden="true" /> Odesílám…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" /> Odeslat poptávku
          </>
        )}
      </button>
    </form>
  );
}

function FieldError({ f, msg }: { f: Field; msg?: string }) {
  return msg ? (
    <span className="field__error" id={`e-${f}`}>
      {msg}
    </span>
  ) : null;
}
