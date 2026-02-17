import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "A2Z Delivery Services privacy policy. How we collect, use, and protect your data when you use our delivery and logistics services in Lebanon.",
  robots: { index: true, follow: true },
  openGraph: { url: `${SITE_URL}/privacy-policy` },
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
