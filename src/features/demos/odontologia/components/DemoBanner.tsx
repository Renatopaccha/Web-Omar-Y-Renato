import { useNavigate } from 'react-router';
import { ArrowRight, Info } from 'lucide-react';

export function DemoBanner() {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 z-[60] bg-[#0B4A6F] text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2.5">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 min-w-0">
                        <Info className="w-4 h-4 flex-shrink-0 opacity-80" />
                        <p className="text-xs sm:text-sm truncate">
                            <span className="font-medium">Demo de ejemplo</span>
                            <span className="hidden sm:inline"> — Se personaliza con tu marca, fotos y contenido.</span>
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/contact')}
                        className="flex items-center gap-1.5 px-4 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
                    >
                        Quiero una web así
                        <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
