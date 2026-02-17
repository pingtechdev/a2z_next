/**
 * Central site config for SEO, sitemap, and structured data.
 * Update SITE_URL when deploying to production.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.a2zservices-lb.com";

export const SITE_NAME = "A2Z Delivery Services";
export const DEFAULT_TITLE = "A2Z Delivery Services - Lebanon's Trusted Logistics Partner Since 2016";
export const DEFAULT_DESCRIPTION =
  "Professional delivery services in Lebanon with real-time tracking, COD options, fulfillment, warehousing, and reliable logistics solutions. Trusted by top online shops since 2016.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/new_logo.png`;
