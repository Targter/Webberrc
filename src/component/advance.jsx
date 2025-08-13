"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

const manufacturingSteps = [
  {
    id: 1,
    name: "Lithography",
    step: "Step 1",
    description:
      "Lithography transfers the IC design onto the wafer using light and photoresist.",
    image: "/manufacture/s1.png",
  },
  {
    id: 2,
    name: "Etching",
    step: "Step 2",
    description:
      "Etching removes layers to create the circuit pattern on the wafer surface.",
    image: "/manufacture/s2.png",
  },
  {
    id: 3,
    name: "Deposition",
    step: "Step 3",
    description:
      "Deposition adds conductive or insulating materials onto the wafer.",
    image: "/manufacture/s3.png",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function ManufacturingShowcase({
  components = manufacturingSteps,
  title = "How we manufacture",
  ...props
}) {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-slate-50 overflow-hidden"
    >
      {/* Background with improved visibility */}
      <div className="absolute inset-0">
        <Image
          src="/bg/bg2.png"
          alt="EV Manufacturing Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70"></div>
      </div>

      {/* Hero Header Section */}
      <div className="relative z-10 pt-12 pb-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading - Single Line */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              HOW WE MANUFACTURE
            </span>
          </motion.h1>

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { number: "3", label: "Manufacturing Steps", suffix: "" },
              { number: "99.9", label: "Precision Rate", suffix: "%" },
              { number: "24", label: "Quality Control", suffix: "/7" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-white/70 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Manufacturing Steps Section */}
      <div className="relative z-10 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {components.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Card - Boxy Design */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 h-full overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* EV Theme Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number Header */}
                    <div className="flex items-center justify-end mb-6">
                      <div className="text-4xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
                        0{step.id}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-76 mb-6 overflow-hidden bg-white/5 border border-white/10">
                      <Image
                        src={step.image}
                        alt={step.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300 pb-1">
                        {step.description}
                      </p>
                    </div>

                  
                  </div>
                </div>

                {/* Connecting line (except for last item) - More Minimal */}
                {index < components.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-green-400/60 to-transparent z-20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  >
                    <div className="absolute -right-1 -top-0.5 w-1 h-1 bg-green-400 opacity-80"></div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}