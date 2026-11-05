import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 sm:p-1 rounded-xl bg-light-card dark:bg-dark-surface border border-light-border dark:border-dark-border text-xs font-mono font-medium ${className}`}
      role="group"
      aria-label={t.nav.switchLang}
    >
      <button
        type="button"
        onClick={() => setLanguage('uz')}
        className={`px-2 sm:px-2.5 py-1 rounded-lg transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
          language === 'uz'
            ? 'bg-accent-blue text-white shadow-sm'
            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
        }`}
        aria-pressed={language === 'uz'}
      >
        UZ
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 sm:px-2.5 py-1 rounded-lg transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
          language === 'en'
            ? 'bg-accent-blue text-white shadow-sm'
            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
};
