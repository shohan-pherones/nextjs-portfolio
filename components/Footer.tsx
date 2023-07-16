"use client";

import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wrapper section-padding mb-[5rem] lg:mb-[7.5rem]">
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={getTransition()}
          className="sm:w-4/5 md:w-3/5 lg:w-2/5 text-dark/50"
        >
          Loosely sketched in{" "}
          <Link
            href="https://www.adobe.com/products/photoshop.html"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Adobe_Photoshop
          </Link>{" "}
          and coded in{" "}
          <Link
            href="https://code.visualstudio.com"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Visual_Studio_Code
          </Link>{" "}
          by yours truly. Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Tailwind_CSS
          </Link>
          , deployed with{" "}
          <Link
            href="https://vercel.com"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Vercel
          </Link>
          . All text is set in the{" "}
          <Link
            href="https://fonts.google.com/specimen/Bai+Jamjuree"
            target="_blank"
            className="text-dark link-item-dark"
          >
            Bai_Jamjuree
          </Link>{" "}
          typeface.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
