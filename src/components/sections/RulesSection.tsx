import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ClockIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';
import { usePolicyAgreement } from '../../hooks/usePolicyAgreement';

const iconSet = [AcademicCapIcon, ClockIcon, CalendarDaysIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon, UsersIcon];

const RulesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { openPolicy, hasAccepted } = usePolicyAgreement();
  const isRTL = language === 'ar';

  const groupedRules = React.useMemo(() => {
    const rules: { title: string; body: string[] }[] = [];
    let current: { title: string; body: string[] } | null = null;

    t.rules.items.forEach((item) => {
      const trimmed = item.trim();
      if (/^\d+\.\d+/.test(trimmed)) {
        if (current) {
          rules.push(current);
        }
        current = { title: trimmed, body: [] };
      } else if (current && trimmed.length > 0) {
        current.body.push(trimmed);
      }
    });

    if (current) {
      rules.push(current);
    }

    return rules;
  }, [t.rules.items]);

  const highlights = groupedRules.slice(0, 6);

  return (
    <SectionContainer id="rules" className="bg-transparent">
      <div className="space-y-12">
        <div className={`space-y-4 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.rules.heading}</span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">{t.policy.title}</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
            {t.policy.preview}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70 lg:flex-row lg:justify-start">
            <span>{t.policy.statusLabel}</span>
            <span
              className={`rounded-full px-3 py-1 text-[0.65rem] ${
                hasAccepted
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200'
              }`}
            >
              {hasAccepted ? t.policy.statusAccepted : t.policy.statusPending}
            </span>
          </div>
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {highlights.map((rule, index) => {
            const Icon = iconSet[index % iconSet.length];
            const summary = rule.body[0] ?? '';
            return (
              <motion.article
                key={rule.title}
                className="flex h-full flex-col rounded-[28px] border border-slate-200/60 bg-white/85 p-6 text-sm text-slate-600 shadow-[0_30px_90px_-60px_rgba(30,41,59,0.6)] transition hover:-translate-y-3 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-200"
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              >
                <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{rule.title}</h3>
                </div>
                <p className={`mt-4 flex-1 rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 leading-relaxed dark:border-slate-700/60 dark:bg-surface/70 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {summary}
                </p>
                <button
                  type="button"
                  onClick={openPolicy}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-secondary transition hover:text-accent"
                >
                  {t.policy.readMore}
                </button>
              </motion.article>
            );
          })}
        </motion.div>
        <div className={`flex flex-col items-center justify-between gap-4 rounded-[30px] border border-secondary/30 bg-secondary/10 p-6 text-sm leading-relaxed text-secondary/90 shadow-[0_35px_120px_-80px_rgba(30,41,59,0.6)] dark:border-secondary/20 dark:bg-secondary/15 dark:text-secondary ${isRTL ? 'text-right' : 'text-left'} lg:flex-row lg:gap-6`}>
          <div className="max-w-3xl">
            <h3 className="text-lg font-semibold uppercase tracking-[0.28em] text-secondary/80">{t.policy.summaryHeading}</h3>
            <p className="mt-2 text-secondary/90">{t.policy.summary}</p>
          </div>
          <button type="button" onClick={openPolicy} className="accent-button px-6 py-3 text-sm">
            {t.policy.viewFull}
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RulesSection;
