import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import FaqItem from "@/components/FaqItem";
import { ctaMessages, faqs, whatsappHref } from "@/lib/content";

export default function Faq() {
  return (
    <section
      aria-labelledby="faq-titel"
      className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14"
    >
      <Reveal className="max-w-[520px]">
        <h2
          id="faq-titel"
          className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]"
        >
          Vragen die we vaak krijgen.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-x-12 md:grid-cols-2">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={(i % 2) as 0 | 1}>
            <FaqItem q={item.q} a={item.a} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-clay px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <p className="max-w-[46ch] text-[16px] leading-relaxed text-brick-deep">
          Staat je vraag er niet bij? Stuur gerust een appje, dan krijg je
          gewoon antwoord van een van de trainers.
        </p>
        <Button
          href={whatsappHref(ctaMessages.vraag)}
          external
          className="shrink-0"
          event="whatsapp_click"
          eventParams={{ location: "faq" }}
        >
          Stel je vraag
        </Button>
      </Reveal>
    </section>
  );
}
