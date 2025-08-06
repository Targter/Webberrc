import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import  TrustedPartnersSection  from "../component/patners";
import { GlowingEffectDemoSecond } from "@/component/rd";
import {ManufacturingShowcase} from "../component/advance"
import  ContactMap from "@/component/contactmap";
import { Achieve } from "@/component/achieve";
import VideoComponent from "@/component/VideoComponent";

export default function Home() {
  return (
    <div>
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
      
     
      <Products />
      <VideoComponent />

      <TrustedPartnersSection />
      <GlowingEffectDemoSecond />
      <ManufacturingShowcase />
      <Achieve />
      <ContactMap />
    </div>
  );
}
