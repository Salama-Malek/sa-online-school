import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="pricing">
      <div className="section-card p-10">
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t.nav.pricing}</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{t.pricing.heading}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">{t.pricing.subheading}</p>
          <p className="text-base text-slate-600 dark:text-slate-300">{t.pricing.tableTitle}</p>
          <p className="text-sm text-secondary font-semibold">{t.pricing.cta}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.pricing.regionsHeading}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.pricing.regions}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.pricing.note}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.courses.regions.map((region) => (
            <motion.div
              key={region.region}
              className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-lg dark:border-slate-700/60 dark:bg-slate-900/50"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            >
              <h3 className="text-lg font-semibold text-secondary">{region.region}</h3>
              {region.programs.map((program) => (
                <div key={program.language} className="mt-5">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{program.language}</h4>
                  <div className="mt-3 space-y-3">
                    {program.sessions.map((session) => (
                      <div
                        key={session.title}
                        className="flex items-start justify-between rounded-xl border border-slate-200/70 bg-white/80 p-4 text-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                      >
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">{session.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{session.description}</p>
                        </div>
                        <p className="text-secondary font-semibold">{session.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
