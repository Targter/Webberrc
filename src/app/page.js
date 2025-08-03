import Home2 from "@/Pages/Home";

export default function Home() {
  return (
    <div className="max-w-5xl h-auto mx-auto">
      <Home2 />

      <div
        className="bg-black w-full min-h-[500px]"
        // style={{ backgroundImage: "" }}
        style="background-image: url('path/to/image.jpg'); background-size: cover; background-position: center;"
      ></div>
    </div>
  );
}
