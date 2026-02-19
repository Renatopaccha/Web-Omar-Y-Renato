import { useNavigate } from 'react-router';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function DemosSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const demos = [
    {
      title: t('demos.card1.title'),
      image: 'dental clinic office',
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
    },
    {
      title: t('demos.card2.title'),
      image: 'medical doctor office',
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
    },
    {
      title: t('demos.card3.title'),
      image: 'specialist medical office',
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
    },
  ];

  return (
    <section id="demos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('demos.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demos.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card hover className="overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 -mx-6 -mt-6 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Vista previa</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{demo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" onClick={() => navigate(index === 0 ? '/demos/odontologia' : '/demos')}>
                    {t('demos.cta')}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            <span className="text-accent-foreground font-medium">{t('demos.note')}</span> {t('demos.note.text')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}