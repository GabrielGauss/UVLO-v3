import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const uvlologobl = '/images/uvlologobl.png';

export default function Transmission() {
  const [state, handleSubmit] = useForm('xyklqele');

  return (
    <section id="transmission" className="py-24 px-6 md:px-12 bg-accent relative overflow-hidden border-t border-obsidian/10">
      {/* Brutalist Grid Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-obsidian italic uppercase leading-none tracking-tighter mb-4">Transmisión</h2>
          <p className="font-mono text-[10px] text-obsidian/60 uppercase tracking-[0.4em] font-bold">Unite al círculo interno // Frecuencia Directa</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-center">
            <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
              <div className={`relative border-2 transition-colors duration-300 bg-obsidian ${state.succeeded ? 'border-white/30' : 'border-white/20 hover:border-white focus-within:border-white'}`}>
                <input
                  type="email"
                  name="email"
                  placeholder={state.succeeded ? 'TRANSMISIÓN_EXITOSA' : 'CORREO_ELECTRÓNICO'}
                  disabled={state.submitting || state.succeeded}
                  required
                  className="w-full bg-transparent px-5 py-5 pr-14 font-mono text-sm focus:outline-none placeholder:text-white/30 text-white font-bold"
                />
                <button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className="absolute right-0 top-0 h-full px-5 text-white/40 hover:text-white transition-colors disabled:opacity-30"
                >
                  {state.succeeded ? <Check size={18} /> : <Send size={18} />}
                </button>
              </div>
              <ValidationError field="email" prefix="Email" errors={state.errors} className="font-mono text-[9px] text-obsidian uppercase tracking-widest font-bold pl-1" />
              <span className="font-mono text-[9px] text-obsidian/40 uppercase tracking-widest font-bold pl-1">
                {state.succeeded ? 'Suscripción confirmada.' : 'Protocolo de privacidad activado.'}
              </span>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-obsidian p-8 brutalist-shadow-small relative overflow-hidden">
              <img
                src={uvlologobl}
                alt=""
                className="absolute -right-10 -bottom-10 w-48 h-auto opacity-10 pointer-events-none grayscale invert"
              />
              <h3 className="font-mono text-[9px] text-accent uppercase tracking-[0.4em] mb-4 font-black">Booking // Consultas</h3>
              <a href="mailto:contacto@ultimovelo.com" className="font-mono text-xl md:text-2xl hover:text-accent transition-colors text-white font-black break-all">
                CONTACTO@ULTIMOVELO.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
