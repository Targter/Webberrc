"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TimelineDemo from "@/component/timeline"
import {MediaGallery} from "@/component/MediaGallery"
const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const missionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!missionRef.current) return;

      const element = missionRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start the effect when element enters viewport
      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.2; // Complete when 80% scrolled through viewport

      if (elementTop <= startPoint && elementTop >= endPoint - elementHeight) {
        const progress = Math.max(0, Math.min(1, (startPoint - elementTop) / (startPoint - endPoint)));
        setScrollProgress(progress);
      } else if (elementTop < endPoint - elementHeight) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6 md:pt-13 pt-17">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-5 md:mt-10 sm:mt-10 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">global OEMs</span> and battery manufacturers
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Webber Electro Corp is a leading BMS innovator, developing cutting-edge solutions
              and exporting to 25+ countries worldwide.
            </p>
            {/* <button className="mt-6 px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors">
              Read case studies
            </button> */}
          </div>

          {/* Partner Logos Placeholder */}
          {/* <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-8 items-center mt-12 md:mt-16">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="h-8 md:h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs md:text-sm">Logo {i}</span>
              </div>
            ))}
          </div> */}

          {/* Media Mentions */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent  font-bold text-2xl">MEDIA MENTIONS</p>
            <div className="h-0.5 bg-gradient-to-r w-[200px] mx-auto from-[#3b82f6] via-[#06b6d4] to-[#10b981] mb-5"></div>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {[
                { name: 'autocarpro', img: "/pr/media-mention/autocarpro-logo.avif",link:"https://www.autocarpro.in/news/webber-electrocorp-launches-service-network-for-electric-vehicle-after-sales-support-126699" },
                { name: 'ettimes', img: "/pr/media-mention/ettimes.svg",link:"https://ciso.economictimes.indiatimes.com/news/webber-electrocorp-revolutionizes-electric-vehicle-after-sales-service-with-webber-care-point/121490831" },
                { name: 'startup.png', img: "/pr/media-mention/startup.png",link:"https://startuptalky.com/news/webber-electrocorp-ev-after-sales-solutions/"},
                { name: 'energy', img: "/pr/media-mention/energy.gif",link:"https://www.energetica-india.net/news/webber-launches-smart-battery-management-system-and-webber-care-point-ev-after-sales-service" },
                { name: 'tele', img: "/pr/media-mention/tele.png" ,link:"https://www.telematicswire.net/webber-introduces-battery-management-system/"},
                { name: 'ys', img: "/pr/media-mention/yourstory.svg" ,link:"https://yourstory.com/2025/06/webber-ev-bms-india-innovation"},
              ].map((outlet) => (
                <div key={outlet.name} className="h-8 md:h-8 flex items-center justify-center">
                  <Link href={outlet.link} className='h-full w-full'>
                  <img src={outlet.img} alt={outlet.name} className="h-full object-contain" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text font-bold text-transparent mb-8 md:mb-12 text-center">
      Our Core Values
    </h2>
    
    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
      
      {/* Main Values Card - Takes 2 rows */}
      <div className="bg-gradient-to-br from-[#3b82f6] via-[#06b6d4] to-[#10b981] rounded-xl p-6 md:p-8 text-white lg:row-span-2">
        <div className='h-21 w-70 bg-slate-700 rounded-xl'>
          <img src="/logo/webber-logo.png" alt="" className='py-4  px-2 '  />

        </div>
        
        <p className="mb-8 opacity-90 text-sm md:text-base mt-5">
          Innovating with Integrity, Collaboration, and Customer Focus. At Maxwell,
          we champion a culture built on trust, transparency, and innovation.
        </p>
        
        <div className="mb-6">
          <h4 className="text-lg md:text-xl font-semibold mb-2">Total Units Deployed</h4>
          <div className="flex items-center">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">100,000+</span>
            <div className="ml-4 w-10 h-10 md:w-12 md:h-12 bg-[#06b6d4] rounded-lg flex items-center justify-center">
              <span className="text-lg md:text-xl">🚗</span>
            </div>
          </div>
        </div>
      </div>

      {/* Integrity Card */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Integrity</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Honoring commitments, ensuring data accuracy, and addressing challenges with honesty
        </p>
      </div>

      {/* Transparency Card */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Transparency</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Fostering open communication and aligning expectations for clarity and trust.
        </p>
      </div>

      {/* Teamwork and Innovation Card */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Teamwork and Innovation</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Building unified, respectful collaborations that drive exceptional results driving innovation.
        </p>
      </div>

      {/* Customer-Centricity Card */}
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Customer-Centricity</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Anticipating needs and delivering tailored solutions that exceed expectations.
        </p>
        <div className="mt-4 w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="text-lg md:text-xl">👥</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Vision Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block  bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white px-4 md:px-6 py-2 rounded-full mb-6">
                <span className="flex items-center text-sm md:text-base">
                  <span className="mr-2">⚡</span>
                  Our Vision
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Energy Storage with
                Advanced BMS Technology and
                Sustainable Innovation
              </h2>

              <p className="text-base md:text-lg text-gray-600 mb-6">
                At Webber Electro Corp, we envision a future where advanced battery management systems
                power the clean energy revolution. We're committed to driving innovation, safety, and
                reliability in everything we do.
              </p>

              <p className="text-base md:text-lg text-gray-600">
                Our focus is delivering smarter, efficient solutions that meet today's demands
                while anticipating tomorrow's possibilities—benefiting customers, partners,
                employees, and the planet.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-200 rounded-xl mt-15 h-64 md:h-80 flex items-center justify-center">
                {/* <span className="text-gray-400 text-sm md:text-lg">Vision Image Placeholder</span>
                 */}
                {/* <Image
                src="/pr/article1.png"
                width={100}
                height={200}
                /> */}
                <img src="/pr/article1.png" alt="image" className='w-full h-full rounded-xl' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text font-bold text-4xl text-transparent">
            <span className="font-medium">Our </span>
            <span className=" font-medium">Mission</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
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

             <MediaGallery/>
      {/* Team Section */}



     

      {/* Stats Section */}
      {/* <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100 text-sm md:text-base">BMS Units Deployed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100 text-sm md:text-base">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 text-sm md:text-base">System Reliability</div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <TimelineDemo/> */}
    </div>
  );
};

export default About;