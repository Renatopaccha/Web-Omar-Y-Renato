import { useNavigate } from 'react-router';
import { Check, X, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export default function Pricing() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.plan1.name'),
      price: '$299',
      badge: t('pricing.plan1.badge'),
      description: t('pricing.page.plan1.desc'),
      features: [
        { name: t('pricing.page.plan1.f1'), included: true },
        { name: t('pricing.page.plan1.f2'), included: true },
        { name: t('pricing.page.plan1.f3'), included: true },
        { name: t('pricing.page.plan1.f4'), included: true },
        { name: t('pricing.page.plan1.f5'), included: true },
        { name: t('pricing.page.plan1.f6'), included: false },
        { name: t('pricing.page.plan1.f7'), included: false },
        { name: t('pricing.page.plan1.f8'), included: false },
      ],
    },
    {
      name: t('pricing.page.plan2.name'),
      price: '$499',
      badge: t('pricing.page.plan2.badge'),
      popular: true,
      description: t('pricing.page.plan2.desc'),
      features: [
        { name: t('pricing.page.plan2.f1'), included: true },
        { name: t('pricing.page.plan2.f2'), included: true },
        { name: t('pricing.page.plan2.f3'), included: true },
        { name: t('pricing.page.plan2.f4'), included: true },
        { name: t('pricing.page.plan2.f5'), included: true },
        { name: t('pricing.page.plan2.f6'), included: false },
        { name: t('pricing.page.plan2.f7'), included: false },
      ],
    },
    {
      name: t('pricing.page.plan3.name'),
      price: '$799',
      description: t('pricing.page.plan3.desc'),
      features: [
        { name: t('pricing.page.plan3.f1'), included: true },
        { name: t('pricing.page.plan3.f2'), included: true },
        { name: t('pricing.page.plan3.f3'), included: true },
        { name: t('pricing.page.plan3.f4'), included: true },
        { name: t('pricing.page.plan3.f5'), included: true },
        { name: t('pricing.page.plan3.f6'), included: false },
      ],
    },
    {
      name: t('pricing.page.plan4.name'),
      price: '$1,499',
      custom: true,
      description: t('pricing.page.plan4.desc'),
      features: [
        { name: t('pricing.page.plan4.f1'), included: true },
        { name: t('pricing.page.plan4.f2'), included: true },
        { name: t('pricing.page.plan4.f3'), included: true },
        { name: t('pricing.page.plan4.f4'), included: true },
        { name: t('pricing.page.plan4.f5'), included: true },
        { name: t('pricing.page.plan4.f6'), included: true },
      ],
    },
  ];

  const extras = [
    {
      name: t('pricing.page.extra1.name'),
      description: t('pricing.page.extra1.desc'),
      price: '+$200',
    },
    {
      name: t('pricing.page.extra2.name'),
      description: t('pricing.page.extra2.desc'),
      price: '+$150',
    },
    {
      name: t('pricing.page.extra3.name'),
      description: t('pricing.page.extra3.desc'),
      price: '+$100',
    },
    {
      name: t('pricing.page.extra4.name'),
      description: t('pricing.page.extra4.desc'),
      price: t('pricing.page.extra4.price'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('pricing.page.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('pricing.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                hover
                className={plan.popular ? 'border-2 border-secondary shadow-xl' : ''}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge variant={plan.popular ? 'popular' : 'launch'} className="mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardTitle className="mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.custom && <span className="text-sm text-muted-foreground">+</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    {t('pricing.page.plan.cta')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Maintenance */}
          <Card className="p-8 text-center bg-gradient-to-br from-accent/30 to-white border-primary/20">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {t('pricing.page.maintenance.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('pricing.page.maintenance.price')} <span className="text-primary font-semibold text-lg">{t('pricing.page.maintenance.monthly')}</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.page.maintenance.desc')}
            </p>
          </Card>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('pricing.page.extras.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('pricing.page.extras.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {extras.map((extra, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{extra.name}</h3>
                  <span className="text-primary font-semibold text-sm">{extra.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{extra.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('pricing.page.custom.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('pricing.page.custom.desc')}
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            {t('pricing.page.custom.cta')}
          </Button>
        </div>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-lg z-50">
        <Button className="w-full" onClick={() => navigate('/contact')}>
          {t('pricing.page.sticky.cta')}
        </Button>
      </div>
    </div>
  );
}
