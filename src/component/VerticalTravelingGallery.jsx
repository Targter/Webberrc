"use client";
import React, { useEffect, useState } from "react";

const VerticalSyncGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Column 1 - Electronics/Hardware workspace images
  const column1Images = [
    "media/m1.jpg",
    "media/m2.jpg",
    "media/m3.jpg",
    "media/m1.jpg",
    "media/m2.jpg",
    "media/m3.jpg",
  ];

  // Column 2 - Development/Coding workspace images
  const column2Images = [
    "media/m4.jpg",
    "media/m5.jpg",
    "media/m3.jpg",
    "media/m1.jpg",
    "media/m6.jpg",
    "media/m4.jpg",
  ];

  // Column 3 - Team collaboration images
  const column3Images = [
    "media/m6.jpg",
    "media/m2.jpg",
    "media/m4.jpg",
    "media/m6.jpg",
    "media/m2.jpg",
    "media/m4.jpg",
  ];

  const ImageColumn = ({ images, direction = "up", delay = "0s" }) => {
    const duplicatedImages = [...images, ...images, ...images, ...images];

    return (
      <div className="flex-1 overflow-hidden relative h-full group-column">
        <div
          className="flex flex-col gap-3 column-animation"
          style={{
            animationDelay: delay,
            animationDirection: direction === "down" ? "reverse" : "normal",
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex-shrink-0"
              style={{
                height: `${220 + (index % 3) * 15}px`,
                minHeight: `${220 + (index % 3) * 15}px`,
              }}
            >
              <img
                src={src}
                alt={`Workspace ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Enhanced Header Section */}
      <div className="pt-29 pb-12 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <div className="text-6xl md:text-7xl font-black">
            <span className="bg-gradient-to-r from-[#65af32] via-[#4ecf56] to-[#3dd07a] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              MEDIA
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Visual Stories That Inspire Innovation
          </h2>
          {/* <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our dynamic workspace where creativity meets technology. From collaborative brainstorming sessions to cutting-edge development environments, witness the passion and innovation that drives our team forward.
          </p> */}
          {/* <div className="flex justify-center items-center space-x-2 text-sm text-gray-500 mt-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="font-medium">Behind the Scenes</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div> */}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Three Column Image Grid */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            <div
              className={`flex gap-4 h-full transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Column 1 - Moving Up */}
              <ImageColumn images={column1Images} direction="up" delay="0s" />

              {/* Column 2 - Moving Down */}
              <ImageColumn images={column2Images} direction="down" delay="1s" />

              {/* Column 3 - Moving Up */}
              <ImageColumn images={column3Images} direction="up" delay="2s" />
            </div>

            {/* Gradient Overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50/80 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* Right Side - Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fueled by <span className="text-blue-500">120+</span> Creative
                Minds:
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Crafting Innovation Beyond Boundaries
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Our diverse team brings together expertise from various fields
                to create a culture of continuous learning and innovation.
              </p>

              <div className="flex gap-4">
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .column-animation {
          animation: scroll 40s linear infinite;
          transition: animation-duration 0.3s ease-out;
        }

        .group-column:hover .column-animation {
          animation-duration: 80s;
        }

        @media (max-width: 1024px) {
          .column-animation {
            animation-duration: 35s;
          }
          .group-column:hover .column-animation {
            animation-duration: 70s;
          }
        }

        @media (max-width: 768px) {
          .column-animation {
            animation-duration: 30s;
          }
          .group-column:hover .column-animation {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default VerticalSyncGrid;