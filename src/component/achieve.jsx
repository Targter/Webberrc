"use client";
import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

import { cn } from "@/lib/utils"

export const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export const Achieve = ({
  default_velocity = 0.5, // Reduced velocity for better visibility
  className,
}) => {
  // Updated company data with images and text
  const companies = [
    { img: "/ach2.png", alt: "Achievement 1", text: "2nd Runner-up" },
    { img: "/ach1.png", alt: "Achievement 2", text: "Top 10 Finalists" },
    { img: "/ach2.png", alt: "Achievement 1", text: "2nd Runner-up" }, // Duplicated for better flow
    { img: "/ach1.png", alt: "Achievement 2", text: "Top 10 Finalists" },
  ]

  const ParallaxLogos = ({
    companies,
    baseVelocity = 50, // Reduced base velocity
    className,
  }) => {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    })

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
      clamp: false,
    })

    const [repetitions, setRepetitions] = useState(1)
    const containerRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && contentRef.current) {
          const containerWidth = containerRef.current.offsetWidth
          const contentWidth = contentRef.current.offsetWidth
          const newRepetitions = Math.ceil(containerWidth / contentWidth) + 2
          setRepetitions(newRepetitions)
        }
      }

      calculateRepetitions()

      window.addEventListener("resize", calculateRepetitions)
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [companies])

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`)

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get()

      baseX.set(baseX.get() + moveBy)
    })

    return (
      <div className="w-full overflow-hidden relative" ref={containerRef}>
        {/* Enhanced left blur gradient */}
        <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
        
        {/* Enhanced right blur gradient */}
        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
        
        <motion.div 
          className={cn("inline-block whitespace-nowrap py-8", className)} 
          style={{ x }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <div key={i} ref={i === 0 ? contentRef : null} className="inline-flex items-center">
              {companies.map((company, index) => (
                <motion.div
                  key={`${i}-${index}`}
                  className="inline-flex flex-col items-center justify-center mx-8 lg:mx-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-center mb-3">
                    <h3 className="text-lg md:text-xl lg:text-1xl font-bold text-gray-800 dark:text-gray-200">
                      {company.text}
                    </h3>
                  </div>
                  <img
                    src={company.img}
                    alt={company.alt}
                    className="h-10 w-auto md:h-24 lg:h-20 object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full py-28 overflow-hidden ">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
         <h1 className='text-5xl md:text-6xl lg:text-2xl oy-10  xl:text-6xl font-bold text-black leading-[0.9] mb-8 transition-all duration-1000 '
          >
            WHAT WEBBER HAS ACHIEVED AT WORLD STAGE
            
            
          </h1>
         
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing our global presence and achievements across international platforms
          </p> */}
        </motion.div>
      </div>
      
      <div className="relative overflow-hidden">
        <ParallaxLogos 
          companies={companies} 
          baseVelocity={default_velocity} 
          className={className} 
        />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl" />
      </div>
    </section>
  );
}