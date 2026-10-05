import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { images } from '@/data/images';
import { MagneticButton } from './primitives/MagneticButton';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToContent = () => {
    const el = document.querySelector('#intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-espresso-900"
    >
      {/* Background coffee image with parallax */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0"
        data-cursor="image"
        data-cursor-label="EXPLORE"
      >
        <img
          src={images.heroBg}
          alt="A steaming cup of dark coffee with dramatic cinematic lighting on a dark surface"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-espresso-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/30 to-espresso-900/60" />
      </motion.div>

      {/* Ambient background glow */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(181,138,74,0.06) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 60%, rgba(181,138,74,0.04) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(181,138,74,0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grain texture */}
      <div className="absolute inset-0 z-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto max-w-[1600px] min-h-screen px-6 lg:px-12 flex flex-col justify-center pt-24 lg:pt-0"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow mb-8"
        >
          Sam's Bucks — Est. 2026
        </motion.div>

        {/* Headline */}
        <h1 className="editorial-h text-cream font-serif" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
          {['COFFEE,', 'CRAFTED', 'BEYOND THE', 'ORDINARY.'].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={i === 2 ? 'italic font-light text-gold/80' : ''}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 max-w-md text-cream/70 text-base lg:text-lg font-sans font-light leading-relaxed"
        >
          From carefully selected beans to the final pour, every detail is
          designed to make your everyday coffee feel extraordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton
            variant="primary"
            onClick={() => navigate('/coffee')}
            data-cursor="cta"
          >
            Explore Our Coffee
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => navigate('/locations')}
            data-cursor="cta"
          >
            Visit Sam's Bucks
          </MagneticButton>
        </motion.div>

        {/* Floating labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="text-[10px] uppercase tracking-ultra font-sans text-cream/40">Slow Roasted</div>
          <span className="h-px w-8 bg-gold/30" />
          <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/60">Small Batch</div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 text-cream/40 hover:text-cream transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-[9px] uppercase tracking-ultra font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.button>
    </section>
  );
}
