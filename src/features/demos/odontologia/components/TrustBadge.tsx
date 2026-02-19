import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
    icon: LucideIcon;
    title: string;
    subtitle?: string;
    variant?: 'default' | 'gold';
}

export function TrustBadge({ icon: Icon, title, subtitle, variant = 'default' }: TrustBadgeProps) {
    return (
        <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
            <div className={`p-2 rounded-lg ${variant === 'gold'
                    ? 'bg-[#D4AF79]/10'
                    : 'bg-primary/10'
                }`}>
                <Icon className={`w-5 h-5 ${variant === 'gold'
                        ? 'text-[#D4AF79]'
                        : 'text-primary'
                    }`} />
            </div>
            <div>
                <div className="text-sm font-semibold text-foreground">{title}</div>
                {subtitle && <div className="text-xs text-muted-foreground mt-0.5">{subtitle}</div>}
            </div>
        </div>
    );
}
