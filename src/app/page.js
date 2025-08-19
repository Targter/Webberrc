import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import TrustedPartnersSection from "../component/patners";
import { GlowingEffectDemoSecond } from "@/component/rd";
import { ManufacturingShowcase } from "../component/advance";
import ContactMap from "@/component/contactmap";
import { Achieve } from "@/component/achieve";
import VideoComponent from "@/component/VideoComponent";
import Ab from "@/component/Ab";
import StickyScrollDemo from "@/component/scrollrd"

export default function Home() {
  return (
    <div className="">
      <Home2 />
      <Products />
  {/* <div className="relative ">

  <Ab />
  </div> */}
  <StickyScrollDemo/>

      {/* <GlowingEffectDemoSecond /> */}
      <TrustedPartnersSection />
      <Achieve />
      {/* <VideoComponent /> */}
      {/* <ManufacturingShowcase /> */}
      <ContactMap />
    </div>
  );
}
