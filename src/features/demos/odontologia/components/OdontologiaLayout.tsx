import { Outlet, Link } from 'react-router';
import { OdontologiaHeader } from './OdontologiaHeader';
import { OdontologiaFooter } from './OdontologiaFooter';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

/**
 * Layout aislado para el demo de odontología.
 *
 * Aplica las variables CSS propias del demo dentro de un wrapper
 * con clase "odontologia-demo", sin pisar el tema global del sitio.
 */
export function OdontologiaLayout() {
  return (
    <div className="odontologia-demo min-h-screen flex flex-col">
      {/* ── Banner de demo ── */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="font-medium">Demo de ejemplo</span>
        <span className="hidden sm:inline">—</span>
        <span>Se personaliza con tu marca, fotos y contenido.</span>
        <Link to="/contact" className="ml-0 sm:ml-2">
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full text-xs h-7 px-3 gap-1"
          >
            <ExternalLink className="w-3 h-3" />
            Quiero una web así
          </Button>
        </Link>
      </div>

      <OdontologiaHeader />

      <main className="flex-1">
        <Outlet />
      </main>

      <OdontologiaFooter />
    </div>
  );
}
