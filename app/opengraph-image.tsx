import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/lib/content";

// Deelafbeelding voor WhatsApp, Facebook, Instagram en Google. Next zet
// og:image en twitter:image automatisch op /opengraph-image.
export const alt = "Thehomegym, de persoonlijke sportschool van Heinenoord";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [hero, archivo] = await Promise.all([
    readFile(join(process.cwd(), "public", "Hero.jpeg")),
    readFile(join(process.cwd(), "app", "fonts", "Archivo-ExtraBold.woff")),
  ]);
  const heroSrc = `data:image/jpeg;base64,${hero.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#141517",
          fontFamily: "Archivo",
          color: "#f7f5f2",
        }}
      >
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "45% center",
            filter: "brightness(0.55) saturate(0.85)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(20,21,23,0.92) 0%, rgba(20,21,23,0.55) 55%, rgba(20,21,23,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 34, letterSpacing: "-0.03em" }}>
            THEHOMEGYM
            <span style={{ color: "#c2552b" }}>.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                fontSize: 86,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                maxWidth: 820,
              }}
            >
              De persoonlijke sportschool van Heinenoord.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontSize: 28,
                color: "#e6e2dc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  background: "#c2552b",
                  color: "#f7f5f2",
                  padding: "12px 22px",
                  borderRadius: 999,
                }}
              >
                Gratis proefweek
              </div>
              <div style={{ display: "flex" }}>
                {company.street.replace(/-J4$/, "")} · {company.city} · {company.region}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }],
    },
  );
}
