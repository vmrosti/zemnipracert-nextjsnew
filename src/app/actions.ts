'use server';

import { headers } from 'next/headers';
import { site } from '@/content/site';
import { services } from '@/content/services';

export type Field = 'name' | 'phone' | 'email' | 'service' | 'place' | 'message' | 'consent';

export type InquiryState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const LIMITS = { name: 80, phone: 30, email: 120, place: 120, message: 3000 } as const;
const SERVICE_TITLES = new Set([...services.map((s) => s.title), 'Jiné']);

/* ---------- Rate limit ----------
 * Jednoduchý limit v paměti instance (5 odeslání / 10 min / IP).
 * Na serverless hostingu je limit per-instance; pro tvrdý globální limit
 * lze napojit Upstash Redis / Vercel KV – viz README. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/** Odstraní řídicí znaky (kromě nových řádků) a ořízne délku. */
function clean(value: FormDataEntryValue | null, max: number, multiline = false) {
  if (typeof value !== 'string') return '';
  const pattern = multiline ? /[\u0000-\u0009\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g;
  return value.replace(pattern, '').trim().slice(0, max);
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i;
const PHONE_RE = /^\+?[0-9 ()-]{9,20}$/;

export async function sendInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // 1) Antispam: honeypot + minimální doba vyplnění.
  const honeypot = clean(formData.get('website'), 200);
  const startedAt = Number(formData.get('t'));
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 2500;
  if (honeypot || tooFast) {
    // Botům tváříme úspěch, ať nezkouší dál.
    return { status: 'success' };
  }

  // 2) Rate limit podle IP.
  const h = await headers();
  const ip = (h.get('x-forwarded-for') ?? '').split(',')[0].trim() || h.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) {
    return {
      status: 'error',
      message: `Odeslali jste několik poptávek za sebou. Zkuste to za pár minut, nebo zavolejte na ${site.phoneDisplay}.`,
    };
  }

  // 3) Validace.
  const values = {
    name: clean(formData.get('name'), LIMITS.name),
    phone: clean(formData.get('phone'), LIMITS.phone),
    email: clean(formData.get('email'), LIMITS.email).toLowerCase(),
    service: clean(formData.get('service'), 80),
    place: clean(formData.get('place'), LIMITS.place),
    message: clean(formData.get('message'), LIMITS.message, true),
    consent: formData.get('consent') === 'on' ? 'on' : '',
  };

  const errors: Partial<Record<Field, string>> = {};
  if (values.name.length < 2) errors.name = 'Vyplňte jméno.';
  if (!values.phone && !values.email) errors.phone = 'Vyplňte telefon nebo e-mail, ať se vám můžeme ozvat.';
  if (values.phone && !PHONE_RE.test(values.phone)) errors.phone = 'Telefon zadejte ve tvaru 605 751 228 nebo +420 605 751 228.';
  if (values.email && !EMAIL_RE.test(values.email)) errors.email = 'E-mail zadejte ve tvaru jmeno@domena.cz.';
  if (values.service && !SERVICE_TITLES.has(values.service)) values.service = 'Jiné';
  if (values.message.length < 10) errors.message = 'Popište v pár slovech, co potřebujete udělat.';
  if (!values.consent) errors.consent = 'Bez souhlasu se zpracováním údajů vám nemůžeme odpovědět.';

  if (Object.keys(errors).length) {
    return { status: 'error', message: 'Zkontrolujte prosím označená pole.', errors, values };
  }

  // 4) Odeslání e-mailu přes Resend (https://resend.com) – bez závislostí, čistý fetch.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `Web ${site.name} <poptavky@zemniprace-rt.cz>`;

  const rows: [string, string][] = [
    ['Jméno', values.name],
    ['Telefon', values.phone || '—'],
    ['E-mail', values.email || '—'],
    ['Služba', values.service || '—'],
    ['Místo', values.place || '—'],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${values.message}\n`;
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">${rows
    .map(([k, v]) => `<tr><td style="color:#555">${k}</td><td><b>${escapeHtml(v)}</b></td></tr>`)
    .join('')}</table><p style="font-family:Arial,sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(values.message)}</p>`;

  if (!apiKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[poptávka – vývojový režim, e-mail se neodesílá]\n' + text);
      return { status: 'success' };
    }
    console.error('RESEND_API_KEY není nastavený – poptávku nelze odeslat.');
    return {
      status: 'error',
      message: `Formulář je dočasně mimo provoz. Zavolejte prosím na ${site.phoneDisplay} nebo napište na ${site.email}.`,
      values,
    };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        ...(values.email ? { reply_to: values.email } : {}),
        subject: `Poptávka z webu: ${values.service || 'zemní práce'} – ${values.name}`,
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  } catch (err) {
    console.error('Odeslání poptávky selhalo', err);
    return {
      status: 'error',
      message: `Poptávku se nepodařilo odeslat. Zavolejte prosím na ${site.phoneDisplay} nebo napište na ${site.email}.`,
      values,
    };
  }

  return { status: 'success' };
}
