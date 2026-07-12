import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import USMapGraphic from './USMapGraphic';
import facilityMeeting from '../assets/facility_meeting.png';
import collage1 from '../assets/collage_1.png';

// Section 2: Stats Badge Wheel
const StatsWheel = () => {
  const leftStats = [
    { stat: "25+", text: "Years of experience" },
    { stat: "1M+", text: "Network of pre-vetted professionals" },
    { stat: "24/7", text: "Personalized support" }
  ];
  
  const rightStats = [
    { stat: "50", text: "State coverage" },
    { stat: "4.4 ★", text: "Rating from clinicians on TrustPilot" },
    { stat: "83%", text: "Faster credentialing" }
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 sm:py-24 sm:px-8 lg:px-24">
      {/* Subtle Background Glows */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/4 rounded-full bg-brand-primary-lt/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-[600px] w-[600px] max-w-full translate-x-1/3 -translate-y-1/4 rounded-full bg-brand-accent-lt/20 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="mb-10 sm:mb-20 font-display text-2xl sm:text-3xl font-bold text-brand-ink lg:text-[2.5rem] animate-fade-up">
          Precision Healthcare Staffing Nationwide
        </h2>

        <div className="relative flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-8">
          
          {/* Connecting SVG Lines (Desktop Only) */}
          <div 
            className="absolute inset-0 hidden items-center justify-center lg:flex pointer-events-none z-0 animate-fade-up" 
            style={{ animationDelay: '600ms' }}
          >
            <svg width="800" height="300" className="opacity-20 text-brand-ink">
              {/* Left Lines */}
              <line x1="200" y1="50" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
              <line x1="200" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
              <line x1="200" y1="250" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
              {/* Right Lines */}
              <line x1="600" y1="50" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
              <line x1="600" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
              <line x1="600" y1="250" x2="400" y2="150" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Left Column (Stats) */}
          <div className="relative z-10 flex w-full flex-col items-center gap-6 lg:w-1/3 lg:items-end lg:pr-8">
            {leftStats.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center rounded-full border border-slate-200 bg-white p-1.5 pr-4 sm:pr-6 shadow-sm transition-transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="flex h-9 sm:h-11 items-center justify-center rounded-full bg-brand-primary-lt px-3 sm:px-5 text-sm sm:text-base font-bold text-[#005a54]">
                  {item.stat}
                </div>
                <span className="ml-3 sm:ml-4 text-sm sm:text-base font-medium text-brand-ink/90">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Center Hub */}
          <div 
            className="relative z-10 flex shrink-0 items-center justify-center animate-fade-up"
            style={{ animationDelay: '300ms', animationFillMode: 'both' }}
          >
            {/* Concentric Precision Rings */}
            <div className="flex h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] items-center justify-center rounded-full bg-[#D5F2F2] animate-[pulse_4s_ease-in-out_infinite]">
              <div className="flex h-[130px] w-[130px] sm:h-[180px] sm:w-[180px] items-center justify-center rounded-full bg-[#87E1DE]">
                <div tabIndex={0} role="button" aria-label="Argyle Brand Emblem" className="group flex h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] cursor-pointer items-center justify-center rounded-full border-[4px] sm:border-[6px] border-brand-primary bg-white shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
                  {/* J Logo */}
                    <div className="relative flex items-center justify-center text-[2.5rem] sm:text-[3.5rem] font-display font-extrabold tracking-tighter text-brand-primary transition-transform duration-500 group-hover:rotate-12">
                    <span className="absolute">A</span>
                    {/* Minimalist ring to mimic the stylized 'B' swirl */}
                    <div className="absolute h-[50px] w-[50px] sm:h-[72px] sm:w-[72px] rounded-full border-[4px] sm:border-[6px] border-transparent border-b-brand-primary border-l-brand-primary -rotate-45 transition-transform duration-700 group-hover:rotate-[135deg]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Stats) */}
          <div className="relative z-10 flex w-full flex-col items-center gap-6 lg:w-1/3 lg:items-start lg:pl-8">
            {rightStats.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center rounded-full border border-slate-200 bg-white p-1.5 pr-4 sm:pr-6 shadow-sm transition-transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${(i + 3) * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="flex h-9 sm:h-11 items-center justify-center rounded-full bg-brand-primary-lt px-3 sm:px-5 text-sm sm:text-base font-bold text-[#005a54]">
                  {item.stat}
                </div>
                <span className="ml-3 sm:ml-4 text-sm sm:text-base font-medium text-brand-ink/90">{item.text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Text */}
        <p className="mx-auto mt-10 sm:mt-20 max-w-3xl font-sans text-sm sm:text-[1.05rem] leading-relaxed text-slate-600">
          At Argyle Staffing and Recruiting, we make healthcare hiring simple, strategic, and reliable. Our experienced recruiters connect healthcare organizations with highly qualified professionals who are ready to make an immediate impact, while helping clinicians discover career opportunities that align with their skills and goals. By combining industry expertise with personalized service, we deliver staffing solutions that save time, reduce hiring challenges, and support exceptional patient care. When hiring matters most, healthcare organizations trust Argyle to deliver the right talent with confidence.
        </p>
      </div>
    </section>
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

  // Scroll-linked smooth parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 });

  // Left images drift up, right images drift down
  const yLeft = useTransform(smoothProgress, [0, 1], [60, -60]);
  const yRight = useTransform(smoothProgress, [0, 1], [-60, 60]);
  const parallaxMap = [yLeft, yRight, yLeft, yRight];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0, 0, 0.2, 1] as const },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#F8FAFC] py-16 px-4 sm:py-32 sm:px-8 lg:py-56 lg:px-24">
      {/* Background Ambient Glows */}
      <div className="absolute left-1/4 top-1/4 h-[800px] w-[800px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FCF5E3]/50 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-1/4 h-[800px] w-[800px] max-w-full translate-x-1/2 translate-y-1/2 rounded-full bg-[#D5F2F2]/50 blur-[120px] pointer-events-none"></div>

      {/* Floating Images — 4 Corner Frame */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
      >
        <div className="relative w-full h-full max-w-[1400px] mx-auto">
          {COLLAGE_IMAGES.map((img, i) => (
            <motion.img
              key={i}
              variants={imageVariants}
              style={{ y: parallaxMap[i] }}
              src={img.src}
              alt={img.alt}
              className={`absolute ${img.pos} w-56 h-72 object-cover rounded-3xl shadow-2xl border border-slate-100/50 pointer-events-auto transition-transform duration-500 ease-in-out hover:scale-105`}
            />
          ))}
        </div>
      </motion.div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0, 0, 0.2, 1] }}
        className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center px-4"
      >
        <h2 className="mb-6 font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#0A2540] md:text-5xl lg:text-[3.5rem] leading-[1.1]">
          More control over your healthcare career.<br />
          <span className="font-bold">Less friction getting there.</span>
        </h2>
        
        <p className="mb-10 text-base md:text-[17px] leading-relaxed text-[#0A2540]/80">
          We bring you opportunities worth saying yes to. Whether you are seeking permanent placement, contract roles, or flexible per diem shifts, Argyle Staffing and Recruiting coordinates the details. We streamline credentialing, licensing, and onboarding so physicians, nurses, and allied health professionals can find balance, career growth, and high earning potential in rewarding environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto">
          <Link to="/explore-careers" className="inline-flex items-center justify-center rounded bg-brand-primary px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-primary-dk hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Explore Careers
          </Link>
          <Link to="/request-talent" className="inline-flex items-center justify-center rounded border-2 border-brand-primary bg-white px-8 py-3.5 text-sm font-bold text-brand-primary transition-all hover:bg-slate-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Request Talent
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

