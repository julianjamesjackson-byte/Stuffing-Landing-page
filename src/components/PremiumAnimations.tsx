import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

// -------------------------------------------------------------
// 1. LinearGlowCard
// -------------------------------------------------------------
export const LinearGlowCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundGlow = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0.08),
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: backgroundGlow,
          }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. StripeTilt
// -------------------------------------------------------------
export const StripeTilt = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-5deg", "5deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0%", "0%"] : ["100%", "-100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0%", "0%"] : ["100%", "-100%"]);

  const glareGlow = useMotionTemplate`linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)`;

  function handleMouseMove(e: React.MouseEvent) {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: isMobile ? "flat" : "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className={`pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300 mix-blend-overlay ${isMobile ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}
        style={{
          background: glareGlow,
          x: glareX,
          y: glareY
        }}
      />
    </motion.div>
  );
};

// -------------------------------------------------------------
// 3. AppleTextReveal
// -------------------------------------------------------------
export const AppleTextReveal = ({ text, className = "" }: { text: React.ReactNode; className?: string }) => {
  const isMobile = useIsMobile();
  
  const content = typeof text === 'string' ? text.split(" ") : [text];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0.05 : 0.08 }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      rotateX: isMobile ? 0 : 90, 
      y: isMobile ? 10 : 30, 
      filter: isMobile ? 'blur(0px)' : 'blur(10px)' 
    },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      filter: 'blur(0px)', 
      transition: isMobile 
        ? { duration: 0.4 } 
        : { type: "spring" as any, stiffness: 150, damping: 15 } 
    }
  } as any;

  return (
    <motion.div
      className={`flex flex-wrap items-center justify-center ${className}`}
      style={{ perspective: "1000px" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {content.map((word, i) => (
        <motion.span 
          key={i} 
          variants={child} 
          style={{ display: "inline-block", transformOrigin: "bottom" }}
          className={typeof word === 'string' ? "mr-[0.25em]" : ""}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// -------------------------------------------------------------
// 4. MagneticButton
// -------------------------------------------------------------
export const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

// -------------------------------------------------------------
// 5. AmbientAurora
// -------------------------------------------------------------
export const AmbientAurora = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-[#007C74]/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.1, 1.3, 1],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-[#0F3052]/30 rounded-full blur-[120px]"
      />
    </div>
  );
};
