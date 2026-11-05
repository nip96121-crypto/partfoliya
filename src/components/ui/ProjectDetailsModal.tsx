import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Layers, Clock } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const { language, t } = useLanguage();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Lock scroll
      document.body.style.overflow = 'hidden';
      // Focus close button
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  const isUz = language === 'uz';
  const name = isUz ? project.nameUz : project.nameEn;
  const description = isUz ? project.descriptionUz : project.descriptionEn;
  const details = isUz ? project.fullDetailsUz : project.fullDetailsEn;
  const highlights = isUz ? project.highlightsUz : project.highlightsEn;
  const status = isUz ? project.statusUz : project.statusEn;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto p-3 sm:p-6 flex min-h-full items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-desc"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="relative w-full max-w-2xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 my-auto sm:my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header banner */}
            <div className="relative p-5 sm:p-8 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-violet/10 border-b border-light-border dark:border-dark-border shrink-0">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium mb-2 sm:mb-3 bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span>{status}</span>
                  </div>
                  <h3
                    id="modal-project-title"
                    className="text-xl sm:text-3xl font-bold text-light-text dark:text-dark-text tracking-tight"
                  >
                    {name}
                  </h3>
                  <p
                    id="modal-project-desc"
                    className="mt-1.5 sm:mt-2 text-xs sm:text-base text-light-muted dark:text-dark-muted"
                  >
                    {description}
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-border/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  aria-label={t.projects.modalClose}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-6 overflow-y-auto flex-1">
              {/* Detailed Breakdown */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent-blue dark:text-accent-cyan flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.projects.highlightsTitle}</span>
                </h4>
                <div className="space-y-2 sm:space-y-2.5">
                  {details.map((point, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-3.5 rounded-xl bg-light-card dark:bg-dark-surface/60 border border-light-border/60 dark:border-dark-border/50 text-xs sm:text-sm text-light-text dark:text-dark-text/90 leading-relaxed"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent-blue dark:text-accent-cyan flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>{t.projects.highlightsTitle}</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-light-muted dark:text-dark-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent-blue dark:text-accent-cyan">
                  {t.projects.techStackTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono rounded-lg bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status & Availability Notice */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-accent-blue/5 dark:bg-accent-cyan/5 border border-accent-blue/15 dark:border-accent-cyan/15 flex items-start gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent-blue dark:text-accent-cyan flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-light-muted dark:text-dark-muted">
                  <span className="font-semibold text-light-text dark:text-dark-text block mb-0.5 sm:mb-1">
                    {t.projects.statusDetailsTitle}
                  </span>
                  {t.projects.noExternalLinkNote}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3.5 sm:p-5 bg-light-card/40 dark:bg-dark-surface/40 border-t border-light-border dark:border-dark-border flex justify-end shrink-0">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-border/60 dark:hover:bg-dark-card transition-colors text-light-text dark:text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                {t.projects.modalClose}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
