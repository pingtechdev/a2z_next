import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "A2Z Delivery Services - Lebanon's Trusted Logistics Partner",
  description: "Professional delivery services in Lebanon with real-time tracking, COD options, fulfillment, warehousing, and reliable logistics solutions. Trusted by top online shops since 2016.",
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/assets/new_logo.png?v=2', type: 'image/png' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/assets/new_logo.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
