import { useNavigate } from 'react-router';
import { Check, X, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Presencia Profesional',
      price: '$299',
      badge: 'Lanzamiento',
      description: 'Ideal para consultorios que necesitan presencia online básica',
      features: [
        { name: 'Landing profesional', included: true },
        { name: 'Sección de servicios', included: true },
        { name: 'Ubicación y contacto', included: true },
        { name: 'Diseño móvil optimizado', included: true },
        { name: 'SEO local básico', included: true },
        { name: 'Formulario de contacto', included: false },
        { name: 'Reserva online', included: false },
        { name: 'Panel de administración', included: false },
      ],
    },
    {
      name: 'Citas por Contacto',
      price: '$499',
      badge: 'Más vendido',
      popular: true,
      description: 'El más elegido. Ideal para empezar a recibir solicitudes',
      features: [
        { name: 'Todo de Presencia Profesional', included: true },
        { name: 'Formulario de solicitud', included: true },
        { name: 'CTA a llamada/email', included: true },
        { name: 'Integración WhatsApp', included: true },
        { name: '2 rondas de cambios', included: true },
        { name: 'Reserva online', included: false },
        { name: 'Panel de administración', included: false },
      ],
    },
    {
      name: 'Reserva Online',
      price: '$799',
      description: 'Para consultorios que quieren automatizar las citas',
      features: [
        { name: 'Todo de Citas por Contacto', included: true },
        { name: 'Integración de calendario', included: true },
        { name: 'Sistema de reservas', included: true },
        { name: 'Confirmaciones automáticas', included: true },
        { name: 'Recordatorios básicos', included: true },
        { name: 'Panel de administración', included: false },
      ],
    },
    {
      name: 'Pro con Panel Admin',
      price: '$1,499',
      custom: true,
      description: 'Máximo control y funcionalidades avanzadas',
      features: [
        { name: 'Todo de Reserva Online', included: true },
        { name: 'Panel de administración', included: true },
        { name: 'Editar precios y servicios', included: true },
        { name: 'Gestión de solicitudes', included: true },
        { name: 'Roles y permisos básicos', included: true },
        { name: 'Soporte prioritario', included: true },
      ],
    },
  ];

  const extras = [
    {
      name: 'Multi-sede',
      description: 'Gestiona varios consultorios desde un solo sitio',
      price: '+$200',
    },
    {
      name: 'Multi-idioma avanzado',
      description: 'Contenido completo en 4 idiomas con selector',
      price: '+$150',
    },
    {
      name: 'Blog integrado',
      description: 'Publica artículos y consejos de salud',
      price: '+$100',
    },
    {
      name: 'Integración personalizada',
      description: 'Conecta con tu sistema actual o APIs externas',
      price: 'Cotización',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Planes claros y honestos
            </h1>
            <p className="text-lg text-muted-foreground">
              Sin sorpresas. Sin letra pequeña. Elige el plan que mejor se adapte a tu consultorio.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                hover
                className={plan.popular ? 'border-2 border-secondary shadow-xl' : ''}
              >
                <CardHeader>
                  {plan.badge && (
                    <Badge variant={plan.popular ? 'popular' : 'launch'} className="mb-2">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardTitle className="mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    {plan.custom && <span className="text-sm text-muted-foreground">+</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    onClick={() => navigate('/contact')}
                  >
                    Elegir plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Maintenance */}
          <Card className="p-8 text-center bg-gradient-to-br from-accent/30 to-white border-primary/20">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Mantenimiento y soporte
            </h3>
            <p className="text-muted-foreground mb-4">
              Cuidado continuo desde <span className="text-primary font-semibold text-lg">$59/mes</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Incluye cambios pequeños, actualizaciones de seguridad, backups automáticos y soporte técnico vía email.
            </p>
          </Card>
        </div>
      </section>

      {/* Extras */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Funcionalidades extras
            </h2>
            <p className="text-lg text-muted-foreground">
              Amplía tu sitio con estas opciones adicionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {extras.map((extra, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{extra.name}</h3>
                  <span className="text-primary font-semibold text-sm">{extra.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{extra.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Necesitas algo personalizado?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cuéntanos qué necesitas y te preparamos una propuesta a medida.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Solicitar cotización personalizada
          </Button>
        </div>
      </section>

      {/* Sticky CTA for mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-border shadow-lg z-50">
        <Button className="w-full" onClick={() => navigate('/contact')}>
          Pedir cotización
        </Button>
      </div>
    </div>
  );
}
