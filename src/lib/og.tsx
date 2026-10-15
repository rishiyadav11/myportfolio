import { ImageResponse } from "next/og";

/**
 * Shared Open Graph card. Use from any route's opengraph-image.tsx:
 *
 *   export const size = ogSize; export const contentType = "image/png";
 *   export const alt = "...";
 *   export default function Image() { return ogImage({ title: "...", eyebrow: "..." }) }
 */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function ogImage({ title, eyebrow = "rishiyadav.space" }: { title: string; eyebrow?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3efe6",
          color: "#141312",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#b5360d",
            fontFamily: "monospace",
          }}
        >
          {eyebrow}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 62 : 80, lineHeight: 1.02, fontWeight: 700, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #141312",
            paddingTop: 28,
            fontSize: 28,
          }}
        >
          <span style={{ display: "flex", fontWeight: 600 }}>Rishi Yadav</span>
          <span style={{ display: "flex", color: "#6b665f" }}>Full-stack developer · Narnaul, Haryana</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
