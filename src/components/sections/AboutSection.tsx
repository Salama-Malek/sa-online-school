import React from 'react';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const paragraphs = [
    t.about.journey,
    t.about.experience,
    t.about.achievements,
    t.about.coaching,
    t.about.support,
    t.about.education,
    t.about.call,
  ];

  return (
    <SectionContainer id="about">
      <div className="section-card p-10">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t.about.heading}</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{t.about.name}</h2>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">{t.about.summary}</p>
            <p className="mt-1 text-base text-slate-500 dark:text-slate-400">{t.about.specialities}</p>
          </div>
          <div className="grid gap-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-accent">
            <a href="mailto:sarahnadynakhla@gmail.com" className="hover:underline">
              {t.about.email}
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
