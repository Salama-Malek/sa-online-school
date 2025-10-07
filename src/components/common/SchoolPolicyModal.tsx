import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { usePolicyAgreement } from '../../hooks/usePolicyAgreement';
import { useLanguage } from '../../hooks/useLanguage';

const SchoolPolicyModal: React.FC = () => {
  const { isPolicyOpen, closePolicy, hasAccepted, setHasAccepted, showToast } = usePolicyAgreement();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [expandedSection, setExpandedSection] = React.useState<number>(0);

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

  React.useEffect(() => {
    if (isPolicyOpen) {
      setExpandedSection(0);
    }
  }, [isPolicyOpen]);

  React.useEffect(() => {
    if (!isPolicyOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePolicy();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPolicyOpen, closePolicy]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    closePolicy();
  };

  const toggleSection = (index: number) => {
    setExpandedSection((current) => (current === index ? -1 : index));
  };

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;
    setHasAccepted(checked);
    if (checked) {
      showToast(t.policy.accepted);
    }
  };

  const legalClasses =
    'max-w-[800px] w-full rounded-[32px] border border-slate-200/60 bg-slate-50/95 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90';

  return (
    <AnimatePresence>
      {isPolicyOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/70 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className={`${legalClasses} ${isRTL ? 'text-right' : 'text-left'}`}
            dir={isRTL ? 'rtl' : 'ltr'}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="space-y-3">
              <div className="flex items-center gap-3 text-secondary">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <ShieldCheckIcon className="h-5 w-5" />
                </span>
                <div className={`${isRTL ? 'text-right' : 'text-left'} dark:text-slate-100`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70">
                    {t.policy.subtitle}
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.policy.title}</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.policy.description}
              </p>
            </header>
            <div className="mt-6 max-h-[60vh] space-y-4 overflow-y-auto pr-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {groupedRules.map((rule, index) => {
                const isExpanded = expandedSection === index;
                return (
                  <motion.article
                    key={rule.title}
                    className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 shadow-inner shadow-slate-200/30 transition dark:border-slate-700/60 dark:bg-slate-900/70"
                  >
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-secondary/10 dark:text-slate-100 ${
                        isRTL ? 'flex-row-reverse text-right' : ''
                      }`}
                      onClick={() => toggleSection(index)}
                    >
                      <span>{rule.title}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                          <div className={`space-y-3 px-5 pb-5 pt-1 text-sm ${isRTL ? 'text-right' : ''}`}>
                            {rule.body.map((paragraph) => (
                              <p key={paragraph} className="rounded-xl bg-slate-100/80 p-3 leading-relaxed dark:bg-slate-800/70">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </div>
            <footer className={`mt-6 space-y-4 rounded-2xl bg-white/80 p-5 text-sm leading-relaxed text-slate-600 shadow-inner dark:bg-slate-900/70 dark:text-slate-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={hasAccepted}
                  onChange={handleCheckboxChange}
                  className="mt-1 h-5 w-5 flex-shrink-0 rounded border-slate-300 text-secondary focus:ring-secondary"
                />
                <span>{t.policy.acknowledge}</span>
              </label>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-secondary/80">
                <span>
                  {hasAccepted ? t.policy.statusAccepted : t.policy.statusPending}
                </span>
                <button
                  type="button"
                  onClick={closePolicy}
                  className="rounded-full border border-secondary/50 px-5 py-2 text-secondary transition hover:bg-secondary/10"
                >
                  {t.policy.close}
                </button>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SchoolPolicyModal;
