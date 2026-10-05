import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function IntroStatement() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const words = ['WE', 'BELIEVE', 'A', 'GOOD', 'CUP', 'SHOULD', 'FEEL', 'LIKE', 'A', 'MOMENT.'];

  return (
    <section
      ref={ref}
      id="intro"
      className="relative min-h-[80vh] flex items-center justify-center bg-espresso-900 px-6 lg:px-12 py-32 lg:py-48 grain-overlay"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Large editorial statement */}
        <h2 className="editorial-h text-cream text-display font-serif leading-[1.1]">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${word === 'MOMENT.' ? 'italic text-gold/80' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Philosophy paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 max-w-xl mx-auto text-cream/50 text-base font-sans font-light leading-relaxed text-balance"
        >
          Coffee is not a routine. It is a ritual — a pause, a breath, a small
          ceremony that turns an ordinary minute into something worth
          remembering. At Sam's Bucks, we protect that ritual with every cup.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 h-px w-24 mx-auto bg-gold/30 origin-center"
        />
      </div>
    </section>
  );
}
