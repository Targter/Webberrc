"use client"
import React, { useState } from 'react';
import { Calendar, ExternalLink, Play, FileText, Newspaper, Monitor, Award, Users, Globe } from 'lucide-react';
import Image from 'next/image';

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'interview',
      category: 'Digital',
      title: 'Webber EV BMS India Innovation',
      publication: 'YourStory',
      date: 'June 2025',
      url: 'https://yourstory.com/2025/06/webber-ev-bms-india-innovation',
      description: 'In-depth interview covering Webber\'s innovative approach to EV battery management systems in India.',
      featured: true,
      image:"/pr/article1.png"

    },
    {
      id: 2,
      type: 'video',
      category: 'Digital',
      title: 'Live Discussion on EV Innovation',
      publication: 'YouTube',
      date: 'May 2025',
      url: 'https://www.youtube.com/live/W4DoA5V3ogQ?si=cNzE4PRRshVKpkI-',
      description: 'Live video interview discussing Webber\'s role in revolutionizing electric vehicle technology.',
      featured: true,
      image:"/pr/article1.png"
    },
    {
      id: 3,
      type: 'press',
      category: 'Digital',
      title: 'Webber Electrocorp Revolutionizes Electric Vehicle After-Sales Service',
      publication: 'Economic Times',
      date: 'May 2025',
      url: 'https://ciso.economictimes.indiatimes.com/news/webber-electrocorp-revolutionizes-electric-vehicle-after-sales-service-with-webber-care-point/121490831',
      description: 'Press coverage on Webber Care Point service platform launch.',
      featured: true,
      image:"/pr/article1.png"
    },
    {
      id: 4,
      type: 'press',
      category: 'Digital',
      title: 'Webber Electrocorp Enhances EV Service Norms',
      publication: 'Mobility Outlook',
      date: 'May 2025',
      url: 'https://www.mobilityoutlook.com/news/webber-electrocorp-enhances-ev-service-norms/',
      description: 'Coverage of enhanced service standards and customer care initiatives.',
      image:"/pr/article1.png"
    },
    {
      id: 5,
      type: 'press',
      category: 'Digital',
      title: 'Webber Electrocorp Launches Service Platform',
      publication: 'Franchise India',
      date: 'May 2025',
      url: 'https://www.franchiseindia.com/insights/en/news/webber-electrocorp-launches-webber-care-point-service-platform.56587',
      description: 'Launch announcement of Webber Care Point service platform.',
      image:"/pr/article1.png"
      
    },
    {
      id: 6,
      type: 'press',
      category: 'Digital',
      title: 'Smart After-Sales Solutions Drive EV Mobility',
      publication: 'Media Brief',
      date: 'May 2025',
      url: 'https://mediabrief.com/webber-electrocorp-drives-ev-mobility-forward-with-smart-after-sales-solutions/',
      description: 'Analysis of intelligent after-sales solutions in the EV sector.',
      image:"/pr/article1.png"
    },
    {
      id: 7,
      type: 'press',
      category: 'Digital',
      title: 'EV After-Sales Solutions Innovation',
      publication: 'Startup Talky',
      date: 'May 2025',
      url: 'https://startuptalky.com/news/webber-electrocorp-ev-after-sales-solutions/',
      description: 'Coverage focusing on innovative approaches to EV customer service.',
      image:"/pr/article1.png"
    },
    {
      id: 8,
      type: 'press',
      category: 'Digital',
      title: 'Intelligent After-Sales Solutions Leadership',
      publication: 'Evolution Auto India',
      date: 'May 2025',
      url: 'https://evolutionautoindia.in/webber-electrocorp-leads-the-charge-in-ev-mobility-with-intelligent-after-sales-solutions/',
      description: 'Industry leadership coverage in EV mobility solutions.',
      image:"/pr/article1.png"
    },
    {
      id: 9,
      type: 'press',
      category: 'Digital',
      title: 'Leading EV Mobility Charge',
      publication: 'CXO Today',
      date: 'May 2025',
      url: 'https://cxotoday.com/press-release/webber-electrocorp-leads-the-charge-in-ev-mobility-with-intelligent-after-sales-solutions/',
      description: 'Executive perspective on Webber\'s market leadership position.',
      image:"/pr/article1.png"
    },
    {
      id: 10,
      type: 'press',
      category: 'Digital',
      title: 'Service Network Launch for EV Support',
      publication: 'Auto Car Pro',
      date: 'May 2025',
      url: 'https://www.autocarpro.in/news/webber-electrocorp-launches-service-network-for-electric-vehicle-after-sales-support-126699',
      description: 'Comprehensive service network expansion announcement.',
      image:"/pr/article1.png"
    },
    {
      id: 11,
      type: 'press',
      category: 'Digital',
      title: 'Smart Battery Management System Launch',
      publication: 'Energetica India',
      date: 'May 2025',
      url: 'https://www.energetica-india.net/news/webber-launches-smart-battery-management-system-and-webber-care-point-ev-after-sales-service',
      description: 'Technical coverage of BMS innovation and service platform.',
      image:"/pr/article1.png"
    },
    {
      id: 12,
      type: 'press',
      category: 'Print',
      title: 'EV Innovation Coverage',
      publication: 'Dainik Jagran',
      date: 'May 2025',
      url: '#',
      description: 'Print media coverage in leading Hindi daily newspaper.',
      image:"/pr/article1.png"
    },
    {
      id: 13,
      type: 'press',
      category: 'Print',
      title: 'Technology Advancement Story',
      publication: 'Dainik Savera',
      date: 'May 2025',
      url: '#',
      description: 'Regional print coverage of technological advancements.',
      image:"/pr/article1.png"
    },
    {
      id: 14,
      type: 'press',
      category: 'Print',
      title: 'EV Service Innovation',
      publication: 'Amar Ujala',
      date: 'May 2025',
      url: '#',
      description: 'Coverage in popular Hindi newspaper focusing on service innovation.',
      image:"/pr/article1.png"
    },
    {
      id: 15,
      type: 'press',
      category: 'Print',
      title: 'Industry Leadership Coverage',
      publication: 'Punjab Kesari',
      date: 'May 2025',
      url: '#',
      description: 'Regional newspaper coverage of industry leadership.',
      image:"/pr/article1.png"
    },
    {
      id: 16,
      type: 'press',
      category: 'Print',
      title: 'EV Technology Advancement',
      publication: 'Deshbandhu',
      date: 'May 2025',
      url: 'https://epaper.deshbandhu.co.in/clip/64672',
      description: 'Print coverage focusing on technological advancement in EV sector.',
      image:"/pr/article1.png"
    }
  ];

  const filteredItems = mediaItems.filter(item => 
    activeFilter === 'all' || item.category.toLowerCase() === activeFilter
  );

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const getIcon = (type) => {
    switch (type) {
      case 'video': return <Play className="w-5 h-5" />;
      case 'interview': return <Monitor className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Space */}
      <div className="h-20"></div>

      {/* Hero Section - Simple */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Media Coverage
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Latest press coverage and media mentions showcasing Webber Electrocorp's journey in revolutionizing electric vehicle technology and after-sales services.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-2 shadow-sm border">
              {['all', 'digital', 'print'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 mx-1 ${
                    activeFilter === filter
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stories - Large Layout */}
      {featuredItems.length > 0 && (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Featured Stories
              </span>
            </h2>
            
            {/* First Featured - Hero Style */}
            {featuredItems[0] && (
              <div className="mb-16">
                <div className="bg-gray-50 rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        {getIcon(featuredItems[0].type)}
                        {/* <p className="mt-2 text-sm">Featured Image</p> */}
                        <Image
                        
                        
                        
                        />
                      </div>
                    </div>
                    <div className="p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {featuredItems[0].category}
                        </span>
                        <span className="ml-4 text-gray-500 text-sm">
                          {featuredItems[0].date}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {featuredItems[0].title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        {featuredItems[0].description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">
                          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                            {featuredItems[0].publication}
                          </span>
                        </span>
                        {featuredItems[0].url !== '#' && (
                          <a
                            href={featuredItems[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                          >
                            <span>Read Article</span>
                            <ExternalLink className="w-4 h-4" />
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
              <div className="grid md:grid-cols-2 gap-8">
                {featuredItems.slice(1).map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        {getIcon(item.type)}
                        <p className="mt-2 text-sm">Image Placeholder</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-500">{item.category}</span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                            {item.publication}
                          </span>
                        </span>
                        {item.url !== '#' && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
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
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {mediaItems.filter(item => item.category === 'Digital').length}
                  </span>
                </span>
              </div>
              <p className="text-gray-400">Digital Publications</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Newspaper className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    {mediaItems.filter(item => item.category === 'Print').length}
                  </span>
                </span>
              </div>
              <p className="text-gray-400">Print Coverage</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Play className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    1
                  </span>
                </span>
              </div>
              <p className="text-gray-400">Video Interview</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 mr-2" />
                <span className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    May 2025
                  </span>
                </span>
              </div>
              <p className="text-gray-400">Coverage Period</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Articles - List Layout */}
      {regularItems.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                All Coverage
              </span>
            </h2>
            
            <div className="space-y-6">
              {regularItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-4 gap-0">
                    <div className="h-32 md:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        {getIcon(item.type)}
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-4">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                              {item.publication}
                            </span>
                          </span>
                          {item.url !== '#' && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <span className="text-sm">Read More</span>
                              <ExternalLink className="w-4 h-4" />
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

      {/* Contact Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Press Inquiries
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            For media inquiries, interviews, or press kit requests, please contact our communications team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Contact Press Team
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-full font-medium hover:border-gray-400 transition-colors">
              Download Press Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;