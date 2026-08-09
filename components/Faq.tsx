import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ctaMessages, faqs, whatsappHref } from "@/lib/content";

export default function Faq() {
  return (
    <section
      aria-labelledby="faq-titel"
      className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28"
    >
      <Reveal className="max-w-[520px]">
        <h2
          id="faq-titel"
          className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]"
        >
          Vragen die we vaak krijgen.
        </h2>
      </Reveal>

      <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={(i % 2) as 0 | 1}>
            <div className="border-t border-line-strong pt-5">
              <dt className="font-display text-[18px] leading-snug font-bold text-ink">
                {item.q}
              </dt>
              <dd className="mt-2.5 max-w-[48ch] text-[15px] leading-relaxed text-muted">
                {item.a}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-clay px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <p className="max-w-[46ch] text-[16px] leading-relaxed text-brick-deep">
          Staat je vraag er niet bij? Stuur gerust een appje, dan krijg je
          gewoon antwoord van een van de trainers.
        </p>
        <Button
          href={whatsappHref(ctaMessages.vraag)}
          external
          className="shrink-0"
        >
          Stel je vraag
        </Button>
      </Reveal>
    </section>
  );
}
