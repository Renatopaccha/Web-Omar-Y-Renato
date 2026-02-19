import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useLanguage } from '../context/LanguageContext';

export default function Demos() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('demos.page.cat.all') },
    { id: 'dental', label: t('demos.page.cat.dental') },
    { id: 'medical', label: t('demos.page.cat.medical') },
    { id: 'specialty', label: t('demos.page.cat.specialty') },
  ];

  const demos = [
    {
      id: 1,
      title: t('demos.page.demo1.title'),
      category: 'dental',
      image: 'dental clinic interior',
      features: [
        t('demos.page.demo1.f1'),
        t('demos.page.demo1.f2'),
        t('demos.page.demo1.f3'),
        t('demos.page.demo1.f4'),
      ],
      available: true,
    },
    {
      id: 2,
      title: t('demos.page.demo2.title'),
      category: 'medical',
      image: 'doctor consultation room',
      features: [
        t('demos.page.demo2.f1'),
        t('demos.page.demo2.f2'),
        t('demos.page.demo2.f3'),
        t('demos.page.demo2.f4'),
      ],
      available: true,
    },
    {
      id: 3,
      title: t('demos.page.demo3.title'),
      category: 'specialty',
      image: 'dermatology clinic',
      features: [
        t('demos.page.demo3.f1'),
        t('demos.page.demo3.f2'),
        t('demos.page.demo3.f3'),
        t('demos.page.demo3.f4'),
      ],
      available: true,
    },
    {
      id: 4,
      title: t('demos.page.demo4.title'),
      category: 'dental',
      image: 'orthodontics office',
      features: [
        t('demos.page.demo4.f1'),
        t('demos.page.demo4.f2'),
        t('demos.page.demo4.f3'),
        t('demos.page.demo4.f4'),
      ],
      available: false,
    },
    {
      id: 5,
      title: t('demos.page.demo5.title'),
      category: 'medical',
      image: 'pediatric clinic',
      features: [
        t('demos.page.demo5.f1'),
        t('demos.page.demo5.f2'),
        t('demos.page.demo5.f3'),
        t('demos.page.demo5.f4'),
      ],
      available: false,
    },
    {
      id: 6,
      title: t('demos.page.demo6.title'),
      category: 'specialty',
      image: 'physiotherapy clinic',
      features: [
        t('demos.page.demo6.f1'),
        t('demos.page.demo6.f2'),
        t('demos.page.demo6.f3'),
        t('demos.page.demo6.f4'),
      ],
      available: false,
    },
  ];

  const filteredDemos = selectedCategory === 'all'
    ? demos
    : demos.filter((demo) => demo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('demos.page.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('demos.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border sticky top-20 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground">{t('demos.page.filter')}</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === category.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-muted text-foreground hover:bg-accent'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo) => (
              <Card key={demo.id} hover className="overflow-hidden">
                {/* Demo Preview */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 -mx-6 -mt-6 mb-6 relative flex items-center justify-center">
                  {!demo.available && (
                    <Badge variant="default" className="absolute top-4 right-4">
                      {t('demos.page.coming')}
                    </Badge>
                  )}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">🏥</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t('demos.page.preview')}</p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{demo.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{t('demos.page.includes')}</p>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {demo.available ? (
                    <>
                      <Button
                        variant="outline"
                        className="w-full mb-2"
                        onClick={() => {
                          if (demo.id === 1) {
                            navigate('/demos/odontologia');
                          } else {
                            alert(t('demos.page.preview'));
                          }
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('demos.page.view')}
                      </Button>
                      <Button
                        className="w-full"
                        onClick={() => navigate('/contact')}
                      >
                        {t('demos.page.want')}
                      </Button>
                    </>
                  ) : (
                    <Button variant="ghost" className="w-full" disabled>
                      {t('demos.page.coming')}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('demos.page.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('demos.page.cta.desc')}
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            {t('demos.page.cta.button')}
          </Button>
        </div>
      </section>
    </div>
  );
}
