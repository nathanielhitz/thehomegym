import Image from "next/image";
import Reveal from "@/components/Reveal";
import { certifications } from "@/lib/content";

function Logos() {
  return (
    <>
      {certifications.map((cert) => (
        <li key={cert.name} className="flex shrink-0 items-center">
          {/* brightness-0 invert dwingt elk logo naar effen wit; de bron is al
              wit-op-transparant, dus dit is vooral een vangnet. Lazy: eager
              zou vijf preloads boven de hero zetten die met de fonts om
              bandbreedte vechten. De strip staat direct onder de hero, dus de
              browser haalt ze toch meteen op; de kopieën in het lint delen
              dezelfde bestanden. */}
          <Image
            src={cert.src}
            alt={cert.name}
            width={cert.width}
            height={cert.height}
            sizes="(min-width: 768px) 160px, 140px"
            className="h-7 w-auto brightness-0 invert opacity-70 transition-opacity duration-200 hover:opacity-100 md:h-8"
          />
        </li>
      ))}
    </>
  );
}

// De Google-score staat al in de hero; hier alleen de aansluitingen.
export default function TrustStrip() {
  return (
    <section
      aria-label="Beoordeling en aansluitingen"
      className="border-t border-paper/12 bg-ink"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-8 sm:px-8">
        <Reveal className="flex flex-col gap-5">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-paper/60 uppercase">
            Aangesloten bij
          </p>

          {/* Mobiel: één doorlopend lint dat rustig van rechts naar links schuift. */}
          <div className="marquee -mx-5 sm:-mx-8 lg:hidden">
            <div className="marquee-track">
              {[0, 1, 2].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy > 0 || undefined}
                  className="flex shrink-0 items-center gap-x-10 pr-10"
                >
                  <Logos />
                </ul>
              ))}
            </div>
          </div>

          {/* Vanaf lg past alles naast elkaar, dan blijft het stilstaan. */}
          <ul className="hidden items-center gap-x-10 gap-y-5 lg:flex lg:flex-wrap">
            <Logos />
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
