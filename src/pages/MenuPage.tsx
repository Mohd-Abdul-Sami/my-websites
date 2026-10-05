import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { menuCategories } from '@/data/menu';
import { images } from '@/data/images';
import { MagneticButton } from '@/components/primitives/MagneticButton';
import { FinalCTA } from '@/components/FinalCTA';

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  const category = menuCategories[activeCategory];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <>
      {/* Page hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-end overflow-hidden bg-cream">
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images.latte}
            alt="Elegant latte art in a coffee cup against a dark, minimalist background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-espresso-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-16 lg:pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-6"
          >
            02 / 05 — The Menu
          </motion.div>
          <h1 className="editorial-h text-cream font-serif" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                An Offering
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                of Craft
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-cream/60 text-sm lg:text-base font-sans font-light leading-relaxed"
          >
            Every item is made to order with intention. Prices are demo content
            and may vary by location.
          </motion.p>
        </div>
      </section>

      {/* Full menu */}
      <section className="bg-cream text-espresso py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Category tabs */}
          <div ref={ref} className="flex flex-wrap gap-2 lg:gap-4 mb-12 border-b border-espresso/10 pb-6">
            {menuCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(i)}
                className={`relative text-xs uppercase tracking-ultra font-sans px-4 py-2 transition-colors duration-300 ${
                  activeCategory === i ? 'text-espresso' : 'text-espresso/40 hover:text-espresso/70'
                }`}
              >
                {cat.label}
                {activeCategory === i && (
                  <motion.div
                    layoutId="menu-active"
                    className="absolute -bottom-[25px] left-0 right-0 h-px bg-caramel"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className="relative min-h-[400px]" onMouseMove={handleMouseMove} onMouseLeave={() => setHoveredItem(null)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-x-16 gap-y-2"
              >
                {category.items.map((item, i) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    onMouseEnter={() => setHoveredItem(i)}
                    onClick={() => setHoveredItem(hoveredItem === i ? null : i)}
                    className="group flex items-baseline justify-between gap-4 py-5 border-b border-espresso/10 hover:border-caramel/40 transition-colors text-left"
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-xl lg:text-2xl text-espresso font-medium group-hover:text-caramel-dark transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-espresso/50 font-sans mt-1 max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="flex-1 border-b border-dotted border-espresso/20 self-center hidden lg:block" />
                    <span className="font-serif text-lg text-espresso/80">{item.price}</span>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Floating image on hover (desktop) */}
            {hoveredItem !== null && category.items[hoveredItem] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:block absolute pointer-events-none z-10 w-64 h-80 overflow-hidden shadow-2xl"
                style={{
                  left: `${Math.min(mousePos.x + 30, 600)}px`,
                  top: `${Math.min(mousePos.y - 100, 200)}px`,
                }}
              >
                <img
                  src={category.items[hoveredItem].image}
                  alt={category.items[hoveredItem].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>

          {/* Mobile: show image for tapped item */}
          <div className="lg:hidden mt-8">
            {hoveredItem !== null && category.items[hoveredItem] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="relative w-full aspect-[4/3] overflow-hidden"
              >
                <img
                  src={category.items[hoveredItem].image}
                  alt={category.items[hoveredItem].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Ordering CTA */}
      <section className="bg-espresso-900 py-24 lg:py-32 px-6 lg:px-12 grain-overlay">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow mb-8">Ready to Order?</div>
            <h2 className="editorial-h text-cream text-section font-serif mb-8">
              <span className="block">Your Cup</span>
              <span className="block italic text-gold/80">Awaits.</span>
            </h2>
            <p className="text-cream/50 text-sm font-sans font-light leading-relaxed max-w-md mx-auto mb-12">
              Visit any of our locations or join the inner circle for early
              access to new roasts and seasonal specials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary" onClick={() => navigate('/locations')}>
                Find a Location
              </MagneticButton>
              <MagneticButton variant="secondary" onClick={() => navigate('/coffee')}>
                Explore Our Coffee
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
