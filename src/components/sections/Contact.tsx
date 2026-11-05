import React, { useState } from 'react';
import { Send, Phone, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopy = async (text: string, type: 'phone' | 'telegram') => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopySuccess(type);
        setTimeout(() => setCopySuccess(null), 3000);
      } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopySuccess(type);
        setTimeout(() => setCopySuccess(null), 3000);
      }
    } catch {
      alert(t.contact.copyErrorNotice);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge={t.contact.sectionTag}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
          {/* Main Direct Contact Cards */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {/* Telegram Card */}
            <Reveal delay={0.1}>
              <div className="p-4 sm:p-6 rounded-2xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-cyan/40 transition-all shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-accent-blue/10 dark:bg-accent-cyan/10 text-accent-blue dark:text-accent-cyan shrink-0">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] sm:text-xs font-mono uppercase text-light-muted dark:text-dark-muted block">
                        Telegram
                      </span>
                      <a
                        href={profileData.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-bold text-light-text dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-cyan transition-colors truncate block"
                      >
                        {profileData.telegramUsername}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-light-border/60 dark:border-dark-border/40">
                    <button
                      onClick={() => handleCopy(profileData.telegramUsername, 'telegram')}
                      className="p-2 sm:p-2.5 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan shrink-0"
                      title="Nusxalash"
                      aria-label="Copy Telegram username"
                    >
                      {copySuccess === 'telegram' ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={profileData.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-accent-blue hover:bg-accent-cyan text-white text-xs font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                    >
                      <span>Yozish</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Phone Card */}
            {profileData.showPhone && (
              <Reveal delay={0.2}>
                <div className="p-4 sm:p-6 rounded-2xl bg-light-surface dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-accent-cyan/40 transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-4">
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] sm:text-xs font-mono uppercase text-light-muted dark:text-dark-muted block">
                          Telefon
                        </span>
                        <a
                          href={profileData.phoneUrl}
                          className="text-base sm:text-lg font-bold text-light-text dark:text-dark-text hover:text-emerald-500 transition-colors truncate block"
                        >
                          {profileData.phoneNumber}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-light-border/60 dark:border-dark-border/40">
                      <button
                        onClick={() => handleCopy(profileData.phoneNumber, 'phone')}
                        className="p-2 sm:p-2.5 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan shrink-0"
                        title={t.contact.copyPhone}
                        aria-label={t.contact.copyPhone}
                      >
                        {copySuccess === 'phone' ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <a
                        href={profileData.phoneUrl}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-card text-xs font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                      >
                        <span>Qo'ng'iroq</span>
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Copy Notification Banner */}
            {copySuccess && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{t.contact.copiedNotice}</span>
              </div>
            )}
          </div>

          {/* Right Information Box */}
          <div className="lg:col-span-5">
            <Reveal delay={0.25}>
              <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-light-card to-light-surface dark:from-dark-surface dark:to-dark-card border border-light-border dark:border-dark-border shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-accent-blue dark:text-accent-cyan">
                  <Sparkles className="w-5 h-5 shrink-0" />
                  <h3 className="font-bold text-base text-light-text dark:text-dark-text">
                    {t.contact.availabilityTitle}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                  {t.contact.availabilityText}
                </p>

                <div className="pt-4 border-t border-light-border dark:border-dark-border space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>Tezkor javob: Telegram orqali</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-light-muted dark:text-dark-muted">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
                    <span>Mavzular: AI, Botlar, Veb saytlar</span>
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
