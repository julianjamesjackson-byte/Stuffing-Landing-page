import type { Variants, Variant } from 'framer-motion';

export const nurseImageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.1 } 
  }
};

export const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.25, delayChildren: 0.5, ease: [0.33, 1, 0.68, 1] } 
  }
};

export const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const headerVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const navItemVariant: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
  }
};

export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
  }
};

export const h1Variant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const buttonHoverVariant: Variant = {
  scale: 1.04,
  y: -2,
  transition: { duration: 0.3 }
};

export const visContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.2, ease: [0.33, 1, 0.68, 1] } 
  }
};

export const corePulseVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.2 } 
  }
};

export const nodeDockVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: 0, y: 0 },
  visible: (custom: {x: number, y: number}) => ({
    opacity: 1,
    scale: 1,
    x: custom.x,
    y: custom.y,
    transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.8 }
  }),
  dimmed: (custom: {x: number, y: number}) => ({
    opacity: 0.4,
    scale: 0.95,
    x: custom.x,
    y: custom.y,
    transition: { duration: 0.4 }
  }),
  active: (custom: {x: number, y: number}) => ({
    opacity: 1,
    scale: 1.1,
    x: custom.x,
    y: custom.y,
    boxShadow: "0px 0px 20px rgba(0, 124, 116, 0.6)",
    transition: { type: "spring", stiffness: 200, damping: 12 }
  })
};

export const lineDrawVariant: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 0.2, 
    transition: { duration: 1, ease: "easeInOut" } 
  },
  active: {
    pathLength: 1,
    opacity: 1,
    strokeWidth: 3,
    filter: "drop-shadow(0px 0px 6px rgba(0, 124, 116, 0.8))",
    transition: { duration: 0.3 }
  },
  dimmed: {
    pathLength: 1,
    opacity: 0.05,
    transition: { duration: 0.4 }
  }
};

export const detailPopupVariant: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 } 
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

