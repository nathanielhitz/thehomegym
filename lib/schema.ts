import {
  company,
  faqs,
  memberships,
  openingHours,
  team,
  trainingRates,
} from "@/lib/content";

/* Gestructureerde data (schema.org, JSON-LD). Alles komt uit lib/content.ts,
   zodat tekst en schema nooit uit elkaar lopen. Google eist dat wat in het
   schema staat ook zichtbaar op de pagina staat; daarom staat het FAQ-schema
   alleen op de homepage (app/page.tsx) en niet in de layout. */

const base = "https://www.thehomegym.nl";
export const organisationId = `${base}/#organisatie`;

const dayNames: Record<number, string> = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const membershipOffer = (plan: (typeof memberships)[number]) => ({
  "@type": "Offer",
  name: `${plan.name}, ${plan.duration}`,
  category: "Lidmaatschap",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: plan.price,
    priceCurrency: "EUR",
    unitText: "per maand",
    billingDuration: plan.duration === "12 maanden" ? 12 : 6,
    billingIncrement: 1,
    unitCode: "MON",
  },
  availability: "https://schema.org/InStock",
  url: `${base}/#tarieven`,
});

const trainingOffer = (rate: (typeof trainingRates)[number]) =>
  rate.price
    ? {
        "@type": "Offer",
        name: rate.name,
        category: "Personal training",
        description: rate.note,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: rate.price,
          priceCurrency: "EUR",
        },
        url: `${base}/#aanbod`,
      }
    : null;

export const gymSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "@id": organisationId,
  name: company.name,
  description:
    "Kleinschalige sportschool in Heinenoord met onbeperkt fitness, personal training en groepslessen. Toegankelijk vanaf 18 jaar.",
  url: base,
  image: `${base}/opengraph-image`,
  logo: `${base}/apple-icon`,
  email: company.email,
  telephone: `+31${company.whatsappNumber.slice(1)}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: company.postalCode,
    addressLocality: company.city,
    addressRegion: "Zuid-Holland",
    addressCountry: "NL",
  },
  // Reedijk 7, Heinenoord (OpenStreetMap). Vervangen door de exacte positie
  // uit Google Business Profile als die bekend is.
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.8147,
    longitude: 4.4985,
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Reedijk+7,+3274+KE+Heinenoord",
  areaServed: [
    { "@type": "AdministrativeArea", name: company.region },
    { "@type": "City", name: company.city },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Automatische incasso, pin, iDEAL",
  foundingDate: String(company.foundedGym),
  sameAs: [company.instagram, company.facebook, company.tiktok],
  openingHoursSpecification: openingHours.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${dayNames[day.iso]}`,
    opens: day.open,
    closes: day.close,
  })),
  makesOffer: [
    ...memberships.map(membershipOffer),
    ...trainingRates.map(trainingOffer).filter(Boolean),
  ],
  employee: team.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    image: `${base}${member.image.src}`,
    worksFor: { "@id": organisationId },
    ...(member.certifications.length
      ? {
          hasCredential: member.certifications.map((name) => ({
            "@type": "EducationalOccupationalCredential",
            name,
          })),
        }
      : {}),
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${base}/#website`,
  url: base,
  name: company.name,
  inLanguage: "nl-NL",
  publisher: { "@id": organisationId },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
