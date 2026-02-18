import { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    consultorio: '',
    country: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.page.method1.title'),
      value: t('contact.page.method1.value'),
      description: t('contact.page.method1.desc'),
    },
    {
      icon: MessageSquare,
      title: t('contact.page.method2.title'),
      value: t('contact.page.method2.value'),
      description: t('contact.page.method2.desc'),
    },
    {
      icon: Phone,
      title: t('contact.page.method3.title'),
      value: t('contact.page.method3.value'),
      description: t('contact.page.method3.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('contact.page.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.page.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {t('contact.page.form.title')}
                </h2>
                <p className="text-muted-foreground">
                  {t('contact.page.form.subtitle')}
                </p>
              </div>

              {submitted ? (
                <Card className="p-8 bg-accent/50 border-secondary">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('contact.page.form.success.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.page.form.success.desc')}
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.name')} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder={t('contact.page.form.name.placeholder')}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.consultorio')} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder={t('contact.page.form.consultorio.placeholder')}
                          value={formData.consultorio}
                          onChange={(e) => setFormData({ ...formData, consultorio: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.country')} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder={t('contact.page.form.country.placeholder')}
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.email')} <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="email"
                          placeholder={t('contact.page.form.email.placeholder')}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.whatsapp')} <span className="text-muted-foreground text-xs">{t('contact.page.form.whatsapp.optional')}</span>
                        </label>
                        <Input
                          type="tel"
                          placeholder="+34 600 000 000"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {t('contact.page.form.plan')} <span className="text-destructive">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                        >
                          <option value="">{t('contact.page.form.plan.default')}</option>
                          <option value="presencia">{t('contact.page.form.plan.presencia')}</option>
                          <option value="contacto">{t('contact.page.form.plan.contacto')}</option>
                          <option value="reserva">{t('contact.page.form.plan.reserva')}</option>
                          <option value="pro">{t('contact.page.form.plan.pro')}</option>
                          <option value="custom">{t('contact.page.form.plan.custom')}</option>
                          <option value="consulta">{t('contact.page.form.plan.consulta')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.page.form.message')} <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all min-h-[120px]"
                        placeholder={t('contact.page.form.message.placeholder')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {t('contact.page.form.submit')}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t('contact.page.form.privacy')}
                    </p>
                  </form>
                </Card>
              )}
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.page.methods.title')}
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">
                              {method.title}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-1">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('contact.page.custom.title')}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t('contact.page.custom.desc')}
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    t('contact.page.custom.item1'),
                    t('contact.page.custom.item2'),
                    t('contact.page.custom.item3'),
                    t('contact.page.custom.item4'),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground font-medium">
                  {t('contact.page.custom.footer')}
                </p>
              </Card>

              <Card className="p-6 bg-accent/30">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {t('contact.page.response.title')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.page.response.desc')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
