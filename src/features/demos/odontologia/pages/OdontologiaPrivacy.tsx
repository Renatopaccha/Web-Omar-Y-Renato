import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function OdontologiaPrivacy() {
  return (
    <div className="w-full py-16 lg:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <Link
          to="/demos/odontologia"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Volver al inicio</span>
        </Link>

        <h1 className="text-4xl font-semibold text-foreground mb-6">Política de privacidad</h1>

        <div className="bg-card border border-border rounded-2xl p-8 text-sm text-muted-foreground space-y-4 leading-relaxed">
          <p className="text-foreground font-medium">
            Este es un sitio de demostración. No recopilamos ni procesamos datos personales reales.
          </p>
          <p>
            Los formularios de contacto y reserva en este demo son funcionales a nivel de interfaz
            de usuario, pero no envían información a ningún servidor ni almacenan datos de
            pacientes.
          </p>
          <p>
            En un sitio web de producción, esta sección contendría la política de privacidad
            completa del consultorio, incluyendo qué datos se recopilan, cómo se usan y los
            derechos del titular.
          </p>
          <p className="italic">
            Plantilla demo reutilizable — personalizable con los datos reales del consultorio.
          </p>
        </div>
      </div>
    </div>
  );
}
