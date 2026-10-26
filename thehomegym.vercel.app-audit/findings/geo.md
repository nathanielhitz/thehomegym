# AI Search Readiness (GEO)

## Crawlertoegang
- Geen robots.txt, dus GPTBot, ClaudeBot, PerplexityBot, Google-Extended en CCBot zijn impliciet toegestaan. Maak dit expliciet in `app/robots.ts` zodat het een keuze is en geen toeval.
- Geen `/llms.txt`. Voor een site van twee pagina's is een korte llms.txt met naam, adres, aanbod, prijzen, openingstijden en de FAQ snel gemaakt en direct citeerbaar.
- Content staat volledig in de HTML (geen client-side rendering), dus ook crawlers zonder JavaScript lezen alles.

## Citeerbaarheid (passage-niveau)
Sterk:
- Feitelijke, zelfstandige zinnen: "Onbeperkt fitness vanaf 45 euro per maand", "Fitness en groepslessen zijn toegankelijk vanaf 18 jaar", "Een lidmaatschap loopt 6 of 12 maanden. Daarna ... maandelijks opzegbaar met een opzegtermijn van één maand."
- FAQ met vraag-antwoordstructuur en bijpassend FAQPage-schema.
- Openingstijden, adres, telefoon en e-mail staan als tekst en als schema.

Zwak:
- Het merk "Thehomegym" komt ook voor als Trustoo-vermelding in Mijnsheerenland en als Fresha-vermelding op "Reedijk 8-11" met afwijkende openingstijden (10:00 tot 18:00). AI-modellen vermengen die bronnen. Zie local.md.
- Geen pagina die de vraag "wat kost personal training in Heinenoord" of "welke sportscholen zijn er in de Hoeksche Waard" op zichzelf beantwoordt; alles staat in één document.
- Geen datum of "laatst bijgewerkt" op de prijsinformatie; AI-antwoorden noemen prijzen graag met datum.

## Aanbevelingen
1. `app/robots.ts` met expliciete Allow voor de grote AI-crawlers (of bewust Disallow, maar dan consequent).
2. `public/llms.txt` met een feitenblok (naam, adres, telefoon, openingstijden, aanbod met prijzen, proefweek, leeftijdsgrens) en links naar de secties.
3. Prijstabel een zichtbare "Prijzen geldig vanaf <datum>" geven en `Offer`-schema toevoegen (schema.md, punt 3).
4. Eén alinea "Over Thehomegym" met de harde feiten in één blok (opgericht 2022, Reedijk 7-J4 Heinenoord, 3 trainers, 18-plus, Hoeksche Waard) hoog op de pagina, zodat samenvattende modellen één bron hebben.
5. Citaties opschonen (local.md) zodat alle externe bronnen hetzelfde adres en dezelfde tijden geven.

Citeerbaarheidsscore (intern): 65/100. Inhoud is uitstekend, de verpakking (robots, llms.txt, aparte pagina's, consistente externe vermeldingen) nog niet.
