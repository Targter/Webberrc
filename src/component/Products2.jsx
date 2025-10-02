"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {allProducts} from "@/constants"

const Products2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Battery Management Systems"
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const headerRef = useRef(null);
  const categoryRef = useRef(null);
  const productRefs = useRef([]);

  const categories = [
    "Battery Management Systems",
    "Other Advance Electronics",
  ];
  const currentProducts = allProducts[activeCategory];
  const hasMoreProducts = !showAll && visibleCount < currentProducts.length;
  const displayedProducts = showAll ? currentProducts : currentProducts.slice(0, visibleCount);

  // First launch animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLaunch(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe header
    if (headerRef.current) {
      headerRef.current.dataset.index = 'header';
      observer.observe(headerRef.current);
    }

    // Observe category section
    if (categoryRef.current) {
      categoryRef.current.dataset.index = 'category';
      observer.observe(categoryRef.current);
    }

    // Observe product cards
    productRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = `product-${index}`;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [displayedProducts.length]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
    setShowAll(false);
    // Reset visibility for new products
    setVisibleElements(prev => {
      const newSet = new Set();
      prev.forEach(item => {
        if (!item.startsWith('product-')) {
          newSet.add(item);
        }
      });
      return newSet;
    });
  };

  const loadMoreProducts = () => {
    setVisibleCount(prev => Math.min(prev + 6, currentProducts.length));
  };

  const viewAllProducts = () => {
    setShowAll(true);
  };

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto">
      {/* Header Section */}
      <div 
        ref={headerRef}
        className={`text-center py-8 sm:py-12 px-4 transition-all duration-1000 ${
          isFirstLaunch 
            ? 'opacity-0 transform translate-y-8' 
            : visibleElements.has('header')
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <p className={`text-xs sm:text-sm uppercase tracking-wide text-slate-900 mb-2 transition-all duration-1000 delay-200 ${
            isFirstLaunch ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            Our Comprehensive Product Portfolio
          </p>
          
          <div className={`w-20 sm:w-28 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] mx-auto mb-4 sm:mb-3 rounded-full transition-all duration-1000 delay-300 ${
            isFirstLaunch ? 'opacity-0 transform scale-x-0' : 'opacity-100 transform scale-x-100'
          }`}></div>

          <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-4 tracking-tight leading-tight transition-all duration-1000 delay-400 ${
            isFirstLaunch ? 'opacity-0 transform translate-y-6' : 'opacity-100 transform translate-y-0'
          }`}>
            Powering the Future of{" "}
            <span className={`bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent transition-all duration-1000 delay-500 ${
              isFirstLaunch ? 'opacity-0' : 'opacity-100'
            }`}>
                Green 
            </span>{" "}
            <span className={`bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent transition-all duration-1000 delay-600 ${
              isFirstLaunch ? 'opacity-0' : 'opacity-100'
            }`}>
              Energy Storage
            </span>
          </h1>
          
          <p className={`text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isFirstLaunch ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            Discover our cutting-edge battery management systems and advanced electronic solutions 
            designed to drive innovation across automotive, industrial, and sustainable energy sectors.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div 
        ref={categoryRef}
        className={`max-w-7xl mx-auto px-4 lg:px-8 mb-6 sm:mb-8 transition-all duration-800 ${
          isFirstLaunch 
            ? 'opacity-0 transform translate-y-8' 
            : visibleElements.has('category')
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
        }`}
      >
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-md w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 mb-1 sm:mb-0 last:mb-0 transform hover:scale-105 ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                  } ${isFirstLaunch ? `opacity-0 translate-y-4 delay-${800 + index * 100}` : 'opacity-100 translate-y-0'}`}
                  style={{ 
                    transitionDelay: isFirstLaunch ? `${800 + index * 100}ms` : '0ms'
                  }}
                >
                  <span className="block sm:inline">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12 sm:pb-16">
        {/* Products Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {displayedProducts.map((product, index) => (
            <div
              key={`${activeCategory}-${index}`}
              ref={el => productRefs.current[index] = el}
              className={`relative group transition-all duration-800 ${
                isFirstLaunch 
                  ? 'opacity-0 transform translate-y-12 scale-95' 
                  : visibleElements.has(`product-${index}`)
                    ? 'opacity-100 transform translate-y-0 scale-100'
                    : 'opacity-0 transform translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: isFirstLaunch ? `${1000 + index * 150}ms` : `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={`/Products/${product.id}`} className="block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                {/* Image Container with Proper Padding */}
                <div className="relative h-40 sm:h-48 md:h-52 bg-gray-50 p-6 sm:p-8 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6">
                  <h2 className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent mb-2 font-medium">
                    {product.heading}
                  </h2>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3 leading-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  {/* Action Buttons Container */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 lg:gap-0">
                    {/* Download Info Document Button */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(product.documentUrl, '_blank');
                      }}
                      className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/download py-1 z-10 relative"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 transition-transform group-hover/download:translate-y-0.5 text-cyan-500"
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
                    
                    {/* View Product Text */}
                    <div className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/btn py-1">
                      <span className="mr-1 sm:mr-2">View product</span>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1 text-blue-500"
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
                <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More & View All Buttons with Animation */}
        {!showAll && (
          <div className={`text-center space-y-4 transition-all duration-800 ${
            displayedProducts.length > 0 && visibleElements.has(`product-${Math.min(5, displayedProducts.length - 1)}`)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}>
            {hasMoreProducts && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={loadMoreProducts}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-slate-200 rounded-full text-slate-700 font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md group text-sm sm:text-base"
                >
                  <span className="mr-2">Load More Products</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-y-0.5 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                
                <button
                  onClick={viewAllProducts}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 group text-sm sm:text-base"
                >
                  <span className="mr-2">View All Products</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            )}
            
            {/* Show only View All if no more products to load */}
            {!hasMoreProducts && visibleCount < currentProducts.length && (
              <button
                onClick={viewAllProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 group text-sm sm:text-base"
              >
                <span className="mr-2">View All Products</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Contact Section with Pulse Animation */}
      <div className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-1000 delay-1500 ${
        isFirstLaunch ? 'opacity-0 transform translate-y-8 scale-75' : 'opacity-100 transform translate-y-0 scale-100'
      }`}>
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 group animate-pulse hover:animate-none">
          <span className="text-xs sm:text-sm font-medium">Get in Touch</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors">
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

export default Products2;