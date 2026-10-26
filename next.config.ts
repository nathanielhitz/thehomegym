import type { NextConfig } from "next";

// 301's vanaf de oude Wix-URL's (pages-sitemap.xml van de oude site plus de
// paden uit README). Als er later aparte pagina's komen voor personal
// training en groepslessen, de bestemming hier aanpassen.
const oldWixRedirects: { source: string; destination: string }[] = [
  { source: "/personal-training", destination: "/#aanbod" },
  { source: "/1-op-1", destination: "/#aanbod" },
  { source: "/duo", destination: "/#aanbod" },
  { source: "/fitness", destination: "/#aanbod" },
  { source: "/groepslessen", destination: "/#rooster" },
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
