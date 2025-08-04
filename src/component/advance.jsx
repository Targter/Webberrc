"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"

// Default electric component images with professional light theme
const defaultImages = {
  component1: "data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f0fdf4'/%3E%3Cstop offset='100%25' stop-color='%23ecfdf5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg1)'/%3E%3Ccircle cx='400' cy='230' r='50' fill='%23059669' stroke='%23047857' stroke-width='3'/%3E%3Crect x='350' y='220' width='100' height='20' fill='%23065f46' rx='10'/%3E%3Ctext x='50%25' y='40%25' font-size='20' font-family='system-ui' font-weight='600' text-anchor='middle' fill='%23065f46'%3EResistor%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='16' font-family='system-ui' text-anchor='middle' fill='%23047857'%3E1kΩ ±5%25%3C/text%3E%3C/svg%3E",
  component2: "data:image/svg+xml,%3Csvg width='800' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23eff6ff'/%3E%3Cstop offset='100%25' stop-color='%23dbeafe'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg2)'/%3E%3Crect x='320' y='180' width='160' height='140' fill='%232563eb' stroke='%231d4ed8' stroke-width='3' rx='12'/%3E%3Crect x='330' y='240' width='140' height='20' fill='%231e40af' rx='10'/%3E%3Ctext x='50%25' y='40%25' font-size='20' font-family='system-ui' font-weight='600' text-anchor='middle' fill='%231e40af'%3ECapacitor%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='16' font-family='system-ui' text-anchor='middle' fill='%232563eb'%3E100µF 25V%3C/text%3E%3C/svg%3E",
  alt: "Electronic Component",
}

// Electric components data
const electricComponents = [
  {
    id: 1,
    name: "ADVANCED FUNCTIONALITY",
    value: "1kΩ ±5%",
    description: "A precision carbon film resistor designed for stable performance in electronic circuits. Features excellent temperature stability and low noise characteristics, making it ideal for precision applications and signal processing circuits.",
    specifications: {
      "Resistance": "1,000 ",
      "Tolerance": "±5%",
      "Power Rating": "0.25W",
      "Temperature Coefficient": "±100 ppm/°C",
      "Operating Temperature": "-55°C to +155°C",
      "Body Size": "3.2mm × 1.6mm"
    },
    applications: [
      "Current limiting circuits",
      "Voltage divider networks",
      "Pull-up/Pull-down resistors",
      "LED current control",
      "Signal conditioning",
      "Bias networks"
    ]
  },
  {
    id: 2,
    name: "Electrolytic Capacitor",
    value: "100µF 25V",
    description: "A high-quality aluminum electrolytic capacitor with low ESR and extended life characteristics. Designed for power supply filtering, coupling applications, and energy storage in electronic systems requiring reliable performance.",
    specifications: {
      "Capacitance": "100 µF",
      "Voltage Rating": "25V DC",
      "Tolerance": "±20%",
      "Type": "Aluminum Electrolytic",
      "ESR": "< 2.0Ω @ 100kHz",
      "Operating Temperature": "-40°C to +85°C"
    },
    applications: [
      "Power supply filtering",
      "DC blocking and coupling",
      "Timing circuit applications",
      "Energy storage systems",
      "Motor start circuits",
      "Audio signal processing"
    ]
  }
]

export function SkiperCard({
  image = defaultImages,
  components = electricComponents,
  title,
  description,
  bgClass,
  ...props
}) {
  const [currentComponent, setCurrentComponent] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()
  
  // Merge provided images with defaults
  const imageConfig = { ...defaultImages, ...image }
  const currentData = components[currentComponent]

  const nextComponent = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentComponent((prev) => (prev + 1) % components.length);
      setIsTransitioning(false);
    }, 75); // Faster transition - half of 150ms
  }

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="animated-cards relative w-[85%] max-w-7xl mx-auto rounded-[20px] shadow-2xl cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={nextComponent}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`
        }
      }>
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 shadow-xl ",
          bgClass
        )}>
        <div className="px-8 lg:px-10 py-6 lg:py-10 min-h-[400px] w-full">
          {mounted ? (
            <div className="relative h-full">
              {/* Main content area */}
              <div 
                className={cn(
                  "grid lg:grid-cols-5 gap-8 lg:gap-12 h-full items-center transition-opacity duration-150",
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                )}
              >
                
                {/* Left side - Component Information (3/5) */}
                <div className="lg:col-span-3 flex flex-col justify-center space-y-4 lg:space-y-6">
                  {/* Component header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-xs font-semibold rounded-full border border-emerald-200/50 shadow-sm">
                        {currentComponent + 1} of {components.length}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 leading-tight">
                      {currentData.name}
                    </h2>
                    
                    <div className="text-lg lg:text-xl font-semibold text-blue-600 bg-blue-50 inline-block px-3 py-1.5 rounded-lg border border-blue-200/50">
                      {currentData.value}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <p className="text-sm lg:text-base leading-6 text-slate-600 font-medium">
                      <Balancer>{currentData.description}</Balancer>  
                    </p>
                  </div>

                  {/* Specifications */}
                  {/* <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-1 h-5 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {Object.entries(currentData.specifications).slice(0, 6).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-3 border border-slate-200/60 shadow-sm">
                          <div className="text-xs font-medium text-slate-500 mb-1">{key}</div>
                          <div className="text-sm text-slate-800 font-semibold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div> */}

                
                </div>

                {/* Right side - Component Image (2/5) */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="relative w-[350px] h-[400px] lg:h-[520px] overflow-hidden rounded-2xl border-2 border-slate-200/60 bg-gradient-to-br from-white to-slate-50 shadow-lg">
                    {/* Component Images */}
                    {components.map((component, index) => (
                      <Image
                        key={component.id}
                        alt={`${component.name} - ${imageConfig.alt}`}
                        className={cn(
                          "absolute inset-0 w-full h-full object-contain transition-all duration-500 p-6",
                          currentComponent === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        )}
                        src={index === 0 ? imageConfig.component1 : imageConfig.component2}
                        width={800}
                        height={500}
                      />
                    ))}
                    
                  
                  </div>
                </div>
              </div>

            

         
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isSmall = window.matchMedia("(max-width: 768px)").matches
    const isMobile = Boolean(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(userAgent)
    )

    const isDev = process.env.NODE_ENV !== "production"
    if (isDev) setIsMobile(isSmall || isMobile)

    setIsMobile(isSmall && isMobile)
  }, [])

  return isMobile
}

/* 
Usage Example:

<SkiperCard 
  title="Electronic Components"
  description="Professional component showcase"
  bgClass="bg-gradient-to-br from-white via-emerald-50 to-blue-50"
  components={[
    {
      id: 1,
      name: "Your Component",
      value: "Specifications",
      description: "Professional description...",
      specifications: { ... },
      applications: [ ... ]
    }
  ]}
  image={{
    component1: "/your-component1.png",
    component2: "/your-component2.png"
  }}
/>
*/