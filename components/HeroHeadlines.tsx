"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";

const HeroHeadlines = () => {
  return (
    <div className="absolute w-full h-full -z-10 text-8xl font-semibold uppercase flex flex-col justify-center">
      {/* LINE ONE */}
      <div className="flex justify-between overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition()}
        >
          Md. Shohanur
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(0.2)}
        >
          Rahman
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(0, 1)}
        className="border-dark/50"
      />
      {/* LINE TWO */}
      <div className="flex justify-center mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(0.4)}
        >
          Creative
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(0.2, 1)}
        className="border-dark/50"
      />
      {/* LINE THREE */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(0.6)}
        >
          Full-Stack
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(0.8)}
        >
          Developer
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(0.4, 1)}
        className="border-dark/50"
      />
      {/* LINE FOUR */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1)}
        >
          Based in
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition(1.2)}
        >
          Bangladesh
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={getTransition(0.6, 1)}
        className="border-dark/50"
      />
    </div>
  );
};

export default HeroHeadlines;
