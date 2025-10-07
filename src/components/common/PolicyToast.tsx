import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePolicyAgreement } from '../../hooks/usePolicyAgreement';

const PolicyToast: React.FC = () => {
  const { toast } = usePolicyAgreement();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="pointer-events-none fixed bottom-8 left-1/2 z-[130] w-[min(90%,360px)] -translate-x-1/2 rounded-2xl bg-slate-900/90 px-5 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-slate-900/60"
        >
          {toast.message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PolicyToast;
