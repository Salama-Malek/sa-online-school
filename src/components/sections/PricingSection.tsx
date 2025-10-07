import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="pricing">
      <div className="space-y-12">
        <div className="rounded-[32px] border border-slate-200/60 bg-gradient-to-br from-white/95 to-white/70 p-10 shadow-xl shadow-slate-200/30 backdrop-blur-xl dark:border-slate-800/60 dark:from-slate-900/85 dark:to-slate-900/60">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.nav.pricing}</span>
          <h2 className="mt-4 text-4xl font-display text-slate-900 dark:text-slate-100">{t.pricing.heading}</h2>
          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:grid-cols-2">
            <p>{t.pricing.subheading}</p>
            <p>{t.pricing.tableTitle}</p>
            <p className="font-semibold text-secondary">{t.pricing.cta}</p>
            <p>{t.pricing.regionsHeading}</p>
            <p>{t.pricing.regions}</p>
            <p>{t.pricing.note}</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {t.courses.regions.map((region, index) => (
            <motion.div
              key={region.region}
              className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-2xl shadow-slate-200/30 transition hover:-translate-y-2 hover:shadow-glow dark:shadow-none ${
                index === 1
                  ? 'border-secondary/80 bg-gradient-to-br from-secondary/10 via-accent/10 to-secondary/5 dark:border-secondary/70 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-slate-900/40'
                  : 'border-slate-200/70 bg-white/85 dark:border-slate-700/60 dark:bg-slate-900/70'
              }`}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="mb-6 space-y-2">
                <h3 className="text-lg font-semibold text-secondary">{region.region}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.courses.subtitle}</p>
              </div>
              <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
                {region.programs.map((program) => (
                  <div key={program.language} className="space-y-3 rounded-2xl border border-white/20 bg-white/70 p-4 shadow-sm shadow-slate-200/20 dark:border-slate-700/60 dark:bg-slate-900/60">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{program.language}</h4>
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-secondary">
                        {program.sessions[0]?.price}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {program.sessions.map((session) => (
                        <div key={session.title} className="rounded-xl border border-slate-200/60 bg-white/90 p-3 shadow-sm shadow-slate-200/10 dark:border-slate-700/60 dark:bg-slate-900/60">
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
    </SectionContainer>
  );
};

export default PricingSection;
