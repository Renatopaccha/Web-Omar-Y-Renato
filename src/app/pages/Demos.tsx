import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export default function Demos() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'dental', label: 'Odontología' },
    { id: 'medical', label: 'Medicina' },
    { id: 'specialty', label: 'Especialidades' },
  ];

  const demos = [
    {
      id: 1,
      title: 'Clínica Dental Moderna',
      category: 'dental',
      emoji: '🦷',
      features: [
        'Catálogo de servicios',
        'Reserva online integrada',
        'Galería de antes/después',
        'Formulario de contacto',
      ],
      available: true,
      route: '/demos/odontologia',
    },
    {
      id: 2,
      title: 'Consultorio Medicina General',
      category: 'medical',
      emoji: '🏥',
      features: [
        'Información de servicios',
        'Horarios de atención',
        'Ubicación con mapa',
        'Solicitud de cita',
      ],
      available: false,
      route: null,
    },
    {
      id: 3,
      title: 'Dermatología Estética',
      category: 'specialty',
      emoji: '⚕️',
      features: [
        'Tratamientos detallados',
        'Precios transparentes',
        'Galería de resultados',
        'Sistema de reservas',
      ],
      available: false,
      route: null,
    },
    {
      id: 4,
      title: 'Ortodoncia Especializada',
      category: 'dental',
      emoji: '🦷',
      features: [
        'Tipos de ortodoncia',
        'Calculadora de presupuesto',
        'Casos de éxito',
        'Chat en vivo',
      ],
      available: false,
      route: null,
    },
    {
      id: 5,
      title: 'Pediatría',
      category: 'medical',
      emoji: '👶',
      features: [
        'Área para padres',
        'Consejos de salud',
        'Vacunación',
        'Citas pediátricas',
      ],
      available: false,
      route: null,
    },
    {
      id: 6,
      title: 'Fisioterapia',
      category: 'specialty',
      emoji: '🏃',
      features: [
        'Servicios de rehabilitación',
        'Ejercicios en línea',
        'Reserva de sesiones',
        'Seguimiento de pacientes',
      ],
      available: false,
      route: null,
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
              Demos de ejemplo
            </h1>
            <p className="text-lg text-muted-foreground">
              Explora nuestros diseños predefinidos. Todos son personalizables: colores, fotos, textos y secciones según tu consultorio.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border sticky top-20 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground">Filtrar por:</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category.id
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
              <Card key={demo.id} className="overflow-hidden">
                {/* Demo Preview */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 -mx-6 -mt-6 mb-6 relative flex items-center justify-center">
                  {!demo.available && (
                    <Badge variant="default" className="absolute top-4 right-4">
                      Próximamente
                    </Badge>
                  )}
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl" role="img" aria-label={demo.title}>
                        {demo.emoji}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Vista previa del demo</p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{demo.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Incluye:</p>
                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {demo.available && demo.route ? (
                    <>
                      <Button
                        className="w-full mb-2"
                        onClick={() => navigate(demo.route!)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver demo completo
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => navigate('/contact')}
                      >
                        Quiero una web así
                      </Button>
                    </>
                  ) : (
                    <Button variant="ghost" className="w-full" disabled>
                      Próximamente
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
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Podemos crear un diseño 100% personalizado para tu consultorio. Cuéntanos qué necesitas.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Solicitar demo personalizado
          </Button>
        </div>
      </section>
    </div>
  );
}
