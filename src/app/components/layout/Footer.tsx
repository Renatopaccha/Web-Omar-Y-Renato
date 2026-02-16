import { Link } from 'react-router';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const languages = ['ES', 'EN', 'DE', 'FR'];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-semibold text-foreground">ClinicaWeb</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Sitios web profesionales para consultorios médicos y dentales. Diseño moderno, enfocado en conversión y optimizado para móviles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/demos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.demos')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal and Languages */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center gap-2 flex-wrap">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as any)}
                  className={`px-2 py-1 text-xs rounded-lg transition-colors ${
                    language === lang ? 'bg-primary text-white' : 'bg-white text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}