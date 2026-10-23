import React from 'react';
import { X, Award, Shield, Users, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_MILESTONES, HERO_IMAGE } from '../data/content.ts';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-[#181c20] border border-[#2e353d] rounded-2xl shadow-2xl overflow-hidden my-8 z-10 animate-[fadeIn_0.2s_ease-out]">
        {/* Banner */}
        <div className="relative h-48 sm:h-56 bg-[#121518] overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="CORE Advantage equipment operations in Superior, WI"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c20] via-[#181c20]/60 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              Our Superior, WI Story
            </span>
            <h2
              id="about-modal-title"
              className="font-display text-3xl sm:text-4xl font-black uppercase text-white mt-1 leading-tight"
            >
              Meet CORE Advantage
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded in 2012, <strong className="text-white">CORE Advantage</strong> was built on a
              simple Northland principle: when you promise a contractor or homeowner that equipment
              will arrive on Monday morning, it arrives on Monday morning.
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Starting with local hauling and property services in Douglas County, we expanded our
              fleet into specialized roll-off dumpsters, heavy hydraulic demolition excavators, 24/7
              commercial winter snow fleets, and an industrial welding facility in Superior. We are
              not a nationwide broker sitting in a call center thousand miles away—when you call CORE
              Advantage, you speak directly with our dispatch yard.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#22272c] border border-[#2e353d]">
              <Shield className="w-5 h-5 text-orange-400 mb-2" />
              <h3 className="font-display text-base font-bold uppercase text-white">
                Zero Brokerage Markups
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">
                You deal with the exact equipment owners and drivers who place your dumpster or run
                the machine.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#22272c] border border-[#2e353d]">
              <Users className="w-5 h-5 text-orange-400 mb-2" />
              <h3 className="font-display text-base font-bold uppercase text-white">
                Twin Ports Native Crew
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Our drivers and operators live and work across Superior, Duluth, and surrounding
                townships.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#22272c] border border-[#2e353d]">
              <Clock className="w-5 h-5 text-orange-400 mb-2" />
              <h3 className="font-display text-base font-bold uppercase text-white">
                Fast Bridge Crossing
              </h3>
              <p className="text-[11px] text-slate-400 mt-1">
                Direct access to the Blatnik and Bong bridges allows prompt delivery to any Duluth or
                Superior address.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-lg uppercase font-bold text-white mb-4">
              Our Journey Since 2012
            </h3>
            <div className="space-y-4 border-l-2 border-[#2e353d] pl-4 ml-2">
              {COMPANY_MILESTONES.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#ea580c] ring-4 ring-[#181c20]" />
                  <span className="text-xs font-mono font-bold text-orange-400">{item.year}</span>
                  <h4 className="font-display text-sm uppercase font-bold text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-[#2e353d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Superior, WI Yard & Dispatch Hub · (715) 392-CORE
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#2e353d] text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold shadow-md"
              >
                Work With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
