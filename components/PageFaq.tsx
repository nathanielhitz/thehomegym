import Reveal from "@/components/Reveal";
import FaqItem from "@/components/FaqItem";

export default function PageFaq({
  title,
  items,
}: {
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section
      aria-labelledby="pagina-faq"
      className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14"
    >
      <Reveal className="max-w-[520px]">
        <h2
          id="pagina-faq"
          className="font-display text-[30px] leading-[1.08] font-extrabold text-ink sm:text-[38px]"
        >
          {title}
        </h2>
      </Reveal>
      <div className="mt-6 grid gap-x-12 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={(i % 2) as 0 | 1}>
            <FaqItem q={item.q} a={item.a} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
