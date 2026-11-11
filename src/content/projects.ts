export type Project = {
  slug: string;
  title: string;
  text: string;
  /** Kde je zakázka (volitelné) – zobrazí se pod názvem. */
  place?: string;
  /** Slug služby, na kterou zakázka odkazuje (viz src/content/services.ts). */
  service: string;
};

/**
 * ZAKÁZKY NA WEBU
 * -----------------------------------------------------------------------------
 * Fotka každé zakázky se hledá v:   public/images/zakazky/<slug>.jpg
 * (např. slug 'jezirko-netin' → public/images/zakazky/jezirko-netin.jpg)
 *
 * Dokud fotka neexistuje, zobrazí se náhradní ilustrační obrázek – web se nerozbije.
 * Přidání zakázky = přidat položku sem + nahrát fotku. Smazání = odebrat položku.
 * Pořadí v poli = pořadí na webu.
 */
export const projects: Project[] = [
  {
    slug: 'jezirka-a-bazeny',
    title: 'Jezírka a bazény',
    text: 'Výkopy pro zahradní jezírka a bazény včetně modelace břehů a okolí.',
    service: 'bazeny-jezirka-jimky',
  },
  {
    slug: 'jimky-a-retencni-nadrze',
    title: 'Jímky a retenční nádrže',
    text: 'Výkop, usazení a zasypání jímek, čističek a retenčních nádrží.',
    service: 'bazeny-jezirka-jimky',
  },
  {
    slug: 'zaklady-rodinnych-domu',
    title: 'Základy rodinných domů',
    text: 'Skrývka ornice a výkopy základových pasů podle projektu a vytyčení.',
    service: 'zaklady-rodinnych-domu',
  },
  {
    slug: 'vykopy-inzenyrskych-siti',
    title: 'Výkopy inženýrských sítí',
    text: 'Rýhy pro vodu, kanalizaci, plyn a elektřinu se zásypem a úpravou povrchu.',
    service: 'inzenyrske-site-a-pripojky',
  },
  {
    slug: 'terenni-a-lesni-upravy',
    title: 'Terénní a lesní úpravy',
    text: 'Srovnání pozemků, modelace zahrad, lesní cesty a meliorační příkopy.',
    service: 'terenni-upravy',
  },
  {
    slug: 'benzina-velke-mezirici',
    title: 'Benzina Velké Meziříčí',
    text: 'Zemní práce pro čerpací stanici Benzina.',
    place: 'Velké Meziříčí',
    service: 'vykopove-prace',
  },
];

export const projectPhoto = (slug: string) => `/images/zakazky/${slug}.jpg`;

/** Náhradní ilustrace, dokud nejsou nahrané skutečné fotky. */
const fallbacks = [
  '/images/realizace-stroj.jpg',
  '/images/realizace-site.jpg',
  '/images/realizace-zaklady.jpg',
  '/images/realizace-vykop.jpg',
  '/images/realizace-teren.jpg',
  '/images/technika-jcb.jpg',
];
export const projectFallback = (index: number) => fallbacks[index % fallbacks.length];
