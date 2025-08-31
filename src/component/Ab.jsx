// import React from "react";

// const Ab = () => {
//   return (
//     <div className="bg-black min-h-screen w-full flex flex-col py-12 px-4">
//       <div className="max-w-5xl text-white text-center mb-12 mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
//           Industry Applications
//         </h2>
//         <p className="text-lg md:text-xl text-gray-300">
//           Maxwell's solutions are designed to power a wide range of applications
//         </p>
//       </div>

//       <div className="max-w-7xl w-full flex gap-11 mx-auto relative">
//         {/* Stats Section - Fixed in middle of screen */}
//         <div className="w-[300px] flex-shrink-0 h-[1200px] overflow-y-scroll relative">
//           <div className="sticky top-4 z-10">
//             <div className="flex flex-col gap-3 bg-red-600 p-6 rounded-lg">
//               <div className="text-center flex gap-3 items-center">
//                 <div className="text-xl md:text-2xl text-white">80,000+</div>
//                 {/* <div className="text-xs text-gray-100">2/3 wheelers</div> */}
//               </div>

//               <div className="w-full h-[2px] bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>

//               <div className="text-center gap-3 flex items-center">
//                 <div className="text-xl md:text-2xl text-white">12,000+</div>
//                 <div className="text-xs text-gray-100">stationary storage</div>
//               </div>

//               <div className="w-full h-[2px] bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>

//               <div className="text-center flex gap-3 items-center">
//                 <div className="text-xl md:text-2xl text-white">1000+</div>
//                 <div className="text-xs text-gray-100">4 wheelers</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Application Cards - Scrollable */}
//         <div className="flex-grow ml-[300px]">
//           <div className="gap-8 flex flex-col">
//             {/* Electric 2 & 3-wheelers Card */}
//             <div className="bg-gray-800 rounded-xl p-6 h-auto">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Electric 2 & 3-wheelers
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Smart battery management solutions for Scooters, Bikes,
//                 Motorcycles & Rickshaws, optimizing range, charging protocols &
//                 application nuances
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>

//             {/* Passenger and Commercial Vehicles Card */}
//             <div className="bg-gray-800 rounded-xl p-6">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Passenger and Commercial Vehicles
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 A smart BMS leveraging a distributed architecture to manage
//                 multiple smaller modules connected in a series-parallel fashion,
//                 essential to operate high-voltage packs
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>

//             {/* Stationary Storage Card */}
//             <div className="bg-gray-800 rounded-xl p-6 h-auto">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Stationary Storage
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Advanced battery management for grid-scale energy storage,
//                 residential and commercial backup power solutions with optimal
//                 efficiency and longevity
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>

//             {/* Industrial Applications Card */}
//             <div className="bg-gray-800 rounded-xl p-6">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Industrial Applications
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Robust battery management systems for heavy machinery, mining
//                 equipment, and industrial vehicles requiring high-performance
//                 power solutions
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>

//             {/* Additional card to demonstrate scrolling */}
//             <div className="bg-gray-800 rounded-xl p-6">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Marine Applications
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 Specialized battery solutions for electric boats and marine
//                 equipment with enhanced corrosion resistance and safety features
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>

//             {/* One more card for better scrolling demonstration */}
//             <div className="bg-gray-800 rounded-xl p-6">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Aerospace Applications
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 High-performance battery systems for drones, electric aircraft,
//                 and aerospace applications with extreme weight and safety
//                 requirements
//               </p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
//                 Learn more →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ab;

"use client";
import React from "react";
import Lottie from "lottie-react";

// Sample Lottie animation data (replace with actual JSON URLs or imports)
const lottieAnimations = [
  "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/6461c6a3f4af9a2a794794bb_Bicycle%20(Electric%202%20%26%203%20wheelers)%20100x100.json",
  "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/6461c6a37fd4d2c3261f487a_Car%20(Passenger%20and%20Commercial%20Vehicles)%20100x100.json",
  "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/6461c6a3600af0cbd019a865_Forklift%20(Industrial%20Applications)%20100x100.json",
  "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/6461c6a39a5f8f48f5372ae7_Battery%20(Battery%20Energy%20Storage)%20100x100.json",
];

