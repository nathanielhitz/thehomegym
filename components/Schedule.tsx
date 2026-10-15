import Image from "next/image";
import { UsersThree } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ClassCta from "@/components/ClassCta";
import OpenNowBadge from "@/components/OpenNowBadge";
import { company, groupClasses, openingHours } from "@/lib/content";

export default function Schedule() {
  return (
    <section
      id="rooster"
      className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14"
    >
      <Reveal className="max-w-[620px]">
        <h2 className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
          Wanneer kun je terecht?
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-muted">
          De zaal is zeven dagen per week open. De groepslessen staan vast in
          het weekrooster, met een maximum aantal deelnemers per les.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        {/* Groepslesrooster */}
        <Reveal>
          <div className="h-full overflow-hidden rounded-2xl border border-line bg-paper">
            <div className="flex items-center justify-between gap-4 border-b border-line bg-paper-deep px-6 py-4 sm:px-8">
              <h3 className="font-display text-[17px] font-bold text-ink">
                Groepslesrooster
              </h3>
              <span className="text-[13px] text-muted">
                Eerste les is gratis
              </span>
            </div>

            <ul className="divide-y divide-line">
              {groupClasses.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-start sm:px-8"
                >
                  <div className="relative hidden h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:block">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="font-display text-[18px] font-bold text-ink">
                        {item.name}
                      </h4>
                      <span className="text-[14px] text-muted tnum">
                        {item.day} {item.time}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[56ch] text-[15px] leading-relaxed text-muted">
                      {item.body}
                    </p>
                    <ClassCta name={item.name} day={item.day} time={item.time} />
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink tnum">
                    <UsersThree size={14} aria-hidden />
                    max {item.maxParticipants}
                  </span>
                </li>
              ))}
            </ul>

            <p className="border-t border-line px-6 py-4 text-[14px] leading-relaxed text-muted sm:px-8">
              Je eerste groepsles is gratis en je zit nergens aan vast. Daarna
              kies je een strippenkaart of een lidmaatschap met lessen.
            </p>
          </div>
        </Reveal>

        {/* Openingstijden */}
        <Reveal delay={1}>
          <div className="flex h-full flex-col rounded-2xl border border-line bg-paper-deep p-6 sm:p-8">
            <h3 className="font-display text-[17px] font-bold text-ink">
              Openingstijden
            </h3>
            <OpenNowBadge className="mt-4 self-start" />

            <dl className="mt-6 space-y-0.5">
              {openingHours.map((day) => (
                <div
                  key={day.label}
                  className="flex items-baseline justify-between gap-4 py-2"
                >
                  <dt className="text-[15px] text-muted">{day.label}</dt>
                  <dd className="text-[15px] font-medium text-ink tnum">
                    {day.open} - {day.close}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 border-t border-line-strong pt-5 text-[14px] leading-relaxed text-muted">
              Fitness en groepslessen zijn toegankelijk vanaf 18 jaar,
              personal training vanaf 16 jaar met toestemming van een ouder.
              Gasten meenemen kan in overleg of met een dagpas.
            </p>

            <div className="mt-auto border-t border-line-strong pt-6">
              <h4 className="font-display text-[15px] font-bold text-ink">
                Waar vind je ons
              </h4>
              <address className="mt-2 text-[15px] leading-relaxed text-muted not-italic">
                {company.street}
                <br />
                <span className="tnum">
                  {company.postalCode} {company.city}
                </span>
              </address>
              <Button
                href={company.mapsUrl}
                variant="quiet"
                external
                className="mt-3 text-[15px]"
                event="route_click"
                eventParams={{ location: "rooster" }}
              >
                Route plannen
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
