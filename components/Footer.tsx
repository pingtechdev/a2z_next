'use client';

import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  // Map section IDs to routes
  const sectionToRoute: Record<string, string> = {
    'hero': '/',
    'about': '/about',
    'services': '/services',
    'process': '/process',
    'contact': '/contact'
  };

  const navigateToSection = (id: string) => {
    const route = sectionToRoute[id] || '/';
    router.push(route);
  };

  const navigateToPage = (path: string) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => router.push('/')}>
              <Image src="/assets/new_logo.png" alt="A2Z Delivery" width={96} height={96} className="h-16 w-auto sm:h-20 md:h-24" />
              <span className="text-xl font-bold leading-tight">
                <span className="text-primary">A2Z</span> Delivery<br />Services
              </span>
            </div>
            <p className="text-white/80 mb-4 text-sm">
              Lebanon’s Trusted Delivery Partner since 2016.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/a2zdeliveryleb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/a2zdeliverylb/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => router.push('/')} className="text-white/80 hover:text-primary transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => navigateToSection("services")} className="text-white/80 hover:text-primary transition-colors">{t('nav.services')}</button>
              </li>
              <li>
                <button onClick={() => navigateToSection("about")} className="text-white/80 hover:text-primary transition-colors">{t('nav.about')}</button>
              </li>
              <li>
                <button onClick={() => navigateToPage('/track')} className="text-white/80 hover:text-primary transition-colors">{t('nav.track')}</button>
              </li>
              <li>
                <button onClick={() => navigateToSection("contact")} className="text-white/80 hover:text-primary transition-colors">{t('nav.contact')}</button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateToPage('/privacy-policy')} className="text-white/80 hover:text-primary transition-colors">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => navigateToPage('/terms-and-conditions')} className="text-white/80 hover:text-primary transition-colors">Terms & Conditions</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <div className="font-medium text-white mb-1">{t('contact.phone')}</div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+9613954689" className="hover:text-primary transition-colors">+961 3 954689</a>
                  <a href="tel:+96170954688" className="hover:text-primary transition-colors">+961 70 954688</a>
                  <a href="tel:+9611650905" className="hover:text-primary transition-colors">+961 1 650905</a>
                </div>
              </li>
              <li>
                <div className="font-medium text-white mb-1">Email</div>
                <a href="mailto:Info@a2zservices-lb.com" className="hover:text-primary transition-colors">Info@a2zservices-lb.com</a>
              </li>
              <li>
                <div className="font-medium text-white mb-1">{t('contact.address')}</div>
                <a href="https://www.google.com/maps?q=33.88997268676758,35.49995803833008&z=17&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">{t('contact.location')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} A2Z Delivery Services. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
