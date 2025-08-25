"use client";
import React, { useState } from "react";
import Link from "next/link";

const Products2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState(
    "Battery Management Systems"
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "Battery Management Systems",
    "Other Advance Electronics",
  ];

  const allProducts = {
    "Battery Management Systems": [
      {
        id: "bms-1",
        heading: "Compact Applications",
        title: "WBMS-SW-32S Contactor",
        description:
          "Feature-rich BMS designed for standalone & stackable architecture with || support.",
        image: "/products/sw.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "bms-2",
        heading: "Performance 2W & E-Ricks (L3)",
        title: "WBMS-SWLT 16S 100A",
        description:
          "Smart BMS Manages Lithium Ion Batteries with Precision and Speed.",
        image: "/products/swmini.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "bms-3",
        heading: "Autos (L5) & Forklifts",
        title: "WBMS-SW 16S Contactor",
        description:
          "Functionally Safe BMS for High Power and low voltage applications.",
        image: "/products/webim2.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "bms-4",
        heading: "Heavy Duty Applications",
        title: "WBMS-SW 24S Pro",
        description:
          "Advanced BMS solution for heavy-duty vehicles with enhanced safety protocols.",
        image: "/products/sw.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "bms-5",
        heading: "Marine & Maritime",
        title: "WBMS-SW Marine Series",
        description:
          "Waterproof BMS designed for marine applications with corrosion resistance.",
        image: "/products/swmini.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "bms-6",
        heading: "Energy Storage Systems",
        title: "WBMS-SW Grid Scale",
        description:
          "High-capacity BMS for grid-scale energy storage and renewable integration.",
        image: "/products/webim2.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
    ],

    "Other Advance Electronics": [
      {
        id: "oe-1",
        heading: "Industrial Solutions",
        title: "Advanced Control Unit",
        description:
          "High-performance control systems for industrial automation and monitoring applications.",
        image: "/products/sw.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "oe-2",
        heading: "Smart Connectivity",
        title: "IoT Communication Module",
        description:
          "Seamless connectivity solutions for smart devices and industrial IoT applications.",
        image: "/products/swmini.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "oe-3",
        heading: "Power Electronics",
        title: "Precision Power Supply",
        description:
          "Reliable power management solutions for critical electronic systems and applications.",
        image: "/products/webim2.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "oe-4",
        heading: "Signal Processing",
        title: "Digital Signal Processor",
        description:
          "High-speed signal processing unit for real-time data analysis and filtering.",
        image: "/products/sw.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
      {
        id: "oe-5",
        heading: "Wireless Solutions",
        title: "RF Communication Module",
        description:
          "Long-range wireless communication system for remote monitoring applications.",
        image: "/products/swmini.png",
        documentUrl: "/documents/rf-communication-module-spec.pdf",
      },
      {
        id: "oe-6",
        heading: "Sensor Networks",
        title: "Multi-Sensor Hub",
        description:
          "Integrated sensor platform for environmental monitoring and data collection.",
        image: "/products/webim2.png",
        documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf",
      },
    ],
  };

  const currentProducts = allProducts[activeCategory];
  const hasMoreProducts = !showAll && visibleCount < currentProducts.length;
  const displayedProducts = showAll ? currentProducts : currentProducts.slice(0, visibleCount);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset to initial count when switching categories
    setShowAll(false); // Reset view all state
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
      <div className="text-center py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-slate-900 mb-2">
            Our Comprehensive Product Portfolio
          </p>
          <div className="w-20 sm:w-28 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] mx-auto mb-4 sm:mb-3 rounded-full"></div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-4 tracking-tight leading-tight">
            Powering the Future of{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              Electric
            </span>{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              Mobility
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge battery management systems and advanced electronic solutions 
            designed to drive innovation across automotive, industrial, and sustainable energy sectors.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-6 sm:mb-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-full p-1 shadow-md w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 mb-1 sm:mb-0 last:mb-0 ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                  }`}
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
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Image Container with Proper Padding */}
                <div className="relative h-40 sm:h-48 md:h-52 bg-gray-50 p-6 sm:p-8">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
                      onClick={() => window.open(product.documentUrl, '_blank')}
                      className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/download py-1"
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
                    
                    {/* View Product Button */}
                    <Link
                      href={`/Products/${product.id}`}
                      className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/btn py-1"
                    >
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
                    </Link>
                  </div>
                </div>
                
                {/* Bottom Border Accent */}
                <div className="h-0.5 sm:h-1 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More & View All Buttons */}
        {!showAll && (
          <div className="text-center space-y-4">
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

      {/* Contact Section */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="bg-slate-800 hover:bg-slate-900 text-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 sm:space-x-2 group">
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