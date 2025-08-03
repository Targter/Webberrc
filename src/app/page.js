import Home2 from "@/Pages/Home";

export default function Home() {
  return (
    <div className="max-w-5xl h-auto mx-auto">
      <Home2 />

      <div className="bg-black w-full min-h-[500px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover z-0"
        >
          <source src="/bgv1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
