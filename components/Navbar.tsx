'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Image from "next/image";

const Navbar = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionToRoute: Record<string, string> = {
    'hero': '/',
    'home': '/',
    'about': '/about',
    'services': '/services',
    'process': '/process',
    'contact': '/contact'
  };

  const handleClick = (id: string) => {
    const route = sectionToRoute[id] || '/';
    
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }

    router.push(route);
  };

  const navigateToPage = (path: string) => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
    router.push(path);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md">
      <div className="bg-blue-600 border-b border-blue-500 relative">
        <div className="flex items-center justify-between w-full max-w-full px-2 sm:px-3 md:px-5 lg:px-7.5 xl:px-10 py-2.5 sm:py-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-10">
            <Image
              src="/assets/new_logo.png"
              alt="A2Z"
              width={96}
              height={96}
              className="object-contain h-12 w-auto sm:h-16 sm:max-h-16 md:h-20 md:max-h-20 lg:h-20 lg:max-h-20 xl:h-24 xl:max-h-24"
              priority
            />
          </Link>

          <nav
            className={`${openNavigation ? "flex" : "hidden"
              } fixed top-[65px] sm:top-[69px] md:top-[73px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 left-0 right-0 bottom-0 bg-white lg:flex lg:bg-transparent overflow-y-auto lg:overflow-visible`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:flex-nowrap lg:items-center gap-6 lg:gap-2">
              {[
                { id: "hero", label: t('nav.home'), route: "/" },
                { id: "about", label: t('nav.about'), route: "/about" },
                { id: "services", label: t('nav.services'), route: "/services" },
                { id: "process", label: "Our Process", route: "/process" },
                { id: "contact", label: t('nav.contact'), route: "/contact" },
              ].map((item) => {
                const isActive = pathname === item.route || 
                  (item.route === '/' && pathname === '/');
                return (
                  <a
                    key={item.id}
                    href={item.route}
                    onClick={(e) => { e.preventDefault(); handleClick(item.id); }}
                    className={`flex items-center justify-center relative font-code text-base sm:text-lg uppercase transition-all duration-200 px-4 py-2 lg:text-sm lg:font-semibold xl:text-base whitespace-nowrap rounded-md ${
                      isActive
                        ? "text-yellow-400 lg:bg-yellow-400 lg:text-gray-900"
                        : "text-gray-900 lg:text-white"
                    } lg:leading-6 xl:px-3 hover:bg-yellow-400 hover:text-gray-900 lg:hover:bg-yellow-400 lg:hover:text-gray-900`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="/track"
                onClick={(e) => { e.preventDefault(); navigateToPage('/track'); }}
                className="flex items-center justify-center relative font-code text-base sm:text-lg uppercase text-gray-900 lg:text-white transition-all duration-200 hover:bg-yellow-400 hover:text-gray-900 lg:hover:bg-yellow-400 lg:hover:text-gray-900 px-4 py-2 lg:text-sm lg:font-semibold xl:text-base whitespace-nowrap rounded-md lg:leading-6 xl:px-3"
              >
                {t('nav.track')}
              </a>
              <a
                href="https://admin.a2zservices-lb.com/login"
                onClick={(e) => { 
                  e.preventDefault(); 
                  if (openNavigation) {
                    enablePageScroll();
                    setOpenNavigation(false);
                  }
                  window.location.href = 'https://admin.a2zservices-lb.com/login';
                }}
                className="flex items-center justify-center relative font-code text-base sm:text-lg uppercase text-gray-900 lg:text-white transition-all duration-200 hover:bg-yellow-400 hover:text-gray-900 lg:hover:bg-yellow-400 lg:hover:text-gray-900 px-4 py-2 lg:text-sm lg:font-semibold xl:text-base whitespace-nowrap rounded-md lg:leading-6 xl:px-3"
              >
                Login
              </a>

              <div className="lg:hidden flex flex-col items-center gap-4 mt-4 pb-8 text-gray-600 text-sm">
                <div className="flex flex-col items-center gap-2">
                  <a href="tel:+9613954689">+961 3 954689</a>
                  <a href="mailto:Info@a2zservices-lb.com">Info@a2zservices-lb.com</a>
                </div>
              </div>
            </div>
          </nav>

          <button
            className="lg:hidden text-white flex-shrink-0 p-1"
            onClick={toggleNavigation}
          >
            {openNavigation ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


