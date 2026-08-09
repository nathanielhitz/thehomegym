"use client";

import { useEffect, useState } from "react";
import { openingHours } from "@/lib/content";

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

type Status = { open: boolean; label: string } | null;

function currentStatus(now: Date): Status {
  const iso = now.getDay() === 0 ? 7 : now.getDay();
  const today = openingHours.find((d) => d.iso === iso);
  if (!today) return null;

  const minutes = now.getHours() * 60 + now.getMinutes();
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);

  if (minutes >= open && minutes < close) {
    return { open: true, label: `Nu open tot ${today.close}` };
  }

  if (minutes < open) {
    return { open: false, label: `Vandaag open vanaf ${today.open}` };
  }

  const next = openingHours.find((d) => d.iso === (iso === 7 ? 1 : iso + 1));
  return {
    open: false,
    label: next ? `Morgen open vanaf ${next.open}` : "Nu gesloten",
  };
}

export default function OpenNowBadge({ className = "" }: { className?: string }) {
  // Pas na mount berekenen, anders wijkt de server-render af van de client.
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setStatus(currentStatus(new Date())),
    );
    const id = window.setInterval(
      () => setStatus(currentStatus(new Date())),
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
