"use client";
import React, { useState } from 'react';

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleVideoEnd = () => setIsPlaying(false);

  return (
    <div className="w-full py-12 md:py-20">
      <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden">
        {!isPlaying ? (
          <div
            className="relative w-full h-[350px] md:h-[500px] lg:h-[620px] cursor-pointer"
            onClick={handlePlay}
          >
            {/* BG Image from Upload */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("/bg/bg1.png")`,
              }}
            >
              {/* Gradient overlays (optional for blending) */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-white/30 rounded-full border-[6px] border-yellow-400 flex items-center justify-center backdrop-blur-md shadow-xl">
                <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2"></div>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent px-8 py-10 md:px-12 lg:px-20">
                <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
                  Standing on the<br />Shoulders of Giants
                </h2>
                <p className="text-white/90 text-lg md:text-xl">
                  Driving the next wave of innovation in electric Chip tech of India
                </p>
              </div>
            </div>
          </div>
        ) : (
          <video
            className="w-full h-[350px] md:h-[500px] lg:h-[620px] object-cover"
            controls
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src="/bgv1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
