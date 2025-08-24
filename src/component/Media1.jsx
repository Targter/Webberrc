"use client"
import React, { useState } from 'react';
import { Calendar, ExternalLink, Play, FileText, Newspaper, Monitor, Award, Users, Globe } from 'lucide-react';
import Image from 'next/image';
import {mediaItems} from "@/constants"

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
                    <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center overflow-hidden">
                      {featuredItems[0].image ? (
                        <Image
                          src={featuredItems[0].image}
                          alt={featuredItems[0].title}
                          width={400}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(featuredItems[0].type)}
                          <p className="mt-2 text-sm">Featured Image</p>
                        </div>
                      )}
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
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(item.type)}
                          <p className="mt-2 text-sm">Image Placeholder</p>
                        </div>
                      )}
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
                    <div className="h-32 md:h-auto bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={300}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          {getIcon(item.type)}
                        </div>
                      )}
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