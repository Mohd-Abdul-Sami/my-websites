import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { images } from '@/data/images';
import { SectionLabel } from './primitives/SectionLabel';

const experiences = [
  {
    title: 'The Morning Ritual',
    description: 'First light, first cup. A quiet start to the day with a perfectly pulled espresso and the smell of fresh pastries.',
    image: images.experience01,
    time: '7 AM — 11 AM',
  },
  {
    title: 'The Afternoon Pause',
    description: 'A breath between meetings. Slow pour-overs, natural light, and space to think, read, or simply be.',
    image: images.experience02,
    time: '11 AM — 5 PM',
  },
  {
    title: 'The Evening Pour',
    description: 'As the day softens, so does the menu. Cold brews, signature drinks, and a warm, ambient atmosphere.',
    image: images.experience03,
    time: '5 PM — Close',
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="experience"
      className="relative bg-espresso-800 py-24 lg:py-40 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <SectionLabel index="05" total="05" label="The Experience" className="justify-center mb-8" />
          <h2 className="editorial-h text-cream text-section font-serif">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                More Than
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                Coffee.
              </motion.span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-cream/50 text-sm lg:text-base font-sans font-light max-w-lg mx-auto"
          >
            A place to slow down, meet, create, and stay a little longer.
          </motion.p>
        </div>

        {/* Experience blocks */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden aspect-[3/4]"
      data-cursor="image"
      data-cursor-label="VIEW"
    >
      {/* Image with parallax */}
      <div ref={imageRef} className="absolute inset-0 overflow-hidden">
        <motion.img
          src={exp.image}
          alt={`${exp.title} at Sam's Bucks — ${exp.time}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ y: imageY }}
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/70 mb-3">
          {exp.time}
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl text-cream font-light mb-3">
          {exp.title}
        </h3>
        <p className="text-cream/60 text-xs lg:text-sm font-sans font-light leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {exp.description}
        </p>
      </div>

      {/* Top number */}
      <div className="absolute top-6 right-6 font-serif text-2xl text-cream/30">
        0{index + 1}
      </div>
    </motion.div>
  );
}
