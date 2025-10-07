import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-xl shadow-secondary/50 transition hover:-translate-y-1"
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </motion.button>
  );
};

export default ScrollToTopButton;
