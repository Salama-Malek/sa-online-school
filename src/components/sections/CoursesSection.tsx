import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const CoursesSection: React.FC = () => {
  const { t } = useLanguage();
  const regions = t.courses.regions;
  const [activeRegion, setActiveRegion] = React.useState<string>(regions[0]?.region ?? '');

  React.useEffect(() => {
    setActiveRegion(t.courses.regions[0]?.region ?? '');
  }, [t]);

  const activePrograms = regions.find((region) => region.region === activeRegion)?.programs ?? [];

  return (
    <SectionContainer id="courses">
      <div className="space-y-10">
        <div className="text-center lg:text-start">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.courses.heading}</span>
          <h2 className="mt-3 text-4xl font-display text-slate-900 dark:text-slate-100">
            {t.courses.subtitle}{' '}
            <span className="text-secondary">{t.courses.with}</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          {regions.map((region) => {
            const isActive = region.region === activeRegion;
            return (
              <button
                type="button"
                key={region.region}
                onClick={() => setActiveRegion(region.region)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-secondary bg-secondary text-white shadow-lg shadow-secondary/40'
                    : 'border-slate-200/70 bg-white/60 text-slate-600 hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/60'
                }`}
              >
                {region.region}
              </button>
            );
          })}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {activePrograms.map((program) => {
            const startingSession = program.sessions[0];
            return (
              <motion.article
                key={program.language}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 transition hover:-translate-y-2 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{program.language}</h3>
                  {startingSession && (
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                      {startingSession.price}
                    </span>
                  )}
                </div>
                {startingSession && (
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{startingSession.title}</p>
                )}
                <div className="mt-6 space-y-3">
                  {program.sessions.map((session) => (
                    <div
                      key={session.title}
                      className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 text-sm leading-relaxed text-slate-600 transition hover:border-accent/70 hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{session.title}</p>
                        <span className="text-secondary font-semibold">{session.price}</span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed">{session.description}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default CoursesSection;
