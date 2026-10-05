import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monogram } from './primitives/Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Session-based: only show once per session
    const sessionKey = 'samsbucks_preloader_shown';
    if (sessionStorage.getItem(sessionKey)) {
      setShow(false);
      onComplete();
      return;
    }
    sessionStorage.setItem(sessionKey, '1');

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 100);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-espresso-900"
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream"
          >
            <Monogram className="w-16 h-16" />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-serif text-2xl tracking-wide text-cream font-light"
            style={{ letterSpacing: '0.1em' }}
          >
            SAM'S BUCKS
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-3 text-[10px] uppercase tracking-ultra text-taupe font-sans"
          >
            Crafted for the moments that matter
          </motion.p>

          {/* Progress line */}
          <div className="mt-8 h-px w-40 bg-espresso-600 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full bg-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
