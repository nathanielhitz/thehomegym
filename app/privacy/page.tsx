import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacyverklaring · Thehomegym",
  description:
    "Welke gegevens Thehomegym in Heinenoord verwerkt via de website en het lidmaatschap, waarom, hoe lang, en welke rechten je hebt.",
  alternates: { canonical: "/privacy" },
};

type Section = { title: string; paragraphs: string[]; items?: string[] };

const sections: Section[] = [
  {
    title: "Wie is verantwoordelijk",
    paragraphs: [
      `${company.name}, gevestigd aan de ${company.street}, ${company.postalCode} ${company.city} (KVK ${company.kvk}), is verantwoordelijk voor de verwerking van je persoonsgegevens zoals in deze verklaring beschreven. Vragen hierover stel je via ${company.email}.`,
    ],
  },
  {
    title: "Welke gegevens we via de website verwerken",
    paragraphs: [
      "Als je via het formulier een proefweek aanvraagt, verwerken we:",
    ],
    items: [
      "je naam;",
      "je telefoonnummer of e-mailadres, zodat we je kunnen terugbellen of mailen;",
      "wanneer je het liefst komt en hoe je ons gevonden hebt;",
      "een eventuele opmerking die je zelf meestuurt.",
    ],
  },
  {
    title: "Waarvoor en op welke grondslag",
    paragraphs: [
      "We gebruiken deze gegevens alleen om contact met je op te nemen over je proefweek of je vraag. De grondslag is de uitvoering van de overeenkomst die je met ons wilt aangaan, of je toestemming als je ons zelf benadert.",
      "Als je ons appt via WhatsApp of mailt, verwerkt WhatsApp (Meta) respectievelijk je e-mailprovider je bericht volgens hun eigen voorwaarden. Wij gebruiken de inhoud alleen om je te antwoorden.",
    ],
  },
  {
    title: "Gegevens van leden",
    paragraphs: [
      "Word je lid, dan verwerken we daarnaast je adres, geboortedatum, bankrekeningnummer (voor de automatische incasso) en de gegevens uit je Full Body Scan en trainingsschema. Die gebruiken we om je lidmaatschap uit te voeren en je te begeleiden. Je schema en voedingsgegevens staan in de workout-app en voedingsapp waarmee we werken; de leverancier daarvan verwerkt die gegevens in onze opdracht.",
    ],
  },
  {
    title: "Hoe lang we gegevens bewaren",
    paragraphs: [
      "Aanvragen voor een proefweek bewaren we maximaal zes maanden na het laatste contact. Gegevens van leden bewaren we zolang het lidmaatschap loopt en daarna zolang de wet dat vereist; voor de financiële administratie is dat zeven jaar.",
    ],
  },
  {
    title: "Met wie we gegevens delen",
    paragraphs: [
      "We verkopen je gegevens niet. We delen ze alleen met partijen die we nodig hebben om de dienst te leveren: onze hostingpartij (Vercel) voor de website, de e-maildienst waarmee formulierberichten bij ons aankomen, de leverancier van de workout- en voedingsapp, en onze bank voor de incasso. Met deze partijen hebben we afspraken over de beveiliging van je gegevens.",
    ],
  },
  {
    title: "Cookies en statistieken",
    paragraphs: [
      "De website plaatst zelf geen tracking- of advertentiecookies. Alleen als we websitestatistieken aanzetten (Google Analytics), vragen we daar eerst je toestemming voor via een melding op de site. Zonder toestemming worden er geen statistieken verzameld.",
    ],
  },
  {
    title: "Cameratoezicht",
    paragraphs: [
      "In de sportschool hangen camera's, uitsluitend voor de veiligheid van leden en eigendommen. Beelden bewaren we maximaal vier weken, tenzij ze nodig zijn voor een incident of aangifte.",
    ],
  },
  {
    title: "Beveiliging",
    paragraphs: [
      "De website loopt volledig over een beveiligde verbinding (https). Formuliergegevens worden niet op de website opgeslagen, maar direct doorgestuurd naar ons. Toegang tot ledengegevens hebben alleen de trainers die ze nodig hebben.",
    ],
  },
  {
    title: "Je rechten",
    paragraphs: [
      `Je mag je gegevens inzien, laten corrigeren of laten verwijderen, en je kunt bezwaar maken tegen een verwerking of je toestemming intrekken. Stuur daarvoor een mail naar ${company.email}; we reageren binnen een maand. Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.`,
    ],
  },
  {
    title: "Wijzigingen",
    paragraphs: [
      "We kunnen deze verklaring aanpassen, bijvoorbeeld als we een nieuwe dienst gaan gebruiken. De actuele versie staat altijd op deze pagina. Laatst bijgewerkt: oktober 2026.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main id="hoofdinhoud" className="pt-28 pb-24 sm:pt-32 md:pb-28">
        <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
          >
            <ArrowLeft size={16} aria-hidden />
            Terug naar de homepage
          </Link>

          <h1 className="mt-8 font-display text-[34px] leading-[1.08] font-extrabold text-ink sm:text-[44px]">
            Privacyverklaring
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Kort gezegd: we gebruiken je gegevens alleen om je te helpen met
            trainen en om contact met je te houden. Hieronder staat precies
            wat we verwerken en waarom.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-[20px] leading-snug font-bold text-ink">
                  {section.title}
                </h2>
                {section.paragraphs.map((text) => (
                  <p
                    key={text}
                    className="mt-4 text-[15px] leading-relaxed text-muted"
                  >
                    {text}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-3 space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-2xl border border-line bg-paper-deep p-6 sm:p-8">
            <h2 className="font-display text-[18px] font-bold text-ink">
              Contact over je gegevens
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {company.name}
              <br />
              {company.street},{" "}
              <span className="tnum">{company.postalCode}</span> {company.city}
              <br />
              <a
                href={`mailto:${company.email}?subject=Vraag%20over%20mijn%20gegevens`}
                className="underline-offset-4 hover:text-ink hover:underline"
              >
                {company.email}
              </a>
              <br />
              <span className="tnum">KVK {company.kvk}</span>
            </p>
            <p className="mt-4 text-[14px] text-muted">
              Zie ook de{" "}
              <Link
                href="/algemene-voorwaarden"
                className="underline underline-offset-4 hover:text-ink"
              >
                algemene voorwaarden
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
