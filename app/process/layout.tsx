import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How A2Z Delivery works: from sign-up to tracking. Simple steps to start using our delivery and fulfillment services in Lebanon.",
  openGraph: {
    title: "How It Works | A2Z Delivery Services",
    description: "Simple steps to start using A2Z delivery and fulfillment in Lebanon.",
    url: `${SITE_URL}/process`,
  },
  alternates: { canonical: `${SITE_URL}/process` },
};

export default function ProcessLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
