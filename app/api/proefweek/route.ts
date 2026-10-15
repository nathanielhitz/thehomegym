import { NextResponse } from "next/server";
import { sendLead, type Lead } from "@/lib/leads";

export const runtime = "nodejs";

const MAX = { name: 80, contact: 120, moment: 60, source: 60, note: 1000 };

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const looksLikeEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const looksLikePhone = (value: string) => {
  const digits = value.replace(/[\s\-().]/g, "");
  return /^\+?\d{8,15}$/.test(digits);
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "We konden je aanvraag niet lezen. Probeer het nog eens." },
      { status: 400 },
    );
  }

  // Honeypot: een verborgen veld dat echte bezoekers nooit invullen.
  // Bots krijgen een gewone "ok" terug, zodat ze niets leren.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const contact = clean(body.contact, MAX.contact);

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, field: "name", error: "Vul je naam in, dan weten we wie er langskomt." },
      { status: 422 },
    );
  }

  if (!contact || !(looksLikeEmail(contact) || looksLikePhone(contact))) {
    return NextResponse.json(
      {
        ok: false,
        field: "contact",
        error: "Vul een telefoonnummer of e-mailadres in, dan kunnen we je bereiken.",
      },
      { status: 422 },
    );
  }

  const lead: Lead = {
    name,
    contact,
    moment: clean(body.moment, MAX.moment) || undefined,
    source: clean(body.source, MAX.source) || undefined,
    note: clean(body.note, MAX.note) || undefined,
    submittedAt: new Date().toISOString(),
  };

  try {
    await sendLead(lead);
  } catch (error) {
    console.error("[LEAD] verzenden mislukt", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Het versturen lukte net niet. Probeer het nog eens, of app ons direct.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
