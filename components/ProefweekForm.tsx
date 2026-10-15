"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappHref } from "@/lib/content";
import { useHandoff } from "@/lib/handoff";
import { track } from "@/lib/track";

const moments = [
  "Doordeweeks overdag",
  "Doordeweeks in de avond",
  "In het weekend",
  "Weet ik nog niet",
];

const sources = [
  "Google",
  "Social media",
  "Via familie of vrienden",
  "Ik kwam er langs",
  "Anders",
];

const inputClass =
  "w-full rounded-[10px] border border-line-strong bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/80 transition-colors duration-200 focus:border-brick focus:outline-none aria-[invalid=true]:border-brick-deep";

const labelClass = "block text-[14px] font-medium text-ink";

type Field = "name" | "contact";
type FormError = { field?: Field; message: string };

const looksLikeEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

const looksLikePhone = (value: string) =>
  /^\+?\d{8,15}$/.test(value.replace(/[\s\-().]/g, ""));

export default function ProefweekForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [moment, setMoment] = useState(moments[0]);
  const [source, setSource] = useState(sources[0]);
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [error, setError] = useState<FormError | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const contactRef = useRef<HTMLInputElement | null>(null);
  const doneRef = useRef<HTMLDivElement | null>(null);

  const firstName = name.trim().split(/\s+/)[0] || "";

  // Vanuit het rooster komt de gekozen les binnen; die zetten we in het
  // opmerkingenveld zodat de bezoeker alleen nog naam en contact invult.
  useHandoff("proefweek-note", setNote);

  const whatsappMessage = () => {
    const lines = [
      `Hoi! Ik ben ${name.trim() || "..."} en ik wil graag de gratis proefweek aanvragen.`,
      `Ik kan het beste: ${moment.toLowerCase()}.`,
      `Ik heb jullie gevonden via: ${source.toLowerCase()}.`,
    ];
    if (contact.trim()) lines.push(`Je kunt me bereiken via: ${contact.trim()}.`);
    if (note.trim()) lines.push(`Verder: ${note.trim()}`);
    return lines.join("\n");
  };

  // Na succes: naar het bedankscherm scrollen en de focus erop zetten,
  // zodat ook screenreaders en toetsenbordgebruikers meteen weten dat het gelukt is.
  useEffect(() => {
    if (status !== "done" || !doneRef.current) return;
    doneRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    doneRef.current.focus({ preventScroll: true });
  }, [status]);

  const validate = (): FormError | null => {
    if (name.trim().length < 2) {
      return { field: "name", message: "Vul je naam in, dan weten we wie er langskomt." };
    }
    const value = contact.trim();
    if (!value || !(looksLikeEmail(value) || looksLikePhone(value))) {
      return {
        field: "contact",
        message: "Vul een telefoonnummer of e-mailadres in, dan kunnen we je bereiken.",
      };
    }
    return null;
  };

  const focusField = (field?: Field) => {
    if (field === "name") nameRef.current?.focus();
    if (field === "contact") contactRef.current?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const clientError = validate();
    if (clientError) {
      setError(clientError);
      focusField(clientError.field);
      return;
    }

    setError(null);
    setStatus("sending");
    track("form_submit", { moment, source });

    try {
      const response = await fetch("/api/proefweek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          moment,
          source,
          note: note.trim(),
          website,
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        field?: Field;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        const message =
          data.error ??
          "Het versturen lukte net niet. Probeer het nog eens, of app ons direct.";
        setError({ field: data.field, message });
        setStatus("idle");
        track("form_error", { reason: data.field ?? `http_${response.status}` });
        focusField(data.field);
        return;
      }

      setStatus("done");
      track("form_success", { moment, source });
    } catch {
      setError({
        message: "Geen verbinding. Controleer je internet en probeer het nog eens, of app ons direct.",
      });
      setStatus("idle");
      track("form_error", { reason: "network" });
    }
  };

  if (status === "done") {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-clay p-6 outline-none sm:p-8"
      >
        <CheckCircle size={36} weight="fill" className="text-brick" aria-hidden />
        <h3 className="mt-4 font-display text-[24px] leading-tight font-bold text-ink">
          Gelukt{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mt-3 text-[16px] leading-relaxed text-ink/85">
          We nemen binnen 24 uur contact met je op via{" "}
          <strong className="font-semibold">{contact.trim()}</strong>. Wil je
          sneller? App ons direct.
        </p>
        <a
          href={whatsappHref(whatsappMessage())}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "bedankt" })}
          className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-brick px-6 py-3.5 text-base font-semibold tracking-tight text-paper transition-[background-color,transform] duration-200 hover:bg-brick-deep active:scale-[0.98]"
        >
          <WhatsappLogo size={19} weight="fill" aria-hidden />
          App ons direct
        </a>
      </div>
    );
  }

  const sending = status === "sending";
  const nameInvalid = error?.field === "name";
  const contactInvalid = error?.field === "contact";
  const generalError = error && !error.field ? error.message : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-5">
      <div className="space-y-2">
        <label htmlFor="naam" className={labelClass}>
          Je naam
        </label>
        <input
          ref={nameRef}
          id="naam"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Bijvoorbeeld: Sanne"
          required
          aria-required="true"
          aria-invalid={nameInvalid}
          aria-describedby={nameInvalid ? "naam-fout" : undefined}
          className={inputClass}
        />
        {nameInvalid && (
          <p id="naam-fout" className="text-[14px] text-brick-deep">
            {error.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact" className={labelClass}>
          Hoe kunnen we je bereiken?
        </label>
        <input
          ref={contactRef}
          id="contact"
          name="contact"
          type="text"
          inputMode="email"
          autoComplete="on"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Telefoonnummer of e-mailadres"
          required
          aria-required="true"
          aria-invalid={contactInvalid}
          aria-describedby={contactInvalid ? "contact-fout" : "contact-hint"}
          className={inputClass}
        />
        {contactInvalid ? (
          <p id="contact-fout" className="text-[14px] text-brick-deep">
            {error.message}
          </p>
        ) : (
          <p id="contact-hint" className="text-[13px] text-muted">
            Eén van de twee is genoeg. We gebruiken het alleen voor de proefweek.
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="moment" className={labelClass}>
            Wanneer kun je meestal
          </label>
          <select
            id="moment"
            name="moment"
            autoComplete="off"
            value={moment}
            onChange={(e) => setMoment(e.target.value)}
            className={inputClass}
          >
            {moments.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="bron" className={labelClass}>
            Hoe ken je ons
          </label>
          <select
            id="bron"
            name="source"
            autoComplete="off"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className={inputClass}
          >
            {sources.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="bericht" className={labelClass}>
          Iets wat we moeten weten <span className="text-muted">(optioneel)</span>
        </label>
        <textarea
          id="bericht"
          name="note"
          rows={3}
          autoComplete="off"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bijvoorbeeld je doel, of een blessure waar we rekening mee moeten houden."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot: onzichtbaar voor mensen, bots vullen hem wel in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {generalError && (
        <p
          role="alert"
          className="rounded-xl bg-clay px-4 py-3 text-[14px] leading-relaxed text-brick-deep"
        >
          {generalError}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          disabled={sending}
          aria-busy={sending}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brick px-6 py-3.5 text-base font-semibold tracking-tight text-paper transition-[background-color,transform,opacity] duration-200 hover:bg-brick-deep active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 disabled:active:scale-100 sm:w-auto"
        >
          {sending && (
            <span
              aria-hidden
              className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper"
            />
          )}
          {sending ? "Bezig met versturen" : "Proefweek aanvragen"}
        </button>

        <a
          href={whatsappHref(whatsappMessage())}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "formulier" })}
          className="inline-flex items-center gap-2 text-[15px] font-medium text-ink underline-offset-4 transition-colors duration-200 hover:text-brick hover:underline"
        >
          <WhatsappLogo size={18} weight="fill" className="text-brick" aria-hidden />
          Liever via WhatsApp?
        </a>
      </div>

      <p className="text-[13px] leading-relaxed text-muted">
        We reageren binnen 24 uur. Je zit nergens aan vast en betaalgegevens
        hoef je nu nog niet in te vullen.
      </p>
    </form>
  );
}
