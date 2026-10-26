# SEO-audit Thehomegym · thehomegym.vercel.app

Datum: 26 oktober 2026
Scope: volledige site (2 pagina's: `/` en `/algemene-voorwaarden`; `/api/proefweek` is een POST-endpoint)
Bedrijfstype: lokale dienstverlener, brick-and-mortar sportschool (HealthClub) in Heinenoord, Hoeksche Waard
Status site: Next.js-redesign op Vercel, nog niet live op www.thehomegym.nl (daar staat de oude Wix-site)

## Executive summary

**SEO Health Score: 73 / 100**

| Categorie | Gewicht | Score |
|---|---|---|
| Technische SEO | 22% | 62 |
| Contentkwaliteit | 23% | 78 |
| On-page SEO | 20% | 80 |
| Schema / gestructureerde data | 10% | 70 |
| Performance (CWV) | 10% | 82 |
| AI Search Readiness | 10% | 65 |
| Afbeeldingen | 5% | 75 |

Lighthouse (mobiel / desktop): Performance 89 / 100, Accessibility 97 / 97, Best Practices 100 / 100, SEO 100 / 100.

De inhoud en de conversiestructuur zijn sterk: één duidelijke boodschap, prijzen zichtbaar, trainers met naam en certificering, FAQ met schema, WhatsApp-CTA's met voorgevulde berichten, CLS nul. De punten die de score drukken zijn bijna allemaal "verpakking" rond de livegang: geen robots.txt en sitemap, geen og:image, geen beveiligingsheaders, afhankelijkheid van het Wix-CDN, en buiten de site drie vermeldingen met drie verschillende adressen.

### Top 5 kritieke punten (oplossen voor of bij livegang)
1. **NAP-inconsistentie buiten de site.** Fresha zegt Reedijk 8-11 met openingstijden 10:00 tot 18:00, Trustoo zegt Reedijk 8 in Mijnsheerenland, de site zegt Reedijk 7-J4 Heinenoord. Google en AI-modellen vermengen dit.
2. **robots.txt en sitemap.xml ontbreken** (beide 404 met HTML-body).
3. **15 foto's komen van static.wixstatic.com.** Zodra Wix wordt opgezegd, verdwijnen ze.
4. **Redirectplan onvolledig.** De oude Wix-sitemap bevat 11 URL's (o.a. `/personal-training`, `/groepslessen`, `/fitness`, `/tarieven`, `/over-ons`, `/proefweek`) die niet in de README-redirectlijst staan.
5. **Geen og:image.** Links die via WhatsApp en Instagram gedeeld worden tonen geen afbeelding, terwijl WhatsApp het hoofdkanaal is.

### Top 5 quick wins (elk onder een uur)
1. `app/robots.ts` en `app/sitemap.ts` toevoegen (zie findings/sitemap.md).
2. `app/opengraph-image.tsx` of `public/og.jpg` plus `twitter:card: summary_large_image`.
3. Beveiligingsheaders in `next.config.ts` (nosniff, frame-ancestors, Referrer-Policy, Permissions-Policy).
4. `text-muted` op de rozige tarieven-kaarten donkerder maken (4,31:1 naar minimaal 4,5:1): Lighthouse Accessibility van 97 naar 100.
5. FAQPage-schema van `layout.tsx` naar de homepage verplaatsen en `image`, `geo`, `hasMap`, `@id` aan het HealthClub-schema toevoegen.

## Technische SEO (62)
Sterk: HTTP/2, HSTS preload, TTFB onder 110 ms, statische prerender, echte 404-statuscodes, immutable caching op JS/CSS, geen console-fouten.
Zwak: geen robots.txt, geen sitemap, alleen HSTS als beveiligingsheader, `public/`-assets met `max-age=0`, staging-URL zonder noindex (canonical vangt dit op), dubbele `id="contact"`, redirectlijst onvolledig.
Details: findings/technical.md

## Contentkwaliteit (78)
Sterk: 2.031 woorden met heldere positionering, transparante prijzen, drie trainers met certificeringen, oorsprongsverhaal, zes reviews, acht FAQ's, B1-leesbaarheid, geen duplicatie.
Zwak: één pagina voor zes zoekintenties (personal training, groepslessen, boksen, bedrijfsfitness hebben geen eigen URL), reviews zonder aantal/datum, geen privacypagina, geen KvK/eigenaar, dubbele H3's in Tarieven, boks-dag onzeker.
Details: findings/content.md

## On-page SEO (80)
Sterk: title 54 tekens met merk, categorie, plaats en regio; description 158 tekens met prijs en CTA; één H1; alt-teksten overal; skiplink en aria-labels.
Zwak: geen og:image, geen apple-touch-icon/manifest, interne linking alleen via ankers, review-link is een Google-zoekopdracht.
Details: findings/onpage.md

## Schema en gestructureerde data (70)
Aanwezig en geldig: HealthClub (adres, telefoon, openingstijden, sameAs) en FAQPage.
Ontbreekt: image/logo/geo/hasMap/@id, Offer voor lidmaatschappen, Event/Schedule voor groepslessen, Person voor trainers, WebSite. FAQPage staat ook op de voorwaarden-pagina waar de FAQ niet zichtbaar is.
Details: findings/schema.md

## Performance (82)
| Metriek | Mobiel | Desktop |
|---|---|---|
| LCP | 3,5 s (h1, fontafhankelijk) | 0,7 s |
| CLS | 0,003 | 0,002 |
| TBT | 20 ms | 0 ms |
| Gewicht | 1,33 MB (video 650 KB, poster 231 KB) | 1,73 MB (video 1,03 MB) |

Winst zit in: preload van Hero.jpeg weghalen of verlagen, poster als AVIF/WebP, vijf logo-preloads uitzetten, `sizes` op foto's, logo's op werkelijke grootte, legacy-JS (14 KB) weg via browserslist.
Details: findings/performance.md

## Afbeeldingen (75)
Alle alt-teksten goed, CLS nul, lazy loading correct. Hero-poster JPEG 231 KB zonder modern formaat, logo's 2x tot 4x te groot en 4x herhaald, 15 foto's op het Wix-CDN.
Details: findings/images.md

## AI Search Readiness (65)
Content is uitstekend citeerbaar (feitelijke zinnen, prijzen, FAQ, schema). Verpakking ontbreekt: geen robots.txt met expliciet AI-crawlerbeleid, geen llms.txt, geen datum bij prijzen, externe vermeldingen spreken elkaar tegen.
Details: findings/geo.md

## Lokale SEO
NAP op site en in schema consistent. Buiten de site niet: Fresha en Trustoo wijken af. GBP kon niet geautomatiseerd worden uitgelezen; reviewaantal onbekend. Geen landingspagina per dienst. Omliggende dorpen niet genoemd.
Details: findings/local.md

## Visueel en mobiel
Waardepropositie, bewijs (5,0 op Google, open-status) en twee CTA's staan boven de vouw op 390 px en 1440 px. Geen horizontale scroll, geen overlap. Eén contrastprobleem (4,31:1) op de tarieven-kaarten.
Details: findings/visual.md, screenshots/

## Niet uitgevoerd in deze audit
- CrUX-velddata: PageSpeed-API-quota was vol en het vercel.app-domein heeft geen verkeer. Lab-data via lokale Lighthouse 12 gebruikt.
- Google Search Console, GA4, backlinks (Moz/Bing), DataForSEO: geen credentials in deze omgeving. Backlinkprofiel van een staging-URL is sowieso leeg.
- Google Business Profile: alleen via webzoekopdracht benaderd; adres, tijden en reviewaantal in GBP handmatig controleren.
- Drift-analyse: geen eerdere baseline.
- PDF-rapport: het generatorscript ontbreekt in deze skill-installatie.
