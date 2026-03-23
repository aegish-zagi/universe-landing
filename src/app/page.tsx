'use client';

import Hero from '@/components/Hero';
import StellarNurseries from '@/components/StellarNurseries';
import SpacetimeGeometry from '@/components/SpacetimeGeometry';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="relative bg-cosmos-black">
      <Hero />
      <StellarNurseries />
      <SpacetimeGeometry />
      <FinalCTA />
    </main>
  );
}
