import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/content.ts';

interface FooterProps {
  onOpenQuote: (serviceCode?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onSelectService }) => {
  return (
    <footer className="bg-[#0b0d0f] border-t border-[#2e353d] text-slate-400 pt-16 pb-24 md:pb-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2e353d]">
          {/* Col 1: Branding & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-[#ea580c] flex items-center justify-center font-display text-white font-extrabold text-xl">
                C
              </div>
              <span className="font-display text-2xl font-black tracking-wide text-white">
                CORE<span className="text-[#ea580c]">.</span>ADVANTAGE
              </span>
            </a>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Superior, Wisconsin’s trusted single-source contractor for heavy roll-off dumpster
              rentals, structural demolition, commercial grounds care, 24/7 blizzard snow clearing,
              and precision metal fabrication.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Locally Owned & Operated · Roots dating back to 2012.</p>
              <p>Serving Duluth, Superior & the Greater Twin Ports.</p>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Twin Ports Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    className="hover:text-orange-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-orange-400 transition-colors">
                  Why CORE
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-orange-400 transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-orange-400 transition-colors">
                  Service Area
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dispatch Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Dispatch & Yard Info
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Superior, Wisconsin 54880</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <a href="tel:7153922673" className="hover:text-white transition-colors">
                  (715) 392-CORE / (715) 392-2673
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <a href="mailto:dispatch@coreadvantage.online" className="hover:text-white transition-colors">
                  dispatch@coreadvantage.online
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon – Fri: 7:00 AM – 5:30 PM</span>
                  <span className="block">Sat: 8:00 AM – 1:00 PM</span>
                  <span className="text-[11px] text-orange-400 block mt-0.5">
                    Emergency Winter & Demo: 24/7 On-Call
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright & policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CORE Advantage LLC. All rights reserved. Locally owned in Superior, WI.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
