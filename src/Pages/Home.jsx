import Header from "@/component/Header";
import React from "react";

const Home2 = () => {
  return (
    <div className="flex flex-col items-center pb-11">
      <Header />
      <p className=" text-center text-lg mb-11 md:mt-4 mt-11">
        We design battery chips with precision and purpose — powering the future
        through quiet intelligence.
      </p>
      <button className="bg-blue-800/30  backdrop-blur-8xl shadow-2xl px-6 p-3 rounded-2xl text-black">
        Button Products
      </button>
    </div>
  );
};

export default Home2;
