# Technische SEO

Geaudit: https://thehomegym.vercel.app (Next.js op Vercel), 26 oktober 2026.

## Wat goed is
- HTTP/2, HSTS met preload, server-respons 20 ms (TTFB 84 tot 107 ms gemeten).
- Statische prerender (x-nextjs-prerender), geen client-side rendering nodig voor de content: alle tekst, koppen en JSON-LD staan in de ruwe HTML.
- `lang="nl"`, viewport-meta, skiplink naar hoofdinhoud, geen console-fouten, geen mislukte requests.
- Onbekende URL's geven een echte 404-statuscode.
- JS- en CSS-chunks hebben `cache-control: immutable` met een jaar.

## Bevindingen

### 1. robots.txt ontbreekt (404 met HTML-body) · Hoog
`/robots.txt` geeft de 404-pagina als HTML terug. Google behandelt dit als "alles toegestaan", maar er is geen Sitemap-verwijzing en geen expliciet beleid voor AI-crawlers. Fix: `app/robots.ts` toevoegen met `Allow: /`, `Disallow: /api/` en `Sitemap: https://www.thehomegym.nl/sitemap.xml`.

### 2. sitemap.xml ontbreekt · Hoog
`/sitemap.xml` geeft 404. Met twee pagina's is het effect klein, maar de sitemap is wel de snelste weg naar indexatie na de domeinwissel. Fix: `app/sitemap.ts` met `/` en `/algemene-voorwaarden`, lastmod op buildtijd.

### 3. Canonical wijst naar www.thehomegym.nl terwijl daar de oude Wix-site staat · Info (wordt Kritiek bij livegang als het misgaat)
Beide pagina's hebben `rel=canonical` naar het productiedomein. Voor een staging-URL is dat correct: thehomegym.vercel.app wordt zo niet apart geïndexeerd. Let op bij livegang: zodra de DNS wijst naar Vercel moet `metadataBase` gelijk blijven en moet de Wix-site echt uit, anders blijven twee sites met dezelfde canonical live.

### 4. Geen `noindex` op de staging-URL · Medium
De vercel.app-URL is openbaar en indexeerbaar. De canonical dekt dit grotendeels af, maar een `X-Robots-Tag: noindex` op het vercel.app-domein (via `headers()` in next.config, alleen als `VERCEL_ENV !== 'production'` of host eindigt op vercel.app) voorkomt dat de demo in Google opduikt.

### 5. Beveiligingsheaders ontbreken · Medium
Aanwezig: alleen `strict-transport-security`. Ontbreekt: `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`. Fix: `headers()` in `next.config.ts`.

### 6. Statische bestanden in `public/` krijgen `max-age=0, must-revalidate` · Laag
`/Hero.jpeg` (231 KB), beide hero-video's (1,03 MB en 649 KB) en het icoon worden bij elk bezoek opnieuw gevalideerd. Fix: header `Cache-Control: public, max-age=31536000, immutable` voor `/Hero.jpeg`, `/hero-video*.mp4` en `/logos/:path*`, en bestandsnamen versieren bij wijziging.

### 7. Dubbele `id="contact"` · Laag
`ContactSection` heeft `<section id="contact">` en `ProefweekForm` heeft een invoerveld met `id="contact"`. Ongeldig HTML en de ankerlink `/#contact` kan naar het veld in plaats van de sectie springen. Hernoem het veld naar `id="bereikbaar"` (en bijbehorend `htmlFor`, `aria-describedby`).

### 8. `access-control-allow-origin: *` op HTML-documenten · Laag
Vercel-standaard voor dit project. Niet schadelijk voor SEO, wel onnodig ruim. Beperken tot `/api/` als er ooit cross-origin nodig is.

### 9. Redirectlijst uit README dekt de oude Wix-sitemap niet · Hoog bij livegang
De oude site publiceert in `pages-sitemap.xml`: `/duo`, `/groepslessen`, `/1-op-1`, `/fitness`, `/proefweek`, `/personal-training`, `/proefweekqr`, `/aanmelden`, `/tarieven`, `/over-ons`, `/algemene-voorwaarden`. De README noemt daarnaast `/actie`, `/inschrijfpagina`, `/12m-inschrijf`, `/6m`, `/kopie-van-6m`, `/kopie-van-12m-g`, `/welkom`. Zie ACTION-PLAN voor de volledige 301-tabel.

## Core Web Vitals (lab, Lighthouse 12, gesimuleerde mobiel)
| Metriek | Mobiel | Desktop | Drempel |
|---|---|---|---|
| LCP | 3,5 s | 0,7 s | < 2,5 s |
| CLS | 0,003 | 0,002 | < 0,1 |
| TBT (proxy voor INP) | 20 ms | 0 ms | < 200 ms |
| FCP | 1,4 s | 0,3 s | < 1,8 s |
| Performance-score | 89 | 100 | |

Geen CrUX-velddata beschikbaar (PageSpeed-API quota vol, en het vercel.app-domein heeft geen verkeer). Zie performance.md.
