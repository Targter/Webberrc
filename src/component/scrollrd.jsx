"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
    "linear-gradient(to bottom right, #10b981, #f59e0b)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className="relative flex h-[40rem] justify-center gap-12 overflow-y-auto bg-black p-8 scroll-smooth max-w-7xl mx-auto"
      ref={ref}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#e2e8f0 transparent'
      }}
    >
      {/* Content Section */}
      <div className="relative flex items-start px-4 min-h-full border-r border-gray-200">
        <div className="max-w-xl pr-8">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 first:mt-8">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 5,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-3xl font-bold text-white mb-4 leading-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                  y: activeCard === index ? 0 : 5,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-lg text-slate-100 leading-relaxed mb-6"
              >
                {item.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 5,
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Visual Content Section */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-8 h-[32rem] w-[28rem] overflow-hidden rounded-xl shadow-xl border border-gray-100",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full h-full"
        >
          {content[activeCard]?.content ?? null}
        </motion.div>
      </div>
    </div>
  );
};

// Sample data with high-quality content
const sampleContent = [
  {
    title: "AI-Powered Innovation",
    description: "Transform your business with cutting-edge artificial intelligence that learns, adapts, and delivers intelligent solutions tailored to your unique challenges and operational needs.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=500&fit=crop&crop=center"
          alt="AI Innovation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Intelligent Solutions</h3>
          <p className="text-white/90 text-sm">Advanced AI that adapts to your business needs</p>
        </div>
      </div>
    ),
  },
  {
    title: "Cloud Architecture",
    description: "Build scalable, secure, and high-performance applications with our enterprise-grade cloud infrastructure designed for the modern digital landscape and future growth.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop&crop=center"
          alt="Cloud Infrastructure"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Scalable Infrastructure</h3>
          <p className="text-white/90 text-sm">Enterprise-grade cloud solutions for modern apps</p>
        </div>
      </div>
    ),
  },
  {
    title: "Data Intelligence",
    description: "Unlock actionable insights from your data with advanced analytics, real-time visualization, and AI-driven recommendations that drive informed decision-making across your organization.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop&crop=center"
          alt="Data Analytics"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Smart Analytics</h3>
          <p className="text-white/90 text-sm">Transform data into actionable business insights</p>
        </div>
      </div>
    ),
  },
  {
    title: "Mobile Excellence",
    description: "Create exceptional mobile experiences with cross-platform applications that combine beautiful design, seamless performance, and intuitive user interfaces that users love.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center"
          alt="Mobile Development"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Mobile Innovation</h3>
          <p className="text-white/90 text-sm">Cross-platform apps with exceptional UX</p>
        </div>
      </div>
    ),
  },
  {
    title: "Digital Security",
    description: "Protect your digital assets with comprehensive cybersecurity solutions that provide multi-layered protection, threat detection, and incident response capabilities.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&crop=center"
          alt="Cybersecurity"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-2xl font-bold text-white mb-2">Advanced Security</h3>
          <p className="text-white/90 text-sm">Comprehensive protection for your digital assets</p>
        </div>
      </div>
    ),
  },
];

// Demo component
export default function StickyScrollDemo() {
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <div className="py-20 px-4 bg-black">
        {/* <div className="text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-slate-500 ">OUR OFFERINGS</p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-1 mb-3 rounded-full"></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-2 tracking-tight">
            Revolutionizing <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Electric</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Mobility</span> with our cutting-edge product line
          </h1>
        </div>
      </div> */}
       <div className="text-center mb-10 bg-black">
  <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
    <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
      Why choose Webber?
    </h3>
  </div>

  <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
    <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
      FIRST PRINCIPLE DESIGN APPROACH
    </h1>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0">
    <span className="text-white">Value</span>
    <span className="text-gray-300">|</span>
    <span className="text-white">Reliable</span>
    <span className="text-gray-300">|</span>
    <span className="text-white">Agile</span>
  </div>
</div>
      
        <StickyScroll content={sampleContent} />
      </div>

      
    </div>
  );
}