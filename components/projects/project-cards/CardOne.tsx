import Image from 'next/future/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import ThemeContext from '@/context/darkModeContext';

import ProjectOne from '@/public/images/projects/project-one.png';

// Icons
import NodeIcon from '@/public/svgs/icons/node-icon.svg';
import NextIconDark from '@/public/svgs/icons/next-icon-dark.svg';
import TypeScriptIcon from '@/public/svgs/icons/typescript-icon2.svg';
import NextIcon from '@/public/svgs/icons/next-icon.svg';
import StrapiIcon from '@/public/svgs/icons/strapi-icon.svg';
import PostIcon from '@/public/svgs/icons/pgsql.svg';
import TailwindIcon from '@/public/svgs/icons/tailwind.svg';

import {
  CardArticle,
  TechnologyDescription,
  TechIconContainer,
  Title,
  Description,
  ActionButtonHolder,
  WebsiteButton,
  IconHolder,
  Wavy,
  DarkBlueWavy,
} from './Styles';

type Props = {};

const CardOne = ({ props: Props }) => {
  const { darkMode } = useContext(ThemeContext);

  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-white transition duration-300 dark:fill-white`}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );

  return (
    <CardArticle className="bg-yellow-50 dark:bg-[#1A1A1B]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image src={ProjectOne} alt="Image of Learning Platform wesbite" />
      </motion.div>
      <Title className="dark:text-[#4FBCFF]">Business Learning Platform</Title>
      <TechIconContainer>
        <Image
          src={TypeScriptIcon}
          alt="TypeScript"
          className="h-8 w-8 rounded-lg"
        />
        {darkMode ? (
          <Image
            src={NextIconDark}
            alt="NextJS"
            className="h-7 w-7 rounded-lg"
          />
        ) : (
          <Image src={NextIcon} alt="NextJS" className="h-7 w-7 rounded-lg" />
        )}

        <Image src={NodeIcon} alt="NodeJS" className="h-7 w-7 rounded-lg" />
        <Image src={PostIcon} alt="PostgreSQL" className="h-7 w-7 rounded-lg" />
        <Image src={StrapiIcon} alt="StrapiJS" className="h-7 w-7 rounded-lg" />
        <Image
          src={TailwindIcon}
          alt="Tailwindcss"
          className="h-8 w-8 rounded-lg"
        />
      </TechIconContainer>
      {darkMode ? (
        <Description className="dark:text-white">
          An easy to use web application that strengthens business organizations
          by providing infrastructure for learning and{' '}
          <DarkBlueWavy>secure</DarkBlueWavy> collaboration.
        </Description>
      ) : (
        <Description className="dark:text-white">
          An easy to use web application that strengthens business organizations
          by providing infrastructure for learning and <Wavy>secure</Wavy>{' '}
          collaboration.
        </Description>
      )}
      <TechnologyDescription className="text-black dark:text-[#4FBCFF]">
        TypeScript | NextJS | Node | PostgreSQL | StrapiJS | Tailwind CSS
      </TechnologyDescription>
      <ActionButtonHolder>
        <Link href="https://rbsdocsfrontend.vercel.app/">
          <a target="_blank">
            <WebsiteButton
              className="
            hover:bg-blue-500 
            hover:text-white
            bg-white 
            text-black 
           dark:bg-blue-400
           dark:text-white
           dark:hover:bg-blue-500
            transition 
            duration-300 
            "
            >
              Website
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
            </WebsiteButton>
          </a>
        </Link>
        <Link href="https://github.com/Earth-Hominid/Business-Communication-Platform-Full-Stack">
          <a target="_blank">
            <WebsiteButton
              className="hover:bg-blue-500 bg-white text-black transition duration-300 hover:text-white dark:bg-blue-400
           dark:text-white
           dark:hover:bg-blue-500"
            >
              Code
              {GithubIcon}
            </WebsiteButton>
          </a>
        </Link>
      </ActionButtonHolder>
    </CardArticle>
  );
};

export default CardOne;
