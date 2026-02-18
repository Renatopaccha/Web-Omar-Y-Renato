import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-xl text-primary-foreground">DR</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Dra. Valeria Romero</div>
                <div className="text-xs text-muted-foreground">Odontología Estética</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Atención clínica con precisión y calidez. Tratamientos personalizados y comunicación clara.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/servicios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Servicios
              </Link>
              <Link to="/credenciales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Credenciales
              </Link>
              <Link to="/reservar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reservar cita
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Av. 12 de Abril y Solano<br />Cuenca, Ecuador</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+593 99 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>consulta@draromero.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horarios</h4>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Lunes a Viernes</p>
                <p className="text-foreground font-medium">9:00 - 18:00</p>
                <p className="mt-2">Sábados</p>
                <p className="text-foreground font-medium">9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dra. Valeria Romero. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <span className="text-xs text-muted-foreground">
              Plantilla demo reutilizable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
