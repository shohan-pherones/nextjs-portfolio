"use client";

import { motion } from "framer-motion";
import { data } from "@/data/skills";
import { BsDot } from "react-icons/bs";
import { getTransition } from "@/utils/getTransition";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section id="skills" className="wrapper section-padding">
      <SectionTitle title="Highlighted Skills" subtitle="Skills" />
      {/* SKILLS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-light">
        {/* FRONT-END */}
        <div className="overflow-hidden w-full h-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="p-10 rounded-xl bg-dark w-full h-full"
          >
            <h3 className="text-2xl font-semibold">Front-End</h3>
            <ul className="mt-3">
              {data.frontend.map((skill: string, i: number) => (
                <li key={i} className="flex items-center gap-1">
                  <span>
                    <BsDot />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* BACK-END */}
        <div className="overflow-hidden w-full h-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.1)}
            className="p-10 rounded-xl bg-dark w-full h-full"
          >
            <h3 className="text-2xl font-semibold">Back-End</h3>
            <ul className="mt-3">
              {data.backend.map((skill: string, i: number) => (
                <li key={i} className="flex items-center gap-1">
                  <span>
                    <BsDot />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* TOOLS */}
        <div className="overflow-hidden w-full h-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="p-10 rounded-xl bg-dark w-full h-full"
          >
            <h3 className="text-2xl font-semibold">Tools</h3>
            <ul className="mt-3">
              {data.tools.map((skill: string, i: number) => (
                <li key={i} className="flex items-center gap-1">
                  <span>
                    <BsDot />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* INTERPERSONAL */}
        <div className="overflow-hidden w-full h-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.3)}
            className="p-10 rounded-xl bg-dark w-full h-full"
          >
            <h3 className="text-2xl font-semibold">Interpersonal</h3>
            <ul className="mt-3">
              {data.interpersonal.map((skill: string, i: number) => (
                <li key={i} className="flex items-center gap-1">
                  <span>
                    <BsDot />
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
