"use client";

import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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

interface MouseEventWithTimestamp extends MouseEvent {
  timeStamp: number;
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
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const child = childRef.current;

    if (!parent || !child) {
      return;
    }

    const rect = parent.getBoundingClientRect();
    const initialX = rect.left + rect.width / 2 - child.offsetWidth / 2;

    gsap.set(child, { x: initialX, scale: 0, rotate: 10 });

    const travelWidth = rect.width * 0.6;
    const centerX = rect.left + rect.width / 2;
    const minX = centerX - travelWidth / 1.5;
    const maxX = minX + travelWidth;

    let lastTime = performance.now();
    let velocity = 0;

    const friction = 0.01; // Friction factor
    const movementDelay = 0.125; // Delay in seconds

    const onMouseEnter = () => {
      // Animate on mouse enter with a delay
      gsap.to(child, {
        duration: 0.5,
        x: initialX,
        scale: 1,
        rotate: -10,
        ease: "power2.out",
        delay: movementDelay,
      });
    };

    const onMouseLeave = () => {
      // Animate on mouse leave with a delay
      gsap.to(child, {
        duration: 0.5,
        x: initialX,
        scale: 0,
        rotate: 10,
        ease: "power2.out",
        delay: movementDelay,
      });
    };

    const onMouseMove = (event: MouseEventWithTimestamp) => {
      const { clientX } = event;
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000;

      const constrainedX = Math.max(minX, Math.min(clientX - rect.left, maxX));

      velocity = (constrainedX - child.offsetLeft) / deltaTime;
      velocity *= 1 - friction;

      const newX = child.offsetLeft + velocity * deltaTime;

      gsap.to(child, {
        duration: 0.5,
        x: newX,
        ease: "power2.out",
        delay: movementDelay,
      });

      lastTime = currentTime;
    };

    parent.addEventListener("mouseenter", onMouseEnter);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("mousemove", onMouseMove);

    return () => {
      parent.removeEventListener("mouseenter", onMouseEnter);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-40 group relative" ref={parentRef}>
      {/* IMAGE */}
      <div
        ref={childRef}
        className="absolute top-1/2 -translate-y-1/2 h-[25rem] w-[30rem] z-[1] pointer-events-none overflow-hidden p-10"
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

      {/* SHUTTER */}
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-0 bg-alt z-[-1] group-hover:h-full duration-500 rotate-180"></div>

      {/* LINK */}
      <Link
        href={`/projects/${id}`}
        className={clsx(
          "w-full h-full border-b border-alt grid grid-cols-[10rem_auto_20rem] gap-10",
          index === 0 && "border-t"
        )}
      >
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
    </div>
  );
};

export default ProjectCard;
