import { Check } from "@phosphor-icons/react/dist/ssr";

export default function PointList({
  points,
  className = "",
}: {
  points: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-2 sm:space-y-2.5 ${className}`}>
      {points.map((point) => (
        <li key={point} className="flex gap-2.5 text-[15px] text-muted">
          <Check
            size={16}
            weight="bold"
            className="mt-1 shrink-0 text-brick"
            aria-hidden
          />
          {point}
        </li>
      ))}
    </ul>
  );
}
