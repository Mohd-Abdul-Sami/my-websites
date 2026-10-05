import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState<'link' | 'image' | 'cta' | null>(null);
  const [label, setLabel] = useState('');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mq.matches || reduced.matches) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor]');
      const imageEl = target.closest('[data-cursor="image"]');
      const ctaEl = target.closest('[data-cursor="cta"]');

      if (imageEl) {
        setHovering('image');
        setLabel(imageEl.getAttribute('data-cursor-label') || 'VIEW');
      } else if (ctaEl) {
        setHovering('cta');
        setLabel('');
      } else if (interactive) {
        setHovering('link');
        setLabel('');
      } else {
        setHovering(null);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = hovering === 'image' ? 80 : hovering === 'cta' ? 50 : hovering === 'link' ? 30 : 12;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:flex"
      >
        <motion.div
          animate={{
            width: size,
            height: size,
            backgroundColor: hovering ? 'rgba(181, 138, 74, 0.1)' : 'rgba(245, 239, 229, 0.9)',
            border: hovering ? '1px solid rgba(181, 138, 74, 0.5)' : '0px solid transparent',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        >
          {label && (
            <span className="text-[8px] uppercase tracking-ultra font-sans text-gold">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
