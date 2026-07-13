export const nurseImageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.1 } 
  }
};

export const containerVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.25, delayChildren: 0.5, ease: [0.33, 1, 0.68, 1] } 
  }
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const headerVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const navItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
  }
};

export const wordVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
  }
};

export const h1Variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  }
};

export const buttonHoverVariant = {
  scale: 1.04,
  y: -2,
  transition: { duration: 0.3 }
};

