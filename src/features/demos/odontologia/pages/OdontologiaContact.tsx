import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

export default function OdontologiaContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: no envía datos reales
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link
            to="/demos/odontologia"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Estamos aquí para responder tus preguntas y ayudarte a iniciar tu tratamiento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dirección</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Av. 12 de Abril y Solano
                        <br />
                        Edificio Médico Santa Ana
                        <br />
                        Piso 3, Consultorio 302
                        <br />
                        Cuenca, Ecuador
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Teléfono</h4>
                      <a href="tel:+593991234567" className="text-primary hover:underline block">
                        +593 99 123 4567
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lunes a Viernes, 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <a
                        href="mailto:consulta@draromero.com"
                        className="text-primary hover:underline block"
                      >
                        consulta@draromero.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Horarios</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                        <p>Sábados: 9:00 - 13:00</p>
                        <p>Domingos: Cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="bg-secondary/30 h-[300px] flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-muted-foreground opacity-50 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">Mapa interactivo (Demo)</p>
                    <p className="text-sm text-muted-foreground px-6">
                      En producción: Google Maps embed
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href="https://maps.google.com/?q=Cuenca,Ecuador"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full rounded-full">
                      <Navigation className="w-5 h-5 mr-2" />
                      Cómo llegar (Google Maps)
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Envíanos un mensaje
                </h3>
                <p className="text-muted-foreground mb-8">
                  Completa el formulario y te responderemos a la brevedad
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      ¡Mensaje enviado! (Demo)
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Esto es una demostración. No se enviaron datos reales.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full mt-4"
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="contact-name">Nombre completo *</Label>
                      <Input
                        id="contact-name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="mt-2 rounded-xl"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="mt-2 rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-phone">Teléfono</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="+593 99 123 4567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-2 rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-message">Mensaje *</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        className="mt-2 rounded-xl resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Al enviar este formulario aceptas nuestra{' '}
                      <Link
                        to="/demos/odontologia/privacidad"
                        className="text-primary hover:underline"
                      >
                        política de privacidad
                      </Link>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              ¿Prefieres agendar directamente?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Usa nuestro sistema de reservas online
            </p>
            <Link to="/demos/odontologia/reservar">
              <Button size="lg" className="rounded-full">
                Ir a reservar cita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
