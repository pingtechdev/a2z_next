'use client';

import { useEffect, useRef, useState } from "react";
import { Settings, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const solutions = [
  {
    icon: Settings,
    titleKey: "solutions.custom.title",
    descKey: "solutions.custom.desc",
    color: "from-primary to-orange-500",
  },
  {
    icon: Zap,
    titleKey: "solutions.integration.title",
    descKey: "solutions.integration.desc",
    color: "from-secondary to-blue-600",
  },
  {
    icon: TrendingUp,
    titleKey: "solutions.support.title",
    descKey: "solutions.support.desc",
    color: "from-accent to-purple-600",
  },
];

const BusinessSolutions = () => {
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
    <section id="solutions" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">{t('solutions.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t(solution.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(solution.descKey)}</p>
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

export default BusinessSolutions;
