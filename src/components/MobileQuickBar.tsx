import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenQuote: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-[#14171a]/95 backdrop-blur-md border-t border-[#2e353d] px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      <a
        href="tel:7153922673"
        className="flex-1 bg-[#1e2329] hover:bg-[#252b31] border border-[#2e353d] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        aria-label="Direct call to CORE Advantage dispatch"
      >
        <Phone className="w-4 h-4 text-orange-400" />
        <span>Call Dispatch</span>
      </a>

      <button
        type="button"
        onClick={onOpenQuote}
        className="flex-1 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        <span>Get Free Quote</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
