import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm cream page background
        cream: { DEFAULT: "#FBF6F0", dark: "#F3EAE0" },
        // Soft blush: tints and panels
        blush: {
          50: "#FEF8F7",
          100: "#FBEDEB",
          200: "#F6DAD6",
          300: "#EEBFB9",
          400: "#E3A199",
          500: "#D4827A",
        },
        // Deep plum: text, buttons, dark sections
        plum: {
          50: "#F8F1F6",
          100: "#EFDDEA",
          200: "#DDBBD3",
          300: "#C58FB7",
          400: "#A9628F",
          500: "#8A4272",
          600: "#6E3059",
          700: "#58264A",
          800: "#451C3A",
          900: "#2F1229",
        },
        // Gold accents: borders, icons, buttons on plum
        gold: {
          100: "#F8EFD9",
          200: "#F0DDB0",
          300: "#E5C885",
          400: "#D6AE5E",
          500: "#C0953F",
          600: "#9C7630",
          700: "#7A5B25",
        },
        whatsapp: { DEFAULT: "#1FA855", dark: "#178A45" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: "0 12px 32px -14px rgba(69, 28, 58, 0.22)",
        lift: "0 14px 34px -10px rgba(47, 18, 41, 0.40)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "80%, 100%": { transform: "scale(1.75)", opacity: "0" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.2, 0.6, 0.3, 1) infinite",
        rise: "rise 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
