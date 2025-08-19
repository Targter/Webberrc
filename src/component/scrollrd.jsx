"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const TimelineSticky = ({ content, contentClassName }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Our Revolutionary Technology
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Discover the cutting-edge features that make our battery management system superior.
        </p>
      </div>
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {content.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border border-neutral-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {`0${index + 1}`}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {`0${index + 1}`}
              </h3>
              
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl">
                  {item.description}
                </p>
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Visual Content */}
              <div className="mt-8">
                <div className="w-full max-w-2xl h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl border border-gray-700">
                  <div className="w-full h-full">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Animated Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};

// Sample data with high-quality content (keeping your original data)
const sampleContent = [
  {
    title: "Easy Battery Pack Paralleling",
    description:
      "State of the art battery pack paralleling technique without software communication between battery packs. Ensures seamless power delivery for maximum efficiency.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/battery2.png"
          alt="Easy Battery Pack Paralleling"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Seamless Power Delivery</h3>
          <p className="text-white/90 text-sm">
            Paralleling made simple with no software dependencies
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Unparalleled Reliability",
    description:
      "Unbreakable design tested for millions of kms with over 15K deployments. Proven to remain infallible even under thousands of dead short circuits.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/reliable2.png"
          alt="Unparalleled Reliability"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Tested for Millions of Kms</h3>
          <p className="text-white/90 text-sm">
            Rugged design trusted by 15K+ successful deployments
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Better Cell Balancing",
    description:
      "400mA balancing current works with advanced charging profile control algorithms for the fastest cell balancing and superior Depth of Discharge control.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/balance.png"
          alt="Better Cell Balancing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Fast & Efficient Balancing</h3>
          <p className="text-white/90 text-sm">
            400mA current + smart algorithms for better DoD control
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Superior Thermal Stability",
    description:
      "Highly optimized thermals achieved through an innovative MOSFET mounting technique. Extracts 2x better thermal performance from the PDU for safer operations.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/thermal.png"
          alt="Superior Thermal Stability"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">2x Better Thermal Performance</h3>
          <p className="text-white/90 text-sm">
            Innovative MOSFET mounting delivers cooler efficiency
          </p>
        </div>
      </div>
    ),
  },
];

// Demo component
export default function TimelineStickyDemo() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="py-20 px-4 bg-black">
        <div className="text-center mb-10 bg-black">
          <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
            <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
              Why choose Webber?
            </h3>
          </div>

          <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
              FIRST PRINCIPLE DESIGN APPROACH
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0">
            <span className="text-white">Value</span>
            <span className="text-gray-300">|</span>
            <span className="text-white">Reliable</span>
            <span className="text-gray-300">|</span>
            <span className="text-white">Agile</span>
          </div>
        </div>
      
        <TimelineSticky content={sampleContent} />
      </div>
    </div>
  );
}