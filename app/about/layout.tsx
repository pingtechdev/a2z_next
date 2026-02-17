import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A2Z Delivery Services – Lebanon's trusted logistics partner since 2016. Our team, values, and commitment to reliable delivery and fulfillment.",
  openGraph: {
    title: "About Us | A2Z Delivery Services",
    description:
      "Learn about A2Z Delivery Services – Lebanon's trusted logistics partner since 2016.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
