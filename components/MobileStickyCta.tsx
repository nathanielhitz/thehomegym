import {
  MapPin,
  Barbell,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { company, ctaMessages, whatsappHref } from "@/lib/content";

export default function MobileStickyCta() {
  return (
    <nav
      aria-label="Snelle acties"
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-[var(--cta-bar)] border-t border-line bg-paper/96 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={whatsappHref(ctaMessages.vraag)}
        target="_blank"
        rel="noopener noreferrer"
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
        className="flex flex-1 items-center justify-center gap-2 py-3 text-[14px] font-semibold tracking-tight text-ink transition-transform duration-200 active:scale-[0.98]"
      >
        <MapPin size={18} aria-hidden />
        Route
      </a>

      <a
        href="#proefweek"
        className="flex flex-[1.2] items-center justify-center gap-2 bg-brick py-3 text-[14px] font-semibold tracking-tight text-paper transition-transform duration-200 active:scale-[0.98]"
      >
        <Barbell size={18} weight="fill" aria-hidden />
        Proefweek
      </a>
    </nav>
  );
}
