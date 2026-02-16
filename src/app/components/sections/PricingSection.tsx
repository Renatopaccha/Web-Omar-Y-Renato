import { useNavigate } from 'react-router';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function PricingSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.plan1.name'),
      price: t('pricing.plan1.price'),
      badge: 'launch',
      badgeText: t('pricing.plan1.badge'),
      features: [
        t('pricing.plan1.feature1'),
        t('pricing.plan1.feature2'),
        t('pricing.plan1.feature3'),
        t('pricing.plan1.feature4'),
        t('pricing.plan1.feature5'),
      ],
    },
    {
      name: t('pricing.plan2.name'),
      price: t('pricing.plan2.price'),
      badge: 'popular',
      badgeText: t('pricing.plan2.badge'),
      popular: true,
      features: [
        t('pricing.plan2.feature1'),
        t('pricing.plan2.feature2'),
        t('pricing.plan2.feature3'),
        t('pricing.plan2.feature4'),
        t('pricing.plan2.feature5'),
      ],
    },
    {
      name: t('pricing.plan3.name'),
      price: t('pricing.plan3.price'),
      badge: 'default',
      features: [
        t('pricing.plan3.feature1'),
        t('pricing.plan3.feature2'),
        t('pricing.plan3.feature3'),
        t('pricing.plan3.feature4'),
        t('pricing.plan3.feature5'),
      ],
    },
    {
      name: t('pricing.plan4.name'),
      price: t('pricing.plan4.price'),
      badge: 'default',
      custom: true,
      features: [
        t('pricing.plan4.feature1'),
        t('pricing.plan4.feature2'),
        t('pricing.plan4.feature3'),
        t('pricing.plan4.feature4'),
        t('pricing.plan4.feature5'),
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card
                hover
                className={`h-full flex flex-col ${
                  plan.popular ? 'border-primary border-2 shadow-lg' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    {plan.badgeText && (
                      <Badge variant={plan.badge as any}>{plan.badgeText}</Badge>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">USD</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => navigate('/pricing')}
                  >
                    {t('pricing.cta')}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            <span className="text-accent-foreground font-medium">{t('pricing.note')}</span> {t('pricing.note.text')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}