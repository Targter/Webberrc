import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import { TrustedPartnersScroll } from "../components/ui/text-scroll";
import {GlowingEffectDemoSecond} from "@/component/rd";

export default function Home() {
  return (
    <div className="max-w-7xl h-auto mx-auto">
      <Home2 />
        <div className="w-full min-h-[500px] bg-black flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bgv1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Products />
      <TrustedPartnersScroll />
      <GlowingEffectDemoSecond />
      
    </div>
  );
}
