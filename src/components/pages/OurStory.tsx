import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function OurStory() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-8 font-display">Our Story</h1>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Argyle Medical Staffing was founded with a simple mission: to connect exceptional healthcare professionals with meaningful career opportunities while providing healthcare organizations with dependable staffing solutions.</p>
          <p>We understand that every healthcare professional has a unique career path and every healthcare facility has distinct staffing needs. That's why we take a personalized approach to every placement, ensuring the right match for both our clinicians and our clients.</p>
          <p>Our team is committed to supporting physicians, advanced practice providers, nurses, and allied healthcare professionals throughout every stage of their careers. From licensing and credentialing to contract assignments and permanent placements, we provide guidance that allows healthcare professionals to focus on what matters most—delivering exceptional patient care.</p>
          <p>At Argyle Medical Staffing, relationships are at the heart of everything we do. We believe trust, transparency, and integrity create long-lasting partnerships that benefit healthcare providers, facilities, and the communities they serve.</p>
          <p>As the healthcare industry continues to evolve, our commitment remains the same: delivering reliable staffing solutions while helping medical professionals build rewarding and successful careers.</p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
