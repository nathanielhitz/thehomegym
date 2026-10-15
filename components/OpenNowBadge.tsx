"use client";

import { useEffect, useState } from "react";
import { currentOpeningStatus, type OpeningStatus } from "@/lib/openingStatus";

export default function OpenNowBadge({ className = "" }: { className?: string }) {
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

  if (!status) {
    return (
      <span
        className={`inline-flex h-8 items-center rounded-full border border-line px-3 text-[13px] text-muted ${className}`}
      >
        Openingstijden
      </span>
    );
  }

  return (
    <span
      className={`inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[13px] font-medium tnum ${
        status.open
          ? "border-brick/30 bg-clay text-brick-deep"
          : "border-line bg-paper text-muted"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          status.open ? "bg-signal" : "bg-line-strong"
        }`}
      />
      {status.label}
    </span>
  );
}
