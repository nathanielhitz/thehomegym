import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UsersThree } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import PageFaq from "@/components/PageFaq";
import PageCta from "@/components/PageCta";
import PointList from "@/components/PointList";
import ClassCta from "@/components/ClassCta";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import {
  ctaMessages,
  groepslesFaqs,
  groupClasses,
  images,
  memberships,
  stripCards,
  whatsappHref,
} from "@/lib/content";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Groepslessen in Heinenoord: boksen, circuit en BBB · Thehomegym",
  description:
    "Groepslessen in Heinenoord met maximaal tien deelnemers: circuittraining, boksen (Boxercise) en buik, billen en benen. Eerste les gratis, vanaf 6,50 per les.",
  alternates: { canonical: "/groepslessen" },
  openGraph: {
    title: "Groepslessen in Heinenoord · Thehomegym",
    description:
      "Kleine groepslessen in Heinenoord: boksen, circuittraining en buik, billen en benen. Eerste les gratis.",
  },
};

// Lesbeschrijvingen voor deze pagina, uitgebreider dan op het rooster.
const classDetails: Record<string, { forWho: string; expect: string[] }> = {
  bbb: {
    forWho: "Voor wie gericht aan core, billen en benen wil werken, van beginner tot gevorderd.",
    expect: [
      "Squats, lunges, hip thrusts en core-oefeningen met en zonder gewicht",
      "Zestig minuten, in rondes met korte pauzes",
      "Oefeningen worden per deelnemer zwaarder of lichter gemaakt",
    ],
  },
  "circuit-wo": {
    forWho: "Voor wie conditie én kracht wil in één les. De beste eerste les als je nog niet weet wat bij je past.",
    expect: [
      "Acht tot tien stations met kracht- en cardio-oefeningen",
      "Hoog tempo, korte rust, elke week een andere ronde",
      "Je werkt op je eigen niveau: de instructeur past de belasting aan",
    ],
  },
  "circuit-vr": {
    forWho: "Dezelfde opzet als woensdag, met een andere ronde oefeningen. Handig als je twee keer per week wilt.",
    expect: [
      "Andere stations dan op woensdag, dus geen herhaling",
      "Begin van het weekend met een vol uur",
      "Niveau schaalt mee met wie er staat",
    ],
  },
  boksen: {
    forWho: "Voor wie een uitlaatklep zoekt en tegelijk aan coördinatie, conditie en kracht wil werken. Geen boksachtergrond nodig.",
    expect: [
      "Bokstechnieken op de pads, gecombineerd met cardio en kracht",
      "Handschoenen en pads zijn in de zaal aanwezig",
      "Maximaal acht deelnemers, dus veel aandacht voor techniek",
    ],
  },
};

const classMemberships = memberships.filter((plan) => plan.includesClasses);

const schemas = [
  ...serviceSchema({
    path: "/groepslessen",
    name: "Groepslessen",
    description:
      "Kleine groepslessen bij Thehomegym in Heinenoord: circuittraining, boksen (Boxercise) en buik, billen en benen. Maximaal tien deelnemers, eerste les gratis.",
    serviceType: "Groepslessen",
    offers: stripCards.map((card) => ({
      name: card.name,
      price: card.perClass.replace(",", "."),
      unitText: "per les",
      description: card.total ? `${card.total} euro in totaal` : undefined,
    })),
  }),
  faqPageSchema(groepslesFaqs),
];

