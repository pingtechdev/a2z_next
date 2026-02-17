import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Track Your Order",
  description:
    "Track your A2Z delivery in Lebanon in real time. Enter your tracking number to see status and estimated delivery.",
  openGraph: {
    title: "Track Your Order | A2Z Delivery Services",
    description: "Track your A2Z delivery in Lebanon in real time.",
    url: `${SITE_URL}/track`,
  },
  alternates: { canonical: `${SITE_URL}/track` },
};

export default function TrackLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
