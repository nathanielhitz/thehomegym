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
- [ ] Cookiebanner en privacyverklaring op het eigen domein regelen
      (nu nog freeprivacypolicy.com), verplicht zodra GA4 aan staat.
- [ ] Optioneel Meta Pixel: stappen staan in de comment bovenaan
      `lib/track.ts`.

## Domein

- [ ] Domein `thehomegym.nl` koppelen in Vercel (Settings → Domains) en de
      DNS-records bij de huidige registrar aanpassen (A of CNAME).
- [ ] Oude Wix-site uitzetten na de overstap.
- [ ] 301-redirects van de oude URL's instellen (lijst staat in README.md
      onder open punten).
- [ ] Foto's van het Wix-CDN vervangen door eigen bestanden in `public/`.

## Content

- [ ] Promo "geen inschrijfgeld": aan of uit zetten in `content/promo.ts`.
- [ ] Leeftijdsgrens personal training (16 jaar met toestemming) laten
      bevestigen en ook in de algemene voorwaarden opnemen.
