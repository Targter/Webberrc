"use client"
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const categories = ['All', 'Electric', 'EV Market'];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Ecosystem for Advanced Electronics",
      excerpt: "In today's rapidly evolving technological landscape, businesses require integrated solutions that streamline operations, enhance productivity, and enable informed decision-making...",
      category: "ELECTRIC",
      date: "15 Nov 2024",
      readTime: "5 min read",
      image: "/bg/bg1.png",
      author: {
        name: "Priya Sharma",
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
      image: "/bg/bg3.png",
      author: {
        name: "Rajesh Kumar",
        role: "Application Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      title: "5 Stars",
      excerpt: "I walked into the office on a Wednesday morning, sat at my desk, and procrastinated a bit before I started the day's work...",
      category: "ELECTRIC",
      date: "6 Sep 2024",
      readTime: "4 min read",
      image: "/bg/bg4.png",
      author: {
        name: "Arjun Patel",
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
        name: "Dr. Meera Reddy",
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
        name: "Vikram Singh",
        role: "Market Analyst",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 6,
      title: "Sustainable Power Solutions in Modern Manufacturing",
      excerpt: "How Webber Electro Corp is revolutionizing industrial power management with cutting-edge sustainable technologies and smart grid integration...",
      category: "ELECTRIC",
      date: "15 Jul 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      author: {
        name: "Kavya Iyer",
        role: "Sustainability Officer",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 7,
      title: "Advanced Lithium-Ion Cell Technologies and Safety Protocols",
      excerpt: "Exploring the latest innovations in lithium-ion cell chemistry, manufacturing processes, and comprehensive safety measures for high-performance applications...",
      category: "ELECTRIC",
      date: "10 Jul 2024",
      readTime: "9 min read",
      image: "/bg/bg1.png",
      author: {
        name: "Dr. Anil Gupta",
        role: "Battery Technology Specialist",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 8,
      title: "Global EV Adoption Rates: A Continental Comparison",
      excerpt: "Analyzing the varying speeds of electric vehicle adoption across different continents, exploring policy impacts, infrastructure development, and consumer preferences...",
      category: "EV MARKET",
      date: "25 Jun 2024",
      readTime: "10 min read",
      image: "/bg/bg2.png",
      author: {
        name: "Sanya Joshi",
        role: "Global Market Research Lead",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 9,
      title: "Smart Grid Integration for Electric Vehicle Charging Networks",
      excerpt: "How intelligent grid systems are optimizing EV charging infrastructure, reducing costs, and improving energy distribution efficiency across urban environments...",
      category: "ELECTRIC",
      date: "18 Jun 2024",
      readTime: "7 min read",
      image: "/bg/bg5.png",
      author: {
        name: "Rohit Agarwal",
        role: "Smart Grid Engineer",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 10,
      title: "Commercial Fleet Electrification: ROI Analysis and Best Practices",
      excerpt: "A comprehensive study on the return on investment for commercial fleet electrification, including implementation strategies and long-term cost benefits...",
      category: "EV MARKET",
      date: "5 Jun 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      author: {
        name: "Deepika Nair",
        role: "Fleet Analyst",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 11,
      title: "Power Electronics Innovations for Next-Gen EVs",
      excerpt: "Breakthrough developments in power electronics that are revolutionizing electric vehicle performance, efficiency, and charging capabilities...",
      category: "ELECTRIC",
      date: "22 May 2024",
      readTime: "8 min read",
      image: "/bg/bg7.png",
      author: {
        name: "Dr. Neha Verma",
        role: "Power Electronics Engineer",
        avatar: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 12,
      title: "Consumer Behavior Trends in EV Market 2024",
      excerpt: "Understanding changing consumer preferences, purchase drivers, and barriers to EV adoption through comprehensive market research and surveys...",
      category: "EV MARKET",
      date: "8 May 2024",
      readTime: "6 min read",
      image: "/bg/bg2.png",
      author: {
        name: "Suresh Bansal",
        role: "Consumer Research Director",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    }
  ];

  // Filter and search functionality
  const filteredAndSearchedPosts = useMemo(() => {
    let filtered = activeCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase().replace(' ', ''));

    if (searchQuery.trim()) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Reset visible posts when filter or search changes
  React.useEffect(() => {
    setVisiblePosts(6);
  }, [activeCategory, searchQuery]);

  const postsToShow = filteredAndSearchedPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredAndSearchedPosts.length;

  const featuredPost = postsToShow[0];
  const spotlightPosts = postsToShow.slice(1, 3);
  const regularPosts = postsToShow.slice(3);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

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
            
            <h2 className={`font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:via-[#06b6d4] group-hover:to-[#10b981] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Search Results Info */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-gray-600 text-center">
            Found {filteredAndSearchedPosts.length} article{filteredAndSearchedPosts.length !== 1 ? 's' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </section>
      )}

      {/* Featured Article */}
      {activeCategory === 'All' && !searchQuery && featuredPost && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <PostCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Spotlight Section */}
      {activeCategory === 'All' && !searchQuery && spotlightPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              In the <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">spotlight</span>
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
        {((activeCategory === 'All' && !searchQuery && regularPosts.length > 0) || 
          (activeCategory !== 'All' && postsToShow.length > 0) || 
          (searchQuery && postsToShow.length > 0)) && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {searchQuery ? 'Search Results' :
               activeCategory === 'All' ? 'Latest Articles' : 
               `${activeCategory} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === 'All' && !searchQuery ? regularPosts : 
                (activeCategory !== 'All' || searchQuery) ? postsToShow : []
              ).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {postsToShow.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No articles found {searchQuery && `for "${searchQuery}"`} 
              {activeCategory !== 'All' && ` in ${activeCategory}`}.
            </p>
            {(searchQuery || activeCategory !== 'All') && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:bg-gradient-to-l font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </section>

      {/* Load More Button */}
      {hasMorePosts && (
        <section className="max-w-7xl mx-auto px-6 pb-16 text-center">
          <button 
            onClick={loadMorePosts}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors duration-300 font-medium"
          >
            Load more ({filteredAndSearchedPosts.length - visiblePosts} remaining)
          </button>
        </section>
      )}
    </div>
  );
};

export default Blog;