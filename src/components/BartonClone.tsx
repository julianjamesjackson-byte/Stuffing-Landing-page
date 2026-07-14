import { useRef, useState } from 'react';
import { motion, useTransform, useSpring, AnimatePresence, useMotionValue, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import Footer from './Footer';
import USMapGraphic from './USMapGraphic';
import facilityMeeting from '../assets/facility_meeting.png';
import collage1 from '../assets/collage_1.png';
import {
  visContainerVariant,
  corePulseVariant,
  nodeDockVariant,
  lineDrawVariant,
  detailPopupVariant,
  wordVariant,
  itemVariant,
  timelineContainerVariant,
  timelineItemVariant,
  timelineLineVariant,
  mapContainerVariant,
  gridItemVariant,
  visContainerVariant as gridContainerVariant,
  cinematicBgVariant,
  cardVariant
} from './animations';
import { AppleTextReveal, LinearGlowCard, StripeTilt, MagneticButton, AmbientAurora } from './PremiumAnimations';

// Removed CountingNumber as it's no longer needed

const ParticleBackground = ({ speedMultiplier = 1 }: { speedMultiplier?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 40 }).map((_, i) => {
        const duration = (Math.random() * 10 + 10) / speedMultiplier;
        return (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-primary/30 blur-[1px]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              x: [null, Math.random() * 150 - 75],
              opacity: [null, Math.random() * 0.8 + 0.2, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

// Section 2: Stats Badge Wheel
type StatItem = { header: string; text: string; delay: number; lineDelay: number; id: string; popup: string; line: { x1: number; y1: number; x2: number; y2: number; }; };

const StatsWheel = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const leftStats: StatItem[] = [
    { header: "Growing Network", text: "Qualified Healthcare Professionals", delay: 1.35, lineDelay: 1.25, id: 'tl', popup: 'Industry Veterans', line: { x1: 200, y1: 100, x2: 400, y2: 150 } },
    { header: "Nationwide Reach", text: "Staffing Across the U.S.", delay: 1.05, lineDelay: 0.95, id: 'bl', popup: 'Always-On Assistance', line: { x1: 200, y1: 200, x2: 400, y2: 150 } }
  ];
  
  const rightStats: StatItem[] = [
    { header: "Healthcare Focused", text: "Specialized Recruiting Solutions", delay: 0.75, lineDelay: 0.65, id: 'tr', popup: 'National Network & Logistics', line: { x1: 600, y1: 100, x2: 400, y2: 150 } },
    { header: "Dedicated Support", text: "Personalized Service Every Step", delay: 0.9, lineDelay: 0.8, id: 'br', popup: 'Streamlined Onboarding', line: { x1: 600, y1: 200, x2: 400, y2: 150 } }
  ];

  const footerText = "At Argyle Staffing and Recruiting, we make healthcare hiring simple, strategic, and reliable. Our experienced recruiters connect healthcare organizations with highly qualified professionals who are ready to make an immediate impact, while helping clinicians discover career opportunities that align with their skills and goals. By combining industry expertise with personalized service, we deliver staffing solutions that save time, reduce hiring challenges, and support exceptional patient care. When hiring matters most, healthcare organizations trust Argyle to deliver the right talent with confidence.";
  const footerWords = footerText.split(" ");
  
  const getVariantState = (id: string) => {
    if (!activeNode) return "visible";
    return activeNode === id ? "active" : "dimmed";
  };

  const activePopup = [...leftStats, ...rightStats].find(s => s.id === activeNode)?.popup;

  return (
    <motion.section 
      className="relative overflow-hidden bg-white dark:bg-slate-900 py-16 px-4 sm:py-24 sm:px-8 lg:px-24 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <ParticleBackground speedMultiplier={activeNode ? 0.3 : 1} />
      
      {/* Subtle Background Glows */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-primary-lt/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-[600px] w-[600px] max-w-full translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-accent-lt/20 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.h2 variants={itemVariant} className="mb-10 sm:mb-20 font-display text-2xl sm:text-3xl font-bold text-brand-ink dark:text-white lg:text-[2.5rem]">
          Precision Healthcare Staffing Nationwide
        </motion.h2>

        <div className="relative flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-8">
          
          {/* Connecting SVG Lines (Desktop Only) */}
          <div className="absolute inset-0 hidden items-center justify-center lg:flex pointer-events-none z-0">
            <svg width="800" height="300" className="text-brand-primary">
              {[...leftStats, ...rightStats].map((item, i) => (
                <motion.line 
                  key={i}
                  x1={item.line.x1} y1={item.line.y1} x2={item.line.x2} y2={item.line.y2} 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  variants={lineDrawVariant}
                  animate={getVariantState(item.id)}
                  transition={{ delay: activeNode ? 0 : item.lineDelay, duration: activeNode ? 0.3 : 1 }}
                />
              ))}
            </svg>
          </div>

          {/* Left Column (Stats) */}
          <div className="relative z-10 flex w-full flex-col items-center gap-6 lg:w-1/3 lg:items-end lg:pr-8">
            {leftStats.map((item, i) => (
              <motion.div 
                key={i} 
                className="rounded-full cursor-pointer w-full max-w-sm"
                variants={nodeDockVariant}
                custom={{x: 0, y: 0}}
                animate={getVariantState(item.id)}
                transition={{ delay: activeNode ? 0 : item.delay }}
                onMouseEnter={() => setActiveNode(item.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === item.id ? null : item.id)}
              >
                <LinearGlowCard className="flex items-center w-full rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1.5 pr-4 sm:pr-6 shadow-sm">
                  <div className="flex h-9 sm:h-11 items-center justify-center rounded-full bg-brand-primary-lt px-3 sm:px-5 text-sm sm:text-base font-bold text-[#005a54]">
                    {item.header}
                  </div>
                  <span className="ml-3 sm:ml-4 text-sm sm:text-base font-medium text-brand-ink/90 dark:text-slate-300">{item.text}</span>
                </LinearGlowCard>
              </motion.div>
            ))}
          </div>

          {/* Center Hub */}
          <motion.div 
            className="relative z-10 flex shrink-0 flex-col items-center justify-center"
            variants={corePulseVariant}
          >
            {/* Concentric Precision Rings */}
            <div className="flex h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] items-center justify-center rounded-full bg-[#D5F2F2]/50 dark:bg-slate-800 animate-[pulse_4s_ease-in-out_infinite]">
              <div className="flex h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] items-center justify-center rounded-full bg-[#87E1DE] dark:bg-brand-primary/20">
                <LinearGlowCard className="relative z-10 flex h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] cursor-pointer items-center justify-center rounded-full border-[4px] sm:border-[6px] border-brand-primary bg-white dark:bg-slate-900 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,124,116,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 group">
                  {/* A Logo */}
                  <div className="relative flex items-center justify-center text-[2.5rem] sm:text-[3.5rem] font-display font-extrabold tracking-tighter text-brand-primary transition-transform duration-500 group-hover:rotate-12 h-full w-full">
                    <span className="relative z-10 leading-none mt-1 sm:mt-2">A</span>
                    {/* Minimalist ring to mimic the stylized 'B' swirl */}
                    <div className="absolute h-[50px] w-[50px] sm:h-[72px] sm:w-[72px] rounded-full border-[4px] sm:border-[6px] border-transparent border-b-brand-primary border-l-brand-primary -rotate-45 transition-transform duration-700 group-hover:rotate-[135deg]"></div>
                  </div>
                </LinearGlowCard>
              </div>
            </div>
            
            {/* Dynamic Popup Detail below Core */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[240px] h-[40px] flex justify-center items-center pointer-events-none">
              <AnimatePresence mode="wait">
                {activePopup && (
                  <motion.div
                    key={activePopup}
                    variants={detailPopupVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="whitespace-nowrap rounded-full bg-brand-ink dark:bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-lg"
                  >
                    {activePopup}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column (Stats) */}
          <div className="relative z-10 flex w-full flex-col items-center gap-6 lg:w-1/3 lg:items-start lg:pl-8">
            {rightStats.map((item, i) => (
              <motion.div 
                key={i} 
                className="rounded-full cursor-pointer w-full max-w-sm"
                variants={nodeDockVariant}
                custom={{x: 0, y: 0}}
                animate={getVariantState(item.id)}
                transition={{ delay: activeNode ? 0 : item.delay }}
                onMouseEnter={() => setActiveNode(item.id)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode === item.id ? null : item.id)}
              >
                <LinearGlowCard className="flex items-center w-full rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1.5 pr-4 sm:pr-6 shadow-sm">
                  <div className="flex h-9 sm:h-11 items-center justify-center rounded-full bg-brand-primary-lt px-3 sm:px-5 text-sm sm:text-base font-bold text-[#005a54]">
                    {item.header}
                  </div>
                  <span className="ml-3 sm:ml-4 text-sm sm:text-base font-medium text-brand-ink/90 dark:text-slate-300">{item.text}</span>
                </LinearGlowCard>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer Text Staggered */}
        <motion.p 
          className="mx-auto mt-16 sm:mt-24 max-w-3xl font-sans text-sm sm:text-[1.05rem] leading-relaxed text-slate-600 dark:text-slate-400"
          variants={visContainerVariant}
        >
          {footerWords.map((word, index) => (
            <motion.span key={index} variants={wordVariant} className="inline-block mr-[0.25em]">
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </motion.section>
  );
};

// Section 3: Floating Image Collage
const COLLAGE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=faces&q=80", alt: "Female physician in white coat", pos: "top-8 left-6 lg:top-16 lg:left-16" },
  { src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop&crop=faces&q=80", alt: "Doctor with stethoscope smiling", pos: "top-20 right-6 lg:top-28 lg:right-16" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop&crop=faces&q=80", alt: "Nurse in modern clinical setting", pos: "bottom-20 left-6 lg:bottom-16 lg:left-16" },
  { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=faces&q=80", alt: "Healthcare professional portrait", pos: "bottom-8 right-6 lg:bottom-28 lg:right-16" },
];

const FloatingCollageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Scroll Parallax for Background Depth
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // 1. 3D Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || typeof window === 'undefined') return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [10, -10]);
  const rotateY = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-10, 10]);
  const moveX = useTransform(smoothX, [-1, 1], isMobile ? [0, 0] : [-20, 20]);
  const moveY = useTransform(smoothY, [-1, 1], isMobile ? [0, 0] : [-20, 20]);

  const containerVariants = {
    hidden: {},
    visible: (isMobile?: boolean) => ({
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.2,
      },
    }),
    exit: { transition: { duration: 0.2 } }
  };

  const cinematicImageVariants = {
    hidden: (isMobile?: boolean) => ({ opacity: 0, scale: 0.8, filter: 'blur(20px)', y: isMobile ? 30 : 100 }),
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const maskTextVariant = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: { y: "100%", transition: { duration: 0.2 } }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#F8FAFC] dark:bg-slate-950 py-16 px-4 sm:py-32 sm:px-8 lg:py-56 lg:px-24 [perspective:2000px] transition-colors duration-300"
    >
      {/* Background Ambient Glows */}
      <motion.div style={{ y: bgY1 }} className="absolute left-1/4 top-1/4 h-[800px] w-[800px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FCF5E3]/50 dark:bg-brand-primary/5 blur-[120px] pointer-events-none"></motion.div>
      <motion.div style={{ y: bgY2 }} className="absolute right-1/4 bottom-1/4 h-[800px] w-[800px] max-w-full translate-x-1/2 translate-y-1/2 rounded-full bg-[#D5F2F2]/50 dark:bg-brand-primary/10 blur-[120px] pointer-events-none"></motion.div>

      {/* Floating Images — 4 Corner Frame */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block"
        variants={containerVariants}
        custom={isMobile}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="relative w-full h-full max-w-[1400px] mx-auto [transform-style:preserve-3d]">
          {COLLAGE_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className={`absolute ${img.pos}`}
              variants={cinematicImageVariants}
              custom={isMobile}
              style={{ 
                x: moveX, 
                y: moveY, 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="animate-[pulseShadow_4s_ease-in-out_infinite] rounded-3xl h-full w-full">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  animate={{ y: [0, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut", delay: i * 0.5 }}
                  className="w-56 h-72 object-cover rounded-3xl shadow-2xl border border-slate-100/50 dark:border-slate-800 pointer-events-auto transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-brand-primary/20"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center px-4">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.25, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMobile ? 0.05 : 0.2 } },
            exit: { transition: { duration: 0.2 } }
          }}
          className="w-full flex flex-col items-center justify-center"
        >
          {/* Masked Text Reveal with ample padding for descenders */}
          <div className="overflow-hidden pb-4 w-full">
            <motion.h2 
              variants={maskTextVariant}
              className="mb-2 font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#0A2540] dark:text-white md:text-5xl lg:text-[3.5rem] leading-[1.1] relative overflow-hidden group"
            >
              More control over your healthcare career.<br />
              <span className="font-bold">Less friction getting there.</span>
              
              {/* Sweeping Shine Overlay */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-[sweep_2s_ease-in-out_2s]" />
            </motion.h2>
          </div>
          
          <div className="overflow-hidden pb-4 w-full">
            <motion.p 
              variants={maskTextVariant}
              className="mb-6 text-base md:text-[17px] leading-relaxed text-[#0A2540]/80 dark:text-slate-400 relative group"
            >
              We bring you opportunities worth saying yes to. Whether you are seeking permanent placement, contract roles, or flexible per diem shifts, Argyle Staffing and Recruiting coordinates the details. We streamline credentialing, licensing, and onboarding so physicians, nurses, and allied health professionals can find balance, career growth, and high earning potential in rewarding environments.
            </motion.p>
          </div>

          <motion.div 
            variants={maskTextVariant}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto mt-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 10px 20px rgba(0, 119, 119, 0.3)" }} whileTap={{ scale: 0.95 }}>
              <Link to="/explore-careers" className="inline-flex items-center justify-center rounded bg-brand-primary px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dk focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                Explore Careers
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 10px 20px rgba(0, 119, 119, 0.1)" }} whileTap={{ scale: 0.95 }}>
              <Link to="/request-talent" className="inline-flex items-center justify-center rounded border-2 border-brand-primary bg-white dark:bg-slate-900 dark:border-brand-primary/50 px-8 py-3.5 text-sm font-bold text-brand-primary transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                Request Talent
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 4: Logistics Timeline
const Timeline = () => {
  const isMobile = useIsMobile();
  const steps = [
    {
      title: "Recruiter\nReview",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v2h1a3 3 0 0 1 0 6h-1v2a3 3 0 0 0 3 3h2v-1a3 3 0 0 1 6 0v1h2a3 3 0 0 0 3-3v-2h-1a3 3 0 0 1 0-6h1V8a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3Z" />
    },
    {
      title: "Credential\nVerification",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    },
    {
      title: "Job\nMatching",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3.5L7 13.5l-3.5-.5L2 14.5l3.5 3.5L9 22l1.5-1.5-.5-3.5 2-2 3.5 6l1.2-.7c.4-.2.7-.6.6-1.1z" />
    },
    {
      title: "Interview\nCoordination",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
    },
    {
      title: "Offer &\nOnboarding",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 7v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    },
    {
      title: "Ongoing\nSupport",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    }
  ];

  return (
    <motion.section 
      className="bg-white dark:bg-slate-900 py-16 px-4 sm:py-32 lg:px-12 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={timelineContainerVariant}
      custom={isMobile}
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Header Text */}
        <motion.h2 variants={itemVariant} custom={isMobile} className="mb-4 font-display text-xl sm:text-[2rem] font-medium leading-[1.2] text-[#3A4B5C] dark:text-slate-100 lg:text-[2.5rem]">
          With Argyle Medical Staffing, you're not walking<br className="hidden md:block" />
          {' '}into your next role alone.<br className="hidden md:block" />
          {' '}Let us handle the details so you can focus on what you do best.
        </motion.h2>

        {/* Timeline Graphic */}
        <div className="relative mt-16 md:mt-24 flex flex-col md:flex-row w-full items-center justify-between">
          {/* Animated SVG Dashed Line */}
          <motion.svg 
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-full z-0 md:translate-x-0 md:left-0 md:right-0 md:top-12 md:bottom-auto md:w-full md:h-[2px]"
            preserveAspectRatio="none"
            variants={timelineLineVariant}
          >
            <line 
              x1="0" y1="0" 
              x2={isMobile ? "0" : "100%"} 
              y2={isMobile ? "100%" : "0"} 
              stroke="#007C74" 
              strokeWidth="2" 
              strokeOpacity="0.4" 
            />
          </motion.svg>
          
          {/* Start Label */}
          <motion.div variants={timelineItemVariant} className="relative z-10 bg-white dark:bg-slate-900 pb-6 md:pb-0 md:pr-4 font-sans text-[15px] font-medium text-[#3A4B5C] dark:text-slate-400">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
              You
            </div>
          </motion.div>

          {/* Icons Flex Container */}
          <div className="relative z-10 flex flex-col md:flex-row flex-1 items-center justify-around gap-8 md:gap-0 px-4 lg:px-8 py-4 md:py-0">
            {steps.map((step, i) => (
              <motion.div variants={timelineItemVariant} key={i} className="flex flex-col items-center group bg-white dark:bg-slate-900 md:bg-transparent py-2 md:py-0 px-2 md:px-0">
                <LinearGlowCard className="mb-4 rounded-full">
                  <MagneticButton>
                    <motion.div 
                      whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 124, 116, 0.25)" }}
                      className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-full border-[3px] border-white dark:border-slate-800 bg-[#E0F8F8] dark:bg-slate-800 shadow-sm transition-colors duration-300"
                    >
                      <svg className="h-8 w-8 md:h-10 md:w-10 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {step.icon}
                      </svg>
                    </motion.div>
                  </MagneticButton>
                </LinearGlowCard>
                <h3 className="whitespace-pre-line text-center text-[14px] md:text-[15px] font-bold leading-tight text-slate-900 dark:text-white">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* End Label */}
          <motion.div variants={timelineItemVariant} className="relative z-10 bg-white dark:bg-slate-900 pt-6 md:pt-0 md:pl-4 font-sans text-[15px] font-medium text-[#3A4B5C] dark:text-slate-400 text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>Your Next<br className="hidden md:block" /> Role</span>
              <div className="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Section 5: US Map Search
const USMap = () => {
  const isMobile = useIsMobile();
  return (
    <motion.section 
      className="bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col items-center text-center px-8 lg:px-24">
        <motion.h2 variants={itemVariant} custom={isMobile} className="mb-4 font-display text-2xl sm:text-4xl font-extrabold text-brand-ink dark:text-white">
          Nationwide Coverage
        </motion.h2>
        <motion.p variants={itemVariant} custom={isMobile} className="text-base sm:text-lg text-brand-ink/70 dark:text-slate-400">We place providers in all 50 states.</motion.p>
      </div>
      <motion.div 
        variants={mapContainerVariant} 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl px-2 sm:px-6 h-[300px] sm:h-[450px] md:h-[700px] lg:h-[800px]"
      >
        <USMapGraphic />
      </motion.div>
    </motion.section>
  );
};

// Section 6: Specialty Grid
const Specialties = () => {
  const specialtiesData = [
    {
      title: "Registered\nNurses (RN)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 2C8 2 4 5 4 10v4c0 2 2 3 4 3h8c2 0 4-1 4-3v-4c0-5-4-8-8-8zm0 10v4m-3-4h6" />
    },
    {
      title: "Licensed Practical\nNurses (LPN)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.9.5H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.1A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.9.5H19a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2.1A2.5 2.5 0 0 0 14.5 2z" />
    },
    {
      title: "Certified Nursing\nAssistants (CNA)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0l-1.1 1-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.9 7.9 7.9-7.9 1-1a5.5 5.5 0 0 0 0-7.8zM3 12h4l2-4 4 10 2-6h6" />
    },
    {
      title: "Physicians\n(MD/DO)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M10 9h4M12 7v4" />
    },
    {
      title: "Nurse\nPractitioners (NP)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 20c-3 0-5-3-5-6V7a4 4 0 0 1 8 0v7c0 3-2 6-5 6zM12 20v2M8 12h8" />
    },
    {
      title: "Physician\nAssistants (PA)",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 4V2h4v2M4 8h16v12H4zM12 11v6M9 14h6" />
    },
    {
      title: "Allied\nHealth",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M15 2H9v4h6V2zM12 11v6M9 14h6" />
    },
    {
      title: "Behavioral\nHealth",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4l3 3M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    },
    {
      title: "Long-Term\nCare (LTC)",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
    },
    {
      title: "Rehab\n& Therapy",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12v4M12 8v.01" />
    },
    {
      title: "Home\nHealth",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M14 2L8 20M16 20L10 2M3 10h18M3 14h18" />
    },
    {
      title: "Specialty\nServices",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17v-4M9 15h6M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    }
  ];

  const isMobile = useIsMobile();

  return (
    <motion.section 
      id="specialties" 
      className="bg-white dark:bg-slate-900 py-16 px-4 sm:py-24 lg:px-12 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={gridContainerVariant}
      custom={isMobile}
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2 variants={itemVariant} custom={isMobile} className="mb-4 font-display text-xl sm:text-[2rem] font-medium text-[#0A2540] dark:text-white lg:text-[2.5rem]">
          Our Clinical Specialties
        </motion.h2>
        <motion.p variants={itemVariant} custom={isMobile} className="mx-auto mb-10 sm:mb-20 max-w-2xl text-sm sm:text-[16px] leading-relaxed text-[#0A2540]/80 dark:text-slate-400 text-center">
          Argyle Medical Staffing connects top-tier talent across high-demand medical fields. We seamlessly match credentialed professionals with facilities nationwide.
        </motion.p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {specialtiesData.map((spec, i) => (
            <motion.div 
              key={i} 
              variants={gridItemVariant} 
              custom={isMobile}
              className="group flex flex-col items-center"
            >
              <LinearGlowCard className="mb-4 sm:mb-6 rounded-full">
                <MagneticButton>
                  <motion.div 
                    whileHover={{ scale: 1.08 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.1 }}
                    className="flex h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px] items-center justify-center rounded-full bg-[#E0F8F8] dark:bg-slate-800 transition-shadow duration-300 group-hover:shadow-lg"
                  >
                    <motion.svg 
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-brand-primary" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      {spec.icon}
                    </motion.svg>
                  </motion.div>
                </MagneticButton>
              </LinearGlowCard>
              <h3 className="whitespace-pre-line text-center text-[12px] sm:text-[13px] lg:text-[15px] font-medium leading-snug text-slate-900 dark:text-slate-100 transition-colors">
                {spec.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Section 7: Facility Value Propositions (Navy Section)
const FacilityProps = () => {
  const isMobile = useIsMobile();
  const cards = [
    {
      title: "Lower Administrative Load",
      desc: "Through coordinated licensing, credentialing, and onboarding support, Argyle helps facilities bring clinicians on site faster.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M9 16h6M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    },
    {
      title: "Speedy Submittals",
      desc: "Receive your first credentialed, qualified candidate within 24-72 hours. Fast sourcing for time-sensitive roles.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19V5M5 12l7-7 7 7" />
    },
    {
      title: "Right Match, Right Role",
      desc: "Clinicians matched beyond basic availability, aligned to your specific needs.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
    },
    {
      title: "Faster Time to Start",
      desc: "Fast, reliable coverage for high-acuity and time-sensitive roles.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    },
    {
      title: "Nationwide Reach",
      desc: "Access top-tier healthcare talent across all 50 states, exactly when and where you need it.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    },
    {
      title: "Consistent, Dependable Coverage",
      desc: "Staffing support that protects care quality and team morale.",
      icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
    }
  ];

  return (
    <section id="facilities" className="bg-[#0A2540] dark:bg-slate-950 py-16 px-4 sm:py-32 lg:px-12 text-white relative overflow-hidden z-0 transition-colors duration-300">
      <AmbientAurora />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Text */}
        <motion.div 
          className="text-center mb-10 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
            exit: { transition: { duration: 0.2 } }
          }}
        >
          <AppleTextReveal 
            text="Strategic healthcare staffing for facilities that need reliable coverage in critical roles"
            className="mb-6 font-display text-xl sm:text-[2rem] font-medium text-white lg:text-[2.75rem] leading-[1.15]"
          />
          <motion.p variants={itemVariant} custom={isMobile} className="mx-auto max-w-2xl text-sm sm:text-[16px] leading-relaxed text-slate-300 text-center mb-10">
            We help hospitals, clinics, and healthcare organizations quickly connect with qualified clinicians for contract, travel, per diem, and permanent positions.
          </motion.p>
          <motion.div variants={itemVariant} custom={isMobile} className="relative inline-block mt-4">
            {/* Infinite breathing glow */}
            <motion.div 
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-primary blur-[20px] rounded-full z-0"
            ></motion.div>
            <motion.div className="relative z-10" whileHover={{ scale: 1.05 }}>
              <MagneticButton>
                <Link to="/request-talent" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-10 py-4 font-bold text-white transition-all hover:bg-brand-primary-dk shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                  Request Talent
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMobile ? 0.05 : 0.15 } },
            exit: { transition: { duration: 0.2 } }
          }}
          custom={isMobile}
        >
          {/* Cards (2 Columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div 
                key={i} 
                variants={cardVariant}
                custom={isMobile}
                className="w-full h-full"
              >
                <StripeTilt className="w-full h-full">
                  <LinearGlowCard className="group h-full flex gap-4 sm:gap-5 rounded-none bg-[#0F3052] dark:bg-slate-900 p-5 sm:p-8 border border-[#1A456E] dark:border-slate-800 transition-colors hover:bg-[#133A63] dark:hover:bg-slate-800 hover:-translate-y-1">
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.2 }}
                      >
                        <motion.svg 
                          className="h-8 w-8 sm:h-10 sm:w-10 text-teal-300 transition-transform duration-300 group-hover:scale-110" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                        >
                          {card.icon}
                        </motion.svg>
                      </motion.div>
                    </div>
                    <div className="relative z-10 pointer-events-none">
                      <h3 className="mb-2 text-[14px] sm:text-[16px] font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#8DA6C1] dark:text-slate-400">
                        {card.desc}
                      </p>
                    </div>
                  </LinearGlowCard>
                </StripeTilt>
              </motion.div>
            ))}
          </div>

          {/* Large Image (1 Column) */}
          <motion.div 
            variants={{
              hidden: { filter: "blur(15px)", opacity: 0 },
              visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
              exit: { filter: "blur(15px)", opacity: 0, transition: { duration: 0.2 } }
            }}
            className="lg:col-span-1 min-h-[250px] sm:min-h-[400px] lg:min-h-full relative rounded-none overflow-hidden shadow-2xl"
          >
            <motion.img 
              src={facilityMeeting} 
              alt="Facility Meeting" 
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-brand-primary/20"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 8: Find Jobs Banner
const FindJobs = () => {
  const isMobile = useIsMobile();
  return (
    <motion.section 
      id="clinicians" 
      className="relative overflow-hidden bg-[#0A2540] dark:bg-slate-950 py-16 sm:py-32 lg:py-40 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Wide Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={collage1} 
          alt="Locum Professional" 
          variants={cinematicBgVariant}
          animate={isMobile ? undefined : { scale: [1, 1.05, 1], x: [0, -10, 0] }}
          transition={{
            scale: { repeat: Infinity, duration: 20, ease: "linear", delay: 1.5 },
            x: { repeat: Infinity, duration: 20, ease: "linear", delay: 1.5 }
          }}
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* Dark overlay specifically matching the dark mode / facility props color */}
        <div className="absolute inset-0 bg-[#0A2540]/80 dark:bg-slate-950/70 z-0 transition-colors duration-300"></div>
      </div>
      
      {/* Content Container pushed to the right */}
      <div className="relative z-10 mx-auto flex max-w-7xl justify-end px-4 sm:px-8 lg:px-12">
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center py-10"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: isMobile ? 0.05 : 0.2, delayChildren: 0.5 } },
            exit: { transition: { duration: 0.2 } }
          }}
        >
          <AppleTextReveal
            text="Find healthcare opportunities that fit how you want to practice"
            className="font-display text-2xl sm:text-[2.5rem] font-extrabold tracking-tight leading-[1.1] text-white md:text-[3.25rem] justify-start"
          />
          <motion.p variants={itemVariant} custom={isMobile} className="mb-8 sm:mb-10 text-sm sm:text-[18px] text-white/90 font-medium">
            Whether you are looking for permanent placement, contract roles, or flexible shifts, your next rewarding role starts here.
          </motion.p>
          <motion.div variants={itemVariant} custom={isMobile}>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <MagneticButton>
                <Link to="/explore-careers" className="inline-flex items-center justify-center rounded bg-brand-primary px-10 py-3.5 text-[15px] font-bold tracking-wide text-white transition-all hover:bg-brand-primary-dk shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                  Explore Careers
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Section 9: Footer moved to Footer.tsx

export default function BartonClone() {
  return (
    <>
      <StatsWheel />
      <FloatingCollageSection />
      <Timeline />
      <USMap />
      <Specialties />
      <FacilityProps />
      <FindJobs />
      <Footer />
    </>
  );
}
