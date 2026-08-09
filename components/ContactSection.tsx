import Image from "next/image";
import {
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import OpenNowBadge from "@/components/OpenNowBadge";
import ProefweekForm from "@/components/ProefweekForm";
import {
  company,
  ctaMessages,
  images,
  mailtoHref,
  whatsappHref,
} from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-paper-deep">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="max-w-[620px]">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-brick uppercase">
            Contact
          </p>
          <h2 className="mt-4 font-display text-[32px] leading-[1.08] font-extrabold text-ink sm:text-[40px] lg:text-[46px]">
            Kom een week gratis meetrainen.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Laat weten wanneer het jou uitkomt, dan zetten we een proefweek
            voor je klaar. Liever eerst even rondkijken? Dat kan ook.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* Formulier */}
          <Reveal>
            <div
              id="proefweek"
              className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-9"
            >
              <h3 className="font-display text-[20px] font-bold text-ink">
                Proefweek aanvragen
              </h3>
              <p className="mt-2 mb-7 text-[15px] leading-relaxed text-muted">
                Vier vragen, meer niet. Betaalgegevens hoef je nu nog niet in
                te vullen.
              </p>
              <ProefweekForm />
            </div>
          </Reveal>

          {/* Gegevens en locatie */}
          <Reveal delay={1}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
                <h3 className="font-display text-[20px] font-bold text-ink">
                  Direct contact
                </h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <WhatsappLogo
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-brick"
                      aria-hidden
                    />
                    <div>
                      <a
                        href={whatsappHref(ctaMessages.vraag)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[16px] font-medium text-ink underline-offset-4 hover:underline tnum"
                      >
                        {company.whatsappDisplay}
                      </a>
                      <p className="mt-1 text-[14px] text-muted">
                        Dit nummer is alleen bereikbaar via WhatsApp. Appen gaat
                        bij ons een stuk sneller dan bellen.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <EnvelopeSimple
                      size={20}
                      className="mt-0.5 shrink-0 text-brick"
                      aria-hidden
                    />
                    <div>
                      <a
                        href={mailtoHref("Vraag via de website")}
                        className="text-[16px] font-medium break-all text-ink underline-offset-4 hover:underline"
                      >
                        {company.email}
                      </a>
                      <p className="mt-1 text-[14px] text-muted">
                        Voor alles wat langer is dan een appje.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <MapPin
                      size={20}
                      className="mt-0.5 shrink-0 text-brick"
                      aria-hidden
                    />
                    <div>
                      <p className="text-[16px] font-medium text-ink">
                        {company.street}
                      </p>
                      <p className="text-[16px] font-medium text-ink tnum">
                        {company.postalCode} {company.city}
                      </p>
                      <p className="mt-1 text-[14px] text-muted">
                        In de {company.region}. Parkeren kan op de aangewezen
                        plekken bij het pand.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button href={company.mapsUrl} external>
                    Route plannen
                  </Button>
                  <OpenNowBadge />
                </div>
              </div>

              <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl">
                <Image
                  src={images.groupClass.src}
                  alt={images.groupClass.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
