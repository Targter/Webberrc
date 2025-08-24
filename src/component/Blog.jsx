"use client"
import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'News', 'Electric', 'EV market'];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Ecosystem for Advanced Electronics",
      excerpt: "In today's rapidly evolving technological landscape, businesses require integrated solutions that streamline operations, enhance productivity, and enable informed decision-making...",
      category: "ELECTRIC",
      date: "15 Nov 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      author: {
        name: "Sarah Johnson",
        role: "Software Lead Engineer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      title: "Understanding Thermal Runaway and How It's Being Prevented in 2024",
      excerpt: "In the evolving landscape of electric vehicles (EVs), battery safety remains a top priority, especially when it comes to preventing thermal runaway — a dangerous phenomenon that can lead to catastrophic outcomes...",
      category: "ELECTRIC",
      date: "20 Sep 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
      author: {
        name: "Mike Chen",
        role: "Application Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      title: "5 Stars",
      excerpt: "I walked into the office on a Wednesday morning, sat at my desk, and procrastinated a bit before I started the day's work...",
      category: "NEWS",
      date: "6 Sep 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      author: {
        name: "Alex Rodriguez",
        role: "Marketing Strategist",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      title: "Battery Management Systems: The Future of Energy Storage",
      excerpt: "Comprehensive guide to BMS integration for electric vehicle enthusiasts and professionals in the renewable energy sector...",
      category: "ELECTRIC",
      date: "12 Aug 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
      author: {
        name: "Dr. Emily Watson",
        role: "Research Director",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 5,
      title: "EV Market Trends and Predictions for 2025",
      excerpt: "An in-depth analysis of the electric vehicle market growth, consumer adoption patterns, and technological innovations shaping the industry...",
      category: "EV MARKET",
      date: "28 Jul 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
      author: {
        name: "David Park",
        role: "Market Analyst",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 6,
      title: "Sustainable Power Solutions in Modern Manufacturing",
      excerpt: "How Webber Electro Corp is revolutionizing industrial power management with cutting-edge sustainable technologies and smart grid integration...",
      category: "NEWS",
      date: "15 Jul 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      author: {
        name: "Jennifer Liu",
        role: "Sustainability Officer",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face"
      }
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase().replace(' ', ''));

  const featuredPost = blogPosts[0];
  const spotlightPosts = blogPosts.slice(1, 3);
  const regularPosts = blogPosts.slice(3);

  const CategoryButton = ({ category, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-black text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {category}
    </button>
  );

  const PostCard = ({ post, featured = false, spotlight = false }) => (
    <article className={`group cursor-pointer ${
      featured ? 'col-span-full' :
      spotlight ? 'col-span-1' : 'col-span-1'
    }`}>
      <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
        featured ? 'grid grid-cols-1 lg:grid-cols-2 gap-0' : 'h-full'
      }`}>
        <div className={`relative overflow-hidden ${featured ? 'order-1 lg:order-2' : 'aspect-video'}`}>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className={`p-6 flex flex-col justify-between ${featured ? 'order-2 lg:order-1 lg:p-12' : ''}`}>
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h2 className={`font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
              featured ? 'text-3xl lg:text-4xl leading-tight' :
              spotlight ? 'text-xl' : 'text-lg'
            }`}>
              {post.title}
            </h2>
            
            <p className={`text-gray-600 leading-relaxed mb-6 ${
              featured ? 'text-lg' : 'text-sm'
            }`}>
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm">{post.author.name}</p>
              <p className="text-gray-500 text-xs">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-25 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Webber Electro Corp blog
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay up-to-date on the latest developments in battery management systems, power electronics, and the electrification of transportation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search here..."
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <PostCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Spotlight Section */}
      {activeCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              In the <span className="text-blue-500">spotlight</span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spotlightPosts.map((post) => (
              <PostCard key={post.id} post={post} spotlight={true} />
            ))}
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        {filteredPosts.length > (activeCategory === 'All' ? 3 : 0) && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Load More Button */}
      <section className="max-w-7xl mx-auto px-6 pb-16 text-center">
        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors duration-300 font-medium">
          Load more
        </button>
      </section>
    </div>
  );
};

export default Blog;