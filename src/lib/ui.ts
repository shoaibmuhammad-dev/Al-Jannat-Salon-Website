/** Shared button styles so every CTA looks and behaves the same. */
export const btnBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors duration-200";

export const btnPrimary = `${btnBase} bg-plum-800 text-cream hover:bg-plum-900`;

export const btnSecondary = `${btnBase} border border-plum-800/30 text-plum-800 hover:border-plum-800 hover:bg-blush-100`;

export const btnGold = `${btnBase} bg-gold-300 text-plum-900 hover:bg-gold-200`;

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
