// // // // "use client";
// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import { useMotionValueEvent, useScroll } from "motion/react";
// // // // import { motion } from "motion/react";

// // // // const cn = (...classes) => {
// // // //   return classes.filter(Boolean).join(" ");
// // // // };

// // // // export const StickyScroll = ({ content, contentClassName }) => {
// // // //   const [activeCard, setActiveCard] = useState(0);
// // // //   const ref = useRef(null);

// // // //   const { scrollYProgress } = useScroll({
// // // //     container: ref,
// // // //     offset: ["start start", "end end"],
// // // //   });

// // // //   const cardLength = content.length;

// // // //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
// // // //     const cardsBreakpoints = content.map(
// // // //       (_, index) => index / (cardLength - 1)
// // // //     );
// // // //     const closestBreakpointIndex = cardsBreakpoints.reduce(
// // // //       (acc, breakpoint, index) => {
// // // //         const distance = Math.abs(latest - breakpoint);
// // // //         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
// // // //           return index;
// // // //         }
// // // //         return acc;
// // // //       },
// // // //       0
// // // //     );
// // // //     setActiveCard(closestBreakpointIndex);
// // // //   });

// // // //   const linearGradients = [
// // // //     "linear-gradient(to bottom right, #06b6d4, #10b981)",
// // // //     "linear-gradient(to bottom right, #ec4899, #6366f1)",
// // // //     "linear-gradient(to bottom right, #f97316, #eab308)",
// // // //     "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
// // // //     "linear-gradient(to bottom right, #10b981, #f59e0b)",
// // // //   ];

// // // //   const [backgroundGradient, setBackgroundGradient] = useState(
// // // //     linearGradients[0]
// // // //   );

// // // //   useEffect(() => {
// // // //     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
// // // //   }, [activeCard]);

