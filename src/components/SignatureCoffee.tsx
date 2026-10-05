import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { signatureProducts } from '@/data/signatureProducts';
import { SectionLabel } from './primitives/SectionLabel';

export function SignatureCoffee() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={ref}
      id="coffee"
      className="relative bg-espresso-800 py-24 lg:py-40 px-6 lg:px-12 overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-[1600px] mx-auto">
        <SectionLabel index="01" total="05" label="Our Coffee" className="mb-12" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-24">
          <h2 className="editorial-h text-cream text-section font-serif">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Signature
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                Creations
              </motion.span>
            </span>
          </h2>
          <p className="max-w-sm text-cream/50 text-sm font-sans font-light leading-relaxed">
            Six defining cups. Each one a study in craft, balance, and the
            pursuit of something beyond ordinary coffee.
          </p>
        </div>
      </div>

      {/* Product showcase — editorial stacked reveal */}
      <div className="max-w-[1600px] mx-auto">
        {/* Desktop: alternating layout */}
        <div className="hidden lg:flex flex-col gap-0">
          {signatureProducts.map((product, i) => (
            <ProductRow
              key={product.number}
              product={product}
              index={i}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
              inView={inView}
            />
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden flex flex-col gap-12">
          {signatureProducts.map((product, i) => (
            <MobileProductCard key={product.number} product={product} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductRowProps {
  product: typeof signatureProducts[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  inView: boolean;
}

function ProductRow({ product, index, isActive, onHover, inView }: ProductRowProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      className={`group relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 border-t border-cream/5 ${
        index === signatureProducts.length - 1 ? 'border-b' : ''
      }`}
      data-cursor="image"
      data-cursor-label="DISCOVER"
    >
      {/* Image */}
      <div className={`relative w-full lg:w-[40%] aspect-[4/5] overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
        <motion.img
          src={product.image}
          alt={`${product.name} — signature coffee from Sam's Bucks`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso-900/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Text */}
      <div className={`flex-1 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-serif text-5xl text-gold/30">{product.number}</span>
          <span className="text-xs uppercase tracking-ultra font-sans text-taupe">/ 06</span>
        </div>
        <h3 className="font-serif text-4xl lg:text-5xl text-cream font-light mb-4">{product.name}</h3>
        <p className="text-cream/50 text-sm font-sans font-light leading-relaxed max-w-md mb-6">{product.description}</p>

        {/* Tasting notes */}
        <div className="flex flex-wrap gap-3 mb-6">
          {product.tastingNotes.map((note) => (
            <span key={note} className="text-[10px] uppercase tracking-ultra font-sans text-gold/60 border border-gold/20 px-3 py-1.5">
              {note}
            </span>
          ))}
        </div>

        {/* Price + discover */}
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
