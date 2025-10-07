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

const iconSet = [AcademicCapIcon, ClockIcon, CalendarDaysIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon, UsersIcon];

const RulesSection: React.FC = () => {
  const { t, language } = useLanguage();
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

  return (
    <SectionContainer id="rules" className="bg-transparent">
      <div className="space-y-12">
        <div className={`space-y-4 text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.rules.heading}</span>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">{t.rules.heading}</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:mx-0">
            {t.pricing.cta}
          </p>
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {groupedRules.map((rule, index) => {
            const Icon = iconSet[index % iconSet.length];
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
                <ul className={`mt-4 space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {rule.body.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 leading-relaxed dark:border-slate-700/60 dark:bg-surface/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default RulesSection;
