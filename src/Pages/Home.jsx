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
          src="bgvid/webberbg.mp4"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Main Content - Compact layout */}
      <div className="relative z-20 w-full h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-20 sm:pt-24">
        <div className="w-full h-full max-w-4xl mx-auto lg:mx-0">
          {/* Orange highlight text - Compact */}
          <div className={`mb-3 sm:mb-4 pt-20 pb-3 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
             
              <span className="text-white xl:text-lg  sm:text-sm font-medium tracking-wide uppercase">
                RELIABLE CHIP • RELIABLE BATTERY • RELIABLE RIDE 
              </span>
            </div>
          </div>

          {/* Main heading - Further reduced */}
          <h1 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold text-white leading-[0.9] mb-2 mt-6 sm:mb-3 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              TRUSTED
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              PERFORMANCE
            </span>
          </h1>
          
          {/* Description paragraph - Further reduced */}
          <p className={`xl:text-lg sm:text-sm text-gray-200 max-w-full sm:max-w-xl leading-relaxed mb-4 mt-2 sm:mb-6 font-light transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '600ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            Delivering cutting-edge Electric Vehicle Chips engineered with precision, durability, and intelligence — enabling smarter, safer, and more efficient automotive innovation.
          </p>

          {/* Compact Stats Section - Fixed alignment */}
          <div className={`flex justify-center sm:justify-start transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-fit">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group min-w-0"
                >
                  {/* Animated Number */}
                  <div className="mb-1">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                      {animatedStats[index]}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Stat Title */}
                  <h3 className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wide group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {stat.title}
                  </h3>
                  
                  {/* Decorative line */}
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
          hasLaunched 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '1200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex flex-col items-center space-y-2 group cursor-pointer">
          <span className="text-white/80 text-xs sm:text-sm font-light group-hover:text-white transition-colors duration-300">
            Scroll down
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
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