import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const CoursesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="courses">
      <div className="flex flex-col gap-8">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t.courses.heading}</span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            {t.courses.subtitle}{' '}
            <span className="text-secondary">{t.courses.with}</span>
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {t.courses.regions.map((region) => (
            <motion.div
              key={region.region}
              className="section-card p-6"
              whileHover={{ translateY: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <h3 className="text-lg font-semibold text-secondary">{region.region}</h3>
              <div className="mt-4 space-y-6">
                {region.programs.map((program) => (
                  <div key={program.language} className="rounded-2xl bg-white/60 p-4 shadow-sm dark:bg-slate-900/50">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{program.language}</h4>
                    <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {program.sessions.map((session) => (
                        <div key={session.title} className="rounded-xl border border-slate-200/70 p-3 dark:border-slate-700/60">
                          <p className="font-semibold text-slate-900 dark:text-slate-100">{session.title}</p>
                          <p className="text-secondary font-semibold">{session.price}</p>
                          <p className="text-xs leading-relaxed">{session.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CoursesSection;
