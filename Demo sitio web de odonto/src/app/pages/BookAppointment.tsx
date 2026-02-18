import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const consultationTypes = [
  "Consulta inicial / diagnóstico",
  "Limpieza dental",
  "Blanqueamiento",
  "Carillas o estética",
  "Rehabilitación oral",
  "Endodoncia",
  "Implantes",
  "Urgencia dental",
  "Otro"
];

const timePreferences = [
  "Mañana (9:00 - 12:00)",
  "Mediodía (12:00 - 14:00)",
  "Tarde (14:00 - 18:00)",
  "Sin preferencia"
];

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationType: '',
    timePreference: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En un caso real, aquí se enviaría la información al backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6">
              Reservar cita
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Agenda tu consulta en 3 pasos simples. Te contactaremos en menos de 24 horas para confirmar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Process & Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                {/* Process Steps */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6">Cómo funciona</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Completa el formulario</h4>
                        <p className="text-sm text-muted-foreground">
                          Datos básicos de contacto y tipo de consulta
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Confirmación</h4>
                        <p className="text-sm text-muted-foreground">
                          Te contactamos para confirmar día y hora
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tu cita</h4>
                        <p className="text-sm text-muted-foreground">
                          Recibes recordatorio y asistes al consultorio
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Alternative Contact Methods */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-secondary/50 border border-border rounded-2xl p-8"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Otros canales de contacto
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Elige el medio que prefieras según tu ubicación
                  </p>

                  <div className="space-y-3">
                    <a 
                      href="tel:+593991234567"
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Llamar</div>
                        <div className="text-xs text-muted-foreground">+593 99 123 4567</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>

                    <a 
                      href="mailto:consulta@draromero.com"
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Email</div>
                        <div className="text-xs text-muted-foreground">consulta@draromero.com</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>

                    <a 
                      href="https://wa.me/593991234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">WhatsApp</div>
                        <div className="text-xs text-muted-foreground">Recomendado</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </motion.div>

                {/* Privacy Note */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-foreground">
                    <span className="font-semibold">Privacidad:</span> No solicitamos datos clínicos o de salud en este formulario. Solo información de contacto para coordinar tu cita.
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Form & Calendar */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Calendar Widget Placeholder */}
                <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Calendario de disponibilidad</h3>
                  </div>
                  
                  <div className="bg-secondary/30 rounded-xl p-12 text-center border-2 border-dashed border-border">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground mb-2">Widget de calendario (Demo)</p>
                    <p className="text-sm text-muted-foreground">
                      En producción: Integración con Calendly, Google Calendar o similar
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Formulario de contacto</h3>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
                    >
                      <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        ¡Solicitud recibida!
                      </h4>
                      <p className="text-muted-foreground mb-6">
                        Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas para confirmar tu cita.
                      </p>
                      <Button 
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        className="rounded-full"
                      >
                        Enviar otra solicitud
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="mt-2 rounded-xl"
                        />
                      </div>

                      {/* Phone & Email */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Teléfono *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+593 99 123 4567"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            required
                            className="mt-2 rounded-xl"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="mt-2 rounded-xl"
                          />
                        </div>
                      </div>

                      {/* Consultation Type */}
                      <div>
                        <Label htmlFor="consultationType">Tipo de consulta *</Label>
                        <Select 
                          value={formData.consultationType}
                          onValueChange={(value) => handleChange('consultationType', value)}
                          required
                        >
                          <SelectTrigger className="mt-2 rounded-xl">
                            <SelectValue placeholder="Selecciona el tipo de consulta" />
                          </SelectTrigger>
                          <SelectContent>
                            {consultationTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Time Preference */}
                      <div>
                        <Label htmlFor="timePreference">Preferencia de horario</Label>
                        <Select 
                          value={formData.timePreference}
                          onValueChange={(value) => handleChange('timePreference', value)}
                        >
                          <SelectTrigger className="mt-2 rounded-xl">
                            <SelectValue placeholder="Selecciona tu preferencia" />
                          </SelectTrigger>
                          <SelectContent>
                            {timePreferences.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Mensaje adicional (opcional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Cuéntanos brevemente el motivo de tu consulta o alguna inquietud..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={4}
                          className="mt-2 rounded-xl resize-none"
                        />
                      </div>

                      {/* Privacy Info */}
                      <div className="bg-secondary/50 rounded-xl p-4 text-sm text-muted-foreground">
                        Al enviar este formulario aceptas nuestra{' '}
                        <Link to="/privacidad" className="text-primary hover:underline">
                          política de privacidad
                        </Link>
                        . Tus datos solo se usan para coordinar tu cita.
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full rounded-full"
                      >
                        Enviar solicitud de cita
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-primary/5 border-y border-primary/20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                ¿Tienes una urgencia dental?
              </h3>
              <p className="text-sm text-muted-foreground">
                Llámanos directamente para atención prioritaria
              </p>
            </div>
            <a href="tel:+593991234567">
              <Button size="lg" variant="outline" className="rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Llamar ahora
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
