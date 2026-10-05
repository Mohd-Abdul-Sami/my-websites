import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { MagneticButton } from './primitives/MagneticButton';

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-espresso-900 px-6 lg:px-12 overflow-hidden grain-overlay"
    >
      {/* Animated background — slow moving light */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(181,138,74,0.05) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 50%, rgba(181,138,74,0.05) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(181,138,74,0.05) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-12"
        >
          Your Next Cup
        </motion.div>

        <h2 className="editorial-h text-cream font-serif leading-[1.05]" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
          {['YOUR NEXT', 'CUP STARTS', 'HERE.'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={i === 2 ? 'italic text-gold/80' : ''}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <MagneticButton
            variant="primary"
            onClick={() => navigate('/locations')}
            data-cursor="cta"
          >
            Visit Sam's Bucks
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
