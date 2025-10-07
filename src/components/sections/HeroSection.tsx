import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const highlights = [t.hero.approach, t.hero.teacherSupport, t.hero.community];
  const nameHighlight = t.about.name.split('|')[0]?.trim() ?? 'Sarah Gerges';

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-background-light to-white/60 pb-24 pt-28 text-center transition dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/60 sm:pt-32 lg:text-start"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-sheen absolute inset-0 opacity-90" />
        <motion.div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl dark:bg-secondary/30"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl dark:bg-accent/20"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary shadow-lg shadow-accent/20 dark:bg-slate-900/60">
            {t.hero.flexible}
          </div>
          <div className="space-y-4">
            <motion.h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl">
              <span className="text-slate-700 dark:text-slate-200">{t.hero.title}</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                {nameHighlight}
              </span>
            </motion.h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {t.hero.tagline}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  className="glass-panel text-start text-sm text-slate-600 shadow-lg shadow-slate-900/5 dark:text-slate-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:items-center sm:justify-start">
            <a
              href="#courses"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-secondary/40 transition hover:-translate-y-1 hover:shadow-glow"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="gradient-border relative overflow-hidden rounded-[36px] bg-white/80 p-4 shadow-2xl shadow-accent/20 dark:bg-slate-900/70"
            style={{ y: parallaxY }}
          >
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
              alt="Teacher leading online language lesson"
              loading="lazy"
              className="h-full w-full rounded-[28px] object-cover"
            />
            <motion.div
              className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/90 p-6 text-start shadow-xl shadow-slate-900/10 dark:bg-slate-900/80"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.about.heading}</p>
              <p className="mt-2 text-lg font-display text-slate-900 dark:text-slate-100">{t.about.summary}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.about.specialities}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
