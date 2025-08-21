"use client";
import React, { useState, useEffect, useCallback } from "react";

const Home2 = () => {
  const [hasLaunched, setHasLaunched] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  
  const stats = [
    { title: "Customers Served", amount: 150, suffix: "+" },
    { title: "Products", amount: 25, suffix: "+" },
    { title: "Years Experience", amount: 8, suffix: "+" },
  ];

  // Optimized launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (hasLaunched) {
      const timer = setTimeout(() => {
        stats.forEach((stat, index) => {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = stat.amount / steps;
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= stat.amount) {
              current = stat.amount;
              clearInterval(counter);
            }
            
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = Math.floor(current);
              return newStats;
            });
          }, duration / steps);
        });
      }, 1200); // Start after other animations

      return () => clearTimeout(timer);
    }
  }, [hasLaunched]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video with optimized loading */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="/bgvid/webberbg.mp4"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Main Content - Fixed responsive layout with reduced spacing for SM/MD */}
      <div className="relative z-20 w-full h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-20 sm:pt-24 md:pt-28 lg:pt-24">
        <div className="w-full h-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-4xl mx-auto lg:mx-0">
          {/* Orange highlight text - Left aligned for all sizes */}
          <div className={`mb-2 sm:mb-3 md:mb-4 lg:mb-8 pt-2 sm:pt-4 md:pt-6 lg:pt-20 pb-1 sm:pb-1 md:pb-2 lg:pb-4 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full border border-white/20">
              <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide uppercase leading-tight">
                <span className="hidden sm:inline">RELIABLE CHIP • RELIABLE BATTERY • RELIABLE RIDE</span>
                <span className="sm:hidden">RELIABLE • TRUSTED • INNOVATIVE</span>
              </span>
            </div>
          </div>

          {/* Main heading - Left aligned for all sizes */}
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight sm:leading-[0.85] md:leading-[0.9] mb-1 sm:mb-2 md:mb-3 lg:mb-6 mt-1 sm:mt-2 md:mt-3 lg:mt-6 transition-all duration-1000 text-left ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent block">
              TRUSTED
            </span>
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent block">
              PERFORMANCE
            </span>
          </h1>
          
          {/* Description paragraph - Left aligned for all sizes */}
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-200 max-w-full leading-relaxed mb-3 sm:mb-4 md:mb-5 lg:mb-8 mt-1 sm:mt-2 md:mt-3 lg:mt-6 font-light transition-all duration-1000 text-left ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <span className="hidden md:inline">Delivering cutting-edge Electric Vehicle Chips engineered with precision, durability, and intelligence enabling smarter, safer, and more efficient automotive innovation.</span>
            <span className="md:hidden">Delivering cutting-edge Electric Vehicle Chips engineered with precision and intelligence for smarter automotive innovation.</span>
          </p>

          {/* Stats Section - Left aligned and reduced spacing */}
          <div className={`flex justify-start transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-fit">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-left group min-w-0"
                >
                  {/* Animated Number */}
                  <div className="mb-1 sm:mb-2">
                    <span className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                      {animatedStats[index]}
                    </span>
                    <span className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Stat Title */}
                  <h3 className="text-xs sm:text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                    <span className="hidden sm:inline">{stat.title}</span>
                    <span className="sm:hidden">
                      {stat.title === "Customers Served" ? "Customers" : 
                       stat.title === "Years Experience" ? "Years" : stat.title}
                    </span>
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-3 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-400 to-transparent mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* <div
        className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
          hasLaunched 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '1200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex flex-col items-center space-y-1 sm:space-y-2 group cursor-pointer">
          <span className="text-white/80 text-xs sm:text-sm font-light group-hover:text-white transition-colors duration-300">
            Scroll down
          </span>
          <div className="w-4 sm:w-5 md:w-6 h-6 sm:h-8 md:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
            <div className="w-0.5 sm:w-0.5 md:w-1 h-1.5 sm:h-2 md:h-3 bg-white/60 rounded-full mt-1 sm:mt-1.5 md:mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
          </div>
        </div>
      </div> */}

      {/* Floating particles effect - Responsive count and sizing */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Mobile: 3 particles, SM: 4 particles, MD+: 6 particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-cyan-400/30 rounded-full animate-pulse ${
              i >= 3 ? 'hidden sm:block' : ''
            } ${
              i >= 4 ? 'hidden md:block' : ''
            } w-0.5 h-0.5 sm:w-1 sm:h-1`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home2;