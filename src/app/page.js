import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import TrustedPartnersSection from "../component/patners";
import { GlowingEffectDemoSecond } from "@/component/rd";
import { ManufacturingShowcase } from "../component/advance";
import ContactMap from "@/component/contactmap";
import { Achieve } from "@/component/achieve";
import VideoComponent from "@/component/VideoComponent";
import Ab from "@/component/Ab";
import StickyScrollDemo from "@/component/scrollrd";
import VerticalTravelingGallery from "@/component/VerticalTravelingGallery";

export default function Home() {
  return (
    <>
      <Home2 />
      <Products />
      {/* <div className="relative ">

<Ab />
  </div> */}
      <StickyScrollDemo />

      {/* <GlowingEffectDemoSecond /> */}
      <TrustedPartnersSection />
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
      <VerticalTravelingGallery />
      {/* <Achieve /> */}
      {/* <VideoComponent /> */}
      {/* <ManufacturingShowcase /> */}
      <ContactMap />
    </>
  );
}
