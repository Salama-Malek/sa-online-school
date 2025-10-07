import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 px-4 py-1 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md transition-all"
    >
      {theme === 'dark' ? '☾' : '☀︎'}
    </button>
  );
};

export default ThemeToggle;
