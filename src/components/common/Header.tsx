import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'rules', label: t.nav.rules },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-xl bg-background-light/80 dark:bg-background-dark/70 border-b border-slate-200/60 dark:border-slate-800"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-lg font-bold tracking-tight text-secondary">
          SA Online School
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
