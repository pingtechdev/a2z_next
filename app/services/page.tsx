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
    const scroll = () => {
      const el = document.getElementById('services');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'auto' });
      }
    };
    const id = requestAnimationFrame(() => requestAnimationFrame(scroll));
    return () => cancelAnimationFrame(id);
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
