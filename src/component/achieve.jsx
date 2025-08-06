"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Achieve = ({ default_velocity = 0.5, className }) => {
  const companies = [
    { img: "/ach2.png", alt: "Achievement 1", text: "2nd Runner-up" },
    { img: "/ach1.png", alt: "Achievement 2", text: "Top 10 Finalists" },
    { img: "/ach2.png", alt: "Achievement 1", text: "2nd Runner-up" },
    { img: "/ach1.png", alt: "Achievement 2", text: "Top 10 Finalists" },
  ];

  const ParallaxLogos = ({ companies, baseVelocity = 50, className }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && contentRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const contentWidth = contentRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / contentWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [companies]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="w-full overflow-hidden relative" ref={containerRef}>
        <div className="absolute left-0 top-0 w-24 sm:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 sm:w-32 h-auto bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none" />

        <motion.div
          className={cn("inline-block whitespace-nowrap py-8", className)}
          style={{ x }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? contentRef : null}
              className="inline-flex items-center"
            >
              {companies.map((company, index) => (
                <motion.div
                  key={`${i}-${index}`}
                  className="inline-flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-center mb-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {company.text}
                    </h3>
                  </div>
                  <img
                    src={company.img}
                    alt={company.alt}
                    className="h-10 sm:h-14 md:h-20 lg:h-24 xl:h-28 w-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="relative w-full  overflow-hidden">
      {/* Full-width blue background heading */}
<div className="w-full bg-blue-100 py-10">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-black leading-tight"
  >
    WHAT WEBBER HAS ACHIEVED AT WORLD STAGE
  </motion.h1>
</div>


      <div className="relative overflow-hidden">
        <ParallaxLogos
          companies={companies}
          baseVelocity={default_velocity}
          className={className}
        />
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-14 sm:w-16 h-14 sm:h-16 bg-cyan-500/10 rounded-full blur-2xl" />
      </div>
    </section>
  );
};
