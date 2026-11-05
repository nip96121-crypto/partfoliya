import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, Activity, Cpu } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectDetailsModal } from './ProjectDetailsModal';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isUz = language === 'uz';
  const name = isUz ? project.nameUz : project.nameEn;
  const description = isUz ? project.descriptionUz : project.descriptionEn;
  const status = isUz ? project.statusUz : project.statusEn;
  const category = isUz ? project.categoryUz : project.categoryEn;

  return (
    <>
      <div className="group relative bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-cyan/5 flex flex-col h-full">
        {/* CSS-based Custom Technical Preview */}
        <div className="relative h-52 sm:h-64 bg-gradient-to-br from-[#0c1017] via-[#101522] to-[#141b2c] p-3 sm:p-4 flex flex-col justify-between overflow-hidden border-b border-light-border dark:border-dark-border">
          {/* Subtle Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top simulation bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-cyan-300/80 bg-black/40 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="truncate">AI_SUPERMARKET_CORE // v0.4-dev</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 shrink-0 ml-2">
              <Activity className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="hidden xs:inline">SYNCING</span>
            </div>
          </div>

          {/* Center Graphic: Digital Store AI Flow */}
          <div className="relative z-10 my-auto py-2 w-full">
            <div className="max-w-[280px] w-full mx-auto bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 sm:p-3 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-md bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Inventory AI</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready
                </span>
              </div>

              {/* Simulated data metrics */}
              <div className="mt-2.5 space-y-1.5">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>Stock Optimization</span>
                  <span className="font-mono text-cyan-400">94.8%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full w-[94%]" />
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
                  <span>Demand Prediction</span>
                  <span className="font-mono text-purple-400">Active</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-[78%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom tag inside preview */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/60 backdrop-blur-sm">
              {category}
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{status}</span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-light-text dark:text-dark-text tracking-tight group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
              {name}
            </h3>
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-md bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-light-border dark:border-dark-border flex items-center justify-between gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-accent-blue dark:text-accent-cyan hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-md py-1"
            >
              <Eye className="w-4 h-4 shrink-0" />
              <span>{t.projects.viewDetails}</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Note: Prompt Section 6.E / 14.13: "Missing project URLs do not produce fake working buttons." */}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-card dark:hover:bg-dark-surface"
                aria-label="Demo URL"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
