# Thehomegym redesign

Redesign van [thehomegym.nl](https://www.thehomegym.nl) (Wix) naar een eigen
Next.js-site. Gebouwd op basis van de audit en redesign-strategie in de
Opus-analyse, met alleen content die in de crawl van de huidige site staat
(`Sites/thehomegym.nl`).

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # productiebuild
npm start        # productieserver
npm run lint
```

## Stack

- Next.js 16 (App Router, Server Components)
- Tailwind CSS v4 via `@tailwindcss/postcss`, tokens in `app/globals.css`
- TypeScript
- `@phosphor-icons/react` (SSR-import), één icoonfamilie, stroke consistent
- Fonts via `next/font/google`: Archivo (display) en Instrument Sans (body)

## Palet

Eén accentkleur, in twee dieptes. Alles staat in `app/globals.css`.

| Token | Waarde | Waarvoor |
|---|---|---|
| `brick` | `#c3350e` | knoppen, eyebrows, links, iconen. Draagt tekst, dus AA-proof: 5,03:1 op paper en 4,65:1 op paper-deep |
| `brick-deep` | `#a82c0b` | hover en tekst op clay-vlakken |
| `signal` | `#e63b10` | alleen kleine grafische tekens: de punt in het logo, de sterren, de status-stip en het 18+ cijfer. Daar geldt 3:1, dat haalt het ruim |
| `clay` | `#f6ded6` | zachte accentvlakken en badges |

`signal` bewust niet op knoppen: met lichte tekst erop komt die op 3,86:1 en
zakt daarmee door de AA-grens voor normale tekst.

## Structuur

```
app/
  layout.tsx                  navbar, footer, sticky mobiele CTA, JSON-LD
  page.tsx                    homepage, elf secties
  globals.css                 design tokens en reveal-utility
  icon.tsx                    favicon
  algemene-voorwaarden/       volledige voorwaarden als eigen pagina
components/                   één component per sectie
hooks/useInView.ts            IntersectionObserver voor scroll-reveal
lib/content.ts                alle bedrijfsgegevens, prijzen en teksten
```

Alle feitelijke gegevens staan in `lib/content.ts`. Prijs of openingstijd
wijzigen doe je daar, niet in de componenten.

## Wat er is opgelost ten opzichte van de oude site

- WhatsApp-link werkte niet (`?phone` was leeg). Nu overal
  `wa.me/31616925931` met een voorgevulde tekst per plek.
- Openingstijden stonden alleen in een PNG. Nu echte tekst, in het schema
  (`openingHoursSpecification`) en met een "nu open"-indicator.
- Prijzen voor personal training, duo en lifestyle coaching ontbraken op de
  tarievenpagina. Die staan nu compleet in het tarievenblok.
- Adres, telefoon en openingstijden stonden alleen op de contactpagina. Nu
  in de footer, het rooster en de contactsectie.
- Groepslesrooster stond niet op de site ("check de app"). Nu volledig
  zichtbaar met dag, tijd en maximaal aantal deelnemers.
- Inschrijfformulier vroeg direct om NAW en bankgegevens. De proefweek-flow
  vraagt nu vijf dingen (naam, bereikbaarheid, moment, bron, opmerking) en
  gaat via `/api/proefweek` naar `sendLead()`. WhatsApp blijft als
  alternatief beschikbaar met een voorgevuld bericht.
- `LocalBusiness`/`HealthClub`- en `FAQPage`-schema toegevoegd.
- Sticky mobiele actiebalk met WhatsApp, route en proefweek.

## Leads en tracking (voorbereid, nog niet gekoppeld)

- `app/api/proefweek/route.ts` valideert (naam en bereikbaarheid verplicht),
  controleert de honeypot (`website`) en roept `sendLead()` aan.
- `lib/leads.ts` → `sendLead(lead)` is nu een stub: logt `[LEAD]` in de
  serverconsole en wacht 600 ms. Vervangen door Resend of SMTP zonder de
  interface te veranderen. Variabelen staan klaar in `.env.example`
  (`RESEND_API_KEY`, `LEAD_TO_EMAIL`).
- `lib/track.ts` → `track(event, params)` stuurt naar `window.gtag` als die
  bestaat, anders `console.debug('[track]', ...)`. GA4 wordt alleen geladen
  als `NEXT_PUBLIC_GA_ID` gezet is (`app/layout.tsx`).
- Events: `proefweek_click` (location: hero, nav, menu, sticky, stappen),
  `whatsapp_click` (location: hero, sticky, aanbod, faq, contact, footer,
  formulier, bedankt), `route_click` (sticky, contact), `tarief_click`
  (pakket), `form_submit`, `form_success`, `form_error`, `faq_open`
  (vraag), `doel_click` (doel).
- Stappen om dit live te zetten staan in `TODO-LIVE.md`.

## Instelbare content

- `content/promo.ts`: actie "geen inschrijfgeld", aan/uit en tekst.
- `content/doelen.ts`: de doel-chips (Afvallen, Sterker worden, ...) en de
  zin die bij het aanbod verschijnt na een klik.
- `lib/handoff.ts`: doorgeefluik tussen rooster → formulier en chips →
  aanbod (CustomEvent plus sessionStorage, geen extra dependency).

## Beeldmateriaal

De foto's staan lokaal in `public/fotos/` met beschrijvende bestandsnamen.
Het zijn de originelen van het Wix-CDN van de oude site, verkleind naar
maximaal 2000px (sips, kwaliteit 82). De site is dus niet meer afhankelijk
van Wix. Componenten gebruiken `next/image` met `fill` en object-cover; de
uitsnede gebeurt in CSS.

De hero heeft twee achtergrondvideo's, allebei zonder geluid, autoplay,
geknipt uit het origineel in `bronbestanden/`:

- `public/hero-video.mp4` (1,0 MB, 1280×720, 12 s) voor schermen vanaf
  768px: box jumps, sledge op de groene turf en de lachende sporter (22,9 s
  tot 35,0 s uit het origineel).
- `public/hero-video-staand.mp4` (0,7 MB, 540×960, 10,6 s) voor telefoons.
  Een 16:9-beeld staand bijgesneden laat vooral het dak van de hal zien, dus
  dit is een aparte 9:16-montage van vijf shots die staand wél werken: leg
  press, kabelstation, bankdrukken, box jump met de groene schoenen, lach.

`HeroVideo.tsx` kiest in de browser op schermbreedte welk bestand geladen
wordt. Bij `prefers-reduced-motion` of databesparing zet hij geen bron en
blijft de foto `Hero.jpeg` staan (die is ook de poster). De video staat
bewust donker (brightness 0.7, licht ontkleurd) en speelt op 0.75x af, zodat
de beweging niet met tekst en knoppen concurreert. Het onbewerkte origineel
(14 MB, 1080p met audio) en de eerdere 38 s-versie staan in `bronbestanden/`
en worden niet gedeployd. Opnieuw knippen:

```
# liggend
ffmpeg -ss 22.92 -to 35.0 -i bronbestanden/hero-video-origineel.mp4 -vf scale=1280:-2 -an -c:v libx264 -crf 31 -preset slow -pix_fmt yuv420p -movflags +faststart public/hero-video.mp4
# staand (vijf shots, 9:16 uit het midden gesneden)
ffmpeg -i bronbestanden/hero-video-origineel.mp4 -an -filter_complex "[0:v]trim=12.64:14.64,setpts=PTS-STARTPTS[a];[0:v]trim=15.80:18.00,setpts=PTS-STARTPTS[b];[0:v]trim=20.90:22.92,setpts=PTS-STARTPTS[c];[0:v]trim=24.24:26.16,setpts=PTS-STARTPTS[d];[0:v]trim=32.48:35.00,setpts=PTS-STARTPTS[e];[a][b][c][d][e]concat=n=5:v=1:a=0,crop=608:1080:656:0,scale=540:-2[v]" -map "[v]" -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart public/hero-video-staand.mp4
```

De poster/fallback is de foto van de trainer bij het squatrek. Die is
gekozen omdat het de enige eigen liggende foto is met een donkere wand links,
precies waar de tekst overheen valt. De scrims in `Hero.tsx` zijn zo gezet dat
de slechtste pixel achter de tekst op 5,4:1 zit (desktop) en 5,2:1 (mobiel),
ruim boven de AA-eis van 4,5. Vervang je de foto door een lichtere, meet dan
opnieuw of verhoog de scrim.

Eén foto van de oude site is bewust niet overgenomen: de shot met de
battle ropes en de rookmachine (`49ba32_c2d2254...`). Dat is stockbeeld van een
andere sportschool, met rekken en muurteksten die er bij Thehomegym niet zijn.
Voor een site die "kom eens kijken" verkoopt is dat een geloofwaardigheidsrisico.

## Open punten voor de klant

1. **Boksen: zaterdag of zondag?** De oude site zegt in de tekst "Zaterdag
   10:30 - 11:30", terwijl de bestandsnaam van de foto en een Google-review
   over de zondagles gaan. Nu staat zaterdag in `groupClasses`.
2. **Aantal Google-reviews.** Het cijfer 5,0 staat op de oude site, het
   aantal niet. Daarom is `AggregateRating` bewust niet in het schema gezet.
   Zodra het aantal bekend is kan dat erbij.
3. **Inschrijfgeld.** Staat nu op "actie loopt" (`registrationFee`
   in `lib/content.ts`). Zet `actionRunning: false` als de actie voorbij is,
   dan toont het blok gewoon de €15.
4. **Namen van de workout-app en voedingsapp.** Nu generiek beschreven.
5. **Instagram en TikTok.** Er bestaan twee accounts (`thehomegym.club` en
   `thehomegympt`). Nu staat `.club` overal ingesteld.
6. **Bedrijfsfitness Nederland.** Het logo stond op de oude site zonder
   uitleg. Als dit actief is, verdient het een eigen pagina voor werkgevers.
7. **Prijzen personal training.** Alleen "vanaf €45" en duo "vanaf €35" zijn
   bekend. Pakketten of strippenkaarten voor PT ontbreken.
8. **Domein en redirects.** Bij livegang 301's instellen vanaf `/aanmelden`,
   `/actie`, `/inschrijfpagina`, `/12m-inschrijf`, `/6m`, `/kopie-van-6m`,
   `/kopie-van-12m-g`, `/1-op-1`, `/duo` en `/welkom`.
9. **Privacybeleid.** Stond op freeprivacypolicy.com. Hoort op het eigen
   domein, met een cookiebanner als er tracking bij komt.
