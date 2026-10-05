import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { MapPin, Clock, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { locations } from '@/data/locations';
import { images } from '@/data/images';
import { SectionLabel } from '@/components/primitives/SectionLabel';
import { MagneticButton } from '@/components/primitives/MagneticButton';
import { Newsletter } from '@/components/Newsletter';

export function LocationsPage() {
  const ref = useRef<HTMLElement>(null);
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
      <section ref={heroRef} className="relative min-h-[60vh] flex items-end overflow-hidden bg-espresso-900">
        <motion.div
          style={{ y: heroBgY, scale: heroBgScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images.cafeInterior2}
            alt="Modern luxury cafe interior with natural lighting and wooden furniture"
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
            04 / 05 — Find Us
          </motion.div>
          <h1 className="editorial-h text-cream font-serif" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Where to
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-gold/80"
              >
                Find Us.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-xl text-cream/60 text-sm lg:text-base font-sans font-light leading-relaxed"
          >
            Demo locations — addresses and hours are editable placeholder
            content for this brand concept.
          </motion.p>
        </div>
      </section>

      {/* Location cards with images */}
      <section ref={ref} className="bg-espresso-900 py-24 lg:py-32 px-6 lg:px-12 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <SectionLabel index="" total="" label="Our Cafes" className="mb-12" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6" data-cursor="image" data-cursor-label="VIEW">
                  <img
                    src={loc.image}
                    alt={`Sam's Bucks cafe in ${loc.city}, ${loc.neighborhood}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/50 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/70 mb-1">
                      Location 0{i + 1}
                    </div>
                    <h3 className="font-serif text-3xl lg:text-4xl text-cream font-light">
                      {loc.city}
                    </h3>
                    <div className="text-xs uppercase tracking-ultra font-sans text-cream/50 mt-1">
                      {loc.neighborhood}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold/50 mt-0.5 shrink-0" />
                    <span className="text-sm text-cream/60 font-sans font-light leading-relaxed">
                      {loc.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold/50 shrink-0" />
                    <span className="text-sm text-cream/60 font-sans font-light">
                      {loc.hours}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-6">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 text-[10px] uppercase tracking-ultra font-sans text-cream/60 hover:text-gold transition-colors"
                  >
                    Get Directions
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <button className="group/btn flex items-center gap-2 text-[10px] uppercase tracking-ultra font-sans text-cream/60 hover:text-gold transition-colors">
                    View Cafe
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-espresso-800 py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — heading */}
            <div>
              <SectionLabel index="05" total="05" label="Contact" className="mb-8" />
              <h2 className="editorial-h text-cream text-section font-serif mb-8">
                <span className="block">Get in</span>
                <span className="block italic text-gold/80">Touch.</span>
              </h2>
              <p className="text-cream/50 text-sm lg:text-base font-sans font-light leading-relaxed max-w-md mb-12">
                Questions, partnerships, press, or just want to say hello —
                we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-gold/60" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-ultra font-sans text-taupe mb-1">Call Us</div>
                    <div className="text-sm text-cream/70 font-sans">+91 98765 43210 — Demo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-gold/60" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-ultra font-sans text-taupe mb-1">Email Us</div>
                    <div className="text-sm text-cream/70 font-sans">hello@samsbucks.demo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <div>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-ultra font-sans text-taupe">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-transparent border-b border-cream/15 px-0 py-3 text-cream placeholder:text-cream/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-ultra font-sans text-taupe">Your Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-cream/15 px-0 py-3 text-cream placeholder:text-cream/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-ultra font-sans text-taupe">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind"
                    className="bg-transparent border-b border-cream/15 px-0 py-3 text-cream placeholder:text-cream/30 font-sans text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <MagneticButton variant="primary" onClick={() => {}} className="self-start mt-4">
                  Send Message
                </MagneticButton>
              </form>
            </div>
          </div>

          {/* CTA strip */}
          <div className="mt-24 text-center border-t border-cream/10 pt-16">
            <p className="text-cream/40 text-sm font-sans font-light mb-8">
              Prefer to experience it in person?
            </p>
            <MagneticButton variant="secondary" onClick={() => navigate('/menu')}>
              View the Menu
            </MagneticButton>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
