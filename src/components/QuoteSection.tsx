import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  Truck,
  Phone,
  Mail,
  MapPin,
  Calendar,
  AlertCircle,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { validateQuoteForm, DUMPSTER_SPECS } from '../utils/core-logic.ts';
import { SERVICES } from '../data/content.ts';

interface QuoteSectionProps {
  preselectedService?: string;
  preselectedZip?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedService,
  preselectedZip,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState(preselectedService || 'roll_off_dumpsters');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [zipCode, setZipCode] = useState(preselectedZip || '');
  const [projectDetails, setProjectDetails] = useState('');
  const [binSize, setBinSize] = useState<'10-yard' | '15-yard' | '20-yard' | '30-yard'>('20-yard');
  const [preferredDate, setPreferredDate] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setServiceCategory(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedZip) {
      setZipCode(preselectedZip);
    }
  }, [preselectedZip]);

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
    setSubmissionId(randomTicket);
    setSubmitted(true);
    // Smoothly scroll to the confirmed box
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setPropertyAddress('');
    setProjectDetails('');
    setPreferredDate('');
    setSubmitted(false);
    setErrors({});
  };

  const isDumpsterService = serviceCategory === 'roll_off_dumpsters';

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#0e1113] relative overflow-hidden"
      aria-labelledby="quote-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Description & Contact info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <span>Direct Twin Ports Dispatch</span>
            </div>

            {/* Prompt's Mandatory Headline */}
            <h2
              id="quote-heading"
              className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            >
              HAVE A PROJECT IN MIND? LET'S GET IT DONE.
            </h2>

            {/* Prompt's Mandatory Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us what you need, and our team will help you explore the next steps.
            </p>

            <div className="mt-8 space-y-4 pt-6 border-t border-[#2e353d]">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Rapid Estimating Window</strong>
                  <span>Estimates delivered within 2–4 business hours during yard shifts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">No Hidden Surcharges</strong>
                  <span>Transparent flat rates with disposal weight, drop-off, and haul included.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block">Need an immediate container today?</strong>
                  <a href="tel:7153922673" className="text-orange-400 font-bold hover:underline">
                    Call Dispatch Directly: (715) 392-CORE
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Badges */}
            <div className="mt-8 p-4 rounded-xl bg-[#14171a] border border-[#2e353d] text-xs text-slate-400">
              <span className="font-display uppercase font-bold text-slate-200 block mb-1">
                Superior, WI Logistics Terminal
              </span>
              <span>Serving Superior, Duluth, Hermantown, Cloquet, Proctor, and surrounding Northland counties.</span>
            </div>
          </div>

          {/* Right Column: Service-Aware Quote Form */}
          <div className="lg:col-span-7 bg-[#161a1e] border border-[#2e353d] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              /* Success Confirmation Card */
              <div className="text-center py-8 space-y-5 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="max-w-md mx-auto">
                  <span className="text-xs font-mono font-bold text-orange-400 bg-[#121518] px-3 py-1 rounded border border-[#2e353d]">
                    Inquiry Reference: {submissionId}
                  </span>
                  <h3 className="font-display text-3xl font-black uppercase text-white mt-3">
                    Quote Request Received
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. Our Superior
                    dispatch desk has received your request for{' '}
                    <strong className="text-orange-400">
                      {SERVICES.find((s) => s.serviceCode === serviceCategory)?.title ||
                        serviceCategory}
                    </strong>{' '}
                    at <strong className="text-white">{propertyAddress}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#121518] border border-[#2e353d] text-left max-w-md mx-auto text-xs space-y-2">
                  <div className="flex justify-between border-b border-[#2e353d]/50 pb-1.5">
                    <span className="text-slate-400">Callback Phone:</span>
                    <span className="text-white font-semibold">{phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#2e353d]/50 pb-1.5">
                    <span className="text-slate-400">Quote Email:</span>
                    <span className="text-white font-semibold">{email}</span>
                  </div>
                  {isDumpsterService && (
                    <div className="flex justify-between border-b border-[#2e353d]/50 pb-1.5">
                      <span className="text-slate-400">Requested Bin Size:</span>
                      <span className="text-orange-400 font-bold uppercase">{binSize}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-400">Expected Dispatch Response:</span>
                    <span className="text-emerald-400 font-semibold">Within 2–4 Hours</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#22272c] hover:bg-[#2c333a] text-slate-200 border border-[#2e353d] text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Quote Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="serviceCategory"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Select Required Service <span className="text-orange-400">*</span>
                  </label>
                  <select
                    id="serviceCategory"
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3.5 py-2.5 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.serviceCode}>
                        {s.title} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service-Aware Dumpster Sizing Buttons */}
                {isDumpsterService && (
                  <div className="p-4 rounded-xl bg-[#121518] border border-[#2e353d] space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-orange-400">
                      Choose Roll-Off Container Size
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['10-yard', '15-yard', '20-yard', '30-yard'] as const).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setBinSize(size)}
                          className={`p-2.5 rounded-lg border text-center transition-all ${
                            binSize === size
                              ? 'bg-[#ea580c] border-[#ea580c] text-white font-bold shadow-md'
                              : 'bg-[#181c20] border-[#2e353d] text-slate-300 hover:text-white hover:bg-[#22272c]'
                          }`}
                        >
                          <span className="font-display text-base uppercase block leading-none">
                            {size}
                          </span>
                          <span className="text-[10px] opacity-80 block mt-1">
                            {DUMPSTER_SPECS[size].includedTonnage}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-400 bg-[#181c20] p-2 rounded border border-[#2e353d]/50">
                      <strong className="text-slate-200">{DUMPSTER_SPECS[binSize].name}:</strong>{' '}
                      Dimensions: {DUMPSTER_SPECS[binSize].dimensions}. Ideal for{' '}
                      {DUMPSTER_SPECS[binSize].idealFor[0].toLowerCase()}.
                    </div>
                  </div>
                )}

                {/* Contact Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Full Name / Business <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                      }}
                      placeholder="e.g. John Miller or Miller Contracting"
                      className={`w-full bg-[#121518] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                        errors.fullName ? 'border-red-500' : 'border-[#2e353d]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Phone Number <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      placeholder="e.g. (715) 392-2673"
                      className={`w-full bg-[#121518] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                        errors.phone ? 'border-red-500' : 'border-[#2e353d]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Target Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="e.g. jmiller@gmail.com"
                      className={`w-full bg-[#121518] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                        errors.email ? 'border-red-500' : 'border-[#2e353d]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Target Delivery / Start Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#121518] border border-[#2e353d] rounded-lg px-3.5 py-2.5 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                    />
                  </div>
                </div>

                {/* Address & ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="propertyAddress"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Project Address / Jobsite <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      value={propertyAddress}
                      onChange={(e) => {
                        setPropertyAddress(e.target.value);
                        if (errors.propertyAddress)
                          setErrors((prev) => ({ ...prev, propertyAddress: '' }));
                      }}
                      placeholder="e.g. 1420 Tower Ave, Superior or 500 W 1st St, Duluth"
                      className={`w-full bg-[#121518] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                        errors.propertyAddress ? 'border-red-500' : 'border-[#2e353d]'
                      }`}
                    />
                    {errors.propertyAddress && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.propertyAddress}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      ZIP Code <span className="text-orange-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={zipCode}
                      maxLength={5}
                      onChange={(e) => {
                        setZipCode(e.target.value);
                        if (errors.zipCode) setErrors((prev) => ({ ...prev, zipCode: '' }));
                      }}
                      placeholder="e.g. 54880"
                      className={`w-full bg-[#121518] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                        errors.zipCode ? 'border-red-500' : 'border-[#2e353d]'
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.zipCode}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scope Notes */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Project Scope Details & Special Placement Notes
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={3}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Tell us about the debris types, access gates, steep slopes, or required timing..."
                    className="w-full bg-[#121518] border border-[#2e353d] rounded-lg p-3 text-sm text-white placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  />
                </div>

                {/* Submit Button with Restrained Glow */}
                <button
                  type="submit"
                  className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <span>Submit Project for Free Quote</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Direct dispatch from Superior, WI. We respect your privacy and never share contractor information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
