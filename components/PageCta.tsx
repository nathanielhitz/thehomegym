import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

/* Afsluitende oproep op een dienstpagina, in de donkere stijl van de
   logostrip zodat hij zich loszet van de rest. */
export default function PageCta({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string; external?: boolean; location: string };
  secondary: { href: string; label: string; location: string };
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
        <Reveal className="max-w-[640px]">
          <h2 className="font-display text-[32px] leading-[1.08] font-extrabold text-paper sm:text-[42px]">
            {title}
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-paper/80">
            {body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={primary.href}
              size="lg"
              withArrow
              external={primary.external}
              event={primary.external ? "whatsapp_click" : "proefweek_click"}
              eventParams={{ location: primary.location }}
            >
              {primary.label}
            </Button>
            <Button
              href={secondary.href}
              size="lg"
              variant="secondary"
              event="proefweek_click"
              eventParams={{ location: secondary.location }}
            >
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
