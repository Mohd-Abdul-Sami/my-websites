import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-espresso-800 py-24 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <div className="eyebrow mb-12">Voices</div>

        {/* Quote */}
        <div className="relative min-h-[300px] lg:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
            >
              <p className="font-serif text-3xl lg:text-5xl text-cream font-light leading-[1.2] italic text-balance">
                "{testimonials[active].quote}"
              </p>
              <footer className="mt-8">
                <div className="text-sm font-sans text-gold/70 uppercase tracking-ultra">
                  {testimonials[active].name}
                </div>
                <div className="text-xs font-sans text-taupe mt-1">
                  {testimonials[active].role} — Fictional demo testimonial
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-500 ${
                i === active ? 'w-12 bg-gold' : 'w-6 bg-cream/20 hover:bg-cream/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
