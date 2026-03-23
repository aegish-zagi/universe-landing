'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const facts = [
  {
    number: '299,792',
    unit: 'km/s',
    label: 'Speed of light',
    description: 'The absolute cosmic speed limit',
  },
  {
    number: '4%',
    unit: '',
    label: 'Visible matter',
    description: 'The rest is dark matter and dark energy',
  },
  {
    number: '93B',
    unit: 'ly',
    label: 'Observable universe',
    description: 'Diameter in light-years',
  },
];

export default function SpacetimeGeometry() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: '-10%' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-cosmos-black overflow-hidden py-32"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="absolute inset-[-10%] bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=80&fit=crop')`,
          }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-cosmos-deep via-cosmos-black/95 to-cosmos-black" />
      <div className="absolute inset-0 z-0 bg-gradient-radial from-cosmos-blue/20 via-transparent to-transparent" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,144,217,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,144,217,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-24">
          <motion.p
            className="text-cosmos-aurora uppercase tracking-[0.4em] text-xs font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Physics of Reality
          </motion.p>

          <h2
            ref={titleRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-cosmos-star"
          >
            {['The Geometry', 'of Spacetime'].map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  className={`block ${
                    li === 1
                      ? 'bg-gradient-to-r from-cosmos-aurora via-cosmos-glow to-cosmos-nebula bg-clip-text text-transparent text-glow'
                      : ''
                  }`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={isInView ? { y: '0%', opacity: 1 } : {}}
                  transition={{
                    duration: 1.1,
                    delay: li * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-cosmos-star/70 text-lg md:text-xl leading-relaxed font-light mb-8">
              Space and time are not separate stages — they are a single fabric, curved by mass and energy. A star bending light, a black hole halting time: these are not metaphors but the literal geometry of existence.
            </p>
            <p className="text-cosmos-star/50 text-base leading-relaxed font-light">
              Einstein&apos;s general relativity revealed that gravity is not a force but a curvature. Every massive object warps the cosmos around it, and we — hurtling through space at 30 km/s — are always falling along these curves.
            </p>
          </motion.div>

          {/* Right: visual element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Concentric rings */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-cosmos-glow/20"
                  style={{
                    inset: `${i * 10}%`,
                    borderColor: `rgba(74, 144, 217, ${0.08 + i * 0.04})`,
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 20 + i * 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
              {/* Center glow */}
              <div className="absolute inset-[40%] rounded-full bg-cosmos-glow/30 blur-xl" />
              <div className="absolute inset-[45%] rounded-full bg-cosmos-aurora/60" />
            </div>
          </motion.div>
        </div>

        {/* Fact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              className="group relative p-8 rounded-2xl border border-cosmos-glow/15 bg-cosmos-navy/30 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ borderColor: 'rgba(74,144,217,0.4)', y: -4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cosmos-glow/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-serif font-bold text-cosmos-glow text-glow-sm">
                    {fact.number}
                  </span>
                  {fact.unit && (
                    <span className="text-cosmos-aurora text-sm font-medium">{fact.unit}</span>
                  )}
                </div>
                <div className="text-cosmos-star text-sm font-medium mb-2">{fact.label}</div>
                <div className="text-cosmos-star/40 text-xs leading-relaxed">{fact.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
