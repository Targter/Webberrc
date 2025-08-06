"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Products = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const observerRef = useRef(null);

  const products = [
    {
      title: "Wiring Harness",
      description:
        "Reliable, custom-built wiring harnesses for seamless electrical connectivity and optimal performance.",
      image: "/chip.png",
      category: "Connectivity Solutions",
    },
    {
      title: "Wires & Cables",
      description:
        "High-quality wires and cables engineered for durability, efficiency, and safe power transmission.",
      image: "/chip.png",
      category: "Power Transmission",
    },
    {
      title: "Power Cords",
      description:
        "Versatile power cords designed for stable and secure electrical connections across applications.",
      image: "/chip.png",
      category: "Power Solutions",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-index]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-2 tracking-tight">
            PRODUCTS
          </h1>

          <div className="mt-12">
            <div className="text-orange-500 text-sm font-semibold tracking-wider mb-4">
              OUR PRODUCT RANGE
            </div>

            <p className="text-base lg:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse range of precision-engineered electrical
              products designed to meet industry standards, ensuring durability,
              efficiency, and superior performance.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group p-2 h-full w-full transition-all duration-700 ease-out transform ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDelay: visibleItems.has(index)
                  ? `${index * 150}ms`
                  : "0ms",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-50 to-emerald-50 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-20 h-full">
                {/* Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-orange-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Learn More Button */}
                  <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/btn">
                    <span className="mr-2">Learn more</span>
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
                <div className="h-1 bg-gradient-to-r from-orange-400 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
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
