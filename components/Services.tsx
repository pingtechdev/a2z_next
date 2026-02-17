'use client';

import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesList } from "@/lib/services-data";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600">Comprehensive logistics solutions designed to help your business grow.</p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {servicesList.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="group relative bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${service.color} shadow-lg backdrop-blur-md bg-white/90`}>
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-4 sm:space-y-6 mt-auto">
                    <div className="space-y-2 sm:space-y-3">
                      {service.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm font-medium text-gray-700">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-gray-100">
                      <span className="inline-flex items-center font-bold uppercase tracking-wider text-xs sm:text-sm text-blue-600 group-hover:text-blue-700 transition-colors">
                        Learn more
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
