import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { Logo } from './primitives/Logo';
import { MagneticButton } from './primitives/MagneticButton';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Our Coffee', path: '/coffee' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Solid header on non-home pages
  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  const handleNav = (path: string) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? 'bg-espresso-900/90 backdrop-blur-md border-b border-cream/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav('/')} className="text-cream hover:text-gold transition-colors duration-300">
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.path)}
                  className={`group relative text-xs uppercase tracking-ultra font-sans transition-colors duration-300 ${
                    isActive ? 'text-cream' : 'text-cream/70 hover:text-cream'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton
              variant="primary"
              onClick={() => handleNav('/menu')}
              className="!px-6 !py-3 !text-[10px]"
            >
              Order Now
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-cream p-2"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-espresso-900 lg:hidden flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-cream/5">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="text-cream p-2" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  onClick={() => handleNav(item.path)}
                  className="text-left font-serif text-4xl font-light text-cream hover:text-gold transition-colors duration-300 py-2"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 border-t border-cream/5"
            >
              <button
                onClick={() => handleNav('/menu')}
                className="btn-primary w-full"
              >
                Order Now
              </button>
              <p className="mt-4 text-center text-[10px] uppercase tracking-ultra text-taupe font-sans">
                Crafted for the moments that matter
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
