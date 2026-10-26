# Schema.org / gestructureerde data

## Aanwezig (JSON-LD, in layout, dus op beide pagina's)
1. `HealthClub` met name, description, url, email, telephone (+31616925931), PostalAddress (Reedijk 7-J4, 3274 KE Heinenoord, Zuid-Holland, NL), areaServed, priceRange, foundingDate 2022, sameAs (Instagram, Facebook, TikTok), openingHoursSpecification voor 7 dagen.
2. `FAQPage` met 8 Question/Answer-paren die letterlijk overeenkomen met de zichtbare FAQ.

Beide zijn syntactisch geldig en Google-conform. Geen fouten gevonden.

## Bevindingen

### 1. `HealthClub` mist `image`, `logo`, `geo` en `hasMap` · Medium
Zonder `image` komt het profiel niet in aanmerking voor rich result-weergave van LocalBusiness; `geo` (lat/long van Reedijk 7) en `hasMap` (Google Maps-URL) versterken de koppeling met het Business Profile. Voeg toe:
```json
"image": "https://www.thehomegym.nl/og.jpg",
"logo": "https://www.thehomegym.nl/logo.png",
"geo": {"@type":"GeoCoordinates","latitude":51.83,"longitude":4.50},
"hasMap": "https://www.google.com/maps/place/?q=place_id:<PLACE_ID>",
"@id": "https://www.thehomegym.nl/#organisatie"
```
(Coördinaten exact ophalen uit Google Maps.)

### 2. `AggregateRating` bewust weggelaten · Info, wordt Medium zodra aantal bekend is
Terecht niet verzonnen. Zodra het reviewaantal bekend is: `aggregateRating: {ratingValue: "5", reviewCount: n, bestRating: "5"}`. Let op: Google toont sterren alleen bij reviews die op de site zelf verzameld zijn; bij Google-reviews is het vooral een entiteitssignaal.

### 3. Lidmaatschappen niet als `Offer`/`makesOffer` · Medium
Prijzen staan in tekst (45 euro per maand enzovoort). Als `makesOffer` met `Offer` + `PriceSpecification` (price, priceCurrency EUR, billingDuration) kunnen AI-zoekmachines de prijs direct citeren en matcht het met de description. Houd `priceRange` erbij.

### 4. Groepslessen niet als `Event`/`Schedule` · Laag
Vier wekelijkse lessen met dag en tijd. Een `EventSeries` of per les een `Event` met `eventSchedule` (byDay, startTime, endTime, repeatFrequency P1W) en `location` = de HealthClub maakt "boksen heinenoord donderdag" vindbaar. Alleen doen als het rooster stabiel is (zie boks-dag onzekerheid).

### 5. Trainers niet als `Person`/`employee` · Laag
Rick, Stef en Mathijs met foto en certificering. `employee: [{"@type":"Person","name":"Rick","jobTitle":"Personal trainer","image":...}]` ondersteunt E-E-A-T.

### 6. FAQPage op de voorwaarden-pagina · Laag
Omdat beide schema's in `layout.tsx` staan, krijgt `/algemene-voorwaarden` ook de FAQPage mee terwijl die vragen daar niet zichtbaar zijn. Google eist zichtbaarheid. Verplaats het FAQ-schema naar `app/page.tsx` of naar het `Faq`-component.

### 7. `Organization`/`WebSite` ontbreekt · Laag
Een `WebSite` met `name` en `url` en een `@id`-koppeling aan de HealthClub geeft Google een schone sitenaam ("Thehomegym") in plaats van het domein.

### 8. `telephone` versus zichtbare tekst · Info
Schema heeft +31616925931; de site toont "06 16 92 59 31" en WhatsApp-links. Consistent. Geen actie.
