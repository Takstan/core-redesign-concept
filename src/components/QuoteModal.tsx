import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, ShieldCheck, Clock } from 'lucide-react';
import { validateQuoteForm, DUMPSTER_SPECS } from '../utils/core-logic.ts';
import { SERVICES } from '../data/content.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialZip?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialZip,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'roll_off_dumpsters');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [zipCode, setZipCode] = useState(initialZip || '');
  const [binSize, setBinSize] = useState<'10-yard' | '15-yard' | '20-yard' | '30-yard'>('20-yard');
  const [projectDetails, setProjectDetails] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm({
      fullName,
      phone,
      email,
      serviceCategory,
      propertyAddress,
      zipCode,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const randomTicket = 'CORE-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  const isDumpster = serviceCategory === 'roll_off_dumpsters';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#161a1e] border border-[#2e353d] rounded-2xl shadow-2xl overflow-hidden my-8 z-10 animate-[fadeIn_0.2s_ease-out]">
        {/* Header */}
        <div className="bg-[#121518] px-6 py-5 border-b border-[#2e353d] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">
              Twin Ports Fast Dispatch
            </span>
            <h2
              id="quote-modal-title"
              className="font-display text-2xl sm:text-3xl font-black uppercase text-white leading-tight"
            >
              Request a Free Quote
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-[#181c20] hover:bg-[#252b31] text-slate-300 hover:text-white transition-colors border border-[#2e353d]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-orange-400 bg-[#121518] px-3 py-1 rounded border border-[#2e353d]">
                Inquiry: {ticketId}
              </span>
              <h3 className="font-display text-2xl font-black uppercase text-white">
                Quote Request Submitted
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Our Superior yard
                team is calculating your estimate. We will reach you at{' '}
                <strong className="text-orange-400">{phone}</strong> within 2–4 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Service Category <span className="text-orange-400">*</span>
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.serviceCode}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {isDumpster && (
                <div className="p-3 rounded-lg bg-[#121518] border border-[#2e353d]">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-orange-400 mb-2">
                    Select Container Size
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['10-yard', '15-yard', '20-yard', '30-yard'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setBinSize(s)}
                        className={`py-1.5 px-1 rounded text-center text-xs font-bold uppercase transition-all ${
                          binSize === s
                            ? 'bg-[#ea580c] text-white shadow'
                            : 'bg-[#181c20] text-slate-300 border border-[#2e353d]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Your Name / Company <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name or Business"
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Phone Number <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(715) 392-2673"
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  {errors.phone && <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Email Address <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    ZIP Code <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={zipCode}
                    maxLength={5}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="e.g. 54880 or 55802"
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                  />
                  {errors.zipCode && (
                    <p className="mt-1 text-[11px] text-red-400">{errors.zipCode}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Jobsite Address / City <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                  placeholder="Street Address, City (Superior / Duluth)"
                  className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                />
                {errors.propertyAddress && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.propertyAddress}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Brief Project Scope
                </label>
                <textarea
                  rows={2}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder="Materials, timeline, or site specifics..."
                  className="w-full bg-[#121518] border border-[#2e353d] rounded-lg p-2.5 text-xs sm:text-sm text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Free Quote</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
