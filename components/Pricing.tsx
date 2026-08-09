import { Check } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import {
  memberships,
  membershipIncludes,
  registrationFee,
  stripCards,
  trainingRates,
  whatsappHref,
} from "@/lib/content";

const membershipMessage = (name: string, duration: string) =>
  whatsappHref(
    `Hoi! Ik wil graag lid worden van Thehomegym met het lidmaatschap "${name}, ${duration}". Kunnen jullie mij verder helpen?`,
  );

export default function Pricing() {
  return (
    <section id="tarieven" className="bg-paper-deep">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-[640px]">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-brick uppercase">
            Tarieven
          </p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
            Wat het kost, zonder kleine lettertjes.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Elk lidmaatschap loopt 6 of 12 maanden. Daarna gaat het
            automatisch over in een maandelijks opzegbaar abonnement met een
            opzegtermijn van één maand.
          </p>
        </Reveal>

        {/* Lidmaatschappen */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {memberships.map((plan, i) => (
            <Reveal key={plan.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                  plan.highlight
                    ? "border-brick bg-clay"
                    : "border-line bg-paper"
                }`}
              >
                <div className="flex items-start sm:min-h-[26px]">
                  {plan.highlight && (
                    <span className="rounded-full bg-brick px-2.5 py-1 text-[11px] font-semibold tracking-wide text-paper uppercase">
                      Meest gekozen
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-[19px] leading-tight font-bold text-ink">
                  {plan.name}
                </h3>
                <p className="mt-1 text-[15px] text-muted">{plan.duration}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-[42px] leading-none font-extrabold text-ink tnum">
                    &euro;{plan.price}
                  </span>
                  <span className="text-[15px] text-muted">p/m</span>
                </p>

                <p className="mt-3 text-[14px] leading-relaxed text-muted sm:min-h-[48px]">
                  {plan.includesClasses
                    ? "Inclusief onbeperkt groepslessen"
                    : "Vrij fitnessen, groepslessen los bij te boeken"}
                </p>

                {/* mt-auto pint elke knop op de onderrand, zodat ze op één lijn staan */}
                <div className="mt-auto pt-6">
                  <Button
                    href={membershipMessage(plan.name, plan.duration)}
                    external
                    variant={plan.highlight ? "primary" : "secondary"}
                    className="w-full"
                  >
                    Word lid
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Wat er altijd bij zit */}
        <Reveal className="mt-4 rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-[17px] font-bold text-ink">
                Bij elk lidmaatschap inbegrepen
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                {membershipIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[15px] text-muted"
                  >
                    <Check
                      size={15}
                      weight="bold"
                      className="shrink-0 text-brick"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="shrink-0 rounded-xl bg-clay px-5 py-4 text-[15px] leading-relaxed text-brick-deep lg:max-w-[280px]">
              {registrationFee.actionRunning ? (
                <>
                  <strong className="font-semibold">
                    {registrationFee.actionLabel}.
                  </strong>{" "}
                  Normaal betaal je &euro;{registrationFee.standard} eenmalig
                  inschrijfgeld.
                </>
              ) : (
                <>
                  Eenmalig inschrijfgeld: &euro;{registrationFee.standard}.
                </>
              )}
            </p>
          </div>
        </Reveal>

        {/* Losse tarieven */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-[17px] font-bold text-ink">
                Groepslessen los
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Met een strippenkaart zit je nergens aan vast. Kom je een week
                niet, dan betaal je ook niets.
              </p>

              <ul className="mt-6 space-y-2.5">
                {stripCards.map((card) => (
                  <li
                    key={card.id}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl px-4 py-3.5 ${
                      card.highlight
                        ? "bg-clay"
                        : "bg-paper-deep"
                    }`}
                  >
                    <span className="text-[15px] font-medium text-ink">
                      {card.name}
                    </span>
                    <span className="text-[15px] text-ink tnum">
                      <strong className="font-semibold">
                        &euro;{card.perClass}
                      </strong>{" "}
                      <span className="text-muted">
                        per les
                        {card.total ? ` · €${card.total} in totaal` : ""}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] text-muted">
                Strippenkaarten reken je af met pin of iDEAL. Je proeftraining
                is gratis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h3 className="font-display text-[17px] font-bold text-ink">
                Personal training en coaching
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                In de aparte privézaal, met een vaste trainer. Betalen kan in
                één, twee of drie termijnen.
              </p>

              <ul className="mt-6 divide-y divide-line">
                {trainingRates.map((rate) => (
                  <li
                    key={rate.id}
                    className="grid gap-1 py-3.5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4"
                  >
                    <span className="text-[15px] font-medium text-ink">
                      {rate.name}
                      <span className="mt-0.5 block text-[14px] font-normal text-muted">
                        {rate.note}
                      </span>
                    </span>
                    <span className="text-[15px] text-ink sm:whitespace-nowrap sm:text-right tnum">
                      {rate.price ? (
                        <>
                          <span className="text-muted">vanaf </span>
                          <strong className="font-semibold">
                            &euro;{rate.price}
                          </strong>{" "}
                          <span className="text-muted">{rate.unit}</span>
                        </>
                      ) : (
                        <span className="text-muted">{rate.unit}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
