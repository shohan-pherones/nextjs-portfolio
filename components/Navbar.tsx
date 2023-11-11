'use client';

import { RESUME_LINK } from '@/constants/resume';
import { getTransition } from '@/utils/getTransition';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.header
        initial={{ translateY: '100vh', translateX: '-50%' }}
        animate={{ translateY: 0 }}
        transition={getTransition(0.35, 1.5)}
        className='fixed bottom-10 left-1/2 z-50 hidden h-20 w-7/12 max-w-4xl -translate-x-1/2 items-center justify-center rounded-xl border border-light/20 bg-dark px-10 text-light lg:flex lg:w-11/12 xl:w-9/12'
      >
        <nav>
          <ul className='flex items-center gap-10'>
            <li className='flex items-center'>
              <Link
                href='/'
                className='inline-block h-12 w-12 overflow-hidden rounded-full duration-300 hover:brightness-75'
              >
                <Image
                  src='https://res.cloudinary.com/dpkbthpcw/image/upload/v1689227673/nextjs-portfolio/assets/profile/Profile_Photo_Red_Shirt_qwci0o.jpg'
                  alt='Profile photo of Md. Shohanur Rahman'
                  width={50}
                  height={50}
                  priority
                  className='h-full w-full object-cover'
                />
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/#about' className='link-item'>
                About
              </Link>
            </li>
            <li>
              <Link href='/#projects' className='link-item'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='/#skills' className='link-item'>
                Skills
              </Link>
            </li>
            <li>
              <Link href='/#blogs' className='link-item'>
                Blogs
              </Link>
            </li>
            <li>
              <Link href='/#contact' className='link-item'>
                Contact
              </Link>
            </li>
            <li>
              <Button href={RESUME_LINK} target='_blank' color='light'>
                Download Résumé
              </Button>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* MOBILE NAV */}
      <motion.header
        initial={{ translateY: '100vh' }}
        animate={{ translateY: 0 }}
        transition={getTransition(0.35, 1.5)}
        className='fixed bottom-0 left-0 right-0 z-[102] flex h-20 items-center border-t border-light/20 bg-dark px-5 text-light sm:px-10 lg:hidden'
      >
        <nav className='w-full'>
          <ul className='flex items-center justify-between gap-5 sm:gap-10'>
            <li
              onClick={() => setIsNavOpen(false)}
              className='flex items-center'
            >
              <Link
                href='/'
                className='inline-block h-12 w-12 overflow-hidden rounded-full duration-300 hover:brightness-75'
              >
                <Image
                  src='https://res.cloudinary.com/dpkbthpcw/image/upload/v1689227673/nextjs-portfolio/assets/profile/Profile_Photo_Red_Shirt_qwci0o.jpg'
                  alt='Profile photo of Md. Shohanur Rahman'
                  width={50}
                  height={50}
                  priority
                  className='h-full w-full object-cover'
                />
              </Link>
            </li>
            <li className='flex items-center gap-5'>
              <div onClick={() => setIsNavOpen(false)}>
                <Button href={RESUME_LINK} target='_blank' color='light'>
                  Download Résumé
                </Button>
              </div>
              <div
                onClick={() => setIsNavOpen(!isNavOpen)}
                className='flex w-6 cursor-pointer flex-col gap-2'
              >
                <span
                  className={clsx(
                    'h-[1px] w-full origin-left bg-light duration-300',
                    isNavOpen ? 'rotate-45' : 'rotate-0'
                  )}
                ></span>
                <span
                  className={clsx(
                    'h-[1px] w-3/5 bg-light duration-300',
                    isNavOpen ? 'translate-x-[100vw]' : 'translate-x-0'
                  )}
                ></span>
                <span
                  className={clsx(
                    'h-[1px] w-full origin-left bg-light duration-300',
                    isNavOpen ? '-rotate-45' : 'rotate-0'
                  )}
                ></span>
              </div>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* OVERLAY FOR MOBILE NAV*/}
      <div
        onClick={() => setIsNavOpen(false)}
        className={clsx(
          'fixed bottom-0 left-0 right-0 top-0 z-[100] bg-transparent lg:hidden',
          isNavOpen ? 'block' : 'hidden'
        )}
      ></div>

      {/* MOBILE MENU AS MODAL */}
      <nav
        onClick={() => setIsNavOpen(false)}
        className={clsx(
          'fixed bottom-20 left-0 right-0 z-[101] flex h-[calc(100vh-15rem)] w-full items-center justify-center rounded-tl-[3rem] border-t border-light/20 bg-dark text-light duration-500 lg:hidden',
          isNavOpen ? 'translate-y-0' : 'translate-y-[100vh]'
        )}
      >
        <ul className='flex flex-col gap-5 text-2xl'>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0, 0.5)}
            >
              <Link href='/' className='link-item'>
                Home
              </Link>
            </motion.div>
          </li>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0, 0.5)}
            >
              <Link href='/#about' className='link-item'>
                About
              </Link>
            </motion.div>
          </li>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.1, 0.5)}
            >
              <Link href='/#projects' className='link-item'>
                Projects
              </Link>
            </motion.div>
          </li>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2, 0.5)}
            >
              <Link href='/#skills' className='link-item'>
                Skills
              </Link>
            </motion.div>
          </li>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.3, 0.5)}
            >
              <Link href='/#blogs' className='link-item'>
                Blogs
              </Link>
            </motion.div>
          </li>
          <li className='overflow-hidden'>
            <motion.div
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4, 0.5)}
            >
              <Link href='/#contact' className='link-item'>
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
