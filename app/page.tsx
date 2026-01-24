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
    // Map routes to section IDs
    const routeToSectionId: Record<string, string> = {
      '/about': 'about',
      '/services': 'services',
      '/process': 'process',
      '/contact': 'contact',
      '/': 'hero'
    };

    const sectionId = routeToSectionId[pathname] || 'hero';
    
    // Scroll to section after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
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
