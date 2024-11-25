'use client';

import { getTransition } from '@/utils/getTransition';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface ProjectCardProps {
  index: number;
  id: number;
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
  const router = useRouter();

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

    const travelWidth = rect.width * 0.5;
    const centerX = rect.left + rect.width / 2;
    const minX = centerX - travelWidth / 1.125;
    const maxX = minX + travelWidth;

    let lastTime = performance.now();
    let velocity = 0;

    const friction = 0.01; // Friction factor
    const movementDelay = 0.125; // Delay in seconds

    const onMouseEnter = () => {
      // Animate on mouse enter with a delay
      gsap.to(child, {
        duration: 0.75,
        x: initialX,
        scale: 1,
        rotate: -10,
        ease: 'back.out',
        delay: movementDelay,
      });
    };

    const onMouseLeave = () => {
      // Animate on mouse leave with a delay
      gsap.to(child, {
        duration: 0.75,
        x: initialX,
        scale: 0,
        rotate: 10,
        ease: 'back.out',
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
        ease: 'power2.out',
        delay: movementDelay,
      });

      lastTime = currentTime;
    };

    parent.addEventListener('mouseenter', onMouseEnter);
    parent.addEventListener('mouseleave', onMouseLeave);
    parent.addEventListener('mousemove', onMouseMove);

    return () => {
      parent.removeEventListener('mouseenter', onMouseEnter);
      parent.removeEventListener('mouseleave', onMouseLeave);
      parent.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className='group relative h-20 w-full sm:h-40' ref={parentRef}>
      {/* IMAGE */}
      <div
        ref={childRef}
        className='pointer-events-none absolute top-1/2 z-[1] h-[7.5rem] w-[10rem] -translate-y-1/2 overflow-hidden p-5 md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[20rem] xl:h-[20rem] xl:w-[25rem] xl:p-10 2xl:h-[25rem] 2xl:w-[30rem]'
        style={{ backgroundColor: color }}
      >
        <Image
          src={image}
          alt={title}
          width={640}
          height={640}
          priority
          className='h-full w-full object-cover'
        />
      </div>

      {/* SHUTTER */}
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[-1] h-0 w-full rotate-180 bg-alt duration-500 group-hover:h-full' />

      {/* CONTENTS */}
      <div
        className={clsx(
          'grid h-full w-full grid-cols-1 gap-10 border-b border-alt sm:grid-cols-[auto_15rem] lg:grid-cols-[5rem_auto_20rem] xl:grid-cols-[10rem_auto_20rem]',
          index === 0 && 'border-t'
        )}
      >
        <div className='hidden h-full w-full items-center justify-center border-r border-alt lg:flex'>
          <div className='overflow-hidden'>
            <motion.span
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='inline-block'
            >
              {(index + 1).toString().padStart(2, '0')}.
            </motion.span>
          </div>
        </div>

        <div
          onClick={() => router.push(`/projects/${id}`)}
          className='flex h-full w-full cursor-pointer items-center pl-5 lg:pl-0'
        >
          <div className='overflow-hidden'>
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='whitespace-nowrap text-4xl font-semibold uppercase md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'
            >
              {title}
            </motion.h2>
          </div>
        </div>

        <div className='hidden h-full w-full flex-col justify-center gap-1.5 border-l border-alt pl-5 sm:flex'>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              {duration}
            </motion.p>
          </div>

          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='flex flex-wrap items-center gap-x-5 gap-y-1.5'
            >
              {live && (
                <Link href={live} target='_blank' className='link-item-dark'>
                  Live Link
                </Link>
              )}
              {front && (
                <Link href={front} target='_blank' className='link-item-dark'>
                  Front-End
                </Link>
              )}
              {back && (
                <Link href={back} target='_blank' className='link-item-dark'>
                  Back-End
                </Link>
              )}
              {full && (
                <Link href={full} target='_blank' className='link-item-dark'>
                  Full-Stack
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
