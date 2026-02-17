import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact A2Z Delivery Services in Lebanon. Get in touch for delivery quotes, COD services, fulfillment, and logistics support. We're here to help.",
  openGraph: {
    title: "Contact Us | A2Z Delivery Services",
    description: "Contact A2Z Delivery Services in Lebanon for delivery and logistics.",
    url: `${SITE_URL}/contact`,
  },
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
