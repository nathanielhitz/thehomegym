import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thehomegym · Sportschool in Heinenoord",
    short_name: "Thehomegym",
    description:
      "Kleinschalige sportschool in Heinenoord voor 18-plus: onbeperkt fitness, personal training en groepslessen.",
    start_url: "/",
    display: "browser",
    background_color: "#f7f5f2",
    theme_color: "#141517",
    lang: "nl",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
