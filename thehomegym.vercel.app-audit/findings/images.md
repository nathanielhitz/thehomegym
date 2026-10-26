# Afbeeldingen

Totaal 36 `<img>` op de homepage (waarvan 20 logo-herhalingen in de scrollende logostrip) plus 1 `<video>` met poster.

## Wat goed is
- Alle contentfoto's hebben een beschrijvend Nederlands alt-attribuut ("Trainer van Thehomegym kijkt geknield mee met de squat van een lid").
- Decoratieve hero-still: `alt=""` en `aria-hidden`, correct.
- `next/image` met width/height, lazy loading onder de vouw, eager boven de vouw. CLS nul.
- Hero-video is `aria-hidden`, `muted`, `playsInline`, `preload="metadata"`, met poster.

## Bevindingen
| # | Bevinding | Ernst | Fix |
|---|---|---|---|
| 1 | Hero-poster `/Hero.jpeg` 231 KB JPEG, geen WebP/AVIF, geen responsive varianten | Medium | Converteer naar AVIF/WebP, lever via `next/image` met `sizes="100vw"` en `priority`, verwijder de handmatige preload |
| 2 | Partnerlogo's 2x tot 4x te groot geleverd (bijv. 562x128 getoond op 141x32) en vijf keer gepreload | Laag | `width`/`height` in `lib/content.ts` halveren, `priority` weg, `sizes` toevoegen |
| 3 | Logostrip herhaalt 5 logo's 4x in de DOM (20 img's) | Laag | Kopieën `aria-hidden` en `alt=""` geven, of CSS-animatie met 2 kopieën |
| 4 | 15 foto's van static.wixstatic.com | Hoog bij livegang | Kopieer naar `public/fotos/` of Vercel Blob voor de Wix-opzegging |
| 5 | `sizes` ontbreekt op de Wix-foto's, 65 tot 80 KB te veel | Laag | `sizes="(min-width:1024px) 50vw, 100vw"` per context |
| 6 | Geen `og:image` | Hoog | Zie onpage.md |
| 7 | Geen bestandsnamen met zoekwoorden (Wix-hashes) | Laag | Bij verhuizen hernoemen: `thehomegym-heinenoord-personal-training.jpg` |
