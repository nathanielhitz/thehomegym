# Performance (Core Web Vitals)

Bron: Lighthouse 12 via npx met de lokale Chromium (mobiel: gesimuleerde Moto G met 4G-throttling; desktop-preset), plus Playwright-metingen zonder throttling (iPhone 13 en 1440x900).

## Samenvatting
| | Mobiel (LH) | Desktop (LH) | Mobiel (Playwright, onbeperkt) |
|---|---|---|---|
| Performance | 89 | 100 | |
| LCP | 3,5 s | 0,7 s | 232 ms |
| FCP | 1,4 s | 0,3 s | |
| Speed Index | 3,7 s | 0,6 s | |
| TBT | 20 ms | 0 ms | |
| CLS | 0,003 | 0,002 | 0,000 |
| Max Potential FID | 360 ms | 20 ms | |
| Totale overdracht | 1,33 MB | | 1,39 MB (mobiel), 1,73 MB (desktop) |
| Requests | 28 | | 26 / 28 |
| DOM-grootte | 853 elementen | | |

LCP-element op beide: de `<h1>` in de hero (tekst, dus afhankelijk van het laden van het Archivo-font). De video is `aria-hidden` en telt niet mee.

## Bevindingen

### 1. LCP mobiel 3,5 s, net buiten de groene zone · Hoog
De h1 is het LCP-element. De keten is: HTML (30 KB) -> CSS (9 KB) -> twee font-preloads (woff2) -> render. Op throttled 4G schuift dat tot 3,5 s. Opties, in volgorde van effect:
- `font-display: swap` staat al aan, maar met `adjustFontFallback` van next/font en een `size-adjust` fallback rendert de h1 direct in de systeemfont en wisselt daarna. Controleer dat `Archivo` de preload echt gebruikt (wel zo: twee `<link rel=preload as=font>`).
- Haal de preload van `/Hero.jpeg` weg of maak hem `fetchpriority="low"`. De JPEG (231 KB) wordt nu met hoge prioriteit opgehaald terwijl de video erbovenop afspeelt en de poster slechts een fractie van een seconde zichtbaar is. Dit concurreert met de fonts om bandbreedte.
- Beperk de vijf logo-preloads (`<link rel=preload as=image imagesrcset>`): dat zijn 5 extra high-priority requests boven de vouw voor logo's van 32 px hoog. Zet `priority` op die `next/image`-logo's uit.

### 2. Hero-poster als JPEG van 231 KB · Medium
`modern-image-formats` schat 138 KB besparing. Lever de poster als WebP/AVIF van circa 1600 px breed (nu 231 KB JPEG) en gebruik voor mobiel een staande variant, net als bij de video.

### 3. Hero-video 1,03 MB (desktop) en 649 KB (mobiel) · Medium
`preload="metadata"` is goed gekozen, maar de volledige video wordt in Playwright toch meteen binnengehaald (1,03 MB in de `video`-categorie). Autoplay dwingt dat af. Overwegingen: een kortere loop (al deels gedaan), encoderen naar H.265/AV1 met H.264-fallback, of de video pas starten na `requestIdleCallback`/eerste interactie en de poster tot die tijd tonen.

### 4. Afbeeldingen niet responsive genoeg · Laag
`uses-responsive-images`: 65 KB (mobiel) tot 80 KB (desktop). De Wix-CDN-foto's via `next/image` krijgen geen `sizes`-attribuut dat bij de werkelijke breedte past; de drie grootste komen ieder 15 tot 29 KB te groot binnen. De vijf partnerlogo's worden geladen op 2x tot 4x hun weergavegrootte (bijvoorbeeld 562x128 geleverd, 141x32 getoond). Voeg `sizes` toe en verlaag `width`/`height` van de logo's in `lib/content.ts`.

### 5. Afhankelijkheid van static.wixstatic.com · Medium (bij livegang Hoog)
Alle 15 contentfoto's komen via `next/image` van het Wix-CDN. Zodra de Wix-site wordt opgezegd kunnen die URL's verdwijnen en toont de site kapotte afbeeldingen. Staat al in TODO-LIVE; hier nogmaals als risico met deadline voor livegang.

### 6. Legacy JavaScript, 14 KB · Laag
Polyfills voor oude browsers in de Next-bundle. Een `browserslist` die alleen moderne browsers target haalt dit weg.

### 7. DOM van 853 elementen · Info
Prima voor een one-pager met rooster, tarieven en FAQ. Geen actie nodig.

## Wat goed is
- CLS praktisch nul op beide viewports. Breedte/hoogte staan op alle `next/image`-afbeeldingen; de hero heeft vaste hoogte.
- TBT 20 ms: de hydratie is licht (JS totaal 176 KB gecomprimeerd).
- Fonts via next/font met preload en `display: swap`, geen externe fontservers.
- Geen render-blocking derde partijen; GA4 laadt pas als `NEXT_PUBLIC_GA_ID` gezet is.
