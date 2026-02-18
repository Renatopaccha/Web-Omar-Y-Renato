import { useNavigate } from 'react-router';
import { Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function DemosSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const demos = [
    {
      title: t('demos.card1.title'),
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
      available: true,
      route: '/demos/odontologia',
      preview: {
        emoji: '🦷',
        label: 'Dra. Valeria Romero',
        sublabel: 'Odontología Estética',
        colorFrom: 'from-[#0B4A6F]/10',
        colorTo: 'to-[#1A5F7A]/10',
      },
    },
    {
      title: t('demos.card2.title'),
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
      available: false,
      route: '/demos',
      preview: {
        emoji: '🏥',
        label: 'Consultorio Médico',
        sublabel: 'Medicina General',
        colorFrom: 'from-primary/10',
        colorTo: 'to-secondary/10',
      },
    },
    {
      title: t('demos.card3.title'),
      features: [t('demos.feature1'), t('demos.feature2'), t('demos.feature3')],
      available: false,
      route: '/demos',
      preview: {
        emoji: '⚕️',
        label: 'Especialidad Médica',
        sublabel: 'Próximamente',
        colorFrom: 'from-primary/10',
        colorTo: 'to-secondary/10',
      },
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
              <Card className="overflow-hidden h-full flex flex-col">
                {/* Preview visual */}
                <div
                  className={`aspect-video bg-gradient-to-br ${demo.preview.colorFrom} ${demo.preview.colorTo} -mx-6 -mt-6 mb-6 flex items-center justify-center relative`}
                >
                  {!demo.available && (
                    <div className="absolute top-3 right-3 bg-muted text-muted-foreground text-xs font-medium px-2 py-1 rounded-full">
                      Próximamente
                    </div>
                  )}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-2xl" role="img" aria-label={demo.title}>
                        {demo.preview.emoji}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{demo.preview.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{demo.preview.sublabel}</p>
                  </div>
                </div>

                <CardHeader className="pt-0">
                  <CardTitle className="text-base">{demo.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {demo.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {demo.available ? (
                    <Button className="w-full" onClick={() => navigate(demo.route)}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('demos.cta')}
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      Próximamente
                    </Button>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            <span className="text-accent-foreground font-medium">{t('demos.note')}</span>{' '}
            {t('demos.note.text')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}