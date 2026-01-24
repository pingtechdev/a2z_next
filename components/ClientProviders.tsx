'use client';

import { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <Navbar />
        {children}
        <WhatsAppButton />
      </LanguageProvider>
    </TooltipProvider>
  );
}
