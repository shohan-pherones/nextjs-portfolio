import { AiFillHtml5 } from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { GrNode } from 'react-icons/gr';
import {
  SiExpress,
  SiFramer,
  SiGreensock,
  SiMongoose,
  SiPrisma,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const data = {
  frontend: [
    {
      name: 'HTML',
      icon: AiFillHtml5,
    },
    {
      name: 'CSS',
      icon: BiLogoCss3,
    },
    {
      name: 'Tailwind CSS',
      icon: BiLogoTailwindCss,
    },
    {
      name: 'JavaScript',
      icon: BiLogoJavascript,
    },
    {
      name: 'TypeScript',
      icon: BiLogoTypescript,
    },
    {
      name: 'React.js',
      icon: BiLogoReact,
    },
    {
      name: 'Redux.js',
      icon: BiLogoRedux,
    },
    {
      name: 'Next.js',
      icon: TbBrandNextjs,
    },
    {
      name: 'GSAP',
      icon: SiGreensock,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: GrNode,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
    {
      name: 'MongoDB',
      icon: BiLogoMongodb,
    },
    {
      name: 'PostgreSQL',
      icon: BiLogoPostgresql,
    },
    {
      name: 'Prisma',
      icon: SiPrisma,
    },
    {
      name: 'Mongoose',
      icon: SiMongoose,
    },
    {
      name: 'Git',
      icon: BsGit,
    },
  ],
};
