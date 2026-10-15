"use client";

import { useState } from "react";
import { Target, X } from "@phosphor-icons/react/dist/ssr";
import { doelen } from "@/content/doelen";
import { useHandoff } from "@/lib/handoff";

// Toont onder de intro van het aanbod één zin bij het gekozen doel.
export default function GoalNote() {
  const [id, setId] = useState<string | null>(null);
  useHandoff("doel", setId);

  const doel = doelen.find((d) => d.id === id);
  if (!doel) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-6 flex items-start gap-3 rounded-2xl bg-clay px-5 py-4 text-[15px] leading-relaxed text-brick-deep"
    >
      <Target size={20} weight="fill" aria-hidden className="mt-0.5 shrink-0" />
      <p className="flex-1">
        <strong className="font-semibold">{doel.label}:</strong> {doel.zin}
      </p>
      <button
        type="button"
        onClick={() => setId(null)}
        aria-label="Sluiten"
        className="-mr-1 -mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200 hover:bg-brick/10"
      >
        <X size={14} weight="bold" aria-hidden />
      </button>
    </div>
  );
}
