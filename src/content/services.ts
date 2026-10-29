export type Service = {
  slug: string;
  title: string;
  /** Krátký popis do přehledů (max. ~110 znaků). */
  short: string;
  /** <title> a meta description – unikátní pro každou stránku. */
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  includes: string[];
  notes: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  image: string;
  imageAlt: string;
  related: string[];
};

/**
 * Služby vychází ze seznamu na původním webu (sekce O firmě), sdružené do 8 oblastí.
 * Každá služba má vlastní stránku /sluzby/[slug] – kvůli dohledatelnosti
 * na konkrétní dotazy typu „výkop jímky Velké Meziříčí“.
 */
export const services: Service[] = [
  {
    slug: 'vykopove-prace',
    title: 'Výkopové práce',
    short: 'Rýhy, drenáže, zářezy do strání i výkopy při haváriích vody, plynu a kanalizace.',
    metaTitle: 'Výkopové práce Velké Meziříčí a okolí',
    metaDescription:
      'Výkopové práce se strojem JCB 3CX: rýhy pro drenáže, zářezy do strání, výkopy do hloubky až 6 m a havarijní výkopy. Velké Meziříčí a okolí.',
    intro: [
      'Kopeme vše od úzké rýhy pro drenáž po hluboký výkop pro šachtu. Traktorbagr JCB 3CX sáhne do hloubky až 6 metrů a díky sadě lžic od 30 do 150 cm zvolíme šířku výkopu přesně podle toho, co se do něj bude ukládat.',
      'Když praskne vodovod nebo se ucpe kanalizace, nečekáte týdny. Havarijní výkopy se snažíme řešit co nejdřív – zavolejte a domluvíme se.',
    ],
    includes: [
      'Zemní a výkopové práce',
      'Hloubení rýh pro drenáže',
      'Zářezy do strání',
      'Výkopy při havárii vody, plynu a kanalizace',
      'Skrývky zeminy',
      'Zásypy a hutnění po uložení potrubí',
    ],
    notes: [
      {
        title: 'Vytyčení sítí před výkopem',
        text: 'Před začátkem prací je potřeba mít vytyčené podzemní sítě (voda, plyn, elektřina, sdělovací kabely). Vyjádření správců sítí si vyřizuje investor – rádi poradíme, kde začít.',
      },
      {
        title: 'Co s vykopanou zeminou',
        text: 'Zeminu můžeme rozhrnout na pozemku, použít na zásyp nebo odvézt. Domluvíme se dopředu, ať s tím počítá i cena.',
      },
    ],
    faq: [
      {
        q: 'Jak hluboko dokážete kopat?',
        a: 'S JCB 3CX kopeme do hloubky až 6 metrů. U hlubších výkopů v nesoudržné zemině je potřeba řešit zajištění stěn – probereme to při obhlídce.',
      },
      {
        q: 'Jak široký výkop uděláte?',
        a: 'Máme lžíce šířky 30, 45, 50, 60 a 80 cm, třídicí lžíci 90 cm a svahové lžíce 150 cm. Šířku volíme podle toho, co se bude do výkopu ukládat.',
      },
    ],
    image: '/images/realizace-vykop.jpg',
    imageAlt: 'Lžíce traktorbagru JCB 3CX zabořená v hlinité zemině',
    related: ['inzenyrske-site-a-pripojky', 'zaklady-rodinnych-domu', 'doprava-a-manipulace'],
  },
  {
    slug: 'zaklady-rodinnych-domu',
    title: 'Základy rodinných domů',
    short: 'Výkopy základových pasů a desek, základy pro oplocení, tepelná čerpadla a rekuperace.',
    metaTitle: 'Výkopy základů rodinných domů – Velké Meziříčí',
    metaDescription:
      'Výkopy pro základy rodinných domů, skrývka ornice, základy pro oplocení, tepelná čerpadla a rekuperace. JCB 3CX, Velké Meziříčí a okolí.',
    intro: [
      'Dobrá stavba začíná přesným výkopem. Podle projektu sejmeme ornici, vykopeme základové pasy nebo připravíme plochu pod desku a zeminu uložíme tam, kde nebude překážet další práci.',
      'Kopeme i menší základy – pro plot, pergolu, venkovní jednotku tepelného čerpadla nebo rozvody rekuperace.',
    ],
    includes: [
      'Výkopy pro základy rodinných domů',
      'Skrývka a deponie ornice',
      'Hloubení základů pro oplocení',
      'Základy a výkopy pro tepelná čerpadla a rekuperace',
      'Výkopy sklepů',
      'Hutnění podloží',
    ],
    notes: [
      {
        title: 'Vytyčení stavby',
        text: 'Před výkopem musí být stavba vytyčená geodetem. Kopeme podle vytyčení a výkresu základů z projektové dokumentace.',
      },
      {
        title: 'Ornice zůstane na pozemku',
        text: 'Ornici skryjeme zvlášť a uložíme na hromadu, abyste ji po stavbě mohli použít na zahradu.',
      },
    ],
    faq: [
      {
        q: 'Potřebuji k výkopu základů projekt?',
        a: 'Ano. Kopeme podle výkresu základů a vytyčení stavby geodetem. Bez nich nevíme, kam a jak hluboko kopat.',
      },
      {
        q: 'Zvládnete i úzký pozemek?',
        a: 'Průjezdní šířka stroje je 2,5 metru. Pokud se k místu výkopu dostanete s osobním autem s přívěsem, většinou projedeme i my – přesně to ověříme při obhlídce.',
      },
    ],
    image: '/images/realizace-zaklady.jpg',
    imageAlt: 'Lžíce rýpadla nad rozkopanou zeminou na staveništi',
    related: ['vykopove-prace', 'inzenyrske-site-a-pripojky', 'terenni-upravy'],
  },
  {
    slug: 'inzenyrske-site-a-pripojky',
    title: 'Inženýrské sítě a přípojky',
    short: 'Výkopy přípojek vody, kanalizace, plynu a elektřiny včetně zásypu a úpravy povrchu.',
    metaTitle: 'Výkopy přípojek a inženýrských sítí – Velké Meziříčí',
    metaDescription:
      'Výkopy přípojek vody, kanalizace, plynu a elektřiny. Rýhy lžícemi 30–80 cm, zásyp a úprava povrchu. Zemní práce RT, Velké Meziříčí.',
    intro: [
      'Vykopeme rýhu pro vodovodní, kanalizační, plynovou i elektro přípojku. Šířku volíme podle potrubí nebo kabelu, aby se výkop nedělal zbytečně široký a nemuselo se pak tolik zasypávat.',
      'Po uložení a kontrole sítě rýhu zasypeme, zhutníme a povrch srovnáme.',
    ],
    includes: [
      'Výkopy přípojek veškerých inženýrských sítí',
      'Rýhy pro vodovod a kanalizaci',
      'Rýhy pro plyn a elektřinu',
      'Výkopy pro šachty',
      'Zásyp, hutnění a úprava povrchu',
      'Výkopy při haváriích sítí',
    ],
    notes: [
      {
        title: 'Spolupráce s instalatérem',
        text: 'Termín výkopu se vyplatí sladit s firmou, která bude potrubí pokládat. Výkop tak nestojí otevřený zbytečně dlouho.',
      },
      {
        title: 'Hloubka uložení',
        text: 'Vodovod se ukládá do nezámrzné hloubky, kanalizace se spádem. Hloubky a trasu bereme z projektu přípojky.',
      },
    ],
    faq: [
      {
        q: 'Zasypete výkop i po položení přípojky?',
        a: 'Ano. Po uložení a kontrole potrubí rýhu zasypeme, zhutníme a srovnáme povrch.',
      },
      {
        q: 'Řešíte i havárie vodovodu?',
        a: 'Ano, výkopy při haváriích vody, plynu i kanalizace děláme. Zavolejte a domluvíme co nejbližší termín.',
      },
    ],
    image: '/images/realizace-site.jpg',
    imageAlt: 'Traktorbagr JCB 3CX se zdviženým rýpadlem na staveništi',
    related: ['vykopove-prace', 'bazeny-jezirka-jimky', 'cesty-a-zpevnene-plochy'],
  },
  {
    slug: 'bazeny-jezirka-jimky',
    title: 'Bazény, jezírka a jímky',
    short: 'Výkopy pro bazény, jezírka a septiky, usazení jímek, čističek a retenčních nádrží.',
    metaTitle: 'Výkop bazénu, jezírka a jímky – Velké Meziříčí',
    metaDescription:
      'Výkopy pro bazény, zahradní jezírka a septiky. Výkop, zajištění a usazení jímek, čističek odpadních vod a retenčních nádrží. Velké Meziříčí a okolí.',
    intro: [
      'Vykopeme jámu pro bazén nebo zahradní jezírko přesně podle rozměrů, včetně odstupňovaných břehů. Výkopek odvezeme nebo jím vymodelujeme okolí.',
      'U jímek, septiků, domovních čističek a retenčních nádrží zajistíme výkop, usadíme nádrž pomocí stroje a po napojení obsypeme a zasypeme.',
    ],
    includes: [
      'Výkopy pro bazény a jezírka',
      'Výkopy pro septiky a sklepy',
      'Výkopy, zajištění a usazení jímek a čističek',
      'Retenční a akumulační nádrže',
      'Obsyp a zásyp nádrží',
      'Odvoz výkopku',
    ],
    notes: [
      {
        title: 'Rozměry nádrže a podklady',
        text: 'Pošlete nám typ a rozměry nádrže nebo bazénu a montážní návod výrobce. Podle nich připravíme výkop i podkladní vrstvu.',
      },
      {
        title: 'Přístup pro nádrž',
        text: 'Nádrž se k výkopu musí dostat – buď ji dovezeme a usadíme my, nebo počítáme s vykládkou z auta dodavatele.',
      },
    ],
    faq: [
      {
        q: 'Usadíte i plastovou jímku nebo čističku?',
        a: 'Ano. Vykopeme jámu, připravíme podklad, nádrž strojem usadíme a po napojení obsypeme a zasypeme podle pokynů výrobce.',
      },
      {
        q: 'Co se stane s vykopanou zeminou?',
        a: 'Můžeme ji použít na modelaci terénu kolem bazénu či jezírka, nebo ji odvezeme. Záleží na tom, co je pro vás výhodnější.',
      },
    ],
    image: '/images/realizace-stroj.jpg',
    imageAlt: 'Traktorbagr JCB 3CX zepředu s přední lopatou na rozkopaném terénu',
    related: ['vykopove-prace', 'terenni-upravy', 'doprava-a-manipulace'],
  },
  {
    slug: 'terenni-upravy',
    title: 'Terénní úpravy a zahrady',
    short: 'Modelace terénu a zahrad, hutnění, likvidace pařezů, meliorační příkopy a lesní úpravy.',
    metaTitle: 'Terénní úpravy a modelace zahrad – Velké Meziříčí',
    metaDescription:
      'Terénní úpravy, modelace zahrad, srovnání a hutnění pozemku, likvidace pařezů, meliorační příkopy a lesní úpravy. JCB 3CX, Velké Meziříčí.',
    intro: [
      'Srovnáme pozemek po stavbě, vymodelujeme svah, terasu nebo místo pro trávník. Svahovou naklápěcí lžící 150 cm dokážeme profil terénu vytáhnout přesně a čistě.',
      'Pracujeme i mimo zahrady: obnovujeme a zřizujeme cestní a porostní meliorační příkopy a děláme lesní úpravy.',
    ],
    includes: [
      'Úpravy a modelace terénu',
      'Terénní úpravy a modelace zahrad',
      'Hutnění terénu',
      'Likvidace pařezů',
      'Obnova a zřizování melioračních příkopů',
      'Lesní úpravy',
      'Dovoz a rozprostření ornice',
    ],
    notes: [
      {
        title: 'Představa stačí',
        text: 'Nepotřebujete projekt zahradního architekta. Stačí popsat, kde chcete rovinu, svah nebo terasu – na místě vymyslíme postup.',
      },
      {
        title: 'Ornice na finální vrstvu',
        text: 'Pod trávník se hodí ornice. Pokud jí na pozemku není dost, dovezeme ji.',
      },
    ],
    faq: [
      {
        q: 'Odstraníte i pařezy?',
        a: 'Ano, likvidace pařezů je součástí terénních úprav. Pařezy vytrhneme a podle dohody odvezeme.',
      },
      {
        q: 'Děláte i lesní a meliorační práce?',
        a: 'Ano. Obnovujeme a zřizujeme cestní a porostní meliorační příkopy a děláme lesní úpravy.',
      },
    ],
    image: '/images/realizace-teren.jpg',
    imageAlt: 'Rozkopaný terén a zvlněná krajina Vysočiny za soumraku',
    related: ['cesty-a-zpevnene-plochy', 'doprava-a-manipulace', 'zaklady-rodinnych-domu'],
  },
  {
    slug: 'cesty-a-zpevnene-plochy',
    title: 'Cesty a zpevněné plochy',
    short: 'Zpevněné i nezpevněné cesty, příjezdy, opravy krajnic a podklady komunikací.',
    metaTitle: 'Stavba a zpevňování cest, příjezdů a krajnic – Velké Meziříčí',
    metaDescription:
      'Zhotovení zpevněných i nezpevněných cest, úpravy a zpevňování cest, příjezdy, výstavba komunikací a opravy krajnic. Zemní práce RT, Vysočina.',
    intro: [
      'Postavíme příjezdovou cestu k domu, polní nebo lesní cestu, případně připravíme podklad pro zámkovou dlažbu či asfalt. Vytěžíme koryto, rozhrneme a zhutníme štěrkové vrstvy.',
      'Opravujeme také rozježděné a propadlé krajnice a zpevňujeme stávající cesty.',
    ],
    includes: [
      'Zhotovení zpevněných a nezpevněných cest',
      'Úpravy a zpevňování cest',
      'Výstavba nových komunikací',
      'Opravy krajnic',
      'Podklady pod dlažbu a parkovací stání',
      'Dovoz štěrku a recyklátu',
    ],
    notes: [
      {
        title: 'Podklad rozhoduje',
        text: 'Životnost cesty určují hlavně podkladní vrstvy. Skladbu a tloušťku volíme podle toho, co po cestě pojede.',
      },
      {
        title: 'Odvodnění',
        text: 'Cesta bez odvodnění se rychle rozbije. Počítáme se spádem a v případě potřeby s příkopem nebo drenáží.',
      },
    ],
    faq: [
      {
        q: 'Připravíte podklad pod zámkovou dlažbu?',
        a: 'Ano. Vytěžíme koryto, navezeme a zhutníme štěrkové vrstvy. Pokládku dlažby pak dělá dlaždič.',
      },
      {
        q: 'Opravujete i polní a lesní cesty?',
        a: 'Ano, děláme úpravy a zpevňování cest, výstavbu nových komunikací i opravy krajnic.',
      },
    ],
    image: '/images/technika-jcb.jpg',
    imageAlt: 'Traktorbagr JCB 3CX na rozježděném podloží',
    related: ['terenni-upravy', 'doprava-a-manipulace', 'inzenyrske-site-a-pripojky'],
  },
  {
    slug: 'doprava-a-manipulace',
    title: 'Doprava, nakládka a manipulace',
    short: 'Odvoz zeminy a sutě, dovoz písku, štěrku a ornice, třídění materiálu a paletové vidle.',
    metaTitle: 'Odvoz zeminy a sutě, dovoz štěrku a ornice – Velké Meziříčí',
    metaDescription:
      'Doprava a odvoz zeminy, sutě, písku a štěrku, dovoz ornice, kontejnerová doprava po domluvě, nakládání, rozhrnování, třídění a manipulace s paletami.',
    intro: [
      'Nakládáme, rozhrnujeme a převážíme. Odvezeme vykopanou zeminu i suť, dovezeme písek, štěrk nebo ornici. Po domluvě zajistíme i kontejnerovou dopravu.',
      'S paletizačními vidlemi o nosnosti 2 tuny složíme a přemístíme palety s materiálem, třídicí lžící oddělíme kameny od zeminy.',
    ],
    includes: [
      'Doprava a odvoz zeminy, sutě, písku a štěrku',
      'Dovoz ornice',
      'Kontejnerová doprava po domluvě',
      'Nakládání a rozhrnování',
      'Práce s paletovými vidlemi (do 2 t)',
      'Třídění materiálu třídicí lžící',
    ],
    notes: [
      {
        title: 'Třídění šetří peníze',
        text: 'Vytříděnou zeminu bez kamenů můžete znovu použít na zahradě a nemusíte kupovat novou.',
      },
      {
        title: 'Kam se suť vozí',
        text: 'Suť a přebytečnou zeminu odvážíme na místa k tomu určená. Druh a množství materiálu se promítne do ceny.',
      },
    ],
    faq: [
      {
        q: 'Zajistíte i kontejner?',
        a: 'Po domluvě ano – kontejnerovou dopravu domlouváme individuálně podle druhu a množství materiálu.',
      },
      {
        q: 'Složíte palety s materiálem?',
        a: 'Ano. Stroj má paletizační vidle s nosností 2 tuny, takže zvládne vyložit i přemístit palety s tvárnicemi či dlažbou.',
      },
    ],
    image: '/images/hero-jcb.jpg',
    imageAlt: 'Traktorbagr JCB 3CX s přední nakládací lopatou a zadním rýpadlem',
    related: ['vykopove-prace', 'demolice', 'terenni-upravy'],
  },
  {
    slug: 'demolice',
    title: 'Bourací a demoliční práce',
    short: 'Bourání menších staveb, zpevněných ploch a betonových konstrukcí včetně odvozu sutě.',
    metaTitle: 'Bourací a demoliční práce – Velké Meziříčí',
    metaDescription:
      'Bourání menších staveb, kůlen, plotů, zpevněných ploch a betonových konstrukcí. Nakládka a odvoz sutě, srovnání plochy. Velké Meziříčí a okolí.',
    intro: [
      'Zbouráme starou kůlnu, garáž, plot nebo betonovou plochu. Suť naložíme a odvezeme a místo srovnáme tak, aby se na něm dalo hned pokračovat.',
      'Rozsah demolice vždy nejdřív posoudíme na místě – u větších staveb může být potřeba ohlášení nebo povolení odstranění stavby.',
    ],
    includes: [
      'Bourací a demoliční práce',
      'Odstranění menších staveb a konstrukcí',
      'Bourání betonových ploch a základů',
      'Nakládka a odvoz sutě',
      'Srovnání plochy po demolici',
    ],
    notes: [
      {
        title: 'Povolení k odstranění',
        text: 'Odstranění některých staveb vyžaduje ohlášení stavebnímu úřadu. Pokud si nejste jistí, ověřte to dopředu na úřadě.',
      },
      {
        title: 'Odpojení přípojek',
        text: 'Před bouráním musí být odpojené elektřina, voda a plyn. Zajišťuje to vlastník u příslušných správců.',
      },
    ],
    faq: [
      {
        q: 'Zbouráte i betonové základy?',
        a: 'Menší betonové konstrukce a základy ano. Rozsah posoudíme na místě a navrhneme postup.',
      },
      {
        q: 'Odvezete po demolici suť?',
        a: 'Ano, suť naložíme a odvezeme a plochu srovnáme.',
      },
    ],
    image: '/images/realizace-stroj.jpg',
    imageAlt: 'Traktorbagr JCB 3CX zepředu na staveništi',
    related: ['doprava-a-manipulace', 'terenni-upravy', 'vykopove-prace'],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
