"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Liggende loop (16:9) voor schermen vanaf 768px. */
  src: string;
  /** Staande loop (9:16) voor telefoons, apart geknipt zodat de actie in
      beeld blijft in plaats van alleen het dak van de hal. */
  srcMobile: string;
  poster: string;
  className?: string;
};

/* Achtergrondvideo van de hero. Autoplay kan alleen zonder geluid, playsInline
   voorkomt fullscreen op iOS. Hij speelt vertraagd af (0.75x): beweging trekt
   het oog, en zo blijft de zaal sfeer in plaats van hoofdrol naast de tekst.

   De bron wordt pas in de browser gezet: de liggende versie vanaf 768px, de
   staande versie daaronder. Bij prefers-reduced-motion of databesparing wordt
   er geen bron gezet en blijft het bij de poster, dus geen byte video. */
export default function HeroVideo({ src, srcMobile, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    const wantsVideo =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !connection?.saveData;
    if (!wantsVideo) return;

    const wide = window.matchMedia("(min-width: 768px)").matches;
    video.src = wide ? src : srcMobile;
    video.playbackRate = 0.75;
    // Autoplay kan geweigerd worden; dan blijft de poster gewoon staan.
    video.play().catch(() => {});
  }, [src, srcMobile]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      className={className}
    />
  );
}
