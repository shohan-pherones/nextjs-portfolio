"use client";

import { motion } from "framer-motion";
import { data } from "@/data/hero";
import { getTransition } from "@/utils/getTransition";
import HeroImageItem from "./HeroImageItem";
import HeroHeadlines from "./HeroHeadlines";

const Hero = () => {
  return (
    <section className="sm:h-screen relative">
      <div className="wrapper section-padding w-full h-full">
        <div className="grid grid-cols-4 md:grid-cols-7 grid-rows-[9] md:grid-rows-5 w-full h-full relative">
          {/* BLOCKS */}
          {data.map((image: string, i: number) => (
            <HeroImageItem key={i} image={image} />
          ))}
          {/* HEADLINES */}
          <HeroHeadlines />
        </div>
      </div>
      {/* BG */}
      <motion.div
        initial={{ height: 0, borderRadius: 0 }}
        whileInView={{ height: "100%", borderRadius: "0 3rem 0 3rem" }}
        transition={getTransition(0, 1.5)}
        className="absolute bg-alt top-0 left-0 right-0 bottom-0 w-full h-full z-[1] rounded-tr-[3rem] rounded-bl-[3rem]"
      ></motion.div>
    </section>
  );
};

export default Hero;
