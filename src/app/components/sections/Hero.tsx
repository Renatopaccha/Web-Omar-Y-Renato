import { useNavigate } from 'react-router';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';

export function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const trustBullets = [
    t('hero.trust.1'),
    t('hero.trust.2'),
    t('hero.trust.3'),
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-accent/20 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/demos')}
              >
                {t('hero.cta.primary')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                {t('hero.cta.secondary')}
              </Button>
            </motion.div>

            {/* Trust bullets */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {trustBullets.map((bullet, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-2xl">
              {/* Desktop mockup */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-muted px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#fbbf24]/20"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-20 bg-primary/10 rounded-lg"></div>
                    <div className="h-20 bg-secondary/10 rounded-lg"></div>
                    <div className="h-20 bg-primary/10 rounded-lg"></div>
                  </div>
                  <div className="h-10 bg-primary rounded-lg mt-6"></div>
                </div>
              </motion.div>

              {/* Mobile mockup overlay */}
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 bg-white rounded-2xl shadow-xl overflow-hidden border border-border"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-muted px-2 py-1.5 flex justify-center">
                  <div className="w-12 h-1 bg-border rounded-full"></div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-4/5"></div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="h-8 bg-primary/10 rounded"></div>
                    <div className="h-8 bg-secondary/10 rounded"></div>
                  </div>
                  <div className="h-6 bg-primary rounded mt-3"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}