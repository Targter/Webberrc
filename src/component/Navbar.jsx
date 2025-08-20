"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Button = ({ title, leftIcon, rightIcon, containerClass = "", onClick }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden px-2 sm:px-3 md:px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${containerClass}`}
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
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileSection, setActiveMobileSection] = useState(null);
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
   chips : [
  { 
    name: 'WBMS-SW-32S Contactor', 
    description: 'For standalone & stackable architectures', 
    category: 'low',
    documentUrl: "/pdata/WBMS-SW-32S-Contactor v3.0 (1).pdf"
  },
  { 
    name: 'WBMS-SWLT 20S 60A', 
    description: 'For onroad & battery safety', 
    category: 'low',
    documentUrl: "/pdata/WBMS-SWLT-20S-60A v3.0 (1).pdf"
  },
  { 
    name: 'WBMS-SWLT 16S 100A', 
    description: 'For cost-competitive mobility applications', 
    category: 'low',
    documentUrl: "/pdata/WBMS-SWLT-16S-100A v3.0 (1).pdf"
  },
  { 
    name: 'WBMS-SW-16S Contactor', 
    description: 'For cost-competitive mobility applications', 
    category: 'low',
    documentUrl: "/pdata/WBMS-SWLT 16S 100A.pdf"
  },
  { 
    name: 'WBMS-SW 16S 60/80A', 
    description: 'For cost-competitive mobility applications', 
    category: 'low',
    documentUrl: "/pdata/WBMS-SW-16S-60A-80A v3.0 (1).pdf"
  }
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
      
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < 10) {
        setIsTransparent(false);
      } else if (currentScrollY < lastScrollY) {
        setIsTransparent(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsTransparent(true);
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const toggleMobileSection = (index) => {
    setActiveMobileSection(activeMobileSection === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-2 left-2 right-2 sm:left-4 sm:right-4 z-50 rounded-xl transition-all duration-500 transform
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-1">
        <div className="flex items-center justify-between h-12 sm:h-14">

          {/* Logo - Responsive sizing */}
            <Link href="/">
          <div className={`relative p-1 bg-slate-700 rounded-lg transition-all duration-700 ${
            hasLaunched 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: hasLaunched ? '0ms' : '200ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
         <Image
         src="/logo/webber-logo.png"
         width={200}
         height={200}
         alt='logo'
         className=''
         />
          </div>
         </Link>

          {/* Desktop/Tablet Menu - Hidden on mobile */}
          <div className={`hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 transition-all duration-800 ${
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
    <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all text-sm font-medium py-1 px-2">
      <span className="whitespace-nowrap">{item.name}</span>
      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>

    {item.hasDropdown && (
      <div className="absolute left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
        {item.items.map((category, ci) => (
          <div key={ci} className="relative group/submenu">
            <div className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm border-b border-gray-100 last:border-0 transition-colors cursor-pointer">
              <span className="font-medium">{category.type}</span>
              {category.hasSubDropdown && <ChevronRight className="w-3 h-3" />}
            </div>

            {category.hasSubDropdown && (
              <div className="absolute left-full top-0 ml-1 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-60 max-h-[60vh] overflow-y-auto opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-150">
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {category.chips.map((chip, chipIndex) => (
                      <div
                        key={chipIndex}
                        className="p-3 bg-gray-50 border border-gray-100 rounded-lg hover:shadow-sm hover:border-blue-200 transition-all cursor-pointer group/card"
                      >
                        <h4 className="font-medium text-gray-900 text-sm group-hover/card:text-blue-600 mb-1">
                          {chip.name}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          {chip.description}
                        </p>
                        <button 
                          onClick={() => window.open(chip.documentUrl, '_blank')}
                          className="inline-flex items-center text-xs font-medium text-green-600 hover:text-green-700 transition-colors group/download mt-1"
                        >
                          <svg
                            className="w-3 h-3 mr-1 transition-transform group-hover/download:translate-y-0.5"
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
                      </div>
                    ))}
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

          {/* Right Side Buttons - Responsive */}
       <div 
  className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-700 ${
    hasLaunched 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8'
  }`}
  style={{
    transitionDelay: hasLaunched ? '0ms' : '600ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }}
>
  {/* Resources Button with Dropdown - Hidden on small screens, visible on sm+ */}
  <div 
    className={`hidden sm:block relative group transition-all duration-600 ${
      hasLaunched 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    }`}
    style={{
      transitionDelay: hasLaunched ? '0ms' : '650ms'
    }}
  >
    <Button
      title={
        <div className="flex items-center space-x-1">
          <span>Resources</span>
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
        </div>
      }
      containerClass="border border-gray-600 text-gray-700 rounded-lg"
    />
    
    {/* Dropdown Menu */}
    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="py-2">
        <button
          onClick={() => {
            window.location.href = "/Blog";
          }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
        >
          Blogs
        </button>
        <button
          onClick={() => {
            window.location.href = "/Media";
          }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
        >
          Media
        </button>
      </div>
    </div>
  </div>
  
  {/* Contact Button - Always visible but responsive sizing */}
  <div 
    className={`transition-all duration-600 ${
      hasLaunched 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    }`}
    style={{
      transitionDelay: hasLaunched ? '0ms' : '700ms'
    }}
  >
    <Button
      title="Contact"
      containerClass="bg-black text-white hover:bg-gray-800 border border-black rounded-lg"
    />
  </div>
  
  {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
  <div 
    className={`block md:hidden transition-all duration-600 ${
      hasLaunched 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    }`}
    style={{
      transitionDelay: hasLaunched ? '0ms' : '750ms'
    }}
  >
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="p-1.5 sm:p-2 border border-gray-300 bg-white text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
    >
      {isMobileMenuOpen ? (
        <X className="h-3 w-3 sm:h-4 sm:w-4" />
      ) : (
        <Menu className="h-3 w-3 sm:h-4 sm:w-4" />
      )}
    </button>
  </div>
</div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="px-3 sm:px-4 py-3 space-y-1">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button 
                    onClick={() => item.hasDropdown ? toggleMobileSection(i) : null}
                    className="w-full flex justify-between items-center text-gray-300 hover:text-white text-sm font-medium py-2.5 px-2 hover:bg-gray-800/30 rounded transition-all"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeMobileSection === i ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && activeMobileSection === i && (
                    <div className="ml-2 sm:ml-4 mt-2 space-y-3 animate-in slide-in-from-top-2 duration-200">
                      {item.items.map((category, ci) => (
                        <div key={ci}>
                          <div className="text-white font-medium text-sm py-2 border-l-2 border-cyan-400 pl-3">
                            {category.type}
                          </div>
                          
                          {category.hasSubDropdown && category.chips && (
                            <div className="ml-2 sm:ml-4 space-y-3">
                              {/* Low Voltage Section */}
                              <div>
                                <div className="text-cyan-400 text-xs font-medium mb-2 px-2">Low Voltage</div>
                                <div className="space-y-2">
                                  {category.chips.filter(chip => chip.category === 'low').map((chip, chipIndex) => (
                                    <div key={chipIndex} className="bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-gray-600 transition-colors mx-1">
                                      <div className="font-medium text-white text-xs mb-1">{chip.name}</div>
                                      <div className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{chip.description}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* High Voltage Section */}
                              <div>
                                <div className="text-cyan-400 text-xs font-medium mb-2 px-2">High Voltage</div>
                                <div className="space-y-2">
                                  {category.chips.filter(chip => chip.category === 'high').map((chip, chipIndex) => (
                                    <div key={chipIndex} className="bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-gray-600 transition-colors mx-1">
                                      <div className="font-medium text-white text-xs mb-1">{chip.name}</div>
                                      <div className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{chip.description}</div>
                                    </div>
                                  ))}
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

              {/* Mobile CTA Buttons */}
              <div className="pt-3 border-t border-gray-800 space-y-2">
                <Button
                  title="Resources"
                  containerClass="w-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg"
                />
                <Button
                  title="Contact Us"
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