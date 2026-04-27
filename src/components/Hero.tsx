import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const bg01 = '/images/bg01.png';
const uvlologowt = '/images/uvlologowt.png';

export default function Hero() {
  const [isGlitching, setIsGlitching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 1000], [0, 400]);
  const logoY = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-obsidian/65 to-obsidian z-10" />
        <img
          src={bg01}
          alt="Live Performance"
          className="w-full h-full object-cover opacity-55 scale-110 contrast-130 saturate-[0.3]"
        />
        
        {/* Watermark */}
        <motion.div 
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.05, rotate: 0 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-auto pointer-events-none z-0"
        >
          <img 
            src={uvlologowt} 
            alt="" 
            className="w-full h-auto opacity-20" 
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: logoY, opacity }}
        className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center"
      >
        <div className="relative w-full flex justify-center perspective-1000">
          {/* Glitch Layers */}
          {isGlitching && (
            <>
              <motion.div 
                animate={{ x: [-5, 5, -5], opacity: [0.5, 0.8, 0.5] }}
                className="absolute inset-0 z-10 mix-blend-screen invert opacity-30"
              >
                <img 
                  src={uvlologowt} 
                  alt="" 
                  className="w-full h-auto max-h-[29vh] object-contain translate-x-2" 
                />
              </motion.div>
              <motion.div 
                animate={{ x: [5, -5, 5], opacity: [0.5, 0.8, 0.5] }}
                className="absolute inset-0 z-10 mix-blend-multiply opacity-30"
              >
                <img 
                  src={uvlologowt} 
                  alt="" 
                  className="w-full h-auto max-h-[29vh] object-contain -translate-x-2" 
                />
              </motion.div>
            </>
          )}
 
          <motion.img 
            src={uvlologowt} 
            alt="Ultimo Velo Logo" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: isGlitching ? 'hue-rotate(180deg) brightness(2) saturate(3)' : 'hue-rotate(0deg) brightness(1) saturate(1)'
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-auto max-h-[29vh] object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] relative z-20"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:block h-px w-12 bg-white/10 shrink-0" />
            <p className="font-mono text-[9px] tracking-[0.3em] sm:tracking-[0.6em] md:tracking-[1em] uppercase text-white/40 text-center">Mar del Plata · Hard Rock · Desde 2017</p>
            <div className="hidden sm:block h-px w-12 bg-white/10 shrink-0" />
          </div>
          
          <motion.a 
            href="#vault" 
            whileHover={{ scale: 1.05, letterSpacing: '0.4em' }}
            whileTap={{ scale: 0.95 }}
            className="industrial-btn !px-12 !py-6 text-[10px] tracking-[0.4em] font-bold"
          >
            Ingresar a la Bóveda
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[7px] text-white/10 uppercase tracking-[0.4em]">Deslizar</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-accent/20 to-transparent" />
      </motion.div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/10" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/10" />
      <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-white/10" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-white/10" />
    </section>
  );
}
