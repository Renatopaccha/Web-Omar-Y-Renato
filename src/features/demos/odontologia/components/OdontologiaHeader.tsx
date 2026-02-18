import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const languages = [
  { code: 'ES', label: 'Español' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'FR', label: 'Français' },
];

const navLinks = [
  { path: '/demos/odontologia', label: 'Inicio' },
  { path: '/demos/odontologia/servicios', label: 'Servicios' },
  { path: '/demos/odontologia/credenciales', label: 'Credenciales' },
  { path: '/demos/odontologia/contacto', label: 'Contacto' },
];

export function OdontologiaHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/demos/odontologia" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-base font-bold text-primary-foreground">DR</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-semibold text-foreground">Dra. Valeria Romero</div>
              <div className="text-xs text-muted-foreground">Odontología Estética</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector (demo — no functional) */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {currentLang}
                <ChevronDown className="w-4 h-4" />
              </button>
              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
                    <div className="px-3 py-2 text-xs text-muted-foreground border-b border-border">
                      Demo
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          currentLang === lang.code
                            ? 'bg-secondary text-foreground'
                            : 'text-foreground hover:bg-secondary/50'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link to="/demos/odontologia/reservar">
              <Button className="rounded-full">Reservar cita</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-secondary text-primary font-medium'
                      : 'text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-4 pt-4 border-t border-border space-y-3">
              <div className="text-xs text-muted-foreground mb-2">Idioma (Demo)</div>
              <div className="flex gap-2 flex-wrap">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      currentLang === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>

              <Link to="/demos/odontologia/reservar" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full">Reservar cita</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
