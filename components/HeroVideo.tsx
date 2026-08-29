"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

/* Achtergrondvideo van de hero. Autoplay kan alleen zonder geluid, playsInline
   voorkomt fullscreen op iOS. Hij speelt vertraagd af (0.75x): beweging trekt
   het oog, en zo blijft de zaal sfeer in plaats van hoofdrol naast de tekst. */
export default function HeroVideo({ src, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = 0.75;
    // Autoplay kan geweigerd worden; dan blijft de poster gewoon staan.
    video.play().catch(() => {});
  }, []);

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
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
