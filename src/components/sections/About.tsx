import React from 'react';
import { Sparkles, Brain, Bot, Layout, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const iconMap = [
    <Brain className="w-5 h-5 text-accent-cyan" />,
    <Bot className="w-5 h-5 text-accent-violet" />,
    <Layout className="w-5 h-5 text-accent-blue" />,
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={t.about.sectionTag}
            title={t.about.title}
            subtitle={t.about.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="p-5 sm:p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm space-y-4">
                <p className="text-base sm:text-lg text-light-text dark:text-dark-text font-medium leading-relaxed">
                  {t.about.p1}
                </p>
                <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed">
                  {t.about.p2}
                </p>
                <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed">
                  {t.about.p3}
                </p>
              </div>
            </Reveal>

            {/* Core Focus Cards */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-accent-blue dark:text-accent-cyan font-semibold">
                {t.about.focusTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {t.about.focusAreas.map((area, index) => (
                  <Reveal key={area.title} delay={0.15 + index * 0.08}>
                    <div className="h-full p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-cyan/30 transition-colors flex flex-col justify-between">
                      <div>
                        <div className="p-2 w-fit rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border mb-3">
                          {iconMap[index % iconMap.length]}
                        </div>
                        <h4 className="text-sm font-bold text-light-text dark:text-dark-text mb-1.5">
                          {area.title}
                        </h4>
                        <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-light-card via-light-surface to-light-card dark:from-dark-surface dark:via-dark-card dark:to-dark-surface border border-light-border dark:border-dark-border shadow-md">
                {/* Mini Profile Header */}
                <div className="flex items-center gap-3.5 sm:gap-4 pb-5 mb-5 sm:mb-6 border-b border-light-border dark:border-dark-border">
                  <div className="relative shrink-0">
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.fullName}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-accent-blue/30 dark:border-accent-cyan/30 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-light-surface dark:border-dark-surface" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-base sm:text-lg text-light-text dark:text-dark-text truncate">
                      {profileData.fullName}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent-blue dark:text-accent-cyan font-mono font-medium truncate">
                      {language === 'uz' ? profileData.roleUz : profileData.roleEn}
                    </p>
                    <p className="text-xs text-light-muted dark:text-dark-muted mt-0.5 sm:mt-1 truncate">
                      {language === 'uz' ? '14 yosh • O\'zbekiston' : 'Age 14 • Uzbekistan'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-cyan shrink-0" />
                  <h3 className="font-bold text-base sm:text-lg text-light-text dark:text-dark-text">
                    {t.about.quickFactsTitle}
                  </h3>
                </div>

                <div className="space-y-2.5 sm:space-y-4">
                  {t.about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="p-3 sm:p-3.5 rounded-xl bg-light-surface dark:bg-dark-surface/70 border border-light-border/70 dark:border-dark-border/60 flex items-center justify-between gap-3"
                    >
                      <span className="text-xs font-mono text-light-muted dark:text-dark-muted shrink-0">
                        {fact.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-light-text dark:text-dark-text text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-light-muted dark:text-dark-muted">
                    <Rocket className="w-4 h-4 text-accent-blue dark:text-accent-cyan flex-shrink-0" />
                    <span>Real muammolarni zamonaviy texnologiyalar bilan hal qilishga yo'naltirilgan.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
