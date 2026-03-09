import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oscar Torres portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
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
          background: "linear-gradient(135deg, #082f49 0%, #0f172a 55%, #020617 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.9 }}>Senior Software Engineer and Tech Lead</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", fontSize: 82, lineHeight: 0.95, fontWeight: 800, letterSpacing: -2 }}>
            Oscar Torres
          </div>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 600, color: "#38bdf8" }}>
            React and Next.js Architecture
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 28, opacity: 0.88 }}>Performance. Scale. Leadership.</div>
          <div style={{ display: "flex", fontSize: 26, opacity: 0.82 }}>oscartorres.co</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
