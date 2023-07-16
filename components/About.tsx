"use client";

import { motion } from "framer-motion";
import { getTransition } from "@/utils/getTransition";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="wrapper section-padding">
      <SectionTitle subtitle="About" title="Unveiling My Story and Identity" />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* IMAGES */}
        <div className="w-full h-full grid grid-cols-3 gap-10">
          <div className="w-full h-4/6 overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0, 1)}
              className="w-full h-full"
            >
              <Image
                src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517576/nextjs-portfolio/assets/about/01_oavpwg.jpg"
                alt="Profile photo of Md. Shohanur Rahman"
                width={300}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full h-4/6 self-center overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2, 1.2)}
              className="w-full h-full"
            >
              <Image
                src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517576/nextjs-portfolio/assets/about/03_xt9hpa.jpg"
                alt="Profile photo of Md. Shohanur Rahman"
                width={300}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full h-4/6 self-end overflow-hidden">
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4, 1.4)}
              className="w-full h-full"
            >
              <Image
                src="https://res.cloudinary.com/dpkbthpcw/image/upload/v1689517575/nextjs-portfolio/assets/about/02_ona7xm.jpg"
                alt="Profile photo of Md. Shohanur Rahman"
                width={300}
                height={500}
                priority
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        {/* TEXTS */}
        <div className="w-full h-full flex flex-col gap-5 items-start">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition()}
            >
              Hi there, I am Md. Shohanur Rahman and I am a passionate web
              developer with a strong focus on MERN (MongoDB, Express.js,
              React.js, Node.js) stack. I have been working on various projects
              leveraging my favorite technologies such as Next.js, React.js,
              TypeScript, Node.js, Express.js, and Tailwind CSS.
            </motion.p>
          </div>
          <div className="overflow-hidden hidden sm:block">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.2)}
            >
              My journey into web development began in February 2022, but my
              passion for programming started during my first year at
              university. I have a deep love for JavaScript and I constantly
              immerse myself in learning and exploring its intricacies.
            </motion.p>
          </div>
          <div className="overflow-hidden hidden sm:block">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.4)}
            >
              Throughout my development career, I have honed my skills by
              actively solving coding challenges on platforms like LeetCode. I
              have also achieved certifications from HackerRank, freeCodeCamp,
              and other reputable sources, further validating my expertise in
              the field.
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.6)}
            >
              Overall, I am a driven and enthusiastic web developer who
              constantly seeks opportunities to grow and create innovative
              solutions. With a strong foundation in MERN stack development, a
              passion for JavaScript, and a dedication to delivering
              high-quality results, I am eager to contribute my skills to
              impactful projects and collaborate with like-minded professionals.
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={getTransition(0.8)}
            >
              <Button href="/#contact">Contact Me</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
