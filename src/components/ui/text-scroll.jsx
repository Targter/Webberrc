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

export const TrustedPartnersScroll = ({
  default_velocity = 1,
  className,
}) => {
  // Hardcoded company data
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Spotify",
    "Slack",
    "Zoom",
    "Shopify",
    "Stripe",
    "Adobe",
    "Salesforce",
    "Oracle",
    "IBM"
  ]

  const ParallaxLogos = ({
    companies,
    baseVelocity = 100,
    className,
  }) => {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    })

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
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
        {/* Left blur gradient */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50 z-10 pointer-events-none" />
        
        {/* Right blur gradient */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/50 to-transparent dark:from-gray-900 dark:via-gray-900/50 z-10 pointer-events-none" />
        
        <motion.div className={cn("inline-block whitespace-nowrap", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <div key={i} ref={i === 0 ? contentRef : null} className="inline-flex items-center">
              {companies.map((company, index) => (
                <span
                  key={`${i}-${index}`}
                  className="inline-flex items-center justify-center mx-6 text-2xl font-semibold text-gray-800 dark:text-gray-200"
                >
                  {company}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Our Trusted Partners
        </h2>
      </div>
      
      <div className="relative overflow-hidden">
        <ParallaxLogos 
          companies={companies} 
          baseVelocity={default_velocity} 
          className={className} 
        />
      </div>
    </section>
  );
}