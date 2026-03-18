import { motion } from 'motion/react';
import icowt from '../assets/icowt.png';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-[1000] glass px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <img 
          src={icowt} 
          alt="UV" 
          className="w-10 h-10 object-contain" 
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase hidden sm:block text-white/60">Ultimo Velo</span>
      </div>
      
      <div className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-widest">
        <a href="#vault" className="hover:text-accent transition-colors relative group">
          Bóveda
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
        </a>
        <a href="#discography" className="hover:text-accent transition-colors relative group">
          Discos
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
        </a>
        <a href="#manifest" className="hover:text-accent transition-colors relative group">
          Manifiesto
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
        </a>
        <a href="#pulse" className="hover:text-accent transition-colors relative group">
          Pulso
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
        </a>
        <a href="#transmission" className="hover:text-accent transition-colors relative group">
          Transmisión
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
        </a>
      </div>
    </motion.nav>
  );
}
