import React from 'react';
import { Compass, Lightbulb, Code2, Network, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Approach: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Compass className="w-5 h-5 text-accent-cyan" />,
    <Lightbulb className="w-5 h-5 text-amber-400" />,
    <Code2 className="w-5 h-5 text-accent-blue" />,
    <Network className="w-5 h-5 text-accent-violet" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="approach" className="py-14 sm:py-20 lg:py-28 relative bg-light-card/40 dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={t.approach.sectionTag}
            title={t.approach.title}
            subtitle={t.approach.subtitle}
          />
        </Reveal>

        <div className="relative">
          {/* Subtle timeline connector line for large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan/20 via-accent-blue/30 to-accent-violet/20 -translate-y-8 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {t.approach.steps.map((step, index) => {
              const isLast = index === t.approach.steps.length - 1;
              return (
                <Reveal
                  key={step.number}
                  delay={index * 0.1}
                  className={isLast ? 'sm:col-span-2 lg:col-span-1' : ''}
                >
                  <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
                    <div>
                      {/* Step number badge and icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-accent-blue dark:text-accent-cyan">
                          {step.number}
                        </span>
                        <div className="p-2 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border group-hover:scale-110 transition-transform">
                          {stepIcons[index % stepIcons.length]}
                        </div>
                      </div>

                      <h3 className="font-bold text-base text-light-text dark:text-dark-text tracking-tight mb-2 group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
