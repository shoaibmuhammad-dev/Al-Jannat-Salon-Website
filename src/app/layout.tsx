import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const title = "Al-Jannat Salon & Studio | Beauty Salon in Johar, Karachi";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Al-Jannat Salon & Studio",
  },
  description: siteConfig.description,
  keywords: [
    "beauty salon in Johar Karachi",
    "bridal makeup Karachi",
    "eyelash extensions Karachi",
    "laser hair removal Karachi",
    "salon Gulistan-e-Johar",
    "party makeup Karachi",
    "Gulshan-e-Iqbal salon",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF6F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
