import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { MagneticButton } from './primitives/MagneticButton';

export function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      ref={ref}
      id="order"
      className="relative bg-cream text-espresso py-24 lg:py-40 px-6 lg:px-12 overflow-hidden"
    >
      {/* Subtle decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-caramel/40"
      />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-ultra font-sans text-caramel-dark mb-8">
            Membership
          </div>

          <h2 className="editorial-h text-espresso text-section font-serif mb-6">
            <span className="block">Join the</span>
            <span className="block italic text-caramel">Inner Circle.</span>
          </h2>

          <p className="text-espresso/60 text-sm lg:text-base font-sans font-light leading-relaxed mb-12 max-w-md mx-auto">
            Be first to discover new roasts, limited releases, seasonal menus,
            and the stories behind the cup.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="flex-1 bg-transparent border-b border-espresso/20 px-0 py-4 text-espresso placeholder:text-espresso/40 font-sans text-sm focus:outline-none focus:border-caramel transition-colors text-center sm:text-left"
          />
          <MagneticButton
            variant="primary"
            onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
            className="!text-[10px] !px-6"
          >
            Join the Club
          </MagneticButton>
        </motion.form>

        {/* Confirmation */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xs uppercase tracking-ultra font-sans text-caramel-dark"
          >
            Welcome to the circle. Check your inbox.
          </motion.p>
        )}

        <p className="mt-8 text-[10px] uppercase tracking-ultra font-sans text-espresso/30">
          No spam. Just coffee.
        </p>
      </div>
    </section>
  );
}
