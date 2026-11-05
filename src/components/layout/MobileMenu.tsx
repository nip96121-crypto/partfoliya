import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../../data/profile';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const { t } = useLanguage();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const navLinks = [
    { href: '#hero', label: t.nav.home, id: 'hero' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#approach', label: t.nav.approach, id: 'approach' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] sm:w-[80%] max-w-sm bg-light-surface dark:bg-dark-surface border-l border-light-border dark:border-dark-border p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-light-border dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center text-white font-mono text-xs font-bold">
                    A
                  </div>
                  <span className="font-bold text-base tracking-tight text-light-text dark:text-dark-text">
                    Ayubxon Murodov
                  </span>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  className="p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                  aria-label={t.nav.closeMenu}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-5 sm:mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={onClose}
                      className={`px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all ${
                        isActive
                          ? 'bg-accent-blue/10 dark:bg-accent-cyan/10 text-accent-blue dark:text-accent-cyan font-semibold'
                          : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/30 dark:hover:bg-dark-border/20'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Controls */}
            <div className="pt-5 sm:pt-6 mt-6 border-t border-light-border dark:border-dark-border space-y-4 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-light-muted dark:text-dark-muted font-medium">
                  Sozlamalar:
                </span>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={profileData.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-accent-blue/10 text-accent-blue dark:bg-accent-cyan/10 dark:text-accent-cyan text-xs font-semibold hover:opacity-90 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                {profileData.showPhone && (
                  <a
                    href={profileData.phoneUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text hover:opacity-90 active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Telefon</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
