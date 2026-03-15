import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { useState } from 'react';

export default function Transmission() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

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
            <form className="flex flex-col gap-6 max-w-md" onSubmit={handleSubmit}>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={status === 'success' ? 'TRANSMISIÓN_EXITOSA' : 'CORREO_ELECTRÓNICO'} 
                  disabled={status !== 'idle'}
                  className={`w-full bg-transparent border-b-2 py-4 font-mono text-sm focus:outline-none transition-colors placeholder:text-obsidian/30 text-obsidian font-bold ${status === 'success' ? 'border-green-600' : 'border-obsidian/20 focus:border-obsidian'}`}
                />
                <button 
                  type="submit"
                  disabled={status !== 'idle'}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-obsidian/40 hover:text-obsidian transition-colors"
                >
                  {status === 'success' ? <Check size={20} className="text-green-600" /> : <Send size={20} />}
                </button>
              </div>
              <span className="font-mono text-[9px] text-obsidian/40 uppercase tracking-widest font-bold">
                {status === 'success' ? 'Suscripción confirmada.' : 'Protocolo de privacidad activado.'}
              </span>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-obsidian p-8 brutalist-shadow-small relative overflow-hidden">
              <img 
                src="/uvlo-logo-bl.png?v=1.1" 
                alt="" 
                className="absolute -right-10 -bottom-10 w-48 h-auto opacity-10 pointer-events-none grayscale invert" 
                referrerPolicy="no-referrer"
              />
              <h3 className="font-mono text-[9px] text-accent uppercase tracking-[0.4em] mb-4 font-black">Booking // Consultas</h3>
              <a href="mailto:ultimovelo@gmail.com" className="font-mono text-xl md:text-2xl hover:text-accent transition-colors text-white font-black break-all">
                ULTIMOVELO@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
