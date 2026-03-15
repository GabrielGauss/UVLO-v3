import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-obsidian border-t border-white/5 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16">
          <div className="md:col-span-4 flex flex-col gap-4">
            <img 
              src="/uvlo-logo-wt.png" 
              alt="Ultimo Velo" 
              className="h-8 w-auto object-contain opacity-90 grayscale hover:grayscale-0 transition-all duration-1000 self-start" 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const span = document.createElement('span');
                  span.className = 'text-xl font-serif text-white italic tracking-tighter font-bold';
                  span.innerText = 'Último Velo';
                  parent.appendChild(span);
                }
              }}
            />
            <p className="font-mono text-[9px] text-white/20 leading-relaxed uppercase tracking-[0.1em] max-w-xs">
              Fricción sonora desde el corazón industrial de Mar del Plata. Transmitiendo frecuencias crudas desde el amanecer de la era de las máquinas.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-[8px] text-accent uppercase tracking-[0.3em]">Navegación</h4>
            <nav className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-widest">
              <a href="#vault" className="text-white/30 hover:text-white transition-colors">Bóveda</a>
              <a href="#bio" className="text-white/30 hover:text-white transition-colors">Esencia</a>
              <a href="#transmission" className="text-white/30 hover:text-white transition-colors">Señal</a>
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-mono text-[8px] text-accent uppercase tracking-[0.3em]">Conectar</h4>
            <nav className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-widest">
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
              Mar del Plata, Argentina<br/>
              ultimovelo@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[7px] text-white/10 uppercase tracking-[0.4em]">© 2024 ÚLTIMO VELO</span>
            <div className="h-[1px] w-6 bg-white/5" />
            <span className="font-mono text-[7px] text-white/10 uppercase tracking-[0.4em]">Industrial Frequency</span>
          </div>

          <a 
            href="#hero"
            className="group flex items-center gap-3 font-mono text-[8px] text-white/10 hover:text-accent transition-all uppercase tracking-[0.3em]"
          >
            Top
            <div className="p-2 border border-white/5 group-hover:border-accent transition-all duration-500 rounded-full">
              <ArrowUp size={10} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
