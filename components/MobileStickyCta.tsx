"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Barbell,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { company, ctaMessages, whatsappHref } from "@/lib/content";
import { track } from "@/lib/track";

export default function MobileStickyCta() {
  // De balk blijft weg zolang de hero (#top) in beeld is en schuift pas van
  // onderen in als de hero minder dan 20% zichtbaar is. Op pagina's zonder
  // hero staat de balk gewoon direct.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero || typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.2),
      { threshold: [0, 0.2] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Snelle acties"
      inert={!visible || undefined}
      className={`fixed inset-x-0 bottom-0 z-50 flex min-h-[var(--cta-bar)] border-t border-line bg-paper/98 transition-transform duration-200 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappHref(ctaMessages.vraag)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { location: "sticky" })}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-[14px] font-semibold tracking-tight text-ink transition-transform duration-200 active:scale-[0.98]"
      >
        <WhatsappLogo size={18} weight="fill" aria-hidden />
        WhatsApp
      </a>

      <span aria-hidden className="w-px bg-line" />

      <a
        href={company.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("route_click", { location: "sticky" })}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-[14px] font-semibold tracking-tight text-ink transition-transform duration-200 active:scale-[0.98]"
      >
        <MapPin size={18} aria-hidden />
        Route
      </a>

      <a
        href="#proefweek"
        onClick={() => track("proefweek_click", { location: "sticky" })}
        className="flex flex-[1.2] items-center justify-center gap-2 bg-brick py-3 text-[14px] font-semibold tracking-tight text-paper transition-transform duration-200 active:scale-[0.98]"
      >
        <Barbell size={18} weight="fill" aria-hidden />
        Proefweek
      </a>
    </nav>
  );
}
