"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  const headingRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen mx-auto  py-8">
      {/* Heading Section */}
      <div
        ref={headingRef}
        className="text-center mb-10 bg-gradient-to-r from-gray-400 to-gray-500 p-6 shadow-lg w-screen"
      >
        <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
          <h3 className="text-white font-medium text-base hover:text-gray-200 transition-all duration-300 border-b-2 border-yellow-400 hover:border-yellow-300 hover:scale-105 pb-1 inline-block mb-4 tracking-wide">
            Why choose us
          </h3>
        </div>

        <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white mb-4 leading-tight">
            FIRST PRINCIPLE DESIGN APPROACH
          </h1>
        </div>

        <div
          className={`flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="hover:text-yellow-300 transition-colors cursor-default">
            Value
          </span>
          <span className="text-gray-300">|</span>
          <span className="hover:text-yellow-300 transition-colors cursor-default">
            Reliable
          </span>
          <span className="text-gray-300">|</span>
          <span className="hover:text-yellow-300 transition-colors cursor-default">
            Agile
          </span>
        </div>
      </div>

      {/* Grid Section */}
      <ul className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-2 xl:grid-rows-2 gap-4 w-full  mx-auto px-4 max-w-5xl">
        <GridItem
          img="/rd/ThermalStability.png"
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-6 w-6  text-black dark:text-neutral-400" />}
          title="Easy Battery Pack Paralleling"
          description="State of the art battery pack paralleling technique without software communication between battery packs. Unhindered power delivery."
        />
        <GridItem
          img="/rd/ThermalStability.png"
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-6 w-6 text-black dark:text-neutral-400" />
          }
          title="Unparalleled Reliability"
          description="Unbreakable design tested for millions of kms with >15K deployments. Infallible at even thousands of dead short circuits."
        />
        <GridItem
          img="/logo/webber-logo.png"
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="The Art of Energy"
          description="  In the dance between electrons and efficiency, we find that true innovation lies not in adding complexity, but in understanding the fundamental   In the dance between electrons and efficiency, we find that true innovation lies not in adding complexity, but in understanding the fundamental harmony of power and purpose. Every circuit tells a story of potential realized."
          isPhilosophical
        />
        <GridItem
          img="/rd/cellbalance.png"
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <Sparkles className="h-6 w-6 text-black dark:text-neutral-400" />
          }
          title="Better Cell Balancing"
          description="400mA Balancing Current works in unison with unique charging profile control algorithms for fastest cell balancing and better DoD Control."
        />
        <GridItem
          img="/rd/ThermalStability.png"
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="Superior Thermal Stability"
          description="Highly optimized thermals with use of industry first and innovative MOSFET mounting technique. Extract 2x better thermal performance from PDU."
        />
      </ul>
    </div>
  );
}

const GridItem = ({
  img,
  area,
  icon,
  title,
  description,
  isPhilosophical = false,
}) => {
  return (
    <li
      className={`min-h-[18rem] md:min-h-[22rem] xl:min-h-[24rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-xl border p-2 md:rounded-2xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div
          className={`border-0.75 relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-xl p-4 md:p-5 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ${
            isPhilosophical
              ? "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20"
              : ""
          }`}
        >
          {icon}
          {/* Image */}
          {img && (
            <div
              className={`w-[80%] h-40 md:h-32 xl:h-46 lg:h-40 rounded-xl overflow-hidden flex items-center justify-center ${
                isPhilosophical ? "bg-slate-600  py-10 dark:bg-gray-900" : ""
              }`}
            >
              <img
                src={img}
                alt={title}
                className={`transition-transform duration-300 ease-in-out ${
                  isPhilosophical
                    ? "scale-[1] brightness-110 contrast-125 object-contain h-full"
                    : "object-cover h-[90%]"
                } mx-auto `}
              />
            </div>
          )}

          {/* Content */}
          <div className="relative flex flex-1 flex-col justify-between gap-2">
            {/* <div
              className={`w-fit rounded-lg border p-2 ${
                isPhilosophical
                  ? "border-purple-300 bg-purple-100 dark:border-purple-600 dark:bg-purple-800"
                  : "border-gray-600"
              }`}
            >
            </div> */}
            <div className="space-y-2">
              <h3
                className={`-tracking-4 pt-0.5 font-sans text-lg md:text-xl font-semibold text-balance ${
                  isPhilosophical
                    ? "text-purple-800 dark:text-purple-200"
                    : "text-black dark:text-white"
                }`}
              >
                {title}
              </h3>
              <h2
                className={`font-sans [&_b]:md:font-semibold [&_strong]:md:font-semibold ${
                  isPhilosophical
                    ? "text-purple-700 dark:text-purple-300 italic text-[1.05rem] leading-relaxed"
                    : "text-black dark:text-neutral-400 text-sm md:text-base"
                }`}
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
