import React from 'react';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/content.ts';
import { ServiceItem } from '../types/index.ts';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuote: (serviceCode?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#121518] relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <span>Full-Scope Industrial & Property Capabilities</span>
            </div>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            >
              Services Engineered for Reliability.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              From our Superior, WI base, we provide contractor-grade roll-off dumpsters, heavy
              demolition, commercial snow clearing, and specialty metal fabrication with prompt
              turnarounds.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenQuote()}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Need Custom Dispatch? Request a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            // Give first card (Roll-off dumpsters) extra prominence
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.id);
                  }
                }}
                className={`group cursor-pointer rounded-2xl bg-[#181c20] border border-[#2e353d] overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/60 hover:shadow-xl hover:shadow-orange-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo Frame with 1.04x Scale on Hover */}
                <div
                  className={`relative overflow-hidden bg-[#14171a] ${
                    isFeatured ? 'h-64 sm:h-72' : 'h-52 sm:h-56'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Translucent Charcoal Overlay on Hover & Base gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181c20] via-black/40 to-transparent transition-opacity duration-300 group-hover:bg-[#121518]/60" />

                  {/* Category Tag (unboxed metadata) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#2e353d]">
                      {service.category}
                    </span>
                  </div>

                  {/* Diagonal View Service Arrow */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#181c20]/80 group-hover:bg-[#ea580c] text-white flex items-center justify-center transition-all duration-300 border border-[#2e353d] group-hover:border-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-md">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-4 border-t border-[#2e353d]/60 space-y-1.5">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link (Always visible for mobile clarity) */}
                  <div className="mt-6 pt-4 border-t border-[#2e353d]/50 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                    <span className="text-orange-400 font-bold group-hover:underline">
                      View Specifications & Pricing
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 group-hover:text-orange-400 transition-colors">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
