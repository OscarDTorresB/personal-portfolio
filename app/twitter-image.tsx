import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Oscar Torres portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const SCHIBSTED_BOLD_URL =
  "https://fonts.gstatic.com/s/schibstedgrotesk/v7/JqzK5SSPQuCQF3t8uOwiUL-taUTtarVKQ9vZ6pJJWlMNxcYATw.ttf";

export default async function TwitterImage() {
  const schibsted = await fetch(SCHIBSTED_BOLD_URL).then((res) =>
    res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "#15191E",
          color: "#FAFAF7",
          fontFamily: "Schibsted Grotesk, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 8,
              borderRadius: 999,
              background: "#0E7C86",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 3,
              color: "#A7B0BA",
            }}
          >
            SENIOR SOFTWARE ENGINEER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            Oscar Torres<span style={{ color: "#E0762E" }}>.</span>
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#A7B0BA" }}>
            Full stack · AI &amp; LLM systems · React &amp; TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#45B3BD" }}>
            Quietly confident. Distinctly teal.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#A7B0BA" }}>
            oscartorres.co
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Schibsted Grotesk",
          data: schibsted,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
