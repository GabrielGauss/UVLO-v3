import { motion } from 'motion/react';

const SHOWS = [
  { date: '2024.05.12', venue: 'ABBEY ROAD', city: 'MAR DEL PLATA', status: 'SOLD OUT' },
  { date: '2024.06.05', venue: 'NICETO CLUB', city: 'BUENOS AIRES', status: 'TICKETS' },
  { date: '2024.06.20', venue: 'CASA BABYLON', city: 'CORDOBA', status: 'TICKETS' },
  { date: '2024.07.15', venue: 'GAP', city: 'MAR DEL PLATA', status: 'TICKETS' },
  { date: '2024.08.02', venue: 'EL TEATRO', city: 'LA PLATA', status: 'TICKETS' },
];

export default function Manifest() {
  return (
    <section id="manifest" className="py-80 px-6 md:px-12 bg-obsidian">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="section-title !mb-32">El Manifiesto</h2>
        
        <div className="border-t border-white/10">
          {SHOWS.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-2 md:grid-cols-4 border-b border-white/10 py-20 px-6 transition-all duration-700 hover:bg-accent hover:text-obsidian cursor-pointer"
            >
              <div className="font-mono text-xs md:text-sm flex items-center tracking-widest">{show.date}</div>
              <div className="font-serif text-2xl md:text-5xl flex items-center italic font-bold">{show.venue}</div>
              <div className="font-mono text-[10px] md:text-xs opacity-40 group-hover:opacity-100 flex items-center uppercase tracking-[0.4em]">{show.city}</div>
              <div className="flex items-center justify-end">
                <span className={`font-mono text-[10px] px-6 py-3 border border-current transition-all duration-500 uppercase tracking-widest ${show.status === 'SOLD OUT' ? 'opacity-20' : 'group-hover:border-obsidian group-hover:font-bold'}`}>
                  {show.status === 'SOLD OUT' ? 'AGOTADO' : 'ENTRADAS'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