// // // //   return (
// // // //     <div
// // // //       className="relative flex h-auto justify-center gap-12 overflow-y-auto bg-black p-8 scroll-smooth max-w-7xl mx-auto my-element"
// // // //       ref={ref}
// // // //       style={{
// // // //         scrollbarWidth: "thin",
// // // //         scrollbarColor: "#e2e8f0 transparent",
// // // //       }}
// // // //     >
// // // //       {/* Content Section */}
// // // //       <div className="relative flex items-start px-4 min-h-full border-r border-gray-200">
// // // //         <div className="max-w-xl pr-8">
// // // //           {content.map((item, index) => (
// // // //             <div key={item.title + index} className="my-20 first:mt-8">
// // // //               <motion.h2
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{
// // // //                   opacity: activeCard === index ? 1 : 0.4,
// // // //                   y: activeCard === index ? 0 : 5,
// // // //                 }}
// // // //                 transition={{ duration: 0.3, ease: "easeOut" }}
// // // //                 className="text-3xl font-bold text-white mb-4 leading-tight"
// // // //               >
// // // //                 {item.title}
// // // //               </motion.h2>
// // // //               <motion.p
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{
// // // //                   opacity: activeCard === index ? 1 : 0.4,
// // // //                   y: activeCard === index ? 0 : 5,
// // // //                 }}
// // // //                 transition={{ duration: 0.3, ease: "easeOut" }}
// // // //                 className="text-lg text-slate-100 leading-relaxed mb-6"
// // // //               >
// // // //                 {item.description}
// // // //               </motion.p>
// // // //               <motion.button
// // // //                 initial={{ opacity: 0, y: 10 }}
// // // //                 animate={{
// // // //                   opacity: activeCard === index ? 1 : 0.3,
// // // //                   y: activeCard === index ? 0 : 5,
// // // //                 }}
// // // //                 transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
// // // //                 className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden"
// // // //               >
// // // //                 <span className="relative z-10">Learn More</span>
// // // //                 <svg
// // // //                   className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// // // //                   fill="none"
// // // //                   stroke="currentColor"
// // // //                   viewBox="0 0 24 24"
// // // //                 >
// // // //                   <path
// // // //                     strokeLinecap="round"
// // // //                     strokeLinejoin="round"
// // // //                     strokeWidth={2}
// // // //                     d="M9 5l7 7-7 7"
// // // //                   />
// // // //                 </svg>
// // // //                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //               </motion.button>
// // // //             </div>
// // // //           ))}
// // // //           <div className="h-40" />
// // // //         </div>
// // // //       </div>

// // // //       {/* Visual Content Section */}
// // // //       <div
// // // //         style={{ background: backgroundGradient }}
// // // //         className={cn(
// // // //           "sticky top-8 h-[32rem] w-[28rem] overflow-hidden rounded-xl shadow-xl border border-gray-100",
// // // //           contentClassName
// // // //         )}
// // // //       >
// // // //         <motion.div
// // // //           key={activeCard}
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ duration: 0.3, ease: "easeOut" }}
// // // //           className="w-full h-full"
// // // //         >
// // // //           {content[activeCard]?.content ?? null}
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Sample data with high-quality content
// // // // const sampleContent = [
// // // //   {
// // // //     title: "AI-Powered Innovation",
// // // //     description:
// // // //       "Transform your business with cutting-edge artificial intelligence that learns, adapts, and delivers intelligent solutions tailored to your unique challenges and operational needs.",
// // // //     content: (
// // // //       <div className="relative h-full w-full">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=500&fit=crop&crop=center"
// // // //           alt="AI Innovation"
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // //         <div className="absolute bottom-8 left-8 right-8">
// // // //           <h3 className="text-2xl font-bold text-white mb-2">
// // // //             Intelligent Solutions
// // // //           </h3>
// // // //           <p className="text-white/90 text-sm">
// // // //             Advanced AI that adapts to your business needs
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     ),
// // // //   },
// // // //   {
// // // //     title: "Cloud Architecture",
// // // //     description:
// // // //       "Build scalable, secure, and high-performance applications with our enterprise-grade cloud infrastructure designed for the modern digital landscape and future growth.",
// // // //     content: (
// // // //       <div className="relative h-full w-full">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop&crop=center"
// // // //           alt="Cloud Infrastructure"
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // //         <div className="absolute bottom-8 left-8 right-8">
// // // //           <h3 className="text-2xl font-bold text-white mb-2">
// // // //             Scalable Infrastructure
// // // //           </h3>
// // // //           <p className="text-white/90 text-sm">
// // // //             Enterprise-grade cloud solutions for modern apps
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     ),
// // // //   },
// // // //   {
// // // //     title: "Data Intelligence",
// // // //     description:
// // // //       "Unlock actionable insights from your data with advanced analytics, real-time visualization, and AI-driven recommendations that drive informed decision-making across your organization.",
// // // //     content: (
// // // //       <div className="relative h-full w-full">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop&crop=center"
// // // //           alt="Data Analytics"
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // //         <div className="absolute bottom-8 left-8 right-8">
// // // //           <h3 className="text-2xl font-bold text-white mb-2">
// // // //             Smart Analytics
// // // //           </h3>
// // // //           <p className="text-white/90 text-sm">
// // // //             Transform data into actionable business insights
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     ),
// // // //   },
// // // //   {
// // // //     title: "Mobile Excellence",
// // // //     description:
// // // //       "Create exceptional mobile experiences with cross-platform applications that combine beautiful design, seamless performance, and intuitive user interfaces that users love.",
// // // //     content: (
// // // //       <div className="relative h-full w-full">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center"
// // // //           alt="Mobile Development"
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // //         <div className="absolute bottom-8 left-8 right-8">
// // // //           <h3 className="text-2xl font-bold text-white mb-2">
// // // //             Mobile Innovation
// // // //           </h3>
// // // //           <p className="text-white/90 text-sm">
// // // //             Cross-platform apps with exceptional UX
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     ),
// // // //   },
// // // //   {
// // // //     title: "Digital Security",
// // // //     description:
// // // //       "Protect your digital assets with comprehensive cybersecurity solutions that provide multi-layered protection, threat detection, and incident response capabilities.",
// // // //     content: (
// // // //       <div className="relative h-full w-full">
// // // //         <img
// // // //           src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&crop=center"
// // // //           alt="Cybersecurity"
// // // //           className="h-full w-full object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
// // // //         <div className="absolute bottom-8 left-8 right-8">
// // // //           <h3 className="text-2xl font-bold text-white mb-2">
// // // //             Advanced Security
// // // //           </h3>
// // // //           <p className="text-white/90 text-sm">
// // // //             Comprehensive protection for your digital assets
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     ),
// // // //   },
// // // // ];

// // // // // Demo component
// // // // export default function StickyScrollDemo() {
// // // //   return (
// // // //     <div className="min-h-screen  ">
// // // //       {/* Hero Section */}
// // // //       <div className="py-20 px-4 bg-black">
// // // //         <div className="text-center mb-10 bg-black">
// // // //           <div className="transition-all duration-700 delay-200 opacity-100 translate-y-0">
// // // //             <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
// // // //               Why choose Webber?
// // // //             </h3>
// // // //           </div>

// // // //           <div className="transition-all duration-700 delay-400 opacity-100 translate-y-0">
// // // //             <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
// // // //               FIRST PRINCIPLE DESIGN APPROACH
// // // //             </h1>
// // // //           </div>

// // // //           <div className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0">
// // // //             <span className="text-white">Value</span>
// // // //             <span className="text-gray-300">|</span>
// // // //             <span className="text-white">Reliable</span>
// // // //             <span className="text-gray-300">|</span>
// // // //             <span className="text-white">Agile</span>
// // // //           </div>
// // // //         </div>
// // // //         <StickyScroll content={sampleContent} />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // import React, { useEffect, useRef, useState } from "react";
// // // import { useMotionValueEvent, useScroll } from "motion/react";
// // // import { motion } from "motion/react";

// // // const cn = (...classes) => {
// // //   return classes.filter(Boolean).join(" ");
// // // };

// // // export const StickyScroll = ({ content, contentClassName }) => {
// // //   const [activeCard, setActiveCard] = useState(0);
// // //   const ref = useRef(null);

