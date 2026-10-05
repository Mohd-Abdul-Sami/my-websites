import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { images } from '@/data/images';

const galleryItems = [
  { src: images.gallery01, label: 'The Cup', aspect: 'aspect-[4/5]' },
  { src: images.gallery02, label: 'The Bean', aspect: 'aspect-[3/2]' },
  { src: images.gallery03, label: 'The Maker', aspect: 'aspect-[4/5]' },
  { src: images.gallery04, label: 'The Space', aspect: 'aspect-[3/2]' },
  { src: images.gallery05, label: 'The Pour', aspect: 'aspect-[4/5]' },
  { src: images.gallery06, label: 'The Craft', aspect: 'aspect-[4/5]' },
  { src: images.gallery07, label: 'The Moment', aspect: 'aspect-[3/2]' },
  { src: images.gallery08, label: 'The Machine', aspect: 'aspect-[3/2]' },
  { src: images.gallery09, label: 'The Art', aspect: 'aspect-[4/5]' },
  { src: images.gallery10, label: 'The Room', aspect: 'aspect-[3/2]' },
  { src: images.gallery11, label: 'The Mood', aspect: 'aspect-[3/2]' },
  { src: images.gallery12, label: 'The Hand', aspect: 'aspect-[4/5]' },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // Split into columns for masonry effect
  const col1 = galleryItems.filter((_, i) => i % 3 === 0);
  const col2 = galleryItems.filter((_, i) => i % 3 === 1);
  const col3 = galleryItems.filter((_, i) => i % 3 === 2);

  return (
    <section ref={ref} className="relative bg-espresso-900 py-24 lg:py-32 px-6 lg:px-12 overflow-hidden grain-overlay">
      {/* Header */}
      <div className="max-w-[1600px] mx-auto mb-12 lg:mb-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow mb-4">The Gallery</div>
            <h2 className="editorial-h text-cream text-section font-serif">
              <span className="block">A Visual</span>
              <span className="block italic text-gold/80">Journey</span>
            </h2>
          </div>
          <p className="hidden lg:block text-cream/40 text-xs font-sans max-w-xs text-right">
            Moments from inside our cafes — the craft, the people, the light.
          </p>
        </div>
      </div>

      {/* Masonry gallery */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 lg:gap-6">
          {col1.map((item, i) => (
            <GalleryImage key={i} item={item} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 lg:gap-6 mt-8 lg:mt-16">
          {col2.map((item, i) => (
            <GalleryImage key={i} item={item} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 lg:gap-6 hidden lg:flex">
          {col3.map((item, i) => (
            <GalleryImage key={i} item={item} index={i} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryImage({ item, index, inView }: { item: typeof galleryItems[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${item.aspect} overflow-hidden`}
      data-cursor="image"
      data-cursor-label={item.label.toUpperCase()}
    >
      <img
        src={item.src}
        alt={`${item.label} — Sam's Bucks coffee photography`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-espresso-900/0 group-hover:bg-espresso-900/30 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] uppercase tracking-ultra font-sans text-cream">
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}
