import React from "react";
import TimelineStickyDemo from "@/component/newscrollrd";
import VerticalSyncGrid from "@/component/VerticalTravelingGallery";

const page = () => {
  return (
    <div>
      {/* <TimelineStickyDemo/> */}
      <div className="pt-29 pb-12 text-center max-w-5xl mx-auto px-4">
        <div className="space-y-6">
          <div className="text-6xl md:text-8xl font-black">
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              VISUAL WALKTHROUGH
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
              Unleashing the Power of Our Solutions
            </h3>
          </div>
          <div className="flex justify-center items-center space-x-3 text-sm text-gray-500 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span className="font-semibold px-4 py-2 bg-white rounded-full shadow-sm">
              Design • Develop • Deploy
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>
      </div>
      <VerticalSyncGrid />
    </div>
  );
};

export default page;
