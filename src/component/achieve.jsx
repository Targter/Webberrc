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
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 z-10 pointer-events-none" />

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
                  className="inline-flex flex-col items-center justify-center mx-8 md:mx-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-center mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200">
                      {company.text}
                    </h3>
                  </div>
                  <img
                    src={company.img}
                    alt={company.alt}
                    className="h-16 md:h-20 w-auto object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
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
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Refined header with purple-to-teal gradient */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 dark:from-purple-700 dark:via-indigo-700 dark:to-teal-600 py-8 md:py-12 text-white shadow-xl mt-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 text-sm md:text-base font-medium tracking-wider uppercase"
            >
              Excellence • Innovation • Achievement
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              WEBBER'S WORLD STAGE ACHIEVEMENTS
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Achievement carousel */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900">
        <ParallaxLogos
          companies={companies}
          baseVelocity={default_velocity}
          className={className}
        />
      </div>

      {/* Minimal decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-8 w-20 h-20 bg-purple-500/8 rounded-full blur-2xl" />
        <div className="absolute top-16 right-8 w-20 h-20 bg-teal-500/8 rounded-full blur-2xl" />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-indigo-500/6 rounded-full blur-2xl" />
      </div>
    </section>
  );
};