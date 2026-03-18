import { motion } from 'motion/react';

const ALBUMS = [
  {
    title: 'Linajes del Poder',
    year: '2023',
    type: 'Single',
    cover: 'https://picsum.photos/seed/uv-album1/600/600?grayscale',
    url: 'https://www.youtube.com/watch?v=6xiAXjG3VQQ'
  },
  {
    title: 'Cielos Desnudos',
    year: '2022',
    type: 'Single',
    cover: 'https://picsum.photos/seed/uv-album2/600/600?grayscale',
    url: 'https://www.youtube.com/watch?v=n-ltcFIJQd8'
  },
  {
    title: 'Último Velo',
    year: '2021',
    type: 'EP',
    cover: 'https://picsum.photos/seed/uv-album3/600/600?grayscale',
    url: 'https://www.youtube.com/watch?v=L14mzEJV5Vo'
  },
  {
    title: 'Ultimo Velo',
    year: '2019',
    type: 'Album',
    cover: 'https://picsum.photos/seed/uv-album-2019/600/600?grayscale',
    url: 'https://youtu.be/olYXaVrfyLw?list=RDolYXaVrfyLw'
  }
];

export default function Discography() {
  return (
    <section id="discography" className="py-48 px-6 md:px-12 bg-obsidian relative border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">
            Discografía
          </h2>
          <div className="h-[2px] w-32 bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {ALBUMS.map((album, index) => (
            <motion.a
              key={album.title}
              href={album.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group block"
            >
              <div className="relative aspect-square mb-8 overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors duration-500">
                <img 
                  src={album.cover} 
                  alt={album.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('picsum')) {
                      target.src = `https://picsum.photos/seed/uv-album-${index}/600/600?grayscale`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white bg-obsidian px-3 py-1 border border-white/20">
                  {album.year}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-white italic uppercase tracking-tighter mb-1">
                {album.title}
              </h3>
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest">
                {album.type}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
