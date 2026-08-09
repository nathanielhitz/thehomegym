import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-[transform,background-color,color,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-brick text-paper hover:bg-brick-deep",
  secondary:
    "border border-line-strong bg-paper text-ink hover:border-ink hover:bg-paper-deep",
  quiet: "text-ink underline-offset-4 hover:text-brick hover:underline",
};

const sizes = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-6 py-3.5 text-base",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  withArrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  external?: boolean;
  withArrow?: boolean;
  className?: string;
}) {
  const sizeClass = variant === "quiet" ? "" : sizes[size];

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`${base} ${variants[variant]} ${sizeClass} ${className}`}
    >
      {children}
      {withArrow && (
        <span
          aria-hidden
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            variant === "primary" ? "bg-paper/20" : "bg-ink/8"
          }`}
        >
          <ArrowUpRight size={15} weight="bold" />
        </span>
      )}
    </a>
  );
}
