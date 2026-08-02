import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function LicensingAssistance() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-8 font-display">Licensing Assistance</h1>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Navigating medical licensing requirements can be time-consuming and complex. Argyle Medical Staffing provides expert licensing support to help healthcare professionals obtain and maintain the licenses they need to practice.</p>
          <p>Our knowledgeable team works closely with clinicians throughout the licensing process, helping ensure applications are accurate, complete, and submitted on time.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mb-6 font-display">Licensing Services:</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>State medical license application assistance</li>
            <li>Multi-state licensing guidance</li>
            <li>License renewal reminders</li>
            <li>Application tracking</li>
            <li>Documentation review</li>
            <li>Verification coordination</li>
            <li>Expedited licensing support (where available)</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="mt-8 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
          <p className="font-medium text-[#0F2942] dark:text-slate-200">Whether you're applying for your first license, expanding into additional states, or preparing for a travel assignment, we're here to simplify the process. With Argyle Medical Staffing managing the details, you can focus on providing exceptional patient care while we help keep your career moving forward.</p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
