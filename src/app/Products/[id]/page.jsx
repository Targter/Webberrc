"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { allProducts } from "@/constants"; // Update the path if needed
import Link from "next/link";

const page = ({ params }) => {
  const { id } = use(params);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Flatten allProducts into a single array
  const products = Object.values(allProducts).flat();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
          Product Not Found
        </h1>
        <p className="mt-2 text-gray-600">Please check the product ID again.</p>
        <Link
          href="/products"
          className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const applications = [
    {
      title: "Electric Vehicles",
      description: "E-bikes, scooters & electric vehicles",
      icon: "🚗"
    },
    {
      title: "Industrial Storage", 
      description: "Commercial energy storage systems",
      icon: "🏭"
    },
    {
      title: "Renewable Energy",
      description: "Solar and wind energy solutions",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <div 
        className="relative overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 py-13 sm:py-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Breadcrumb */}
          <div className="flex items-center py-6 gap-2 text-sm text-gray-600 mb-4">
            <Link href="/Products" className="hover:text-blue-500 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
              {product.title}
            </span>
          </div>

          {/* Product Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
            {product.title}
          </h1>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">INDUSTRY APPLICATIONS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Customizable <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">battery solutions</span> for every industry
            </h2>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-lg bg-gray-50 border border-gray-200">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4 sm:p-8"
              priority
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* What is LT Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">WHAT IS LT?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              LT BMS is a centralized BMS with <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">battery</span><br className="hidden sm:block" />
              <span className="text-cyan-500">monitoring</span> and <span className="text-blue-500">system management</span> functions<br className="hidden sm:block" />
              integrated into a single unit.
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
              Designed to monitor up to 25 cells individually, LT can also be connected in a parallel architecture to seamlessly support hot-plugging & 
              battery-swapping applications. LT is chemistry agnostic and compatible with all leading chemistries of lithium-ion batteries.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "🔋", value: "9S-25S", label: "Cells in Series" },
              { icon: "⚡", value: "18V-110V", label: "Voltage range" },
              { icon: "📊", value: "3%", label: "SOC accuracy" },
              { icon: "📡", value: "CAN & BLE", label: "Communication" }
            ].map((spec, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="text-blue-500 text-2xl sm:text-3xl mb-3">{spec.icon}</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {spec.value}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className={`mb-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{app.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications - BLACK SECTION */}
        <div className={`mb-16 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-black text-white rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Electrical</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Voltage:</span>
                    <span className="text-white">12V - 48V DC</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Current:</span>
                    <span className="text-white">0 - 200A</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Power:</span>
                    <span className="text-white">&lt; 5W</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Environmental</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Temperature:</span>
                    <span className="text-white">-40°C to +85°C</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Humidity:</span>
                    <span className="text-white">5% - 95% RH</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-400">Protection:</span>
                    <span className="text-white">IP65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {product.documentUrl && (
            <a
              href={product.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center text-sm sm:text-base"
            >
              📄 Download Datasheet
            </a>
          )}
          
          <Link
            href="/Products"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center text-sm sm:text-base"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;