"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          FIRST PRINCIPLE DESIGN APPROACH
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Fueling Our Winning Streak
        </h2>
        <div className="flex justify-center items-center gap-4 text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400">
          <span>Value</span>
          <span className="text-gray-400">|</span>
          <span>Reliable</span>
          <span className="text-gray-400">|</span>
          <span>Agile</span>
        </div>
      </div>

      {/* Grid Section */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Easy Battery Pack Paralleling"
          description="State of the art battery pack paralleling technique without software communication between battery packs. Unhindered power delivery ."
        />
        
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Unparalleled Reliability"
          description="Unbreakable design tested for millions of kms with >15K deployments. Infallible at even thousands of dead short circuits."
        />
        
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="The Art of Energy"
          description="In the dance between electrons and efficiency, we find that true innovation lies not in adding complexity, but in understanding the fundamental harmony of power and purpose. Every circuit tells a story of potential realized."
          isPhilosophical={true}
        />
        
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Better Cell Balancing"
          description="400mA Balancing Current works in unison with unique charging profile control algorithms for fastest cell balancing and better DoD Control."
        />
        
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Superior Thermal Stability"
          description="Highly optimized thermals with use of industry first and innovative MOSFET mounting technique. Extract 2x better thermal performance from PDU."
        />
      </ul>
    </div>
  );
}

const GridItem = ({ area, icon, title, description, isPhilosophical = false }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className={`border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ${isPhilosophical ? 'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20' : ''}`}>
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className={`w-fit rounded-lg border p-2 ${isPhilosophical ? 'border-purple-300 bg-purple-100 dark:border-purple-600 dark:bg-purple-800' : 'border-gray-600'}`}>
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className={`-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] ${isPhilosophical ? 'text-purple-800 dark:text-purple-200' : 'text-black dark:text-white'}`}>
                {title}
              </h3>
              <h2 className={`font-sans text-sm/[1.125rem] md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold ${isPhilosophical ? 'text-purple-700 dark:text-purple-300 italic' : 'text-black dark:text-neutral-400'}`}>
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};