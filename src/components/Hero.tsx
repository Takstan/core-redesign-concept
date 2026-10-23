import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Shield,
  Wrench,
  Clock,
  MapPin,
  Truck,
  Flame,
  Snowflake,
  HardHat,
  PhoneCall,
} from 'lucide-react';
import {
  HERO_IMAGE,
  DUMPSTER_IMAGE,
  DEMO_IMAGE,
  SNOW_IMAGE,
} from '../data/content.ts';
import { DUMPSTER_SPECS } from '../utils/core-logic.ts';

interface HeroProps {
  onOpenQuote: (serviceCode?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'dumpsters' | 'demo' | 'winter'>('dumpsters');
  const [selectedSize, setSelectedSize] = useState<'10-yard' | '15-yard' | '20-yard' | '30-yard'>('20-yard');

  const currentSpec = DUMPSTER_SPECS[selectedSize];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c0f12] pt-24 pb-16 lg:py-28"
      aria-label="CORE Advantage Introduction"
    >
      {/* Background Image Spanning Entire Hero Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Heavy roll-off truck and CAT hydraulic excavator on active job site in Superior, WI"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
        />
        {/* Measured Contrast Scrims for Flawless Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0f12]/98 via-[#0c0f12]/90 to-[#0c0f12]/75 lg:to-[#0c0f12]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121518] via-transparent to-[#0c0f12]/60" />
      </div>

      {/* Main 2-Column Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Copy, Headline & Primary CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Lead Label */}
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-4 bg-[#161a1e]/90 border border-orange-500/30 px-3.5 py-1.5 rounded-md self-center lg:self-start shadow-sm backdrop-blur-sm">
              <span>Superior, WI · Serving Duluth & the Twin Ports Since 2012</span>
            </div>

            {/* Industrial Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-black uppercase tracking-tight text-white leading-[0.94] text-balance">
              Heavy-Duty Equipment.
              <br />
              <span className="text-white">Site Services & Dumpsters.</span>
              <br />
              <span className="text-[#ea580c]">Built for the Northland.</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-balance mx-auto lg:mx-0">
              Locally owned and operated in Superior, Wisconsin. We supply contractor-grade roll-off
              containers, structural demolition, commercial grounds care, 24/7 winter blizzard
              clearing, and custom metal fabrication with dependable local crews.
            </p>

            {/* CTA Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto bg-[#181c20]/90 hover:bg-[#22272c] text-slate-200 hover:text-white border border-[#2e353d] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 backdrop-blur-sm"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Credibility Keypoints Strip */}
            <div className="mt-10 pt-6 border-t border-[#2e353d]/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300 font-medium text-left">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-tight">Same-Day Roll-Off Dispatch</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-tight">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-start gap-2">
                <Wrench className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-tight">10 to 30-Yard Heavy Bins</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-tight">24/7 Blizzard Storm Crew</span>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Fast Dispatch & Equipment Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#14171a]/95 backdrop-blur-md border border-[#2e353d] shadow-2xl p-5 sm:p-6 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2e353d]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ea580c] flex items-center justify-center text-white shrink-0 shadow">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase font-bold text-white leading-none">
                      Twin Ports Fast Dispatch
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Superior Yard · Live Equipment Booking
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span>54880 Yard</span>
                </div>
              </div>

              {/* Service Quick-Switch Tabs */}
              <div className="mt-4 grid grid-cols-3 gap-1.5 p-1 bg-[#0f1214] border border-[#2e353d]/70 rounded-lg">
                <button
                  type="button"
                  onClick={() => setActiveTab('dumpsters')}
                  className={`py-2 px-1 text-xs font-semibold rounded-md transition-all text-center ${
                    activeTab === 'dumpsters'
                      ? 'bg-[#ea580c] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Dumpsters
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`py-2 px-1 text-xs font-semibold rounded-md transition-all text-center ${
                    activeTab === 'demo'
                      ? 'bg-[#ea580c] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Demolition
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('winter')}
                  className={`py-2 px-1 text-xs font-semibold rounded-md transition-all text-center ${
                    activeTab === 'winter'
                      ? 'bg-[#ea580c] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Snow / Site
                </button>
              </div>

              {/* Tab 1: Roll-off Dumpster Volume Selector */}
              {activeTab === 'dumpsters' && (
                <div className="mt-4 space-y-4 animate-[fadeIn_0.2s_ease-out]">
                  {/* Photo thumbnail */}
                  <div className="relative h-32 rounded-xl overflow-hidden border border-[#2e353d]">
                    <img
                      src={DUMPSTER_IMAGE}
                      alt="Roll-off containers in Superior yard"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                        Select Heavy Roll-Off Size
                      </span>
                      <span className="text-[10px] text-orange-400 font-mono">
                        Driveway Boards Included
                      </span>
                    </div>
                  </div>

                  {/* 4 Size Selector Buttons */}
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['10-yard', '15-yard', '20-yard', '30-yard'] as const).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-2 rounded-lg border text-center transition-all ${
                          selectedSize === size
                            ? 'bg-[#ea580c] border-[#ea580c] text-white font-bold shadow-md'
                            : 'bg-[#181c20] border-[#2e353d] text-slate-300 hover:text-white hover:bg-[#20252b]'
                        }`}
                      >
                        <span className="font-display text-sm sm:text-base uppercase block leading-none">
                          {size.replace('-yard', ' YD')}
                        </span>
                        <span className="text-[9px] opacity-80 block mt-0.5">
                          {DUMPSTER_SPECS[size].includedTonnage.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Selected Spec Box */}
                  <div className="p-3 rounded-lg bg-[#0f1214] border border-[#2e353d]/70 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-semibold text-orange-400">
                        {currentSpec.name}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {currentSpec.dimensions}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>Included Tonnage:</span>
                      <span className="text-white font-semibold">{currentSpec.includedTonnage}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1 border-t border-[#2e353d]/40">
                      <strong className="text-slate-300">Best for:</strong> {currentSpec.idealFor[0]}
                    </p>
                  </div>

                  {/* Direct Action */}
                  <button
                    type="button"
                    onClick={() => onOpenQuote('roll_off_dumpsters')}
                    className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold py-3 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve {selectedSize.toUpperCase()} Container</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Tab 2: Demolition & Excavator Services */}
              {activeTab === 'demo' && (
                <div className="mt-4 space-y-4 animate-[fadeIn_0.2s_ease-out]">
                  <div className="relative h-32 rounded-xl overflow-hidden border border-[#2e353d]">
                    <img
                      src={DEMO_IMAGE}
                      alt="Heavy demolition excavator dismantling structure"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                        Hydraulic Excavator Fleet
                      </span>
                      <span className="text-[10px] text-orange-400 font-mono">
                        OSHA 30 Certified
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0f1214] border border-[#2e353d]/70 text-xs space-y-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <HardHat className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Commercial & residential complete structural tear-downs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Reinforced concrete breaking, foundation removal & site grading</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Turnkey permitting assistance & water mist dust suppression</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenQuote('demolition_services')}
                    className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold py-3 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Demolition Site Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Tab 3: Winter Snow Clearing & Site Services */}
              {activeTab === 'winter' && (
                <div className="mt-4 space-y-4 animate-[fadeIn_0.2s_ease-out]">
                  <div className="relative h-32 rounded-xl overflow-hidden border border-[#2e353d]">
                    <img
                      src={SNOW_IMAGE}
                      alt="Commercial plow truck in winter twilight"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                        24/7 Blizzard Operations
                      </span>
                      <span className="text-[10px] text-orange-400 font-mono">
                        Bulk Salt & Pushers
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0f1214] border border-[#2e353d]/70 text-xs space-y-2 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Snowflake className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Commercial parking lots, distribution docks & retail plazas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Standard 1.0" or 2.0" snowfall triggers & zero-tolerance routes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Dedicated rubber-tire loaders for snow piling & off-site hauls</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenQuote('snow_removal')}
                    className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold py-3 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Book Winter Service Contract</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Bottom Quick Dispatch Footer */}
              <div className="mt-4 pt-3 border-t border-[#2e353d]/70 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300">Blatnik & Bong Dispatch Active</span>
                </span>
                <a
                  href="tel:7153922673"
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>(715) 392-CORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <a
        href="#trust-strip"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center text-[11px] font-semibold tracking-widest uppercase text-slate-400 hover:text-orange-400 transition-colors focus-visible:outline-none"
        aria-label="Scroll down to credibility facts"
      >
        <span>Explore Workmanship</span>
        <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-orange-400" />
      </a>
    </section>
  );
};