export default function Groepslessen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />
      <main id="hoofdinhoud">
        <PageIntro
          label="Groepslessen"
          title="Groepslessen in Heinenoord met maximaal tien deelnemers."
          intro="Circuittraining, boksen en buik, billen en benen. Klein genoeg dat de instructeur je ziet, en je eerste les is gratis. Lid zijn hoeft niet: met een strippenkaart doe je mee wanneer het jou uitkomt."
          image={images.groupClass}
        >
          <Button
            href={whatsappHref(ctaMessages.groepsles)}
            size="lg"
            withArrow
            external
            event="whatsapp_click"
            eventParams={{ location: "groepslessen-intro" }}
          >
            Gratis proefles aanvragen
          </Button>
          <Button href="#lessen" variant="secondary" size="lg">
            Bekijk het rooster
          </Button>
        </PageIntro>

        {/* Lessen */}
        <section id="lessen" className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14">
          <Reveal className="max-w-[620px]">
            <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
              De lessen van deze week.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Vier lessen per week, elk op een vast moment. Je meldt je per
              les aan via WhatsApp, dan weet de instructeur dat je komt.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {groupClasses.map((item, i) => {
              const detail = classDetails[item.id];
              return (
                <Reveal key={item.id} delay={(i % 2) as 0 | 1}>
                  <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper md:flex-row">
                    <div className="relative h-56 w-full shrink-0 md:h-auto md:w-[32%]">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-[24px] leading-tight font-bold text-ink">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-[15px] text-muted tnum">
                            {item.day} {item.time}
                          </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink tnum">
                          <UsersThree size={14} aria-hidden />
                          max {item.maxParticipants}
                        </span>
                      </div>
                      <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
                        {item.body}
                      </p>
                      {detail && (
                        <>
                          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-ink">
                            {detail.forWho}
                          </p>
                          <PointList className="mt-4" points={detail.expect} />
                        </>
                      )}
                      <ClassCta name={item.name} day={item.day} time={item.time} />
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Prijzen */}
        <section className="bg-paper-deep">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14">
            <Reveal className="max-w-[620px]">
              <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
                Los meedoen of onbeperkt.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                Met een strippenkaart betaal je per les en zit je nergens aan
                vast. Kom je vaker, dan is het lidmaatschap met lessen
                voordeliger: daar zit onbeperkt fitness bij.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-8">
                  <h3 className="font-display text-[17px] font-bold text-ink">
                    Strippenkaarten
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {stripCards.map((card) => (
                      <li
                        key={card.id}
                        className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl px-4 py-3.5 ${
                          card.highlight ? "bg-clay" : "bg-paper-deep"
                        }`}
                      >
                        <span className="text-[15px] font-medium text-ink">
                          {card.name}
                          <span className="mt-0.5 block text-[13px] font-normal text-muted">
                            {card.note}
                          </span>
                        </span>
                        <span className="text-[15px] text-ink tnum">
                          <strong className="font-semibold">&euro;{card.perClass}</strong>{" "}
                          <span className="text-muted">
                            per les{card.total ? ` · €${card.total} in totaal` : ""}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[14px] text-muted">
                    Afrekenen met pin of iDEAL. Je eerste les is gratis.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={1}>
                <div className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-8">
                  <h3 className="font-display text-[17px] font-bold text-ink">
                    Lidmaatschap met lessen
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {classMemberships.map((plan) => (
                      <li
                        key={plan.id}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl bg-paper-deep px-4 py-3.5"
                      >
                        <span className="text-[15px] font-medium text-ink">
                          {plan.name}
                          <span className="mt-0.5 block text-[13px] font-normal text-muted">
                            {plan.duration}
                          </span>
                        </span>
                        <span className="text-[15px] text-ink tnum">
                          <strong className="font-semibold">&euro;{plan.price}</strong>{" "}
                          <span className="text-muted">per maand</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <PointList
                    className="mt-5"
                    points={[
                      "Onbeperkt groepslessen én onbeperkt fitness",
                      "Persoonlijk schema en gratis Full Body Scans",
                      "Na de looptijd maandelijks opzegbaar",
                    ]}
                  />
                  <p className="mt-4 text-[14px] text-muted">
                    Alle lidmaatschappen staan{" "}
                    <Link
                      href="/#tarieven"
                      className="font-medium text-ink underline-offset-4 hover:text-brick hover:underline"
                    >
                      bij de tarieven
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <PageFaq title="Vragen over de groepslessen." items={groepslesFaqs} />

        <PageCta
          title="Kom een les gratis meedoen."
          body="Kies een les uit het rooster en app ons. Je staat op de lijst, de instructeur weet dat je nieuw bent, en daarna beslis je pas of je doorgaat."
          primary={{
            href: whatsappHref(ctaMessages.groepsles),
            label: "Gratis proefles aanvragen",
            external: true,
            location: "groepslessen-cta",
          }}
          secondary={{
            href: "/#proefweek",
            label: "Of de hele proefweek",
            location: "groepslessen-cta",
          }}
        />
      </main>
    </>
  );
}
