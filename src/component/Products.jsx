"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/constants";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Battery Management Systems"
  );
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const categories = [
    "Battery Management Systems",
    "Other Advance Electronics",
  ];



  const currentProducts = allProducts[activeCategory];
  
  // Responsive card width calculation
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 280 + 16; // sm: smaller cards + gap
      if (window.innerWidth < 1024) return 320 + 24; // md: medium cards + gap
      return 352 + 32; // lg: original size + gap
    }
    return 352 + 32;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  // Update scroll button states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();

      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      updateScrollButtons();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-900">
            Our Offerings
          </p>
          <div className="w-20 sm:w-24 md:w-28 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] mx-auto mb-3 rounded-full"></div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-2 tracking-tight">
            Powering{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              Electric
            </span>{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              Mobility
            </span>
          </h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-6 sm:mb-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-md w-full sm:w-auto max-w-2xl">
            <div className="flex flex-col sm:flex-row w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 mb-1 sm:mb-0 last:mb-0 ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                  }`}
                >
                  <span className="block sm:inline text-center">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8 pb-12 sm:pb-16">
        {/* Scrollable Products Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 min-w-max">
             {currentProducts.map((product, index) => (
  <div
    key={`${activeCategory}-${index}`}
    className="relative group flex-shrink-0 w-72 sm:w-80 lg:w-88 h-auto sm:h-[400px] lg:h-[420px]"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    {/* Hover Background Effect */}
    {hoveredIndex === index && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl sm:rounded-3xl transition-opacity duration-300" />
    )}
     
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 relative z-20 h-full">
      {/* Image Container with Proper Padding */}
      <div className="relative h-40 sm:h-48 lg:h-52  p-4 sm:p-6 lg:p-8">
        <div className="absolute p-4 sm:p-6 inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
       
      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <h2 className="text-sm sm:text-base lg:text-lg text-slate-500 mb-1 group-hover:text-slate-900 transition-colors">
          {product.heading}
        </h2>
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-slate-900 transition-colors leading-tight">
          {product.title}
        </h3>
         
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {product.description}
        </p>
         
        {/* Action Buttons Container */}
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
  {/* Download Info Document Button - Left Side */}
  <button 
    onClick={() => window.open(product.documentUrl, '_blank')}
    className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm lg:text-base font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/download py-1"
  >
    <svg
      className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover/download:translate-y-0.5 text-cyan-500 group-hover/download:text-cyan-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    <span>Info Doc</span>
  </button>
  
  {/* View Product Button - Right Side */}
  <div className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm lg:text-base font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/btn">
    <Link
    href={`/Products/${product.id}`}
    className="mr-1 sm:mr-2 py-1"  >
      View product
    </Link>
    <svg
      className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1 text-blue-500 group-hover/btn:text-blue-400"
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
  </div>
</div>
      </div>
       
      {/* Bottom Border Accent */}
      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-4 sm:mt-6 gap-3 sm:gap-4">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 group">
          <span className="text-xs sm:text-sm font-medium">Get in Touch</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Products;