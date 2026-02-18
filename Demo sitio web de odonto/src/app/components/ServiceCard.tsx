import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  link?: string;
}

export function ServiceCard({ title, description, duration, price, link }: ServiceCardProps) {
  const content = (
    <div className="group bg-card border border-border rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      
      {(duration || price) && (
        <div className="flex flex-wrap gap-3 mb-4 pt-4 border-t border-border">
          {duration && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{duration}</span>
            </div>
          )}
          {price && (
            <div className="text-xs text-muted-foreground">
              Desde <span className="font-semibold text-primary">{price}</span>
            </div>
          )}
        </div>
      )}
      
      {link && (
        <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
          Ver detalle
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}
