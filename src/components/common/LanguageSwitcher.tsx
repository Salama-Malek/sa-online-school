import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations, type LanguageCode } from '../../i18n';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleSwitch = (code: LanguageCode) => () => {
    setLanguage(code);
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 px-2 py-1 shadow-sm">
      {Object.entries(translations).map(([code, value]) => (
        <button
          key={code}
          type="button"
          onClick={handleSwitch(code as LanguageCode)}
          className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
            language === code
              ? 'bg-accent text-slate-900 shadow-glow'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
          }`}
        >
          {value.language.short}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
