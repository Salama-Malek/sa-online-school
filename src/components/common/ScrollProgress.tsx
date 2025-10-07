import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-accent via-secondary to-accent"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
