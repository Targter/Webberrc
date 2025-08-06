"use client";
import React, { useState, useEffect } from "react";

const Home2 = () => {
  const images = [
    "/bg/bg3.png",
    "/bg/bg6.png",
    "/bg/bg8.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasLaunched, setHasLaunched] = useState(false);

  // First launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    // if (!isAutoPlaying) return;
    
 

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Images with Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-[800ms] ease-linear ${
              index === currentSlide
                ? 'opacity-100'
                : 'opacity-0'
            } ${
              hasLaunched 
                ? 'scale-100' 
                : 'scale-110 opacity-0'
            }`}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              transitionDuration: hasLaunched ? '800ms' : '1200ms',
              transitionTimingFunction: hasLaunched ? 'linear' : 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Invisible Click Areas for Navigation */}
      <div
        onClick={prevSlide}
        className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
        aria-label="Previous slide"
      />
      
      <div
        onClick={nextSlide}
        className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
        aria-label="Next slide"
      />

      {/* Main Content - Matching the image layout exactly */}
      <div className="relative z-20 w-full h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          {/* Orange highlight text */}
          <div className={`mb-6 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: hasLaunched ? '200ms' : '200ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <span className="text-orange-500 text-sm font-medium tracking-[0.15em] uppercase">
              RELIABLE CHIPS.RELIABLE BATTERY.RELIABLE RIDE 
            </span>
          </div>

          {/* Main heading - exactly matching the image */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] mb-8 transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: hasLaunched ? '400ms' : '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            TRUSTED<br />
            PERFORMANCE
          </h1>
          
          {/* Description paragraph */}
          <p className={`text-base md:text-lg text-gray-300 max-w-xl leading-relaxed mb-10 font-light transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: hasLaunched ? '600ms' : '600ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            Delivering cutting-edge Electric Vehicle Chips engineered with precision, durability, and intelligence — enabling smarter, safer, and more efficient automotive innovation.
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 ${
            hasLaunched 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: hasLaunched ? '800ms' : '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-sm tracking-wide uppercase transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
     <div
  className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
    hasLaunched 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  }`}
  style={{
    transitionDelay: hasLaunched ? '1000ms' : '1000ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }}
>
  <div className="flex flex-col items-center space-y-1 animate-bounce">
    <span className="text-white text-sm">Scroll down</span>
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>


      {/* Chat/Contact Button (bottom right) */}
      {/* <div className={`fixed bottom-6 right-6 z-30 transition-all duration-1000 ${
        hasLaunched 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'
      }`}
      style={{
        transitionDelay: hasLaunched ? '1200ms' : '1200ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg mr-3">
          Get in Touch
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 transition-all duration-300 shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Home2;