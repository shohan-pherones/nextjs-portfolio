"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";

const HeroHeadlines = () => {
  return (
    <div className="absolute w-full h-full z-[2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold uppercase flex flex-col justify-center">
      {/* LINE ONE */}
      <div className="flex justify-between overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1.4)}
        >
          Md. Shohanur <span className="block sm:hidden">Rahman</span>
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1.6)}
          className="hidden sm:block"
        >
          Rahman
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(1.2, 1.5)}
        className="border-dark/50"
      />
      {/* LINE TWO */}
      <div className="flex sm:justify-center mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1.8)}
        >
          Creative
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(1.4, 1.5)}
        className="border-dark/50"
      />
      {/* LINE THREE */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(2)}
        >
          Full-Stack <span className="block sm:hidden">Developer</span>
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(2.2)}
          className="hidden sm:block"
        >
          Developer
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(1.6, 1.5)}
        className="border-dark/50"
      />
      {/* LINE FOUR */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(2.4)}
        >
          Based in <span className="block sm:hidden">Bangladesh</span>
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(2.6)}
          className="hidden sm:block"
        >
          Bangladesh
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(1.8, 1.5)}
        className="border-dark/50"
      />
    </div>
  );
};

export default HeroHeadlines;
