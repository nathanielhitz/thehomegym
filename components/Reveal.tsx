"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: ElementType;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const delayClass = delay ? `reveal-d${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
