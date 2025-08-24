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

export const MediaGallery = ({ default_velocity = 0.3, className }) => {
  const mediaImages = [
    { img: "/media/m1.jpg", alt: "Media Image 1" },
    { img: "/media/m2.jpg", alt: "Media Image 2" },
    { img: "/media/m3.jpg", alt: "Media Image 3" },
    { img: "/media/m4.jpg", alt: "Media Image 4" },
    { img: "/media/m5.jpg", alt: "Media Image 5" },
    { img: "/media/m6.jpg", alt: "Media Image 6" },
    { img: "/media/m3.jpg", alt: "Media Image 7" },
    { img: "/media/m2.jpg", alt: "Media Image 8" },
    { img: "/media/m1.jpg", alt: "Media Image 9" },
    { img: "/media/m5.jpg", alt: "Media Image 10" },
  ];

  const ParallaxMedia = ({ mediaImages, baseVelocity = 20, className }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 80,
      stiffness: 200,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
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
    }, [mediaImages]);

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
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/70 to-transparent z-10 pointer-events-none" />

        <motion.div
          className={cn("inline-block whitespace-nowrap py-6", className)}
          style={{ x }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? contentRef : null}
              className="inline-flex items-center gap-4"
            >
              {mediaImages.map((media, index) => (
                <motion.div
                  key={`${i}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={media.img}
                    alt={media.alt}
                    className="h-80 w-auto object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
    <section className="relative w-full bg-white">
      {/* Static Header Section - matching your image layout */}
      <div className="w-full py-16 md:py-20 bg-white">
        <div className="text-center max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            One Stop for <span className="text-blue-500">Every Drive</span><br />
            <span className="text-teal-400">and Every Device.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we're accelerating the earth's transition to an all-electric future - meet the team who makes it possible
          </p>
        </div>
      </div>

      {/* Fast-moving Media Carousel */}
      <div className="relative overflow-hidden bg-white pb-12">
        <ParallaxMedia
          mediaImages={mediaImages}
          baseVelocity={default_velocity * 20}
          className={className}
        />
      </div>
    </section>
  );
};