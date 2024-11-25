'use client';

import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import SectionTitle from './SectionTitle';

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
              Hi there! I am Md. Shohanur Rahman, a passionate full-stack web
              developer with a strong focus on the MERN (MongoDB, Express.js,
              React.js, Node.js) stack. Additionally, I am proficient in Python,
              Django, Django REST Framework, Go and Go Fiber which further
              expands my versatility as a developer.
            </motion.p>
          </div>
          <div className='hidden overflow-hidden sm:block'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2)}
            >
              My journey into web development began in February 2022, though my
              love for programming started in my first year at university. I
              have a deep passion for JavaScript and continuously explore its
              intricacies, allowing me to stay ahead in this dynamic field.
            </motion.p>
          </div>
          <div className='hidden overflow-hidden sm:block'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4)}
            >
              Throughout my career, I have refined my skills through active
              coding on platforms like LeetCode and obtained certifications from
              reputable sources like HackerRank and freeCodeCamp. My expertise
              is further validated by these accomplishments and ongoing
              practice.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              Driven by a love for teaching, I also run an online course on MERN
              stack development, where I foster essential skills such as
              leadership, teamwork, and public speaking. This experience has
              enabled me to empower others while enhancing my own understanding
              of complex concepts.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              Creativity is integral to my approach; I have a keen eye for
              design and a knack for crafting captivating animations. I ensure
              every detail contributes to a visually appealing, engaging user
              experience.
            </motion.p>
          </div>
          <div className='overflow-hidden'>
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              With a strong foundation in both the MERN stack and Django
              ecosystem, a passion for JavaScript, and a commitment to
              high-quality results, I am excited to bring innovative solutions
              to impactful projects and collaborate with like-minded
              professionals.
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
