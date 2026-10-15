"use client";

import { Plus } from "@phosphor-icons/react/dist/ssr";
import { track } from "@/lib/track";

// Eén vraag uit de FAQ als native <details>: werkt zonder JS, is toegankelijk
// en vuurt bij openen het event faq_open met de vraag.
export default function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="group border-t border-line-strong"
      onToggle={(e) => {
        if (e.currentTarget.open) track("faq_open", { vraag: q });
      }}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-display text-[18px] leading-snug font-bold text-ink transition-colors duration-200 hover:text-brick [&::-webkit-details-marker]:hidden">
        {q}
        <Plus
          size={18}
          weight="bold"
          aria-hidden
          className="mt-1 shrink-0 text-brick transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
        />
      </summary>
      <p className="max-w-[48ch] pb-5 text-[15px] leading-relaxed text-muted">
        {a}
      </p>
    </details>
  );
}
