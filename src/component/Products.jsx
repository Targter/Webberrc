"use client";
import React, { useState } from "react";
import Link from "next/link";
import { productsByCategory } from "@/constants"


const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("2 Wheelers");

  const categories = Object.keys(productsByCategory);
  const currentProducts = productsByCategory[activeCategory];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
      {/* Header Section */}
      <div className="text-center py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-2 tracking-tight">
            Enabling{" "}
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              Green Energy Storage
            </span>
          </h1>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto px-4 lg:px-8 gap-6 pb-12">
        {/* Sidebar - Category Selection and bar removed by removing hover:translate-x-1 (since that can push elements horizontally and trigger overflow). You can keep it if you wrap the whole container in overflow-x-hidden.*/}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4 flex flex-col" style={{ height: '420px' }}>
            <div className="flex-1 flex flex-col w-full justify-center space-y-3 overflow-y-auto overflow-x-hidden">
              {categories.map((category, idx) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    animationDelay: `${idx * 100}ms`
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 animate-fadeInLeft ${activeCategory === category
                      ? "bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white shadow-lg transform scale-105"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* coutn of products */}
            <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl animate-fadeIn flex-shrink-0">
              <p className="text-sm text-slate-600">
                <span className="font-bold text-2xl text-slate-800 block">
                  {currentProducts.length}
                </span>
                Products Available
              </p>
            </div>
          </div>
        </div>


        {/* Products Display Area */}
        <div className="flex-1">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-6">
              <div className="flex gap-4 sm:gap-6 lg:gap-8 px-2 min-w-max">
                {currentProducts.map((product, index) => (
                  <div
                    key={`${activeCategory}-${index}`}
                    style={{
                      animationDelay: `${index * 150}ms`
                    }}
                    className="relative group flex-shrink-0 w-72 sm:w-80 lg:w-88 h-[420px] animate-slideInRight"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl sm:rounded-3xl transition-opacity duration-300" />
                    )}

                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 relative z-20 h-full">
                      <div className="relative h-40 sm:h-48 lg:h-52 p-4 sm:p-6 lg:p-8">
                        <div className="absolute p-4 sm:p-6 inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

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

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                          <button
                            onClick={() => window.open(product.documentUrl, "_blank")}
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

                          <div className="inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm lg:text-base font-medium bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 group/btn">
                            <Link href={`/Products/${product.id}`} className="mr-1 sm:mr-2 py-1">
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

                      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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