// // //   const { scrollYProgress } = useScroll({
// // //     container: ref,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   const cardLength = content.length;

// // //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
// // //     const cardsBreakpoints = content.map(
// // //       (_, index) => index / (cardLength - 1)
// // //     );
// // //     const closestBreakpointIndex = cardsBreakpoints.reduce(
// // //       (acc, breakpoint, index) => {
// // //         const distance = Math.abs(latest - breakpoint);
// // //         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
// // //           return index;
// // //         }
// // //         return acc;
// // //       },
// // //       0
// // //     );
// // //     setActiveCard(closestBreakpointIndex);
// // //   });

// // //   const linearGradients = [
// // //     "linear-gradient(to bottom right, #06b6d4, #10b981)",
// // //     "linear-gradient(to bottom right, #ec4899, #6366f1)",
// // //     "linear-gradient(to bottom right, #f97316, #eab308)",
// // //     "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
// // //     "linear-gradient(to bottom right, #10b981, #f59e0b)",
// // //   ];

// // //   return (
// // //     <div
// // //       className="relative flex flex-col h-auto justify-center overflow-y-auto bg-black p-8 scroll-smooth max-w-7xl mx-auto"
// // //       ref={ref}
// // //       style={{
// // //         scrollbarWidth: "thin",
// // //         scrollbarColor: "#e2e8f0 transparent",
// // //       }}
// // //     >
// // //       {content.map((item, index) => (
// // //         <motion.div
// // //           key={item.title + index}
// // //           className="flex flex-row items-center justify-center mt-8"
// // //           initial={{ opacity: 0, y: 50 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true, margin: "-20%" }}
// // //           transition={{
// // //             duration: 0.6,
// // //             ease: "easeOut",
// // //             delay: index * 0.1,
// // //           }}
// // //         >
// // //           {/* Content Section */}
// // //           <div className="flex-1 max-w-xl ">
// // //             <motion.h2
// // //               initial={{ opacity: 0, x: -30 }}
// // //               animate={{
// // //                 opacity: activeCard === index ? 1 : 0.7,
// // //                 x: activeCard === index ? 0 : -10,
// // //               }}
// // //               transition={{ duration: 0.5, ease: "easeOut" }}
// // //               className="text-3xl font-bold text-white mb-4 leading-tight"
// // //             >
// // //               {item.title}
// // //             </motion.h2>
// // //             <motion.p
// // //               initial={{ opacity: 0, x: -30 }}
// // //               animate={{
// // //                 opacity: activeCard === index ? 1 : 0.6,
// // //                 x: activeCard === index ? 0 : -10,
// // //               }}
// // //               transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
// // //               className="text-lg text-white leading-relaxed mb-6"
// // //             >
// // //               {item.description}
// // //             </motion.p>
// // //             <motion.button
// // //               initial={{ opacity: 0, x: -30 }}
// // //               animate={{
// // //                 opacity: activeCard === index ? 1 : 0.5,
// // //                 x: activeCard === index ? 0 : -10,
// // //               }}
// // //               transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden"
// // //             >
// // //               <span className="relative z-10">Learn More</span>
// // //               <svg
// // //                 className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   strokeWidth={2}
// // //                   d="M9 5l7 7-7 7"
// // //                 />
// // //               </svg>
// // //               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //             </motion.button>
// // //           </div>

// // //           {/* Visual Content Section - Image on the right */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.8, x: 50 }}
// // //             animate={{
// // //               opacity: activeCard === index ? 1 : 0.4,
// // //               scale: activeCard === index ? 1 : 0.9,
// // //               x: activeCard === index ? 0 : 20,
// // //             }}
// // //             transition={{
// // //               duration: 0.7,
// // //               ease: [0.25, 0.1, 0.25, 1],
// // //               delay: index * 0.15,
// // //             }}
// // //             whileHover={{ scale: 1.02 }}
// // //             className={cn(
// // //               "h-[12rem] w-[28rem] overflow-hidden rounded-2xl shadow-2xl border border-white/20 flex-shrink-0 ",
// // //               contentClassName
// // //             )}
// // //             style={{
// // //               background: linearGradients[index % linearGradients.length],
// // //             }}
// // //           >
// // //             {item.content}
// // //           </motion.div>
// // //         </motion.div>
// // //       ))}
// // //       <div className="h-40" />
// // //     </div>
// // //   );
// // // };

