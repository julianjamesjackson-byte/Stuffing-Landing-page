import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { containerVariant, itemVariant } from '../animations';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F8FAFC] dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glows starting from the very top */}
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2942] dark:text-white mb-4 font-display">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-slate-400 mb-12 pb-8 border-b border-gray-200 dark:border-slate-700 font-medium text-base">Effective Date: July 14, 2026</p>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <p>Argyle Medical Staffing ("Argyle Medical Staffing," "we," "our," or "us") respects your privacy and is committed to protecting the personal information you provide when visiting our website.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit information through our online forms.</p>
          <p>By using our website, you agree to the practices described in this Privacy Policy.</p>
        </motion.div>
        
        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold text-[#0F2942] dark:text-white mt-8 mb-4">Personal Information</h3>
          <p>When you contact us, apply for employment, or request staffing services, we may collect:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Resume or CV</li>
            <li>Employment history</li>
            <li>Professional licenses and certifications</li>
            <li>Educational background</li>
            <li>References</li>
            <li>Other information you voluntarily provide</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h3 className="text-xl font-semibold text-[#0F2942] dark:text-white mt-8 mb-4">Business Information</h3>
          <p>For healthcare facilities and employers, we may collect:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Company name</li>
            <li>Contact information</li>
            <li>Staffing requirements</li>
            <li>Job descriptions</li>
            <li>Billing information (when applicable)</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h3 className="text-xl font-semibold text-[#0F2942] dark:text-white mt-8 mb-4">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on our website</li>
            <li>Referral source</li>
          </ul>
          <p>This information helps us improve website performance and user experience.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide staffing and recruiting services</li>
            <li>Match candidates with employment opportunities</li>
            <li>Communicate regarding staffing requests</li>
            <li>Verify qualifications and credentials</li>
            <li>Respond to inquiries</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and unauthorized activity</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Cookies</h2>
          <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You may disable cookies through your browser settings; however, some website features may not function properly.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Information Sharing</h2>
          <p>We do not sell your personal information.</p>
          <p>We may share information with:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Healthcare employers or clients for recruiting purposes</li>
            <li>Background screening providers</li>
            <li>Credential verification providers</li>
            <li>Technology vendors that support our business</li>
            <li>Government agencies when required by law</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information. However, no method of internet transmission or electronic storage is completely secure.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Data Retention</h2>
          <p>We retain personal information only as long as necessary for recruiting, staffing, legal, regulatory, and business purposes.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Your Rights</h2>
          <p>Depending on your state of residence, you may have rights to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of personal information</li>
            <li>Request information regarding data usage</li>
          </ul>
          <p>To exercise these rights, contact us using the information below.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Children's Privacy</h2>
          <p>Our services are intended for individuals 18 years of age or older. We do not knowingly collect personal information from children.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes become effective upon posting to this page.</p>
        </motion.div>

        <motion.div variants={itemVariant} className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0F2942] dark:text-white mt-12 mb-6 font-display">Contact Us</h2>
          <p className="mb-1">Argyle Medical Staffing</p>
          <p className="mb-1">Email: info@argylemedicalstaffing.com</p>
          <p>Website: <a href="https://argylemedicalstaffing.com" className="text-brand-primary hover:underline">https://argylemedicalstaffing.com</a></p>
        </motion.div>
      </motion.main>
      
      <div className="relative z-10 w-full mt-12">
        <Footer />
      </div>
    </div>
  );
}
