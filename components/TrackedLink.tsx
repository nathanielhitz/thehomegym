"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track, type TrackEvent, type TrackParams } from "@/lib/track";

// Gewone <a> met een trackingevent, voor plekken waar Button te zwaar is
// (telefoonnummer in de contactsectie, footerlinks).
export default function TrackedLink({
  event,
  eventParams,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: TrackEvent;
  eventParams?: TrackParams;
  children: ReactNode;
}) {
  return (
    <a {...rest} onClick={() => track(event, eventParams)}>
      {children}
    </a>
  );
}
