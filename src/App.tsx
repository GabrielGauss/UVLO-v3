import { useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Manifest from './components/Manifest';
import KineticVault from './components/KineticVault';
import Pulse from './components/Pulse';
import Transmission from './components/Transmission';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle initial hash on load
    if (window.location.hash) {
      setTimeout(() => {
        lenis.scrollTo(window.location.hash, { offset: -80, duration: 0 });
      }, 500);
    }

    // Handle anchor links with Lenis for a subtle, industrial feel
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const targetId = anchor.hash;
        
        lenis.scrollTo(targetId, {
          offset: -80,
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-obsidian selection:bg-accent selection:text-obsidian overflow-x-hidden">
      {/* Persistent Visual DNA */}
      <div className="grain-overlay" />
      <CustomCursor />
      <Preloader />
      
      {/* Section Architecture */}
      <Navbar />
      <Hero />
      <KineticVault />
      <Bio />
      <Manifest />
      <Pulse />
      <Transmission />
      <Footer />
    </main>
  );
}
