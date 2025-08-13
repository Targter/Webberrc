"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const motionStyle = {
    "--x": useMotionTemplate`${mouseX}px`,
    "--y": useMotionTemplate`${mouseY}px`,
  };

  const mouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background with improved visibility */}
      <div className="absolute inset-0">
        <Image
          src="/bg/bg7.png"
          alt="EV Manufacturing Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60"></div>
      </div>

      {/* Hero Header Section */}
      <div className="relative z-10 pt-12 pb-8 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
         

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HOW WE
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              MANUFACTURE
            </span>
          </motion.h1>

        

          {/* Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
          {/* Section Title 

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {components.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                onMouseMove={isMobile ? undefined : mouseMove}
                style={isMobile ? undefined : motionStyle}
                whileHover={{ y: -10 }}
              >
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-5 h-full overflow-hidden group-hover:bg-white/15 transition-all duration-500">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      
                      <div className="text-6xl font-black text-white/30 group-hover:text-white/20 transition-colors duration-300">
                        0{step.id}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-84 mb-8 rounded-2xl overflow-hidden bg-white/5">
                      <Image
                        src={step.image}
                        alt={step.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                        {step.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>

                {/* Connecting line (except for last item) */}
                {index < components.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 z-20">
                    <div className="absolute -right-2 -top-1 w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}