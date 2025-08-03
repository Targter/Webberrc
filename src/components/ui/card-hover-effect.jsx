"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 py-12 max-w-6xl mx-auto", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 block rounded-2xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { 
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  transition: { 
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: 0.05 
                  },
                }} />
            )}
          </AnimatePresence>
          <Card>
            {item.image && <CardImage src={item.image} alt={item.title} />}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 border-2 border-sky-500/20 group-hover:border-sky-400/50 relative z-20 min-h-[450px] shadow-xl transition-all duration-500 ease-out group-hover:shadow-sky-500/20 group-hover:shadow-2xl",
        className
      )}>
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-2xl" />
    </div>
  );
};

export const CardImage = ({
  src,
  alt,
  className
}) => {
  return (
    <div className="w-full h-72 mb-6 overflow-hidden rounded-xl ring-2 ring-sky-500/20 group-hover:ring-sky-400/40 transition-all duration-500 ease-out">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110",
          className
        )}
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-sky-100 font-bold tracking-wide mt-6 text-2xl group-hover:text-sky-200 transition-colors duration-500 ease-out", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}) => {
  return (
    <p
      className={cn("mt-6 text-slate-300 tracking-wide leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-500 ease-out", className)}>
      {children}
    </p>
  );
};