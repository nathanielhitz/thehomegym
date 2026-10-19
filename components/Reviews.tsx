import { Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { company, reviews } from "@/lib/content";

export default function Reviews() {
  return (
    <section
      aria-labelledby="reviews-titel"
      className="mx-auto w-full max-w-[1240px] px-5 py-10 sm:px-8 md:py-14"
    >
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[420px]">
          <h2
            id="reviews-titel"
            className="font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]"
          >
            Wat leden erover schrijven.
          </h2>
          <p className="mt-4 flex items-center gap-2.5 text-[15px] text-muted">
            <span className="flex gap-0.5 text-signal" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} weight="fill" />
              ))}
            </span>
            <span className="tnum">
              {company.googleRating} op Google
            </span>
          </p>
        </div>
        <Button href={company.googleReviewsUrl} variant="secondary" external>
          Alle reviews op Google
        </Button>
      </Reveal>

      <Reveal delay={1}>
        <ReviewsCarousel reviews={reviews} />
      </Reveal>
    </section>
  );
}
