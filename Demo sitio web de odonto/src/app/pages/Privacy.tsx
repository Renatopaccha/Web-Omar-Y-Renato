import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacy() {
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
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-semibold text-foreground mb-2">
                Política de privacidad
              </h1>
              <p className="text-sm text-muted-foreground">
                Última actualización: Febrero 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="prose prose-lg max-w-none">
              {/* Note Demo */}
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-2 mt-0">
                  Nota sobre este DEMO
                </h3>
                <p className="text-sm text-muted-foreground mb-0">
                  Este es un sitio web de demostración. Los datos ingresados en formularios no se almacenan ni procesan. 
                  No se recopilan datos clínicos o de salud. Esta política de privacidad es un ejemplo para plantilla reutilizable.
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Introducción</h2>
                <p className="text-foreground leading-relaxed">
                  En el Consultorio de la Dra. Valeria Romero valoramos y respetamos tu privacidad. Esta política explica 
                  cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestro sitio web y 
                  servicios de consulta odontológica.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Información que recopilamos</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Datos de contacto</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Cuando solicitas una cita o te comunicas con nosotros, recopilamos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-6">
                  <li>Nombre completo</li>
                  <li>Número de teléfono</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Preferencia de horario para citas</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Información clínica</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Durante las consultas presenciales en nuestro consultorio, recopilamos información médica y dental 
                  necesaria para tu tratamiento, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-6">
                  <li>Historia clínica dental</li>
                  <li>Radiografías y fotografías clínicas</li>
                  <li>Diagnósticos y planes de tratamiento</li>
                  <li>Alergias y medicamentos</li>
                </ul>

                <div className="bg-secondary rounded-xl p-6 mb-6">
                  <p className="text-sm text-foreground font-semibold mb-2">Importante:</p>
                  <p className="text-sm text-muted-foreground mb-0">
                    La información clínica NO se solicita en formularios web. Solo se recopila de forma presencial 
                    y segura en el consultorio, conforme a las normativas de protección de datos médicos.
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Cómo usamos tu información</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Coordinar y confirmar tus citas</li>
                  <li>Proporcionar servicios de atención odontológica</li>
                  <li>Enviar recordatorios de citas</li>
                  <li>Comunicar información relevante sobre tu tratamiento</li>
                  <li>Responder a tus consultas y solicitudes</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Protección de datos</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-6">
                  <li>Almacenamiento seguro de historias clínicas físicas y digitales</li>
                  <li>Acceso restringido solo a personal autorizado</li>
                  <li>Cifrado de comunicaciones electrónicas</li>
                  <li>Cumplimiento de protocolos de bioseguridad y confidencialidad</li>
                </ul>
              </div>

              {/* Sharing Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Compartir información</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  No compartimos, vendemos ni divulgamos tu información personal a terceros, excepto:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                  <li>Cuando es requerido por ley o autoridad competente</li>
                  <li>Con tu consentimiento explícito para derivaciones a especialistas</li>
                  <li>Para procesamiento de seguros médicos (con tu autorización)</li>
                  <li>Con laboratorios dentales para fabricación de prótesis (datos mínimos necesarios)</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Tus derechos</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Conforme a las leyes de protección de datos de Ecuador, tienes derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mb-6">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos incorrectos o incompletos</li>
                  <li>Solicitar la eliminación de tus datos (sujeto a retención legal obligatoria)</li>
                  <li>Oponerte al procesamiento de tus datos</li>
                  <li>Solicitar una copia de tu historia clínica</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Para ejercer estos derechos, contáctanos en:{' '}
                  <a href="mailto:consulta@draromero.com" className="text-primary hover:underline">
                    consulta@draromero.com
                  </a>
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Cookies y tecnologías similares</h2>
                <p className="text-foreground leading-relaxed">
                  Este sitio web puede utilizar cookies técnicas esenciales para su funcionamiento. 
                  No utilizamos cookies de terceros para publicidad o rastreo sin tu consentimiento.
                </p>
              </div>

              {/* Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Retención de datos</h2>
                <p className="text-foreground leading-relaxed">
                  Las historias clínicas se conservan por un mínimo de 10 años según la normativa ecuatoriana de 
                  salud. Los datos de contacto se mantienen mientras mantengas relación con nuestro consultorio 
                  o hasta que solicites su eliminación.
                </p>
              </div>

              {/* Changes */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Cambios a esta política</h2>
                <p className="text-foreground leading-relaxed">
                  Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos 
                  mediante correo electrónico o aviso en nuestro sitio web.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-4">Contacto</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Si tienes preguntas sobre esta política de privacidad o el manejo de tus datos:
                </p>
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-foreground mb-2">
                    <strong>Consultorio Dra. Valeria Romero</strong>
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Av. 12 de Abril y Solano, Cuenca, Ecuador
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Email:{' '}
                    <a href="mailto:consulta@draromero.com" className="text-primary hover:underline">
                      consulta@draromero.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Teléfono:{' '}
                    <a href="tel:+593991234567" className="text-primary hover:underline">
                      +593 99 123 4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            ¿Listo para agendar tu consulta?
          </h2>
          <p className="text-muted-foreground mb-6">
            Tu información está protegida en todo momento
          </p>
          <Link to="/reservar">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Reservar cita
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
