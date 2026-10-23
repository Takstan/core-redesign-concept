import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { checkTwinPortsCoverage, CoverageResult } from '../utils/core-logic.ts';

interface ServiceAreaSectionProps {
  onOpenQuote: (serviceCode?: string, defaultZip?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenQuote }) => {
  const [zipInput, setZipInput] = useState('');
  const [coverageResult, setCoverageResult] = useState<CoverageResult | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput.trim()) return;
    const res = checkTwinPortsCoverage(zipInput);
    setCoverageResult(res);
  };

  const communities = [
    { name: 'Superior, WI', status: 'Primary Hub' },
    { name: 'Duluth, MN', status: 'Primary Hub' },
    { name: 'Hermantown, MN', status: 'Active Daily' },
    { name: 'Proctor, MN', status: 'Active Daily' },
    { name: 'Cloquet, MN', status: 'Active Daily' },
    { name: 'South Range, WI', status: 'Active Daily' },
    { name: 'Oliver & Foxboro, WI', status: 'Active Daily' },
    { name: 'Two Harbors Corridor', status: 'Extended Delivery' },
  ];

  return (
    <section
      id="service-area"
      className="py-20 sm:py-28 bg-[#161a1e] border-t border-[#2e353d] relative"
      aria-labelledby="service-area-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Prompt's Mandatory Headline & Description */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <span>Douglas & St. Louis County Dispatch</span>
          </div>
          <h2
            id="service-area-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            PROUDLY SERVING THE TWIN PORTS.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Based in Superior, Wisconsin, CORE Advantage provides property and project services to
            customers in the Duluth–Superior region.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Local Twin Ports Map & Coverage Graphic */}
          <div className="lg:col-span-7 bg-[#121518] border border-[#2e353d] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2e353d]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="font-display text-lg uppercase font-bold text-white">
                    Twin Ports Dispatch Perimeter
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">Hub: Superior, WI 54880</span>
              </div>

              {/* Schematic Map Visual Container */}
              <div className="relative mt-6 h-64 sm:h-72 w-full rounded-xl bg-[#181c20] border border-[#2e353d] overflow-hidden flex flex-col items-center justify-center p-4">
                {/* Visual stylization of Lake Superior & Twin Ports bridge connection */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  {/* Water graphic */}
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2e353d" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Hub Markers */}
                <div className="relative z-10 w-full max-w-md flex flex-col gap-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#22272c]/90 border border-orange-500/40">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-[#ea580c] animate-ping" />
                      <div>
                        <span className="font-display text-sm uppercase font-bold text-white block">
                          Central Yard & Shop
                        </span>
                        <span className="text-xs text-slate-300">Superior, WI 54880</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-orange-400 bg-orange-950/60 px-2 py-0.5 rounded border border-orange-500/30">
                      Primary Hub
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#22272c]/90 border border-[#2e353d]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      <div>
                        <span className="font-display text-sm uppercase font-bold text-white block">
                          Duluth & North Shore Line
                        </span>
                        <span className="text-xs text-slate-300">Duluth, Hermantown, Proctor</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-[#14171a] px-2 py-0.5 rounded">
                      Daily Crossing
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#22272c]/90 border border-[#2e353d]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                      <div>
                        <span className="font-display text-sm uppercase font-bold text-white block">
                          Cloquet & St. Louis Valley
                        </span>
                        <span className="text-xs text-slate-300">Cloquet, Carlton, Esko</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-[#14171a] px-2 py-0.5 rounded">
                      Regular Routes
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-3 text-[10px] text-slate-500 font-mono">
                  Bong & Blatnik Bridges · Direct Logistics
                </div>
              </div>

              {/* Communities pills */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Regular Coverage Municipalities:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {communities.map((c, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-[#181c20] border border-[#2e353d] text-center"
                    >
                      <span className="text-xs font-semibold text-slate-200 block truncate">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-orange-400 block mt-0.5">{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map Directions External Link */}
            <div className="mt-6 pt-4 border-t border-[#2e353d] flex items-center justify-between">
              <span className="text-xs text-slate-400">Central Yard located in Superior, WI</span>
              <a
                href="https://maps.google.com/?q=Superior,+WI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1.5"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Panel & Interactive Availability Checker */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Interactive Availability Checker */}
            <div className="bg-[#181c20] border border-[#2e353d] rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="font-display text-xl uppercase font-bold text-white mb-1">
                Check Service Availability
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Enter your 5-digit ZIP code or municipality to check dispatch turnaround times.
              </p>

              <form onSubmit={handleCheck} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    placeholder="Enter ZIP (e.g. 54880 or 55802)"
                    maxLength={10}
                    className="flex-1 bg-[#121518] border border-[#2e353d] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                    aria-label="ZIP Code or City"
                  />
                  <button
                    type="submit"
                    className="bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Check
                  </button>
                </div>
              </form>

              {/* Coverage Feedback Result */}
              {coverageResult && (
                <div
                  className={`mt-4 p-4 rounded-xl border text-xs animate-[fadeIn_0.2s_ease-out] ${
                    coverageResult.status === 'primary'
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                      : coverageResult.status === 'extended'
                      ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                      : 'bg-[#22272c] border-[#2e353d] text-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {coverageResult.status === 'primary' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <span className="font-bold block text-sm">
                        {coverageResult.city} {coverageResult.state}
                      </span>
                      <p className="mt-1 leading-relaxed">{coverageResult.message}</p>
                      <span className="block mt-2 font-mono text-[11px] text-slate-400">
                        Average Response: {coverageResult.averageResponse}
                      </span>

                      <button
                        type="button"
                        onClick={() => onOpenQuote(undefined, zipInput)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 underline"
                      >
                        <span>Continue to Quote with this Location</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Contact Panel */}
            <div className="bg-[#181c20] border border-[#2e353d] rounded-2xl p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="font-display text-xl uppercase font-bold text-white">
                Dispatch Yard & Office
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Physical Location:</strong>
                    <span>Superior, Wisconsin 54880</span>
                    <span className="block text-slate-400 text-xs">
                      Serving Duluth, MN and Superior, WI
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Main Dispatch Phone:</strong>
                    <a
                      href="tel:7153922673"
                      className="text-orange-400 hover:underline font-semibold"
                    >
                      (715) 392-CORE / (715) 392-2673
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block">Hours of Operation:</strong>
                    <span>Monday – Friday: 7:00 AM – 5:30 PM</span>
                    <span className="block">Saturday: 8:00 AM – 1:00 PM</span>
                    <span className="block text-orange-400 text-xs mt-0.5">
                      Winter Storms & Emergency Heavy Demo: 24/7 on call
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold py-3 rounded-lg shadow-md transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Request Twin Ports Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