// // // // Sample data with high-quality content
// // // const sampleContent = [
// // //   {
// // //     title: "AI-Powered Innovation",
// // //     description:
// // //       "Transform your business with cutting-edge artificial intelligence that learns, adapts, and delivers intelligent solutions tailored to your unique challenges and operational needs.",
// // //     content: (
// // //       <div className="relative h-full w-full">
// // //         <img
// // //           src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=500&fit=crop&crop=center"
// // //           alt="AI Innovation"
// // //           className="h-full w-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// // //         <div className="absolute bottom-8 left-8 right-8">
// // //           <h3 className="text-2xl font-bold text-white mb-2">
// // //             Intelligent Solutions
// // //           </h3>
// // //           <p className="text-white/90 text-sm">
// // //             Advanced AI that adapts to your business needs
// // //           </p>
// // //         </div>
// // //       </div>
// // //     ),
// // //   },
// // //   {
// // //     title: "Cloud Architecture",
// // //     description:
// // //       "Build scalable, secure, and high-performance applications with our enterprise-grade cloud infrastructure designed for the modern digital landscape and future growth.",
// // //     content: (
// // //       <div className="relative h-full w-full">
// // //         <img
// // //           src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop&crop=center"
// // //           alt="Cloud Infrastructure"
// // //           className="h-full w-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// // //         <div className="absolute bottom-8 left-8 right-8">
// // //           <h3 className="text-2xl font-bold text-white mb-2">
// // //             Scalable Infrastructure
// // //           </h3>
// // //           <p className="text-white/90 text-sm">
// // //             Enterprise-grade cloud solutions for modern apps
// // //           </p>
// // //         </div>
// // //       </div>
// // //     ),
// // //   },
// // //   {
// // //     title: "Data Intelligence",
// // //     description:
// // //       "Unlock actionable insights from your data with advanced analytics, real-time visualization, and AI-driven recommendations that drive informed decision-making across your organization.",
// // //     content: (
// // //       <div className="relative h-full w-full">
// // //         <img
// // //           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop&crop=center"
// // //           alt="Data Analytics"
// // //           className="h-full w-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// // //         <div className="absolute bottom-8 left-8 right-8">
// // //           <h3 className="text-2xl font-bold text-white mb-2">
// // //             Smart Analytics
// // //           </h3>
// // //           <p className="text-white/90 text-sm">
// // //             Transform data into actionable business insights
// // //           </p>
// // //         </div>
// // //       </div>
// // //     ),
// // //   },
// // //   {
// // //     title: "Mobile Excellence",
// // //     description:
// // //       "Create exceptional mobile experiences with cross-platform applications that combine beautiful design, seamless performance, and intuitive user interfaces that users love.",
// // //     content: (
// // //       <div className="relative h-full w-full">
// // //         <img
// // //           src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center"
// // //           alt="Mobile Development"
// // //           className="h-full w-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// // //         <div className="absolute bottom-8 left-8 right-8">
// // //           <h3 className="text-2xl font-bold text-white mb-2">
// // //             Mobile Innovation
// // //           </h3>
// // //           <p className="text-white/90 text-sm">
// // //             Cross-platform apps with exceptional UX
// // //           </p>
// // //         </div>
// // //       </div>
// // //     ),
// // //   },
// // //   {
// // //     title: "Digital Security",
// // //     description:
// // //       "Protect your digital assets with comprehensive cybersecurity solutions that provide multi-layered protection, threat detection, and incident response capabilities.",
// // //     content: (
// // //       <div className="relative h-full w-full">
// // //         <img
// // //           src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&crop=center"
// // //           alt="Cybersecurity"
// // //           className="h-full w-full object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// // //         <div className="absolute bottom-8 left-8 right-8">
// // //           <h3 className="text-2xl font-bold text-white mb-2">
// // //             Advanced Security
// // //           </h3>
// // //           <p className="text-white/90 text-sm">
// // //             Comprehensive protection for your digital assets
// // //           </p>
// // //         </div>
// // //       </div>
// // //     ),
// // //   },
// // // ];

// // // // Demo component
// // // export default function StickyScrollDemo() {
// // //   return (
// // //     <div className="min-h-screen bg-black">
// // //       {/* Hero Section */}
// // //       <div className="py-20 px-4">
// // //         <div className="text-center mb-10">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.7, ease: "easeOut" }}
// // //             className="transition-all duration-700 delay-200 opacity-100 translate-y-0"
// // //           >
// // //             <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
// // //               Why choose Webber?
// // //             </h3>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
// // //             className="transition-all duration-700 delay-400 opacity-100 translate-y-0"
// // //           >
// // //             <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
// // //               FIRST PRINCIPLE DESIGN APPROACH
// // //             </h1>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
// // //             className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0"
// // //           >
// // //             <span className="text-white">Value</span>
// // //             <span className="text-gray-300">|</span>
// // //             <span className="text-white">Reliable</span>
// // //             <span className="text-gray-300">|</span>
// // //             <span className="text-white">Agile</span>
// // //           </motion.div>
// // //         </div>
// // //         <StickyScroll content={sampleContent} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import { useScroll, useTransform, motion } from "motion/react";
// // import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

// // const cn = (...classes) => {
// //   return classes.filter(Boolean).join(" ");
// // };

// // export const TimelineSticky = ({ content, contentClassName }) => {
// //   const ref = useRef(null);
// //   const containerRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start 10%", "end 50%"],
// //   });

// //   const cardLength = content.length;

// //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
// //     const cardsBreakpoints = content.map(
// //       (_, index) => index / (cardLength - 1)
// //     );
// //     const closestBreakpointIndex = cardsBreakpoints.reduce(
// //       (acc, breakpoint, index) => {
// //         const distance = Math.abs(latest - breakpoint);
// //         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
// //           return index;
// //         }
// //         return acc;
// //       },
// //       0
// //     );
// //     setActiveCard(closestBreakpointIndex);
// //   });

