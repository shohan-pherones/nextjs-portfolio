import { data } from "@/data/hero";
import HeroImageItem from "./HeroImageItem";
import HeroHeadlines from "./HeroHeadlines";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-screen">
      <div className="grid grid-cols-7 grid-rows-5 w-full h-full relative">
        {/* BLOCKS */}
        {data.map((image: string, i: number) => (
          <HeroImageItem key={i + image} image={image} />
        ))}
        {/* HEADLINES */}
        <HeroHeadlines />
      </div>
    </section>
  );
};

export default Hero;
