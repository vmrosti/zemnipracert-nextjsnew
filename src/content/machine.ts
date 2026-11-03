/** Parametry stroje dle původního webu zemniprace-rt.cz (sekce Naše technika). */
export const machine = {
  name: 'JCB 3CX',
  type: 'Traktorbagr (rýpadlo-nakladač)',
  specs: [
    { label: 'Hmotnost', value: '8 t' },
    { label: 'Hloubka výkopu', value: 'až 6 m' },
    { label: 'Průjezdní šířka', value: '2,5 m' },
    { label: 'Výkon motoru', value: '68 kW' },
    { label: 'Kroutící moment', value: '408 Nm' },
    { label: 'Paletizační vidle', value: 'nosnost 2 t' },
  ],
  /** Šířky lžic v centimetrech – vykreslují se i v měřítku. */
  buckets: [
    { width: 30, label: 'Lžíce 30 cm', use: 'Kabely, drenáže a úzké rýhy' },
    { width: 45, label: 'Lžíce 45 cm', use: 'Vodovodní a elektro přípojky' },
    { width: 50, label: 'Lžíce 50 cm', use: 'Kanalizační přípojky' },
    { width: 60, label: 'Lžíce 60 cm', use: 'Základové pasy, plyn, voda' },
    { width: 80, label: 'Lžíce 80 cm', use: 'Širší výkopy, šachty a jímky' },
    { width: 90, label: 'Třídicí lžíce 90 cm', use: 'Třídění kamene a zeminy' },
    { width: 150, label: 'Svahová lžíce 150 cm', use: 'Svahy, příkopy, srovnání ploch' },
    { width: 150, label: 'Svahová naklápěcí lžíce 150 cm', use: 'Přesné svahování a profilování' },
  ],
  uses:
    'Stroj je vhodný k výkopu inženýrských sítí (kanalizace, voda, plyn, elektřina), nakládání a rozhrnování materiálu, terénním úpravám a základům rodinných domů.',
} as const;
