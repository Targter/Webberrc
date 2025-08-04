"use client";
import Header from "@/component/Header";
import React from "react";

const Home2 = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 pb-11">
      <Header />
      <p className="text-center text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-11 mt-8 sm:mt-10 md:mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
        We design battery chips with precision and purpose — powering the future
        through quiet intelligence.
      </p>
      <button className="bg-blue-800/30 backdrop-blur-8xl shadow-2xl px-5 py-2 sm:px-6 sm:py-3 rounded-2xl text-black text-sm sm:text-base">
        Explore Products
      </button>
    </div>
  );
};

export default Home2;
