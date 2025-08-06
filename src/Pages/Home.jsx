"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home2 = () => {
  const images = ["/bg/bg3.png", "/bg/bg6.png", "/bg/bg8.png"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hasLaunched, setHasLaunched] = useState(false);

  // First launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 100); // Small delay to ensure smooth animation start

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance disabled for now
  // useEffect(() => {
  //   if (!isAutoPlaying) return;
  //   
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Auto-play functionality disabled for now
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Images with Overlapping Animation */}
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
              transform: 'translateZ(0)', // Force hardware acceleration
              backfaceVisibility: 'hidden', // Prevent blur during transitions
              transitionDuration: hasLaunched ? '800ms' : '1200ms',
              transitionTimingFunction: hasLaunched ? 'linear' : 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white group ${
          hasLaunched 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`}
        style={{
          transitionDelay: hasLaunched ? '0ms' : '800ms',
          transitionDuration: '600ms'
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white group ${
          hasLaunched 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
        }`}
        style={{
          transitionDelay: hasLaunched ? '0ms' : '800ms',
          transitionDuration: '600ms'
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Over Images */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-8">
        {/* Header */}
        {/* <div className="flex justify-between items-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            WEBBER ELECTRO CORP
          </h1>
          <div className="flex items-center space-x-6">
            <div className="w-8 h-8 flex flex-col justify-center space-y-1 cursor-pointer">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl">
            <h2 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 transition-all duration-1000 ${
              hasLaunched 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '400ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              Powering innovation,<br />
              one circuit at a<br />
              time
            </h2>
            
            <p className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed font-light transition-all duration-1000 ${
              hasLaunched 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              Webber Electro Corp delivers cutting-edge<br />
              electrical solutions and innovative technology<br />
              for tomorrow's world
            </p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Home2;