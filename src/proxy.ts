import { NextResponse, type NextRequest } from 'next/server';

/**
 * Přesměrování starých adres zemniprace-rt.cz/?page=… na nové URL (301).
 * Díky matcheru běží jen tehdy, když URL obsahuje parametr ?page – ostatní
 * stránky zůstávají čistě statické a proxy se jich vůbec nedotkne.
 */
const legacy: Record<string, string> = {
  domu: '/',
  'o firme': '/o-nas',
  reference: '/realizace',
  'nase technika': '/technika',
  'nase zakazky': '/realizace',
  kontakt: '/kontakt',
  jezirka_bazeny: '/sluzby/bazeny-jezirka-jimky',
  jimky: '/sluzby/bazeny-jezirka-jimky',
  lesni_upravy: '/sluzby/terenni-upravy',
  zaklady: '/sluzby/zaklady-rodinnych-domu',
  trideni_materialu: '/sluzby/doprava-a-manipulace',
  manipulace: '/sluzby/doprava-a-manipulace',
  inzenyrskesite: '/sluzby/inzenyrske-site-a-pripojky',
  benzinavm: '/realizace',
};

const normalize = (v: string) =>
  v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\+/g, ' ').trim().toLowerCase();

export function proxy(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page');
  const target = page ? (legacy[normalize(page)] ?? '/') : '/';
  return NextResponse.redirect(new URL(target, request.nextUrl.origin), 301);
}

export const config = {
  matcher: [{ source: '/', has: [{ type: 'query', key: 'page' }] }],
};
