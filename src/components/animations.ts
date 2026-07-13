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

