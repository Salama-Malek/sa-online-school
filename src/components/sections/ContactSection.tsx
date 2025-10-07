import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AtSymbolIcon, ChatBubbleBottomCenterTextIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';
import { usePolicyAgreement } from '../../hooks/usePolicyAgreement';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [isToastVisible, setToastVisible] = React.useState(false);
  const { requireAgreement } = usePolicyAgreement();

  const contactCards = [
    { label: t.contact.heading, icon: <PhoneArrowUpRightIcon className="h-5 w-5" />, href: 'https://wa.me/79526891253' },
    { label: t.contact.instagram, icon: <AtSymbolIcon className="h-5 w-5" />, href: 'https://www.instagram.com/sarahnadyn.gerges/' },
    { label: t.contact.youtube, icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />, href: 'https://www.youtube.com/@SAonlineschool' },
    { label: t.contact.email, icon: <AtSymbolIcon className="h-5 w-5" />, href: 'mailto:sarahnadynakhla@gmail.com' },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!requireAgreement(t.policy.toastRequired)) {
      return;
    }
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3200);
    event.currentTarget.reset();
  };

  return (
    <SectionContainer id="contact" className="bg-transparent">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative overflow-hidden rounded-[36px] border border-slate-200/60 bg-white/85 p-10 shadow-[0_45px_120px_-60px_rgba(30,41,59,0.6)] backdrop-blur-2xl dark:border-slate-800/70 dark:bg-surface/70"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`space-y-3 ${isRTL ? 'text-right' : ''}`}>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{t.contact.form.submit}</span>
            <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">{t.hero.tagline}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t.about.mission}</p>
          </div>
          <form className={`mt-8 space-y-5 ${isRTL ? 'text-right' : ''}`} onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block uppercase tracking-[0.2em] text-xs text-secondary">{t.contact.form.name}</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-100"
                placeholder={t.about.name}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block uppercase tracking-[0.2em] text-xs text-secondary">{t.contact.form.email}</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-100"
                placeholder="sarahnadynakhla@gmail.com"
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              <span className="mb-2 block uppercase tracking-[0.2em] text-xs text-secondary">{t.contact.form.message}</span>
              <textarea
                name="message"
                required
                className="w-full min-h-[160px] rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/20 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-surface/60 dark:text-slate-100"
                placeholder={t.hero.teacherSupport}
                dir={isRTL ? 'rtl' : 'ltr'}
              />
            </label>
            <button type="submit" className="accent-button w-full">
              {t.contact.form.submit}
            </button>
          </form>
          <AnimatePresence>
            {isToastVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="pointer-events-none absolute inset-x-10 bottom-6 rounded-2xl bg-secondary/90 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-secondary/40"
              >
                {t.contact.form.submit} ✓
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="rounded-[32px] border border-slate-200/60 bg-white/80 p-8 shadow-[0_35px_110px_-60px_rgba(30,41,59,0.6)] backdrop-blur-2xl dark:border-slate-800/70 dark:bg-surface/70">
            <h3 className={`text-xl font-semibold text-slate-900 dark:text-slate-100 ${isRTL ? 'text-right' : ''}`}>{t.about.name}</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {contactCards.map((card) => {
                const label = card.label.replace(/\\/g, ' / ');
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                    className={`flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/90 px-4 py-3 transition hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-surface/60 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <span className="text-secondary">{card.icon}</span>
                    <span className="text-sm leading-relaxed">{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/70 shadow-[0_35px_120px_-70px_rgba(30,41,59,0.55)] dark:border-slate-800/70 dark:bg-surface/70">
            <img
              src="https://images.unsplash.com/photo-1521292270410-a8c661ddc632?auto=format&fit=crop&w=1200&q=80"
              alt="Moscow skyline illustration"
              loading="lazy"
              className="h-64 w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
