import { useNavigate } from 'react-router';
import { Stethoscope, Target, Zap, Heart, Users, Smile } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: 'Claridad',
      description: 'Información directa, sin tecnicismos innecesarios. Como hablarías con un paciente.',
    },
    {
      icon: Heart,
      title: 'Confianza',
      description: 'Diseños que transmiten profesionalismo y generan seguridad desde el primer clic.',
    },
    {
      icon: Zap,
      title: 'Velocidad',
      description: 'Entrega rápida sin sacrificar calidad. Sabemos que tu tiempo es valioso.',
    },
  ];

  const timeline = [
    {
      step: '01',
      title: 'Completas el formulario',
      description: 'Nos envías información básica de tu consultorio en 5 minutos.',
    },
    {
      step: '02',
      title: 'Diseñamos tu sitio',
      description: 'En 3-5 días tienes la primera versión lista para revisar.',
    },
    {
      step: '03',
      title: 'Ajustes y feedback',
      description: 'Hacemos hasta 2 rondas de cambios según tus comentarios.',
    },
    {
      step: '04',
      title: 'Lanzamiento',
      description: 'Publicamos tu sitio y lo dejamos listo para recibir pacientes.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Sobre nosotros
            </h1>
            <p className="text-lg text-muted-foreground">
              Estudiantes del área de la salud creando soluciones web para consultorios
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              ¿Quiénes somos?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos estudiantes del área de la salud (Medicina y Odontología) que identificamos un problema común: muchos profesionales de la salud tienen consultorios excelentes, pero <span className="text-foreground font-semibold">carecen de una presencia online clara y efectiva</span>.
              </p>
              <p>
                Decidimos combinar nuestro conocimiento del sector salud con habilidades de diseño web para crear <span className="text-foreground font-semibold">sitios pensados específicamente para consultorios</span>: claros, rápidos y enfocados en conseguir citas.
              </p>
              <p>
                No somos una agencia gigante. Somos un equipo pequeño que entiende cómo funciona un consultorio, qué buscan los pacientes y cómo comunicar servicios de salud de forma profesional.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestro equipo
            </h2>
            <p className="text-lg text-muted-foreground">
              Dos personas con experiencia directa en el sector salud
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Estudiante de Medicina</h3>
              <p className="text-muted-foreground mb-4">Producto y contenido</p>
              <p className="text-sm text-muted-foreground">
                Responsable de la estrategia del sitio, estructura del contenido y enfoque en conversión a citas.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smile className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Estudiante de Odontología</h3>
              <p className="text-muted-foreground mb-4">Experiencia y estructura</p>
              <p className="text-sm text-muted-foreground">
                Aporta la experiencia de consultorio, conocimiento de flujos de trabajo y organización de servicios.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros principios
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que guía nuestro trabajo día a día
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Cómo trabajamos contigo
            </h2>
            <p className="text-lg text-muted-foreground">
              Un proceso transparente de principio a fin
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="p-6 lg:p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-primary/20">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cuéntanos sobre tu consultorio y te preparamos una propuesta personalizada en 24-48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/contact')}>
                Pedir cotización
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/demos')}>
                Ver demos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}