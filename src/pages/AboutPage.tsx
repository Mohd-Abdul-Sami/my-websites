import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { images } from '@/data/images';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { MagneticButton } from '@/components/primitives/MagneticButton';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';

export function AboutPage() {
  const navigate = useNavigate();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const storyRef = useRef<HTMLElement>(null);
  const inView = useInView(storyRef, { once: true, margin: '-80px' });
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyScroll } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(storyScroll, [0, 1], ['-8%', '8%']);

  const philosophy = ['SOURCED WITH INTENTION', 'ROASTED WITH PATIENCE', 'SERVED WITH PURPOSE'];

  return (
    <>
      {/* Page hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden bg-espresso-900">
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images.barista}
            alt="A skilled barista preparing specialty coffee in an upscale modern coffee house"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-espresso-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-espresso-900/40" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            03 / 05 — Our Story
          </motion.div>
          <h1 className="editorial-h text-cream font-serif" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                It Started With
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                One Perfect Cup.
              </motion.span>
            </span>
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section
        ref={storyRef}
        className="relative bg-espresso-900 py-24 lg:py-40 px-6 lg:px-12 overflow-hidden grain-overlay"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            {/* Left — large vertical image */}
            <div ref={imageRef} className="w-full lg:w-[42%] relative aspect-[3/4] overflow-hidden shrink-0">
              <motion.img
                src={images.cafeInterior}
                alt="Luxury contemporary coffee lounge with espresso-toned wood and warm indirect lighting"
                className="w-full h-full object-cover"
                style={{ y: imageY }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/40 to-transparent" />
            </div>

            {/* Right — brand story */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-cream/60 text-base lg:text-lg font-sans font-light leading-relaxed max-w-lg mb-8"
              >
                Sam's Bucks began with a simple idea: great coffee should not
                need to be complicated. It should be carefully sourced,
                thoughtfully prepared, and served in a way that turns a normal
                moment into something memorable.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-cream/40 text-sm font-sans font-light leading-relaxed max-w-lg mb-12"
              >
                We work directly with growers who treat coffee as an art form.
                We roast in small batches. We train our baristas like
                craftspeople. And we build spaces that invite you to stay a
                little longer.
              </motion.p>

              {/* Philosophy */}
              <div className="space-y-4">
                <div className="eyebrow mb-6">Our Philosophy</div>
                {philosophy.map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4 group"
                  >
                    <span className="text-xs font-sans text-gold/40">0{i + 1}</span>
                    <span className="h-px w-8 bg-gold/20 group-hover:w-12 transition-all duration-300" />
                    <span className="font-serif text-xl lg:text-2xl text-cream font-light tracking-wide">{line}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-espresso-800 px-6 lg:px-12 py-32 grain-overlay">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel index="" total="" label="What We Believe" className="justify-center mb-12" />
          <h2 className="editorial-h text-cream font-serif leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            {['WE', 'BELIEVE', 'A', 'GOOD', 'CUP', 'SHOULD', 'FEEL', 'LIKE', 'A', 'MOMENT.'].map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={inView ? { y: '0%', opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${word === 'MOMENT.' ? 'italic text-gold/80' : ''}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 max-w-xl mx-auto text-cream/50 text-base font-sans font-light leading-relaxed text-balance"
          >
            Coffee is not a routine. It is a ritual — a pause, a breath, a
            small ceremony that turns an ordinary minute into something worth
            remembering. At Sam's Bucks, we protect that ritual with every cup.
          </motion.p>
        </div>
      </section>

      {/* Process section */}
      <Process />

      {/* Values CTA */}
      <section className="bg-espresso-900 py-24 lg:py-32 px-6 lg:px-12 grain-overlay">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow mb-8">Discover More</div>
            <h2 className="editorial-h text-cream text-section font-serif mb-8">
              <span className="block">Taste the</span>
              <span className="block italic text-gold/80">Difference.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary" onClick={() => navigate('/coffee')}>
                Explore Our Coffee
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={() => navigate('/menu')}>
                View the Menu
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </>
  );
}
