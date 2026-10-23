import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '../data/content.ts';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#121518] border-t border-[#2e353d] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <span>Verified Contractor & Homeowner Feedback</span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
          >
            Trusted Across the Twin Ports.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            From emergency winter snow plowing to commercial waterfront teardowns, see why builders
            and facility directors stick with CORE Advantage.
          </p>

          {/* Verified Google Review Link */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-slate-500">·</span>
            <a
              href="https://google.com/search?q=CORE+Advantage+Superior+WI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1"
            >
              <span>Verified Google Reviews</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonial Card with 300ms transition */}
        <div className="relative bg-[#181c20] border border-[#2e353d] rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300">
          <div className="absolute top-6 right-8 text-orange-500/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10">
            {/* Stars & Service Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 bg-[#22272c] border border-[#2e353d] px-3 py-1 rounded">
                Service: {current.serviceUsed}
              </span>
            </div>

            {/* Quote Body */}
            <blockquote className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic">
              “{current.quote}”
            </blockquote>

            {/* Author Attribution */}
            <div className="mt-8 pt-6 border-t border-[#2e353d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg uppercase font-bold text-white">
                  {current.author}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  <span className="text-slate-300 font-semibold">{current.role}</span>
                  <span className="mx-1.5">·</span>
                  <span>{current.organization}</span>
                  <span className="mx-1.5">·</span>
                  <span className="text-orange-400">{current.location}</span>
                </p>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Verified Client Review · {current.date}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation: Prev / Next / Dots */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#ea580c]' : 'w-2 bg-[#2e353d] hover:bg-slate-500'
                }`}
                aria-label={`Jump to review ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevTestimonial}
              className="p-2.5 rounded-lg bg-[#181c20] hover:bg-[#252b31] border border-[#2e353d] text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              className="p-2.5 rounded-lg bg-[#181c20] hover:bg-[#252b31] border border-[#2e353d] text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
