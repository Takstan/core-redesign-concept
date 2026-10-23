import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/content.ts';

interface NavbarProps {
  onOpenQuote: (serviceCode?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onSelectService }) => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onSelectService(serviceId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#14171a]/95 backdrop-blur-md border-b border-[#2e353d] shadow-lg py-3'
            : 'bg-gradient-to-b from-[#0e1113]/90 via-[#0e1113]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              aria-label="CORE Advantage Home"
            >
              <div className="w-8 h-8 rounded bg-[#ea580c] flex items-center justify-center font-display text-white font-extrabold text-xl tracking-tighter shadow-md group-hover:bg-[#c2410c] transition-colors">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-wide text-white leading-none">
                  CORE<span className="text-[#ea580c]">.</span>ADVANTAGE
                </span>
                <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-slate-400 leading-none mt-1">
                  Superior, WI · Est. 2012
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation in center */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
              <a
                href="#hero"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  className="flex items-center gap-1 hover:text-white transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 rounded whitespace-nowrap shrink-0"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#ea580c]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#1a1e22] border border-[#2e353d] rounded-xl shadow-2xl p-2.5 z-50">
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 px-3 py-1.5 border-b border-[#2e353d]/60 mb-1 flex items-center justify-between">
                      <span>Twin Ports Services</span>
                      <span className="text-orange-400">7 Offerings</span>
                    </div>
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => handleServiceClick(s.id)}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-[#252b31] transition-colors flex items-center justify-between group"
                      >
                        <span className="group-hover:text-orange-400 transition-colors font-semibold">
                          {s.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                    <div className="mt-2 pt-2 border-t border-[#2e353d]/60 px-1">
                      <a
                        href="#services"
                        onClick={() => setServicesOpen(false)}
                        className="block text-center text-xs font-semibold text-orange-400 hover:text-orange-300 py-1"
                      >
                        Browse All Services Overview →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#projects"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                Our Work
              </a>
              <a
                href="#why-us"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                Reviews
              </a>
              <a
                href="#service-area"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                Service Area
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ea580c] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href="tel:7153922673"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors px-2 py-1"
                aria-label="Call CORE Advantage dispatch"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>(715) 392-CORE</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="bg-[#ea580c] hover:bg-[#c2410c] active:translate-y-0.5 text-white font-semibold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-orange-500/20 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#1a1e22] border border-[#2e353d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 shrink-0"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-height Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-[#14171a] border-l border-[#2e353d] h-full flex flex-col p-6 z-10 shadow-2xl">
            <div className="flex items-center justify-between pb-5 border-b border-[#2e353d]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#ea580c] flex items-center justify-center font-display text-white font-bold text-lg">
                  C
                </div>
                <span className="font-display text-xl font-black text-white">
                  CORE<span className="text-[#ea580c]">.</span>ADVANTAGE
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#252b31]"
                aria-label="Close navigation drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 py-6 overflow-y-auto">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Home
              </a>
              <div className="py-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Our Services
                </span>
                <div className="flex flex-col gap-1.5 pl-3 border-l border-[#2e353d]">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleServiceClick(s.id)}
                      className="text-left text-xs text-slate-300 hover:text-orange-400 py-1 flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Featured Work
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Why CORE Advantage
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Client Reviews
              </a>
              <a
                href="#service-area"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Twin Ports Service Area
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-orange-400 py-1"
              >
                Frequently Asked Questions
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t border-[#2e353d] flex flex-col gap-3">
              <a
                href="tel:7153922673"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 bg-[#1e2329] border border-[#2e353d] py-2.5 rounded-lg hover:border-slate-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call (715) 392-CORE</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-sm py-2.5 rounded-lg shadow-md transition-colors text-center"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
