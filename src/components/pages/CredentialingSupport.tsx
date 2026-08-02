import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function CredentialingSupport() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-8 font-display">Credentialing Support</h1>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Credentialing is one of the most important steps in the hiring process, and our dedicated team is here to make it as seamless as possible.</p>
          <p>Argyle Medical Staffing assists healthcare professionals through every stage of credentialing, helping reduce delays and ensuring compliance with facility and regulatory requirements.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mb-6 font-display">Our Credentialing Services Include:</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>License verification</li>
            <li>Board certification verification</li>
            <li>DEA and controlled substance registration support</li>
            <li>Education and training verification</li>
            <li>Employment history verification</li>
            <li>Background screenings</li>
            <li>Immunization and health record review</li>
            <li>Hospital privilege documentation</li>
            <li>Professional reference coordination</li>
            <li>Compliance tracking</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="mt-8 bg-white/50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm backdrop-blur-sm">
          <p className="font-medium text-[#0F2942] dark:text-slate-200">Our specialists work directly with healthcare facilities and providers to gather, verify, and submit all required documentation efficiently. By managing the credentialing process from start to finish, we help clinicians begin assignments faster while minimizing administrative burdens.</p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
