import Home2 from "@/Pages/Home";

export default function Home() {
  return (
    <div className="max-w-5xl h-auto mx-auto">
      <Home2 />

<<<<<<< HEAD
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
=======
     <div
  className="bg-black w-full min-h-[500px]"
  style={{
    backgroundImage: "url('path/to/image.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>

>>>>>>> 1b122dc7dce7cc8a0836e15868de6fd7d2222337
    </div>
  );
}
