'use client';

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, X } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  title: string;
  description: string;
  backgroundImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const Hero = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hero slides with responsive images
  const heroSlides: HeroSlide[] = [
    {
      title: t('hero.slide1.title'),
      description: t('hero.slide1.description'),
      backgroundImage: {
        mobile: '/assets/files/hero/38.webp',
        tablet: '/assets/files/hero/38.webp',
        desktop: '/assets/files/hero/38.webp'
      }
    },
    {
      title: t('hero.slide2.title'),
      description: t('hero.slide2.description'),
      backgroundImage: {
        mobile: '/assets/files/hero/37.webp',
        tablet: '/assets/files/hero/37.webp',
        desktop: '/assets/files/hero/37.webp'
      }
    },
    {
      title: t('hero.slide3.title'),
      description: t('hero.slide3.description'),
      backgroundImage: {
        mobile: '/assets/files/hero/28.webp',
        tablet: '/assets/files/hero/28.webp',
        desktop: '/assets/files/hero/28.webp'
      }
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const scrollToContact = () => {
    router.push('/contact');
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden mt-[65px] sm:mt-[69px] md:mt-[73px] lg:mt-[65px] min-h-[50vh] bg-gray-50">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Circular Progress */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <motion.div
                className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </div>
            <p className="text-gray-500 font-medium animate-pulse mt-4 text-lg">Loading...</p>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Full Screen Image Carousel - Relative to drive height */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={heroSlides[currentTextIndex].backgroundImage.mobile}
              />
              <source
                media="(max-width: 1280px)"
                srcSet={heroSlides[currentTextIndex].backgroundImage.tablet}
              />
              <img
                src={heroSlides[currentTextIndex].backgroundImage.desktop}
                alt="Hero Background"
                className="w-full h-auto block"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onLoad={() => setIsLoading(false)}
              />
            </picture>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay - Absolute on top of image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center text-white">
              {/* Main Heading - Rotating */}
              <AnimatedContent delay={0.3}>
                <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-12">
                  <div className="relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTextIndex}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center px-2 sm:px-4 leading-tight">
                          <span className="text-white drop-shadow-2xl">
                            {heroSlides[currentTextIndex].title}
                          </span>
                        </h1>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Rotating descriptions */}
                  <div className="relative h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`desc-${currentTextIndex}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="absolute inset-0 flex items-center justify-center px-4"
                      >
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white max-w-4xl mx-auto text-center leading-relaxed drop-shadow-lg px-2 sm:px-4">
                          {heroSlides[currentTextIndex].description.split('\n').map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < heroSlides[currentTextIndex].description.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </AnimatedContent>

              {/* CTA Buttons */}
              <AnimatedButtons delay={0.5}>
                <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 px-4">
                  {/* Primary CTA Button - Start Delivering With Us */}
                  <button
                    onClick={scrollToContact}
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    {t('hero.becomePartner')}
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimatedButtons>
            </div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2 sm:space-x-3">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentTextIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                  }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTextIndex(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Inline animation components
const AnimatedBadge = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, scale: 0.95 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedContent = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, scale: 0.95 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedButtons = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, scale: 0.95 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.25, 0.25, 0.75] }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
