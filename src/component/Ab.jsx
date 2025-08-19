import React from "react";

const Ab = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col py-12 px-4">
      <div className="max-w-5xl text-white text-center mb-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
          Industry Applications
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Maxwell's solutions are designed to power a wide range of applications
        </p>
      </div>

      <div className="max-w-7xl w-full flex gap-11 mx-auto relative">
        {/* Stats Section - Fixed in middle of screen */}
        <div className="w-[300px] flex-shrink-0">
          <div className="fixed top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col gap-3 bg-red-600 p-6 rounded-lg z-10">
              <div className="text-center flex gap-3 items-center">
                <div className="text-xl md:text-2xl text-white">80,000+</div>
                <div className="text-xs text-gray-100">2/3 wheelers</div>
              </div>
              <div className="w-full h-[2px] bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>

              <div className="text-center gap-3 flex items-center">
                <div className="text-xl md:text-2xl text-white">12,000+</div>
                <div className="text-xs text-gray-100">stationary storage</div>
              </div>

              <div className="w-full h-[2px] bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>

              <div className="text-center flex gap-3 items-center">
                <div className="text-xl md:text-2xl text-white">1000+</div>
                <div className="text-xs text-gray-100">4 wheelers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Cards - Scrollable */}
        <div className="flex-grow ml-[300px]">
          <div className="gap-8 flex flex-col">
            {/* Electric 2 & 3-wheelers Card */}
            <div className="bg-gray-800 rounded-xl p-6 h-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Electric 2 & 3-wheelers
              </h3>
              <p className="text-gray-300 mb-6">
                Smart battery management solutions for Scooters, Bikes,
                Motorcycles & Rickshaws, optimizing range, charging protocols &
                application nuances
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>

            {/* Passenger and Commercial Vehicles Card */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passenger and Commercial Vehicles
              </h3>
              <p className="text-gray-300 mb-6">
                A smart BMS leveraging a distributed architecture to manage
                multiple smaller modules connected in a series-parallel fashion,
                essential to operate high-voltage packs
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>

            {/* Stationary Storage Card */}
            <div className="bg-gray-800 rounded-xl p-6 h-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stationary Storage
              </h3>
              <p className="text-gray-300 mb-6">
                Advanced battery management for grid-scale energy storage,
                residential and commercial backup power solutions with optimal
                efficiency and longevity
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>

            {/* Industrial Applications Card */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Industrial Applications
              </h3>
              <p className="text-gray-300 mb-6">
                Robust battery management systems for heavy machinery, mining
                equipment, and industrial vehicles requiring high-performance
                power solutions
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>

            {/* Additional card to demonstrate scrolling */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Marine Applications
              </h3>
              <p className="text-gray-300 mb-6">
                Specialized battery solutions for electric boats and marine
                equipment with enhanced corrosion resistance and safety features
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>

            {/* One more card for better scrolling demonstration */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Aerospace Applications
              </h3>
              <p className="text-gray-300 mb-6">
                High-performance battery systems for drones, electric aircraft,
                and aerospace applications with extreme weight and safety
                requirements
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ab;

// "use client";
// import React, { useEffect, useRef, useState } from "react";

// export const StickyScroll = ({ content, contentClassName }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef(null);
//   const cardLength = content.length;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const scrollContainer = ref.current;
//       const scrollPosition = scrollContainer.scrollTop;
//       const containerHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
//       const scrollPercentage = scrollPosition / containerHeight;

//       const cardsBreakpoints = content.map((_, index) => index / cardLength);
//       const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
//         const distance = Math.abs(scrollPercentage - breakpoint);
//         if (distance < Math.abs(scrollPercentage - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       }, 0);

//       setActiveCard(closestBreakpointIndex);
//     };

//     const scrollContainer = ref.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       // Trigger once to set initial state
//       handleScroll();

//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, [cardLength, content]);

//   const backgroundColors = [
//     "bg-slate-900",
//     "bg-black",
//     "bg-neutral-900",
//   ];

//   const linearGradients = [
//     "bg-gradient-to-br from-cyan-500 to-emerald-500",
//     "bg-gradient-to-br from-pink-500 to-indigo-500",
//     "bg-gradient-to-br from-orange-500 to-yellow-500",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

//   useEffect(() => {
//     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
//   }, [activeCard]);

//   return (
//     <div
//       className={`relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 transition-colors duration-500 ${backgroundColors[activeCard % backgroundColors.length]}`}
//       ref={ref}
//     >
//       <div className="relative flex items-start px-4">
//         <div className="max-w-2xl">
//           {content.map((item, index) => (
//             <div key={item.title + index} className="my-20">
//               <h2
//                 className={`text-2xl font-bold text-slate-100 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-30'}`}
//               >
//                 {item.title}
//               </h2>
//               <p
//                 className={`text-lg mt-10 max-w-sm text-slate-300 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-30'}`}
//               >
//                 {item.description}
//               </p>
//             </div>
//           ))}
//           <div className="h-40" />
//         </div>
//       </div>
//       <div
//         className={`sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md ${backgroundGradient} lg:flex items-center justify-center text-white text-xl font-bold ${contentClassName}`}
//       >
//         {content[activeCard].content ?? null}
//       </div>
//     </div>
//   );
// };

// // Demo component
// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: "Collaborative Editing"
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <img
//         src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fDB8fHww"
//         width={300}
//         height={300}
//         className="h-full w-full object-cover"
//         alt="linear board demo"
//       />
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates.",
//     content: "Version control"
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project.",
//     content: "Running out of content"
//   },
// ];

// export default function StickyScrollRevealDemo() {
//   return (
//     <div className="w-full py-4">
//       <StickyScroll content={content} />
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useRef, useState } from "react";

// const IndustryApplications = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef(null);

//   const content = [
//     {
//       title: "Electric 2 & 3-wheelers",
//       description: "Smart battery management solutions for Scooters, Bikes, Motorcycles & Rickshaws, optimizing range, charging protocols & application nuances",
//       stats: "80,000+",
//       statsLabel: "2/3 wheelers"
//     },
//     {
//       title: "Stationary Storage",
//       description: "Advanced BMS solutions for energy storage systems, providing efficient power management and longer lifespan for stationary applications",
//       stats: "12,000+",
//       statsLabel: "stationary storage"
//     },
//     {
//       title: "Passenger and Commercial Vehicles",
//       description: "A smart BMS leveraging a distributed architecture to manage multiple smaller modules connected in a series-parallel fashion, essential to operate high-voltage packs",
//       stats: "1000+",
//       statsLabel: "4 wheelers"
//     },
//     {
//       title: "Marine Applications",
//       description: "Robust battery management for marine vehicles, designed to withstand harsh environments while ensuring safety and performance",
//       stats: "500+",
//       statsLabel: "marine systems"
//     },
//     {
//       title: "Aerospace Solutions",
//       description: "High-performance BMS for aerospace applications with strict safety requirements and extreme operating conditions",
//       stats: "200+",
//       statsLabel: "aerospace systems"
//     },
//     {
//       title: "Industrial Equipment",
//       description: "Reliable battery management for heavy machinery and industrial equipment that demands durability and consistent performance",
//       stats: "5,000+",
//       statsLabel: "industrial systems"
//     }
//   ];

//   const cardLength = content.length;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;

//       const scrollContainer = ref.current;
//       const scrollPosition = scrollContainer.scrollTop;
//       const containerHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
//       const scrollPercentage = scrollPosition / containerHeight;

//       const cardsBreakpoints = content.map((_, index) => index / cardLength);
//       const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
//         const distance = Math.abs(scrollPercentage - breakpoint);
//         if (distance < Math.abs(scrollPercentage - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       }, 0);

//       setActiveCard(closestBreakpointIndex);
//     };

//     const scrollContainer = ref.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       handleScroll();

//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, [cardLength, content]);

//   const backgroundColors = [
//     "bg-gradient-to-br from-slate-900 to-slate-800",
//     "bg-gradient-to-br from-gray-900 to-gray-800",
//     "bg-gradient-to-br from-neutral-900 to-neutral-800",
//   ];

//   return (
//     <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 relative">
//       <div className="max-w-5xl text-white text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
//           Industry Applications
//         </h2>
//         <p className="text-lg md:text-xl text-gray-300">
//           Maxwell's solutions are designed to power a wide range of applications
//         </p>
//       </div>

//       <div className="max-w-7xl w-full flex gap-11 relative">
//         {/* Stats - Sticky Section */}
//         <div className="flex flex-col gap-6 mb-16 sticky top-11 h-fit">
//           {content.map((item, index) => (
//             <div key={index} className={`text-center flex gap-3 items-center transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-40'}`}>
//               <div className="text-xl md:text-2xl text-white font-bold">{item.stats}</div>
//               <div className="text-xs text-gray-50 uppercase tracking-wider">{item.statsLabel}</div>
//             </div>
//           ))}
//         </div>

//         {/* Application Cards with Scrollable Container */}
//         <div
//           ref={ref}
//           className="gap-8 flex flex-col relative h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-12"
//         >
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-xl p-6 h-auto w-full max-w-2xl transition-all duration-500 ${backgroundColors[index % backgroundColors.length]} border border-gray-700`}
//             >
//               <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
//               <p className="text-gray-300 mb-6">
//                 {item.description}
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndustryApplications;

// "use client";
// import { useState, useEffect } from "react";

// export default function SimpleFixedLayout() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen h-[2000px] bg-black p-4">
//       {/* Top scrolling div */}
//       <div className="mx-auto max-w-7xl bg-white rounded-lg shadow-md p-6 mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Top Section</h1>
//         <p className="text-gray-600">This top section scrolls with the page.</p>
//         <div className="mt-4 text-sm text-blue-500">
//           Scroll Position: {scrollPosition}px
//         </div>
//       </div>

//       <div className="flex gap-6 mx-auto max-w-7xl">
//         {/* Left fixed div */}
//         <div className="w-[200px] flex-shrink-0">
//           <div className="fixed w-[200px] bg-black rounded-lg shadow-md p-4 h-96">
//             <h2 className="font-semibold text-gray-800 mb-3">Fixed Panel</h2>
//             <p className="text-sm text-gray-600 mb-4">
//               This left panel stays fixed while scrolling.
//             </p>

//             <div className="space-y-2">
//               {["Home", "Profile", "Settings", "Messages", "Help"].map(
//                 (item) => (
//                   <div
//                     key={item}
//                     className="flex items-center py-2 px-3 rounded-md hover:bg-blue-50 cursor-pointer"
//                   >
//                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
//                     <span className="text-sm text-gray-700">{item}</span>
//                   </div>
//                 )
//               )}
//             </div>

//             <div className="absolute bottom-4 left-4 right-4 p-3 bg-gray-100 rounded-md">
//               <p className="text-xs text-gray-500">Fixed position element</p>
//             </div>
//           </div>
//         </div>

//         {/* Right scrolling div */}
//         <div className="flex-grow">
//           <div
//             className="bg-white rounded-lg shadow-md p-6"
//             style={{ height: "1000px" }}
//           >
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Scrollable Content
//             </h2>
//             <p className="text-gray-600 mb-6">
//               This right section has a fixed height and will scroll. The left
//               panel remains fixed.
//             </p>

//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {[1, 2, 3, 4].map((item) => (
//                 <div
//                   key={item}
//                   className="bg-gray-50 p-4 rounded-lg border border-gray-200"
//                 >
//                   <h3 className="font-medium text-gray-700 mb-2">
//                     Card {item}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Content that scrolls with the page
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mb-8">
//               <h3 className="font-semibold text-gray-700 mb-3">
//                 Content Section
//               </h3>
//               <div className="h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">
//                   Banner Area
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-4">
//               {Array.from({ length: 12 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start p-3 bg-gray-50 rounded-lg"
//                 >
//                   <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
//                     <span className="text-blue-600 font-medium">{i + 1}</span>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">Item {i + 1}</h4>
//                     <p className="text-sm text-gray-600">
//                       This is a description of the item to demonstrate
//                       scrolling.
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
//               <p className="text-blue-700">
//                 End of content area (1000px height)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
