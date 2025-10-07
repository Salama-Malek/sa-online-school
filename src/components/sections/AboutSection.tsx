import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const narrative = [t.about.journey, t.about.coaching, t.about.support, t.about.call];
  const focusAreas = [
    { title: t.about.mission, description: t.about.experience },
    { title: t.hero.teacherSupport, description: t.about.achievements },
    { title: t.about.education, description: t.hero.community },
  ];
  const badges = [t.about.summary, t.about.specialities, t.hero.flexible];

  return (
    <SectionContainer id="about" className="relative bg-transparent">
      <div className="relative overflow-hidden rounded-[40px] border border-slate-200/60 bg-white/80 px-8 py-12 shadow-[0_45px_140px_-60px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-slate-800/70 dark:bg-surface/70">
        <motion.div
          className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-secondary/15 blur-3xl dark:bg-secondary/20"
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className={`relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${isRTL ? 'rtl:text-right' : ''}`}>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.about.heading}</span>
              <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">{t.about.name}</h2>
              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {narrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-accent/50 bg-white/70 px-5 py-3 text-sm font-semibold text-accent shadow-[0_25px_70px_-40px_rgba(30,41,59,0.6)] dark:bg-surface/70">
              <a href="mailto:sarahnadynakhla@gmail.com" className="hover:underline">
                {t.about.email}
              </a>
            </div>
          </motion.div>
          <motion.div
            className={`flex flex-col gap-6 ${isRTL ? 'rtl:lg:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 shadow-[0_35px_120px_-60px_rgba(30,41,59,0.75)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-surface/70">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1100&q=80"
                alt="Sarah Gerges teaching online"
                loading="lazy"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <motion.div
                  key={item.title}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/60 bg-white/80 p-5 text-left text-sm leading-relaxed text-slate-600 shadow-[0_25px_60px_-50px_rgba(30,41,59,0.65)] transition hover:-translate-y-2 hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-200"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                >
                  <span className="text-sm font-semibold text-secondary">{item.title}</span>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
