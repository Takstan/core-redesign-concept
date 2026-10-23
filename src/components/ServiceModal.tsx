import React from 'react';
import { X, Check, ArrowRight, Phone, ShieldCheck, Clock, Truck } from 'lucide-react';
import { ServiceItem } from '../types/index.ts';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceCode: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#181c20] border border-[#2e353d] rounded-2xl shadow-2xl overflow-hidden my-8 z-10 animate-[fadeIn_0.2s_ease-out]">
        {/* Header with Image banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#121518]">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c20] via-[#181c20]/60 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
              {service.category} · Superior & Duluth Operations
            </span>
            <h2
              id="service-modal-title"
              className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white mt-1 leading-tight"
            >
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.description}
          </p>

          {/* Key Capabilities */}
          <div>
            <h3 className="font-display text-lg uppercase font-bold text-white mb-3">
              Capabilities & Scope Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-[#22272c] border border-[#2e353d]/70 rounded-lg p-2.5"
                >
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-[#14171a] border border-[#2e353d] rounded-xl p-4">
            <h3 className="font-display text-sm uppercase tracking-wider font-bold text-slate-400 mb-3">
              Standard Service Parameters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {service.specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col border-b border-[#2e353d]/50 pb-2">
                  <span className="text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround & Best For */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 text-xs">
            <div className="flex items-start gap-2 flex-1">
              <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Dispatch Response</span>
                <span className="text-slate-300">{service.turnaround}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 flex-1 border-t sm:border-t-0 sm:border-l border-[#2e353d] pt-3 sm:pt-0 sm:pl-4">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Ideal Application</span>
                <span className="text-slate-300">{service.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2e353d]">
            <a
              href="tel:7153922673"
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Questions? Call (715) 392-CORE</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-[#2e353d] text-slate-300 hover:text-white text-xs font-semibold hover:bg-[#252b31] transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onRequestQuote(service.serviceCode);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <span>Request Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
