import { Hero } from '../components/sections/Hero';
import { DemosSection } from '../components/sections/DemosSection';
import { PricingSection } from '../components/sections/PricingSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { AboutSection } from '../components/sections/AboutSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactSection } from '../components/sections/ContactSection';
import { StickyMobileCTA } from '../components/ui/StickyMobileCTA';
import { useNavigate } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <DemosSection />
      <PricingSection />
      <BenefitsSection />
      <ProcessSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <StickyMobileCTA 
        text={t('sticky.cta')} 
        action={() => navigate('/contact')} 
      />
    </>
  );
}