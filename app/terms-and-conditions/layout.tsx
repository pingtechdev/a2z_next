import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using A2Z Delivery Services in Lebanon. Delivery, COD, and fulfillment terms.",
  robots: { index: true, follow: true },
  openGraph: { url: `${SITE_URL}/terms-and-conditions` },
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
};

export default function TermsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
