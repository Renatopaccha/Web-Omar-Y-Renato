import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Award, 
  Shield, 
  Clock, 
  Globe, 
  CheckCircle2, 
  MapPin,
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { TrustBadge } from '../components/TrustBadge';
import { TestimonialCard } from '../components/TestimonialCard';
import { StatCard } from '../components/StatCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const heroImages = {
  clinic: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzEzNDA1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  doctor: "https://images.unsplash.com/photo-1754715203698-70c7ad3a879d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcxMzU4MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  equipment: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzcxMzAxNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

const services = [
  {
    title: "Limpieza y profilaxis",
    description: "Limpieza dental profesional, remoción de sarro y pulido. Prevención y cuidado de encías.",
    duration: "45-60 min",
    price: "$45"
  },
  {
    title: "Blanqueamiento dental",
    description: "Tratamiento de blanqueamiento profesional con tecnología LED. Resultados visibles desde la primera sesión.",
    duration: "60-90 min",
    price: "$280"
  },
  {
    title: "Carillas dentales",
    description: "Carillas de porcelana o composite para mejorar forma, color y alineación. Resultados naturales y duraderos.",
    duration: "2-3 sesiones",
    price: "$450/pieza"
  },
  {
    title: "Rehabilitación oral",
    description: "Restauración completa de función y estética dental mediante implantes, coronas y prótesis.",
    duration: "Múltiples sesiones",
    price: "Consultar"
  },
  {
    title: "Endodoncia",
    description: "Tratamiento de conducto radicular con técnicas modernas y anestesia confortable.",
    duration: "90 min",
    price: "$320"
  },
  {
    title: "Estética dental integral",
    description: "Diseño de sonrisa personalizado combinando múltiples tratamientos para resultados armónicos.",
    duration: "Plan personalizado",
    price: "Consultar"
  }
];

const credentials = [
  {
    title: "DDS, Odontología",
    institution: "Universidad Central del Ecuador",
    icon: Award
  },
  {
    title: "MSc, Rehabilitación Oral",
    institution: "Universidad San Francisco de Quito",
    icon: Award
  },
  {
    title: "Certificación en Estética Dental",
    institution: "Asociación Latinoamericana de Estética",
    icon: Sparkles
  },
  {
    title: "+10 años de experiencia",
    institution: "Práctica privada y clínica",
    icon: TrendingUp
  }
];

const whyChooseUs = [
  "Diagnóstico claro y plan de tratamiento por etapas",
  "Transparencia en precios sin costos ocultos",
  "Seguimiento continuo y recordatorios automáticos",
  "Protocolos estrictos de seguridad e higiene",
  "Ubicación céntrica con horarios extendidos"
];

const pricingItems = [
  { service: "Consulta inicial y diagnóstico", price: "$35" },
  { service: "Limpieza dental completa", price: "$45" },
  { service: "Resina estética (1 pieza)", price: "$85" },
  { service: "Corona de porcelana", price: "$550" },
  { service: "Implante dental completo", price: "$1,200" },
  { service: "Blanqueamiento profesional", price: "$280" }
];

