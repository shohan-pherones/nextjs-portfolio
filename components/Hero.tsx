import { data } from "@/data/hero";
import HeroImageItem from "./HeroImageItem";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-screen">
      <div className="grid grid-cols-7 grid-rows-5 w-full h-full relative">
        {/* BLOCKS */}
        {data.map((image: string, i: number) => (
          <HeroImageItem key={i + image} image={image} />
        ))}
        {/* HEADLINES */}
        <div className="absolute w-full h-full -z-10 text-8xl font-semibold uppercase flex flex-col justify-center">
          {/* LINE ONE */}
          <div className="flex justify-between">
            <h2>Md. Shohanur</h2>
            <h2>Rahman</h2>
          </div>
          <hr className="border-dark/50" />
          {/* LINE TWO */}
          <div className="flex justify-center mt-7">
            <h2>Creative</h2>
          </div>
          <hr className="border-dark/50" />
          {/* LINE THREE */}
          <div className="flex justify-between mt-7">
            <h2>Full-Stack</h2>
            <h2>Developer</h2>
          </div>
          <hr className="border-dark/50" />
          {/* LINE FOUR */}
          <div className="flex justify-between mt-7">
            <h2>Based in</h2>
            <h2>Bangladesh</h2>
          </div>
          <hr className="border-dark/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
