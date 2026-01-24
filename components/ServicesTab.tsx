'use client';

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Truck, Clock, Package, Warehouse, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesTab = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    { key: 'services.local.title', descKey: 'services.local.desc', icon: Truck, color: 'from-primary to-orange-500' },
    { key: 'services.shipping.title', descKey: 'services.shipping.desc', icon: Clock, color: 'from-secondary to-blue-600' },
    { key: 'services.packaging.title', descKey: 'services.packaging.desc', icon: Package, color: 'from-accent to-blue-500' },
    { key: 'services.fulfillment.title', descKey: 'services.fulfillment.desc', icon: Warehouse, color: 'from-primary to-yellow-600' },
    { key: 'services.cod.title', descKey: 'services.cod.desc', icon: DollarSign, color: 'from-accent to-green-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">{t('services.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{t(service.key)}</h3>
                    <p className="text-sm text-muted-foreground">{t(service.descKey)}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesTab;

// Add to your global CSS for custom scrollbar
// .custom-scrollbar::-webkit-scrollbar {
//   width: 6px;
// }
// .custom-scrollbar::-webkit-scrollbar-track {
//   background: rgba(255, 255, 255, 0.1);
//   border-radius: 10px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//   background: rgba(255, 255, 255, 0.3);
//   border-radius: 10px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//   background: rgba(255, 255, 255, 0.5);
// }
