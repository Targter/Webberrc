import React from 'react';
import { HoverEffect } from '../components/ui/card-hover-effect'; // Adjust import path as needed

const Products = () => {
  const products = [
    {
      title: "chip1",
      description: "Handcrafted Italian leather briefcase with premium hardware. Perfect for the modern professional who values both style and functionality.",
      image: "",
      link: "/products/leather-briefcase"
    },
    {
      title: "chip2",
      description: "Single-origin coffee beans sourced from sustainable farms. Each blend tells a story of craftsmanship and dedication to quality.",
      image: "bg/blue.jpg",
      link: "/products/coffee-collection"
    },
    {
      title: "chip3",
      description: "Clean, functional workspace essentials designed for productivity. Every piece carefully selected for form and function.",
      image: "bg/blue.jpg",
      link: "/products/desk-setup"
    },
    {
      title: "chip4",
      description: "Curated selection of aged spirits from renowned distilleries. Each bottle represents years of patient craftsmanship.",
      image: "bg/blue.jpg",
      link: "/products/whiskey-collection"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r  to-stone-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  bg-clip-text text-slate-900">
              Our Products
            </h1>
            <p className="text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully selected collection of premium products, each chosen for its exceptional quality, 
              timeless design, and uncompromising craftsmanship.
            </p>
            {/* <div className="mt-8 h-1 w-24 bg-gradient-to-r from-amber-600 to-yellow-500 mx-auto rounded-full"></div> */}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <HoverEffect 
          items={products}
          className="max-w-6xl mx-auto"
        />
      </div>

      {/* Footer CTA */}
     
    </div>
  );
};

export default Products;