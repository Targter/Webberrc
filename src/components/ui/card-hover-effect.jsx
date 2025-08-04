"use client"
import React from "react";

export const HoverEffect = ({ items, className }) => {
  return (
    <div className={`w-[85vw] mx-auto pl-1 pr-30 py-8 items-center ${className || ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-full">
        {items.map((item, idx) => (
          <BentoCard key={item?.link || idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export const BentoCard = ({ item }) => {
  return (
    <a href={item?.link} className="block group">
      <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm h-96 transition-all duration-700 ease-out group-hover:shadow-2xl group-hover:shadow-blue-500/15 group-hover:-translate-y-2 group-hover:border-gray-200">
        {/* Enhanced Animated Border Lines */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-1000 delay-100"></div>
          <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 group-hover:h-full transition-all duration-1000 delay-400"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-1000 delay-700"></div>
          <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 group-hover:h-full transition-all duration-1000 delay-1000"></div>
        </div>

        <div className="flex h-full relative z-10">
          {/* Enhanced Image Section - Left Side */}
          <div className="w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-[400px] h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Content Section - Right Side */}
          <div className="w-3/5 p-8 flex flex-col justify-between bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 group-hover:from-blue-50/40 group-hover:via-white group-hover:to-purple-50/40 transition-all duration-700">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-700 transition-all duration-300 group-hover:scale-[1.02] origin-left">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                {item.description}
              </p>
            </div>

            <div className="space-y-4 mt-6">
              {item.price && (
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 group-hover:scale-105 transition-all duration-300 origin-left">
                  {item.price}
                </div>
              )}

              {item.specifications && (
                <div className="space-y-2">
                  {item.specifications.slice(0, 3).map((spec, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-gray-500 flex items-center group-hover:text-gray-600 transition-all duration-300 transform group-hover:translate-x-1"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Enhanced CTA Button */}
              <div className="pt-2">
                <div className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"></div>
      </div>
    </a>
  );
};