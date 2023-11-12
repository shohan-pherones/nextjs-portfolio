'use client';

import { data } from '@/data/projects';
import { getTransition } from '@/utils/getTransition';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './Button';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

interface ProjectDetailsProps {
  project: {
    id: number;
    title: string;
    image: string;
    live: string;
    front: string;
    back: string;
    full: string;
    duration: string;
    description: string;
    tech: string;
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const otherProjects = data.filter((proj) => proj.id !== project.id);

  return (
    <section className='section-padding'>
      <div className='wrapper'>
        <SectionTitle title={project.title} subtitle='Project Details' />
      </div>

      <div className='wrapper flex flex-col gap-10 overflow-hidden pb-10 md:pb-20'>
        <motion.div
          initial={{ y: '-100%' }}
          whileInView={{ y: 0 }}
          transition={getTransition(1.4)}
          className='h-full w-full'
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            priority
            className='h-full w-full object-cover'
          />
        </motion.div>

        <div className='flex flex-col gap-5'>
          <div className='overflow-hidden sm:self-end'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              {project.duration}
            </motion.p>
          </div>
          <div className='overflow-hidden sm:text-xl md:text-2xl'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              {project.description}
            </motion.p>
          </div>
          <div className='overflow-hidden sm:text-xl md:text-2xl'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              <span className='font-semibold'>Technologies:</span>{' '}
              {project.tech}
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='flex flex-wrap items-center gap-5'
            >
              <Link
                href={project.live}
                target='_blank'
                className={clsx(buttonVariants())}
              >
                Live Link
              </Link>
              {project?.front && (
                <Link
                  href={project.front}
                  target='_blank'
                  className={clsx(buttonVariants())}
                >
                  Front-End
                </Link>
              )}
              {project?.back && (
                <Link
                  href={project.back}
                  target='_blank'
                  className={clsx(buttonVariants())}
                >
                  Back-End
                </Link>
              )}
              {project?.full && (
                <Link
                  href={project.full}
                  target='_blank'
                  className={clsx(buttonVariants())}
                >
                  Full-Stack
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <div className='wrapper pt-10 md:pt-20'>
        <SectionTitle title='Explore Other Projects' subtitle='More Projects' />
      </div>

      <div className='flex flex-col'>
        {otherProjects.map((project: any, index: number) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            index={index}
            title={project.title}
            image={project.image}
            live={project.live}
            front={project.front}
            back={project.back}
            full={project.full}
            duration={project.duration}
            color={project.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
