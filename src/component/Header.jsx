"use client";
import React, { useState } from "react";
import FlipLink from "@/components/ui/text-effect-flipper";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex items-center justify-center px-4 py-8 pb-0 h-[120px] md:h-[160px] lg:h-[180px] mt-32 max-w-2xl mx-auto ">
      <div className="flex flex-col items-center space-y-3">
        {/* First line with two links */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 ">
          <FlipLink href="#context">BETTER CHIP.</FlipLink>
          <FlipLink href="#agent">BETTER POWER.</FlipLink>
        </div>

        {/* Second line with one link */}
        <div className="">
          <FlipLink href="#code">BETTER RIDE.</FlipLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
