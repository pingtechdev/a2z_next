'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Roadmap from "@/components/Roadmap";
import TrackOrder from "@/components/TrackOrder";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const routeToSectionId: Record<string, string> = {
      '/about': 'about',
      '/services': 'services',
      '/process': 'process',
      '/contact': 'contact',
      '/': 'hero'
    };
    const sectionId = routeToSectionId[pathname] || 'hero';

    const scrollToSection = () => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'auto' });
      }
    };

    const id = requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <Clients />
      <Services />
      <Roadmap />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  );
}
