import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './Button';

interface StickyMobileCTAProps {
  text: string;
  action: () => void;
}

export function StickyMobileCTA({ text, action }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-border shadow-lg z-50 animate-in slide-in-from-bottom">
      <Button className="w-full" onClick={action}>
        {text}
      </Button>
    </div>
  );
}
