"use client";
import React, { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const TrustedPartnersSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const observerRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: "LiveGaurd",
      location: "Mumbai, India",
      image: "https://webberec.com/wp-content/uploads/2024/02/Livguard.png",
      description: "Leading innovator in cloud computing and AI solutions. We collaborate closely on cutting-edge semiconductor technology and next-generation processors.",
      specialties: ["Cloud Computing", "AI Solutions", "Semiconductors"],
      partnership: "5+ years"
    },
    {
      id: 2,
      name: "General-Aeronautics",
      location: "Mumbai, India",
      image: "https://webberec.com/wp-content/uploads/2024/02/General-Aeronautics-1.png",
      description: "European leader in sustainable technology and green manufacturing. Our partnership focuses on eco-friendly production methods and renewable energy integration.",
      specialties: ["Sustainable Tech", "Green Manufacturing", "Renewable Energy"],
      partnership: "3+ years"
    },
    {
      id: 3,
      name: "Mayurii",
      location: "Mumbai, India",
      image: "https://webberec.com/wp-content/uploads/2024/02/Mayurii.png",
      description: "Japan's premier technology research and development company. Together we're advancing robotics, IoT, and smart manufacturing solutions.",
      specialties: ["Robotics", "IoT", "Smart Manufacturing"],
      partnership: "7+ years"
    },
    {
      id: 4,
      name: "Texas-Instrument",
      location: "Texas, US",
      image: "https://webberec.com/wp-content/uploads/2024/02/Texas-Instrument.png",
      description: "International consulting and technology integration firm. We work together on digital transformation and enterprise solutions for global markets.",
      specialties: ["Digital Transformation", "Enterprise Solutions", "Global Markets"],
      partnership: "4+ years"
    },
    {
      id: 5,
      name: "iCreate",
      location: "Singapore",
      image: "https://webberec.com/wp-content/uploads/2024/02/iCreate-1.png",
      description: "Asia-Pacific's leading manufacturing and logistics company. Our collaboration spans advanced manufacturing techniques and supply chain optimization.",
      specialties: ["Advanced Manufacturing", "Supply Chain", "Logistics"],
      partnership: "6+ years"
    },
    {
      id: 6,
      name: "Renon",
      location: "Toronto, Canada",
      image: "https://webberec.com/wp-content/uploads/2024/02/Renon.png",
      description: "Pioneer in quantum computing and advanced analytics. We're jointly developing next-generation computing solutions and data processing technologies.",
      specialties: ["Quantum Computing", "Advanced Analytics", "Data Processing"],
      partnership: "2+ years"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.dataset.header === 'true') {
            setHeaderVisible(entry.isIntersecting);
          } else {
            const index = parseInt(entry.target.dataset.index);
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '-30px 0px'
      }
    );

    const elements = document.querySelectorAll('[data-index], [data-header]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="relative w-full py-8 lg:py-10 bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header Section */}
   <div 
  className="w-screen text-center mb-12 lg:mb-16"
  data-header="true"
>
  <div 
    className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-800 sm:p-8 lg:p-12 text-white shadow-xl transition-all duration-1000 ease-out transform ${
      headerVisible 
        ? 'opacity-100 translate-y-0 scale-100' 
        : 'opacity-0 translate-y-8 scale-95'
    }`}
  >
    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white mb-4 leading-tight">
      OUR TRUSTED PARTNERS
    </h1>
    <h3 className="text-sm sm:text-base lg:text-lg opacity-90 font-light leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
      We collaborate with industry leaders who share our commitment to innovation and excellence
    </h3>
  </div>
</div>


      {/* Partners Scroll Section */}
      <div className="relative">
        {/* Scroll hint */}
        <div className="text-center mb-4 lg:mb-6">
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-light">
            <span className="hidden sm:inline">Scroll horizontally to explore our partnerships</span>
            <span className="sm:hidden">Swipe to explore partnerships</span>
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div 
          className="overflow-x-auto scrollbar-hide pb-6 lg:pb-8"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none"
          }}
        >
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex gap-4 sm:gap-6 lg:gap-8 px-4 lg:px-6 min-w-max">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                data-index={index}
                className={`relative flex-shrink-0 w-72 sm:w-80 lg:w-80 h-80 sm:h-96 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-xl cursor-pointer group border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-700 ease-out transform ${
                  visibleItems.has(index) 
                    ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
                    : index % 3 === 0 
                      ? 'opacity-0 translate-y-8 -translate-x-12 scale-95'
                      : index % 3 === 1
                        ? 'opacity-0 translate-y-12 scale-95'
                        : 'opacity-0 translate-y-8 translate-x-12 scale-95'
                }`}
                style={{
                  transitionDelay: visibleItems.has(index) ? `${index * 100}ms` : '0ms'
                }}
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Logo Container */}
                <div className="p-4 sm:p-6 lg:p-8 h-36 sm:h-48 flex items-center justify-center bg-gray-50 dark:bg-gray-750 rounded-t-lg transition-all duration-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Basic Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    {partner.location}
                  </p>
                  
                  {/* Partnership duration - always visible */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Partnership
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                      {partner.partnership}
                    </span>
                  </div>

                  {/* Hover Information Overlay */}
                  <div className={`absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg transition-all duration-300 ${
                    hoveredCard === partner.id ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    <div className="p-4 sm:p-6 h-full flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2 sm:mb-3">
                        {partner.name}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 line-clamp-4">
                        {partner.description}
                      </p>
                      
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {partner.specialties.map((spec, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-gray-300 rounded border border-yellow-400/30"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-600">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {partner.partnership} partnership
                        </span>
                        <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors border-b border-yellow-400 pb-0.5">
                          Learn more <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-4 lg:mt-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-yellow-400/50"></div>
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="sm:hidden">Swipe to explore</span>
            <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-yellow-400/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;