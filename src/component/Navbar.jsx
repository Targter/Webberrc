"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { px } from 'framer-motion';

const Button = ({ title, leftIcon, rightIcon, containerClass = "", onClick }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${containerClass}`}
  >
    {leftIcon}
    <span className="relative inline-flex overflow-hidden tracking-wide">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">{title}</div>
      <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">{title}</div>
    </span>
    {rightIcon}
  </button>
);

const ElectricChipNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(true);
  const [activeBMSHover, setActiveBMSHover] = useState(true);
  const [hasLaunched, setHasLaunched] = useState(false);

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'About Us', hasDropdown: false },
    {
      name: 'Products',
      hasDropdown: true,
      items: [
        {
          type: "Battery Management System",
          hasSubDropdown: true,
          chips: [
            { name: 'FS-LT', description: 'For standalone & stackable architectures' },
            { name: 'CT-Safe', description: 'For onroad & battery safety' },
            { name: 'CT-Lite', description: 'For cost-competitive mobility applications' },
            { name: 'CT-Lite+ 50A', description: 'For cost-competitive mobility applications' },
            { name: 'CT-Lite + 80A', description: 'For cost-competitive mobility applications' },
            { name: 'FS-XT', description: 'For high voltage & high power applications' },
            { name: 'HP Safe', description: 'For high power low-voltage applications' }
          ]
        },
        {
          type: "Upcoming Projects",
          hasSubDropdown: false
        }
      ]
    },
    { name: 'Services', hasDropdown: false },
  ];

  // First launch effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLaunched(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Handle transparency based on scroll direction
      if (currentScrollY < 10) {
        // Always visible at top
        setIsTransparent(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - make navbar visible
        setIsTransparent(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - make transparent
        setIsTransparent(true);
        setIsMobileMenuOpen(false); // Close mobile menu when going transparent
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-2 left-4 right-4 z-50 rounded-xl transition-all duration-500 transform
        ${isTransparent 
          ? 'opacity-0 hover:opacity-100' 
          : 'opacity-100'
        }
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg'
          : 'bg-white/90 backdrop-blur-sm border border-gray-200/30 shadow-md'
        }
        ${hasLaunched 
          ? 'translate-y-0' 
          : '-translate-y-8'
        }
      `}
      style={{
        transitionDuration: hasLaunched ? '500ms' : '800ms',
        transitionTimingFunction: hasLaunched ? 'ease-out' : 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-3  sm:px-6 py-1">
        <div className="flex items-center justify-between h-50 sm:h-12">

          {/* Logo */}
          
            <div className={`relative p-1  bg-black/5 rounded-lg transition-all duration-700 ${
              hasLaunched 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '200ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
              <div className="h-[300px] w-24 sm:h-12 sm:w-30 bg-gray-800 rounded pr-2 pl-2 flex items-center justify-center text-white text-xs font-bold">
                <Image
                src="/logo/webber-logo.png"
                width={300}
                height={150}
                alt='webber-logo'
                
                />
              </div>
            </div>
          

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center space-x-4 xl:space-x-6 transition-all duration-800 ${
            hasLaunched 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-4'
          }`}
          style={{
            transitionDelay: hasLaunched ? '0ms' : '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
     {navItems.map((item, i) => (
  <div
    key={i}
    className="relative group"
    style={{
      animationDelay: hasLaunched ? '0ms' : `${500 + i * 100}ms`
    }}
  >
    <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all text-sm font-medium py-1">
      <span>{item.name}</span>
      {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
    </button>

    {item.hasDropdown && (
      <div className="absolute left-0 mt-1 w-72 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-visible z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {item.items.map((category, ci) => (
          <div
            key={ci}
            className="relative group/submenu"
          >
            <div className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 text-sm border-b border-gray-800 last:border-0 transition-all cursor-pointer">
              <span className="font-medium">{category.type}</span>
              {category.hasSubDropdown && <ChevronRight className="w-4 h-4" />}
            </div>

            {/* BMS Products Submenu - repositioned and more concise */}
            {category.hasSubDropdown && (
              <div className="absolute left-full top-0 ml-1 w-[500px] bg-gray-900 border border-gray-800 rounded-lg shadow-2xl overflow-hidden z-[110] max-h-[70vh] overflow-y-auto opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200">
                <div className="p-4">
                  {/* Low Voltage Section */}
                  <div className="mb-6">
  {/* Simple Product Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {category.chips.map((chip, chipIndex) => (
      <div
        key={chipIndex}
        className="relative p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
      >
        {/* Product Header */}
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
            {chip.name}
          </h4>
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {/* Product Description */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
          {chip.description}
        </p>
        
        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    ))}
  </div>
</div>

                  {/* Webber Ecosystem Section */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-3">
                      <Image
                      src="/logo/webber-logo.png"
                      width={200}
                      height={200}
                      alt='logo'
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
))}
          </div>

          {/* Right Side Buttons */}
          <div className={`flex items-center space-x-2 transition-all duration-700 ${
            hasLaunched 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: hasLaunched ? '0ms' : '600ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className={`transition-all duration-600 ${
              hasLaunched 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '650ms'
            }}>
              <Button
                title="Resources"
                containerClass="hidden sm:inline-block    border border-gray-600 text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
              />
            </div>
            
            <div className={`transition-all duration-600 ${
              hasLaunched 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '700ms'
            }}>
              <Button
                title="Contact Us"
                containerClass="bg-black text-white hover:bg-gray-800 border border-black rounded-lg"
              />
            </div>
            
            <div className={`transition-all duration-600 ${
              hasLaunched 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '750ms'
            }}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 border border-gray-300 bg-white text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button className="w-full flex justify-between items-center text-gray-300 hover:text-white text-sm font-medium py-2">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {item.hasDropdown && item.items && (
                    <div className="ml-4 mt-2 space-y-3">
                      {item.items.map((category, ci) => (
                        <div key={ci}>
                          <div className="text-white font-medium text-sm py-1 border-l-2 border-cyan-400 pl-3">
                            {category.type}
                          </div>
                          {category.hasSubDropdown && category.chips && (
                            <div className="ml-4 space-y-2">
                              <div className="text-cyan-400 text-xs font-medium mb-2">Low Voltage</div>
                              {category.chips.slice(0, 5).map((chip, chipIndex) => (
                                <div key={chipIndex} className="bg-gray-800/50 p-2 rounded border border-gray-700 hover:border-gray-600 transition-colors">
                                  <div className="font-medium text-white text-xs mb-1">{chip.name}</div>
                                  <div className="text-xs text-gray-400 leading-relaxed">{chip.description}</div>
                                </div>
                              ))}
                              <div className="text-cyan-400 text-xs font-medium mb-2 mt-3">High Voltage</div>
                              {category.chips.slice(5).map((chip, chipIndex) => (
                                <div key={chipIndex} className="bg-gray-800/50 p-2 rounded border border-gray-700 hover:border-gray-600 transition-colors">
                                  <div className="font-medium text-white text-xs mb-1">{chip.name}</div>
                                  <div className="text-xs text-gray-400 leading-relaxed">{chip.description}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                <Button
                  title="Resources"
                  containerClass="w-full sm:hidden border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg"
                />
                <Button
                  title="Let's Chip it"
                  containerClass="w-full bg-cyan-500 text-white hover:bg-cyan-600 border border-cyan-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      
    </nav>
  );
};

export default ElectricChipNavbar;