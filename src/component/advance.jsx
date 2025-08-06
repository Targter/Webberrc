"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import FlipLink from "@/components/ui/text-effect-flipper";
import { cn } from "@/lib/utils";

const manufacturingSteps = [
  {
    id: 1,
    name: "Lithography",
    step: "Step 1",
    description:
      "Lithography transfers the IC design onto the wafer using light and photoresist.",
    image: "/manufacture/s1.png",
  },
  {
    id: 2,
    name: "Etching",
    step: "Step 2",
    description:
      "Etching removes layers to create the circuit pattern on the wafer surface.",
    image: "/manufacture/s2.png",
  },
  {
    id: 3,
    name: "Deposition",
    step: "Step 3",
    description:
      "Deposition adds conductive or insulating materials onto the wafer.",
    image: "/manufacture/s3.png",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function ManufacturingShowcase({
  components = manufacturingSteps,
  title = "How we manufacture",
  ...props
}) {
  const isMobile = useIsMobile();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const motionStyle = {
    "--x": useMotionTemplate`${mouseX}px`,
    "--y": useMotionTemplate`${mouseY}px`,
  };

  const mouseMove = ({ clientX, clientY, currentTarget }) => {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Background Image */}
      <Image
        src="/rd/greenchip.jpeg"
        alt="Green Chip"
        fill
        className="object-cover h-full w-full -z-10 filter contrast-80"
        priority
      />

      <div className="mx-auto w-screen px-6 lg:flex lg:px-8">
        {/* Left: Heading */}
        <div className="  max-w-2xl  lg:mx-0 lg:flex-auto mb-12 lg:mb-0">
          <div className=" items-center py-8 space-y-3">
            <FlipLink href="">HOW WE</FlipLink>

            {/* Second line with one link */}
            <div className="">
              <FlipLink href="#code">MANUFACTURE</FlipLink>
            </div>
          </div>
        </div>

        {/* Right: Steps */}
        <div className="w-full lg:max-w-4xl lg:ml-10">
          <ul
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              isMobile && "grid-cols-1"
            )}
          >
            {components.map((step) => (
              <motion.li
                key={step.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow transition-shadow hover:shadow-lg"
                onMouseMove={isMobile ? undefined : mouseMove}
                style={isMobile ? undefined : motionStyle}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {step.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{step.step}</p>
                <p className="mt-2 text-sm text-gray-700">{step.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
