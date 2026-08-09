import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import { company, faqs, openingHours } from "@/lib/content";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thehomegym.nl"),
  title: "Thehomegym · Sportschool in Heinenoord, Hoeksche Waard",
  description:
    "Kleinschalige sportschool in Heinenoord voor 18-plus. Onbeperkt fitness vanaf 45 euro per maand, personal training en groepslessen. Vraag een gratis proefweek aan.",
  keywords: [
    "sportschool Heinenoord",
    "fitness Hoeksche Waard",
    "personal training Heinenoord",
    "groepslessen Hoeksche Waard",
  ],
  openGraph: {
    title: "Thehomegym · Sportschool in Heinenoord",
    description:
      "Trainen zonder de drukte van een massagym. Kleinschalige sportschool voor 18-plus met persoonlijke begeleiding, een schema op maat en een gratis proefweek.",
    siteName: company.name,
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const dayNames: Record<number, string> = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const gymSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: company.name,
  description:
    "Kleinschalige sportschool in Heinenoord met onbeperkt fitness, personal training en groepslessen. Toegankelijk vanaf 18 jaar.",
  url: "https://www.thehomegym.nl",
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
  areaServed: company.region,
  priceRange: "€€",
  foundingDate: String(company.foundedGym),
  sameAs: [company.instagram, company.facebook, company.tiktok],
  openingHoursSpecification: openingHours.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${dayNames[day.iso]}`,
    opens: day.open,
    closes: day.close,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${archivo.variable} ${instrumentSans.variable}`}
    >
      <body>
        <noscript>
          {/* Zonder JavaScript geen scroll-reveal, maar wel alle content. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>

        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-brick focus:px-4 focus:py-2 focus:text-paper"
        >
          Ga naar hoofdinhoud
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {children}
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
