import { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../context/LanguageContext';

export function ContactSection() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the form submission logic
    alert(t('contact.form.success'));
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Info */}
          <AnimatedSection delay={0.2}>
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {t('contact.info.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.info.description')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('contact.email')}</h4>
                    <p className="text-sm text-muted-foreground">contacto@clinicaweb.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('contact.whatsapp')}</h4>
                    <p className="text-sm text-muted-foreground">Disponible en horario laboral</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 rounded-xl p-4 border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Proyectos personalizados:</span> Si necesitas panel admin, múltiples sedes o funciones especiales, escríbenos por email con los detalles.
                </p>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                No solicitamos datos clínicos. Solo datos de contacto para coordinar tu proyecto.
              </p>
            </Card>
          </AnimatedSection>

          {/* Right - Form */}
          <AnimatedSection delay={0.3}>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder={t('contact.form.consultorio')}
                    value={formData.consultorio}
                    onChange={(e) => setFormData({ ...formData, consultorio: e.target.value })}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t('contact.form.country')}
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder={t('contact.form.whatsapp')}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                  <Input
                    placeholder={t('contact.form.service')}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  />
                </div>

                <textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />

                <Button type="submit" size="lg" className="w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}