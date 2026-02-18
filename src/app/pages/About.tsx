import { useNavigate } from 'react-router';
import { Stethoscope, Target, Zap, Heart, Users, Smile } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.page.value1.title'),
      description: t('about.page.value1.desc'),
    },
    {
      icon: Heart,
      title: t('about.page.value2.title'),
      description: t('about.page.value2.desc'),
    },
    {
      icon: Zap,
      title: t('about.page.value3.title'),
      description: t('about.page.value3.desc'),
    },
  ];

  const timeline = [
    {
      step: '01',
      title: t('about.page.timeline.step1.title'),
      description: t('about.page.timeline.step1.desc'),
    },
    {
      step: '02',
      title: t('about.page.timeline.step2.title'),
      description: t('about.page.timeline.step2.desc'),
    },
    {
      step: '03',
      title: t('about.page.timeline.step3.title'),
      description: t('about.page.timeline.step3.desc'),
    },
    {
      step: '04',
      title: t('about.page.timeline.step4.title'),
      description: t('about.page.timeline.step4.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('about.page.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t('about.page.story.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {t('about.page.story.p1')} <span className="text-foreground font-semibold">{t('about.page.story.p1.bold')}</span>.
              </p>
              <p>
                {t('about.page.story.p2')} <span className="text-foreground font-semibold">{t('about.page.story.p2.bold')}</span>{t('about.page.story.p2.end')}
              </p>
              <p>
                {t('about.page.story.p3')}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.page.team.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.page.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('about.page.team.member1.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('about.page.team.member1.role')}</p>
              <p className="text-sm text-muted-foreground">
                {t('about.page.team.member1.desc')}
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smile className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{t('about.page.team.member2.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('about.page.team.member2.role')}</p>
              <p className="text-sm text-muted-foreground">
                {t('about.page.team.member2.desc')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.page.values.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.page.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.page.timeline.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.page.timeline.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 lg:p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('about.page.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('about.page.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/contact')}>
                {t('about.page.cta.primary')}
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/demos')}>
                {t('about.page.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}