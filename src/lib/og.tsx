import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/** Shared renderer for the Open Graph and Twitter share images (1200x630). */
export function renderShareImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "#2F1229",
        color: "#FBF6F0",
      }}
    >
      <div
        style={{
          width: 120,
          height: 6,
          background: "#E5C885",
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1 }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 38, marginTop: 28, color: "#E5C885" }}>
        Beauty salon in Johar, Karachi
      </div>
      <div style={{ fontSize: 30, marginTop: 20, color: "#EFDDEA" }}>
        Bridal makeup, hair, lashes, brows and skin care
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
