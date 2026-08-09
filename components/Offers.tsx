import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ctaMessages, offers, whatsappHref } from "@/lib/content";

const [fitness, personalTraining, groepslessen] = offers;

function Points({ points, dense = false }: { points: string[]; dense?: boolean }) {
  return (
    <ul className={`space-y-2 ${dense ? "" : "sm:space-y-2.5"}`}>
      {points.map((point) => (
        <li key={point} className="flex gap-2.5 text-[15px] text-muted">
          <Check
            size={16}
            weight="bold"
            className="mt-1 shrink-0 text-brick"
            aria-hidden
          />
          {point}
        </li>
      ))}
    </ul>
  );
}

function Price({ from, note }: { from: string; note: string }) {
  return (
    <p className="text-[15px] text-muted">
      <span className="text-muted">vanaf </span>
      <span className="font-display text-[26px] font-bold text-ink tnum">
        &euro;{from}
      </span>{" "}
      {note}
    </p>
  );
}

export default function Offers() {
  return (
    <section id="aanbod" className="bg-paper-deep">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-[620px]">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-brick uppercase">
            Aanbod
          </p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
            Drie manieren om bij ons te trainen.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Vrij trainen wanneer het jou uitkomt, één op één met een vaste
            trainer, of in een groepsles met maximaal tien man.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {/* Grote tegel */}
          <Reveal className="md:col-span-7">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
              <div className="relative h-56 w-full sm:h-72 lg:h-80">
                <Image
                  src={fitness.image.src}
                  alt={fitness.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="font-display text-[26px] leading-tight font-bold text-ink sm:text-[30px]">
                  {fitness.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                  {fitness.intro}
                </p>
                <div className="mt-6">
                  <Points points={fitness.points} />
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <Price from={fitness.priceFrom} note={fitness.priceNote} />
                  <Button href="#tarieven" variant="secondary">
                    Bekijk tarieven
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Twee gestapelde tegels */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <Reveal delay={1} className="flex-1">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper sm:flex-row">
                <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-[34%]">
                  <Image
                    src={personalTraining.image.src}
                    alt={personalTraining.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-[22px] leading-tight font-bold text-ink">
                    {personalTraining.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {personalTraining.intro}
                  </p>
                  <div className="mt-auto pt-6">
                    <Price
                      from={personalTraining.priceFrom}
                      note={personalTraining.priceNote}
                    />
                    <Button
                      href={whatsappHref(ctaMessages.personalTraining)}
                      variant="quiet"
                      external
                      className="mt-3 text-[15px]"
                    >
                      Gratis intake aanvragen
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={2} className="flex-1">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper sm:flex-row">
                <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-[34%]">
                  <Image
                    src={groepslessen.image.src}
                    alt={groepslessen.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-[22px] leading-tight font-bold text-ink">
                    {groepslessen.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                    {groepslessen.intro}
                  </p>
                  <div className="mt-auto pt-6">
                    <Price
                      from={groepslessen.priceFrom}
                      note={groepslessen.priceNote}
                    />
                    <Button
                      href="#rooster"
                      variant="quiet"
                      className="mt-3 text-[15px]"
                    >
                      Bekijk het rooster
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
