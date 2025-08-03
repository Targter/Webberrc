import Home2 from "@/Pages/Home";
import Products from "@/component/Products";

import { TrustedPartnersScroll } from "../components/ui/text-scroll"

export default function Home() {
  return (
    <div className="max-w-7xl h-auto mx-auto">
      <Home2 />

      <div className="w-full h-[800px] bg-slate-800 p-6 rounded-lg border border-slate-600">
        <div className="relative w-full h-full rounded-md border border-slate-500 overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-md"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./bgchip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional overlay for content on top of video */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {/* Add any content you want to display over the video here */}
          </div>
        </div>
      </div>
      <Products />
      <TrustedPartnersScroll />


    </div>
  );
}