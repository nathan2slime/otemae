import { AnimationProps, MotionProps } from 'framer-motion';

export const animationGhostLoader: MotionProps = {
  style: {
    backgroundColor: '#f2f2f2',
  },
  animate: {
    opacity: [1, 0.5, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop',
  },
};

export const animationModal = {
  content: {
    initial: { scale: 0.7, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', duration: 0.3 },
    },
    exit: {
      scale: 0.7,
      opacity: 0,
      transition: { type: 'spring', duration: 0.15 },
    },
  } as AnimationProps,
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  } as AnimationProps,
};
