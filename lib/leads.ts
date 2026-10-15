// Leadafhandeling voor het proefweekformulier.
// De API-route (app/api/proefweek/route.ts) valideert en roept alleen
// sendLead() aan. Alles wat met verzenden te maken heeft, zit hier.

export type Lead = {
  /** Volledige naam zoals ingevuld. */
  name: string;
  /** Telefoonnummer of e-mailadres, één veld. */
  contact: string;
  /** Wanneer de bezoeker meestal kan trainen. */
  moment?: string;
  /** Hoe de bezoeker ons gevonden heeft. */
  source?: string;
  /** Vrije opmerking: doel, blessure, vraag. */
  note?: string;
  /** Moment van aanvraag, ISO-string. */
  submittedAt: string;
};

// TODO: vervangen door Resend of SMTP. Interface blijft gelijk: sendLead(lead): Promise<void>
// Benodigde env-variabelen staan klaar in .env.example (RESEND_API_KEY, LEAD_TO_EMAIL).
export async function sendLead(lead: Lead): Promise<void> {
  console.log("[LEAD]", lead);
  // Korte vertraging zodat de loading state van de knop zichtbaar is in de demo.
  await new Promise((resolve) => setTimeout(resolve, 600));
}
