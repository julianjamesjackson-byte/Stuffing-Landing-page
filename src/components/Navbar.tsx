import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { headerVariant, navItemVariant } from './animations';
import argyleLogo from '../assets/argyle-logo.jpeg';
import { useIsMobile } from '../hooks/useIsMobile';
import { ThemeToggle } from './ThemeToggle';
import { MagneticButton } from './PremiumAnimations';

export default function Navbar() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="relative z-30 flex w-full items-center justify-between bg-transparent px-4 py-3 sm:px-8 sm:py-5 lg:px-12 transition-colors duration-300"
      variants={headerVariant}
      custom={isMobile}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Logo */}
      <motion.div variants={navItemVariant} className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none rounded-sm">
          <img src={argyleLogo} alt="Argyle Medical Staffing Logo" className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-contain shadow-sm" />
          <span className="font-display text-lg sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            Argyle
            <span className="block text-[10px] font-normal uppercase tracking-widest text-slate-500 dark:text-slate-400">Medical Staffing</span>
          </span>
        </Link>
      </motion.div>

      {/* Center Links */}
      <div className="hidden items-center gap-8 lg:flex">
        <motion.a variants={navItemVariant} href="/#specialties" className="font-sans text-[15px] font-medium text-brand-body dark:text-slate-200 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors">
          Specialties
        </motion.a>
        <motion.a variants={navItemVariant} href="/#facilities" className="font-sans text-[15px] font-medium text-brand-body dark:text-slate-200 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors">
          For Facilities
        </motion.a>
        <motion.a variants={navItemVariant} href="/#clinicians" className="font-sans text-[15px] font-medium text-brand-body dark:text-slate-200 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors">
          For Clinicians
        </motion.a>
        <motion.a variants={navItemVariant} href="/#about" className="font-sans text-[15px] font-medium text-brand-body dark:text-slate-200 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm transition-colors">
          About
        </motion.a>
      </div>

      {/* Right Actions */}
      <div className="hidden items-center gap-4 lg:flex">
        <ThemeToggle />
        <motion.div variants={navItemVariant} custom={isMobile}>
          <MagneticButton>
            <Link
              to="/request-talent"
              className="rounded bg-brand-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 animate-[pulseShadow_4s_ease-in-out_infinite] block"
            >
              Request Talent
            </Link>
          </MagneticButton>
        </motion.div>
        <motion.div variants={navItemVariant} custom={isMobile}>
          <MagneticButton>
            <Link
              to="/explore-careers"
              className="rounded border border-brand-primary bg-white dark:bg-transparent px-6 py-2.5 text-sm font-bold text-brand-primary transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 animate-[pulseShadow_4s_ease-in-out_infinite] block"
            >
              Explore Careers
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full z-30 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-6 shadow-lg lg:hidden overflow-hidden flex flex-col gap-5 text-left pointer-events-auto"
          >
            <div className="flex flex-col gap-3.5">
              <a
                href="/#specialties"
                onClick={() => setIsMenuOpen(false)}
                className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors"
              >
                Specialties
              </a>
              <a
                href="/#facilities"
                onClick={() => setIsMenuOpen(false)}
                className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors"
              >
                For Facilities
              </a>
              <a
                href="/#clinicians"
                onClick={() => setIsMenuOpen(false)}
                className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors"
              >
                For Clinicians
              </a>
              <a
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="font-sans text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors"
              >
                About
              </a>
            </div>
            
            <hr className="border-slate-100 dark:border-slate-800" />
            
            <div className="flex flex-col gap-3">
              <Link
                to="/request-talent"
                onClick={() => setIsMenuOpen(false)}
                className="rounded bg-brand-primary py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-brand-primary-dk transition-colors"
              >
                Request Talent
              </Link>
              <Link
                to="/explore-careers"
                onClick={() => setIsMenuOpen(false)}
                className="rounded border border-brand-primary bg-white dark:bg-transparent py-3 text-center text-sm font-bold text-brand-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Explore Careers
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
