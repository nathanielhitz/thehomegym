import type { NextConfig } from "next";

// 301's vanaf de oude Wix-URL's (pages-sitemap.xml van de oude site plus de
// paden uit README). /personal-training en /groepslessen zijn nu echte
// pagina's en staan hier dus niet meer in.
const oldWixRedirects: { source: string; destination: string }[] = [
  { source: "/1-op-1", destination: "/personal-training" },
  { source: "/duo", destination: "/personal-training" },
  { source: "/fitness", destination: "/#aanbod" },
  { source: "/tarieven", destination: "/#tarieven" },
  { source: "/6m", destination: "/#tarieven" },
  { source: "/kopie-van-6m", destination: "/#tarieven" },
  { source: "/12m-inschrijf", destination: "/#tarieven" },
  { source: "/kopie-van-12m-g", destination: "/#tarieven" },
  { source: "/actie", destination: "/#tarieven" },
  { source: "/inschrijfpagina", destination: "/#tarieven" },
  { source: "/proefweek", destination: "/#proefweek" },
  { source: "/proefweekqr", destination: "/#proefweek" },
  { source: "/aanmelden", destination: "/#proefweek" },
  { source: "/welkom", destination: "/#proefweek" },
  { source: "/over-ons", destination: "/#team" },
];

// Beveiligingsheaders voor elke response. Geen volledige CSP: next/font,
// de inline scroll-reveal-script en (optioneel) GA4 zouden daar nonces voor
// nodig hebben. frame-ancestors dekt het belangrijkste (clickjacking) af.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

// Bestanden in public/ veranderen zelden; een jaar cachen. Bij een nieuwe
// versie krijgt het bestand een andere naam.
const longCache = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // experimental.inlineCss bewust uit: getest op 26 okt 2026. De CSS komt dan
  // in de HTML én in de RSC-payload, de homepage ging van 40 naar 69 KB gzip
  // en FCP/LCP werden trager. Het ene CSS-bestand (9 KB, immutable gecached)
  // is sneller, ook al noemen SEO-checkers het "render-blocking".
  images: {
    qualities: [75, 85, 100],
  },
  async redirects() {
    return oldWixRedirects.map((r) => ({ ...r, permanent: true }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:file(Hero\\.jpeg|hero-poster\\.webp|hero-video\\.mp4|hero-video-staand\\.mp4)",
        headers: longCache,
      },
      { source: "/logos/:path*", headers: longCache },
      { source: "/fotos/:path*", headers: longCache },
      // De vercel.app-preview mag niet in Google; de canonical wijst al naar
      // het echte domein, dit maakt het hard.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
