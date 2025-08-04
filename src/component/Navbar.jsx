"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Button = ({ title, leftIcon, rightIcon, containerClass = "", onClick }) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${containerClass}`}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: 'Products',
      hasDropdown: true,
      items: ['Microprocessors', 'Memory Chips', 'Power Management', 'Sensors']
    },
    { name: 'R&D Insights', hasDropdown: false },
    { name: 'Support', hasDropdown: false }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-1 left-4 right-4 z-50 rounded-2xl transition-all duration-500
    ${isScrolled
  ? 'bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50'
  : 'bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50'
}
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo/webber-logo.png" width={140} height={140} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-all text-sm font-medium">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-md shadow-lg overflow-hidden">
                    {item.items.map((sub, si) => (
                      <a
                        key={si}
                        href="#"
                        className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700 text-sm border-b border-slate-700/50 last:border-0"
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              title="History"
              containerClass="hidden sm:inline-block border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
            />
            <Button
              title="Let's Chip it"
              containerClass="bg-slate-600 text-white hover:bg-slate-500 border border-slate-500"
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 border border-slate-600 bg-slate-700 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-md">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button className="w-full flex justify-between items-center text-slate-300 hover:text-white text-sm font-medium">
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((sub, si) => (
                        <a key={si} href="#" className="block text-slate-400 hover:text-white text-sm">
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <Button
                  title="History"
                  containerClass="w-full sm:hidden border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                />
                <Button
                  title="Let's Chip it"
                  containerClass="w-full bg-slate-600 text-white hover:bg-slate-500 border border-slate-500"
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
