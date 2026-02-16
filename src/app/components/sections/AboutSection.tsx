import { Stethoscope, Smile } from 'lucide-react';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    { label: t('about.value1.title'), description: t('about.value1.description') },
    { label: t('about.value2.title'), description: t('about.value2.description') },
    { label: t('about.value3.title'), description: t('about.value3.description') },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Team */}
          <AnimatedSection delay={0.2}>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t('about.team.title')}
              </h3>
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smile className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('about.team.member1')} • {t('about.team.member2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.team.description')}
              </p>
            </Card>
          </AnimatedSection>

          {/* Right - Values */}
          <AnimatedSection delay={0.3}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t('about.values.title')}
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.label}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}