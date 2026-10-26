import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import PageFaq from "@/components/PageFaq";
import PageCta from "@/components/PageCta";
import PointList from "@/components/PointList";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import {
  ctaMessages,
  images,
  personalTrainingFaqs,
  team,
  trainingRates,
  whatsappHref,
} from "@/lib/content";
import { faqPageSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Personal training in Heinenoord · Thehomegym",
  description:
    "Personal training in een privézaal in Heinenoord, Hoeksche Waard. Vaste trainer, Full Body Scan en schema op maat. Vanaf 45 euro per training. Gratis intake.",
  alternates: { canonical: "/personal-training" },
  openGraph: {
    title: "Personal training in Heinenoord · Thehomegym",
    description:
      "Eén op één of duo trainen in de privézaal van Thehomegym, met een vaste trainer en een gratis intake.",
  },
};

const trainers = team.filter((member) => member.role.includes("Personal trainer"));

const forWhom = [
  {
    title: "Je begint net, of opnieuw",
    body: "Je hebt nog nooit in een sportschool gestaan of bent lang niet geweest. Een trainer naast je zorgt dat je techniek vanaf dag één klopt en dat je niet te snel te veel doet.",
  },
  {
    title: "Je traint al, maar het schiet niet op",
    body: "Je komt al een tijd, maar ziet geen verschil meer. Met een Full Body Scan en een schema dat elke paar weken wordt bijgesteld, komt er weer beweging in.",
  },
  {
    title: "Je herstelt van een blessure",
    body: "Na een blessure wil je wel bewegen, maar veilig. De trainer stemt de oefeningen af op wat je lichaam nu aankan en bouwt dat rustig op.",
  },
  {
    title: "Je wilt het samen doen",
    body: "Met een vriend, partner of collega in dezelfde sessie: duo training. Je motiveert elkaar en betaalt minder per persoon.",
  },
];

const steps = [
  {
    title: "Gratis intake",
    body: "Je maakt kennis met je trainer, vertelt wat je wilt bereiken en maakt een Full Body Scan: vetpercentage, spiermassa, visceraal vet en meer. Je zit nergens aan vast.",
  },
  {
    title: "Schema en planning",
    body: "Op basis van de intake krijg je een voorstel: hoe vaak, welke oefeningen en wat je daarnaast zelf kunt doen. Je schema staat in de workout-app.",
  },
  {
    title: "Trainen in de privézaal",
    body: "Elke sessie één op één (of met z'n tweeën) in de aparte zaal, met dezelfde trainer. Techniek, tempo en belasting worden per training bijgesteld.",
  },
  {
    title: "Meten en bijsturen",
    body: "Om de zoveel weken herhaal je de Full Body Scan. Zo zie je wat er verandert en kan de trainer het schema daarop aanpassen.",
  },
];

const schemas = [
  ...serviceSchema({
    path: "/personal-training",
    name: "Personal training",
    description:
      "Eén op één of duo training in de privézaal van Thehomegym in Heinenoord, met een vaste trainer, Full Body Scan en schema op maat.",
    serviceType: "Personal training",
    offers: trainingRates
      .filter((rate) => rate.price)
      .map((rate) => ({
        name: rate.name,
        price: rate.price as string,
        unitText: rate.unit,
        description: rate.note,
      })),
  }),
  faqPageSchema(personalTrainingFaqs),
];

