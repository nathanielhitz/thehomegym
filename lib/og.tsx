import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/lib/content";

/* Deelafbeelding (1200x630) voor WhatsApp, Facebook, Instagram en Google.
   Elke pagina heeft een eigen opengraph-image.tsx die dit aanroept met een
   eigen kop en foto, zodat een gedeelde link over personal training ook
   een personal-training-beeld laat zien. */

export const ogSize = { width: 1200, height: 630 };

export async function renderOg({
  title,
  photo,
  badge = "Gratis proefweek",
  objectPosition = "45% center",
}: {
  title: string;
  /** Pad binnen public/, bijvoorbeeld "Hero.jpeg" of "fotos/x.jpg". */
  photo: string;
  badge?: string;
  objectPosition?: string;
}) {
  const [image, archivo] = await Promise.all([
    readFile(join(process.cwd(), "public", photo)),
    readFile(join(process.cwd(), "app", "fonts", "Archivo-ExtraBold.woff")),
  ]);
  const mime = photo.endsWith(".png") ? "image/png" : "image/jpeg";
  const src = `data:${mime};base64,${image.toString("base64")}`;

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
        {/* Satori (next/og) kent geen next/image; dit is een gewone <img>
            in de gegenereerde afbeelding, niet op de pagina. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
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
                fontSize: title.length > 40 ? 72 : 86,
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                maxWidth: 840,
              }}
            >
              {title}
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
                {badge}
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
      ...ogSize,
      fonts: [{ name: "Archivo", data: archivo, weight: 800, style: "normal" }],
    },
  );
}
