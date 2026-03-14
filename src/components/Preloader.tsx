import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Safety fallback: ensure preloader hides even if there's a crash or delay
    const safetyTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10001] bg-obsidian flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0, filter: 'blur(20px)' }}
            animate={{ 
              scale: [0, 1.2, 1],
              filter: ['blur(20px)', 'blur(0px)', 'blur(10px)', 'blur(0px)'],
              color: ['#FFFFFF', '#FFFFFF', '#FFFFFF']
            }}
            transition={{ 
              duration: 1.5,
              times: [0, 0.6, 0.8, 1],
              ease: "easeInOut"
            }}
            className="relative"
          >
            <img
              src="./ico-wt.png"
              alt="Ultimo Velo Icon"
              className="w-32 h-32 object-contain"
              onError={(e) => {
                // Fallback if image fails
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-6xl font-serif text-white">UV</span>';
                }
              }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
