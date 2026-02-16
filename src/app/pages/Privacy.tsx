import { Shield, Eye, Lock, Mail } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: 'Qué información recopilamos',
      content: [
        'Datos de contacto: nombre, email, teléfono y ubicación (solo cuando nos los proporcionas a través de formularios).',
        'Información del navegador: tipo de navegador, dispositivo y páginas visitadas (datos anónimos para mejorar la experiencia).',
        'NO recopilamos información clínica ni datos sensibles de salud.',
      ],
    },
    {
      icon: Eye,
      title: 'Cómo usamos tu información',
      content: [
        'Para preparar y enviar cotizaciones personalizadas.',
        'Para comunicarnos contigo sobre tu proyecto.',
        'Para mejorar nuestros servicios y contenido del sitio.',
        'NUNCA vendemos, compartimos o cedemos tus datos a terceros con fines comerciales.',
      ],
    },
    {
      icon: Lock,
      title: 'Seguridad de tus datos',
      content: [
        'Usamos conexiones seguras (HTTPS) para proteger tu información.',
        'Almacenamos datos en servidores seguros con acceso restringido.',
        'Aplicamos medidas técnicas para prevenir accesos no autorizados.',
        'Conservamos tus datos solo el tiempo necesario para gestionar tu proyecto.',
      ],
    },
    {
      icon: Mail,
      title: 'Tus derechos',
      content: [
        'Acceso: puedes solicitar una copia de tus datos en cualquier momento.',
        'Rectificación: puedes corregir información incorrecta.',
        'Eliminación: puedes solicitar que eliminemos tus datos.',
        'Para ejercer estos derechos, contáctanos en contacto@clinicaweb.com',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent/20 to-white py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacidad y protección de datos
            </h1>
            <p className="text-lg text-muted-foreground">
              Tu privacidad es importante. Así es como protegemos y usamos tu información.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Card className="p-8 bg-accent/50">
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Última actualización:</span> Febrero 2026
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                En ClinicaWeb, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica de forma clara y simple cómo tratamos tu información.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground mt-2">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Cookies */}
          <div className="mt-8">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Cookies y tecnologías similares
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Usamos cookies técnicas necesarias para el funcionamiento del sitio (por ejemplo, para mantener tu idioma seleccionado). No usamos cookies de publicidad o seguimiento invasivo.
              </p>
              <p className="text-sm text-muted-foreground">
                Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar algunas funcionalidades del sitio.
              </p>
            </Card>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                ¿Preguntas sobre privacidad?
              </h2>
              <p className="text-muted-foreground mb-4">
                Si tienes dudas sobre cómo tratamos tus datos o quieres ejercer tus derechos, contáctanos:
              </p>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contacto@clinicaweb.com" className="text-primary font-medium hover:underline">
                  contacto@clinicaweb.com
                </a>
              </div>
            </Card>
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Nos reservamos el derecho de actualizar esta política. Te notificaremos de cambios importantes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
