"use client";
import React, { useEffect, useState } from "react";

const VerticalSyncGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Column 1 - Electronics/Hardware workspace images
  const column1Images = [
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=350&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=320&fit=crop",
    "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=300&fit=crop",
    "/rd/thermal.png",
  ];

  // Column 2 - Development/Coding workspace images
  const column2Images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1517077304055-6e89bebf9e2f?w=400&h=340&fit=crop",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=310&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=320&fit=crop",
  ];

  // Column 3 - Team collaboration images
  const column3Images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=320&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=290&fit=crop",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=310&fit=crop",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=280&fit=crop",
    "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=400&h=330&fit=crop",
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
      <div className="max-w-7xl mx-auto px-4 py-16 pt-24">
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
