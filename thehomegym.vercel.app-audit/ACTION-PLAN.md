# Actieplan Thehomegym

Status 26 okt 2026: fase 1, 2 en 3 zijn in code uitgevoerd (fase 3 zonder /bedrijfsfitness en zonder Event-schema, die wachten op de klant) (zie TODO-LIVE.md), behalve de punten die bij de klant liggen (6, 7, 8) en de exacte GBP-coördinaten voor het schema. KvK stond al in footer en voorwaarden.

Prioriteit: Kritiek > Hoog > Medium > Laag. Inspanning is een schatting voor Nathaniel; "klant" betekent dat de eigenaren iets moeten aanleveren of doen.

## Fase 1 · Kritiek en Hoog, voor livegang (week 1)

| # | Actie | Prio | Inspanning | Wie |
|---|---|---|---|---|
| 1 | `app/robots.ts`: Allow /, Disallow /api/, Sitemap-regel, expliciete regels voor GPTBot/ClaudeBot/PerplexityBot/Google-Extended | Hoog | 15 min | Nathaniel |
| 2 | `app/sitemap.ts` met `/` en `/algemene-voorwaarden` (findings/sitemap.md) | Hoog | 15 min | Nathaniel |
| 3 | `og:image` 1200x630 via `app/opengraph-image.tsx` of `public/og.jpg`; `twitter:card` naar `summary_large_image` | Hoog | 45 min | Nathaniel |
| 4 | Foto's van static.wixstatic.com naar `public/fotos/` met zoekwoord-bestandsnamen, `next/image` lokaal, `remotePatterns` weg | Hoog | 1,5 uur | Nathaniel |
| 5 | Volledige 301-tabel in `next.config.ts` `redirects()` (zie onder) | Hoog | 30 min | Nathaniel |
| 6 | Klant vraagt Fresha en Trustoo om adres (Reedijk 7-J4, 3274 KE Heinenoord) en openingstijden te corrigeren of de vermelding te verwijderen; zelf controleren: GBP, Facebook-info, Instagram-bio, Apple Maps, Bing Places | Hoog | 30 min + klant | Klant + Nathaniel |
| 7 | Reviewaantal en GBP review-link (place-id) opvragen; "5,0 op Google (n reviews)" tonen en `AggregateRating` toevoegen | Hoog | 20 min + klant | Klant + Nathaniel |
| 8 | Bevestig boks-dag (zaterdag of zondag) | Hoog | klant | Klant |

### 301-redirects (oude Wix-URL's)
| Oud | Nieuw |
|---|---|
| /personal-training, /1-op-1, /duo | /#aanbod (later: /personal-training) |
| /groepslessen | /#rooster (later: /groepslessen) |
| /fitness | /#aanbod |
| /tarieven, /6m, /kopie-van-6m, /12m-inschrijf, /kopie-van-12m-g, /actie, /inschrijfpagina | /#tarieven |
| /proefweek, /proefweekqr, /aanmelden, /welkom | /#proefweek |
| /over-ons | /#team |
| /algemene-voorwaarden | /algemene-voorwaarden (gelijk, geen redirect nodig) |

Let op: Next.js-redirects naar een URL met `#` werken, maar Google ziet de fragment-loze bestemming. Als de dienstpagina's uit fase 3 er komen, redirects daarheen bijwerken.

## Fase 2 · High-impact verbeteringen (week 2 en 3)

| # | Actie | Prio | Inspanning |
|---|---|---|---|
| 9 | Beveiligingsheaders in `next.config.ts`: `X-Content-Type-Options: nosniff`, `Content-Security-Policy: frame-ancestors 'self'`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` | Medium | 20 min |
| 10 | `Cache-Control: public, max-age=31536000, immutable` voor `/Hero.jpeg`, `/hero-video*.mp4`, `/logos/:path*`, `/fotos/:path*` | Laag | 10 min |
| 11 | Schema uitbreiden: `@id`, `image`, `logo`, `geo`, `hasMap` op HealthClub; `WebSite`; `makesOffer` met Offer per lidmaatschap; `employee` Person voor de trainers; FAQPage alleen op `/` | Medium | 1 uur |
| 12 | Contrast `text-muted` op `bg-[#f6ded6]`-kaarten naar minimaal 4,5:1 | Medium | 10 min |
| 13 | LCP mobiel: preload van `/Hero.jpeg` weg of `fetchpriority=low`, poster als AVIF/WebP via `next/image`, `priority` van de vijf logo's af, `sizes` op alle foto's, logo-afmetingen halveren | Medium | 1 uur |
| 14 | `/privacy`-pagina op het eigen domein plus cookiebanner zodra GA4 aan gaat; KvK en rechtsvorm in footer en voorwaarden | Medium | 1 uur + klant |
| 15 | `id="contact"` op het formulierveld hernoemen; dubbele H3's in Tarieven uniek maken | Laag | 15 min |
| 16 | `app/apple-icon.tsx` (180 px) en `app/manifest.ts` | Laag | 20 min |
| 17 | Staging-noindex: `X-Robots-Tag: noindex` als host op `vercel.app` eindigt | Medium | 15 min |

## Fase 3 · Content en autoriteit (maand 2)

| # | Actie | Prio | Inspanning |
|---|---|---|---|
| 18 | Pagina `/personal-training`: Rick en Stef, intake, Full Body Scan, prijzen vanaf 45 euro en duo vanaf 35, FAQ-subset; interne links vanuit Aanbod en Team | Hoog | 3 uur |
| 19 | Pagina `/groepslessen`: rooster, strippenkaarten, boksen, circuit, BBB, proefles-CTA per les | Hoog | 2,5 uur |
| 20 | Eventueel `/bedrijfsfitness` voor werkgevers in de Hoeksche Waard (alleen als het aanbod actief is) | Medium | 2 uur + klant |
| 21 | Alinea "Waar komen onze leden vandaan" met omliggende dorpen in één natuurlijke zin | Laag | 15 min |
| 22 | `public/llms.txt` met feitenblok en sectielinks; "Prijzen geldig vanaf <datum>" bij de tarieven | Laag | 30 min |
| 23 | `Event`/`eventSchedule`-schema voor de vier groepslessen, pas na bevestiging van het rooster | Laag | 45 min |
| 24 | Reviewstrategie met klant: na elke proefweek een WhatsApp met de GBP-reviewlink | Medium | klant |

## Fase 4 · Monitoring (doorlopend)

| # | Actie |
|---|---|
| 25 | Na domeinwissel: Search Console verifiëren, sitemap indienen, "URL-inspectie" op `/`, oude Wix-URL's in het Verwijderingen-rapport volgen |
| 26 | GA4-conversies `form_success`, `whatsapp_click`, `proefweek_click` controleren in de eerste week |
| 27 | Na 28 dagen CrUX-data in Search Console (Core Web Vitals-rapport) nalopen; doel LCP mobiel onder 2,5 s |
| 28 | Maandelijks: GBP-reviews, NAP-controle bij Fresha/Trustoo/Facebook, rankings voor "sportschool Heinenoord", "personal trainer Heinenoord", "sportschool Hoeksche Waard" |
| 29 | Deze audit over drie maanden herhalen op www.thehomegym.nl als baseline voor drift |
