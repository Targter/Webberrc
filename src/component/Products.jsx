import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect"; // Adjust import path as needed

const Products = () => {
  const products = [
    {
      title: "chip1",
      description:
        "Handcrafted Italian leather briefcase with premium hardware. Perfect for the modern professional who values both style",

      image: "/chip.png",
      link: "/chip.png",
    },
    {
      title: "chip2",
      description:
        "Single-origin coffee beans sourced from sustainable farms. Each blend tells a story of craftsmanship and dedication to quality.",
      image: "/chip.png",
      link: "/products/coffee-collection",
    },
    {
      title: "chip3",
      description:
        "Clean, functional workspace essentials designed for productivity. Every piece carefully selected for form and function.",
      image: "/chip.png",
      link: "/products/desk-setup",
    },
    {
      title: "chip4",
      description:
        "Curated selection of aged spirits from renowned distilleries. Each bottle represents years of patient craftsmanship.",
      image: "/chip.png",
      link: "/products/whiskey-collection",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-11 ">
      {/* Header content */}
      <div className="text-center mt-21  ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-black ">
          Our Products
        </h1>
        <p className="text-xl text-black mx-auto  mt-5">
          Discover our carefully selected collection of premium products, each
          chosen for its exceptional quality, timeless design, and
          uncompromising craftsmanship.
        </p>
      </div>
      {/* Products Grid */}
      <div className="mx-auto">
        <HoverEffect items={products} className="mx-auto" />
      </div>
    </div>
  );
};

export default Products;
