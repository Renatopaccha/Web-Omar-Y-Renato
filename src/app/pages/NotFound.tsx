import { useNavigate } from 'react-router';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-accent rounded-3xl mb-6">
            <Search className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate(-1)}
            variant="outline"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </Button>
          <Button
            size="lg"
            onClick={() => navigate('/')}
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Necesitas ayuda? Visita nuestras páginas principales:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/demos')}
              className="text-sm text-primary hover:underline"
            >
              Demos
            </button>
            <span className="text-muted-foreground">•</span>
            <button
              onClick={() => navigate('/pricing')}
              className="text-sm text-primary hover:underline"
            >
              Planes
            </button>
            <span className="text-muted-foreground">•</span>
            <button
              onClick={() => navigate('/about')}
              className="text-sm text-primary hover:underline"
            >
              Sobre nosotros
            </button>
            <span className="text-muted-foreground">•</span>
            <button
              onClick={() => navigate('/contact')}
              className="text-sm text-primary hover:underline"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
