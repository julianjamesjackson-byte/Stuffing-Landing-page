import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-primary-lt/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-[600px] w-[600px] max-w-full translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-accent-lt/20 blur-[120px] pointer-events-none"></div>

      <Navbar />

      <motion.main 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 px-4 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8 max-w-4xl mx-auto w-full text-brand-ink dark:text-slate-100"
      >
        <motion.div variants={itemVariant}>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-brand-muted dark:text-slate-400 mb-8 font-medium">Effective Date: July 14, 2026</p>
          
          <p className="mb-4">Welcome to Argyle Medical Staffing.</p>
          <p className="mb-4">These Terms of Service govern your access to and use of our website.</p>
          <p className="mb-8">By using this website, you agree to these Terms.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Website Use</h2>
          <p className="mb-2">You agree to use this website only for lawful purposes. You may not:</p>
          <ul className="list-disc pl-6 mb-8 space-y-1">
            <li>Use the website for fraudulent purposes</li>
            <li>Attempt unauthorized access</li>
            <li>Upload malicious software</li>
            <li>Interfere with website operations</li>
            <li>Copy or reproduce website content without permission</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">No Employment Guarantee</h2>
          <p className="mb-2">Submitting an application or resume does not guarantee:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Employment</li>
            <li>Placement</li>
            <li>Interviews</li>
            <li>Job offers</li>
          </ul>
          <p className="mb-8">Employment opportunities depend on client needs, qualifications, licensing requirements, and other factors.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">No Client Guarantee</h2>
          <p className="mb-8">Submitting a staffing request does not guarantee that candidates will be available for every position. Argyle Medical Staffing works diligently to identify qualified candidates but cannot guarantee staffing availability.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Accuracy of Information</h2>
          <p className="mb-8">Users are responsible for ensuring that information submitted through the website is accurate and current. Providing false or misleading information may result in removal from consideration.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Intellectual Property</h2>
          <p className="mb-2">All website content, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Logos</li>
            <li>Text</li>
            <li>Graphics</li>
            <li>Images</li>
            <li>Design</li>
            <li>Branding</li>
          </ul>
          <p className="mb-8">is the property of Argyle Medical Staffing and may not be copied or used without written permission.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Third-Party Services</h2>
          <p className="mb-8">Our website may include links to third-party websites. We do not endorse or control those websites and are not responsible for their content.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Disclaimer</h2>
          <p className="mb-2">The information on this website is provided for general informational purposes only.</p>
          <p className="mb-2">We make no warranties regarding:</p>
          <ul className="list-disc pl-6 mb-8 space-y-1">
            <li>Website availability</li>
            <li>Accuracy</li>
            <li>Completeness</li>
            <li>Suitability for any particular purpose</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Limitation of Liability</h2>
          <p className="mb-8">To the fullest extent permitted by law, Argyle Medical Staffing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from use of the website.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Indemnification</h2>
          <p className="mb-8">You agree to indemnify and hold harmless Argyle Medical Staffing, its employees, contractors, and affiliates from claims arising out of your misuse of the website or violation of these Terms.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Governing Law</h2>
          <p className="mb-8">These Terms shall be governed by and interpreted in accordance with the laws of the State of California, without regard to conflict of law principles.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Changes</h2>
          <p className="mb-8">We reserve the right to modify these Terms at any time. Updated Terms become effective upon posting.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Contact</h2>
          <p className="mb-1">Argyle Medical Staffing</p>
          <p className="mb-1">Email: info@argylemedicalstaffing.com</p>
          <p className="mb-8">Website: <a href="https://argylemedicalstaffing.com" className="text-brand-primary hover:underline">https://argylemedicalstaffing.com</a></p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
