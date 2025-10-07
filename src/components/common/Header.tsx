import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'rules', label: t.nav.rules },
    { id: 'contact', label: t.nav.contact },
  ];

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);
  const isRTL = language === 'ar';

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl transition-all duration-500 dark:border-slate-800/60 dark:bg-surface/70 ${
        isScrolled ? 'shadow-[0_20px_70px_-40px_rgba(15,23,42,0.45)]' : ''
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-display font-semibold tracking-tight text-slate-800 transition hover:text-secondary dark:text-slate-100"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-accent via-secondary to-accent text-sm font-semibold text-slate-900 shadow-[0_20px_45px_-25px_rgba(56,189,248,0.8)]">
            SA
          </span>
          <span className="hidden sm:block">SA Online School</span>
        </a>
        <nav
          className={`hidden items-center gap-6 text-sm font-semibold text-slate-600 transition-colors dark:text-slate-200 lg:flex ${
            isRTL ? 'flex-row-reverse space-x-reverse' : ''
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-1 py-1 text-slate-600 transition after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-all hover:text-secondary hover:after:w-full dark:text-slate-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="#courses" className="hidden lg:inline-flex accent-button px-5 py-2 text-sm">
            {t.pricing.start}
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-200 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mx-4 mb-4 space-y-2 rounded-2xl border border-slate-200/60 bg-white/80 p-4 text-sm font-medium shadow-lg shadow-slate-200/30 dark:border-slate-800/70 dark:bg-surface/80">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-xl px-4 py-3 text-slate-700 transition hover:bg-accent/10 hover:text-secondary dark:text-slate-200 dark:hover:bg-slate-800/70"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block rounded-xl px-4 py-3 text-slate-700 transition hover:bg-accent/10 hover:text-secondary dark:text-slate-200 dark:hover:bg-slate-800/70"
                onClick={closeMenu}
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
