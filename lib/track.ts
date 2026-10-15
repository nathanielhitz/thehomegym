// Eén plek voor alle events. Zolang er geen GA4 geladen is (geen
// NEXT_PUBLIC_GA_ID), komt alles in de browserconsole terecht als
// [track] event {params}. Zo zie je in de demo precies wat er vuurt.

export type TrackEvent =
  | "proefweek_click"
  | "whatsapp_click"
  | "route_click"
  | "tarief_click"
  | "form_submit"
  | "form_success"
  | "form_error"
  | "faq_open"
  | "doel_click";

export type TrackParams = Record<string, string | number | boolean | undefined>;

type Gtag = (command: "event", name: string, params?: TrackParams) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function track(event: TrackEvent, params?: TrackParams) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
    return;
  }

  console.debug("[track]", event, params ?? {});
}
