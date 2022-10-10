import Image from 'next/future/image';
import { useContext } from 'react';
import ThemeContext from '@/context/darkModeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

import ProjectFour from '@/public/images/projects/project-four.png';

// Icons
import NodeLogo from '@/public/svgs/icons/node-icon.svg';
import ExpressLogo from '@/public/svgs/icons/expressjs-icon.svg';
import MongoDBLogo from '@/public/svgs/icons/mongodb.svg';
import PugLogo from '@/public/svgs/icons/pug.svg';
import TailwindIcon from '@/public/svgs/icons/tailwind.svg';

import {
  CardArticle,
  TechIconContainer,
  Title,
  Description,
  TechnologyDescription,
  ActionButtonHolder,
  WebsiteButton,
  IconHolder,
  IndigoWavy,
} from './Styles';

type Props = {};

const CardThree = (props: Props) => {
  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-indigo-400 dark:fill-white transition duration-300`}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      {darkMode ? (
        <CardArticle className="bg-[#121212]">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={ProjectFour} alt="Inventory Managment wesbite" />
          </motion.div>
          <Title className="text-indigo-300">Inventory Managment System</Title>
          <TechIconContainer>
            <Image
              src={ExpressLogo}
              alt="Express Logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image src={NodeLogo} alt="NodeJS" className="h-7 w-7 rounded-lg" />
            <Image
              src={MongoDBLogo}
              alt="MongoDB logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={PugLogo}
              alt="Pug logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={TailwindIcon}
              alt="Tailwindcss logo"
              className="h-7 w-7 rounded-lg"
            />
          </TechIconContainer>
          <Description className="text-white">
            With a discord inspired theme, clean UI, MVC architecture and data{' '}
            <IndigoWavy>validation</IndigoWavy>, this ExpressJS Full Stack CRUD
            application ensures you have full control of your inventory.
          </Description>
          <TechnologyDescription className="text-indigo-300">
            Express | MongoDB | Mongoose | PUG | Tailwind CSS
          </TechnologyDescription>
          <ActionButtonHolder>
            <Link href="https://pure-brushlands-30098.herokuapp.com/catalog">
              <a target="_blank">
                <WebsiteButton className="bg-[#202225] hover:text-indigo-400 text-white">
                  Website
                  <IconHolder>
                    <ComputerDesktopIcon />
                  </IconHolder>
                </WebsiteButton>
              </a>
            </Link>
            <Link href="https://github.com/Earth-Hominid/Seeds-Inventory-Catalog">
              <a target="_blank">
                <WebsiteButton className="bg-[#202225] text-white hover:text-indigo-400">
                  Code
                  {GithubIcon}
                </WebsiteButton>
              </a>
            </Link>
          </ActionButtonHolder>
        </CardArticle>
      ) : (
        <CardArticle className="indigo-gradient">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={ProjectFour} alt="Inventory Managment wesbite" />
          </motion.div>
          <Title className="text-indigo-500">Inventory Managment System</Title>
          <TechIconContainer>
            <Image
              src={ExpressLogo}
              alt="Express Logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image src={NodeLogo} alt="NodeJS" className="h-7 w-7 rounded-lg" />
            <Image
              src={MongoDBLogo}
              alt="MongoDB logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={PugLogo}
              alt="Pug logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={TailwindIcon}
              alt="Tailwindcss logo"
              className="h-7 w-7 rounded-lg"
            />
          </TechIconContainer>
          <Description>
            With a discord inspired theme, clean UI, MVC architecture and data{' '}
            <IndigoWavy>validation</IndigoWavy>, this ExpressJS Full Stack CRUD
            application ensures you have full control of your inventory.
          </Description>
          <TechnologyDescription className="text-black">
            Express | MongoDB | Mongoose | PUG | Tailwind CSS
          </TechnologyDescription>
          <ActionButtonHolder>
            <Link href="https://pure-brushlands-30098.herokuapp.com/catalog">
              <a target="_blank">
                <WebsiteButton className="bg-white hover:text-indigo-500 text-black">
                  Website
                  <IconHolder>
                    <ComputerDesktopIcon />
                  </IconHolder>
                </WebsiteButton>
              </a>
            </Link>
            <Link href="https://github.com/Earth-Hominid/Seeds-Inventory-Catalog">
              <a target="_blank">
                <WebsiteButton className="bg-white text-black hover:text-indigo-500">
                  Code
                  {GithubIcon}
                </WebsiteButton>
              </a>
            </Link>
          </ActionButtonHolder>
        </CardArticle>
      )}
    </>
  );
};

export default CardThree;
