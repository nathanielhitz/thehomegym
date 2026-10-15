import { openingHours } from "@/lib/content";

const toMinutes = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

export type OpeningStatus = { open: boolean; label: string } | null;

// Geeft de korte status voor dit moment: "Nu open tot 22:00", "Vandaag open
// vanaf 07:00" of "Morgen open vanaf 07:00". Alleen op de client aanroepen,
// anders wijkt de server-render af van de client.
export function currentOpeningStatus(now: Date): OpeningStatus {
  const iso = now.getDay() === 0 ? 7 : now.getDay();
  const today = openingHours.find((d) => d.iso === iso);
  if (!today) return null;

  const minutes = now.getHours() * 60 + now.getMinutes();
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);

  if (minutes >= open && minutes < close) {
    return { open: true, label: `Nu open tot ${today.close}` };
  }

  if (minutes < open) {
    return { open: false, label: `Vandaag open vanaf ${today.open}` };
  }

  const next = openingHours.find((d) => d.iso === (iso === 7 ? 1 : iso + 1));
  return {
    open: false,
    label: next ? `Morgen open vanaf ${next.open}` : "Nu gesloten",
  };
}
