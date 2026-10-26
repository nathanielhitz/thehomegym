# Van demo naar live

Checklist om de demo echt te laten werken. Alles hieronder raakt alleen
configuratie en één functie; de UI is af.

## Leads per e-mail

- [ ] Resend-account aanmaken op resend.com en het domein `thehomegym.nl`
      verifiëren (SPF en DKIM-records bij de domeinregistrar).
- [ ] API key aanmaken in Resend.
- [ ] `npm install resend` en `sendLead()` in `lib/leads.ts` implementeren:
      mail naar `LEAD_TO_EMAIL` met naam, bereikbaarheid, moment, bron en
      opmerking. Interface blijft `sendLead(lead): Promise<void>`.
- [ ] In Vercel bij het project de env-variabelen zetten:
      `RESEND_API_KEY` en `LEAD_TO_EMAIL=personaltraining@thehomegym.nl`.
- [ ] Testaanvraag doen via de site en controleren dat de mail aankomt,
      ook in de spamfolder kijken.

## Analytics

- [ ] GA4-property aanmaken in Google Analytics en de Measurement ID
      (`G-XXXXXXX`) kopiëren.
- [ ] In Vercel `NEXT_PUBLIC_GA_ID` zetten en opnieuw deployen. Het script
      laadt pas als die variabele bestaat.
- [ ] In GA4 de events als conversie markeren: `form_success`,
      `whatsapp_click`, `proefweek_click`.
- [x] Privacyverklaring staat op `/privacy` (eigen domein).
- [ ] Cookiebanner toevoegen zodra GA4 aan staat; de privacyverklaring
      belooft dat statistieken pas na toestemming draaien.
- [ ] Optioneel Meta Pixel: stappen staan in de comment bovenaan
      `lib/track.ts`.

## Domein

- [ ] Domein `thehomegym.nl` koppelen in Vercel (Settings → Domains) en de
      DNS-records bij de huidige registrar aanpassen (A of CNAME).
- [ ] Oude Wix-site uitzetten na de overstap.
- [x] 301-redirects van de oude URL's staan in `next.config.ts` (alle paden
      uit de oude Wix-sitemap plus de README-lijst). Na livegang testen.
- [x] Foto's van het Wix-CDN staan nu in `public/fotos/`.

## SEO (uit de audit van 26 okt 2026)

- [x] `app/robots.ts`, `app/sitemap.ts` en `app/opengraph-image.tsx` toegevoegd.
- [x] Fase 2 gedaan: beveiligingsheaders en cache-headers in `next.config.ts`,
      noindex op *.vercel.app, schema uitgebreid (`lib/schema.ts`: geo, hasMap,
      offers, trainers, WebSite; FAQ alleen op home), contrast `--color-muted`
      naar #5f5c58, privacypagina `/privacy`, `apple-icon` en `manifest`,
      hero-poster als WebP, logo's lazy en op halve maat.
- [x] Fase 3 gedaan: pagina's `/personal-training` en `/groepslessen` met eigen
      og-image, Service/Breadcrumb/FAQ-schema en links vanuit aanbod, rooster
      en footer; `public/llms.txt`; bereikbaarheidszin met omliggende dorpen;
      prijsdatum onder de tarieven (`pricesCheckedLabel` in `lib/content.ts`,
      bijwerken bij elke prijswijziging).
- [ ] Event-schema voor de groepslessen pas toevoegen als de boks-dag
      bevestigd is.
- [ ] Geo-coördinaten in `lib/schema.ts` zijn van OpenStreetMap (Reedijk 7);
      vervangen door de exacte positie uit Google Business Profile.
- [ ] Fresha en Trustoo laten corrigeren naar Reedijk 7-J4, 3274 KE Heinenoord
      en de echte openingstijden (Fresha zegt nu Reedijk 8-11 en 10:00-18:00,
      Trustoo zegt Reedijk 8 in Mijnsheerenland). Ook GBP, Facebook-info,
      Instagram-bio, Apple Maps en Bing Places nalopen.
- [ ] Reviewaantal en de GBP-reviewlink (place-id) opvragen; dan
      "5,0 op Google (n reviews)" tonen en `AggregateRating` toevoegen.
- [ ] Boks-dag bevestigen (zaterdag of zondag).
- [ ] Na domeinwissel: Search Console verifiëren, sitemap indienen.
- Rest van het actieplan: `thehomegym.vercel.app-audit/ACTION-PLAN.md`.

## Content

- [ ] Promo "geen inschrijfgeld": aan of uit zetten in `content/promo.ts`.
- [ ] Leeftijdsgrens personal training (16 jaar met toestemming) laten
      bevestigen en ook in de algemene voorwaarden opnemen.
