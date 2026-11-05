import React from 'react';
import { Layout, Bot, Cpu, Code } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Skills: React.FC = () => {
  const { language, t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-accent-cyan" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent-blue" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-accent-violet" />;
      case 'Code':
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-28 relative bg-light-card/40 dark:bg-dark-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={t.skills.sectionTag}
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const title = language === 'uz' ? category.titleUz : category.titleEn;
            const desc = language === 'uz' ? category.descriptionUz : category.descriptionEn;

            return (
              <Reveal key={category.id} delay={index * 0.08}>
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/5 flex flex-col justify-between">
                  <div>
                    {/* Category Icon and title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border">
                        {getIcon(category.iconName)}
                      </div>
                      <h3 className="font-bold text-base text-light-text dark:text-dark-text tracking-tight">
                        {title}
                      </h3>
                    </div>

                    <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed mb-5 sm:mb-6">
                      {desc}
                    </p>

                    {/* Skill items list */}
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-light-card/60 dark:bg-dark-surface/60 border border-light-border/60 dark:border-dark-border/40 text-xs font-medium text-light-text dark:text-dark-text hover:border-accent-cyan/30 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Note at bottom */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-light-muted dark:text-dark-muted">
            ℹ️ {t.skills.note}
          </p>
        </div>
      </div>
    </section>
  );
};
