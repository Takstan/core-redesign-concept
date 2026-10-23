import React from 'react';
import { ArrowRight, Truck, ShieldCheck, DollarSign, Snowflake, Clock } from 'lucide-react';
import { DEMO_IMAGE } from '../data/content.ts';

interface WhyChooseUsProps {
  onOpenAbout: () => void;
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenAbout, onOpenQuote }) => {
  const benefits = [
    {
      icon: Truck,
      title: 'Direct Local Fleet — No Middlemen Brokers',
      desc: 'When you call CORE Advantage, you deal directly with our Superior yard dispatchers and drivers. No third-party brokers taking a cut and disappearing when weather hits.',
    },
    {
      icon: ShieldCheck,
      title: 'Driveway & Surface Protection Guarantee',
      desc: 'Heavy steel containers can mar residential asphalt or decorative pavers. We supply protective timber placement pads upon request so your surfaces stay intact.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Flat-Rate Pricing with Included Tonnage',
      desc: 'Every dumpster rental quote clearly outlines your drop-off fee, generous included weight tonnage, and rental days with zero surprise fuel surcharges.',
    },
    {
      icon: Snowflake,
      title: 'Proven Northland Winter Resilience Since 2012',
      desc: 'From sub-zero Lake Superior lake-effect freezes to 2-foot blizzard drops, our commercial plow operators and heavy equipment keep jobsites accessible 24/7.',
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 bg-[#161a1e] border-y border-[#2e353d] relative overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with gentle elevation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#2e353d] shadow-2xl bg-[#121518] group">
              <img
                src={DEMO_IMAGE}
                alt="CORE Advantage heavy demolition excavator at work"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121518] via-transparent to-transparent" />

              {/* High-visibility corner badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#181c20]/95 backdrop-blur-md border border-[#2e353d] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ea580c] flex items-center justify-center font-display font-black text-white text-lg shrink-0">
                    WI
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white leading-tight">
                      Superior Equipment Yard
                    </h3>
                    <p className="text-xs text-slate-300">
                      Minutes from Blatnik & Bong bridges for rapid Twin Ports dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits list */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <span>The Contractor & Homeowner Advantage</span>
            </div>
            <h2
              id="why-choose-heading"
              className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            >
              Why Twin Ports Clients Depend on CORE.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              In heavy machinery and waste hauling, reliability is everything. When a project is on
              the line, contractors and facility managers choose CORE Advantage because we have the
              iron, the licenses, and the local reputation to get the job done right.
            </p>

            {/* Benefits Stagger */}
            <div className="mt-8 space-y-5">
              {benefits.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-[#1e2329] border border-[#2e353d]/80 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#252b31] border border-[#2e353d] flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg uppercase font-bold text-white">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interaction Button */}
            <div className="mt-8 pt-4 border-t border-[#2e353d] flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAbout}
                className="bg-[#22272c] hover:bg-[#2c333a] text-white border border-[#2e353d] font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <span>Meet CORE Advantage</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>

              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Schedule a Service Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
