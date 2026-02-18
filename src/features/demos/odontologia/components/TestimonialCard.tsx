import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
}

export function TestimonialCard({ content, author, location }: TestimonialCardProps) {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-card border border-border rounded-2xl p-6 relative">
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-12 h-12 text-primary" />
      </div>

      <p className="text-sm text-foreground leading-relaxed mb-4 relative z-10">
        "{content}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-sm font-semibold text-primary">{initials}</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{author}</div>
          <div className="text-xs text-muted-foreground">{location}</div>
        </div>
      </div>
    </div>
  );
}
