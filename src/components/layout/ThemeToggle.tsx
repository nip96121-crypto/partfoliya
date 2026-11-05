import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-card border border-light-border dark:border-dark-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan ${className}`}
      aria-label={t.nav.toggleTheme}
      title={t.nav.toggleTheme}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
