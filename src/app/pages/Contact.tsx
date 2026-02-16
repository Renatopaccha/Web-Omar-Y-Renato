import { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Contact() {
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
    // Here would be the form submission logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@clinicaweb.com',
      description: 'Respuesta en 24-48 horas',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+34 600 000 000',
      description: 'Horario de oficina',
    },
    {
      icon: Phone,
      title: 'Llamada',
      value: 'Previa cita',
      description: 'Agenda tu llamada',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Hablemos de tu proyecto
            </h1>
            <p className="text-lg text-muted-foreground">
              Cuéntanos sobre tu consultorio y te preparamos una propuesta personalizada
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
                  Solicita tu cotización
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y te responderemos en menos de 48 horas con una propuesta detallada.
                </p>
              </div>

              {submitted ? (
                <Card className="p-8 bg-accent/50 border-secondary">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Te responderemos en 24-48 horas.
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tu nombre <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Ej: Dr. Juan Pérez"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Consultorio <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Nombre del consultorio"
                          value={formData.consultorio}
                          onChange={(e) => setFormData({ ...formData, consultorio: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          País <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="text"
                          placeholder="Ej: España"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          WhatsApp <span className="text-muted-foreground text-xs">(opcional)</span>
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
                          Plan de interés <span className="text-destructive">*</span>
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                        >
                          <option value="">Selecciona un plan</option>
                          <option value="presencia">Presencia Profesional ($299)</option>
                          <option value="contacto">Citas por Contacto ($499)</option>
                          <option value="reserva">Reserva Online ($799)</option>
                          <option value="pro">Pro con Panel Admin ($1,499)</option>
                          <option value="custom">Proyecto personalizado</option>
                          <option value="consulta">Solo consulta</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Cuéntanos sobre tu proyecto <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-all min-h-[120px]"
                        placeholder="Describe tu consultorio, servicios principales, y qué esperas lograr con tu sitio web..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar cotización
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario, aceptas que procesemos tus datos de contacto para preparar una propuesta. No solicitamos información clínica o de pacientes.
                    </p>
                  </form>
                </Card>
              )}
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Otras formas de contacto
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
                  Proyectos personalizados
                </h3>
                <p className="text-muted-foreground mb-4">
                  ¿Necesitas algo más complejo? Podemos ayudarte con:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Múltiples sedes o consultorios',
                    'Integraciones con tu sistema actual',
                    'Funciones especiales (pagos, telemedicina)',
                    'Migraciones de sitios existentes',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground font-medium">
                  Escríbenos con los detalles y te preparamos una cotización personalizada.
                </p>
              </Card>

              <Card className="p-6 bg-accent/30">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Tiempo de respuesta
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Respondemos todas las cotizaciones en 24-48 horas hábiles. Si es urgente, contáctanos por WhatsApp.
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
