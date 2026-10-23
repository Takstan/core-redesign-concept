import React, { useState } from 'react';
import { X, MapPin, Calendar, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types/index.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  const [sliderPos, setSliderPos] = useState(50);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-[#181c20] border border-[#2e353d] rounded-2xl shadow-2xl overflow-hidden my-8 z-10 animate-[fadeIn_0.2s_ease-out]">
        {/* Media Box: Before / After Slider or Single Hero Image */}
        <div className="relative h-64 sm:h-80 bg-[#121518] overflow-hidden select-none">
          {project.hasComparison && project.beforeImage && project.afterImage ? (
            <div className="relative w-full h-full">
              {/* After Image (Full background) */}
              <img
                src={project.afterImage}
                alt="After project completion"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-14 z-20 text-[10px] font-bold uppercase tracking-wider bg-black/70 text-emerald-400 px-2 py-0.5 rounded border border-[#2e353d]">
                After
              </span>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={project.beforeImage}
                  alt="Before project start"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', minWidth: '700px' }}
                />
                <span className="absolute top-4 left-4 z-20 text-[10px] font-bold uppercase tracking-wider bg-black/70 text-orange-400 px-2 py-0.5 rounded border border-[#2e353d]">
                  Before
                </span>
              </div>

              {/* Slider Divider Line & Thumb */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow-lg">
                  ⇄
                </div>
              </div>

              {/* Invisible Range Input for accessibility & drag */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after comparison slider"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          )}

          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c20] via-black/30 to-transparent pointer-events-none" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white z-40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Title */}
          <div className="absolute bottom-4 left-6 right-6 pointer-events-none">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-orange-400" />
                {project.location}
              </span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2
              id="project-modal-title"
              className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white mt-1 leading-tight"
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#14171a] border border-[#2e353d]">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                The Jobsite Challenge
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#14171a] border border-[#2e353d]">
              <span className="text-xs uppercase tracking-wider font-bold text-orange-400 block mb-1">
                CORE Advantage Solution
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Measured Result */}
          <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-display text-sm uppercase tracking-wide font-bold text-white block">
                Quantified Outcome & Deliverables
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Equipment deployed */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
              Heavy Fleet & Tools Deployed
            </span>
            <div className="flex flex-wrap gap-2">
              {project.equipmentUsed.map((eq, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#22272c] border border-[#2e353d] text-xs font-medium text-slate-300"
                >
                  <Wrench className="w-3.5 h-3.5 text-orange-400" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#2e353d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Need similar site work or equipment in Duluth/Superior?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#2e353d] text-slate-300 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
