"use client";

import { doelen } from "@/content/doelen";
import { send } from "@/lib/handoff";
import { track } from "@/lib/track";

export default function GoalChips() {
  return (
    <ul className="mt-7 flex flex-wrap gap-2">
      {doelen.map((doel) => (
        <li key={doel.id}>
          <a
            href="#aanbod"
            onClick={() => {
              send("doel", doel.id);
              track("doel_click", { doel: doel.label });
            }}
            className="inline-flex items-center rounded-full border border-line-strong bg-paper px-3 py-1.5 text-[13px] font-medium text-ink transition-[border-color,background-color,color,transform] duration-200 hover:border-brick hover:bg-clay hover:text-brick-deep active:scale-[0.98]"
          >
            {doel.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
