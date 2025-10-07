import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isInView]);

  return (
    <section id={id} className={`section-padding section-gradient ${className ?? ''}`.trim()}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionContainer;
