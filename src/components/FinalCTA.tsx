'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: '-15%' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-cosmos-black flex flex-col items-center justify-center overflow-hidden py-32"
    >
      {/* Star field background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2400&q=80&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black via-cosmos-black/60 to-cosmos-black/80" />
      </div>

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,144,217,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.10) 0%, transparent 70%)',
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,144,217,0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 2, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cosmos-glow/60" />
          <span className="text-cosmos-aurora uppercase tracking-[0.5em] text-xs font-light">Invitation</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cosmos-glow/60" />
        </motion.div>

        {/* Main CTA headline */}
        <h2
          ref={titleRef}
          className="font-serif font-bold leading-none mb-8"
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block text-8xl md:text-[10rem] lg:text-[12rem] text-cosmos-star"
              style={{ lineHeight: 1 }}
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Look
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-8xl md:text-[10rem] lg:text-[12rem] bg-gradient-to-r from-cosmos-glow via-cosmos-aurora to-cosmos-nebula bg-clip-text text-transparent text-glow"
              style={{ lineHeight: 1 }}
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              Up.
            </motion.span>
          </span>
        </h2>

        <motion.p
          className="text-cosmos-star/55 text-lg md:text-xl font-light max-w-lg mx-auto mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The universe is not distant. On any clear night, it begins just above you.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <motion.button
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full text-sm font-medium tracking-[0.3em] uppercase text-cosmos-black bg-cosmos-star overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cosmos-glow to-cosmos-aurora opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Start Exploring
            </span>
            <motion.span
              className="relative z-10 group-hover:text-white transition-colors duration-300"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↗
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-20 text-cosmos-star/20 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          The universe is under no obligation to make sense to you — Neil deGrasse Tyson
        </motion.p>
      </div>
    </section>
  );
}
