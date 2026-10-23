import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS } from '../data/content.ts';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQS[0].id]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#121518] border-t border-[#2e353d] relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <span>Clear Answers Before Booking</span>
          </div>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Everything you need to know about container placement, municipal permits, tonnage limits,
            and winter operations in the Twin Ports.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#181c20] border border-[#2e353d] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-white hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#22272c] border border-[#2e353d] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-400 border-orange-500/40' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#2e353d]/40 pt-4 animate-[fadeIn_0.2s_ease-out]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-10 p-5 rounded-xl bg-[#181c20] border border-[#2e353d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-orange-400 shrink-0" />
            <span>Have a specific project question or unusual disposal need?</span>
          </div>
          <a
            href="tel:7153922673"
            className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Dispatch: (715) 392-CORE</span>
          </a>
        </div>
      </div>
    </section>
  );
};
