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

      <div className="text-center max-w-5xl mx-auto px-4">
        <div className="space-y-0">
          <div className="text-3xl md:text-5xl font-black">
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
              VISUAL WALKTHROUGH
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="text-l md:text-xl font-semibold text-gray-400 mt-2">
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
                Powered by{" "}
                <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent">
                  150+
                </span>{" "}
                Visionaries:
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                Transforming Ideas Into Digital Masterpieces
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Our multidisciplinary team of designers, developers,
                strategists, and innovators collaborate seamlessly to bring
                extraordinary concepts to life through cutting-edge technology
                and creative excellence.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-px bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981]"></div>
                  <span className="text-gray-700 font-medium">
                    Award-winning design solutions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-px bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981]"></div>
                  <span className="text-gray-700 font-medium">
                    Next-generation development practices
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-px bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981]"></div>
                  <span className="text-gray-700 font-medium">
                    Strategic innovation consulting
                  </span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] text-white rounded-xl hover:from-[#2563eb] hover:via-[#0891b2] hover:to-[#059669] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Explore Our Work
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium">
                  Get In Touch
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
