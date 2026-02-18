import { Shield, Eye, Lock, Mail } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../context/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: t('privacy.page.s1.title'),
      content: [
        t('privacy.page.s1.i1'),
        t('privacy.page.s1.i2'),
        t('privacy.page.s1.i3'),
      ],
    },
    {
      icon: Eye,
      title: t('privacy.page.s2.title'),
      content: [
        t('privacy.page.s2.i1'),
        t('privacy.page.s2.i2'),
        t('privacy.page.s2.i3'),
        t('privacy.page.s2.i4'),
      ],
    },
    {
      icon: Lock,
      title: t('privacy.page.s3.title'),
      content: [
        t('privacy.page.s3.i1'),
        t('privacy.page.s3.i2'),
        t('privacy.page.s3.i3'),
        t('privacy.page.s3.i4'),
      ],
    },
    {
      icon: Mail,
      title: t('privacy.page.s4.title'),
      content: [
        t('privacy.page.s4.i1'),
        t('privacy.page.s4.i2'),
        t('privacy.page.s4.i3'),
        t('privacy.page.s4.i4'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('privacy.page.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('privacy.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Card className="p-8 bg-accent/50">
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">{t('privacy.page.updated')}</span> {t('privacy.page.updated.date')}
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {t('privacy.page.intro')}
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground mt-2">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Cookies */}
          <div className="mt-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.page.cookies.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('privacy.page.cookies.p1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('privacy.page.cookies.p2')}
              </p>
            </Card>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t('privacy.page.contact.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.page.contact.desc')}
              </p>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contacto@clinicaweb.com" className="text-primary font-medium hover:underline">
                  contacto@clinicaweb.com
                </a>
              </div>
            </Card>
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              {t('privacy.page.footer')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
