import { renderShareImage } from "@/lib/og";

export const alt = "Al-Jannat Salon & Studio, beauty salon in Johar, Karachi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage();
}