// Section 4: Logistics Timeline
const Timeline = () => {
  const steps = [
    {
      title: "Recruiter\nReview",
      // Puzzle piece
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v2h1a3 3 0 0 1 0 6h-1v2a3 3 0 0 0 3 3h2v-1a3 3 0 0 1 6 0v1h2a3 3 0 0 0 3-3v-2h-1a3 3 0 0 1 0-6h1V8a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3Z" />
    },
    {
      title: "Credential\nVerification",
      // Clipboard check
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    },
    {
      title: "Job\nMatching",
      // Plane
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 3.5L7 13.5l-3.5-.5L2 14.5l3.5 3.5L9 22l1.5-1.5-.5-3.5 2-2 3.5 6l1.2-.7c.4-.2.7-.6.6-1.1z" />
    },
    {
      title: "Interview\nCoordination",
      // Document
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
    },
    {
      title: "Offer &\nOnboarding",
      // Banknote
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 7v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    },
    {
      title: "Ongoing\nSupport",
      // Headset
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        {/* Header Text */}
        <h2 className="mb-4 font-display text-xl sm:text-[2rem] font-medium leading-[1.2] text-[#3A4B5C] lg:text-[2.5rem]">
          With Argyle Medical Staffing, you're not walking<br className="hidden md:block" />
          {' '}into your next role alone.<br className="hidden md:block" />
          {' '}Let us handle the details so you can focus on what you do best.
        </h2>

        {/* Timeline Graphic */}
        <div className="relative mt-16 md:mt-24 flex flex-col md:flex-row w-full items-center justify-between">
          {/* Dashed Line (Vertical on mobile, Horizontal on md) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-brand-primary/40 z-0 md:translate-x-0 md:left-0 md:right-0 md:top-12 md:bottom-auto md:w-auto md:h-[2px] md:border-l-0 md:border-t-2"></div>
          
          {/* Start Label */}
          <div className="relative z-10 bg-white pb-6 md:pb-0 md:pr-4 font-sans text-[15px] font-medium text-[#3A4B5C]">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
              You
            </div>
          </div>

          {/* Icons Flex Container */}
          <div className="relative z-10 flex flex-col md:flex-row flex-1 items-center justify-around gap-8 md:gap-0 px-4 lg:px-8 py-4 md:py-0">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group bg-white md:bg-transparent py-2 md:py-0 px-2 md:px-0">
                <div className="mb-4 flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#E0F8F8] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-8 w-8 md:h-10 md:w-10 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="whitespace-pre-line text-center text-[14px] md:text-[15px] font-bold leading-tight text-slate-900">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* End Label */}
          <div className="relative z-10 bg-white pt-6 md:pt-0 md:pl-4 font-sans text-[15px] font-medium text-[#3A4B5C] text-center md:text-right">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span>Your Next<br className="hidden md:block" /> Role</span>
              <div className="h-1.5 w-1.5 rounded-full bg-brand-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 5: US Map Search
const USMap = () => (
  <section className="bg-slate-50 py-24">
    <div className="flex flex-col items-center text-center px-8 lg:px-24">
      <h2 className="mb-4 font-display text-2xl sm:text-4xl font-extrabold text-brand-ink">
        Nationwide Coverage
      </h2>
      <p className="text-base sm:text-lg text-brand-ink/70">We place providers in all 50 states.</p>
    </div>
    <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl px-2 sm:px-6 h-[300px] sm:h-[450px] md:h-[700px] lg:h-[800px]">
      <USMapGraphic />
    </div>
  </section>
);

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
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
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

  return (
    <section id="specialties" className="bg-white py-24 px-4 lg:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 font-display text-xl sm:text-[2rem] font-medium text-[#0A2540] lg:text-[2.5rem]">
          Our Clinical Specialties
        </h2>
        <p className="mx-auto mb-10 sm:mb-20 max-w-2xl text-sm sm:text-[16px] leading-relaxed text-[#0A2540]/80 text-center">
          Argyle Medical Staffing connects top-tier talent across high-demand medical fields. We seamlessly match credentialed professionals with facilities nationwide.
        </p>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {specialtiesData.map((spec, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="mb-4 sm:mb-6 flex h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px] items-center justify-center rounded-full bg-[#E0F8F8] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md">
                <svg className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {spec.icon}
                </svg>
              </div>
              <h3 className="whitespace-pre-line text-center text-[12px] sm:text-[13px] lg:text-[15px] font-medium leading-snug text-slate-900 transition-colors">
                {spec.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: Facility Value Propositions (Navy Section)
// Section 7: Facility Value Propositions (Navy Section)
const FacilityProps = () => {
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
    <section id="facilities" className="bg-[#0A2540] py-16 px-4 sm:py-32 lg:px-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Text */}
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="mb-6 font-display text-xl sm:text-[2rem] font-medium text-white lg:text-[2.75rem] leading-[1.15]">
            Strategic healthcare staffing for facilities<br className="hidden md:block" />
            {' '}that need reliable coverage in critical roles
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-[16px] leading-relaxed text-slate-300 text-center">
            Argyle Medical Staffing provides comprehensive staffing solutions for hospitals, health systems, and healthcare organizations facing urgent gaps in coverage - coast-to-coast. From rural clinics to major health systems, we move quickly, match thoughtfully, and stay accountable from first call through start date.
          </p>
          <div className="mt-10">
            <Link to="/request-talent" className="inline-flex items-center justify-center rounded-full bg-brand-primary px-10 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-brand-primary-dk hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
              Request Talent
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cards (2 Columns) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="flex gap-4 sm:gap-5 rounded-none bg-[#0F3052] p-5 sm:p-8 border border-[#1A456E] transition-colors hover:bg-[#133A63]">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 text-teal-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {card.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-[14px] sm:text-[16px] font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#8DA6C1]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Image (1 Column) */}
          <div className="lg:col-span-1 min-h-[250px] sm:min-h-[400px] lg:min-h-full relative rounded-none overflow-hidden shadow-2xl">
            <img 
              src={facilityMeeting} 
              alt="Facility Meeting" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Teal Overlay Mix Blend */}
            <div className="absolute inset-0 bg-brand-primary/50 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-brand-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 8: Find Jobs Banner
const FindJobs = () => (
  <section id="clinicians" className="relative overflow-hidden bg-[#0A2540] py-16 sm:py-32 lg:py-40">
    {/* Wide Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={collage1} 
        alt="Locum Professional" 
        className="h-full w-full object-cover object-[center_30%]"
      />
      {/* Gradient overlay to ensure text readability on the right side */}
      <div className="absolute inset-0 bg-[#0A2540]/80"></div>
    </div>
    
    {/* Content Container pushed to the right */}
    <div className="relative z-10 mx-auto flex max-w-7xl justify-end px-4 sm:px-8 lg:px-12">
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-10">
        <h2 className="mb-4 font-display text-2xl sm:text-[2.5rem] font-extrabold tracking-tight leading-[1.1] text-white md:text-[3.25rem]">
          Find healthcare opportunities<br className="hidden md:block" />
          {' '}that fit how you want to practice
        </h2>
        <p className="mb-8 sm:mb-10 text-sm sm:text-[18px] text-white/90 font-medium">
          Whether you are looking for permanent placement, contract roles, or flexible shifts, your next rewarding role starts here.
        </p>
        <div>
          <Link to="/explore-careers" className="inline-flex items-center justify-center rounded bg-brand-primary px-10 py-3.5 text-[15px] font-bold tracking-wide text-white transition-all hover:bg-brand-primary-dk shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            Explore Careers
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Section 9: Footer
const Footer = () => {


  return (
    <footer className="bg-[#051A2E] pt-12 sm:pt-20 pb-8 px-4 lg:px-12 text-white font-sans">
      <h2 className="sr-only">Footer Directory</h2>
      <div className="mx-auto max-w-7xl">
        {/* Top Link Grids */}
        <h3 className="sr-only">Directory Sections</h3>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4 border-b border-[#1A334D] pb-10 sm:pb-16">
          {/* Col 1 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Terms of Service</a></li>
            </ul>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Facilities</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><Link to="/request-talent" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Request Talent</Link></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Credentialing Support</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Contingent Search</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Direct Placement</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Clinicians</h4>
            <ul className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <li><Link to="/explore-careers" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Explore Careers</Link></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Travel & Contract</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Career Support</a></li>
              <li><a href="#" className="hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm px-1 py-0.5">Licensing</a></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold text-[#8DA6C1] uppercase tracking-wider">Corporate Headquarters</h4>
            <div className="flex flex-col gap-3 text-[13px] font-bold text-white">
              <p>1755 Argyle Ave #609<br />Los Angeles, CA 90028</p>
              <p>(708) 397-9503</p>
              <p>info@argylestaffing.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2" style={{ color: '#ffffff', borderColor: '#ffffff' }}>
              <span className="text-xl font-bold" style={{ color: '#ffffff' }}>A</span>
            </div>
            <span className="font-display text-[17px] font-bold text-white leading-tight">
              Argyle Medical<br />Staffing
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-[17px] tracking-tight">Trustpilot</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-bold text-white uppercase tracking-wider">Follow Us On</span>
              <div className="flex gap-4 items-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1A334D] flex flex-col items-center justify-between gap-4 md:flex-row text-[13px] text-slate-400">
          <div>© 2026 Argyle Staffing and Recruiting</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Terms of Use</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
