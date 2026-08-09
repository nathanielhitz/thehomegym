import Image from "next/image";
import Reveal from "@/components/Reveal";
import { benefits, company, images } from "@/lib/content";

const byId = Object.fromEntries(benefits.map((b) => [b.id, b]));

// Wat de Full Body Scan meet, letterlijk zoals de gym het omschrijft.
const scanMetrics = [
  "Vetpercentage",
  "Spiermassa",
  "BMI",
  "Visceraal vet",
  "Vochtpercentage",
  "Botmassa",
  "Calorieverbruik in rust",
];

function CellTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-[21px] leading-tight font-bold sm:text-[23px]">
      {children}
    </h3>
  );
}

export default function Benefits() {
  return (
    <section
      id="waarom"
      className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal className="max-w-[600px]">
        <h2 className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
          Geen massagym, en dat merk je meteen.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {/* Grote fotocel */}
        <Reveal className="md:col-span-7">
          <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl p-7 text-paper sm:min-h-[360px] sm:p-9">
            <Image
              src={images.benchCoaching.src}
              alt={images.benchCoaching.alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10"
            />
            <div className="relative">
              <CellTitle>{byId.rust.title}</CellTitle>
              <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-paper/80">
                {byId.rust.body}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Schema */}
        <Reveal delay={1} className="md:col-span-5">
          <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper-deep p-7 sm:p-9">
            <div>
              <CellTitle>{byId.schema.title}</CellTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {byId.schema.body}
              </p>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Afvallen", "Sterker worden", "Fitter worden", "Herstel"].map(
                (goal) => (
                  <li
                    key={goal}
                    className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink"
                  >
                    {goal}
                  </li>
                ),
              )}
            </ul>
          </article>
        </Reveal>

        {/* Bodyscan */}
        <Reveal className="md:col-span-4">
          <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-7 sm:p-9">
            <div>
              <CellTitle>{byId.scan.title}</CellTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {byId.scan.body}
              </p>
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-5">
              {scanMetrics.map((metric) => (
                <li key={metric} className="text-[14px] text-muted">
                  {metric}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* 18+ in accentvlak */}
        <Reveal delay={1} className="md:col-span-3">
          <article className="flex h-full flex-col justify-between rounded-2xl bg-clay p-7">
            <span className="font-display text-[56px] leading-none font-extrabold text-signal tnum">
              {company.minAge}+
            </span>
            <div className="mt-8">
              <CellTitle>{byId.leeftijd.title}</CellTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-brick-deep">
                {byId.leeftijd.body}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Apps */}
        <Reveal delay={2} className="md:col-span-5">
          <article className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-paper-deep p-7 sm:p-9">
            <div>
              <CellTitle>{byId.app.title}</CellTitle>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {byId.app.body}
              </p>
            </div>
            <div className="relative mt-7 h-32 w-full sm:h-36">
              <Image
                src={images.apps.src}
                alt={images.apps.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain object-left"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
