"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Navbar({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLSpanElement | null>(null);

  // Boven een full-bleed hero staat de balk transparant met lichte tekst.
  // Zodra je scrolt of het menu opent, valt hij terug op de papieren balk.
  // De balk staat altijd fixed op dezelfde hoogte: bij het omslaan veranderen
  // alleen kleuren, geen positionering of afmeting, dus de flow blijft staan.
  const light = overHero && !scrolled && !open;

  // Een sentinel bovenaan de pagina in plaats van een scroll-listener:
  // geen reflow per frame, en de balk verdicht precies op het juiste punt.
  useEffect(() => {
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <span
        ref={sentinel}
        aria-hidden
        className="absolute top-10 left-0 h-px w-px"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          light
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line bg-paper/96"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 md:h-[76px]">
          <Link
            href="/"
            className={`font-display text-[19px] font-extrabold tracking-tight transition-colors duration-300 md:text-[21px] ${
              light ? "text-paper" : "text-ink"
            }`}
          >
            THEHOMEGYM<span className="text-signal">.</span>
          </Link>

          <nav
            aria-label="Hoofdmenu"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  light
                    ? "text-paper/85 hover:text-paper"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#proefweek"
              className="hidden rounded-full bg-brick px-5 py-2.5 text-[15px] font-semibold tracking-tight text-paper transition-[background-color,transform] duration-200 hover:bg-brick-deep active:scale-[0.98] sm:inline-flex"
            >
              Gratis proefweek
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden ${
                light
                  ? "border-paper/45 text-paper hover:border-paper"
                  : "border-line-strong text-ink hover:border-ink"
              }`}
            >
              <span
                aria-hidden
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                aria-hidden
                className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobiel-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-paper/97 backdrop-blur-xl lg:hidden"
      >
        <nav
          aria-label="Mobiel menu"
          className="flex h-full flex-col justify-center gap-1 px-6 pb-24"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${60 + i * 45}ms` }}
              className={`border-b border-line py-4 font-display text-[30px] font-bold tracking-tight text-ink transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/#proefweek"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${60 + navLinks.length * 45}ms` }}
            className={`mt-8 inline-flex items-center justify-center rounded-full bg-brick px-6 py-4 text-base font-semibold text-paper transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Gratis proefweek
          </Link>
        </nav>
      </div>
    </>
  );
}
