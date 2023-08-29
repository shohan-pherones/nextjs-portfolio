"use client";

import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Button from "./Button";

interface ProjectCardProps {
  index: number;
  title: string;
  image: string;
  description: string;
  tech: string;
  live: string;
  front: string;
  back: string;
  full: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  image,
  description,
  tech,
  live,
  front,
  back,
  full,
}) => {
  const mobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={getTransition(index / 10, 1)}
        className="w-full h-full bg-dark text-light p-5 md:p-10 rounded-xl"
      >
        {/* CONTENTS */}
        <div>
          {/* IMAGE */}
          <div className="w-full h-[15rem] sm:h-[25rem] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          {/* TEXT CONTENTS */}
          <div className="mt-10 flex flex-col gap-5">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-light/60">
              {mobile ? description.substring(0, 200) : description}
              {mobile ? "..." : null}
            </p>
            {/* TECH */}
            <div className="flex gap-3 flex-wrap">
              {tech.split(", ").map((tag: string, i: number) => (
                <span
                  key={i}
                  className="uppercase bg-light/20 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* LINKS */}
            <div className="flex flex-wrap gap-3">
              <Button href={live} target="_blank" color="light">
                Live Demo
              </Button>
              {front && (
                <Button href={front} target="_blank" color="light">
                  Front-End
                </Button>
              )}
              {back && (
                <Button href={back} target="_blank" color="light">
                  Back-End
                </Button>
              )}
              {full && (
                <Button href={full} target="_blank" color="light">
                  Full-Stack
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
