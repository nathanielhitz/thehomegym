# On-page SEO

## Homepage
| Element | Waarde | Oordeel |
|---|---|---|
| Title | Thehomegym · Sportschool in Heinenoord, Hoeksche Waard (54 tekens) | Goed: merk, categorie, plaats, regio |
| Meta description | Kleinschalige sportschool in Heinenoord voor 18-plus. Onbeperkt fitness vanaf 45 euro per maand, personal training en groepslessen. Vraag een gratis proefweek aan. (158 tekens) | Goed, met prijs en CTA |
| H1 | De persoonlijke sportschool van Heinenoord. | Goed, 1 H1 |
| Canonical | https://www.thehomegym.nl | Correct voor staging |
| OG/Twitter | title, description, site_name, locale, type, card=summary | Geen `og:image` |
| Meta keywords | 4 termen | Geen effect bij Google; onschadelijk |
| Favicon | /icon (32x32 PNG, 397 bytes) | Geen apple-touch-icon, geen 180/512 px |

## Algemene voorwaarden
| Element | Waarde |
|---|---|
| Title | Algemene voorwaarden · Thehomegym |
| Meta description | aanwezig (158 tekens) |
| H1 | Algemene voorwaarden |
| Canonical | https://www.thehomegym.nl/algemene-voorwaarden |

## Bevindingen

### 1. Geen `og:image` · Hoog
Gedeelde links op WhatsApp, Facebook en Instagram tonen geen afbeelding. Voor een sportschool die via WhatsApp converteert is dit de belangrijkste on-page misser. Fix: `app/opengraph-image.tsx` (1200x630) of een statische `public/og.jpg` plus `openGraph.images` in de metadata. Zet ook `twitter:card` op `summary_large_image`.

### 2. Alleen één interne pagina, interne linking is anker-gebaseerd · Medium
Alle navigatie zijn `#`-ankers; de enige echte interne link is naar de voorwaarden. Google ziet één document. Zie content.md, bevinding 1: verdiepende pagina's geven interne linkwaarde en extra rankingmogelijkheden.

### 3. Title benut "Hoeksche Waard" wel, "personal training" niet · Laag
Overweeg: "Sportschool en personal training in Heinenoord · Thehomegym" als er geen aparte PT-pagina komt. Als die er wel komt, laat de title zoals hij is.

### 4. Apple-touch-icon en manifest ontbreken · Laag
`/manifest.webmanifest` en `apple-touch-icon` geven 404. Voeg `app/apple-icon.tsx` (180x180) en `app/manifest.ts` toe; dan ziet "zet op beginscherm" er goed uit en toont Google het juiste icoon in mobiele resultaten.

### 5. Links naar Google-reviews is een zoekopdracht · Laag
`https://www.google.com/search?q=Thehomegym+Heinenoord+reviews` landt op een SERP in plaats van op het profiel. Gebruik de "Reviews schrijven/lezen"-URL uit het Business Profile.

### 6. Social links met tracking-neutrale profielen · Info
Facebook-link is een `profile.php?id=` URL; als de pagina een vanity-URL heeft, gebruik die (consistenter voor `sameAs`).

## Wat goed is
- Eén H1, logische H2-sectiestructuur die de navigatie spiegelt.
- Elk beeld heeft een beschrijvend Nederlands alt-attribuut; de decoratieve hero-still is terecht `alt=""` met `aria-hidden`.
- WhatsApp-CTA's met voorgevulde berichten per lidmaatschap en per les: uitstekend voor conversie en meetbaar via `track()`.
- Skiplink, `aria-label` op menu's, `aria-expanded` op de menuknop.
