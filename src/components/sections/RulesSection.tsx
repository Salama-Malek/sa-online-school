import React from 'react';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const RulesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="rules">
      <div className="section-card p-10">
        <div className="flex flex-col gap-6">
          <div className="text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t.rules.heading}</span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{t.rules.heading}</h2>
          </div>
          <div className="grid gap-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 lg:grid-cols-2">
            {t.rules.items.map((rule) => (
              <div key={rule} className="rounded-xl border border-slate-200/60 bg-white/70 p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60">
                {rule}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RulesSection;
