import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import { TrustedPartnersScroll } from "../components/ui/text-scroll";
import { GlowingEffectDemoSecond } from "@/component/rd";
import {SkiperCard} from "../component/advance"
import  ContactMap from "@/component/contactmap";
import { Achieve } from "@/component/achieve";

export default function Home() {
  return (
    <div className=" max-w-6xl mx-auto">
      {/*
       */}
      {/* <div className="absolute inset-0 -z-1 pointer-events-none overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(
                circle at top right,
                rgba(240, 248, 255, 0.4) 0%, 
                rgba(135, 206, 250, 0.3) 20%, 
                rgba(144, 238, 144, 0.2) 40%,
                transparent 70%
              )
            `,
            transform: "rotate(-45deg)",
            transformOrigin: "top right",
          }}
        />
      </div> */}

      <Home2 />
      <div className="w-full max-h-[500px] bg-black flex items-center justify-center mt-18">
        <video
          className="w-full h-full rounded-2xl object-cover"
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
      <SkiperCard />
      <Achieve />
      <ContactMap />
    </div>
  );
}
