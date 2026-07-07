import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '@/hooks/useMediaQuery';
import { scrollToTop } from '@/utils/helpers';

export function ScrollToTop() {
  const isVisible = useScrollToTop();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Наверх"
          className="fixed right-8 bottom-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink-muted transition-all hover:border-border-strong hover:text-ink"
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
