import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const ringScale = useMotionValue(1);
  const springScale = useSpring(ringScale, { stiffness: 200, damping: 22 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = () => ringScale.set(2.2);
    const onLeave = () => ringScale.set(1);

    window.addEventListener('mousemove', onMove, { passive: true });

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [mouseX, mouseY, ringScale]);

  return (
    <>
      {/* Dot — instant follow */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-10000"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Ring — spring follow + mix-blend-difference for the inversion effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-9999 mix-blend-difference"
        style={{ x: ringX, y: ringY, scale: springScale, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
