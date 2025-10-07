import React from 'react';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionContainer id="contact">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="section-card p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{t.contact.heading}</h2>
          <div className="mt-6 space-y-3 text-base text-slate-600 dark:text-slate-300">
            <p>{t.contact.description}</p>
            <p>{t.contact.instagram}</p>
            <p>{t.contact.youtube}</p>
            <a href="mailto:sarahnadynakhla@gmail.com" className="block text-accent hover:underline">
              {t.contact.email}
            </a>
          </div>
        </div>
        <div className="section-card p-8">
          <form className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contact.form.name}
              <input
                type="text"
                className="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-accent dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                placeholder={t.about.name}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contact.form.email}
              <input
                type="email"
                className="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-accent dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                placeholder="sarahnadynakhla@gmail.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.contact.form.message}
              <textarea
                className="min-h-[140px] rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-accent dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                placeholder={t.hero.teacherSupport}
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-secondary/90"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
