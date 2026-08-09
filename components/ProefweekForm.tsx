"use client";

import { useState, type FormEvent } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { whatsappHref } from "@/lib/content";

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
  "w-full rounded-[10px] border border-line-strong bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-muted/80 transition-colors duration-200 focus:border-brick focus:outline-none";

const labelClass = "block text-[14px] font-medium text-ink";

export default function ProefweekForm() {
  const [name, setName] = useState("");
  const [moment, setMoment] = useState(moments[0]);
  const [source, setSource] = useState(sources[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length < 2) {
      setError("Vul je naam in, dan weten we wie er langskomt.");
      return;
    }
    setError(null);

    const lines = [
      `Hoi! Ik ben ${name.trim()} en ik wil graag de gratis proefweek aanvragen.`,
      `Ik kan het beste: ${moment.toLowerCase()}.`,
      `Ik heb jullie gevonden via: ${source.toLowerCase()}.`,
    ];
    if (note.trim()) lines.push(`Verder: ${note.trim()}`);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="naam" className={labelClass}>
          Je naam
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          autoComplete="given-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Bijvoorbeeld: Sanne"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "naam-fout" : undefined}
          className={inputClass}
        />
        {error && (
          <p id="naam-fout" className="text-[14px] text-brick-deep">
            {error}
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
            name="bron"
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
          name="bericht"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Bijvoorbeeld je doel, of een blessure waar we rekening mee moeten houden."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brick px-6 py-3.5 text-base font-semibold tracking-tight text-paper transition-[background-color,transform] duration-200 hover:bg-brick-deep active:scale-[0.98] sm:w-auto"
      >
        <WhatsappLogo size={19} weight="fill" aria-hidden />
        Versturen via WhatsApp
      </button>

      <p className="text-[13px] leading-relaxed text-muted">
        Je bericht wordt klaargezet in WhatsApp, je verstuurt het zelf. We
        reageren zo snel mogelijk, meestal binnen een dag.
      </p>
    </form>
  );
}
