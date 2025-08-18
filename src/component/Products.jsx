"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Battery Management Systems");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const categories = ["Battery Management Systems", "Other Advance Electronics"];

  const allProducts = {
    "Battery Management Systems": [
      {  
        heading: "Compact Applications", 
        title: "WBMS-SW Mini 16S",
        description: "Feature-rich BMS designed for standalone & stackable architecture with paralleling support.",
        image: "/products/sw.png",
      },
      {
        heading: "Performance 2W & E-Ricks (L3)",
        title: "WBMS-SW 16S",
        description: "Compact monolithic BMS designed for cost-competitive mobility applications.",
        image: "/products/swmini.png",
      },
      {
        heading: "Autos (L5) & Forklifts",
        title: "WBMS-SW 16S Contactor",
        description: "Functionally Safe BMS for High Power and low voltage applications.",
        image: "/products/webim2.png",
      },
      {
        heading: "Heavy Duty Applications",
        title: "WBMS-SW 24S Pro",
        description: "Advanced BMS solution for heavy-duty vehicles with enhanced safety protocols.",
        image: "/products/sw.png",
      },
      {
        heading: "Marine & Maritime",
        title: "WBMS-SW Marine Series",
        description: "Waterproof BMS designed for marine applications with corrosion resistance.",
        image: "/products/swmini.png",
      },
      {
        heading: "Energy Storage Systems",
        title: "WBMS-SW Grid Scale",
        description: "High-capacity BMS for grid-scale energy storage and renewable integration.",
        image: "/products/webim2.png",
      },
    ],
    "Other Advance Electronics": [
      {  
        heading: "Industrial Solutions", 
        title: "Advanced Control Unit",
        description: "High-performance control systems for industrial automation and monitoring applications.",
        image: "/products/sw.png",
      },
      {
        heading: "Smart Connectivity",
        title: "IoT Communication Module",
        description: "Seamless connectivity solutions for smart devices and industrial IoT applications.",
        image: "/products/swmini.png",
      },
      {
        heading: "Power Electronics",
        title: "Precision Power Supply",
        description: "Reliable power management solutions for critical electronic systems and applications.",
        image: "/products/webim2.png",
      },
      {
        heading: "Signal Processing",
        title: "Digital Signal Processor",
        description: "High-speed signal processing unit for real-time data analysis and filtering.",
        image: "/products/sw.png",
      },
      {
        heading: "Wireless Solutions",
        title: "RF Communication Module",
        description: "Long-range wireless communication system for remote monitoring applications.",
        image: "/products/swmini.png",
      },
      {
        heading: "Sensor Networks",
        title: "Multi-Sensor Hub",
        description: "Integrated sensor platform for environmental monitoring and data collection.",
        image: "/products/webim2.png",
      },
    ]
  };

  const currentProducts = allProducts[activeCategory];
  const cardWidth = 352 + 32; // 352px card + 32px gap

  // Update scroll button states
  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => updateScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full min-h-screen ">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-slate-500 ">OUR OFFERINGS</p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-1 mb-3 rounded-full"></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-2 tracking-tight">
            Revolutionizing <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Electric</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Mobility</span> with our cutting-edge product line
          </h1>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="max-w-8xl mx-auto px-4 lg:px-8 pb-16">
        {/* Navigation Controls */}
        <div className="flex items-center justify-center mb-6 gap-4">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <p className="text-sm text-gray-500 font-light">
            <span className="hidden sm:inline">Use arrows or scroll horizontally to explore products</span>
            <span className="sm:hidden">Use arrows or swipe to explore</span>
          </p>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

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

            <div className="flex gap-8 px-4 min-w-max">
              {currentProducts.map((product, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="relative group flex-shrink-0 w-88 h-[420px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hover Background Effect */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl transition-opacity duration-300" />
                  )}

                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-20 h-full">
                    {/* Image Container */}
                    <div className="relative h-52 bg-white">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-lg text-slate-500 mb-1 group-hover:text-slate-900 transition-colors">
                        {product.heading}
                      </h2>
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                        {product.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* View Product Button */}
                      <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn">
                        <span className="mr-2">View product</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
                      </button>
                    </div>

                    {/* Bottom Border Accent */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group">
          <span className="text-sm font-medium">Get in Touch</span>
          <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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