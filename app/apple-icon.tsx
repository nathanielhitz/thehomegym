import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Zelfde merkteken als icon.tsx, groter en zonder afgeronde hoeken: iOS
// rondt het zelf af.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141517",
          color: "#f7f5f2",
          fontSize: 108,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        T<span style={{ color: "#c2552b" }}>.</span>
      </div>
    ),
    size,
  );
}
