"use client"
import React from "react";
import FlipLink from "@/components/ui/text-effect-flipper";
import { useState } from "react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex items-start justify-center px-4 pt-32">
      <div className="text-center text-gray-900 top-0">
        <div className="flex flex-col items-center space-y-2">
          {/* First line with two elements */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-xl md:text-2xl lg:text-4xl">
            <FlipLink href="#context">Better Chip.</FlipLink>
            <FlipLink href="#agent">Better Power.</FlipLink>
          </div>

          {/* Second line with one element */}
          <div className="text-xl md:text-2xl lg:text-4xl">
            <FlipLink href="#code">Better Ride</FlipLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
