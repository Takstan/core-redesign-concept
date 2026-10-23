import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Eye, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/content.ts';
import { ProjectItem } from '../types/index.ts';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { key: 'all', label: `All Projects (${FEATURED_PROJECTS.length})` },
    {
      key: 'demolition',
      label: `Demolition (${FEATURED_PROJECTS.filter((p) => p.category === 'demolition').length})`,
    },
    {
      key: 'roll_off',
      label: `Roll-Off (${FEATURED_PROJECTS.filter((p) => p.category === 'roll_off').length})`,
    },
    {
      key: 'landscaping',
      label: `Landscaping (${FEATURED_PROJECTS.filter((p) => p.category === 'landscaping').length})`,
    },
    {
      key: 'metal_works',
      label: `Metal Works (${FEATURED_PROJECTS.filter((p) => p.category === 'metal_works').length})`,
    },
    {
      key: 'remodeling',
      label: `Remodeling (${FEATURED_PROJECTS.filter((p) => p.category === 'remodeling').length})`,
    },
  ];

  const filteredProjects =
    activeTab === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-[#0e1113] relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
              <span>Proven Work Across Superior & Duluth</span>
            </div>
            <h2
              id="projects-heading"
              className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight"
            >
              Featured Twin Ports Projects.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore recent commercial demolitions, roll-off dumpster programs, emergency blizzard
              site clearings, and precision fabrication completed by our local team.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuote}
            className="self-start md:self-end text-xs sm:text-sm font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>Have a Similar Project? Let's Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Tabs Bar (Interactive filter controls with buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                activeTab === cat.key
                  ? 'bg-[#ea580c] text-white shadow-md'
                  : 'bg-[#181c20] text-slate-300 hover:text-white hover:bg-[#252b31] border border-[#2e353d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className="group cursor-pointer rounded-2xl bg-[#181c20] border border-[#2e353d] overflow-hidden flex flex-col transition-all duration-300 hover:border-orange-500/60 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              {/* Photo Frame */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#121518]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Base Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c20] via-black/40 to-transparent transition-opacity duration-300 group-hover:bg-[#121518]/70" />

                {/* Interactive comparison badge if exists */}
                {project.hasComparison && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-orange-600/90 backdrop-blur-md px-2 py-1 rounded shadow">
                      Interactive Before/After
                    </span>
                  </div>
                )}

                {/* Open lightbox icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 group-hover:bg-[#ea580c] text-white flex items-center justify-center transition-all duration-300 border border-[#2e353d]">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Hover overlay that slides over the bottom of the photo */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#181c20] via-[#181c20]/95 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-orange-400">
                    <span>{project.categoryLabel}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-3 h-3 text-orange-400" />
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-orange-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2e353d]/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                  <span className="text-orange-400 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                  <span className="text-slate-500 font-mono">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
