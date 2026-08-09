import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section
      id="hoe-het-werkt"
      className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[540px] font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
          Een week gratis meetrainen, zo werkt het.
        </h2>
        <Button
          href="#proefweek"
          withArrow
          size="lg"
          className="self-start md:self-auto"
        >
          Gratis proefweek
        </Button>
      </Reveal>

      <ol className="mt-14 grid gap-y-12 md:grid-cols-3 md:gap-x-10">
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.id}
            delay={(i + 1) as 1 | 2 | 3}
            className="border-t border-line-strong pt-6"
          >
            <span className="font-display text-[13px] font-bold tracking-[0.16em] text-brick tnum">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-[22px] leading-tight font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-muted">
              {step.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 rounded-2xl border border-line bg-paper-deep px-6 py-5 text-[15px] leading-relaxed text-muted sm:px-8">
        <p className="max-w-[80ch]">
          Een gratis proefles of proefweek kun je eenmalig doen. Je zit er
          verder nergens aan vast: pas als je erna lid wordt, kies je een
          lidmaatschap.
        </p>
      </Reveal>
    </section>
  );
}
