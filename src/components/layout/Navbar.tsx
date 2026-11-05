import React, { useState, useEffect } from 'react';
import { Menu, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = ['hero', 'about', 'skills', 'projects', 'approach', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home, id: 'hero' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#approach', label: t.nav.approach, id: 'approach' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-light-surface/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark / Brand */}
            <a
              href="#hero"
              className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-lg py-1 px-1 shrink-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-cyan flex items-center justify-center text-white font-mono font-bold shadow-sm shadow-accent-cyan/20 group-hover:scale-105 transition-transform shrink-0">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-light-text dark:text-dark-text group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                  Ayubxon <span className="hidden xs:inline">Murodov</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-light-muted dark:text-dark-muted -mt-0.5 tracking-wider uppercase">
                  AI & Web Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation (large screens) */}
            <nav className="hidden lg:flex items-center gap-1 bg-light-card/60 dark:bg-dark-surface/60 p-1.5 rounded-2xl border border-light-border dark:border-dark-border backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-accent-blue dark:bg-accent-cyan text-white dark:text-dark-bg font-semibold shadow-sm'
                        : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-card/60'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Controls (Language & Theme) */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <LanguageSwitcher className="hidden xs:inline-flex" />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/40 dark:hover:bg-dark-card border border-light-border dark:border-dark-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                aria-label={t.nav.openMenu}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
