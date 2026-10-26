import type { MetadataRoute } from "next";

const base = "https://www.thehomegym.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/algemene-voorwaarden`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
