import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="pricing">
      <div className="relative overflow-hidden rounded-[44px] border border-slate-200/70 bg-gradient-to-br from-white/95 via-white/80 to-white/60 p-10 shadow-2xl shadow-slate-200/40 backdrop-blur-3xl dark:border-slate-800/60 dark:from-slate-900/85 dark:via-slate-900/70 dark:to-slate-900/50">
        <motion.div
          className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl dark:bg-accent/20"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 right-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl dark:bg-secondary/20"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.nav.pricing}</span>
              <h2 className="text-4xl font-display text-slate-900 dark:text-slate-100">{t.pricing.heading}</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{t.pricing.subheading}</p>
              <div className="grid gap-3 text-sm text-slate-500 dark:text-slate-400 sm:grid-cols-2">
                <p>{t.pricing.tableTitle}</p>
                <p>{t.pricing.regionsHeading}</p>
                <p>{t.pricing.regions}</p>
                <p>{t.pricing.note}</p>
              </div>
            </div>
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/10 via-accent/10 to-secondary/5 p-6 text-sm text-secondary shadow-xl shadow-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em]">{t.pricing.cta}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary/80 dark:text-secondary">{t.hero.community}</p>
            </motion.div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {t.courses.regions.map((region, index) => (
              <motion.div
                key={region.region}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 shadow-2xl shadow-slate-200/30 transition hover:-translate-y-2 hover:shadow-glow dark:shadow-none ${
                  index === 1
                    ? 'border-secondary/70 bg-gradient-to-br from-secondary/15 via-accent/10 to-secondary/5'
                    : 'border-slate-200/70 bg-white/85 dark:border-slate-700/60 dark:bg-slate-900/70'
                }`}
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="grid-overlay absolute inset-0" />
                </div>
                <div className="relative mb-6 space-y-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                    {region.region}
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/70">{t.courses.subtitle}</p>
                </div>
                <div className="relative space-y-5 text-sm text-slate-600 dark:text-slate-300">
                  {region.programs.map((program) => (
                    <div key={program.language} className="rounded-2xl border border-white/30 bg-white/75 p-5 shadow-sm shadow-slate-200/20 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/65">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{program.language}</h4>
                        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-secondary">
                          {program.sessions[0]?.price}
                        </span>
                      </div>
                      <div className="mt-3 space-y-3">
                        {program.sessions.map((session) => (
                          <div key={session.title} className="rounded-xl border border-slate-200/60 bg-white/85 p-3 shadow-sm shadow-slate-200/10 transition hover:border-accent/70 hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/60">
                            <div className="flex items-center justify-between gap-3">
                              <p className="font-semibold text-slate-900 dark:text-slate-100">{session.title}</p>
                              <span className="text-secondary font-semibold">{session.price}</span>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{session.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex-1" />
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary via-accent to-secondary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/40 transition hover:-translate-y-1"
                >
                  {t.pricing.start}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
