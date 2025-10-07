import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const isRTL = language === 'ar';

  const highlightPills = [t.hero.flexible, t.hero.approach, t.hero.teacherSupport];
  const teacherName = t.about.name.split('|')[0]?.trim() ?? 'Sarah Gerges';

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative isolate overflow-hidden bg-gradient-to-b from-accent/20 via-transparent to-transparent pb-24 pt-28 text-center transition-colors duration-500 dark:from-accent/10 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.18),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_60%)]" />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl dark:bg-secondary/30"
          animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25"
          animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl flex-col justify-center gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:text-left">
        <motion.div
          className={`flex flex-1 flex-col items-center gap-8 text-center lg:items-start ${isRTL ? 'lg:text-right' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-secondary shadow-[0_15px_40px_-30px_rgba(30,41,59,0.65)] dark:bg-surface/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          >
            {t.hero.flexible}
          </motion.span>
          <div className="space-y-5">
            <motion.h1
              className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            >
              {t.hero.title}
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                {teacherName}
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              {t.hero.tagline}
            </motion.p>
            <motion.div
              className="grid w-full gap-4 sm:grid-cols-3 sm:gap-5"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {highlightPills.map((pill) => (
                <motion.div
                  key={pill}
                  className="glass-panel h-full text-left text-sm text-slate-600 shadow-[0_25px_70px_-40px_rgba(30,41,59,0.65)] transition dark:text-slate-200"
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  {pill}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className={`flex flex-col items-center gap-4 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
          >
            <a href="#courses" className="accent-button">
              {t.pricing.start}
            </a>
            <a href="#contact" className="outline-button">
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          <motion.div
            className="gradient-border relative mx-auto max-w-xl overflow-hidden rounded-[40px] bg-white/75 p-4 shadow-[0_50px_120px_-60px_rgba(30,41,59,0.85)] dark:bg-surface/60"
            style={{ y: parallaxY }}
          >
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
              alt="Teacher leading online language lesson"
              loading="lazy"
              className="h-full w-full rounded-[32px] object-cover"
            />
            <motion.div
              className="absolute inset-x-8 bottom-8 rounded-3xl bg-white/90 p-6 text-left shadow-[0_30px_70px_-40px_rgba(30,41,59,0.6)] dark:bg-surface/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.about.heading}</p>
              <p className="mt-3 text-lg font-display text-slate-900 dark:text-slate-100">{t.about.summary}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.about.specialities}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