// //   const linearGradients = [
// //     "linear-gradient(to bottom right, #06b6d4, #10b981)",
// //     "linear-gradient(to bottom right, #ec4899, #6366f1)",
// //     "linear-gradient(to bottom right, #f97316, #eab308)",
// //     "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
// //     "linear-gradient(to bottom right, #10b981, #f59e0b)",
// //   ];

// //   // Add intersection observer to ensure animations trigger on scroll
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             // Animation will be handled by motion components
// //           }
// //         });
// //       },
// //       { threshold: 0.2 }
// //     );

// //     const cards = containerRef.current?.querySelectorAll(".card-item");
// //     cards?.forEach((card) => observer.observe(card));

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div
// //       className="relative flex flex-col h-auto justify-center overflow-y-auto bg-black p-8 scroll-smooth max-w-7xl mx-auto"
// //       ref={ref}
// //       style={{
// //         scrollbarWidth: "thin",
// //         scrollbarColor: "#e2e8f0 transparent",
// //       }}
// //     >
// //       <div ref={containerRef}>
// //         {content.map((item, index) => (
// //           <motion.div
// //             key={item.title + index}
// //             className="card-item flex flex-row items-center justify-center mt-8 gap-3"
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: false, margin: "-20%" }} // Changed once to false to always animate
// //             transition={{
// //               duration: 0.6,
// //               ease: "easeOut",
// //               delay: index * 0.1,
// //             }}
// //           >
// //             {/* Content Section */}
// //             <div className="flex-1 max-w-xl ">
// //               <motion.h2
// //                 initial={{ opacity: 0, x: -30 }}
// //                 animate={{
// //                   opacity: activeCard === index ? 1 : 0.7,
// //                   x: activeCard === index ? 0 : -10,
// //                 }}
// //                 transition={{ duration: 0.5, ease: "easeOut" }}
// //                 className="text-3xl font-bold text-white mb-4 leading-tight"
// //               >
// //                 {item.title}
// //               </motion.h2>
// //               <motion.p
// //                 initial={{ opacity: 0, x: -30 }}
// //                 animate={{
// //                   opacity: activeCard === index ? 1 : 0.6,
// //                   x: activeCard === index ? 0 : -10,
// //                 }}
// //                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
// //                 className="text-lg text-white leading-relaxed mb-6"
// //               >
// //                 {item.description}
// //               </motion.p>
// //               <motion.button
// //                 initial={{ opacity: 0, x: -30 }}
// //                 animate={{
// //                   opacity: activeCard === index ? 1 : 0.5,
// //                   x: activeCard === index ? 0 : -10,
// //                 }}
// //                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden"
// //               >
// //                 <span className="relative z-10">Learn More</span>
// //                 <svg
// //                   className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M9 5l7 7-7 7"
// //                   />
// //                 </svg>
// //                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //               </motion.button>
// //             </div>

// //             {/* Visual Content Section - Image on the right */}
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.8, x: 50 }}
// //               animate={{
// //                 opacity: activeCard === index ? 1 : 0.4,
// //                 scale: activeCard === index ? 1 : 0.9,
// //                 x: activeCard === index ? 0 : 20,
// //               }}
// //               transition={{
// //                 duration: 0.7,
// //                 ease: [0.25, 0.1, 0.25, 1],
// //                 delay: index * 0.15,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 scale: 1,
// //                 x: 0,
// //                 transition: { duration: 0.7 },
// //               }}
// //               viewport={{ once: false }} // Changed to false to always animate
// //               whileHover={{ scale: 1.02 }}
// //               className={cn(
// //                 "h-[12rem] w-[28rem] overflow-hidden rounded-2xl shadow-2xl border border-white/20 flex-shrink-0 transition-all duration-300",
// //                 contentClassName,
// //                 activeCard === index ? "brightness-100" : "brightness-50" // Added brightness control for active state
// //               )}
// //               style={{
// //                 background: linearGradients[index % linearGradients.length],
// //               }}
// //             >
// //               {item.content}
// //             </motion.div>
// //           </motion.div>
// //         ))}
// //       </div>
// //       <div className="h-40" />
// //     </div>
// //   );
// // };

