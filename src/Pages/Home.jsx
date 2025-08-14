"use client";
import React, { useState, useEffect, useCallback } from "react";

const Home2 = () => {
  const [hasLaunched, setHasLaunched] = useState(false);

  // Optimized launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content - Fully responsive */}
      <div className="relative z-20 w-full h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="w-full max-w-4xl mx-auto lg:mx-0">
          {/* Orange highlight text - Responsive */}
          <div className={`mb-4 sm:mb-6 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-relaxed">
              RELIABLE CHIP • RELIABLE BATTERY • RELIABLE RIDE 
            </span>
          </div>

          {/* Main heading - Fully responsive typography */}
          <h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.85] sm:leading-[0.9] mb-6 sm:mb-8 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            TRUSTED<br />
            PERFORMANCE
          </h1>
          
          {/* Description paragraph - Responsive */}
          <p className={`text-sm sm:text-base md:text-lg text-gray-200 max-w-full sm:max-w-2xl leading-relaxed mb-8 sm:mb-10 font-light transition-all duration-1000 ${
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

          {/* CTA Button - Responsive */}
          <div className={`transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <button className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-transparent">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
          hasLaunched 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: '1000ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex flex-col items-center space-y-1 animate-bounce">
          <span className="text-white text-xs sm:text-sm font-light">Scroll down</span>
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home2;