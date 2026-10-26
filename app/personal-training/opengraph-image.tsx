import { ogSize, renderOg } from "@/lib/og";

export const alt = "Personal training in Heinenoord bij Thehomegym";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOg({
    title: "Personal training in Heinenoord, in een eigen privézaal.",
    photo: "fotos/personal-training-squat.jpg",
    badge: "Gratis intake",
    objectPosition: "center 30%",
  });
}
