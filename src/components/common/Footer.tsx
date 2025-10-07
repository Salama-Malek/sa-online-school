import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setModalOpen] = useState(false);

  const quickLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'rules', label: t.nav.rules },
    { id: 'contact', label: t.nav.contact },
  ];

  const contactCards = [
    { label: t.contact.heading, icon: <PhoneIcon className="h-5 w-5" />, href: 'https://wa.me/79526891253' },
    { label: t.contact.instagram, icon: <ArrowTopRightOnSquareIcon className="h-5 w-5" />, href: 'https://www.instagram.com/sarahnadyn.gerges/' },
    { label: t.contact.youtube, icon: <ArrowTopRightOnSquareIcon className="h-5 w-5" />, href: 'https://www.youtube.com/@SAonlineschool' },
    { label: t.contact.email, icon: <EnvelopeIcon className="h-5 w-5" />, href: 'mailto:sarahnadynakhla@gmail.com' },
  ];

  return (
    <footer className="border-t border-slate-200/60 bg-white/80 backdrop-blur-2xl dark:border-slate-800/60 dark:bg-surface/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-secondary">SA Online School</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-slate-50">{t.hero.title}</h3>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.hero.tagline}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#courses" className="accent-button px-5 py-2 text-sm">
              {t.pricing.start}
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
            >
              About Developer
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Links</h4>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-accent/10 hover:text-secondary">
                  <span className="h-2 w-2 rounded-full bg-secondary/60" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Connect</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {contactCards.map((card) => {
              const label = card.label.replace(/\\/g, ' / ');
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/75 px-4 py-3 transition hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-surface/70"
                >
                  <span className="text-secondary">{card.icon}</span>
                  <span className="text-sm leading-relaxed">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="border-t border-slate-200/60 bg-white/70 py-4 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:bg-surface/70 dark:text-slate-300">
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
              className="section-card w-full max-w-xl space-y-6 text-left"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div>
                <h5 className="text-2xl font-semibold text-secondary">About Developer</h5>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <p>Created by Salama Malek — Full-Stack Developer</p>
                  <p>React | TypeScript | Node.js</p>
                  <p>Based in Moscow, Russia</p>
                  <p>
                    GitHub:{' '}
                    <a href="https://github.com/Salama-Malek" className="text-accent hover:underline" target="_blank" rel="noreferrer">
                      https://github.com/Salama-Malek
                    </a>
                  </p>
                  <p>
                    LinkedIn:{' '}
                    <a href="https://www.linkedin.com/in/salama-malek" className="text-accent hover:underline" target="_blank" rel="noreferrer">
                      https://www.linkedin.com/in/salama-malek
                    </a>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="accent-button w-full justify-center px-5 py-2 text-sm"
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
