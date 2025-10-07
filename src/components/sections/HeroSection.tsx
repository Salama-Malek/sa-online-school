import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../../hooks/useLanguage';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  const spotlightHighlights = [t.hero.approach, t.hero.teacherSupport, t.hero.community];
  const signature = t.about.name.split('|')[0]?.trim() ?? 'Sarah Gerges';

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-background-light to-white/60 pb-24 pt-28 text-center text-slate-900 transition dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/60 sm:pt-32 lg:text-start"
    >
      <div className="absolute inset-0 aurora-field" />
      <div className="absolute inset-0 opacity-40">
        <div className="grid-overlay absolute inset-0" />
      </div>
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl dark:bg-secondary/30"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary shadow-lg shadow-accent/10 dark:bg-slate-900/60">
            <SparklesIcon className="h-4 w-4" />
            {t.hero.flexible}
          </div>
          <div className="space-y-5">
            <motion.h1 className="text-4xl leading-tight text-slate-800 dark:text-slate-100 sm:text-5xl md:text-6xl">
              {t.hero.title}
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                {signature}
              </span>
            </motion.h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {t.hero.tagline}
            </p>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {spotlightHighlights.map((item) => (
                <motion.div
                  key={item}
                  className="glass-panel relative overflow-hidden text-start text-sm text-slate-600 shadow-lg shadow-slate-900/5 dark:text-slate-300"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/10 blur-3xl dark:bg-secondary/20" />
                  <p className="relative text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:items-center sm:justify-start">
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary via-accent to-secondary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-secondary/30 transition hover:-translate-y-1 hover:shadow-glow"
            >
              {t.hero.ctaCourses}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-accent px-8 py-3 text-base font-semibold text-accent transition hover:bg-accent/10"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="gradient-border relative overflow-hidden rounded-[40px] bg-white/90 p-5 shadow-2xl shadow-accent/20 dark:bg-slate-900/70"
            style={{ y: parallaxY }}
          >
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
              alt="Teacher leading online language lesson"
              loading="lazy"
              className="h-full w-full rounded-[30px] object-cover"
            />
            <motion.div
              className="absolute inset-x-7 bottom-8 rounded-2xl bg-white/95 p-6 text-start shadow-xl shadow-slate-900/10 dark:bg-slate-900/80"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 text-secondary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
                  <AcademicCapIcon className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">{t.about.heading}</p>
              </div>
              <p className="mt-3 text-lg font-display text-slate-900 dark:text-slate-100">{t.about.summary}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.about.specialities}</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute -bottom-10 left-1/2 w-[82%] -translate-x-1/2 rounded-3xl border border-accent/40 bg-white/80 p-4 text-sm shadow-2xl shadow-accent/20 backdrop-blur-xl dark:border-secondary/40 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">{t.hero.ctaCourses}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.hero.teacherSupport}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
