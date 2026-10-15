"use client";

import { useEffect, useState } from "react";
import { promo } from "@/content/promo";
import { currentOpeningStatus, type OpeningStatus } from "@/lib/openingStatus";

// Eén rustige regel onder de Google-sterren: openingsstatus en lopende actie,
// gescheiden door een middenpunt. De actie valt weg als promo.active uit staat.
export default function HeroInfoLine({ className = "" }: { className?: string }) {
  // Pas na mount berekenen, anders wijkt de server-render af van de client.
  const [status, setStatus] = useState<OpeningStatus>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setStatus(currentOpeningStatus(new Date())),
    );
    const id = window.setInterval(
      () => setStatus(currentOpeningStatus(new Date())),
      60_000,
    );
    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(id);
    };
  }, []);

  const parts = [
    status?.label,
    promo.active ? promo.heroLabel : null,
  ].filter(Boolean) as string[];

  // Vaste minimale hoogte, zodat de regel niet verspringt zodra de
  // openingsstatus na mount bekend is. Op 375px past de volledige regel
  // alleen op 13px met iets strakkere spatiëring; vanaf sm gelijk aan de
  // sterrenregel.
  return (
    <p
      className={`min-h-[1.5em] text-[13px] tracking-[-0.01em] text-paper/85 tnum sm:text-[14px] sm:tracking-normal ${className}`}
    >
      {parts.map((part, i) => (
        <span key={part}>
          {i > 0 && (
            <span aria-hidden className="mx-1.5 text-paper/50">
              ·
            </span>
          )}
          {part}
        </span>
      ))}
    </p>
  );
}
