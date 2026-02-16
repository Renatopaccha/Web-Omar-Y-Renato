import { FileText, Eye, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
    },
    {
      number: '02',
      icon: Eye,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
    },
    {
      number: '03',
      icon: Sparkles,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
    },
  ];

  return (
    <section id="process" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('process.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-white rounded-2xl border border-border p-8 text-center h-full">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 relative">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                    <div className="absolute inset-0 bg-primary rounded-2xl animate-pulse opacity-30"></div>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.6} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent rounded-xl border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {t('process.included')}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}