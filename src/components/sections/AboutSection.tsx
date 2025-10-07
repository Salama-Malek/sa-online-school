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
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/80 p-10 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <div className="absolute -top-20 right-4 h-64 w-64 rounded-full bg-accent/10 blur-3xl dark:bg-secondary/20" />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className={`space-y-8 ${isRTL ? 'rtl:text-right' : ''}`}>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.about.heading}</span>
              <h2 className="text-4xl font-display leading-tight text-slate-900 dark:text-slate-100">
                {t.about.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="text-sm font-semibold text-accent">
              <a href="mailto:sarahnadynakhla@gmail.com" className="hover:underline">
                {t.about.email}
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <motion.div
              className="overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl shadow-slate-200/30 backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80"
                alt="Sarah Gerges teaching online"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </motion.div>
            <div className="grid gap-4">
              {expertiseCards.map((item) => (
                <motion.div
                  key={item}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 text-sm leading-relaxed text-slate-600 shadow-lg shadow-slate-200/20 transition hover:-translate-y-1 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  {item}
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
