"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 overflow-hidden">
      <motion.p
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={getTransition()}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={getTransition()}
        className="text-3xl md:text-4xl font-semibold"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
