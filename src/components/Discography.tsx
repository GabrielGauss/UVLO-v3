import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import ScrambleText from './ScrambleText';

const SPOTIFY = 'https://open.spotify.com/artist/5Ydrxg0oDTFM50mpcJeH1w';

const LP = {
  title: 'Ultimo Velo',
  label: 'Álbum de Estudio',
  type: 'LP',
  cover: 'https://img.youtube.com/vi/olYXaVrfyLw/hqdefault.jpg',
  description: 'El único álbum de estudio. Hard Rock directo, grabado con la crudeza de cuatro músicos que llevan Mar del Plata en las venas.',
  url: 'https://www.youtube.com/watch?v=olYXaVrfyLw',
};

const EPS = [
  { title: 'Trastorno', type: 'EP', cover: 'https://img.youtube.com/vi/h5P7ka9bYOk/hqdefault.jpg', url: SPOTIFY },
  { title: 'Prisma',    type: 'EP', cover: 'https://img.youtube.com/vi/DRJr_kZCABQ/hqdefault.jpg', url: SPOTIFY },
  { title: 'Budokan',   type: 'EP', cover: 'https://img.youtube.com/vi/L14mzEJV5Vo/hqdefault.jpg', url: SPOTIFY },
];

// ─── 3-D tilt wrapper ────────────────────────────────────────────────────────
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 300, damping: 30 });
  const sry = useSpring(ry, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        ry.set(x * 12);
        rx.set(-y * 12);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Discography() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [scrollDist, setScrollDist] = useState(0);
  const [sectionH,   setSectionH]   = useState<string | undefined>(undefined);

  useEffect(() => {
    const measure = () => {
      const desktop = window.innerWidth >= 768;
      if (!desktop || !trackRef.current) {
        setScrollDist(0);
        setSectionH(undefined);
        return;
      }
      const dist = Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 128);
      setScrollDist(dist);
      setSectionH(`${dist + window.innerHeight}px`);
    };

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    measure();
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xRaw   = useTransform(scrollYProgress, [0, 1], [0, -scrollDist]);
  const x      = useSpring(xRaw, { stiffness: 80, damping: 25, restDelta: 0.5 });
  const hintOp = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="discography"
      className="relative bg-obsidian border-b border-white/5"
      style={sectionH ? { height: sectionH } : undefined}
    >
      {/* Atmospheric glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

      {/* ── Sticky shell ── */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center gap-0">

        {/* Header */}
        <div className="px-6 md:px-14 pt-10 pb-6 z-10 relative flex items-end justify-between flex-wrap gap-4">
          <div>
            <ScrambleText
              text="Discografía"
              as="h2"
              className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-3"
            />
            <div className="h-0.5 w-32 bg-accent" />
          </div>
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-accent transition-colors duration-300 border border-white/10 hover:border-accent px-5 py-3"
          >
            <ExternalLink size={11} />
            Escuchar en Spotify
          </a>
        </div>

        {/* ── Horizontal track ── */}
        <motion.div
          ref={trackRef}
          style={{ x: scrollDist > 0 ? x : 0 }}
          className="flex gap-6 pl-6 md:pl-14 pr-32 items-stretch flex-col md:flex-row"
        >
          {/* LP card */}
          <TiltCard className="flex-shrink-0 w-full md:w-[560px]">
            <a
              href={LP.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-[55vh] md:h-[58vh] w-full border-2 border-white/10 hover:border-accent transition-colors duration-500 overflow-hidden"
            >
              <img
                src={LP.cover}
                alt={LP.title}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/30 to-transparent" />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute bottom-0 p-8">
                <span className="font-mono text-[9px] text-accent uppercase tracking-[1em] font-black block mb-3">
                  {LP.type} — {LP.label}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-white italic uppercase tracking-tighter leading-none">
                  {LP.title}
                </h3>
                <p className="font-mono text-[11px] text-white/40 mt-4 max-w-xs leading-relaxed border-l-2 border-accent/30 pl-4">
                  {LP.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={14} className="text-accent" />
              </div>
            </a>
          </TiltCard>

          {/* Vertical divider */}
          <div className="hidden md:block flex-shrink-0 w-px bg-white/5 self-stretch" />

          {/* EP cards */}
          {EPS.map((ep) => (
            <TiltCard key={ep.title} className="flex-shrink-0 w-full md:w-[360px]">
              <a
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-[55vh] md:h-[58vh] w-full border-2 border-white/10 hover:border-accent transition-colors duration-500 overflow-hidden"
              >
                <img
                  src={ep.cover}
                  alt={ep.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/20 to-transparent" />
                <div className="absolute inset-0 bg-accent/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute top-4 left-4 font-mono text-[9px] text-obsidian bg-accent px-3 py-1 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {ep.type}
                </div>
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-serif text-3xl md:text-4xl text-white italic uppercase tracking-tighter">{ep.title}</h3>
                  <p className="font-mono text-[10px] text-accent/50 uppercase tracking-widest mt-2">{ep.type}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={12} className="text-accent" />
                </div>
              </a>
            </TiltCard>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <AnimatePresence>
          {scrollDist > 0 && (
            <motion.div
              style={{ opacity: hintOp }}
              className="absolute bottom-8 right-14 flex items-center gap-3 font-mono text-[9px] text-white/20 uppercase tracking-widest pointer-events-none"
            >
              <span>Deslizar</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-8 h-px bg-accent/40"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
