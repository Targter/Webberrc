"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MediaGallery } from "@/component/MediaGallery";

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  
  const missionRef = useRef(null);
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const visionRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    // First launch animation
    const launchTimer = setTimeout(() => setIsLaunched(true), 100);

    const handleScroll = () => {
      // Mission section scroll progress
      if (!missionRef.current) return;

      const element = missionRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.2;

      if (elementTop <= startPoint && elementTop >= endPoint - elementHeight) {
        const progress = Math.max(0, Math.min(1, (startPoint - elementTop) / (startPoint - endPoint)));
        setScrollProgress(progress);
      } else if (elementTop < endPoint - elementHeight) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = [heroRef, valuesRef, visionRef, mediaRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearTimeout(launchTimer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = (sectionName, delay = 0) => {
    const isInView = visibleSections.has(sectionName);
    return `transition-all duration-1000 ease-out transform ${
      isInView 
        ? 'translate-y-0 opacity-100 scale-100' 
        : 'translate-y-8 opacity-0 scale-98'
    } ${delay > 0 ? `delay-${delay}` : ''}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        data-section="hero"
        className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-6 md:pt-13 pt-17"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-8 sm:mb-12 mt-5 md:mt-10 sm:mt-10 transition-all duration-1200 ease-out transform ${
              isLaunched 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-12 opacity-0 scale-95'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Trusted by <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">global OEMs</span> and battery manufacturers
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Webber Electro Corp is a leading BMS innovator, developing cutting-edge solutions
              and exporting to 25+ countries worldwide.
            </p>
          </div>

          {/* Media Mentions */}
          <div 
            className={`mt-8 sm:mt-12 md:mt-16 text-center transition-all duration-1000 delay-300 ease-out transform ${
              isLaunched 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent font-bold text-xl sm:text-2xl">
              MEDIA MENTIONS
            </p>
            <div className="h-0.5 bg-gradient-to-r w-32 sm:w-48 md:w-[200px] mx-auto from-[#3b82f6] via-[#06b6d4] to-[#10b981] mb-4 sm:mb-5"></div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 px-2">
              {[
                { name: 'autocarpro', img: "/pr/media-mention/autocarpro-logo.avif", link: "https://www.autocarpro.in/news/webber-electrocorp-launches-service-network-for-electric-vehicle-after-sales-support-126699" },
                { name: 'ettimes', img: "/pr/media-mention/ettimes.svg", link: "https://ciso.economictimes.indiatimes.com/news/webber-electrocorp-revolutionizes-electric-vehicle-after-sales-service-with-webber-care-point/121490831" },
                { name: 'startup.png', img: "/pr/media-mention/startup.png", link: "https://startuptalky.com/news/webber-electrocorp-ev-after-sales-solutions/" },
                { name: 'energy', img: "/pr/media-mention/energy.gif", link: "https://www.energetica-india.net/news/webber-launches-smart-battery-management-system-and-webber-care-point-ev-after-sales-service" },
                { name: 'tele', img: "/pr/media-mention/tele.png", link: "https://www.telematicswire.net/webber-introduces-battery-management-system/" },
                { name: 'ys', img: "/pr/media-mention/yourstory.svg", link: "https://yourstory.com/2025/06/webber-ev-bms-india-innovation" },
              ].map((outlet, index) => (
                <div 
                  key={outlet.name} 
                  className={`h-6 sm:h-8 md:h-8 flex items-center justify-center transition-all duration-700 ease-out transform hover:scale-110 ${
                    isLaunched 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <Link href={outlet.link} className='h-full w-full'>
                    <img src={outlet.img} alt={outlet.name} className="h-full object-contain transition-transform duration-300 hover:scale-105" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        ref={valuesRef}
        data-section="values"
        className="py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text font-bold text-transparent mb-6 sm:mb-8 md:mb-12 text-center ${getAnimationClass('values')}`}>
            Our Core Values
          </h2>
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto">
            
            {/* Main Values Card - Takes 2 rows on lg+ */}
            <div className={`bg-gradient-to-br from-[#3b82f6] via-[#06b6d4] to-[#10b981] rounded-xl p-4 sm:p-6 md:p-8 text-white lg:row-span-2 ${getAnimationClass('values', 200)}`}>
              <div className='h-16 sm:h-18 md:h-21 w-full bg-slate-700 rounded-xl overflow-hidden'>
                <img src="/logo/webber-logo.png" alt="Webber Logo" className='py-2 sm:py-3 md:py-4 px-2 w-full h-full object-contain' />
              </div>
              
              <p className="mb-6 sm:mb-8 opacity-90 text-xs sm:text-sm md:text-base mt-3 sm:mt-5">
                Innovating with Integrity, Collaboration, and Customer Focus. At Maxwell,
                we champion a culture built on trust, transparency, and innovation.
              </p>
              
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Total Units Deployed</h4>
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">100,000+</span>
                  <div className="ml-2 sm:ml-4 w-8 sm:w-10 h-8 sm:h-10 md:w-12 md:h-12 bg-[#06b6d4] rounded-lg flex items-center justify-center">
                    <span className="text-sm sm:text-lg md:text-xl">🚗</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Cards */}
            {[
              { title: "Integrity", description: "Honoring commitments, ensuring data accuracy, and addressing challenges with honesty", delay: 300 },
              { title: "Transparency", description: "Fostering open communication and aligning expectations for clarity and trust.", delay: 400 },
              { title: "Teamwork and Innovation", description: "Building unified, respectful collaborations that drive exceptional results driving innovation.", delay: 500 },
              { title: "Customer-Centricity", description: "Anticipating needs and delivering tailored solutions that exceed expectations.", delay: 600, icon: "👥" }
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${getAnimationClass('values')}`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
                {value.icon && (
                  <div className="mt-3 sm:mt-4 w-8 sm:w-10 h-8 sm:h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm sm:text-lg md:text-xl">{value.icon}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        ref={visionRef}
        data-section="vision"
        className="py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className={`lg:w-1/2 ${getAnimationClass('vision')}`}>
              <div className="inline-block bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white px-3 sm:px-4 md:px-6 py-2 rounded-full mb-4 sm:mb-6">
                <span className="flex items-center text-xs sm:text-sm md:text-base">
                  <span className="mr-2">⚡</span>
                  Our Vision
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Revolutionizing Energy Storage with
                Advanced BMS Technology and
                Sustainable Innovation
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At Webber Electro Corp, we envision a future where advanced battery management systems
                power the clean energy revolution. We're committed to driving innovation, safety, and
                reliability in everything we do.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Our focus is delivering smarter, efficient solutions that meet today's demands
                while anticipating tomorrow's possibilities—benefiting customers, partners,
                employees, and the planet.
              </p>
            </div>

            <div className={`lg:w-1/2 w-full ${getAnimationClass('vision', 300)}`}>
              <div className="bg-gray-200 rounded-xl mt-4 sm:mt-8 lg:mt-15 h-48 sm:h-64 md:h-80 flex items-center justify-center overflow-hidden group">
                <img 
                  src="/pr/article1.png" 
                  alt="Vision illustration" 
                  className='w-full h-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105' 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl text-transparent">
            <span className="font-medium">Our </span>
            <span className="font-medium">Mission</span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-relaxed px-2">
            <span
              className="transition-all duration-1000 ease-out"
              style={{
                opacity: Math.max(0.3, scrollProgress),
                color: scrollProgress > 0.2 ? '#1f2937' : '#d1d5db'
              }}
            >
              Webber Electro Corp is driving the future of energy storage with innovative{' '}
            </span>
            <span
              className="transition-all duration-1000 ease-out delay-200"
              style={{
                opacity: Math.max(0.3, scrollProgress * 1.2),
                color: scrollProgress > 0.3 ? '#2563eb' : '#d1d5db'
              }}
            >
              Battery Management Systems
            </span>
            <span
              className="transition-all duration-1000 ease-out delay-300"
              style={{
                opacity: Math.max(0.3, scrollProgress * 1.1),
                color: scrollProgress > 0.4 ? '#1f2937' : '#d1d5db'
              }}
            >
              . We follow a clear vision{' '}
            </span>
            <span
              className="transition-all duration-1500 ease-out delay-500"
              style={{
                opacity: Math.max(0.2, scrollProgress * 0.8),
                color: scrollProgress > 0.6 ? '#6b7280' : '#e5e7eb'
              }}
            >
              to lead the transition to safer, more efficient energy solutions
              by providing comprehensive BMS technologies—delivered with precision and reliability.
            </span>
          </h2>
        </div>
      </section>

      {/* Media Gallery */}
      <div 
        ref={mediaRef}
        data-section="media"
        className={getAnimationClass('media')}
      >
        <MediaGallery />
      </div>
    </div>
  );
};

export default About;