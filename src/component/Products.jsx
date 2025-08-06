"use client"
import React, { useState, useEffect, useRef } from "react";

const Products = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  const products = [
    {
      title: "Premium Chip Series 1",
      description: "Our flagship semiconductor solution engineered with cutting-edge technology for next-generation computing applications. This premium chip series delivers unparalleled performance, energy efficiency, and reliability for demanding industrial and consumer electronics.",
      image: "/chip.png",
      price: "$299",
      buttonText: "Explore more"
    },
    {
      title: "Advanced Chip Series 2",
      description: "Revolutionary semiconductor architecture designed for artificial intelligence and machine learning applications. This advanced series combines powerful neural processing units with optimized memory architecture to deliver exceptional AI performance.",
      image: "/chip.png",
      price: "$449",
      buttonText: "Learn more"
    },
    {
      title: "Elite Chip Series 3",
      description: "High-performance computing solution engineered for enterprise-grade applications and data-intensive workloads. This elite series offers unprecedented processing capabilities with multi-core architecture, advanced vector processing, and integrated security features.",
      image: "/chip.png",
      price: "$599",
      buttonText: "Discover more"
    },
    {
      title: "Luxury Chip Series 4",
      description: "Premium flagship processor representing the pinnacle of semiconductor innovation and engineering excellence. This luxury series features the most advanced manufacturing process, cutting-edge materials, and revolutionary architecture design.",
      image: "/chip.png",
      price: "$799",
      buttonText: "View details"
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      {/* Enhanced Header Section */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 text-center py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-5">
            We're moving technology forward
          </h1>
          <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            In fact, we're probably a part of the electronic device you're using right now. Our lithography technology is fundamental to mass 
            producing semiconductor chips that are more powerful, faster and energy efficient.
          </p>
          <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors border-b-2 border-yellow-400 pb-1">
            See all products
          </button>
        </div>
      </div>

      {/* Products Container */}
      <div className="px-4 lg:px-8 py-4 space-y-2">
        {products.map((product, index) => (
          <div
            key={index}
            data-index={index}
            className={`flex flex-col lg:flex-row rounded-lg overflow-hidden transition-all duration-1000 ease-out transform ${
              visibleItems.has(index) 
                ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
                : index % 2 === 0 
                  ? 'opacity-0 translate-y-8 -translate-x-16 scale-95'
                  : 'opacity-0 translate-y-8 translate-x-16 scale-95'
            } ${
              index % 2 === 0 
                ? 'bg-white shadow-sm hover:shadow-md' 
                : 'bg-gradient-to-r from-blue-50 to-emerald-50 shadow-sm hover:shadow-md'
            } hover:scale-[1.02] transition-all duration-500`}
            style={{
              transitionDelay: visibleItems.has(index) ? `${index * 100}ms` : '0ms'
            }}
          >
            {/* Information Section */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 py-6 lg:py-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-800">
                  {product.title}
                </h2>
                
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-2">
                  <span className="text-xl lg:text-2xl font-bold text-emerald-600 mb-3 block">
                    {product.price}
                  </span>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors border-b-2 border-yellow-400 hover:border-yellow-500 pb-1 inline-block">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle Separator */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 min-h-[250px] lg:min-h-[280px] relative overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="h-8 bg-gradient-to-t from-emerald-50 to-transparent"></div>
    </div>
  );
};

export default Products;