import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/Button";
import HeroVideo from "@/components/HeroVideo";
import OpenNowBadge from "@/components/OpenNowBadge";
import { ctaMessages, images, whatsappHref } from "@/lib/content";

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
        className="hero-video absolute inset-0 h-full w-full object-cover object-[38%_center] brightness-[0.7] saturate-[0.85] lg:object-[45%_center]"
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
        className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 via-50% to-ink/25 lg:bg-gradient-to-r lg:from-ink/92 lg:via-ink/70 lg:via-55% lg:to-ink/20"
      />
      {/* Extra donkere band bovenaan, zodat de transparante navigatie leesbaar blijft */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/45 to-transparent"
      />

      {/* De onderrand houdt de actiebalk vrij: balkhoogte plus rustruimte. */}
      <div className="relative w-full px-5 pt-32 pb-[calc(var(--cta-bar)+2.5rem)] sm:px-8 sm:pb-[calc(var(--cta-bar)+3.5rem)] lg:py-32 lg:pr-14 lg:pl-[max(2rem,calc((100vw-1240px)/2))]">
        <h1 className="max-w-[15ch] font-display text-[38px] leading-[1.03] font-extrabold text-paper sm:text-[52px] lg:text-[60px] xl:text-[66px]">
          De persoonlijke sportschool van Heinenoord.
        </h1>

        <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper/92 sm:text-lg">
          Trainen zonder de drukte van een massagym, met een schema dat op jou
          is gemaakt.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#proefweek" size="lg" withArrow>
            Gratis proefweek
          </Button>
          <Button
            href={whatsappHref(ctaMessages.vraag)}
            variant="secondary"
            size="lg"
            external
          >
            App ons
          </Button>
        </div>

        <OpenNowBadge className="mt-8 bg-paper/95" />
      </div>

      {/* Scroll-hint, rechts uitgelijnd op dezelfde onderlijn als de badge. */}
      <div
        aria-hidden
        className="absolute right-5 bottom-[calc(var(--cta-bar)+2.5rem)] flex flex-col items-center gap-2 sm:right-8 sm:bottom-[calc(var(--cta-bar)+3.5rem)] lg:right-14 lg:bottom-14"
      >
        <span className="scroll-hint h-8 w-px sm:h-11" />
        <CaretDown size={13} weight="bold" className="text-paper/80" />
      </div>
    </section>
  );
}
