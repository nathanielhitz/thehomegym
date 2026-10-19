import { Star } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import HeroVideo from "@/components/HeroVideo";
import HeroInfoLine from "@/components/HeroInfoLine";
import { company, ctaMessages, images, whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-viewport relative flex items-end overflow-hidden lg:items-center"
    >
      {/* Video bewust donker en iets ontkleurd: beweging trekt al genoeg
          aandacht, de koppen en knoppen moeten winnen. De foto blijft poster
          en stilstaand beeld voor bezoekers met prefers-reduced-motion. */}
      <HeroVideo
        src="/hero-video.mp4"
        poster={images.hero.src}
        className="hero-video absolute inset-0 h-full w-full object-cover object-[38%_center] brightness-[0.7] saturate-[0.85] lg:object-[45%_center] lg:brightness-[0.8] lg:saturate-[0.9]"
      />
      <img
        src={images.hero.src}
        alt=""
        aria-hidden
        className="hero-video-still absolute inset-0 h-full w-full object-cover object-[38%_center] brightness-[1.3] lg:object-[45%_center]"
      />

      {/* Scrim. De video is al donker gezet; de gradiënt houdt daarbovenop
          de tekstzone (onder op mobiel, links op desktop) bijna effen donker en
          loopt uit naar een lichte sluier aan de andere kant, zodat de zaal
          zichtbaar blijft maar nooit met de koppen en knoppen concurreert. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 via-50% to-ink/25 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/55 lg:via-50% lg:to-ink/5"
      />
      {/* Extra donkere band bovenaan, zodat de transparante navigatie leesbaar blijft */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/45 to-transparent"
      />

      {/* De actiebalk staat pas na de hero, dus de onderrand hoeft er geen
          ruimte voor vrij te houden. */}
      <div className="relative w-full px-5 pt-32 pb-10 sm:px-8 sm:pb-14 lg:py-32 lg:pr-14 lg:pl-[max(2rem,calc((100vw-1240px)/2))]">
        <h1 className="max-w-[15ch] font-display text-[38px] leading-[1.03] font-extrabold text-paper sm:text-[52px] lg:text-[60px] xl:text-[66px]">
          De persoonlijke sportschool van Heinenoord.
        </h1>

        <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper/92 sm:text-lg">
          Kleinschalig trainen met persoonlijke begeleiding en de rust om te
          focussen. Met een schema dat op jou is gemaakt.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            href="#proefweek"
            size="lg"
            withArrow
            event="proefweek_click"
            eventParams={{ location: "hero" }}
          >
            Gratis proefweek
          </Button>
          <Button
            href={whatsappHref(ctaMessages.vraag)}
            variant="secondary"
            size="lg"
            external
            event="whatsapp_click"
            eventParams={{ location: "hero" }}
          >
            App ons
          </Button>
        </div>

        {/* Sociaal bewijs direct onder de knoppen, daaronder één info-regel. */}
        <a
          href={company.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2.5 text-[14px] text-paper/85 underline-offset-4 hover:text-paper hover:underline"
        >
          <span className="flex gap-0.5 text-signal" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} weight="fill" />
            ))}
          </span>
          <span>
            <strong className="font-semibold text-paper tnum">
              {company.googleRating}
            </strong>{" "}
            op Google
          </span>
        </a>

        <HeroInfoLine className="mt-3" />
      </div>
    </section>
  );
}
