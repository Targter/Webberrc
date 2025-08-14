"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const [showContent, setShowContent] = useState(false);

  // Optimized content reveal - Earlier timing
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800); // Reduced to 0.8s for snappier experience
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-slate-50 overflow-hidden"
    >
      {/* Background with optimized reveal */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <img
          src="/bg/bg2.png"
          alt="EV Manufacturing Background"
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/85"
          initial={{ opacity: 0.4 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.4 }}
          transition={{ duration: 1.0, delay: 0.2 }}
        ></motion.div>
      </motion.div>

      {/* Hero Header Section - Delayed Appearance */}
      <motion.div 
        className="relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 text-center"
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Heading - High Contrast Colors */}
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 leading-tight sm:leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              HOW WE MANUFACTURE
            </span>
          </motion.h1>

          {/* Stats - Compact Single Row */}
          <motion.div 
            className="flex flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 mt-4 sm:mt-6 text-center"
            initial={{ opacity: 0, y: 25 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { number: "3", label: "Manufacturing Steps", suffix: "" },
              { number: "99.9", label: "Precision Rate", suffix: "%" },
              { number: "24", label: "Quality Control", suffix: "/7" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-white text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={showContent ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15, ease: "backOut" }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent leading-none">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-white/60 text-xs font-medium mt-1 leading-tight max-w-[80px] sm:max-w-[100px]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Manufacturing Steps Section - Faster Progressive Reveal */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12"
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Steps Grid - Optimized Staggered Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {components.map((step, index) => (
              <motion.div
                key={step.id}
                className="group relative"
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                animate={showContent ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.96 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.8 + index * 0.2, // Much snappier timing
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Card - Responsive Design */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 h-full overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* EV Theme Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Mobile Layout - Horizontal on small screens */}
                    <div className="sm:hidden flex items-center gap-4 mb-4">
                      {/* Mobile Image */}
                      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden bg-white/5 border border-white/10 rounded">
                        <img
                          src={step.image}
                          alt={step.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>

                      {/* Mobile Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300 truncate pr-2">
                            {step.name}
                          </h3>
                          <div className="text-2xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300 flex-shrink-0">
                            0{step.id}
                          </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Layout - Vertical on larger screens */}
                    <div className="hidden sm:block">
                      {/* Step Number Header */}
                      <div className="flex items-center justify-end mb-4 lg:mb-6">
                        <div className="text-3xl lg:text-4xl font-black text-white/20 group-hover:text-white/30 transition-colors duration-300">
                          0{step.id}
                        </div>
                      </div>

                      {/* Desktop Image */}
                      <div className="relative h-48 sm:h-56 lg:h-64 mb-4 lg:mb-6 overflow-hidden bg-white/5 border border-white/10">
                        <img
                          src={step.image}
                          alt={step.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>

                      {/* Desktop Text Content */}
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                          {step.name}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300 pb-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line - Hidden on mobile, shown on large screens */}
                {index < components.length - 1 && (
                  <>
                    {/* Desktop horizontal connector */}
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-orange-400/60 to-transparent z-20"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={showContent ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <div className="absolute -right-1 -top-0.5 w-1 h-1 bg-orange-400 opacity-80"></div>
                    </motion.div>

                    {/* Mobile vertical connector */}
                    <motion.div 
                      className="block sm:block lg:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-orange-400/60 to-transparent z-20"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={showContent ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      <div className="absolute -bottom-1 -left-0.5 w-1 h-1 bg-orange-400 opacity-80"></div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}