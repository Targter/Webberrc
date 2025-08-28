"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ExternalLink, Play, FileText, Newspaper, Monitor, Award, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import { mediaItems } from "@/constants"

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLaunched, setIsLaunched] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);

  // Refs for sections
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const statsRef = useRef(null);
  const articlesRef = useRef(null);

  useEffect(() => {
    // First launch animation
    const launchTimer = setTimeout(() => setIsLaunched(true), 150);

    // Scroll handler for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = [heroRef, featuredRef, statsRef, articlesRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(launchTimer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const filteredItems = mediaItems.filter(item => 
    activeFilter === 'all' || item.category.toLowerCase() === activeFilter
  );

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-4 sm:w-5 h-4 sm:h-5" />;
      case 'interview': return <Monitor className="w-4 sm:w-5 h-4 sm:h-5" />;
      default: return <FileText className="w-4 sm:w-5 h-4 sm:h-5" />;
    }
  };

  const getAnimationClass = (sectionName, delay = 0) => {
    const isInView = visibleSections.has(sectionName);
    return `transition-all duration-1000 ease-out transform ${
      isInView 
        ? 'translate-y-0 opacity-100 scale-100' 
        : 'translate-y-10 opacity-0 scale-98'
    } ${delay > 0 ? `delay-${delay}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar Space */}
      <div className="h-16 sm:h-20"></div>

      {/* Hero Section */}
      <div 
        className="bg-white py-12 sm:py-16 md:py-20"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div 
            className={`text-center max-w-3xl mx-auto transition-all duration-1200 ease-out transform ${
              isLaunched 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-16 opacity-0 scale-95'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Media Coverage
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
              Latest press coverage and media mentions showcasing Webber Electrocorp's journey in revolutionizing electric vehicle technology and after-sales services.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Stories */}
      {featuredItems.length > 0 && (
        <div 
          ref={featuredRef}
          data-section="featured"
          className="bg-white py-12 sm:py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 ${getAnimationClass('featured')}`}>
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Featured Stories
              </span>
            </h2>
            
            {/* First Featured - Hero Style */}
            {featuredItems[0] && (
              <div className={`mb-12 sm:mb-16 ${getAnimationClass('featured', 200)}`}>
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-48 sm:h-64 md:h-80 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center overflow-hidden">
                      {featuredItems[0].image ? (
                        <Image
                          src={featuredItems[0].image}
                          alt={featuredItems[0].title}
                          width={400}
                          height={320}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(featuredItems[0].type)}
                          <p className="mt-2 text-xs sm:text-sm">Featured Image</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 gap-2 sm:gap-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit">
                          {featuredItems[0].category}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm">
                          {featuredItems[0].date}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                        {featuredItems[0].title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                        {featuredItems[0].description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <span className="text-base sm:text-lg font-medium">
                          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                            {featuredItems[0].publication}
                          </span>
                        </span>
                        {featuredItems[0].url !== '#' && (
                          <a
                            href={featuredItems[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-sm sm:text-base w-fit"
                          >
                            <span>Read Article</span>
                            <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Featured - Two Column */}
            {featuredItems.length > 1 && (
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {featuredItems.slice(1).map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${getAnimationClass('featured')}`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={192}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(item.type)}
                          <p className="mt-2 text-xs sm:text-sm">Image Placeholder</p>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-500">{item.category}</span>
                        <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="font-medium text-sm sm:text-base">
                          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                            {item.publication}
                          </span>
                        </span>
                        {item.url !== '#' && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors w-fit"
                          >
                            <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Stats Strip */}
      <div 
        ref={statsRef}
        data-section="stats"
        className="bg-gray-900 text-white py-8 sm:py-12"
        style={{ transform: `translateY(${scrollY * 0.01}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { 
                icon: <Globe className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mr-2" />, 
                value: mediaItems.filter(item => item.category === 'Digital').length, 
                label: "Digital Publications" 
              },
              { 
                icon: <Newspaper className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mr-2" />, 
                value: mediaItems.filter(item => item.category === 'Print').length, 
                label: "Print Coverage" 
              },
              { 
                icon: <Play className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mr-2" />, 
                value: "1", 
                label: "Video Interview" 
              },
              { 
                icon: <Award className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mr-2" />, 
                value: "May 2025", 
                label: "Coverage Period" 
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out transform ${
                  visibleSections.has('stats') 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                  {stat.icon}
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 sm:mt-0">
                    <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regular Articles */}
      {regularItems.length > 0 && (
        <div 
          ref={articlesRef}
          data-section="articles"
          className="bg-gray-50 py-12 sm:py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 ${getAnimationClass('articles')}`}>
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                All Coverage
              </span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {regularItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-[1.01] ${getAnimationClass('articles')}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-4 gap-0">
                    <div className="h-32 sm:h-40 md:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={300}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(item.type)}
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex items-center">
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-3 gap-2">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm w-fit">
                            {item.category}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <span className="font-medium text-sm sm:text-base">
                            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                              {item.publication}
                            </span>
                          </span>
                          {item.url !== '#' && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 w-fit"
                            >
                              <span className="text-xs sm:text-sm">Read More</span>
                              <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;