import { ogSize, renderOg } from "@/lib/og";

export const alt = "Thehomegym, de persoonlijke sportschool van Heinenoord";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOg({
    title: "De persoonlijke sportschool van Heinenoord.",
    photo: "Hero.jpeg",
  });
}
