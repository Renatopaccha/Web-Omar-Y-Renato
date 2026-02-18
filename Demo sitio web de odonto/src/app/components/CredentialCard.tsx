interface CredentialCardProps {
  title: string;
  institution: string;
  year?: string;
  description?: string;
  type?: 'degree' | 'certification' | 'experience';
}

export function CredentialCard({ title, institution, year, description, type = 'degree' }: CredentialCardProps) {
  const getBorderColor = () => {
    switch (type) {
      case 'certification':
        return 'border-l-[#D4AF79]';
      case 'experience':
        return 'border-l-accent';
      default:
        return 'border-l-primary';
    }
  };

  return (
    <div className={`bg-card border border-border border-l-4 ${getBorderColor()} rounded-xl p-5 transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h4 className="font-semibold text-foreground">{title}</h4>
        {year && (
          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full flex-shrink-0">
            {year}
          </span>
        )}
      </div>
      
      <p className="text-sm text-primary mb-2">{institution}</p>
      
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
