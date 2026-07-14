import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  nurseImageVariant,
  containerVariant,
  itemVariant
} from './animations';
import hospitalBg from '../assets/hospital-bg.png';
import { useIsMobile } from '../hooks/useIsMobile';
import { AppleTextReveal, MagneticButton } from './PremiumAnimations';
import Navbar from './Navbar';

const headline = "Connecting Exceptional Healthcare Talent with Organizations That Care";

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <>
      <Navbar />

      {/* ── Hero Section (Full Background) ───────────────────────────── */}
      <main
        className="relative flex min-h-[60vh] sm:min-h-[75vh] w-full items-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 overflow-hidden perspective-[1000px]"
          variants={nurseImageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hospitalBg})` }}
            animate={isMobile ? undefined : { scale: [1.05, 1.08, 1.05], y: [0, -15, 0], rotateZ: [0, 1, 0, -1, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Solid white fade at the bottom */}
        <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/40 z-0 transition-colors duration-300"></div>
        
        {/* Solid white overlay on the left to make text readable */}
        <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-white/75 dark:bg-slate-900/80 z-0 transition-colors duration-300"></div>

        {/* ── Hero Content ── */}
        <div className="relative z-10 w-full px-4 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:px-24 pointer-events-none">
          <motion.div 
            className="max-w-[640px] pointer-events-auto"
            variants={containerVariant}
            custom={isMobile}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            
            {/* Eyebrow Pill */}
            <motion.div variants={itemVariant} className="mb-6 inline-flex items-center rounded-full border border-brand-ink/15 dark:border-slate-700 bg-white/95 dark:bg-slate-800/90 py-2 pl-2.5 pr-4 text-xs sm:py-2.5 sm:pl-3 sm:pr-6 sm:text-sm font-medium text-brand-ink dark:text-slate-200 shadow-sm transition-colors duration-300">
              <div className="mr-3.5 flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=33" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=47" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
                <img src="https://i.pravatar.cc/100?img=12" alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              </div>
              Trusted by 2,400+ healthcare professionals
            </motion.div>

            <AppleTextReveal 
              text={headline} 
              className="mb-5 font-heading text-2xl sm:text-3xl font-bold leading-[1.1] tracking-tight text-brand-ink dark:text-white md:text-[2.75rem] justify-start transition-colors duration-300"
            />

            <motion.p variants={itemVariant} className="mb-6 sm:mb-8 max-w-[500px] font-sans text-xs sm:text-sm font-medium leading-[1.6] text-brand-ink/80 dark:text-slate-300 md:text-[15px] transition-colors duration-300">
              Hiring the right healthcare professionals shouldn't slow down patient care. We help facilities across all 50 states quickly connect with qualified Nursing, Physician, and Allied Health talent. Whether you need permanent hires, contract, travel, or per diem staffing, we’re here to deliver the right fit—every time.
            </motion.p>

            {/* CTAs - The Tri-Funnel */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.div variants={itemVariant} custom={isMobile} className="animate-[pulseShadow_4s_ease-in-out_infinite] rounded relative">
                <MagneticButton>
                  <Link
                    to="/request-talent"
                    className="flex w-full sm:w-auto items-center justify-center rounded bg-brand-primary px-8 py-3.5 text-sm font-bold text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 hover:bg-brand-primary-dk hover:shadow-lg"
                  >
                    Request Talent
                  </Link>
                </MagneticButton>
              </motion.div>
              
              <motion.div variants={itemVariant} custom={isMobile} className="animate-[pulseShadow_4s_ease-in-out_infinite] rounded relative">
                <MagneticButton>
                  <Link
                    to="/explore-careers"
                    className="flex w-full sm:w-auto items-center justify-center rounded border border-brand-primary bg-white dark:bg-transparent px-8 py-3.5 text-sm font-bold text-brand-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md"
                  >
                    Explore Careers
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariant} custom={isMobile} className="mt-5 inline-block" whileHover={{ scale: 1.04, y: -2, transition: { duration: 0.3 } }}>
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
