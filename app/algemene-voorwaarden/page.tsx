import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import { company, houseRules, openingHours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Algemene voorwaarden · Thehomegym",
  description:
    "De algemene voorwaarden van Thehomegym in Heinenoord: lidmaatschap, strippenkaarten, betaling, openingstijden, huisregels, aansprakelijkheid en privacy.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

type Article = { title: string; items: string[] };

const articles: Article[] = [
  {
    title: "Artikel 1 · Definities",
    items: [
      "Thehomegym: de vennootschap onder firma gevestigd aan de Reedijk 7j4 in Heinenoord, hierna te noemen de sportschool.",
      "Lid: iedere natuurlijke persoon die een lidmaatschap of strippenkaart afsluit bij Thehomegym.",
      "Lidmaatschap: een overeenkomst tussen het lid en Thehomegym voor toegang tot de faciliteiten en diensten van de sportschool.",
      "Strippenkaart: een vooraf betaalde kaart voor een vastgesteld aantal groepslessen (10 of 20).",
    ],
  },
  {
    title: "Artikel 2 · Lidmaatschap en strippenkaarten",
    items: [
      "Thehomegym biedt lidmaatschappen aan voor de duur van 6 of 12 maanden. Na afloop van deze periode wordt het lidmaatschap automatisch omgezet in een maandelijks opzegbaar abonnement met een opzegtermijn van één maand.",
      "Strippenkaarten zijn beschikbaar voor 10 of 20 groepslessen en zijn te betalen via pin of iDEAL. De geldigheidsduur staat vermeld bij het betreffende product.",
      "Lidmaatschap en strippenkaarten zijn strikt persoonlijk en niet overdraagbaar.",
    ],
  },
  {
    title: "Artikel 3 · Proeflessen",
    items: [
      "Ieder persoon mag eenmalig deelnemen aan een gratis proefles, onder voorwaarde dat dit niet eerder is gedaan.",
    ],
  },
  {
    title: "Artikel 4 · Betaling",
    items: [
      "Betaling van het lidmaatschap gaat via automatische incasso of pin.",
      "Bij te late betaling ontvangt het lid maximaal drie betalingsherinneringen. Blijft betaling uit, dan wordt een incassobureau ingeschakeld.",
      "Is de betaling twee weken of langer achterstallig, dan behoudt Thehomegym zich het recht voor het lid de toegang te weigeren.",
      "Voor te late betalingen wordt €5,- administratiekosten per herinnering in rekening gebracht.",
    ],
  },
  {
    title: "Artikel 6 · Gedrag en reglement",
    items: [
      "Leden houden zich aan het huishoudelijk reglement, dat zichtbaar hangt in de sportschool.",
      "Gebruik van de apparatuur is op eigen risico.",
      "Geen alcohol, drugs, doping of roken binnen het pand.",
      "Bij diefstal wordt aangifte gedaan. Lockers mogen maximaal 12 uur bezet blijven.",
      "Geen ontbloot bovenlichaam of blote voeten. Parkeren mag alleen op de aangewezen plekken.",
    ],
  },
  {
    title: "Artikel 7 · Aansprakelijkheid",
    items: [
      "Gebruik van de faciliteiten is volledig op eigen risico.",
      "Thehomegym is niet aansprakelijk voor letsel, verlies of diefstal van eigendommen.",
      "Schade door nalatig of opzettelijk handelen van het lid wordt op dat lid verhaald.",
      "Leden verklaren bij inschrijving dat zij geen levensbedreigende gezondheidsrisico's hebben.",
    ],
  },
  {
    title: "Artikel 8 · Privacy en beveiliging",
    items: [
      "Thehomegym verwerkt persoonsgegevens conform de geldende privacywetgeving.",
      "Er is cameratoezicht aanwezig, uitsluitend voor veiligheidsdoeleinden.",
      "Voor het maken van foto's of video's is toestemming vereist van de betrokken personen. Voor gebruik op sociale media is expliciete toestemming of blurring vereist.",
    ],
  },
  {
    title: "Artikel 9 · Opschorting en beëindiging",
    items: [
      "Een lidmaatschap kan tijdelijk gepauzeerd worden op medische gronden, met bewijs.",
      "Thehomegym behoudt zich het recht voor het lidmaatschap te beëindigen bij wangedrag of langdurige wanbetaling.",
    ],
  },
  {
    title: "Artikel 10 · Sluiting en overmacht",
    items: [
      "Bij overmacht of noodzakelijke sluiting, bijvoorbeeld door verbouwing of een calamiteit, mag Thehomegym tot maximaal 7 dagen sluiten zonder compensatie. Daarna volgt compensatie via bevriezing van het lidmaatschap.",
    ],
  },
  {
    title: "Artikel 11 · Wijzigingen",
    items: [
      "Thehomegym behoudt zich het recht voor deze algemene voorwaarden tussentijds te wijzigen.",
      "Wijzigingen worden gecommuniceerd via de communityhub en het ledenportaal.",
    ],
  },
];

export default function AlgemeneVoorwaarden() {
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
            Algemene voorwaarden
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Deze voorwaarden gelden voor iedereen die bij {company.name} traint,
            of dat nu met een lidmaatschap, een strippenkaart of een losse
            training is.
          </p>

          <div className="mt-12 space-y-10">
            {articles.slice(0, 4).map((article) => (
              <section key={article.title}>
                <h2 className="font-display text-[20px] leading-snug font-bold text-ink">
                  {article.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {article.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="font-display text-[20px] leading-snug font-bold text-ink">
                Artikel 5 · Openingstijden en toegang
              </h2>
              <dl className="mt-4 divide-y divide-line rounded-2xl border border-line bg-paper-deep px-5 py-2">
                {openingHours.map((day) => (
                  <div
                    key={day.label}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <dt className="text-[15px] text-muted">{day.label}</dt>
                    <dd className="text-[15px] font-medium text-ink tnum">
                      {day.open} - {day.close}
                    </dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-4 space-y-3">
                <li className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-muted">
                  Fitness is alleen toegankelijk voor personen van 18 jaar en
                  ouder. Voor personal training geldt een uitzondering, mits een
                  ouder of verzorger toestemming heeft gegeven.
                </li>
                <li className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-muted">
                  Gasten meenemen is niet toegestaan zonder toestemming of de
                  aankoop van een dagpas.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl bg-clay px-5 py-5">
                <h3 className="font-display text-[16px] font-bold text-brick-deep">
                  De belangrijkste huisregels
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {houseRules.map((rule) => (
                    <li
                      key={rule}
                      className="text-[15px] leading-relaxed text-brick-deep/85"
                    >
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {articles.slice(4).map((article) => (
              <section key={article.title}>
                <h2 className="font-display text-[20px] leading-snug font-bold text-ink">
                  {article.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {article.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-2xl border border-line bg-paper-deep p-6 sm:p-8">
            <h2 className="font-display text-[18px] font-bold text-ink">
              Contactgegevens
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {company.name}
              <br />
              {company.street},{" "}
              <span className="tnum">{company.postalCode}</span> {company.city}
              <br />
              <a
                href={`mailto:${company.email}`}
                className="underline-offset-4 hover:text-ink hover:underline"
              >
                {company.email}
              </a>
              <br />
              <span className="tnum">KVK {company.kvk}</span>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
