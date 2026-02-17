import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Delivery & Logistics Services",
  description:
    "A2Z delivery services in Lebanon: same-day delivery, COD, fulfillment, warehousing, packaging, and branding. Full logistics solutions for your business.",
  openGraph: {
    title: "Delivery & Logistics Services | A2Z Delivery Services",
    description:
      "Same-day delivery, COD, fulfillment, warehousing, and packaging in Lebanon.",
    url: `${SITE_URL}/services`,
  },
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
