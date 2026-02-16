interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const maxWidthClass = align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl';

  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-muted-foreground ${maxWidthClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
