import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  nurseImageVariant,
  containerVariant,
  itemVariant,
  headerVariant,
  navItemVariant,
  h1Variant,
  wordVariant
} from './animations';
import argyleLogo from '../assets/argyle-logo.jpeg';
import hospitalBg from '../assets/hospital-bg.png';

const headline = "Connecting Exceptional Healthcare Talent with Organizations That Care";
const headlineWords = headline.split(" ");

export default function Hero() {
  return (
    <>
      {/* ── Navigation (Exact Clone) ─────────────────────────────────── */}
      <motion.nav 
        className="relative z-20 flex w-full items-center justify-between bg-white px-4 py-3 shadow-sm sm:px-8 sm:py-5 lg:px-12"
        variants={headerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={navItemVariant} className="flex items-center gap-3">
          <img src={argyleLogo} alt="Argyle Medical Staffing Logo" className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-contain shadow-sm" />
          <span className="font-display text-lg sm:text-2xl font-bold text-slate-900">
            Argyle
            <span className="block text-[10px] font-normal uppercase tracking-widest text-slate-500">Medical Staffing</span>
          </span>
        </motion.div>

        {/* Center Links */}
        <div className="hidden items-center gap-8 lg:flex">
          <motion.a variants={navItemVariant} href="#specialties" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            Specialties
          </motion.a>
          <motion.a variants={navItemVariant} href="#facilities" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            For Facilities
          </motion.a>
          <motion.a variants={navItemVariant} href="#clinicians" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            For Clinicians
          </motion.a>
          <motion.a variants={navItemVariant} href="#about" className="font-sans text-[15px] font-medium text-brand-body hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
            About
          </motion.a>
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <motion.div variants={navItemVariant}>
            <Link
              to="/request-talent"
              className="rounded bg-brand-primary px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Request Talent
            </Link>
          </motion.div>
          <motion.div variants={navItemVariant}>
            <Link
              to="/explore-careers"
              className="rounded border border-brand-primary bg-white px-6 py-2.5 text-sm font-bold text-brand-primary transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
            >
              Explore Careers
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* ── Hero Section (Full Background) ───────────────────────────── */}
      <main
        className="relative flex min-h-[60vh] sm:min-h-[75vh] w-full items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hospitalBg})` }}
          variants={nurseImageVariant}
          initial="hidden"
          animate="visible"
        />
        
        {/* Solid white fade at the bottom */}
        <div className="absolute inset-0 bg-white/30 z-0"></div>
        
        {/* Solid white overlay on the left to make text readable */}
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-white/75 z-0"></div>

        {/* ── Hero Content ── */}
        <div className="relative z-10 w-full px-4 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:px-24">
          <motion.div 
            className="max-w-[640px]"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            
            {/* Eyebrow Pill */}
            <motion.div variants={itemVariant} className="mb-6 inline-flex items-center rounded-full border border-brand-ink/15 bg-white/95 py-2 pl-2.5 pr-4 text-xs sm:py-2.5 sm:pl-3 sm:pr-6 sm:text-sm font-medium text-brand-ink shadow-sm">
              <div className="mr-3.5 flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=33" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=47" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              </div>
              Trusted by 2,400+ healthcare professionals
            </motion.div>

            <motion.h1 variants={h1Variant} className="mb-5 font-heading text-2xl sm:text-3xl font-bold leading-[1.1] tracking-tight text-brand-ink md:text-[2.75rem]">
              {headlineWords.map((word, index) => (
                <motion.span key={index} variants={wordVariant} className="inline-block mr-[0.25em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={itemVariant} className="mb-6 sm:mb-8 max-w-[500px] font-sans text-xs sm:text-sm font-medium leading-[1.6] text-brand-ink/80 md:text-[15px]">
              Hiring the right healthcare professionals shouldn't slow down patient care. We help hospitals, clinics, and healthcare facilities quickly connect with qualified medical talent while helping clinicians find rewarding opportunities with leading employers. Whether you need permanent hires or flexible staffing, we're here to deliver the right fit—every time.
            </motion.p>

            {/* CTAs - The Tri-Funnel */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.div variants={itemVariant} whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.3 } }}>
                <Link
                  to="/request-talent"
                  className="inline-flex w-full items-center justify-center rounded bg-brand-primary px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  Request Talent
                </Link>
              </motion.div>
              <motion.div variants={itemVariant} whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.3 } }}>
                <Link
                  to="/explore-careers"
                  className="inline-flex w-full items-center justify-center rounded border border-brand-primary bg-white px-6 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base font-bold text-brand-primary transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                >
                  Explore Careers
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariant} className="mt-5 inline-block" whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.3 } }}>
              <Link to="/partner-with-us" className="inline-flex items-center text-sm font-bold text-brand-ink/70 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                Partner With Us &rarr;
              </Link>
            </motion.div>
            
          </motion.div>
        </div>
      </main>
    </>
  );
}
