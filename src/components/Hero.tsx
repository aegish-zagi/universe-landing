'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Nebula background with slow zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2400&q=90&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-black/40 via-cosmos-black/20 to-cosmos-black" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-cosmos-black/30 to-cosmos-black/60" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity, y }}
      >
        {/* Eyebrow */}
        <motion.p
          className="text-cosmos-aurora uppercase tracking-[0.4em] text-xs md:text-sm font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        >
          A Voyage Through the Void
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-bold leading-none tracking-tight text-cosmos-star mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          The Infinite
          <br />
          <span className="text-glow bg-gradient-to-r from-cosmos-glow via-cosmos-aurora to-cosmos-nebula bg-clip-text text-transparent">
            Canopy
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-cosmos-star/60 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
        >
          13.8 billion years of cosmic history, stretched across the sky above us.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#stellar"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase overflow-hidden border border-cosmos-glow/40 text-cosmos-star"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cosmos-glow/20 to-cosmos-aurora/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">Begin the Journey</span>
            <motion.span
              className="relative z-10 text-cosmos-glow"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-cosmos-star/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-cosmos-glow/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
