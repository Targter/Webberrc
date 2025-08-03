"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6 py-12 mx-auto max-w-7xl",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group flex justify-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-2 bg-gradient-to-br from-zinc-700  to-zinc-800 block rounded-2xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1.0],
                    delay: 0.05,
                  },
                }}
              />
            )}
          </AnimatePresence>
          <a href={item?.link} className="relative z-30 w-full max-w-md">
            <Card>
              {item.image && <CardImage src={item.image} alt={item.title} />}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.price && <CardPrice>{item.price}</CardPrice>}
              {item.specifications && <CardSpecs specs={item.specifications} />}
            </Card>
          </a>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl w-full p-4 overflow-hidden bg-gray-50/50 border-2 border-slate-200/60  relative z-20 min-h-[400px] shadow-lg transition-all duration-500 ease-out group-hover:shadow-xl group-hover:shadow-blue-500/10",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-emerald-500/2 to-slate-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      </div>
    </div>
  );
};

export const CardImage = ({ src, alt, className }) => {
  return (
    <div className="p-3 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 ring-1 ring-slate-200/60 group-hover:ring-blue-300/60 transition-all duration-500 ease-out">
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-48 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110",
          className
        )}
      />
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-slate-800 font-bold tracking-wide mt-6 text-2xl group-hover:text-blue-700 transition-colors duration-500 ease-out",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-6 text-slate-600 tracking-wide leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-500 ease-out",
        className
      )}
    >
      {children}
    </p>
  );
};
