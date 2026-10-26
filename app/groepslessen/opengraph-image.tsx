import { ogSize, renderOg } from "@/lib/og";

export const alt = "Groepslessen in Heinenoord bij Thehomegym";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOg({
    title: "Groepslessen in Heinenoord, max tien deelnemers.",
    photo: "fotos/groepsles-boksen.jpg",
    badge: "Eerste les gratis",
    objectPosition: "center 35%",
  });
}
