import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
  {
    id: 'L14mzEJV5Vo',
    title: 'BUDOKAN',
    thumbnail: 'https://img.youtube.com/vi/L14mzEJV5Vo/hqdefault.jpg',
  },
  {
    id: 'ZlFC3jTBNDs',
    title: 'La Perla Del Atlántico',
    thumbnail: 'https://img.youtube.com/vi/ZlFC3jTBNDs/hqdefault.jpg',
  },
  {
    id: 'DRJr_kZCABQ',
    title: 'Prisma',
    thumbnail: 'https://img.youtube.com/vi/DRJr_kZCABQ/hqdefault.jpg',
  },
  {
    id: 'h5P7ka9bYOk',
    title: 'Trastorno',
    thumbnail: 'https://img.youtube.com/vi/h5P7ka9bYOk/hqdefault.jpg',
  },
  {
    id: '6xiAXjG3VQQ',
    title: 'VELO III (Linajes del Poder)',
    thumbnail: 'https://img.youtube.com/vi/6xiAXjG3VQQ/hqdefault.jpg',
  },
  {
    id: 'n-ltcFIJQd8',
    title: 'Velo II (Cielos Desnudos)',
    thumbnail: 'https://img.youtube.com/vi/n-ltcFIJQd8/hqdefault.jpg',
  },
  {
    id: 'eB830dLc9xU',
    title: 'La Perla Del Atlántico - Estudios ION',
    thumbnail: 'https://img.youtube.com/vi/eB830dLc9xU/hqdefault.jpg',
  },
  {
    id: '9DkyiHfbCfc',
    title: 'Extraños En La Noche - ROMAPHONIC',
    thumbnail: 'https://img.youtube.com/vi/9DkyiHfbCfc/hqdefault.jpg',
  },
  {
    id: 'F-5EaHBl5Ag',
    title: 'ULTIMO VELO - CLT (Cuarentena) - Acústico',
    thumbnail: 'https://img.youtube.com/vi/F-5EaHBl5Ag/hqdefault.jpg',
  },
];

export default function KineticVault() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // prevent a drag-release from also firing onClick
  const didDrag = useRef(false);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);

  const handleDragStart = () => {
    didDrag.current = false;
    setIsDragging(true);
  };

  const handleDragEnd = (_: any, info: any) => {
    setIsDragging(false);
    if (Math.abs(info.offset.x) > 100) {
      didDrag.current = true;
      if (info.offset.x < 0) nextSlide();
      else prevSlide();
    }
  };

  const handleCardClick = (index: number) => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section id="vault" className="pt-32 pb-24 bg-obsidian overflow-hidden relative min-h-screen flex flex-col justify-center">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent/20 -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-[2px] h-full bg-accent/20 -translate-x-1/2" />
      </div>

      {/* Section heading */}
      <div className="px-6 md:px-12 mb-16 z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'circOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-[15vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic text-white">
            Bóveda<br />Kinética
          </h2>
          <div className="flex items-center gap-8 mt-4">
            <div className="h-[2px] w-48 bg-accent" />
            <p className="font-mono text-xs text-accent uppercase tracking-[1em] animate-pulse">
              [ TRANSMISIÓN_ACTIVA ]
            </p>
          </div>
        </motion.div>
      </div>

      {/* Carousel track */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <motion.div
          className="relative w-full h-full flex items-center justify-center overflow-visible"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <AnimatePresence initial={false}>
            {VIDEOS.map((video, index) => {
              const offset = index - activeIndex;
              let displayOffset = offset;
              if (offset > VIDEOS.length / 2) displayOffset -= VIDEOS.length;
              if (offset < -VIDEOS.length / 2) displayOffset += VIDEOS.length;
              if (Math.abs(displayOffset) > 3) return null;

              return (
                <VideoCard
                  key={video.id}
                  video={video}
                  offset={displayOffset}
                  isActive={index === activeIndex}
                  isDragging={isDragging}
                  onClick={() => handleCardClick(index)}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navigation — in normal flow, never clipped by overflow-hidden */}
      <div className="relative z-20 mt-10 px-6 md:px-12 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-3">
          <span className="hidden md:block font-mono text-[10px] text-accent/60 uppercase tracking-widest">
            Navegación_Manual
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 md:p-5 border-2 border-white/10 hover:border-accent hover:text-accent transition-all duration-300 group brutalist-shadow-small bg-obsidian"
              aria-label="Video anterior"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-5 border-2 border-white/10 hover:border-accent hover:text-accent transition-all duration-300 group brutalist-shadow-small bg-obsidian"
              aria-label="Siguiente video"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 min-w-0">
          <div className="flex gap-1 flex-wrap justify-end">
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1 transition-all duration-500 ${i === activeIndex ? 'w-6 md:w-10 bg-accent' : 'w-2 md:w-3 bg-white/10 hover:bg-white/30'}`}
                aria-label={`Video ${i + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.5em]">
            {activeIndex + 1} / {VIDEOS.length}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

interface VideoCardProps {
  video: { id: string; title: string; thumbnail: string };
  offset: number;
  isActive: boolean;
  isDragging: boolean;
  onClick: () => void;
}

function VideoCard({ video, offset, isActive, isDragging, onClick }: VideoCardProps) {
  const xOffset = offset * 380;
  const scale = isActive ? 1.05 : 0.8;
  const opacity = Math.max(0, 1 - Math.abs(offset) * 0.4);
  const blur = Math.abs(offset);
  const zIndex = 100 - Math.abs(Math.round(offset * 10));

  return (
    <motion.div
      initial={false}
      animate={{ x: xOffset, scale, opacity, filter: `blur(${blur}px)`, zIndex }}
      transition={{ type: 'spring', stiffness: 260, damping: 30, mass: 1.2 }}
      onClick={onClick}
      className="absolute w-[90vw] md:w-[700px] aspect-video group cursor-pointer"
    >
      <div
        className={`relative w-full h-full bg-obsidian border-4 overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] transition-colors duration-500 ${
          isActive ? 'border-accent' : 'border-white/10'
        }`}
      >
        {isActive ? (
          /* pointer-events-none during drag so the swipe gesture isn't swallowed by the iframe */
          <div className={`absolute inset-0 z-40 bg-black ${isDragging ? 'pointer-events-none' : ''}`}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover grayscale contrast-150 brightness-50"
            />
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
            <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
              <div className="w-3 h-3 bg-white/20" />
              <span className="font-mono text-[10px] text-accent font-black uppercase tracking-[0.5em]">
                ID_{video.id}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-10 z-10 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent">
              <div className="h-[2px] w-12 bg-accent mb-2" />
              <h3 className="font-serif text-2xl md:text-4xl font-black text-white italic uppercase leading-tight tracking-tighter max-w-[80%]">
                {video.title}
              </h3>
            </div>
          </>
        )}
      </div>

      <div className="absolute -bottom-12 right-0 font-mono text-[10px] text-white/20 uppercase tracking-[1em] rotate-180 [writing-mode:vertical-rl]">
        KINETIC_VAULT_V2.0
      </div>
    </motion.div>
  );
}
