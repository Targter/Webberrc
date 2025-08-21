"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrustedPartnersSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const observerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: "LiveGaurd",
      image: "https://webberec.com/wp-content/uploads/2024/02/Livguard.png",
    },
    {
      id: 2,
      name: "General-Aeronautics",
      image:
        "https://webberec.com/wp-content/uploads/2024/02/General-Aeronautics-1.png",
    },
    {
      id: 3,
      name: "Mayurii",
      image: "https://webberec.com/wp-content/uploads/2024/02/Mayurii.png",
    },
    {
      id: 4,
      name: "Texas-Instrument",
      image:
        "https://webberec.com/wp-content/uploads/2024/02/Texas-Instrument.png",
    },
    {
      id: 5,
      name: "iCreate",
      image: "https://webberec.com/wp-content/uploads/2024/02/iCreate-1.png",
    },
    {
      id: 6,
      name: "Renon",
      image: "https://webberec.com/wp-content/uploads/2024/02/Renon.png",
    },
  ];

  // Calculate card width including gap (240px card + 24px gap)
  const cardWidth = 240 + 24;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.dataset.header === "true") {
            setHeaderVisible(entry.isIntersecting);
          } else {
            const index = parseInt(entry.target.dataset.index);
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-30px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-index], [data-header]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Update scroll button states
  const updateScrollButtons = () => {
    if (typeof window !== "undefined" && scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Handle scroll events
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check

      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => updateScrollButtons();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = cardWidth;
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = cardWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-8 lg:py-6 pt-0 lg:pt-0 bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="w-full text-center mb-8 lg:mb-8" data-header="true">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-6xl mx-auto text-center py-16 pb-0 px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-black">OUR</span>{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent drop-shadow-sm">
                TRUSTED
              </span>{" "}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#10b981] bg-clip-text text-transparent drop-shadow-sm shine">
                PARTNERS
              </span>{" "}
            </h1>

            <style jsx>{`
              .shine {
                position: relative;
                overflow: hidden;
              }

              .shine::before {
                content: "";
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                  90deg,
                  transparent,
                  rgba(255, 255, 255, 0.4),
                  transparent
                );
                animation: shine 3s infinite;
              }

              @keyframes shine {
                0% {
                  left: -100%;
                }
                100% {
                  left: 100%;
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Partners Scroll Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Scrollable Cards Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-6 px-6 min-w-max">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  data-index={index}
                  className={`flex-shrink-0 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-700 ease-out transform ${
                    visibleItems.has(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    transitionDelay: visibleItems.has(index)
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                >
                  {/* Logo Container - Fixed Size */}
                  <div className="w-full h-40 p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-750 rounded-t-lg">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6 flex-col items-center">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center mb-6 gap-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                canScrollLeft
                  ? "border-blue-400 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110 cursor-pointer"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                canScrollRight
                  ? "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md hover:scale-110 cursor-pointer"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400/50"></div>
            <span>Use arrows or scroll to explore</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-800 hover:shadow-md

export default TrustedPartnersSection;
