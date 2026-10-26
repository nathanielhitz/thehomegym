import type { Metadata } from "next";
import { Archivo, Instrument_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import { company } from "@/lib/content";
import { gymSchema, websiteSchema } from "@/lib/schema";

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
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

// GA4 laadt alleen als NEXT_PUBLIC_GA_ID gezet is. Zonder die variabele
// vallen alle events uit lib/track.ts terug op de browserconsole.
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${archivo.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Zet zo vroeg mogelijk de class "js" op <html>. Alleen dan start de
            scroll-reveal verborgen (zie globals.css). Zonder JS, of bij
            prefers-reduced-motion, blijft alles direct zichtbaar. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js')}",
          }}
        />
      </head>
      <body>

        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-lg focus:bg-brick focus:px-4 focus:py-2 focus:text-paper"
        >
          Ga naar hoofdinhoud
        </a>

        {/* Bedrijf en site als entiteit op elke pagina. Het FAQ-schema staat
            op de homepage, waar de vragen ook zichtbaar zijn. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {children}
        <Footer />
        <MobileStickyCta />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
