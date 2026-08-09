// Centrale contentlaag voor Thehomegym.
// Alles hieronder komt uit de crawl van thehomegym.nl (Sites/thehomegym.nl).
// Er zijn geen prijzen, cijfers, reviews of claims bijverzonnen.
// Open punten die nog bevestigd moeten worden staan in README.md.

export const company = {
  name: "Thehomegym",
  tagline: "Sportschool in Heinenoord",
  street: "Reedijk 7-J4",
  postalCode: "3274 KE",
  city: "Heinenoord",
  region: "Hoeksche Waard",
  kvk: "88385434",
  // Uit de contactpagina: dit nummer is uitsluitend via WhatsApp bereikbaar.
  whatsappNumber: "0616925931",
  whatsappDisplay: "06 16 92 59 31",
  email: "personaltraining@thehomegym.nl",
  foundedGym: 2022,
  trainingSince: 2016,
  minAge: 18,
  googleRating: "5,0",
  googleReviewsUrl:
    "https://www.google.com/search?q=Thehomegym+Heinenoord+reviews",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Reedijk%207%2C%203274%20KE%20Heinenoord%2C%20Nederland",
  instagram: "https://www.instagram.com/thehomegym.club/",
  facebook: "https://www.facebook.com/profile.php?id=61554752214466",
  tiktok: "https://www.tiktok.com/@thehomegym.club",
};

export const whatsappHref = (message: string) =>
  `https://wa.me/31${company.whatsappNumber.slice(1)}?text=${encodeURIComponent(message)}`;

export const mailtoHref = (subject: string, body = "") =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

/* ── Beeld ──────────────────────────────────────────────────────────────────
   De foto's van de huidige site worden hergebruikt via het Wix-CDN en door
   next/image opnieuw geschaald. Er is niets gedownload of nabewerkt.        */
