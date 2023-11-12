'use client';

import { getTransition } from '@/utils/getTransition';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Form from './Form';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id='contact' className='wrapper section-padding'>
      <SectionTitle title='Get In Touch' subtitle='Contact' />
      {/* CONTENTS */}
      <div className='grid gap-10 md:grid-cols-2'>
        {/* CONTACTS */}
        <div className='flex flex-col gap-5'>
          <div className='overflow-hidden'>
            <motion.h3
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
              className='text-2xl font-semibold md:max-w-lg'
            >{`Let's unlock together the next level of possibilities! Reach out.`}</motion.h3>
          </div>
          <div className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2)}
            >
              <h3 className='text-2xl font-semibold text-dark/50'>
                Social Media
              </h3>
              <div className='flex flex-wrap gap-x-5 gap-y-1.5'>
                <Link
                  href='https://github.com/shohan-pherones'
                  target='_blank'
                  className='link-item-dark'
                >
                  GitHub
                </Link>
                <Link
                  href='https://leetcode.com/spectrashohan'
                  target='_blank'
                  className='link-item-dark'
                >
                  LeetCode
                </Link>
                <Link
                  href='https://www.linkedin.com/in/shohan-pherones'
                  target='_blank'
                  className='link-item-dark'
                >
                  LinkedIn
                </Link>
                <Link
                  href='https://twitter.com/elysianshohan'
                  target='_blank'
                  className='link-item-dark'
                >
                  Twitter
                </Link>
                <Link
                  href='https://www.facebook.com/spectra.shohan'
                  target='_blank'
                  className='link-item-dark'
                >
                  Facebook
                </Link>
              </div>
            </motion.div>
          </div>
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='overflow-hidden'>
              <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.4)}
              >
                <h3 className='text-2xl font-semibold text-dark/50'>
                  Hello, my mail awaits!
                </h3>
                <Link
                  href='mailto:shohan.sub.56@gmail.com'
                  target='_blank'
                  className='link-item-dark'
                >
                  shohan.sub.56@gmail.com
                </Link>
              </motion.div>
            </div>
            <div className='overflow-hidden'>
              <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                transition={getTransition(0.6)}
              >
                <h3 className='text-2xl font-semibold text-dark/50'>Address</h3>
                <Link
                  href='https://goo.gl/maps/WFSWfFP4WdQNxthCA'
                  target='_blank'
                  className='link-item-dark'
                >
                  Sirajganj, Bangladesh
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
