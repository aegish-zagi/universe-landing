'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function StellarNurseries() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section
      id="stellar"
      ref={ref}
      className="relative min-h-screen bg-cosmos-deep flex items-center overflow-hidden py-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cosmos-nebula/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmos-glow/30 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image column */}
        <motion.div
          className="relative order-2 lg:order-1"
          style={{ y: imageY }}
        >
          <motion.div
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=90&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border border-cosmos-glow/20 rounded-2xl" />
          </motion.div>

          {/* Floating stat */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-cosmos-navy/90 backdrop-blur-md border border-cosmos-glow/20 rounded-2xl p-5 border-glow"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-3xl font-serif font-bold text-cosmos-glow text-glow-sm">400B</div>
            <div className="text-cosmos-star/50 text-xs tracking-widest uppercase mt-1">Stars in Milky Way</div>
          </motion.div>
        </motion.div>

        {/* Text column */}
        <motion.div
          className="order-1 lg:order-2"
          style={{ y: textY }}
        >
          <motion.p
            className="text-cosmos-aurora uppercase tracking-[0.4em] text-xs font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Origins
          </motion.p>

          <h2
            ref={titleRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-cosmos-star mb-8"
          >
            {['Stellar', 'Nurseries'].map((word, wi) => (
              <span key={wi} className="block overflow-hidden">
                <motion.span
                  className={`block ${
                    wi === 1
                      ? 'bg-gradient-to-r from-cosmos-glow to-cosmos-aurora bg-clip-text text-transparent text-glow'
                      : ''
                  }`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: wi * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            className="text-cosmos-star/70 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Deep within clouds of hydrogen and helium, gravity collapses matter into radiant new suns — the universe&apos;s endless act of creation, birthing light from darkness across a hundred thousand light-years.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-cosmos-glow/40 to-transparent" />
            <span className="text-cosmos-star/30 text-xs tracking-widest uppercase">Est. 13.8 Gyr ago</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmos-glow/20 to-transparent" />
    </section>
  );
}
