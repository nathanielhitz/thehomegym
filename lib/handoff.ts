"use client";

import { useEffect, useRef } from "react";

// Kleine doorgeefluik tussen losse client-componenten op dezelfde pagina:
// het rooster vult het formulier voor, de doel-chips sturen een zin naar het
// aanbod. Werkt via een CustomEvent (zelfde pagina) en sessionStorage
// (als de ontvanger nog niet gemount is, of je van een andere pagina komt).

type Key = "proefweek-note" | "doel";

const storageKey = (key: Key) => `thehomegym:${key}`;
const eventName = (key: Key) => `handoff:${key}`;

export function send(key: Key, value: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(storageKey(key), value);
  } catch {
    // Privémodus of geblokkeerde opslag: het event alleen is dan genoeg.
  }
  window.dispatchEvent(new CustomEvent(eventName(key), { detail: value }));
}

/**
 * Luistert naar een doorgegeven waarde. Een eerder opgeslagen waarde komt
 * eenmalig binnen (in een volgend frame, zodat er geen setState tijdens het
 * effect zelf gebeurt), daarna live via events.
 */
export function useHandoff(key: Key, onValue: (value: string) => void) {
  const callback = useRef(onValue);
  useEffect(() => {
    callback.current = onValue;
  });

  useEffect(() => {
    let frame = 0;
    try {
      const stored = sessionStorage.getItem(storageKey(key));
      if (stored) {
        sessionStorage.removeItem(storageKey(key));
        frame = requestAnimationFrame(() => callback.current(stored));
      }
    } catch {
      // Geen opslag beschikbaar, prima.
    }

    const onEvent = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (typeof detail === "string") callback.current(detail);
      try {
        sessionStorage.removeItem(storageKey(key));
      } catch {}
    };
    window.addEventListener(eventName(key), onEvent);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(eventName(key), onEvent);
    };
  }, [key]);
}
