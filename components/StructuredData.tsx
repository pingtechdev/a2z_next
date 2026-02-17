'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/site-config";

interface StructuredDataProps {
  type?: "home" | "about" | "track" | "service";
  serviceName?: string;
  serviceDescription?: string;
}

export const StructuredData = ({ type = "home", serviceName, serviceDescription }: StructuredDataProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove existing structured data script
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "A2Z Delivery Services",
      "alternateName": "A2Z Services",
      "url": SITE_URL,
      "logo": DEFAULT_OG_IMAGE,
      "description": "Lebanon's leading logistics provider offering comprehensive delivery solutions from warehousing to last-mile delivery since 2016.",
      "foundingDate": "2016",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Salim Salam Highway, Al Hajj Building, Ground Floor",
        "addressLocality": "Beirut",
        "addressCountry": "LB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+961-3-954689",
        "contactType": "Customer Service",
        "email": "Info@a2zservices-lb.com",
        "areaServed": "LB",
        "availableLanguage": ["en", "ar"]
      },
      "sameAs": [
        // Add your social media URLs here when available
        // "https://www.facebook.com/a2zdelivery",
        // "https://www.instagram.com/a2zdelivery"
      ]
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#business`,
      "name": "A2Z Delivery Services",
      "image": DEFAULT_OG_IMAGE,
      "description": "Professional delivery and logistics services in Lebanon. Offering same-day delivery, COD services, fulfillment, warehousing, and packaging solutions.",
      "url": SITE_URL,
      "telephone": "+961-3-954689",
      "email": "Info@a2zservices-lb.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Salim Salam Highway, Al Hajj Building, Ground Floor",
        "addressLocality": "Beirut",
        "addressRegion": "Beirut",
        "postalCode": "",
        "addressCountry": "LB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.88997268676758",
        "longitude": "35.49995803833008"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "Lebanon"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Delivery Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local Delivery",
              "description": "Fast, secure local deliveries across Lebanon with real-time tracking"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Same-Day & Next-Day Delivery",
              "description": "Urgent same-day or cost-effective next-day delivery options"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fulfillment & Warehousing",
              "description": "End-to-end fulfillment with pick, pack and ship from secure warehouse"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Packaging Solutions",
              "description": "Custom packaging for fragile and high-value items with branded options"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cash On Delivery (COD)",
              "description": "Secure COD collections with transparent reporting and fast remittances"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding Service",
              "description": "Complete branding solutions including logo design and social media setup"
            }
          }
        ]
      }
    };

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        }
      ]
    };

    // Add page-specific breadcrumbs
    if (location.pathname !== "/") {
      const pathSegments = location.pathname.split("/").filter(Boolean);
      pathSegments.forEach((segment, index) => {
        const name = segment
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": `${SITE_URL}/${pathSegments.slice(0, index + 1).join("/")}`
        });
      });
    }

    // Combine all structured data
    const structuredData: any[] = [baseOrganization, localBusiness, breadcrumbList];

    // Add service-specific schema if applicable
    if (type === "service" && serviceName && serviceDescription) {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "Organization",
          "name": "A2Z Delivery Services"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Lebanon"
        }
      });
    }

    // Create and inject script
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.pathname, type, serviceName, serviceDescription]);

  return null;
};

