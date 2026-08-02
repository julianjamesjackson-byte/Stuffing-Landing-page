import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function AboutUs() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-8 font-display">About Us</h1>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Argyle Medical Staffing is a trusted healthcare staffing agency dedicated to connecting qualified medical professionals with healthcare organizations across the United States.</p>
          <p>We specialize in recruiting highly skilled physicians, nurse practitioners, physician assistants, nurses, and allied health professionals for travel, contract, locum tenens, and permanent positions.</p>
          <p>Our experienced recruiters understand the unique challenges facing today's healthcare workforce. We work closely with both clinicians and healthcare facilities to provide staffing solutions that are efficient, compliant, and tailored to each organization's needs.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mb-6 font-display">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Travel Healthcare Opportunities</li>
            <li>Contract Staffing</li>
            <li>Permanent Placement</li>
            <li>Credentialing Support</li>
            <li>Medical Licensing Assistance</li>
            <li>Career Coaching & Job Placement</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6 mt-12">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mb-6 font-display">Why Choose Argyle Medical Staffing?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Personalized recruiter support</li>
            <li>Nationwide opportunities</li>
            <li>Competitive compensation</li>
            <li>Fast placement process</li>
            <li>Ongoing career guidance</li>
            <li>Dedicated credentialing assistance</li>
          </ul>
          <p className="mt-6 font-medium text-[#0F2942] dark:text-slate-200">Whether you're seeking your next opportunity or looking to build a stronger healthcare team, Argyle Medical Staffing is committed to helping you succeed.</p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
