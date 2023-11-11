'use client';

import { data } from '@/data/hero';
import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import HeroHeadlines from './HeroHeadlines';
import HeroImageItem from './HeroImageItem';

const Hero = () => {
  return (
    <section className='relative sm:h-screen'>
      <div className='wrapper section-padding h-full w-full'>
        <div className='relative grid h-full w-full grid-cols-4 grid-rows-[9] md:grid-cols-7 md:grid-rows-5'>
          {/* BLOCKS */}
          {data.map((image: string, i: number) => (
            <HeroImageItem key={i} image={image} />
          ))}

          {/* HEADLINES */}
          <HeroHeadlines />
        </div>
      </div>

      {/* BG */}
      <motion.div
        initial={{ height: 0, borderRadius: 0 }}
        whileInView={{ height: '100%', borderRadius: '0 3rem 0 3rem' }}
        transition={getTransition(0, 1.5)}
        className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full rounded-bl-[3rem] rounded-tr-[3rem] bg-alt'
      ></motion.div>
    </section>
  );
};

export default Hero;
