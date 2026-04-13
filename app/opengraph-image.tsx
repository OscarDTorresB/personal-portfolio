import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oscar Torres | Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background: "linear-gradient(135deg, #0C0C0B 0%, #111110 40%, #1C1409 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#D97706",
            }}
          />
          Senior Software Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Software Architecture & AI Systems.
          </div>
          <div style={{ display: "flex", fontSize: 34, opacity: 0.88, maxWidth: "92%" }}>
            Building fast, accessible web applications and AI-powered tools.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>Oscar Torres</div>
          <div style={{ display: "flex", fontSize: 26, opacity: 0.85 }}>oscartorres.co</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
