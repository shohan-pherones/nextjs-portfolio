'use client';

import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import SectionTitle from './SectionTitle';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about' className='wrapper section-padding'>
      <SectionTitle subtitle='About' title='Unveiling My Story and Identity' />

      <div className='grid gap-10 lg:grid-cols-2'>
        {/* IMAGES */}
        <div className='grid h-full w-full grid-cols-3 gap-10'>
          <div className='h-4/6 w-full overflow-hidden'>
            <motion.div
              initial={{ y: '-100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0, 1)}
              className='h-full w-full'
            >
              <Image
                src='https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517576/nextjs-portfolio/assets/about/01_oavpwg.jpg'
                alt='Profile photo of Md. Shohanur Rahman'
                width={200}
                height={400}
                priority
                className='h-full w-full object-cover'
              />
            </motion.div>
          </div>
          <div className='h-4/6 w-full self-center overflow-hidden'>
            <motion.div
              initial={{ y: '-100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2, 1.2)}
              className='h-full w-full'
            >
              <Image
                src='https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517576/nextjs-portfolio/assets/about/03_xt9hpa.jpg'
                alt='Profile photo of Md. Shohanur Rahman'
                width={200}
                height={400}
                priority
                className='h-full w-full object-cover'
              />
            </motion.div>
          </div>
          <div className='h-4/6 w-full self-end overflow-hidden'>
            <motion.div
              initial={{ y: '-100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4, 1.4)}
              className='h-full w-full'
            >
              <Image
                src='https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517575/nextjs-portfolio/assets/about/02_ona7xm.jpg'
                alt='Profile photo of Md. Shohanur Rahman'
                width={200}
                height={400}
                priority
                className='h-full w-full object-cover'
              />
            </motion.div>
          </div>
        </div>

        {/* TEXTS */}
        <div className='flex h-full w-full flex-col items-start gap-5'>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              Hi there! I&apos;m Md. Shohanur Rahman, a full-stack web developer
              with a strong focus on the MERN (MongoDB, Express.js, React.js,
              Node.js) stack.
            </motion.p>
          </div>
          <div className='hidden overflow-hidden sm:block'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2)}
            >
              My journey into web development began in February 2022, but my
              interest in programming started in my first year at university.
              Since then, I have dedicated myself to mastering JavaScript and
              its ecosystem. I enjoy exploring new technologies, improving my
              problem-solving skills, and building practical applications that
              enhance user experiences.
            </motion.p>
          </div>
          <div className='hidden overflow-hidden sm:block'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4)}
            >
              I actively practice coding on platforms like{' '}
              <Link
                href='https://leetcode.com/spectrashohan'
                target='_blank'
                className='link-item-dark'
              >
                LeetCode
              </Link>{' '}
              and have earned certifications from{' '}
              <Link
                href='https://www.hackerrank.com/profile/shohan_sub_56'
                target='_blank'
                className='link-item-dark'
              >
                HackerRank
              </Link>{' '}
              and{' '}
              <Link
                href='https://www.freecodecamp.org/spectrashohan'
                target='_blank'
                className='link-item-dark'
              >
                freeCodeCamp
              </Link>
              . These experiences have sharpened my ability to write clean,
              efficient code while keeping up with best practices in modern web
              development.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              Beyond coding, I have a passion for teaching. I run an online MERN
              stack course on{' '}
              <Link
                href='https://www.youtube.com/@spectra.shohan'
                target='_blank'
                className='link-item-dark'
              >
                YouTube
              </Link>{' '}
              where I help others learn full-stack development while improving
              my own ability to explain complex concepts. Teaching has
              strengthened my communication skills and deepened my technical
              understanding.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              I also have a strong appreciation for design and front-end
              development. I enjoy working with animations, layouts, and
              interactive elements to create engaging user experiences. I
              believe that well-structured, visually appealing applications
              improve usability and make a lasting impact.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              My goal is to build scalable, maintainable applications and work
              with teams that value clean code and thoughtful design. I am
              always open to learning new technologies, taking on challenging
              projects, and collaborating with other developers to create
              meaningful solutions.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.8)}
            >
              <Button href='/#contact'>Contact Me</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
