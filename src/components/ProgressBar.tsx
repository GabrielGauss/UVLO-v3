import { motion, useScroll, useSpring } from 'motion/react';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 top-0 w-[2px] h-full bg-accent origin-top z-[9998] pointer-events-none"
      style={{ scaleY }}
    />
  );
}
