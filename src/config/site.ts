/**
 * Single source of truth for business details.
 * Change the WhatsApp number, phone, address or hours here and the whole site updates.
 */

const mapsQuery =
  "Al-Jannat Salon & Studio, A-135 Long Life Bungalow, Block 17 Gulistan-e-Johar, Karachi, Pakistan";

export const siteConfig = {
  name: "Al-Jannat Salon & Studio",
  shortName: "Al-Jannat",
  branch: "Johar Branch",
  description:
    "Al-Jannat Salon & Studio is a beauty salon in Johar, Karachi. Book bridal makeup, party looks, hair, eyelash extensions, brows and laser hair removal on WhatsApp.",

  // Your live domain (no trailing slash). Set NEXT_PUBLIC_SITE_URL in Vercel.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com").replace(
    /\/$/,
    "",
  ),

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // 03363691555 in Pakistan becomes 923363691555.
  whatsappNumber: "923363691555",
  phoneDisplay: "0336 3691555",
  phoneTel: "+923363691555",
  defaultMessage: "Hi, I'd like to book an appointment at Al-Jannat Salon",

  address: {
    street: "A-135, Long Life Bungalow, Block 17, Gulistan-e-Johar",
    locality: "Karachi",
    region: "Sindh",
    postalCode: "75000",
    country: "PK",
    full: "A-135, Long Life Bungalow, Block 17 Gulistan-e-Johar, Karachi, 75000, Pakistan",
  },

  // TODO: approximate position only. Open the salon in Google Maps, right-click the pin,
  // click the coordinates to copy them, and paste the exact values here.
  geo: { latitude: 24.9205, longitude: 67.1325 },

  hours: {
    days: "Every day",
    display: "11:30 AM – 8:30 PM",
    opens: "11:30",
    closes: "20:30",
  },

  // Replace "/" with the real profile URLs when you have them.
  social: {
    instagram: "/",
    facebook: "/",
  },

  // TODO: replace with a real, honest number before launch.
  trustedClients: "1,000+",

  // Change `mapsQuery` to the salon's exact Google Maps listing name or address if needed.
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
  mapsDirectionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
} as const;