export const wixImage = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_auto/${id}`;

export const images = {
  // Full-bleed hero: eigen zaal, donkere wand links waar de tekst overheen valt.
  hero: {
    src: wixImage("49ba32_854e20b2bf8c4da7b6797e8ecf019314~mv2.jpg", 2000, 1200),
    alt: "Trainer van Thehomegym legt een oefening uit bij het squatrek",
  },
  coaching: {
    src: wixImage("49ba32_1f46135f3dc94ac1a131ae00135368c1~mv2.jpg", 1400, 1000),
    alt: "Trainer begeleidt een lid tijdens een oefening op de bank",
  },
  benchCoaching: {
    src: wixImage("49ba32_4a5c63614dfb40e1b21785296e351196~mv2.jpg", 1200, 1400),
    alt: "Lid traint op een schuine bank terwijl de trainer meekijkt",
  },
  freeTraining: {
    src: wixImage("49ba32_9f86d6ff87b84f2d8910639b438d4fd5~mv2.jpg", 1200, 1400),
    alt: "Lid van Thehomegym traint zelfstandig met halters",
  },
  personalTraining: {
    src: wixImage("49ba32_9d2fa0e7cd79455da0a2809bce09bee0~mv2.jpg", 1000, 1200),
    alt: "Personal trainer begeleidt een oefening in de privézaal",
  },
  groupClass: {
    src: wixImage("49ba32_de18957fd00343979ffbc3872bf5a789~mv2.jpg", 1000, 1200),
    alt: "Groepsles boksen bij Thehomegym",
  },
  circuit: {
    src: wixImage("49ba32_dd9c5e0e6a724f509cdf9da23b986d35~mv2.jpg", 800, 1000),
    alt: "Deelnemers tijdens de circuittraining",
  },
  boxing: {
    src: wixImage("49ba32_78a37bc7456c476296c7c603547a7efe~mv2.jpg", 800, 1000),
    alt: "Bokstraining met handschoenen en pads",
  },
  bbb: {
    src: wixImage("49ba32_2abcaaa46a2744669065616116c729d0~mv2.png", 800, 1000),
    alt: "Krachtoefening tijdens de groepsles buik, billen en benen",
  },
  apps: {
    src: wixImage("49ba32_a9ef0dd4607746f8b5e77b15d20054ba~mv2.png", 1000, 640),
    alt: "De workout-app en voedingsapp van Thehomegym op een telefoon",
  },
  equipmentDetail: {
    src: wixImage("49ba32_9364d3ff49b34ec2890f0853c8b093da~mv2.jpg", 1200, 900),
    alt: "Sledge en gewichtsschijven op de kunstgrasstrook in de zaal",
  },
};

/* ── Keurmerken en aansluitingen (logo's van de huidige site) ────────────── */
export const certifications = [
  {
    name: "NL Actief",
    src: wixImage("49ba32_5326a090fea64156869c9bdba6600beb~mv2.png", 420, 210),
    width: 140,
  },
  {
    name: "ISSA Certified",
    src: wixImage("49ba32_c51fa32a11b14d258290b2421754d3f3~mv2.jpeg", 480, 270),
    width: 132,
  },
  {
    name: "Mobility Trainer",
    src: wixImage("49ba32_f57495b88cee425aacaf3d55954034c7~mv2.png", 470, 174),
    width: 140,
  },
  {
    name: "Boxercise Nederland",
    src: wixImage("49ba32_c544bdcba18b4fa68f9ddea53e41b2a3~mv2.png", 454, 190),
    width: 128,
  },
  {
    name: "Bedrijfsfitness Nederland",
    src: wixImage("49ba32_9e7b6a2ca6fa4f28a366a5b0b0685dbc~mv2.png", 360, 118),
    width: 132,
  },
];

/* ── Openingstijden (artikel 5.1 van de algemene voorwaarden) ────────────── */
export type OpeningDay = {
  label: string;
  short: string;
  /** ISO-weekdag: 1 = maandag, 7 = zondag */
  iso: number;
  open: string;
  close: string;
};

export const openingHours: OpeningDay[] = [
  { label: "Maandag", short: "ma", iso: 1, open: "09:00", close: "22:00" },
  { label: "Dinsdag", short: "di", iso: 2, open: "09:00", close: "22:00" },
  { label: "Woensdag", short: "wo", iso: 3, open: "09:00", close: "22:00" },
  { label: "Donderdag", short: "do", iso: 4, open: "09:00", close: "22:00" },
  { label: "Vrijdag", short: "vr", iso: 5, open: "09:00", close: "22:00" },
  { label: "Zaterdag", short: "za", iso: 6, open: "09:00", close: "21:00" },
  { label: "Zondag", short: "zo", iso: 7, open: "10:00", close: "20:00" },
];

/* ── Voordelen: waarom een kleine gym anders werkt ──────────────────────── */
export type Benefit = {
  id: string;
  title: string;
  body: string;
  icon: "rust" | "schema" | "scan" | "leeftijd" | "app";
};

export const benefits: Benefit[] = [
  {
    id: "rust",
    title: "Je hoeft nooit te wachten",
    body: "Kleinschalig opgezet, dus geen rij bij het squatrek en geen bezette bank op maandagavond. Je doet je oefening wanneer die op je schema staat.",
    icon: "rust",
  },
  {
    id: "schema",
    title: "Je krijgt een schema, ook als je vrij traint",
    body: "Je trainingsschema wordt afgestemd op jouw doel, niveau en de dagen die je kwijt kunt. Je weet elke training wat je gaat doen en waarom.",
    icon: "schema",
  },
  {
    id: "scan",
    title: "Gratis Full Body Scan",
    body: "Als lid meet je gratis je vetpercentage, spiermassa, BMI, visceraal vet, vochtpercentage, botmassa en je calorieverbruik in rust. Zo zie je meer dan alleen de weegschaal.",
    icon: "scan",
  },
  {
    id: "leeftijd",
    title: "Alleen 18 jaar en ouder",
    body: "Voor fitness geldt een leeftijdsgrens van 18 jaar. Dat houdt de sfeer rustig en volwassen, precies waar de meeste leden voor komen.",
    icon: "leeftijd",
  },
  {
    id: "app",
    title: "Schema en voeding in de app",
    body: "Je schema staat in de workout-app, je maaltijden houd je bij in de voedingsapp. Alles bij elkaar, zodat je je voortgang echt kunt volgen.",
    icon: "app",
  },
];

/* ── Aanbod ─────────────────────────────────────────────────────────────── */
export type Offer = {
  id: string;
  title: string;
  intro: string;
  points: string[];
  priceFrom: string;
  priceNote: string;
  image: { src: string; alt: string };
};

export const offers: Offer[] = [
  {
    id: "fitness",
    title: "Onbeperkt fitness",
    intro:
      "Zeven dagen per week vrij trainen met apparatuur van ATX, Rogue, Technogym, Lifemaxx, Concept 2 en Toorx. Je traint zelfstandig, maar de trainers kijken mee.",
    points: [
      "Zeven dagen per week open",
      "Persoonlijk trainingsschema",
      "Gratis Full Body Scans",
      "Toegang tot de training- en voedingsapp",
    ],
    priceFrom: "45",
    priceNote: "per maand",
    image: images.freeTraining,
  },
  {
    id: "personal-training",
    title: "Personal training",
    intro:
      "Eén op één of met z'n tweeën in de aparte privézaal. Een vaste trainer die je techniek corrigeert en je schema bijstuurt op wat jij nodig hebt.",
    points: [
      "Eén op één of duo",
      "Vaste trainer en privézaal",
      "Bodyscan en lifestyle coaching",
      "Ook geschikt bij herstel na een blessure",
    ],
    priceFrom: "45",
    priceNote: "per training",
    image: images.personalTraining,
  },
  {
    id: "groepslessen",
    title: "Groepslessen",
    intro:
      "Circuit, boksen en buik, billen en benen. Maximaal acht tot tien deelnemers per les, dus je krijgt nog steeds aandacht van de instructeur.",
    points: [
      "Maximaal 8 tot 10 deelnemers",
      "Voor beginners en gevorderden",
      "Ook los te doen met een strippenkaart",
      "Eerste proefles is gratis",
    ],
    priceFrom: "6,50",
    priceNote: "per les met een 20x strippenkaart",
    image: images.groupClass,
  },
];

/* ── Groepslesrooster ───────────────────────────────────────────────────── */
export type GroupClass = {
  id: string;
  name: string;
  day: string;
  time: string;
  maxParticipants: number;
  body: string;
  image: { src: string; alt: string };
};

export const groupClasses: GroupClass[] = [
  {
    id: "bbb",
    name: "Buik, billen en benen",
    day: "Maandag",
    time: "19:30 - 20:30",
    maxParticipants: 10,
    body: "Gerichte krachtoefeningen voor je buik, billen en benen. In zestig minuten werk je aan een sterkere core en een stevig onderlichaam. De oefeningen passen we aan op jouw niveau.",
    image: images.bbb,
  },
  {
    id: "circuit-wo",
    name: "Circuittraining",
    day: "Woensdag",
    time: "19:30 - 20:30",
    maxParticipants: 10,
    body: "Verschillende oefeningen in hoog tempo met korte rustpauzes. Je werkt tegelijk aan uithoudingsvermogen, spiermassa en kracht. Geschikt voor beginners en gevorderden.",
    image: images.circuit,
  },
  {
    id: "circuit-vr",
    name: "Circuittraining",
    day: "Vrijdag",
    time: "19:00 - 20:00",
    maxParticipants: 10,
    body: "Dezelfde opzet als de woensdagles, met een andere ronde oefeningen. Het niveau schaalt mee met wie er staat.",
    image: images.circuit,
  },
  {
    id: "boksen",
    name: "Boksen (Boxercise)",
    day: "Zaterdag",
    time: "10:30 - 11:30",
    maxParticipants: 8,
    body: "Bokstechnieken gecombineerd met cardio en kracht. Goed voor je coördinatie en je scherpte, en een prima uitlaatklep. Geschikt voor elk niveau.",
    image: images.boxing,
  },
];

/* ── Prijzen ────────────────────────────────────────────────────────────── */
export type Membership = {
  id: string;
  name: string;
  duration: string;
  price: string;
  highlight?: boolean;
  includesClasses: boolean;
};

export const memberships: Membership[] = [
  {
    id: "12m-fitness",
    name: "Onbeperkt fitness",
    duration: "12 maanden",
    price: "45",
    highlight: true,
    includesClasses: false,
  },
  {
    id: "6m-fitness",
    name: "Onbeperkt fitness",
    duration: "6 maanden",
    price: "55",
    includesClasses: false,
  },
  {
    id: "12m-fitness-groep",
    name: "Fitness en groepslessen",
    duration: "12 maanden",
    price: "50",
    includesClasses: true,
  },
  {
    id: "6m-fitness-groep",
    name: "Fitness en groepslessen",
    duration: "6 maanden",
    price: "60",
    includesClasses: true,
  },
];

export const membershipIncludes = [
  "Zeven dagen per week sporten",
  "Persoonlijk trainingsschema",
  "Gratis Full Body Scans",
  "Workout-app en voedingsapp",
  "Professionele begeleiding",
];

// Inschrijfgeld is normaal 15 euro. De site voert op dit moment een actie
// waarbij dat vervalt. Zie README.md: bevestigen of de actie nog loopt.
export const registrationFee = {
  standard: "15",
  actionRunning: true,
  actionLabel: "Nu geen inschrijfgeld",
};

export const stripCards = [
  {
    id: "10x",
    name: "10x strippenkaart",
    perClass: "7,50",
    total: "75",
    note: "Eenmalig, geen abonnement",
  },
  {
    id: "20x",
    name: "20x strippenkaart",
    perClass: "6,50",
    total: "130",
    note: "Meest gekozen",
    highlight: true,
  },
  {
    id: "los",
    name: "Losse les",
    perClass: "10",
    total: null,
    note: "Proefles is gratis",
  },
];

export const trainingRates = [
  {
    id: "pt",
    name: "Personal training",
    price: "45",
    unit: "per training",
    note: "Eén op één in de privézaal, met een vaste trainer",
  },
  {
    id: "duo",
    name: "Duo training",
    price: "35",
    unit: "per training p.p.",
    note: "Samen met een vriend, partner of collega",
  },
  {
    id: "coaching",
    name: "Lifestyle coaching",
    price: null,
    unit: "eerste consult gratis",
    note: "Begeleiding op voeding, herstel en dagelijkse routine",
  },
];

/* ── Hoe het werkt ──────────────────────────────────────────────────────── */
export const steps = [
  {
    id: "aanmelden",
    title: "Vraag je proefweek aan",
    body: "App ons of vul het formulier in. Je laat weten wanneer je langs wilt komen, verder hoef je nog niets te beslissen.",
  },
  {
    id: "kennismaken",
    title: "Kennismaken en rondkijken",
    body: "Je krijgt een rondleiding, we bespreken je doel en je maakt een Full Body Scan. Zo weten we allebei waar je start.",
  },
  {
    id: "trainen",
    title: "Een week gratis trainen",
    body: "Je traint een week mee met een schema dat op jou is afgestemd. Bevalt het, dan kies je daarna pas een lidmaatschap.",
  },
];

/* ── Team ───────────────────────────────────────────────────────────────── */
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  image: { src: string; alt: string };
};

export const team: TeamMember[] = [
  {
    id: "rick",
    name: "Rick",
    role: "Personal trainer en groepslesinstructeur",
    bio: "Rick werkte in meerdere sportscholen voordat hij Thehomegym opzette. Naast trainen houdt hij zich bezig met voeding en leefstijl, waarvoor hij is opgeleid tot vakexpert voeding en voorlichting.",
    certifications: [
      "ISSA Certified Personal Trainer",
      "ISSA Certified Strength & Conditioning Trainer",
      "Vakexpert voeding en voorlichting",
      "Fitvak A",
      "Mobility Trainer 1, 2 en 3",
      "Boxercise Advanced Instructeur",
    ],
    image: {
      src: wixImage("49ba32_c21211e107504415b59adc665aa87302~mv2.jpg", 800, 1000),
      alt: "Rick, personal trainer bij Thehomegym",
    },
  },
  {
    id: "stef",
    name: "Stef",
    role: "Personal trainer en groepslesinstructeur",
    bio: "Stef groeide op met krachttraining en werkte zes jaar bij het Korps Mariniers, waar hij trainde in uiteenlopende klimaten. Hij vindt vooral dat sport een toevoeging moet zijn aan je dag, en functioneel voor het dagelijks leven.",
    certifications: [
      "ISSA Certified Personal Trainer",
      "ISSA Nutritionist",
      "Mobility Trainer 1, 2 en 3",
      "Boxercise Advanced Instructeur",
    ],
    image: {
      src: wixImage("49ba32_d8e22b14f753472cb11cb45861fa9cb4~mv2.jpg", 800, 1000),
      alt: "Stef, personal trainer bij Thehomegym",
    },
  },
  {
    id: "mathijs",
    name: "Mathijs",
    role: "Trainer",
    bio: "Mathijs komt uit Rotterdam en sport al van jongs af aan. Hij viel zelf flink af door regelmatig te trainen en bewuster te eten, en gebruikt die ervaring om anderen op weg te helpen. Loop je hem tegen het lijf, spreek hem gerust aan.",
    certifications: [],
    image: {
      src: wixImage("49ba32_acf4dc3645f74fb4918fcf1eacaaa275~mv2.jpg", 800, 1000),
      alt: "Mathijs, trainer bij Thehomegym",
    },
  },
];

/* ── Reviews (letterlijk overgenomen van de huidige site) ────────────────── */
export const reviews = [
  {
    name: "Tatiana",
    text: "Groot fan van The Home Gym in de Hoeksche Waard! Gemotiveerde instructeurs die met je meedenken en je persoonlijke aandacht geven! Goeie tips en letten ook goed op je techniek wat erg belangrijk is.",
  },
  {
    name: "Marjolein",
    text: "Fijne, kleine sportschool met 100% persoonlijke aandacht en begeleiding. De personal trainers hebben voor iedereen een passend aanbod en motiverende opdrachten.",
  },
  {
    name: "Jermo",
    text: "Hele goeie gym! Ze zijn erg gedreven en laten je tot het uiterste gaan. Ze weten echt waar ze het over hebben en hebben veel kennis van voeding, oefeningen en het lichaam.",
  },
  {
    name: "Bjorn",
    text: "Wat een fijne begeleiding! Als je twijfels hebt, gewoon doen! Toffe trainers, persoonlijk advies en een mooie professionele ruimte. Tot snel!",
  },
  {
    name: "Daan",
    text: "Goede begeleiding, variërende lessen en ze maken een passend programma waardoor jij je doelen gaat halen!",
  },
  {
    name: "Camiel",
    text: "Bijzonder leuk en gemotiveerd team! Je wordt goed begeleid op een leuke manier. Je kan er goed terecht om je persoonlijke sport-doelstellingen te behalen. Zeker een aanrader dus.",
  },
];

/* ── FAQ (antwoorden komen uit de algemene voorwaarden en de sitecontent) ── */
export const faqs = [
  {
    q: "Kan ik eerst een keer komen kijken?",
    a: "Ja. Je kunt een gratis proefweek aanvragen of langskomen voor een rondleiding. Je zit daarmee nergens aan vast. Een gratis proefles kun je eenmalig doen.",
  },
  {
    q: "Hoe zeg ik mijn lidmaatschap op?",
    a: "Een lidmaatschap loopt 6 of 12 maanden. Daarna gaat het automatisch over in een maandelijks opzegbaar abonnement met een opzegtermijn van één maand.",
  },
  {
    q: "Ik heb nog nooit in een sportschool gestaan. Kan ik dan meedoen?",
    a: "Zeker. Je begint met een kennismaking en een Full Body Scan, daarna krijg je een schema dat past bij je niveau. De trainers lopen rond en kijken mee op je techniek.",
  },
  {
    q: "Vanaf welke leeftijd kan ik lid worden?",
    a: "Fitness is toegankelijk vanaf 18 jaar. Voor personal training kan daar een uitzondering op gemaakt worden, mits een ouder of verzorger toestemming geeft.",
  },
  {
    q: "Hoe betaal ik?",
    a: "Het lidmaatschap gaat via automatische incasso of pin. Strippenkaarten voor de groepslessen reken je af met pin of iDEAL. Personal training kun je in één, twee of drie termijnen betalen.",
  },
  {
    q: "Moet ik meteen een abonnement nemen voor de groepslessen?",
    a: "Nee. Naast de abonnementen werken we met strippenkaarten van 10 of 20 lessen. Kom je een week niet, dan betaal je ook niets.",
  },
  {
    q: "Kan ik mijn lidmaatschap pauzeren?",
    a: "Op medische gronden kan het lidmaatschap tijdelijk gepauzeerd worden, met een bewijsstuk erbij.",
  },
  {
    q: "Kan ik voor de deur parkeren?",
    a: "Er is parkeergelegenheid bij het pand aan de Reedijk. Parkeren mag op de aangewezen plekken.",
  },
];

/* ── Huisregels, kort samengevat ────────────────────────────────────────── */
export const houseRules = [
  "Handdoekgebruik is verplicht",
  "Schone sportschoenen en gepaste sportkleding",
  "Muziek alleen via oortjes of koptelefoon",
  "Meld defecten en onveilige situaties direct",
];

export const equipmentBrands = [
  "ATX",
  "Rogue",
  "Technogym",
  "Lifemaxx",
  "Concept 2",
  "Toorx",
];

// Absolute ankers, zodat het menu ook werkt vanaf /algemene-voorwaarden.
export const navLinks = [
  { href: "/#aanbod", label: "Aanbod" },
  { href: "/#rooster", label: "Rooster" },
  { href: "/#tarieven", label: "Tarieven" },
  { href: "/#team", label: "Over ons" },
  { href: "/#contact", label: "Contact" },
];

export const ctaMessages = {
  proefweek:
    "Hoi! Ik wil graag de gratis proefweek bij Thehomegym aanvragen. Wanneer kan ik langskomen?",
  vraag: "Hoi! Ik heb een vraag over trainen bij Thehomegym.",
  personalTraining:
    "Hoi! Ik ben benieuwd naar personal training bij Thehomegym en wil graag een gratis intake inplannen.",
  groepsles:
    "Hoi! Ik wil graag een gratis proefles meedoen met een van de groepslessen.",
};
