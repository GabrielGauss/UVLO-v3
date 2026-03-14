import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
  {
    id: 'L14mzEJV5Vo',
    title: 'BUDOKAN',
    thumbnail: 'https://img.youtube.com/vi/L14mzEJV5Vo/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=L14mzEJV5Vo'
  },
  {
    id: 'ZlFC3jTBNDs',
    title: 'La Perla Del Atlántico',
    thumbnail: 'https://img.youtube.com/vi/ZlFC3jTBNDs/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=ZlFC3jTBNDs'
  },
  {
    id: 'DRJr_kZCABQ',
    title: 'Prisma',
    thumbnail: 'https://img.youtube.com/vi/DRJr_kZCABQ/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=DRJr_kZCABQ'
  },
  {
    id: 'h5P7ka9bYOk',
    title: 'Trastorno',
    thumbnail: 'https://img.youtube.com/vi/h5P7ka9bYOk/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=h5P7ka9bYOk'
  },
  {
    id: '6xiAXjG3VQQ',
    title: 'VELO III (Linajes del Poder)',
    thumbnail: 'https://img.youtube.com/vi/6xiAXjG3VQQ/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=6xiAXjG3VQQ'
  },
  {
    id: 'n-ltcFIJQd8',
    title: 'Velo II (Cielos Desnudos)',
    thumbnail: 'https://img.youtube.com/vi/n-ltcFIJQd8/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=n-ltcFIJQd8'
  },
  {
    id: 'eB830dLc9xU',
    title: 'La Perla Del Atlántico - Estudios ION',
    thumbnail: 'https://img.youtube.com/vi/eB830dLc9xU/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=eB830dLc9xU'
  },
  {
    id: '9DkyiHfbCfc',
    title: 'Extraños En La Noche - ROMAPHONIC',
    thumbnail: 'https://img.youtube.com/vi/9DkyiHfbCfc/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=9DkyiHfbCfc'
  },
  {
    id: 'F-5EaHBl5Ag',
    title: 'ULTIMO VELO - CLT (Cuarentena) - Acústico',
    thumbnail: 'https://img.youtube.com/vi/F-5EaHBl5Ag/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=F-5EaHBl5Ag'
  }
];

export default function KineticVault() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  return (
    <section id="vault" className="py-64 bg-obsidian overflow-hidden relative min-h-screen flex flex-col justify-center">
      {/* Brutalist Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent/20 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[2px] h-full bg-accent/20 -translate-x-1/2" />
      </div>
      
      <div className="px-6 md:px-12 mb-32 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-[15vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic text-white">
              Bóveda<br/>Kinética
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-[2px] w-48 bg-accent" />
            <p className="font-mono text-xs text-accent uppercase tracking-[1em] animate-pulse">
              [ TRANSMISIÓN_ACTIVA ]
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center">
        <motion.div 
          className="relative w-full max-w-full h-full flex items-center justify-center perspective-2000 overflow-visible"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence initial={false}>
            {VIDEOS.map((video, index) => {
              const offset = index - activeIndex;
              
              // Handle wrapping for infinite feel
              let displayOffset = offset;
              if (offset > VIDEOS.length / 2) displayOffset -= VIDEOS.length;
              if (offset < -VIDEOS.length / 2) displayOffset += VIDEOS.length;
              
              // Render more cards for a fuller look
              if (Math.abs(displayOffset) > 3) return null;

              const isActive = index === activeIndex;

              return (
                <VideoCard 
                  key={video.id}
                  video={video}
                  offset={displayOffset}
                  isActive={isActive}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Controls - Hardware Style */}
        <div className="absolute -bottom-32 left-0 w-full px-12 flex items-center justify-between z-30">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-accent/60 uppercase tracking-widest">Navegación_Manual</span>
            <div className="flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="p-6 border-2 border-white/10 hover:border-accent hover:text-accent transition-all group brutalist-shadow-small bg-obsidian"
              >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-6 border-2 border-white/10 hover:border-accent hover:text-accent transition-all group brutalist-shadow-small bg-obsidian"
              >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-4">
            <div className="flex gap-2">
              {VIDEOS.map((_, i) => (
                <div 
                  key={i}
                  className={`h-1 transition-all duration-500 ${i === activeIndex ? 'w-16 bg-accent' : 'w-4 bg-white/10'}`}
                />
              ))}
            </div>
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.5em]">
              Sincronización: {activeIndex + 1} / {VIDEOS.length}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function VideoCard({ video, offset, isActive, onClick }: { video: any, offset: number, isActive: boolean, onClick: () => void, key?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Refined flat logic for a cleaner carousel
  const xOffset = offset * 380; 
  const zOffset = 0;
  const rotateY = 0;
  const scale = isActive ? 1.05 : 0.8;
  const opacity = 1 - Math.abs(offset) * 0.4;
  const blur = Math.abs(offset) * 1;
  const zIndex = 100 - Math.abs(Math.round(offset * 10));

  return (
    <motion.div
      ref={containerRef}
      initial={false}
      animate={{
        x: xOffset,
        z: zOffset,
        rotateY,
        scale,
        opacity: Math.max(0, opacity),
        filter: `blur(${blur}px)`,
        zIndex,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 1.2
      }}
      onClick={onClick}
      className="absolute w-[90vw] md:w-[700px] aspect-video group cursor-pointer"
    >
      {/* Main Card - Brutalist Frame */}
      <div className={`relative w-full h-full bg-obsidian border-4 ${isActive ? 'border-accent' : 'border-white/10'} overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-colors duration-500`}>
        {/* Thumbnail / Video Container */}
        <div className="absolute inset-0 z-0">
          {isActive ? (
            <div className="absolute inset-0 z-40 bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ) : (
            <>
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover grayscale contrast-150 brightness-50"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            </>
          )}
        </div>

        {/* UI Overlays - Only show for non-active cards or as small labels */}
        {!isActive && (
          <>
            <div className="absolute top-8 left-8 z-20 flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white/20" />
                <div className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.5em]">
                  ID_{video.id}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-10 z-10 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent">
              <div className="flex flex-col gap-2">
                <div className="h-[2px] w-12 bg-accent" />
                <h3 className="font-serif text-2xl md:text-4xl font-black text-white italic uppercase leading-tight tracking-tighter max-w-[80%]">
                  {video.title}
                </h3>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Hardware Label */}
      <div className="absolute -bottom-12 right-0 font-mono text-[10px] text-white/20 uppercase tracking-[1em] rotate-180 [writing-mode:vertical-rl]">
        KINETIC_VAULT_V2.0
      </div>
    </motion.div>
  );
}
