import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

/* Kop van een dienstpagina: label, H1, intro en knoppen links, foto rechts.
   Geen full-bleed video zoals de homepage; de pagina is een verdieping en
   mag rustiger beginnen. */
export default function PageIntro({
  label,
  title,
  intro,
  image,
  children,
}: {
  label: string;
  title: ReactNode;
  intro: string;
  image: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="bg-paper-deep pt-24 md:pt-28">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 pb-12 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-center md:pb-16 lg:gap-16">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
          >
            <ArrowLeft size={15} aria-hidden />
            Thehomegym
          </Link>
          <p className="mt-6 text-[12px] font-semibold tracking-[0.18em] text-brick uppercase">
            {label}
          </p>
          <h1 className="mt-4 max-w-[18ch] font-display text-[36px] leading-[1.05] font-extrabold text-ink sm:text-[46px] lg:text-[54px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
          {children && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {children}
            </div>
          )}
        </Reveal>

        <Reveal delay={1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] md:aspect-[4/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
