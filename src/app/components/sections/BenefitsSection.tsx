import { Heart, Smartphone, FileText, Zap, Globe, Settings } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Heart,
      title: t('benefits.1.title'),
      description: t('benefits.1.description'),
    },
    {
      icon: Smartphone,
      title: t('benefits.2.title'),
      description: t('benefits.2.description'),
    },
    {
      icon: FileText,
      title: t('benefits.3.title'),
      description: t('benefits.3.description'),
    },
    {
      icon: Zap,
      title: t('benefits.4.title'),
      description: t('benefits.4.description'),
    },
    {
      icon: Globe,
      title: t('benefits.5.title'),
      description: t('benefits.5.description'),
    },
    {
      icon: Settings,
      title: t('benefits.6.title'),
      description: t('benefits.6.description'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card hover className="h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}