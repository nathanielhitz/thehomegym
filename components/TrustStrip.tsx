import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import { certifications, company } from "@/lib/content";

function Logos() {
  return (
    <>
      {certifications.map((cert) => (
        <li key={cert.name} className="flex shrink-0 items-center">
          <Image
            src={cert.src}
            alt={cert.name}
            width={cert.width}
            height={Math.round(cert.width * 0.42)}
            className="h-auto w-auto max-h-9 object-contain"
            style={{ maxWidth: cert.width }}
          />
        </li>
      ))}
    </>
  );
}

export default function TrustStrip() {
  return (
    <section
      aria-label="Beoordeling en aansluitingen"
      className="border-y border-line bg-paper-deep"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 py-8 sm:px-8">
        <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a
            href={company.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
          >
            <span className="flex gap-0.5 text-signal" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} weight="fill" />
              ))}
            </span>
            <span className="text-[15px] text-ink">
              <strong className="font-semibold tnum">
                {company.googleRating}
              </strong>{" "}
              <span className="text-muted group-hover:text-ink">
                op Google, beoordeeld door leden
              </span>
            </span>
          </a>

          {/* Mobiel: één doorlopend lint dat van rechts naar links schuift. */}
          <div className="marquee -mx-5 self-stretch sm:-mx-8 lg:hidden">
            <div className="marquee-track opacity-75 grayscale">
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
          <ul className="hidden items-center gap-x-8 gap-y-5 opacity-75 grayscale lg:flex lg:flex-wrap">
            <Logos />
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
