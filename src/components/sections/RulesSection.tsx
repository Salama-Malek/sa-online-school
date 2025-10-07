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
  const { t } = useLanguage();

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
      } else if (current) {
        current.body.push(trimmed);
      }
    });

    if (current) {
      rules.push(current);
    }

    return rules;
  }, [t.rules.items]);

  return (
    <SectionContainer id="rules">
      <div className="space-y-10">
        <div className="text-center lg:text-start">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-secondary">{t.rules.heading}</span>
          <h2 className="mt-4 text-4xl font-display text-slate-900 dark:text-slate-100">{t.rules.heading}</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {groupedRules.map((rule, index) => {
            const Icon = iconSet[index % iconSet.length];
            return (
              <motion.article
                key={rule.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/90 p-6 text-sm text-slate-600 shadow-lg shadow-slate-200/20 transition hover:-translate-y-2 hover:border-accent hover:shadow-glow dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{rule.title}</h3>
                </div>
                <ul className="mt-4 space-y-3 ps-2">
                  {rule.body.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200/60 bg-white/70 p-3 leading-relaxed dark:border-slate-700/60 dark:bg-slate-900/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default RulesSection;
