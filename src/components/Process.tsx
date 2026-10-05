import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { images } from '@/data/images';
import { SectionLabel } from './primitives/SectionLabel';

const steps = [
  { number: '01', label: 'Source', description: 'We partner directly with growers in Ethiopia, Colombia, and the Western Ghats of India — selecting only the highest-grade beans from each harvest.', image: images.beans },
  { number: '02', label: 'Roast', description: 'Each batch is roasted in small quantities, profiled by hand, and rested to develop its full character before it ever reaches a cup.', image: images.beans3 },
  { number: '03', label: 'Brew', description: 'Our baristas are trained for months before they pull their first shot. Precision in grind, temperature, and time is non-negotiable.', image: images.pourOver },
  { number: '04', label: 'Serve', description: 'Every cup is poured with intention, presented with care, and served in a space designed to make you want to stay.', image: images.pourOver3 },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) => {
      const step = Math.min(Math.floor(val * steps.length), steps.length - 1);
      setActiveStep(step);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const bg = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#1A120E', '#241710', '#1A120E', '#FAF7F1']
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.66, 0.85, 1],
    ['#F5EFE5', '#F5EFE5', '#F5EFE5', '#1A120E']
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bg, color: textColor }}
      className="relative min-h-[300vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-12 lg:mb-16">
            <SectionLabel index="04" total="05" label="The Process" />
            <div className="flex gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-px transition-all duration-500 ${i === activeStep ? 'w-12 bg-gold' : 'w-6 bg-current opacity-20'}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            {/* Left — numbers and labels */}
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-serif text-[8rem] lg:text-[12rem] leading-none font-light opacity-20">
                    {steps[activeStep].number}
                  </div>
                  <h3 className="font-serif text-4xl lg:text-6xl font-light -mt-8 lg:-mt-12">
                    {steps[activeStep].label}
                  </h3>
                  <p className="mt-6 max-w-md text-sm lg:text-base font-sans font-light opacity-60 leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — image */}
            <div className="w-full lg:w-[45%] relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={steps[activeStep].image}
                    alt={`${steps[activeStep].label} — step ${steps[activeStep].number} in the Sam's Bucks coffee process`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
