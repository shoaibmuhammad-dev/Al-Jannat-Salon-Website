import { siteConfig } from "@/config/site";
import { faqs, services } from "@/data/content";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function salonJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter((u) => u.startsWith("http"));

  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/#salon`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsDirectionsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: allDays,
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    areaServed: ["Gulistan-e-Johar", "Gulshan-e-Iqbal", "Karachi"],
    ...(sameAs.length > 0 ? { sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon services",
      itemListElement: services.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        itemListElement: category.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      })),
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
