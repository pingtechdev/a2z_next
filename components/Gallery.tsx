'use client';

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/assets/1.webp", alt: "A2Z Delivery 1" },
  { src: "/assets/2.webp", alt: "A2Z Delivery 2" },
  { src: "/assets/3.webp", alt: "A2Z Delivery 3" },
  { src: "/assets/4.webp", alt: "A2Z Delivery 4" },
  { src: "/assets/5.webp", alt: "A2Z Delivery 5" },
  { src: "/assets/6.webp", alt: "A2Z Delivery 6" },
  { src: "/assets/7.webp", alt: "A2Z Delivery 7" },
  { src: "/assets/8.webp", alt: "A2Z Delivery 8" },
  { src: "/assets/9.webp", alt: "A2Z Delivery 9" },
  { src: "/assets/10.webp", alt: "A2Z Delivery 10" },
  { src: "/assets/12.webp", alt: "A2Z Delivery 12" },
  { src: "/assets/13.webp", alt: "A2Z Delivery 13" },
  { src: "/assets/14.webp", alt: "A2Z Delivery 14" },
  { src: "/assets/15.webp", alt: "A2Z Delivery 15" },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const imagesPerPage = 2;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  useEffect(() => setIsVisible(true), []);

  const next = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentImages = () => {
    const startIndex = currentPage * imagesPerPage;
    return galleryImages.slice(startIndex, startIndex + imagesPerPage);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">{t('gallery.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getCurrentImages().map((image, index) => (
              <div
                key={currentPage * imagesPerPage + index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPage
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
