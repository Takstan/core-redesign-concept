import React from 'react';
import { Building2, Home, Factory, MapPin, Calendar, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section
      id="trust-strip"
      className="bg-[#161a1e] border-y border-[#2e353d] py-6 sm:py-8 relative z-20"
      aria-label="CORE Advantage Credibility"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#2e353d]">
          {/* Fact 1 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-lg bg-[#22272c] border border-[#2e353d] flex items-center justify-center shrink-0 text-orange-400">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-wide font-bold text-white leading-tight">
                Residential · Commercial · Industrial
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Contracted by Twin Ports homeowners, general contractors & manufacturing plants.
              </p>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6 lg:pl-8">
            <div className="w-12 h-12 rounded-lg bg-[#22272c] border border-[#2e353d] flex items-center justify-center shrink-0 text-orange-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-wide font-bold text-white leading-tight">
                Locally Owned & Operated
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Headquartered in Superior, WI. Direct dispatch across Superior & Duluth.
              </p>
            </div>
          </div>

          {/* Fact 3 */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6 lg:pl-8">
            <div className="w-12 h-12 rounded-lg bg-[#22272c] border border-[#2e353d] flex items-center justify-center shrink-0 text-orange-400">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-wide font-bold text-white leading-tight">
                Company Roots Dating to 2012
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Over a decade of heavy-duty reliability, honest flat pricing, and proven Northland grit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
