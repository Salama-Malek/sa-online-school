import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTopButton from './components/common/ScrollToTopButton';

const HomePage = lazy(() => import('./pages/Home'));

const App: React.FC = () => (
  <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-background-light to-white text-slate-900 transition-colors duration-500 dark:from-background-dark dark:via-surface dark:to-background-dark dark:text-slate-100">
        <Header />
        <ScrollProgress />
        <main className="flex-1">
          <Suspense fallback={<div className="flex justify-center items-center py-24 text-lg">Loading...</div>}>
            <HomePage />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
