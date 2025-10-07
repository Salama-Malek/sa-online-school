import React from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const PricingSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const plans = React.useMemo(
    () =>
      t.courses.regions.map((region, index) => ({
        title: region.region,
        sessions: region.programs.flatMap((program) =>
          program.sessions.map((session) => `${program.language} • ${session.title} — ${session.price}`),
        ),
        primaryPrice: region.programs[0]?.sessions[0]?.price ?? '',
        highlight: index === 1,
      })),
    [t.courses.regions],
  );

  return (
    <SectionContainer id="pricing" className="bg-transparent">
      <div className="space-y-12">
        <div className={`rounded-[36px] border border-slate-200/60 bg-white/85 p-10 shadow-[0_45px_140px_-60px_rgba(30,41,59,0.55)] backdrop-blur-2xl dark:border-slate-800/60 dark:bg-surface/70 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.nav.pricing}</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">{t.pricing.heading}</h2>
          <div className="mt-6 grid gap-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:grid-cols-2">
            <p>{t.pricing.subheading}</p>
            <p>{t.pricing.tableTitle}</p>
            <p className="font-semibold text-secondary">{t.pricing.cta}</p>
            <p>{t.pricing.regionsHeading}</p>
            <p>{t.pricing.regions}</p>
            <p>{t.pricing.note}</p>
          </div>
        </div>
        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.title}
              className={`relative flex h-full flex-col rounded-[32px] border px-8 py-10 shadow-[0_40px_120px_-60px_rgba(30,41,59,0.6)] transition hover:-translate-y-3 hover:shadow-glow dark:border-slate-700/60 dark:bg-surface/60 ${
                plan.highlight
                  ? 'border-secondary/70 bg-gradient-to-br from-secondary/15 via-accent/10 to-secondary/5 dark:bg-surface/80'
                  : 'border-slate-200/60 bg-white/80'
              }`}
              variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            >
              {plan.highlight && (
                <span className="absolute right-8 top-8 rounded-full border border-white/30 bg-secondary/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  {t.pricing.mostPopular}
                </span>
              )}
              <div className={`${isRTL ? 'text-right' : ''}`}>
                <h3 className="text-lg font-semibold text-secondary">{plan.title}</h3>
                {plan.primaryPrice && (
                  <p className="mt-4 text-3xl font-bold text-slate-900 dark:text-slate-100">{plan.primaryPrice}</p>
                )}
              </div>
              <ul className={`mt-6 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 ${isRTL ? 'text-right' : ''}`}>
                {plan.sessions.map((session) => (
                  <li
                    key={`${plan.title}-${session}`}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-left dark:border-slate-700/60 dark:bg-surface/70"
                  >
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" aria-hidden />
                    <span className="text-xs sm:text-sm">{session}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex-1" />
              <a href="#contact" className="accent-button mt-8">
                {t.pricing.start}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default PricingSection;
