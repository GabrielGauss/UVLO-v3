import { motion } from 'motion/react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import uvlologowt from '../assets/uvlologowt.png';

export default function Bio() {
  return (
    <section id="bio" className="py-48 px-6 md:px-12 bg-obsidian relative overflow-hidden border-y border-white/5">
      {/* Spiced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,100,0,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_80%,rgba(255,100,0,0.05)_0%,transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        {/* Image Composition - Brutalist Style */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-8 relative z-10"
          >
            <div className="border-4 border-accent p-2 bg-obsidian brutalist-shadow">
              <img 
                src={img1} 
                alt="Facundo & Ezequiel Romero" 
                className="w-full h-auto grayscale contrast-125"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80";
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 font-mono text-[10px] text-obsidian bg-accent px-4 py-2 font-black uppercase tracking-widest">
              [ FACUNDO_&_EZEQUIEL ]
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-7 col-start-6 -mt-32 relative z-20"
          >
            <div className="border-4 border-white p-2 bg-obsidian shadow-[15px_15px_0px_0px_rgba(255,255,255,1)]">
              <img 
                src={img2} 
                alt="Gabriel Veron - Batería" 
                className="w-full h-auto grayscale contrast-150 brightness-75"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1514525253361-bee8a187499b?auto=format&fit=crop&w=800&q=80";
                  }
                }}
              />
            </div>
            <div className="absolute -top-6 -right-6 font-mono text-[10px] text-white bg-obsidian border-2 border-white px-4 py-2 font-black uppercase tracking-widest">
              [ GABRIEL_VERON ]
            </div>
          </motion.div>

          {/* Third Image - Group / Logo Alt */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="col-span-6 col-start-3 -mt-16 relative z-30"
          >
            <div className="border-4 border-accent p-2 bg-obsidian brutalist-shadow-small">
              <img 
                src={uvlologowt} 
                alt="Ultimo Velo Group" 
                className="w-full h-auto grayscale contrast-125 brightness-90"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80";
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 font-mono text-[8px] text-obsidian bg-accent px-3 py-1 font-black uppercase tracking-widest">
              [ UV_DNA ]
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-accent" />
            <span className="font-mono text-xs text-accent uppercase tracking-[0.5em]">La Banda</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.85] tracking-tighter mb-12">
            Poder<br/>Crudo &<br/>Distorsión
          </h2>

          <div className="space-y-8 font-mono text-sm leading-relaxed text-white/60 max-w-xl">
            <p className="border-l-2 border-accent pl-6">
              Desde las calles de Mar del Plata, Último Velo representa la esencia del Hard Rock directo y sin vueltas. Una formación consolidada que apuesta por el sonido valvular y la potencia en vivo.
            </p>
            <p>
              La banda está integrada por <strong>Facundo Romero</strong> en voz y bajo, aportando la garra melódica; <strong>Ezequiel Romero</strong> en la guitarra líder; <strong>Gabriel Veron</strong> marcando el pulso desde la batería; y la reciente incorporación de <strong>Christian Alcaraz</strong> en guitarra, completando una muralla de sonido demoledora.
            </p>
            <p className="text-white font-bold italic">
              "Hacemos rock de verdad, el que se siente en el pecho. Sin pretensiones, solo cuatro músicos dejando todo en el escenario."
            </p>
          </div>
          
          <div className="mt-16 flex flex-wrap gap-12">
            <div className="flex flex-col gap-2">
              <h4 className="text-accent text-[10px] uppercase tracking-widest font-black">Origen</h4>
              <p className="font-serif italic text-3xl text-white">Mar del Plata</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-accent text-[10px] uppercase tracking-widest font-black">Género</h4>
              <p className="font-serif italic text-3xl text-white">Hard Rock</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-accent text-[10px] uppercase tracking-widest font-black">Estado</h4>
              <p className="font-serif italic text-3xl text-white">En Gira</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
