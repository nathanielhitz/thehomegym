import type { MetadataRoute } from "next";

const base = "https://www.thehomegym.nl";

// Alles mag gecrawld worden behalve het formulier-endpoint. De AI-crawlers
// staan expliciet op Allow zodat dit een keuze is en geen toeval.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
