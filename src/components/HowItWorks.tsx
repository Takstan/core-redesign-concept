import React from 'react';
import { ArrowRight, ClipboardCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      number: '01',
      title: 'Specify Scope & Container Size',
      desc: 'Submit your project details online or call our Superior dispatch yard. Choose from 10, 15, 20, or 30-yard dumpsters or book a site walkthrough for demolition or snow clearing.',
      highlight: 'Upfront flat rates · No broker markup',
      icon: ClipboardCheck,
    },
    {
      number: '02',
      title: 'Scheduled Dispatch & Surface Protection',
      desc: 'Our driver spots the container exactly where requested—driveway, jobsite lot, or commercial alley. We supply protective wood dunnage under steel wheels to safeguard pavements.',
      highlight: 'Same-day / next-day delivery guarantee',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Work at Pace & Hassle-Free Haul',
      desc: 'Load debris on your timeline during the rental period, or have our excavator crew perform the tear-down. When ready, notify us and we haul and responsibly divert materials.',
      highlight: 'Prompt pickup · Responsible recycling',
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28 bg-[#14171a] border-t border-[#2e353d] relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <span>Frictionless Local Execution</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            How It Works. Simple & Dependable.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            From the initial phone call to the final haul, we eliminate red tape so your project
            moves forward without delays.
          </p>
        </div>

        {/* Steps with Styled Progression Line */}
        <div className="relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-orange-500/30 via-[#ea580c] to-orange-500/30 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-[#1a1e22] border border-[#2e353d] p-7 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/60 hover:bg-[#20252b] hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Header with Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl font-black text-orange-500/80 group-hover:text-orange-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#252b31] border border-[#2e353d] flex items-center justify-center text-orange-400 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2e353d]/60 flex items-center gap-2 text-xs font-semibold text-orange-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{step.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Start Your Project CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <span>Start Your Project With CORE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
