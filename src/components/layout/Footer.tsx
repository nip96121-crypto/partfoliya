import React from 'react';
import { Terminal, Send, ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#approach', label: t.nav.approach },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="mt-16 sm:mt-20 border-t border-light-border dark:border-dark-border bg-light-surface/40 dark:bg-dark-surface/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center text-white font-mono font-bold shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-light-text dark:text-dark-text">
                Ayubxon Murodov
              </span>
            </div>
            <p className="text-xs sm:text-sm text-light-muted dark:text-dark-muted max-w-md leading-relaxed">
              {language === 'uz' ? profileData.bioUz : profileData.bioEn}
            </p>
            <div className="pt-1">
              <a
                href={profileData.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-blue/10 dark:bg-accent-cyan/10 text-accent-blue dark:text-accent-cyan text-xs font-mono font-medium hover:opacity-80 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{profileData.telegramUsername}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-3 sm:mb-4">
              {t.footer.navigationTitle}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-light-muted dark:text-dark-muted hover:text-accent-blue dark:hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions & Scroll to top */}
          <div className="flex flex-col justify-between space-y-6 sm:space-y-0">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-3 sm:mb-4">
                {t.footer.socialTitle}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-light-muted dark:text-dark-muted">
                <p>Telegram: <a href={profileData.telegramUrl} className="text-accent-blue dark:text-accent-cyan hover:underline">{profileData.telegramUsername}</a></p>
                {profileData.showPhone && (
                  <p>Tel: <a href={profileData.phoneUrl} className="text-accent-blue dark:text-accent-cyan hover:underline">{profileData.phoneNumber}</a></p>
                )}
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:border-accent-cyan/40 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Yuqoriga</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom separator and copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-light-muted dark:text-dark-muted text-center sm:text-left">
          <p>© {currentYear} Ayubxon Murodov. {t.footer.rights}</p>
          <p className="font-mono">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};