// Card data (expanded to include additional items from Ab component)
const cardData = [
  {
    image:
      "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/649a6f9d6a71107f16b14bb9_2W_3W%20thumbnail-min.avif",
    title: "Electric 2 & 3-wheelers",
    description:
      "Smart battery management solutions for Scooters, Bikes, Motorcycles & Rickshaws, optimizing range, charging protocols & application nuances",
    link: "/applications/electric-two-three-wheelers",
    lottieIndex: 0,
  },
  {
    image:
      "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/649a6f9db5e389622bea7d32_Commercial%20Vehicle%20Hero-min-min.avif",
    title: "Passenger and Commercial Vehicles",
    description:
      "A smart BMS leveraging a distributed architecture to manage multiple smaller modules connected in a series-parallel fashion, essential to operate high-voltage packs",
    link: "/applications/passenger-and-commercial-vehicles",
    lottieIndex: 1,
  },
  {
    image:
      "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/649a6f9dd0a1ee8984073364_Industrial%20Hero%20Image-min-min.avif",
    title: "Industrial Applications",
    description:
      "Webber’s BMS is scalable and designed to manage complex industrial applications such as electric forklifts, excavators, mining equipment, robots, AGV's seamlessly.",
    link: "/applications/industrial-applications",
    lottieIndex: 2,
  },
  {
    image:
      "https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/649a6f9dd0a1ee898407334c_BESS%20thumbnail-min.avif",
    title: "BESS",
    description:
      "Solutions for systems consisting of multiple modules incorporating Slave BMS connected in series/parallel to form a rack, in turn managed by a Master BMS and connected in a series-parallel fashion to achieve higher voltage and capacity",
    link: "/applications/bess",
    lottieIndex: 3,
  },
  {
    image: "https://via.placeholder.com/400x300", // Placeholder; replace with actual image
    title: "Marine Applications",
    description:
      "Specialized battery solutions for electric boats and marine equipment with enhanced corrosion resistance and safety features",
    link: "/applications/marine",
    lottieIndex: 0, // Reuse first Lottie for demo; replace with actual
  },
  {
    image: "https://via.placeholder.com/400x300", // Placeholder; replace with actual image
    title: "Aerospace Applications",
    description:
      "High-performance battery systems for drones, electric aircraft, and aerospace applications with extreme weight and safety requirements",
    link: "/applications/aerospace",
    lottieIndex: 1, // Reuse second Lottie for demo; replace with actual
  },
];

export default function IndustryApplications() {
  return (
    <section className="bg-black py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="home-product-content">
          {/* Header Section */}
          <div className="mb-12">
            <div className="inline-block mb-4">
              <div className="inline-block bg-gray-800 text-white text-sm uppercase px-3 py-1 rounded">
                INDUSTRY APPLICATIONS
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Webber's solutions are designed to power a wide{" "}
              <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                range of applications
              </span>
            </h2>
          </div>

          {/* Flex Container */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sticky Column */}
            <div className="md:w-1/3">
              <div className="sticky top-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white">
                      <span className="counterup">80,000</span>+
                    </h2>
                    <p className="text-base text-gray-300">2/3 wheelers</p>
                  </div>
                  <div className="h-px bg-gray-700"></div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">
                      <span className="counterup">12,000</span>+
                    </h2>
                    <p className="text-base text-gray-300">
                      stationary storage
                    </p>
                  </div>
                  <div className="h-px bg-gray-700"></div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">
                      <span className="counterup">1000</span>+
                    </h2>
                    <p className="text-base text-gray-300">4 wheelers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Scrollable Cards */}
            <div className="md:w-2/3">
              <div className="flex flex-col gap-8">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6"
                  >
                    {/* Image and Lottie */}
                    <div className="relative w-full md:w-1/2 h-64">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                      <div className="absolute top-4 right-4 w-24 h-24">
                        <Lottie
                          animationData={null} // Replace with fetch or import of lottieAnimations[card.lottieIndex]
                          loop={true}
                          autoplay={false}
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-base text-gray-300">
                        {card.description}
                      </p>
                      <a
                        href={card.link}
                        className="relative inline-flex items-center gap-2 text-base font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        Learn more
                        <img
                          src="https://cdn.prod.website-files.com/644bbee16ccf1974b3fcb98b/6450fedc3afa33fc9bb85434_Group%20380.svg"
                          alt="Arrow"
                          className="w-4 h-4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
