// Doelen uit de kernvoordelen-kaart. Klik op een chip scrolt naar het aanbod
// en toont daar de bijpassende zin. Kort houden: één zin per doel.
export type Doel = { id: string; label: string; zin: string };

export const doelen: Doel[] = [
  {
    id: "afvallen",
    label: "Afvallen",
    zin: "Combinatie van schema, voedingsapp en Full Body Scan om je voortgang te meten.",
  },
  {
    id: "sterker",
    label: "Sterker worden",
    zin: "Krachtschema op jouw niveau, met squatrekken, deadliftplatform en trainers die je techniek corrigeren.",
  },
  {
    id: "fitter",
    label: "Fitter worden",
    zin: "Vrij trainen of meedoen met circuit en boksen, zonder wachten op apparaten.",
  },
  {
    id: "herstel",
    label: "Herstel",
    zin: "Personal training in de privézaal, ook na een blessure, met een schema dat rekening houdt met wat je lichaam aankan.",
  },
];
