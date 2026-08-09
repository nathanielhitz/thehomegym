import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          borderRadius: 7,
        }}
      >
        T
        <span style={{ color: "#c2552b" }}>.</span>
      </div>
    ),
    size,
  );
}
