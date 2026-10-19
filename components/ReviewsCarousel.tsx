"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

type Review = { name: string; text: string };

/* Swipebare rij met scroll-snap. Geen autoplay: bezoekers bepalen zelf het
   tempo. Op desktop schuiven de pijltjes één kaart per klik op. */
export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * (card.getBoundingClientRect().width + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-paper text-ink transition-[transform,background-color,border-color,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-ink hover:bg-paper-deep active:scale-[0.96] disabled:pointer-events-none disabled:opacity-35";

  return (
    <div className="mt-8">
      <ul
        ref={trackRef}
        onScroll={updateEdges}
        aria-label="Reviews van leden"
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <li
            key={review.name}
            className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper-deep p-6 sm:p-7">
              <blockquote className="flex-1 text-[15px] leading-relaxed text-ink">
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
          </li>
        ))}
      </ul>

      <div className="mt-5 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Vorige review"
          className={arrowClass}
        >
          <ArrowLeft size={18} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Volgende review"
          className={arrowClass}
        >
          <ArrowRight size={18} weight="bold" />
        </button>
      </div>
    </div>
  );
}
