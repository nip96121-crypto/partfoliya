import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Send, Sparkles, Terminal, Bot, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-accent-blue/10 dark:bg-accent-cyan/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-violet/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-xs font-mono font-medium shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-light-text dark:text-dark-text">{t.hero.availableBadge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-[1.18] sm:leading-[1.12]"
            >
              {t.hero.headlinePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet">
                {t.hero.headlineHighlight}
              </span>
              {t.hero.headlinePart2}
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-sm xs:text-base sm:text-lg text-light-muted dark:text-dark-muted leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-3.5"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
                className="w-full xs:w-auto"
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<Send className="w-4 h-4" />}
                iconPosition="right"
                className="w-full xs:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </motion.div>

            {/* Key Focus Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-light-muted dark:text-dark-muted"
            >
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span>AI Agents</span>
              </div>
              <span className="text-light-border dark:text-dark-border">•</span>
              <div className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span>Telegram Bots</span>
              </div>
              <span className="text-light-border dark:text-dark-border">•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span>Modern Web</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Element: Developer Portrait & Architectural Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-blue/20 via-accent-cyan/20 to-accent-violet/20 rounded-3xl blur-2xl opacity-70 pointer-events-none -z-10" />

              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-light-surface/90 dark:bg-dark-surface/90 border border-light-border dark:border-dark-border shadow-2xl p-3.5 sm:p-5 backdrop-blur-xl">
                {/* Header of technical card */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-light-border dark:border-dark-border">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-light-muted dark:text-dark-muted">
                      ayubxon_murodov.dev
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Developer Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.7] sm:aspect-[4/4.6] bg-slate-900 group shadow-md border border-light-border/60 dark:border-dark-border/60">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient over bottom for readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent pointer-events-none" />

                  {/* Identification Pill inside bottom of image */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 p-2.5 sm:p-3 rounded-xl bg-dark-surface/85 backdrop-blur-md border border-white/10 shadow-lg text-white">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-xs sm:text-sm tracking-wide text-white flex items-center gap-1.5 truncate">
                          <span>{profileData.fullName}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-mono text-cyan-300 truncate">
                          {language === 'uz' ? profileData.roleUz : profileData.roleEn}
                        </p>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-accent-blue/30 text-cyan-200 border border-cyan-400/25 shrink-0 whitespace-nowrap">
                        {language === 'uz' ? '14 yosh' : 'Age 14'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-node connectivity badges */}
                <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-3.5 border-t border-light-border dark:border-dark-border grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-accent-blue/10 dark:bg-accent-cyan/10 text-accent-blue dark:text-accent-cyan shrink-0">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-semibold text-light-text dark:text-dark-text truncate">AI Architecture</div>
                      <div className="text-[9px] sm:text-[10px] text-light-muted dark:text-dark-muted truncate">Agents & Bots</div>
                    </div>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center gap-2 sm:gap-2.5">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-semibold text-light-text dark:text-dark-text truncate">Clean Code</div>
                      <div className="text-[9px] sm:text-[10px] text-light-muted dark:text-dark-muted truncate">Fast & Modern</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 p-2.5 sm:p-3 rounded-xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border shadow-lg flex items-center gap-2 text-xs font-semibold text-light-text dark:text-dark-text animate-float">
                <Terminal className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Practical Solutions First</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
