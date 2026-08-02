import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function TravelAndContract() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F8FAFC] dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-primary-lt/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-[600px] w-[600px] max-w-full translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-accent-lt/20 blur-[120px] pointer-events-none"></div>

      <Navbar />
      
      <motion.main 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 px-6 pt-32 pb-24 max-w-4xl mx-auto w-full text-lg text-gray-700 dark:text-slate-300 leading-relaxed space-y-6"
      >
        <motion.div variants={itemVariant}>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-8 font-display">Travel & Contract Opportunities</h1>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Healthcare professionals today have more career flexibility than ever before. Argyle Medical Staffing offers travel and contract assignments that allow clinicians to gain valuable experience while exploring new locations and healthcare environments.</p>
          <p>Whether you're looking for short-term coverage, long-term contracts, or your next travel adventure, we connect you with opportunities that match your skills, preferences, and career goals.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mb-6 font-display">Benefits of Travel & Contract Positions:</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Competitive pay packages</li>
            <li>Flexible scheduling</li>
            <li>Housing and travel assistance (when applicable)</li>
            <li>Weekly pay</li>
            <li>Professional growth opportunities</li>
            <li>Diverse clinical experiences</li>
            <li>Work-life balance</li>
            <li>Nationwide assignments</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="mt-8 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
          <p className="font-medium text-[#0F2942] dark:text-slate-200">Our recruiters remain by your side before, during, and after every assignment to ensure a smooth experience from onboarding through completion. Your next opportunity is waiting—and we're here to help you find it.</p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