// // // Sample data with high-quality content (keeping your original data)
// // const sampleContent = [
// //   {
// //     title: "AI-Powered Innovation",
// //     description:
// //       "Transform your business with cutting-edge artificial intelligence that learns, adapts, and delivers intelligent solutions tailored to your unique challenges and operational needs.",
// //     content: (
// //       <div className="relative h-full w-full">
// //         <img
// //           src="/rd/battery2.png"
// //           alt="Easy Battery Pack Paralleling"
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //         <div className="absolute bottom-8 left-8 right-8">
// //           <h3 className="text-2xl font-bold text-white mb-2">
// //             Intelligent Solutions
// //           </h3>
// //           <p className="text-white/90 text-sm">
// //             Advanced AI that adapts to your business needs
// //           </p>
// //         </div>
// //       </div>
// //     ),
// //   },
// //   {
// //     title: "Cloud Architecture",
// //     description:
// //       "Build scalable, secure, and high-performance applications with our enterprise-grade cloud infrastructure designed for the modern digital landscape and future growth.",
// //     content: (
// //       <div className="relative h-full w-full">
// //         <img
// //           src="/rd/reliable2.png"
// //           alt="Unparalleled Reliability"
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //         <div className="absolute bottom-8 left-8 right-8">
// //           <h3 className="text-2xl font-bold text-white mb-2">
// //             Scalable Infrastructure
// //           </h3>
// //           <p className="text-white/90 text-sm">
// //             Enterprise-grade cloud solutions for modern apps
// //           </p>
// //         </div>
// //       </div>
// //     ),
// //   },
// //   {
// //     title: "Data Intelligence",
// //     description:
// //       "Unlock actionable insights from your data with advanced analytics, real-time visualization, and AI-driven recommendations that drive informed decision-making across your organization.",
// //     content: (
// //       <div className="relative h-full w-full">
// //         <img
// //           src="/rd/balance.png"
// //           alt="Better Cell Balancing"
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //         <div className="absolute bottom-8 left-8 right-8">
// //           <h3 className="text-2xl font-bold text-white mb-2">
// //             Smart Analytics
// //           </h3>
// //           <p className="text-white/90 text-sm">
// //             Transform data into actionable business insights
// //           </p>
// //         </div>
// //       </div>
// //     ),
// //   },
// //   {
// //     title: "Mobile Excellence",
// //     description:
// //       "Create exceptional mobile experiences with cross-platform applications that combine beautiful design, seamless performance, and intuitive user interfaces that users love.",
// //     content: (
// //       <div className="relative h-full w-full">
// //         <img
// //           src="/rd/thermal.png"
// //           alt="Superior Thermal Stability"
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //         <div className="absolute bottom-8 left-8 right-8">
// //           <h3 className="text-2xl font-bold text-white mb-2">
// //             Mobile Innovation
// //           </h3>
// //           <p className="text-white/90 text-sm">
// //             Cross-platform apps with exceptional UX
// //           </p>
// //         </div>
// //       </div>
// //     ),
// //   },
// //   {
// //     title: "Digital Security",
// //     description:
// //       "Protect your digital assets with comprehensive cybersecurity solutions that provide multi-layered protection, threat detection, and incident response capabilities.",
// //     content: (
// //       <div className="relative h-full w-full">
// //         <img
// //           src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop&crop=center"
// //           alt="Cybersecurity"
// //           className="h-full w-full object-cover"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //         <div className="absolute bottom-8 left-8 right-8">
// //           <h3 className="text-2xl font-bold text-white mb-2">
// //             Advanced Security
// //           </h3>
// //           <p className="text-white/90 text-sm">
// //             Comprehensive protection for your digital assets
// //           </p>
// //         </div>
// //       </div>
// //     ),
// //   },
// // ];

// // // Demo component
// // export default function TimelineStickyDemo() {
// //   return (
// //     <div className="min-h-screen bg-black">
// //       {/* Hero Section */}
// //       <div className="py-20 px-4">
// //         <div className="text-center mb-10">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, ease: "easeOut" }}
// //             className="transition-all duration-700 delay-200 opacity-100 translate-y-0"
// //           >
// //             <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
// //               Why choose Webber?
// //             </h3>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
// //             className="transition-all duration-700 delay-400 opacity-100 translate-y-0"
// //           >
// //             <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
// //               FIRST PRINCIPLE DESIGN APPROACH
// //             </h1>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
// //             className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0"
// //           >
// //             <span className="text-white">Value</span>
// //             <span className="text-gray-300">|</span>
// //             <span className="text-white">Reliable</span>
// //             <span className="text-gray-300">|</span>
// //             <span className="text-white">Agile</span>
// //           </motion.div>
// //         </div>
// //         <StickyScroll content={sampleContent} />
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll } from "motion/react";
// import { motion } from "motion/react";

// const cn = (...classes) => {
//   return classes.filter(Boolean).join(" ");
// };

// export const StickyScroll = ({ content, contentClassName }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef(null);
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     container: ref,
//     offset: ["start start", "end end"],
//   });

