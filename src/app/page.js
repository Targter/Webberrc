import Home2 from "@/Pages/Home";
import Products from "@/component/Products";
import TrustedPartnersSection from "../component/patners";
import { GlowingEffectDemoSecond } from "@/component/rd";
import { ManufacturingShowcase } from "../component/advance";
import ContactMap from "@/component/contactmap";
import { Achieve } from "@/component/achieve";
import VideoComponent from "@/component/VideoComponent";
import Ab from "@/component/Ab";

export default function Home() {
  return (
    <>
      <Home2 />
      <Products />
      {/* <Ab /> */}
      <Stickyscrolldemo />
      <GlowingEffectDemoSecond />
      <Achieve />
      <VideoComponent />
      <TrustedPartnersSection />
      <ManufacturingShowcase />
      <ContactMap />
    </>
  );
}
