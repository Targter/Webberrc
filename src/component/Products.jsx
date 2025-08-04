import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect"; // Adjust import path as needed

const Products = () => {
  const products = [
    {
      title: "Premium Chip Series 1",
      description: "Handcrafted Italian leather briefcase with premium hardware. Perfect for the modern professional who values both style and functionality in their daily workflow.",
      image: "/chip.png",
      link: "/chip.png",
      price: "$299",
      specifications: ["Premium Materials", "Handcrafted Design", "Professional Grade"]
    },
    {
      title: "Advanced Chip Series 2", 
      description: "Single-origin coffee beans sourced from sustainable farms. Each blend tells a story of craftsmanship and dedication to quality that you can taste in every sip.",
      image: "/chip.png",
      link: "/products/coffee-collection",
      price: "$149",
      specifications: ["Sustainable Source", "Premium Quality", "Artisan Crafted"]
    },
    {
      title: "Elite Chip Series 3",
      description: "Clean, functional workspace essentials designed for productivity. Every piece carefully selected for form and function to enhance your work environment.",
      image: "/chip.png", 
      link: "/products/desk-setup",
      price: "$199",
      specifications: ["Functional Design", "Productivity Focus", "Premium Build"]
    },
    {
      title: "Luxury Chip Series 4",
      description: "Curated selection of aged spirits from renowned distilleries. Each bottle represents years of patient craftsmanship and dedication to excellence.",
      image: "/chip.png",
      link: "/products/whiskey-collection", 
      price: "$449",
      specifications: ["Aged Premium", "Renowned Quality", "Collector's Item"]
    },
  ];

  return (
    <div className="w-full ">
      {/* Enhanced Header Section */}
      <div className="text-center pt-24 pb-5 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our carefully selected collection of premium products, each
            chosen for its exceptional quality, timeless design, and
            uncompromising craftsmanship that defines excellence.
          </p>
          
       
        </div>
      </div>

      {/* Products Grid with enhanced styling */}
      <HoverEffect items={products} className="pb-16" />
    </div>
  );
};

export default Products;
