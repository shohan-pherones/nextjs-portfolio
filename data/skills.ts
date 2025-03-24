import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { GrNode } from 'react-icons/gr';
import { SiDocker, SiExpress, SiMongoose, SiNginx } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const data = {
  frontend: [
    {
      name: 'Next.js',
      icon: TbBrandNextjs,
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
      name: 'JavaScript',
      icon: BiLogoJavascript,
    },
    {
      name: 'TypeScript',
      icon: BiLogoTypescript,
    },
    {
      name: 'Tailwind CSS',
      icon: BiLogoTailwindCss,
    },
    {
      name: 'CSS',
      icon: BiLogoCss3,
    },
    {
      name: 'HTML',
      icon: BiLogoHtml5,
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
      name: 'Mongoose',
      icon: SiMongoose,
    },
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'NGINX',
      icon: SiNginx,
    },
  ],
};