export default function PersonalTraining() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <Navbar />
      <main id="hoofdinhoud">
        <PageIntro
          label="Personal training"
          title="Personal training in Heinenoord, in een eigen privézaal."
          intro="Eén op één of met z'n tweeën, met een vaste trainer die je techniek corrigeert en je schema bijstuurt op wat jij nodig hebt. Geen groep, geen wachten, geen afleiding."
          image={images.personalTraining}
        >
          <Button
            href={whatsappHref(ctaMessages.personalTraining)}
            size="lg"
            withArrow
            external
            event="whatsapp_click"
            eventParams={{ location: "pt-intro", onderwerp: "personal-training" }}
          >
            Gratis intake aanvragen
          </Button>
          <Button href="#pt-tarieven" variant="secondary" size="lg">
            Bekijk de tarieven
          </Button>
        </PageIntro>

        {/* Voor wie */}
        <section className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14">
          <Reveal className="max-w-[620px]">
            <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
              Voor wie personal training werkt.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Niet alleen voor wie al goed getraind is. Juist als je ergens
              tegenaan loopt, scheelt een trainer naast je maanden.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {forWhom.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) as 0 | 1}>
                <article className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7">
                  <h3 className="font-display text-[19px] leading-tight font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Hoe het werkt */}
        <section className="bg-paper-deep">
          <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1fr_1.1fr] md:items-start md:py-14 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.coaching.src}
                  alt={images.coaching.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
                Zo werkt het.
              </h2>
              <ol className="mt-8 space-y-7">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="mt-0.5 font-display text-[13px] font-bold tracking-[0.1em] text-brick tnum">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[19px] leading-tight font-bold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Trainers */}
        <section className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14">
          <Reveal className="max-w-[620px]">
            <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
              Je traint met Rick of Stef.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Beide gecertificeerd personal trainer en allebei al jaren
              dagelijks in de zaal. Je houdt dezelfde trainer, zodat die weet
              waar je vandaan komt.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trainers.map((member, i) => (
              <Reveal key={member.id} delay={(i % 2) as 0 | 1}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper sm:flex-row">
                  <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-[40%]">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-[22px] leading-tight font-bold text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-[14px] text-brick">{member.role}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {member.bio}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {member.certifications.map((cert) => (
                        <li
                          key={cert}
                          className="rounded-full border border-line px-2.5 py-1 text-[12px] text-muted"
                        >
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-muted">
            Meer over het team lees je{" "}
            <Link
              href="/#team"
              className="font-medium text-ink underline-offset-4 hover:text-brick hover:underline"
            >
              op de homepage
            </Link>
            .
          </p>
        </section>

        {/* Tarieven */}
        <section id="pt-tarieven" className="bg-paper-deep">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14">
            <Reveal className="max-w-[620px]">
              <h2 className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]">
                Wat personal training kost.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                Je betaalt per training en kunt dat in één, twee of drie
                termijnen doen. De intake en de eerste Full Body Scan zijn
                gratis.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {trainingRates.map((rate, i) => (
                <Reveal key={rate.id} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 sm:p-7">
                    <h3 className="font-display text-[19px] leading-tight font-bold text-ink">
                      {rate.name}
                    </h3>
                    <p className="mt-1 text-[14px] text-muted">{rate.note}</p>
                    <p className="mt-6 flex items-baseline gap-1.5">
                      {rate.price ? (
                        <>
                          <span className="text-[15px] text-muted">vanaf</span>
                          <span className="font-display text-[38px] leading-none font-extrabold text-ink tnum">
                            &euro;{rate.price}
                          </span>
                          <span className="text-[15px] text-muted">{rate.unit}</span>
                        </>
                      ) : (
                        <span className="font-display text-[22px] leading-tight font-bold text-ink">
                          {rate.unit.charAt(0).toUpperCase() + rate.unit.slice(1)}
                        </span>
                      )}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-4 rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-[17px] font-bold text-ink">
                Altijd inbegrepen
              </h3>
              <PointList
                className="mt-4"
                points={[
                  "Gratis intake en Full Body Scan",
                  "Vaste trainer en de aparte privézaal",
                  "Schema in de workout-app, voeding in de voedingsapp",
                  "Betalen in één, twee of drie termijnen",
                  "Vanaf 16 jaar met toestemming van een ouder",
                ]}
              />
            </Reveal>
          </div>
        </section>

        <PageFaq
          title="Vragen over personal training."
          items={personalTrainingFaqs}
        />

        <PageCta
          title="Plan een gratis intake."
          body="App ons en we plannen een moment in. Je maakt kennis, doet de Full Body Scan en hoort wat we je aanraden. Daarna beslis je pas."
          primary={{
            href: whatsappHref(ctaMessages.personalTraining),
            label: "App voor een intake",
            external: true,
            location: "pt-cta",
          }}
          secondary={{
            href: "/#proefweek",
            label: "Liever eerst de proefweek",
            location: "pt-cta",
          }}
        />
      </main>
    </>
  );
}
