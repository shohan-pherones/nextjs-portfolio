import { data } from "@/data/hero";
import HeroImageItem from "./HeroImageItem";
import HeroHeadlines from "./HeroHeadlines";

const Hero = () => {
  return (
    <section className="sm:h-screen bg-alt rounded-tr-[5rem] rounded-bl-[5rem]">
      <div className="wrapper section-padding w-full h-full">
        <div className="grid grid-cols-4 md:grid-cols-7 grid-rows-[9] md:grid-rows-5 w-full h-full relative z-[1]">
          {/* BLOCKS */}
          {data.map((image: string, i: number) => (
            <HeroImageItem key={i} image={image} />
          ))}
          {/* HEADLINES */}
          <HeroHeadlines />
        </div>
      </div>
    </section>
  );
};

export default Hero;
