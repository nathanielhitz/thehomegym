# Sitemap

Status: `/sitemap.xml` geeft 404 (HTML-body). Er is geen `app/sitemap.ts`.

## Verwachte inhoud
| URL | Prioriteit | changefreq |
|---|---|---|
| https://www.thehomegym.nl/ | 1.0 | weekly |
| https://www.thehomegym.nl/algemene-voorwaarden | 0.3 | yearly |

Later aanvullen met `/personal-training`, `/groepslessen`, `/privacy`, eventueel `/bedrijfsfitness`.

## Kwaliteitspoorten
- Geen `/api/proefweek` in de sitemap (en Disallow in robots).
- Absolute URL's op het productiedomein, dus `metadataBase` hergebruiken.
- `lastmod` alleen zetten als hij echt klopt (buildtijd is acceptabel bij statische sites).
- Sitemap vermelden in robots.txt en indienen in Search Console na de domeinwissel.

## Implementatie (Next.js App Router)
```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thehomegym.nl";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/algemene-voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
```
