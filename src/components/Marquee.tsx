import { motion } from 'motion/react';

const ITEMS = ['ULTIMO VELO', 'HARD ROCK', 'MAR DEL PLATA', 'TRASTORNO', 'PRISMA', 'BUDOKAN', 'DESDE 2017', 'EN VIVO'];

interface MarqueeProps {
  reverse?: boolean;
  accent?: boolean;
  speed?: number;
}

export default function Marquee({ reverse = false, accent = false, speed = 30 }: MarqueeProps) {
  return (
    <div className={`overflow-hidden py-3 border-y ${accent ? 'bg-accent border-obsidian/20' : 'bg-obsidian border-white/5'}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: reverse ? ['−50%', '0%'] : ['0%', '−50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
      >
        {[0, 1].map((copy) => (
          <span key={copy} className="flex flex-shrink-0">
            {ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className={`flex items-center font-mono text-[11px] tracking-[0.4em] uppercase ${accent ? 'text-obsidian/60' : 'text-white/20'}`}
              >
                <span className="px-8">{item}</span>
                <span className={`${accent ? 'text-obsidian/30' : 'text-accent'} text-lg leading-none`}>·</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
