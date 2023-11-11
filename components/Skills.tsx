'use client';

import { data } from '@/data/skills';
import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import { BsDot } from 'react-icons/bs';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section id='skills' className='wrapper section-padding'>
      <SectionTitle title='Highlighted Skills' subtitle='Skills' />
      {/* SKILLS */}
      <div className='grid gap-10 text-light md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* FRONT-END */}
        <div className='h-full w-full overflow-hidden'>
          <motion.div
            initial={{ y: '-100%' }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className='h-full w-full rounded-xl bg-dark p-10'
          >
            <h3 className='text-2xl font-semibold'>Front-End</h3>
            <ul className='mt-3'>
              {data.frontend.map((skill: string, i: number) => (
                <li key={i} className='flex items-center gap-1'>
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
        <div className='h-full w-full overflow-hidden'>
          <motion.div
            initial={{ y: '-100%' }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.1)}
            className='h-full w-full rounded-xl bg-dark p-10'
          >
            <h3 className='text-2xl font-semibold'>Back-End</h3>
            <ul className='mt-3'>
              {data.backend.map((skill: string, i: number) => (
                <li key={i} className='flex items-center gap-1'>
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
        <div className='h-full w-full overflow-hidden'>
          <motion.div
            initial={{ y: '-100%' }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className='h-full w-full rounded-xl bg-dark p-10'
          >
            <h3 className='text-2xl font-semibold'>Tools</h3>
            <ul className='mt-3'>
              {data.tools.map((skill: string, i: number) => (
                <li key={i} className='flex items-center gap-1'>
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
        <div className='h-full w-full overflow-hidden'>
          <motion.div
            initial={{ y: '-100%' }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.3)}
            className='h-full w-full rounded-xl bg-dark p-10'
          >
            <h3 className='text-2xl font-semibold'>Interpersonal</h3>
            <ul className='mt-3'>
              {data.interpersonal.map((skill: string, i: number) => (
                <li key={i} className='flex items-center gap-1'>
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
