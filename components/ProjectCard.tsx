"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  id: string;
  title: string;
  image: string;
  live: string;
  front: string;
  back: string;
  full: string;
  duration: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  id,
  title,
  image,
  live,
  front,
  back,
  full,
  duration,
  color,
}) => {
  return (
    <Link
      href={`/projects/${id}`}
      className={clsx(
        "w-full h-40 border-b border-alt grid grid-cols-[10rem_auto_20rem] gap-10 relative group",
        index === 0 && "border-t"
      )}
    >
      {/* SHUTTER */}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-0 bg-alt z-[-1] group-hover:h-full duration-500 rotate-180"></div>

      {/* IMAGE */}
      <div
        className="absolute h-[25rem] w-[30rem] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[1] duration-500 invisible group-hover:visible pointer-events-none scale-0 group-hover:scale-100 rotate-6 group-hover:-rotate-6 overflow-hidden p-10"
        style={{ backgroundColor: color }}
      >
        <Image
          src={image}
          alt={title}
          width={640}
          height={640}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* NUMBER */}
      <div className="w-full h-full flex items-center justify-center border-r border-alt">
        <span>{(index + 1).toString().padStart(2, "0")}.</span>
      </div>

      {/* TITLE */}
      <div className="w-full h-full flex items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold uppercase whitespace-nowrap">
          {title}
        </h2>
      </div>

      {/* CONTENTS */}
      <div className="w-full h-full flex flex-col justify-center gap-2.5 border-l border-alt pl-5">
        <p>{duration}</p>
        <ul className="flex gap-5 items-center flex-wrap">
          <li>
            <Link href={live} className="link-item-dark">
              Live Link
            </Link>
          </li>
          {front && (
            <li>
              <Link href={front} className="link-item-dark">
                Front-End
              </Link>
            </li>
          )}
          {back && (
            <li>
              <Link href={back} className="link-item-dark">
                Back-End
              </Link>
            </li>
          )}
          {full && (
            <li>
              <Link href={full} className="link-item-dark">
                Full-Stack
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
