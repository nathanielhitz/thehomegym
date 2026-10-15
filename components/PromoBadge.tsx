import { Tag } from "@phosphor-icons/react/dist/ssr";
import { promo } from "@/content/promo";

// Kleine pill met de lopende actie. Rendert niets als de actie uit staat.
export default function PromoBadge({
  className = "",
  tone = "light",
}: {
  className?: string;
  /** light: op donkere foto (hero), clay: op papier (tarieven) */
  tone?: "light" | "clay";
}) {
  if (!promo.active) return null;

  const toneClass =
    tone === "light"
      ? "border-paper/30 bg-paper/15 text-paper backdrop-blur-sm"
      : "border-brick/30 bg-clay text-brick-deep";

  return (
    <span
      className={`inline-flex h-8 items-center gap-2 rounded-full border px-3 text-[13px] font-medium ${toneClass} ${className}`}
    >
      <Tag size={14} weight="fill" aria-hidden className="shrink-0" />
      {promo.label}
    </span>
  );
}
