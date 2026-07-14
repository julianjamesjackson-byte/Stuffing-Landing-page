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
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <motion.main 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex-1 px-4 py-16 sm:py-20 lg:px-8 max-w-3xl mx-auto w-full text-slate-800 dark:text-slate-200"
      >
        <motion.div variants={itemVariant}>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-8 font-medium">Effective Date: July 14, 2026</p>
        </motion.div>
        
        <motion.div variants={itemVariant}>
          <p className="mb-4">Argyle Medical Staffing ("Argyle Medical Staffing," "we," "our," or "us") respects your privacy and is committed to protecting the personal information you provide when visiting our website.</p>
          <p className="mb-4">This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit information through our online forms.</p>
          <p className="mb-8">By using our website, you agree to the practices described in this Privacy Policy.</p>
        </motion.div>
        
        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
          <p className="mb-2">When you contact us, apply for employment, or request staffing services, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
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

        <motion.div variants={itemVariant}>
          <h3 className="text-xl font-semibold mb-3 mt-6">Business Information</h3>
          <p className="mb-2">For healthcare facilities and employers, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Company name</li>
            <li>Contact information</li>
            <li>Staffing requirements</li>
            <li>Job descriptions</li>
            <li>Billing information (when applicable)</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
          <p className="mb-2">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on our website</li>
            <li>Referral source</li>
          </ul>
          <p className="mb-8">This information helps us improve website performance and user experience.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
          <p className="mb-2">We use your information to:</p>
          <ul className="list-disc pl-6 mb-8 space-y-1">
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

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Cookies</h2>
          <p className="mb-8">Our website may use cookies and similar technologies to improve your browsing experience and analyze website traffic. You may disable cookies through your browser settings; however, some website features may not function properly.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Information Sharing</h2>
          <p className="mb-2">We do not sell your personal information.</p>
          <p className="mb-2">We may share information with:</p>
          <ul className="list-disc pl-6 mb-8 space-y-1">
            <li>Healthcare employers or clients for recruiting purposes</li>
            <li>Background screening providers</li>
            <li>Credential verification providers</li>
            <li>Technology vendors that support our business</li>
            <li>Government agencies when required by law</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Data Security</h2>
          <p className="mb-8">We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information. However, no method of internet transmission or electronic storage is completely secure.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Data Retention</h2>
          <p className="mb-8">We retain personal information only as long as necessary for recruiting, staffing, legal, regulatory, and business purposes.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Your Rights</h2>
          <p className="mb-2">Depending on your state of residence, you may have rights to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of personal information</li>
            <li>Request information regarding data usage</li>
          </ul>
          <p className="mb-8">To exercise these rights, contact us using the information below.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Third-Party Links</h2>
          <p className="mb-8">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Children's Privacy</h2>
          <p className="mb-8">Our services are intended for individuals 18 years of age or older. We do not knowingly collect personal information from children.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Changes to This Policy</h2>
          <p className="mb-8">We may update this Privacy Policy periodically. Changes become effective upon posting to this page.</p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
          <p className="mb-1">Argyle Medical Staffing</p>
          <p className="mb-1">Email: info@argylemedicalstaffing.com</p>
          <p className="mb-8">Website: <a href="https://argylemedicalstaffing.com" className="text-brand-primary hover:underline">https://argylemedicalstaffing.com</a></p>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
}
