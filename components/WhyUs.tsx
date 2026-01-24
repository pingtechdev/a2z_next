'use client';

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: CheckCircle2,
    titleKey: "whyus.reliability",
    descKey: "whyus.reliability.desc",
  },
  {
    icon: TrendingUp,
    titleKey: "whyus.pricing",
    descKey: "whyus.pricing.desc",
  },
  {
    icon: Users,
    titleKey: "whyus.team",
    descKey: "whyus.team.desc",
  },
  {
    icon: Award,
    titleKey: "whyus.award",
    descKey: "whyus.award.desc",
  },
];

const WhyUs = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="why-us" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('whyus.title')} <span className="text-gradient-secondary">A2Z?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('whyus.subtitle')}
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex gap-4 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
                      <p className="text-muted-foreground">{t(feature.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-white/90 text-lg">{t('whyus.stat1')}</div>
            </div>
            <div className="bg-gradient-to-br from-secondary to-accent rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/90 text-lg">{t('whyus.stat2')}</div>
            </div>
            <div className="bg-gradient-to-br from-accent to-blue-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/90 text-lg">{t('whyus.stat3')}</div>
            </div>
            <div className="bg-gradient-to-br from-primary to-yellow-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-white/90 text-lg">{t('whyus.stat4')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
