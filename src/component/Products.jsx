"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
  const cardWidth = 352 + 32; // 352px card + 32px gap

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
    const handleResize = () => updateScrollButtons();
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
    <div className="w-full min-h-screen  max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-slate-900">
            Our Offerings
          </p>
          <div className="w-28 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] mx-auto  mb-3 rounded-full"></div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 mb-2 tracking-tight">
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

            <div className="flex  gap-8 px-4 min-w-max">
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
        <div className="absolute p-6 inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full p-4 object-cover transition-transform duration-500 group-hover:scale-105"
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
         
        {/* Action Buttons Container */}
       <div className="flex items-center justify-between">
  {/* Download Info Document Button - Left Side */}
  <button 
    onClick={() => window.open(product.documentUrl, '_blank')}
    className="inline-flex items-center text-md font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/download"
  >
    <svg
      className="w-5 h-5 mr-1 transition-transform group-hover/download:translate-y-0.5 text-cyan-500 group-hover/download:text-cyan-400"
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
  <button className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/btn">
    {/* <span className="mr-2">View product</span> */}
    <Link
    href={`/Products/${product.id}`}
    className="mr-2"  >
      View product
    </Link>
    <svg
      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-blue-500 group-hover/btn:text-blue-400"
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
      </div>
       
      {/* Bottom Border Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
))}
            </div>
          </div>
        </div>

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

          {/* <p className="text-sm text-gray-500 font-light">
            <span className="hidden sm:inline">
              Use arrows or scroll horizontally to explore products
            </span>
            <span className="sm:hidden">Use arrows or swipe to explore</span>
          </p> */}

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
