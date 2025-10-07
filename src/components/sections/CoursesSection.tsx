import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
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
      <div className="relative overflow-hidden rounded-[44px] border border-slate-200/70 bg-white/85 p-10 shadow-2xl shadow-slate-200/30 backdrop-blur-3xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <motion.div
          className="absolute -top-36 right-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl dark:bg-secondary/25"
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.courses.heading}</span>
              <h2 className="text-4xl font-display text-slate-900 dark:text-slate-100">
                {t.courses.subtitle}{' '}
                <span className="text-secondary">{t.courses.with}</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">{t.about.coaching}</p>
            </div>
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-secondary/10 via-accent/10 to-secondary/5 p-6 text-sm text-secondary shadow-xl shadow-secondary/20"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-xs uppercase tracking-[0.3em]">{t.hero.flexible}</p>
              <p className="mt-3 text-sm leading-relaxed text-secondary/80 dark:text-secondary">{t.hero.teacherSupport}</p>
            </motion.div>
          </div>
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {regions.map((region) => {
                const isActive = region.region === activeRegion;
                return (
                  <button
                    type="button"
                    key={region.region}
                    onClick={() => setActiveRegion(region.region)}
                    className="relative overflow-hidden rounded-full border border-slate-200/70 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-200/20 transition hover:border-secondary hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/60"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="region-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={isActive ? 'text-white' : ''}>{region.region}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
          <div className="grid gap-8 lg:grid-cols-3">
            {activePrograms.map((program) => {
              const startingSession = program.sessions[0];
              return (
                <motion.article
                  key={program.language}
                  className="shine relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-xl shadow-slate-200/30 transition hover:-translate-y-2 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{program.language}</h3>
                      {startingSession && (
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-secondary/80">{startingSession.title}</p>
                      )}
                    </div>
                    {startingSession && (
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                        {startingSession.price}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 space-y-4">
                    {program.sessions.map((session) => (
                      <div
                        key={session.title}
                        className="rounded-2xl border border-slate-200/60 bg-white/85 p-4 text-sm leading-relaxed text-slate-600 transition hover:border-accent/70 hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/65 dark:text-slate-300"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-slate-800 dark:text-slate-100">{session.title}</p>
                          <span className="text-secondary font-semibold">{session.price}</span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed">{session.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex-1" />
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
                  >
                    {t.hero.ctaContact}
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CoursesSection;
