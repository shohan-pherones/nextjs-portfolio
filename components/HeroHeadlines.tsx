"use client";

import { motion } from "framer-motion";

const HeroHeadlines = () => {
  return (
    <div className="absolute w-full h-full -z-10 text-8xl font-semibold uppercase flex flex-col justify-center">
      {/* LINE ONE */}
      <div className="flex justify-between overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Md. Shohanur
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
        >
          Rahman
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="border-dark/50"
      />
      {/* LINE TWO */}
      <div className="flex justify-center mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
        >
          Creative
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.3 }}
        className="border-dark/50"
      />
      {/* LINE THREE */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
        >
          Full-Stack
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
        >
          Developer
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.6 }}
        className="border-dark/50"
      />
      {/* LINE FOUR */}
      <div className="flex justify-between mt-7 overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
        >
          Based in
        </motion.h2>
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
        >
          Bangladesh
        </motion.h2>
      </div>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 2, delay: 0.9 }}
        className="border-dark/50"
      />
    </div>
  );
};

export default HeroHeadlines;
