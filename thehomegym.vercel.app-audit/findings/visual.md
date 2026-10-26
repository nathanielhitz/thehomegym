# Visueel en mobiel

Screenshots in `screenshots/`: desktop-above-fold.png (1440x900), mobile-above-fold.png (iPhone 13, 390x664), plus full-page varianten.

## Boven de vouw
Desktop: logo, menu met 5 ankers, rode CTA rechtsboven, H1 in drie regels, subtekst, twee knoppen (Gratis proefweek, App ons), sterren "5,0 op Google", "Nu open tot 22:00 · Geen inschrijfgeld". Video speelt af, poster is ongeveer 0,3 s zichtbaar.

Mobiel: logo, hamburger, H1, subtekst, twee volle-breedte knoppen, sterren, openstatus. Alles past binnen 664 px zonder scrollen. Sticky CTA-balk verschijnt na de hero.

Oordeel: waardepropositie, bewijs en actie staan alle drie boven de vouw op beide viewports. Geen horizontale scroll, geen overlap.

## Bevindingen
1. **Contrast van grijze tekst op rozige kaarten · Medium (toegankelijkheid, telt mee in Lighthouse).** `#6b6864` op `#f6ded6` geeft 4,31:1 bij 14 tot 15 px, net onder 4,5:1. Komt voor in de Tarieven-kaarten (prijs-subtekst, voorwaardenregels). Fix: `text-muted` op die achtergrond vervangen door een donkerder grijs, bijvoorbeeld `#5c5955` (circa 5,2:1).
2. **Kleine tikdoelen · Laag.** Playwright telt 32 (mobiel) tot 38 (desktop) links/knoppen kleiner dan 44x44 px. Grotendeels inline tekstlinks en de social iconen in de footer; Lighthouse markeert ze niet als fout omdat de onderlinge afstand groot genoeg is. Social iconen in de footer naar 44 px padding brengen is de enige echte winst.
3. **Hero-video op mobiel · Info.** Staande clip speelt af en leest goed. Bij `prefers-reduced-motion` blijft de still staan (gecontroleerd in Hero.tsx). Prima.
4. **Lange pagina op mobiel · Info.** De full-page mobiel-screenshot is ruim 59.000 px hoog door de rooster-, tarieven- en FAQ-blokken. Dat is acceptabel voor een one-pager met sticky CTA, maar bevestigt dat aparte dienstpagina's ook voor gebruikers logischer zijn.

## Wat goed is
- Lighthouse Accessibility 97, Best Practices 100, SEO 100 op beide viewports.
- Geen layout shift, geen console-fouten.
- Consistente typografie (Archivo voor koppen, Instrument Sans voor tekst), duidelijke rode accentkleur voor de primaire actie.
