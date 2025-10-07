import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const storyParagraphs = [t.about.journey, t.about.coaching, t.about.support, t.about.call];
  const expertiseCards = [t.about.experience, t.about.achievements, t.about.education];
  const badges = [t.about.summary, t.about.specialities, t.hero.flexible];

  return (
    <SectionContainer id="about" className="relative">
      <div className="relative overflow-hidden rounded-[44px] border border-slate-200/70 bg-white/80 p-10 shadow-2xl shadow-slate-200/30 backdrop-blur-3xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <div className="spotlight absolute inset-0" />
        <motion.div
          className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-secondary/15 blur-3xl dark:bg-accent/20"
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className={`space-y-10 ${isRTL ? 'rtl:text-right' : ''}`}>
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                {t.about.heading}
              </span>
              <h2 className="text-4xl font-display leading-tight text-slate-900 dark:text-slate-100">
                {t.about.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-accent/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary shadow-sm shadow-accent/20 dark:bg-slate-900/60"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <ol className="relative space-y-6 border-s border-transparent">
              {storyParagraphs.map((paragraph, index) => (
                <li key={paragraph} className="relative rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-sm shadow-slate-200/20 transition hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-slate-900/65">
                  <div className="absolute -left-4 top-6 hidden h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-sm font-semibold text-secondary shadow-lg shadow-secondary/20 lg:flex">
                    {index + 1}
                  </div>
                  <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{paragraph}</p>
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-accent">
              <a href="mailto:sarahnadynakhla@gmail.com" className="relative inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2 transition hover:bg-accent/10">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {t.about.email}
              </a>
              <span className="dashed-divider h-[1px] w-32 text-slate-300" />
              <span className="text-xs uppercase tracking-[0.25em] text-secondary">{t.hero.community}</span>
            </div>
          </div>
          <div className="relative space-y-8">
            <motion.div
              className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/90 shadow-xl shadow-accent/10 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80"
                alt="Sarah Gerges teaching online"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-x-8 -bottom-8 rounded-3xl border border-secondary/40 bg-gradient-to-br from-secondary/15 via-accent/10 to-secondary/5 px-6 py-5 text-sm text-secondary shadow-lg shadow-secondary/20 backdrop-blur-xl">
                {t.about.specialities}
              </div>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {expertiseCards.map((item) => (
                <motion.div
                  key={item}
                  className="tilt-card relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-6 text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-200/20 transition dark:border-slate-700/60 dark:bg-slate-900/65 dark:text-slate-300"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <span className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-accent/10 blur-3xl dark:bg-secondary/20" />
                  <p className="relative">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
