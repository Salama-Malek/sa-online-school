import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AtSymbolIcon, ChatBubbleBottomCenterTextIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import SectionContainer from '../common/SectionContainer';
import { useLanguage } from '../../hooks/useLanguage';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [isToastVisible, setToastVisible] = React.useState(false);

  const contactCards = [
    { label: t.contact.heading, icon: <PhoneArrowUpRightIcon className="h-5 w-5" />, href: 'https://wa.me/79526891253' },
    { label: t.contact.instagram, icon: <AtSymbolIcon className="h-5 w-5" />, href: 'https://www.instagram.com/sarahnadyn.gerges/' },
    { label: t.contact.youtube, icon: <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />, href: 'https://www.youtube.com/@SAonlineschool' },
    { label: t.contact.email, icon: <AtSymbolIcon className="h-5 w-5" />, href: 'mailto:sarahnadynakhla@gmail.com' },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3000);
    event.currentTarget.reset();
  };

  return (
    <SectionContainer id="contact">
      <div className="relative overflow-hidden rounded-[44px] border border-slate-200/70 bg-white/85 p-10 shadow-2xl shadow-slate-200/30 backdrop-blur-3xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <motion.div
          className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-secondary/15 blur-3xl dark:bg-accent/25"
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/90 p-10 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="grid-overlay absolute inset-0" />
            </div>
            <div className="relative">
              <h2 className="text-4xl font-display text-slate-900 dark:text-slate-100">{t.contact.form.submit}</h2>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{t.hero.tagline}</p>
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-secondary">{t.contact.form.name}</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                    placeholder={t.about.name}
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-secondary">{t.contact.form.email}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                    placeholder="sarahnadynakhla@gmail.com"
                  />
                </label>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-secondary">{t.contact.form.message}</span>
                  <textarea
                    name="message"
                    required
                    className="w-full min-h-[160px] rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-inner shadow-slate-200/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
                    placeholder={t.hero.teacherSupport}
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary via-accent to-secondary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-secondary/40 transition hover:-translate-y-1"
                >
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
                    className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center"
                  >
                    <span className="rounded-full bg-secondary/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/40">
                      {t.contact.form.submit} ✓
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 p-8 shadow-xl shadow-slate-200/30 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="grid-overlay absolute inset-0" />
              </div>
              <h3 className="relative text-xl font-semibold text-slate-900 dark:text-slate-100">{t.about.name}</h3>
              <div className="relative mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {contactCards.map((card) => {
                  const label = card.label.replace(/\\/g, ' / ');
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 transition hover:border-accent hover:text-secondary dark:border-slate-700/60 dark:bg-slate-900/65"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                        {card.icon}
                      </span>
                      <span className="text-sm leading-relaxed">{label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/75 shadow-xl shadow-slate-200/30 dark:border-slate-800/70 dark:bg-slate-900/70"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521292270410-a8c661ddc632?auto=format&fit=crop&w=1200&q=80"
                alt="Moscow skyline illustration"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-secondary/40 bg-white/90 px-5 py-4 text-sm text-secondary shadow-lg shadow-secondary/20 backdrop-blur-xl">
                {t.contact.form.message}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