//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map(
//       (_, index) => index / (cardLength - 1)
//     );
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   const linearGradients = [
//     "linear-gradient(to bottom right, #06b6d4, #10b981)",
//     "linear-gradient(to bottom right, #ec4899, #6366f1)",
//     "linear-gradient(to bottom right, #f97316, #eab308)",
//     "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
//     "linear-gradient(to bottom right, #10b981, #f59e0b)",
//   ];

//   // Add intersection observer to ensure animations trigger on scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Animation will be handled by motion components
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const cards = containerRef.current?.querySelectorAll(".card-item");
//     cards?.forEach((card) => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   return (
//    <div
//       className="relative flex flex-col h-auto justify-center overflow-y-auto bg-black p-8 scroll-smooth max-w-7xl mx-auto"
//       ref={ref}
//       style={{
//         scrollbarWidth: "thin",
//         scrollbarColor: "#e2e8f0 transparent",
//       }}
//     >
//       <div ref={containerRef}>
//         {content.map((item, index) => (
//           <motion.div
//             key={item.title + index}
//             className="card-item flex flex-row items-center justify-center mt-8 gap-3"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, margin: "-20%" }}
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//               delay: index * 0.1,
//             }}
//           >
//             {/* Content Section */}
//             <div className="flex-1 max-w-xl ">
//               <motion.h2
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.7,
//                   x: activeCard === index ? 0 : -10,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="text-3xl font-bold text-white mb-4 leading-tight"
//               >
//                 {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.6,
//                   x: activeCard === index ? 0 : -10,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//                 className="text-lg text-white leading-relaxed mb-6"
//               >
//                 {item.description}
//               </motion.p>
//               <motion.button
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{
//                   opacity: activeCard === index ? 1 : 0.5,
//                   x: activeCard === index ? 0 : -10,
//                 }}
//                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden"
//               >
//                 <span className="relative z-10">Learn More</span>
//                 <svg
//                   className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </motion.button>
//             </div>

//             {/* Visual Content Section - Image on the right */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8, x: 50 }}
//               animate={{
//                 opacity: activeCard === index ? 1 : 0.4,
//                 scale: activeCard === index ? 1 : 0.9,
//                 x: activeCard === index ? 0 : 20,
//               }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.25, 0.1, 0.25, 1],
//                 delay: index * 0.15,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//                 transition: { duration: 0.7 },
//               }}
//               viewport={{ once: false }}
//               whileHover={{ scale: 1.02 }}
//               className={cn(
//                 "h-[15rem] w-[28rem] overflow-hidden rounded-2xl shadow-2xl border border-white/20 flex-shrink-0 transition-all duration-300 brightness-100",
//                 contentClassName
//                 // Removed the conditional brightness control - now all containers are bright
//               )}
//               style={{
//                 background: linearGradients[index % linearGradients.length],
//               }}
//             >
//               {item.content}
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="h-40" />
//     </div>
//   );
// };

// // Sample data with high-quality content
// const sampleContent = [
//   {
//     title: "Easy Battery Pack Paralleling",
//     description:
//       "State of the art battery pack paralleling technique without software communication between battery packs. Ensures seamless power delivery for maximum efficiency.",
//     content: (
//       <div className="relative h-full w-full">
//         <img
//           src="/rd/battery2.png"
//           alt="Easy Battery Pack Paralleling"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <div className="absolute bottom-8 left-8 right-8">
//           <h3 className="text-2xl font-bold text-white mb-2">
//             Seamless Power Delivery
//           </h3>
//           <p className="text-white/90 text-sm">
//             Paralleling made simple with no software dependencies
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Unparalleled Reliability",
//     description:
//       "Unbreakable design tested for millions of kms with over 15K deployments. Proven to remain infallible even under thousands of dead short circuits.",
//     content: (
//       <div className="relative h-full w-full">
//         <img
//           src="/rd/reliable2.png"
//           alt="Unparalleled Reliability"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <div className="absolute bottom-8 left-8 right-8">
//           <h3 className="text-2xl font-bold text-white mb-2">
//             Tested for Millions of Kms
//           </h3>
//           <p className="text-white/90 text-sm">
//             Rugged design trusted by 15K+ successful deployments
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Better Cell Balancing",
//     description:
//       "400mA balancing current works with advanced charging profile control algorithms for the fastest cell balancing and superior Depth of Discharge control.",
//     content: (
//       <div className="relative h-full w-full">
//         <img
//           src="/rd/balance.png"
//           alt="Better Cell Balancing"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <div className="absolute bottom-8 left-8 right-8">
//           <h3 className="text-2xl font-bold text-white mb-2">
//             Fast & Efficient Balancing
//           </h3>
//           <p className="text-white/90 text-sm">
//             400mA current + smart algorithms for better DoD control
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Superior Thermal Stability",
//     description:
//       "Highly optimized thermals achieved through an innovative MOSFET mounting technique. Extracts 2x better thermal performance from the PDU for safer operations.",
//     content: (
//       <div className="relative h-full w-full">
//         <img
//           src="/rd/thermal.png"
//           alt="Superior Thermal Stability"
//           className="h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         <div className="absolute bottom-8 left-8 right-8">
//           <h3 className="text-2xl font-bold text-white mb-2">
//             2x Better Thermal Performance
//           </h3>
//           <p className="text-white/90 text-sm">
//             Innovative MOSFET mounting delivers cooler efficiency
//           </p>
//         </div>
//       </div>
//     ),
//   },
// ];

// // Demo component
// export default function StickyScrollDemo() {
//   return (
//     <div className="min-h-screen bg-black">
//       {/* Hero Section */}
//       <div className="py-20 px-4">
//         <div className="text-center mb-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="transition-all duration-700 delay-200 opacity-100 translate-y-0"
//           >
//             <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-4 tracking-wide text-lg">
//               Why choose Webber?
//             </h3>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
//             className="transition-all duration-700 delay-400 opacity-100 translate-y-0"
//           >
//             <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-4 leading-tight">
//               FIRST PRINCIPLE DESIGN APPROACH
//             </h1>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
//             className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0"
//           >
//             <span className="text-white">Value</span>
//             <span className="text-gray-300">|</span>
//             <span className="text-white">Reliable</span>
//             <span className="text-gray-300">|</span>
//             <span className="text-white">Agile</span>
//           </motion.div>
//         </div>
//         <StickyScroll content={sampleContent} />
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (cardLength - 1)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
    "linear-gradient(to bottom right, #10b981, #f59e0b)",
  ];

  // Add intersection observer to ensure animations trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation will be handled by motion components
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = containerRef.current?.querySelectorAll(".card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative flex flex-col h-auto justify-center overflow-y-auto bg-black p-4 md:p-6 lg:p-8 scroll-smooth max-w-7xl mx-auto"
      ref={ref}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#e2e8f0 transparent",
      }}
    >
      <div ref={containerRef}>
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="card-item flex flex-col lg:flex-row items-center justify-center mt-6 md:mt-8 gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            {/* Content Section - Order changes on mobile */}
            <div className="flex-1 max-w-xl order-2 lg:order-1">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.7,
                  x: activeCard === index ? 0 : -10,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight text-center lg:text-left"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                  x: activeCard === index ? 0 : -10,
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="text-base md:text-lg text-white leading-relaxed mb-4 md:mb-6 text-center lg:text-left"
              >
                {item.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                  x: activeCard === index ? 0 : -10,
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 overflow-hidden mx-auto lg:mx-0 block"
              >
                <span className="relative z-10 text-sm md:text-base">
                  Learn More
                </span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Visual Content Section - Order changes on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.4,
                scale: activeCard === index ? 1 : 0.9,
                x: activeCard === index ? 0 : 20,
              }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: { duration: 0.7 },
              }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "h-[10rem] sm:h-[12rem] md:h-[15rem] w-full sm:w-[90%] md:w-[28rem] overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-white/20 flex-shrink-0 transition-all duration-300 brightness-100 order-1 lg:order-2",
                contentClassName
              )}
              style={{
                background: linearGradients[index % linearGradients.length],
              }}
            >
              {item.content}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="h-20 md:h-32 lg:h-40" />
    </div>
  );
};

