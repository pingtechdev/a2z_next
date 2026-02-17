import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site-config";

/**
 * Server-rendered JSON-LD for Organization and LocalBusiness.
 * Crawlers see this in the initial HTML without running JavaScript.
 */
export function StructuredDataRoot() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "A2Z Delivery Services",
    alternateName: "A2Z Services",
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    description:
      "Lebanon's leading logistics provider offering comprehensive delivery solutions from warehousing to last-mile delivery since 2016.",
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Salim Salam Highway, Al Hajj Building, Ground Floor",
      addressLocality: "Beirut",
      addressCountry: "LB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+961-3-954689",
      contactType: "Customer Service",
      email: "Info@a2zservices-lb.com",
      areaServed: "LB",
      availableLanguage: ["en", "ar"],
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#business`,
    name: "A2Z Delivery Services",
    image: DEFAULT_OG_IMAGE,
    description:
      "Professional delivery and logistics services in Lebanon. Same-day delivery, COD, fulfillment, warehousing, and packaging solutions.",
    url: SITE_URL,
    telephone: "+961-3-954689",
    email: "Info@a2zservices-lb.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Salim Salam Highway, Al Hajj Building, Ground Floor",
      addressLocality: "Beirut",
      addressRegion: "Beirut",
      addressCountry: "LB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.88997268676758",
      longitude: "35.49995803833008",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    areaServed: { "@type": "Country", name: "Lebanon" },
  };

  const jsonLd = JSON.stringify([organization, localBusiness]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
