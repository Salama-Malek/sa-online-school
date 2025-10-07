import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const CoursesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const regions = t.courses.regions;
  const [activeRegion, setActiveRegion] = React.useState<string>(regions[0]?.region ?? '');
  const isRTL = language === 'ar';

  React.useEffect(() => {
    setActiveRegion(t.courses.regions[0]?.region ?? '');
  }, [t]);

  const activePrograms = React.useMemo(() => {
    return regions.find((region) => region.region === activeRegion)?.programs ?? [];
  }, [regions, activeRegion]);

  const sessions = React.useMemo(() => {
    return activePrograms.flatMap((program) =>
      program.sessions.map((session) => ({
        program: program.language,
        title: session.title,
        description: session.description,
        price: session.price,
      })),
    );
  }, [activePrograms]);

  return (
    <SectionContainer id="courses" className="bg-transparent">
      <div className="space-y-12">
        <div className={`space-y-4 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.courses.heading}</span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">
            {t.courses.subtitle}{' '}
            <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
              {t.courses.with}
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
            {activeRegion}
          </p>
        </div>
        <div className={`flex flex-wrap justify-center gap-3 lg:justify-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {regions.map((region) => {
            const isActive = region.region === activeRegion;
            return (
              <button
                type="button"
                key={region.region}
                onClick={() => setActiveRegion(region.region)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'border-secondary bg-secondary text-white shadow-[0_25px_60px_-35px_rgba(129,140,248,0.8)]'
                    : 'border-slate-200/60 bg-white/60 text-slate-600 hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-surface/60'
                }`}
              >
                {region.region}
              </button>
            );
          })}
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {sessions.map((session) => (
            <motion.article
              key={`${session.program}-${session.title}`}
              className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200/60 bg-white/85 p-6 shadow-[0_40px_100px_-60px_rgba(30,41,59,0.65)] backdrop-blur-xl transition hover:-translate-y-3 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-surface/60"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    {session.program}
                  </span>
                  <span className="text-sm font-semibold text-accent">{session.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{session.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{session.description}</p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                {t.hero.ctaContact}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default CoursesSection;