const testimonials = [
  {
    content: "Excelente atención. La Dra. Romero explica cada paso del tratamiento con mucha claridad. Me sentí muy cómoda durante todo el proceso.",
    author: "M.S.",
    location: "Cuenca"
  },
  {
    content: "El consultorio es muy moderno y limpio. Los resultados del blanqueamiento superaron mis expectativas. Totalmente recomendado.",
    author: "C.T.",
    location: "Cuenca"
  },
  {
    content: "Profesionalismo y calidez humana. Llevo 3 años como paciente y siempre recibo el mismo nivel de atención excepcional.",
    author: "J.P.",
    location: "Azogues"
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card via-background to-secondary/30 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Cuenca, Ecuador</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Atención clínica con precisión y calidez.
              </h1>
              
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Tratamientos personalizados, comunicación clara y una experiencia moderna de consulta. Reserva en minutos.
              </p>

              <p className="text-sm text-muted-foreground mb-8 italic">
                <span className="inline-block px-2 py-0.5 bg-secondary rounded text-xs mr-2">Demo multiidioma</span>
                <span className="font-medium">EN:</span> Clinical care with precision and warmth.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/reservar">
                  <Button size="lg" className="rounded-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar cita
                  </Button>
                </Link>
                <Link to="/credenciales">
                  <Button size="lg" variant="outline" className="rounded-full">
                    Ver credenciales
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Specialist Info */}
              <div className="p-6 bg-card rounded-2xl border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF79]">
                    <ImageWithFallback 
                      src={heroImages.doctor}
                      alt="Dra. Valeria Romero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dra. Valeria Romero</h3>
                    <p className="text-sm text-muted-foreground">DDS, MSc Rehabilitación Oral</p>
                    <p className="text-xs text-primary mt-0.5">Odontología Estética y Rehabilitación</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={heroImages.clinic}
                  alt="Consultorio moderno"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-[#D4AF79] rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF79]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#D4AF79]" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-foreground">1,200+</div>
                    <div className="text-sm text-muted-foreground">Pacientes atendidos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TrustBadge 
              icon={Award} 
              title="+10 años de experiencia"
              subtitle="Práctica clínica comprobada"
            />
            <TrustBadge 
              icon={Shield} 
              title="Atención basada en evidencia"
              subtitle="Protocolos internacionales"
            />
            <TrustBadge 
              icon={Sparkles} 
              title="Equipo moderno"
              subtitle="Tecnología actualizada"
              variant="gold"
            />
            <TrustBadge 
              icon={Globe} 
              title="ES / EN / DE / FR"
              subtitle="Atención multiidioma"
            />
          </div>
        </div>
      </section>

      {/* Credentials Preview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-4">
              Credenciales destacadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Formación académica y experiencia clínica que respaldan tu confianza
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cred.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cred.title}</h4>
                <p className="text-sm text-muted-foreground">{cred.institution}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/credenciales">
              <Button variant="outline" size="lg" className="rounded-full">
                Ver perfil completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-4">
              Servicios principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tratamientos integrales de odontología estética y rehabilitación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  duration={service.duration}
                  price={service.price}
                  link="/servicios"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/servicios">
              <Button size="lg" className="rounded-full">
                Ver todos los servicios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6">
                Por qué elegirnos
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Compromiso con tu salud y bienestar dental
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src={heroImages.equipment}
                  alt="Equipo moderno"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 lg:py-32 bg-card border-y border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-4">
              Precios orientativos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Transparencia y claridad desde el primer contacto
            </p>
            <p className="text-sm text-muted-foreground italic">
              Los precios son referenciales. El costo final depende de la evaluación clínica personalizada.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl border border-border overflow-hidden">
              {pricingItems.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-6 ${
                    index !== pricingItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <span className="text-foreground">{item.service}</span>
                  <span className="text-lg font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/reservar">
                <Button size="lg" className="rounded-full">
                  Agendar consulta inicial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experiencias reales de quienes confiaron en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard 
                  content={testimonial.content}
                  author={testimonial.author}
                  location={testimonial.location}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard 
              value="10+"
              label="Años de experiencia"
              icon={Award}
            />
            <StatCard 
              value="1,200+"
              label="Pacientes atendidos"
              icon={Users}
            />
            <StatCard 
              value="98%"
              label="Satisfacción"
              icon={TrendingUp}
            />
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6">
                Ubicación y horarios
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Dirección</p>
                    <p className="text-muted-foreground">
                      Av. 12 de Abril y Solano<br />
                      Edificio Médico Santa Ana, Piso 3, Consultorio 302<br />
                      Cuenca, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Horarios</p>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contacto">
                <Button variant="outline" size="lg" className="rounded-full">
                  Cómo llegar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-3xl p-12 border border-border shadow-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                ¿Listo para agendar?
              </h3>
              <p className="text-muted-foreground mb-8">
                Reserva tu consulta inicial en menos de 2 minutos. Sin compromisos.
              </p>

              <div className="space-y-4">
                <Link to="/reservar" className="block">
                  <Button size="lg" className="w-full rounded-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar cita ahora
                  </Button>
                </Link>
                <Link to="/contacto" className="block">
                  <Button size="lg" variant="outline" className="w-full rounded-full">
                    Contactar por otros medios
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                Respuesta en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
