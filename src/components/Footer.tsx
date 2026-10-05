import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Monogram, Badge } from './primitives/Logo';

const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'Our Coffee', path: '/coffee' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-charcoal text-cream px-6 lg:px-12 pt-24 lg:pt-32 pb-12 overflow-hidden grain-overlay"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-cream"
            >
              <Monogram className="w-10 h-10 mb-6" />
              <h3 className="font-serif text-3xl font-light tracking-wide mb-3" style={{ letterSpacing: '0.05em' }}>
                SAM'S BUCKS
              </h3>
              <p className="text-cream/40 text-sm font-sans font-light leading-relaxed italic">
                Crafted for the moments that matter.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="lg:w-48">
            <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/50 mb-6">
              Navigate
            </div>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => handleNav(item.path)}
                  className="group flex items-center gap-2 text-left text-sm font-sans text-cream/60 hover:text-cream transition-colors w-fit"
                >
                  <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="lg:w-48">
            <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/50 mb-6">
              Connect
            </div>
            <div className="flex flex-col gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }, i) => (
                <motion.a
                  key={label}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center gap-3 text-sm font-sans text-cream/60 hover:text-cream transition-colors"
                >
                  <Icon className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:w-48">
            <div className="text-[10px] uppercase tracking-ultra font-sans text-gold/50 mb-6">
              Legal
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm font-sans text-cream/60 hover:text-cream transition-colors">Privacy</a>
              <a href="#" className="text-sm font-sans text-cream/60 hover:text-cream transition-colors">Terms</a>
            </div>
          </div>
        </div>

        {/* Badge centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center mb-16"
        >
          <Badge className="w-24 h-24 text-cream/40" />
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-ultra font-sans text-taupe">
            © 2026 Sam's Bucks. Demo brand identity.
          </p>
          <p className="text-[10px] uppercase tracking-ultra font-sans text-taupe">
            Exceptional coffee. Elevated moments.
          </p>
        </div>
      </div>
    </footer>
  );
}
