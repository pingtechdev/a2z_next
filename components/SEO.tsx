'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  canonical?: string;
}

const SITE_URL = "https://www.a2zservices-lb.com"; // Update with your actual domain
const DEFAULT_TITLE = "A2Z Delivery Services - Lebanon's Trusted Logistics Partner Since 2016";
const DEFAULT_DESCRIPTION = "Professional delivery services in Lebanon with real-time tracking, COD options, fulfillment, warehousing, and reliable logistics solutions for your business needs.";
const DEFAULT_IMAGE = `${SITE_URL}/src/assets/new_logo.png`;
const DEFAULT_KEYWORDS = "delivery services Lebanon, logistics Lebanon, COD delivery, same day delivery, fulfillment services, warehousing Lebanon, package delivery, courier services Lebanon, A2Z delivery";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  noindex = false,
  canonical,
}: SEOProps) => {
  const pathname = usePathname();
  const currentUrl = url || `${SITE_URL}${pathname}`;
  const pageTitle = title ? `${title} | A2Z Delivery Services` : DEFAULT_TITLE;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    
    // Open Graph tags
    updateMetaTag("og:title", pageTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "A2Z Delivery Services", true);
    updateMetaTag("og:locale", "en_US", true);
    updateMetaTag("og:locale:alternate", "ar_LB", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", pageTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Language alternates
    const updateLangAlternate = (lang: string, href: string) => {
      let langLink = document.querySelector(`link[rel='alternate'][hreflang='${lang}']`) as HTMLLinkElement;
      if (!langLink) {
        langLink = document.createElement("link");
        langLink.setAttribute("rel", "alternate");
        langLink.setAttribute("hreflang", lang);
        document.head.appendChild(langLink);
      }
      langLink.setAttribute("href", href);
    };

    updateLangAlternate("en", currentUrl);
    updateLangAlternate("ar", `${currentUrl}?lang=ar`);
    updateLangAlternate("x-default", currentUrl);

  }, [pageTitle, description, keywords, image, currentUrl, type, noindex, canonicalUrl]);

  return null;
};

