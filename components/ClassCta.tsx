"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappHref } from "@/lib/content";
import { send } from "@/lib/handoff";
import { track } from "@/lib/track";

// Twee knoppen per les: direct via WhatsApp, of via het formulier met het
// bericht al ingevuld in "Iets wat we moeten weten".
export default function ClassCta({
  name,
  day,
  time,
}: {
  name: string;
  day: string;
  time: string;
}) {
  const message = `Hoi, ik wil graag een gratis proefles ${name} op ${day.toLowerCase()} ${time}.`;
  const les = `${name} ${day.toLowerCase()} ${time}`;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
      <a
        href={whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { location: "rooster", les })}
        className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-4 py-2 text-[14px] font-semibold tracking-tight text-ink transition-[border-color,background-color,transform] duration-200 hover:border-ink hover:bg-paper-deep active:scale-[0.98]"
      >
        <WhatsappLogo size={16} weight="fill" className="text-brick" aria-hidden />
        Gratis proefles aanvragen
      </a>
      <a
        href="#proefweek"
        onClick={() => {
          send("proefweek-note", message);
          track("proefweek_click", { location: "rooster", les });
        }}
        className="text-[14px] font-medium text-muted underline-offset-4 transition-colors duration-200 hover:text-brick hover:underline"
      >
        of via het formulier
      </a>
    </div>
  );
}
