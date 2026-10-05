import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { signatureProducts } from '@/data/signatureProducts';
import { images } from '@/data/images';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { MagneticButton } from '@/components/primitives/MagneticButton';
import { Newsletter } from '@/components/Newsletter';

export function CoffeePage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <>
      {/* Page hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden bg-espresso-900">
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images.beans}
            alt="Ultra-realistic macro photograph of premium freshly roasted coffee beans"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-espresso-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-espresso-900/40" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            01 / 05 — Our Coffee
          </motion.div>
          <h1 className="editorial-h text-cream font-serif" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Signature
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                Creations
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-cream/60 text-sm lg:text-base font-sans font-light leading-relaxed"
          >
            Six defining cups. Each one a study in craft, balance, and the
            pursuit of something beyond ordinary coffee.
          </motion.p>
        </div>
      </section>

      {/* Full product showcase */}
      <section ref={ref} className="bg-espresso-800 py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Desktop alternating layout */}
          <div className="hidden lg:flex flex-col">
            {signatureProducts.map((product, i) => (
              <ProductRow key={product.number} product={product} index={i} inView={inView} />
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden flex flex-col gap-12">
            {signatureProducts.map((product, i) => (
              <MobileProductCard key={product.number} product={product} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>

      {/* Tasting philosophy strip */}
      <section className="bg-espresso-900 py-24 lg:py-32 px-6 lg:px-12 grain-overlay">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel index="" total="" label="Tasting Notes" className="justify-center mb-8" />
          <h2 className="editorial-h text-cream text-section font-serif mb-8">
            <span className="block">Every Cup Has</span>
            <span className="block italic text-gold/80">a Story.</span>
          </h2>
          <p className="text-cream/50 text-sm lg:text-base font-sans font-light leading-relaxed max-w-xl mx-auto">
            We cup every batch before it reaches the bar. Each coffee is
            evaluated for aroma, body, acidity, sweetness, and finish —
            ensuring that what lands in your cup is exactly what we intended.
          </p>
          <div className="mt-12">
            <MagneticButton variant="secondary" onClick={() => navigate('/menu')}>
              View the Full Menu
            </MagneticButton>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

interface ProductRowProps {
  product: typeof signatureProducts[0];
  index: number;
  inView: boolean;
}

function ProductRow({ product, index, inView }: ProductRowProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 border-t border-cream/5 ${
        index === signatureProducts.length - 1 ? 'border-b' : ''
      }`}
      data-cursor="image"
      data-cursor-label="DISCOVER"
    >
      <div className={`relative w-full lg:w-[40%] aspect-[4/5] overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
        <img
          src={product.image}
          alt={`${product.name} — signature coffee from Sam's Bucks`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso-900/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className={`flex-1 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-serif text-5xl text-gold/30">{product.number}</span>
          <span className="text-xs uppercase tracking-ultra font-sans text-taupe">/ 06</span>
        </div>
        <h3 className="font-serif text-4xl lg:text-5xl text-cream font-light mb-4">{product.name}</h3>
        <p className="text-cream/50 text-sm font-sans font-light leading-relaxed max-w-md mb-6">{product.description}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {product.tastingNotes.map((note) => (
            <span key={note} className="text-[10px] uppercase tracking-ultra font-sans text-gold/60 border border-gold/20 px-3 py-1.5">
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <span className="font-serif text-2xl text-cream">{product.price}</span>
          <button className="group/btn flex items-center gap-2 text-xs uppercase tracking-ultra font-sans text-cream/60 hover:text-gold transition-colors">
            Discover
            <span className="inline-block w-8 h-px bg-current transition-all duration-300 group-hover/btn:w-12" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function MobileProductCard({ product, index, inView }: { product: typeof signatureProducts[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="flex flex-col gap-4"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={`${product.name} — signature coffee from Sam's Bucks`} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-3xl text-gold/30">{product.number}</span>
        <h3 className="font-serif text-3xl text-cream font-light">{product.name}</h3>
      </div>
      <p className="text-cream/50 text-sm font-sans font-light leading-relaxed">{product.description}</p>
      <div className="flex flex-wrap gap-2">
        {product.tastingNotes.map((note) => (
          <span key={note} className="text-[9px] uppercase tracking-ultra font-sans text-gold/60 border border-gold/20 px-2.5 py-1">
            {note}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-2">
        <span className="font-serif text-xl text-cream">{product.price}</span>
        <button className="text-[10px] uppercase tracking-ultra font-sans text-cream/60">Discover →</button>
      </div>
    </motion.div>
  );
}
