"use client"
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/constants';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, hasAnimated]);

  return [setRef, isIntersecting];
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const categories = ['All', 'Electric', 'EV Market'];
  
  // Animation refs
  const [headerRef, headerInView] = useIntersectionObserver();
  const [categoriesRef, categoriesInView] = useIntersectionObserver();
  const [featuredRef, featuredInView] = useIntersectionObserver();
  const [spotlightRef, spotlightInView] = useIntersectionObserver();
  const [articlesRef, articlesInView] = useIntersectionObserver();

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
  useEffect(() => {
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

  const PostCard = ({ post, featured = false, spotlight = false, index = 0 }) => {
    const [cardRef, cardInView] = useIntersectionObserver();
    
    return (
      <article 
        ref={cardRef}
        className={`group cursor-pointer transform transition-all duration-700 ${
          cardInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        } ${
          featured ? 'col-span-full' :
          spotlight ? 'col-span-1' : 'col-span-1'
        }`}
        style={{ 
          transitionDelay: `${index * 150}ms`,
          animationDelay: `${index * 150}ms`
        }}
      >
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        ref={headerRef}
        className={`bg-white border-b border-gray-100 transform transition-all duration-1000 ${
          isLoaded && headerInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
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
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section 
        ref={categoriesRef}
        className={`max-w-7xl mx-auto px-6 py-8 transform transition-all duration-800 delay-200 ${
          categoriesInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <div
              key={category}
              className="transform transition-all duration-500"
              style={{ 
                transitionDelay: `${300 + (index * 100)}ms`,
                opacity: categoriesInView ? 1 : 0,
                transform: categoriesInView ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <CategoryButton
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Search Results Info */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-6 mb-8 transform transition-all duration-500 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <p className="text-gray-600 text-center">
            Found {filteredAndSearchedPosts.length} article{filteredAndSearchedPosts.length !== 1 ? 's' : ''} 
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </section>
      )}

      {/* Featured Article */}
      {activeCategory === 'All' && !searchQuery && featuredPost && (
        <section 
          ref={featuredRef}
          className={`max-w-7xl mx-auto px-6 mb-16 transform transition-all duration-1000 delay-400 ${
            featuredInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <PostCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Spotlight Section */}
      {activeCategory === 'All' && !searchQuery && spotlightPosts.length > 0 && (
        <section 
          ref={spotlightRef}
          className={`max-w-7xl mx-auto px-6 mb-16 transform transition-all duration-800 delay-600 ${
            spotlightInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
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
            {spotlightPosts.map((post, index) => (
              <PostCard key={post.id} post={post} spotlight={true} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section 
        ref={articlesRef}
        className={`max-w-7xl mx-auto px-6 mb-16 transform transition-all duration-800 delay-700 ${
          articlesInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
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
              ).map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </>
        )}

        {/* No Results Message */}
        {postsToShow.length === 0 && (
          <div className="text-center py-16 transform transition-all duration-500 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
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
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent hover:bg-gradient-to-l font-medium transition-all duration-300 hover:scale-105"
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
          <div className="transform transition-all duration-500 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
            <button 
              onClick={loadMorePosts}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-md"
            >
              Load more ({filteredAndSearchedPosts.length - visiblePosts} remaining)
            </button>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;