// Sample data with high-quality content
const sampleContent = [
  {
    title: "Easy Battery Pack Paralleling",
    description:
      "State of the art battery pack paralleling technique without software communication between battery packs. Ensures seamless power delivery for maximum efficiency.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/battery2.png"
          alt="Easy Battery Pack Paralleling"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            Seamless Power Delivery
          </h3>
          <p className="text-white/90 text-xs md:text-sm">
            Paralleling made simple with no software dependencies
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Unparalleled Reliability",
    description:
      "Unbreakable design tested for millions of kms with over 15K deployments. Proven to remain infallible even under thousands of dead short circuits.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/reliable2.png"
          alt="Unparalleled Reliability"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            Tested for Millions of Kms
          </h3>
          <p className="text-white/90 text-xs md:text-sm">
            Rugged design trusted by 15K+ successful deployments
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Better Cell Balancing",
    description:
      "400mA balancing current works with advanced charging profile control algorithms for the fastest cell balancing and superior Depth of Discharge control.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/balance.png"
          alt="Better Cell Balancing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            Fast & Efficient Balancing
          </h3>
          <p className="text-white/90 text-xs md:text-sm">
            400mA current + smart algorithms for better DoD control
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Superior Thermal Stability",
    description:
      "Highly optimized thermals achieved through an innovative MOSFET mounting technique. Extracts 2x better thermal performance from the PDU for safer operations.",
    content: (
      <div className="relative h-full w-full">
        <img
          src="/rd/thermal.png"
          alt="Superior Thermal Stability"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
            2x Better Thermal Performance
          </h3>
          <p className="text-white/90 text-xs md:text-sm">
            Innovative MOSFET mounting delivers cooler efficiency
          </p>
        </div>
      </div>
    ),
  },
];

// Demo component
export default function StickyScrollDemo() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="py-12 md:py-16 lg:py-20 px-4">
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="transition-all duration-700 delay-200 opacity-100 translate-y-0"
          >
            <h3 className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-yellow-400 pb-1 inline-block mb-3 md:mb-4 tracking-wide text-base md:text-lg">
              Why choose Webber?
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="transition-all duration-700 delay-400 opacity-100 translate-y-0"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mb-3 md:mb-4 leading-tight">
              FIRST PRINCIPLE DESIGN APPROACH
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg font-medium text-white transition-all duration-700 delay-800 opacity-100 translate-y-0"
          >
            <span className="text-white">Value</span>
            <span className="text-gray-300">|</span>
            <span className="text-white">Reliable</span>
            <span className="text-gray-300">|</span>
            <span className="text-white">Agile</span>
          </motion.div>
        </div>
        <StickyScroll content={sampleContent} />
      </div>
    </div>
  );
}
