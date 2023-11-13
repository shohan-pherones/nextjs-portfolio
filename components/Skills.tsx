'use client';

import { data } from '@/data/skills';
import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section id='skills' className='wrapper section-padding'>
      <SectionTitle title='Highlighted Skills' subtitle='Skills' />

      {/* SKILLS WRAPPER */}
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
        {/* FRONTEND */}
        <div>
          <div className='overflow-hidden'>
            <motion.h3
              initial={{ y: '-100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='mb-5 text-xl font-semibold md:text-2xl'
            >
              Front-End
            </motion.h3>
          </div>
          <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
            {data.frontend.map((skill, index) => (
              <div key={index + skill.name} className='overflow-hidden'>
                <motion.div
                  initial={{ y: '-100%' }}
                  whileInView={{ y: 0 }}
                  transition={getTransition(index * 0.125)}
                  className='flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border p-5 transition duration-300 ease-in-out hover:border-alt hover:bg-alt'
                >
                  <span className='text-black/60'>
                    <skill.icon size={40} />
                  </span>
                  <p className='whitespace-nowrap'>{skill.name}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <div className='overflow-hidden'>
            <motion.h3
              initial={{ y: '-100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='mb-5 text-xl font-semibold md:text-2xl'
            >
              Back-End
            </motion.h3>
          </div>
          <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
            {data.backend.map((skill, index) => (
              <div key={index + skill.name} className='overflow-hidden'>
                <motion.div
                  initial={{ y: '-100%' }}
                  whileInView={{ y: 0 }}
                  transition={getTransition(index * 0.125)}
                  className='flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border p-5 transition duration-300 ease-in-out hover:border-alt hover:bg-alt'
                >
                  <span className='text-black/60'>
                    <skill.icon size={40} />
                  </span>
                  <p className='whitespace-nowrap'>{skill.name}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
