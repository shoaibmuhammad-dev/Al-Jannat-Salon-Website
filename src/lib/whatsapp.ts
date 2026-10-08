import { siteConfig } from "@/config/site";

/** Builds a wa.me link with a URL-encoded, prefilled message. */
export function whatsappLink(message: string = siteConfig.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Prefilled message for a specific service category. */
export function serviceMessage(category: string): string {
  return `Hi, I'd like to book ${category} at Al-Jannat Salon & Studio (Johar). Could you share availability and prices?`;
}
