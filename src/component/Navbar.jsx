"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hasLaunched, setHasLaunched] = useState(false);

  const navItems = [
    {
      name: 'Products',
      hasDropdown: true,
      items: ['chip1', 'chip2', 'chip3', 'chip4']
    },
    { name: 'R&D Insights', hasDropdown: false },
    { name: 'Support', hasDropdown: false }
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1">
        <div className="flex items-center justify-between h-10 sm:h-12">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className={`relative p-1 bg-black/5 rounded-lg transition-all duration-700 ${
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
                width={100} 
                height={100} 
                alt="logo" 
                className="h-7 w-auto sm:h-8 filter brightness-0 opacity-80" 
              />
            </div>
          </Link>

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
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{
                  animationDelay: hasLaunched ? '0ms' : `${500 + i * 100}ms`
                }}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-all text-sm font-medium py-1">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    {item.items.map((sub, si) => (
                      <a
                        key={si}
                        href="#"
                        className="block px-4 py-2.5 text-gray-700 hover:text-black hover:bg-gray-50 text-sm border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {sub}
                      </a>
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
                title="History"
                containerClass="hidden sm:inline-block border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
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
                title="Let's Chip it"
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
          <div className="lg:hidden mt-2 bg-white border border-gray-200 rounded-lg shadow-xl">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button className="w-full flex justify-between items-center text-gray-700 hover:text-black text-sm font-medium py-1">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items.map((sub, si) => (
                        <a key={si} href="#" className="block text-gray-600 hover:text-black text-sm py-1 transition-colors">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Button
                  title="History"
                  containerClass="w-full sm:hidden border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
                />
                <Button
                  title="Let's Chip it"
                  containerClass="w-full bg-black text-white hover:bg-gray-800 border border-black rounded-lg"
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