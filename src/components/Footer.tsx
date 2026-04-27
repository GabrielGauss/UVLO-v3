import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, ArrowUp, Music } from 'lucide-react';

const uvlologowt = '/images/uvlologowt.png';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-obsidian border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16">
          <div className="md:col-span-4 flex flex-col gap-4">
            <img
              src={uvlologowt}
              alt="Ultimo Velo"
              className="h-8 w-auto object-contain opacity-90 grayscale hover:grayscale-0 transition-all duration-1000 self-start"
            />
            <p className="font-mono text-[9px] text-white/20 leading-relaxed uppercase tracking-widest max-w-xs">
              Hard Rock desde Mar del Plata. Un álbum de estudio, tres EPs. Todo en el escenario.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-[8px] text-accent uppercase tracking-[0.3em]">Navegación</h4>
            <nav className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-widest">
              <a href="#vault" className="text-white/30 hover:text-white transition-colors">Bóveda</a>
              <a href="#discography" className="text-white/30 hover:text-white transition-colors">Discos</a>
              <a href="#bio" className="text-white/30 hover:text-white transition-colors">Banda</a>
              <a href="#transmission" className="text-white/30 hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[8px] text-accent uppercase tracking-[0.3em]">Seguir</h4>
            <nav className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-widest">
              <a href="https://open.spotify.com/artist/5Ydrxg0oDTFM50mpcJeH1w" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-all flex items-center gap-2 group">
                <Music size={10} className="group-hover:text-accent" /> Spotify
              </a>
              <a href="https://www.instagram.com/ultimovelo" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-all flex items-center gap-2 group">
                <Instagram size={10} className="group-hover:text-accent" /> Instagram
              </a>
              <a href="https://www.youtube.com/@ultimovelo2999" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-all flex items-center gap-2 group">
                <Youtube size={10} className="group-hover:text-accent" /> YouTube
              </a>
              <a href="https://facebook.com/UltimoVeloARG" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-all flex items-center gap-2 group">
                <Facebook size={10} className="group-hover:text-accent" /> Facebook
              </a>
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[8px] text-accent uppercase tracking-[0.3em]">Contacto</h4>
            <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em] leading-relaxed">
              Mar del Plata, Argentina<br />
              contacto@ultimovelo.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[7px] text-white/10 uppercase tracking-[0.4em]">© 2026 Último Velo</span>
            <div className="h-px w-6 bg-white/5" />
            <span className="font-mono text-[7px] text-white/10 uppercase tracking-[0.4em]">Mar del Plata · ARG</span>
          </div>

          <motion.a
            href="#hero"
            whileHover={{ y: -2 }}
            className="group flex items-center gap-3 font-mono text-[8px] text-white/10 hover:text-accent transition-all uppercase tracking-[0.3em]"
          >
            Volver arriba
            <div className="p-2 border border-white/5 group-hover:border-accent transition-all duration-500 rounded-full">
              <ArrowUp size={10} />
            </div>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
