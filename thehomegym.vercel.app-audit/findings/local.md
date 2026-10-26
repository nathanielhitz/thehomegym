# Lokale SEO

Bedrijfstype: brick-and-mortar sportschool (klanten komen naar het pand), lokale dienstverlener, branche fitness/health club.

## NAP op de site
| Veld | Site | Schema |
|---|---|---|
| Naam | Thehomegym | Thehomegym |
| Adres | Reedijk 7-J4, 3274 KE Heinenoord | idem |
| Telefoon | 06 16 92 59 31 (WhatsApp) | +31616925931 |
| E-mail | personaltraining@thehomegym.nl | idem |
| Openingstijden | ma t/m vr 09:00-22:00, za 09:00-21:00, zo 10:00-20:00 | idem |

Site en schema zijn onderling consistent.

## NAP buiten de site (gevonden via webzoekopdracht, 26 okt 2026)
| Bron | Adres | Openingstijden | Afwijking |
|---|---|---|---|
| Fresha | Reedijk 8-11, 3274 KE Heinenoord | ma-vr 10:00-18:00, za 9:00-16:00, zo 10:00-20:00 | Ander huisnummer, andere tijden |
| Trustoo | Reedijk 8, Mijnsheerenland | | Ander huisnummer, andere plaats |
| Stagemarkt | Reedijk 7j4, Heinenoord | | Schrijfwijze |
| Oude Wix-site | Reedijk, Heinenoord | | |

Dit is de belangrijkste lokale bevinding: drie vermeldingen met drie verschillende huisnummers en twee plaatsnamen. Google weegt NAP-consistentie zwaar voor de local pack. Het Google Business Profile zelf kon ik niet geautomatiseerd uitlezen (geen DataForSEO/Places-API in deze sessie), dus controleer handmatig welk adres en welke tijden daar staan.

## Bevindingen
1. **NAP-inconsistentie bij Fresha en Trustoo · Hoog.** Laat de eigenaren beide profielen bijwerken naar Reedijk 7-J4, 3274 KE Heinenoord en de huidige openingstijden, of de Fresha-vermelding verwijderen als die niet meer gebruikt wordt. Zoek daarna ook: Facebook-pagina-info, Instagram-bio, Apple Maps, Bing Places, KvK-adres.
2. **Google Business Profile niet gekoppeld vanuit de site · Medium.** De review-link is een zoekopdracht. Gebruik de place-id-URL voor `hasMap` in het schema, de "5,0 op Google"-knop en de routeknop. Vraag de eigenaren de link "Vraag om reviews" uit het GBP-dashboard; die is korter en converteert beter.
3. **Reviewaantal onbekend · Medium.** Zie content.md. Zonder aantal is "5,0" minder geloofwaardig en is er geen `AggregateRating`.
4. **Geen landingspagina per dienst · Medium.** "personal trainer Heinenoord" en "boksen Hoeksche Waard" concurreren nu met de hoofdterm op dezelfde URL (content.md, punt 1).
5. **Werkgebied alleen als tekst · Laag.** `areaServed: "Hoeksche Waard"`. Noem in de tekst de omliggende dorpen waar leden vandaan komen (Mijnsheerenland, Puttershoek, Oud-Beijerland, Westmaas, Klaaswaal, 's-Gravendeel) in één natuurlijke zin, bijvoorbeeld bij "Waar vind je ons". Niet als lijst spammen.
6. **Bedrijfsfitness Nederland · Laag.** Logo zonder uitleg. Als het actief is, is "bedrijfsfitness Hoeksche Waard" een onbezette zoekterm voor werkgevers in de regio.
7. **Boks-dag bevestigen · Laag.** Zaterdag of zondag; een verkeerd rooster in GBP, site en schema kost vertrouwen.

## Concurrentie (indicatief)
Fitness Paradise in Oud-Beijerland profileert zich als grootste gym van de Hoeksche Waard. Thehomegym's positionering ("geen massagym", persoonlijk, kleinschalig) is precies het tegenovergestelde en dus goed onderscheidend; benoem het verschil nog iets explicieter in de FAQ ("Wat is het verschil met een grote sportschool?").

## Wat goed is
- Adres, routeknop, openingstijden met "Nu open tot 22:00"-badge en WhatsApp boven de vouw: de belangrijkste local-conversie-elementen staan goed.
- HealthClub-schema met volledige openingstijden en sameAs.
- Plaatsnaam in title, H1, description en schema zonder overdrijving.
