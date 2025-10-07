import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setModalOpen] = useState(false);

  const quickLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'rules', label: t.nav.rules },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 border-t border-slate-200/60 dark:border-slate-800 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="text-xl font-bold text-secondary">SA Online School</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.hero.tagline}</p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="mt-6 inline-flex items-center rounded-full bg-secondary/90 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-secondary"
          >
            About Developer
          </button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-200/60 dark:border-slate-800 py-4 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} SA Online School. All rights reserved.
      </p>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="section-card max-w-lg w-full p-8 text-left"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <h5 className="text-2xl font-bold text-secondary">About Developer</h5>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                Created by Salama Malek
                <br />
                Full-Stack Developer — React | TypeScript | Node.js
                <br />
                Based in Moscow, Russia
                <br />
                Passionate about clean UI, scalable systems, and multilingual digital experiences.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <a href="https://github.com/Salama-Malek" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  GitHub: https://github.com/Salama-Malek
                </a>
                <a
                  href="https://www.linkedin.com/in/salama-malek"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-accent hover:underline"
                >
                  LinkedIn: https://www.linkedin.com/in/salama-malek
                </a>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-slate-900 shadow-md"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
