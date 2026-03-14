import { motion } from 'motion/react';
import { Music, Play } from 'lucide-react';

export default function Pulse() {
  return (
    <section id="pulse" className="relative py-48 px-6 flex items-center justify-center overflow-hidden bg-obsidian border-b border-white/5">
      {/* Spiced Technical Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,100,0,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent/20" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-accent/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="bg-obsidian border-4 border-white p-12 md:p-24 brutalist-shadow relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-accent" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-accent" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-accent" />

          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-[10px] text-accent font-black uppercase tracking-[1em] mb-6 animate-pulse">
              [ TRANSMISIÓN_DE_DATOS ]
            </span>
            
            <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase leading-none tracking-tighter mb-8">
              El Pulso
            </h2>
            
            <p className="font-mono text-xs text-white/40 mb-16 uppercase tracking-[0.5em] max-w-md">
              Sincroniza tu sistema con el poder del Hard Rock de Último Velo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
              <a 
                href="https://open.spotify.com/artist/37i9dQZF1DZ06evO29S97N" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 py-6 border-2 border-white text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-obsidian transition-all duration-300"
              >
                <Music size={16} />
                Spotify_Link
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-4 py-6 border-2 border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-obsidian transition-all duration-300"
              >
                <Play size={16} />
                Apple_Music
              </a>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 flex justify-between font-mono text-[8px] text-white/20 uppercase tracking-[0.5em]">
          <span>SISTEMA: OPERATIVO</span>
          <span>LATENCIA: 0.002MS</span>
          <span>FRECUENCIA: 44.1KHZ</span>
        </div>
      </motion.div>
    </section>
  );
}
