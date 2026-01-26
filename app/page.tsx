"use client";

import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { Projects } from "@/components/sections/Projects";
import { Writings } from "@/components/sections/Writings";
import { Work } from "@/components/sections/Work";
import { Navigation } from "@/components/ui/Navigation";
import dynamic from "next/dynamic";

// Lazy load WebGL scene - no SSR, loads after critical content
const Scene = dynamic(() => import("@/components/canvas/Scene").then(mod => ({ default: mod.Scene })), {
  ssr: false,
  loading: () => null
});

export default function Home() {

  return (
    <main className="relative w-full min-h-screen bg-transparent text-foreground selection:bg-mustard selection:text-white">
      {/* WebGL Background Layer - Z-Index 0 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* Grain Overlay - Z-Index 0 (above canvas) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <Navigation />

      {/* Scrollable Content Layer - Z-Index 1 */}
      <div className="relative z-10 w-full bg-transparent">
        <Hero />
        <Work />
        <Impact />
        <Projects />
        <Writings />
        <Contact />
      </div>
    </main>
  );
}
