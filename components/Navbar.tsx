"use client";

import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <motion.header
        initial={{ translateY: "100vh", translateX: "-50%" }}
        animate={{ translateY: 0 }}
        transition={getTransition(1.2, 1)}
        className="bg-dark text-light hidden lg:w-10/12 xl:w-8/12 w-7/12 max-w-4xl h-20 fixed bottom-10 left-1/2 -translate-x-1/2 lg:flex justify-center items-center px-10 rounded-xl border border-light/20 z-50"
      >
        <nav>
          <ul className="flex items-center gap-10">
            <li className="flex items-center">
              <Link
                href="/"
                className="w-12 h-12 overflow-hidden rounded-full inline-block hover:brightness-75 duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689227673/nextjs-portfolio/assets/profile/Profile_Photo_Red_Shirt_qwci0o.jpg"
                  alt="Profile photo of Md. Shohanur Rahman"
                  width={50}
                  height={50}
                  priority
                  className="w-full h-full object-cover"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="link-item">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="link-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#blogs" className="link-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="link-item">
                Contact
              </Link>
            </li>
            <li>
              <Button href="/" target="_blank" color="light">
                Download Résumé
              </Button>
            </li>
          </ul>
        </nav>
      </motion.header>
      {/* MOBILE NAV */}
      <header className="bg-dark/90 backdrop-blur-lg text-light fixed bottom-0 left-0 right-0 flex items-center px-5 sm:px-10 h-20 border-t border-light/20 z-50">
        <nav className="w-full">
          <ul className="flex justify-between items-center gap-10">
            <li className="flex items-center">
              <Link
                href="/"
                className="w-12 h-12 overflow-hidden rounded-full inline-block hover:brightness-75 duration-300"
              >
                <Image
                  src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689227673/nextjs-portfolio/assets/profile/Profile_Photo_Red_Shirt_qwci0o.jpg"
                  alt="Profile photo of Md. Shohanur Rahman"
                  width={50}
                  height={50}
                  priority
                  className="w-full h-full object-cover"
                />
              </Link>
            </li>
            <li>
              <Button href="/" target="_blank" color="light">
                Download Résumé
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
