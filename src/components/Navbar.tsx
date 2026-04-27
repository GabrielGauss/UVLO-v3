import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const icowt = '/images/icowt.png';

const NAV_LINKS = [
  { href: '#vault', label: 'Bóveda' },
  { href: '#discography', label: 'Discos' },
  { href: '#manifest', label: 'Manifiesto' },
  { href: '#pulse', label: 'Pulso' },
  { href: '#transmission', label: 'Transmisión' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-1000 glass px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <img src={icowt} alt="UV" className="w-10 h-10 object-contain" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase hidden sm:block text-white/60">Ultimo Velo</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 font-mono text-[10px] uppercase tracking-widest">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-accent transition-colors relative group">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 left-0 w-full z-999 bg-black/95 backdrop-blur-2xl border-t border-white/10 flex flex-col md:hidden"
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className="px-8 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white/60 hover:text-accent hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
