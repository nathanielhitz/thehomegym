import { Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { company, reviews } from "@/lib/content";

export default function Reviews() {
  return (
    <section
      aria-labelledby="reviews-titel"
      className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28"
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

      <div className="mt-12 gap-4 sm:columns-2 lg:columns-3">
        {reviews.map((review, i) => (
          <Reveal
            key={review.name}
            delay={(i % 3) as 0 | 1 | 2}
            className="mb-4 break-inside-avoid"
          >
            <figure className="rounded-2xl border border-line bg-paper-deep p-6 sm:p-7">
              <blockquote className="text-[15px] leading-relaxed text-ink">
                {review.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4 text-[14px]">
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-brick/12 font-display text-[14px] font-bold text-brick"
                >
                  {review.name.charAt(0)}
                </span>
                <span className="text-muted">
                  <span className="font-medium text-ink">{review.name}</span>,
                  via Google
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
