import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 pb-24 pt-24 text-center sm:px-6 lg:flex-row lg:items-end lg:gap-16 lg:text-left">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 text-sm font-semibold text-secondary shadow-sm">
            {t.hero.flexible}
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{t.hero.tagline}</p>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{t.hero.teacherSupport}</p>
          <p className="text-base text-slate-500 dark:text-slate-400">{t.hero.approach}</p>
          <p className="text-base text-slate-500 dark:text-slate-400">{t.hero.community}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-slate-900 shadow-lg hover:shadow-glow transition"
            >
              {t.hero.ctaCourses}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-base font-semibold text-accent hover:bg-accent/10 transition"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 rounded-2xl border border-slate-200/60 bg-white/60 p-8 shadow-xl dark:border-slate-800/70 dark:bg-slate-900/60"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-4 text-left text-base text-slate-600 dark:text-slate-300">
            <p>{t.about.summary}</p>
            <p>{t.about.specialities}</p>
            <p>{t.about.mission}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
