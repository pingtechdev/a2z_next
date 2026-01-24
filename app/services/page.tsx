'use client';

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Roadmap from "@/components/Roadmap";
import TrackOrder from "@/components/TrackOrder";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
