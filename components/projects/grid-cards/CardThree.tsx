import Image from 'next/future/image';
import Link from 'next/link';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import ProjectThree from '@/public/images/projects/project-three.png';

// Icons
import ReactLogo from '@/public/svgs/icons/react.svg';
import CSSLogo from '@/public/svgs/icons/css3.svg';
import ReactRouterLogo from '@/public/svgs/icons/react-router.svg';
import JestLogo from '@/public/svgs/icons/jest.svg';
import StyledComponents from '@/public/svgs/icons/styled-components.svg';

import {
  TechIconContainer,
  CardTitle,
  CardDescription,
  TechnologyDescription,
  ActionButtonHolder,
  IconHolder,
  WebsiteButton,
  OrangeWavy,
} from './Styles';

const CardThree = () => {
  const { darkMode } = useContext(DarkContext);

  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-black transition duration-300 dark:fill-black dark:group-hover:fill-white`}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center rounded-xl text-black bg-[#FFF7F0] border-gray-300 border-[1px] shadow-xl space-y-5 dark:bg-[#121212] dark:border-gray-900"
    >
      <Image
        src={ProjectThree}
        alt="Chair Mart Project"
        priority={true}
        className="rounded-t-xl h-auto w-auto"
      />
      <CardTitle className="text-[#ff7b54] dark:text-[#ffe0c3]">
        Chair Mart
      </CardTitle>
      <TechIconContainer>
        <Image
          src={ReactLogo}
          alt="React logo"
          className="h-8 w-8 rounded-lg"
        />
        <Image
          src={ReactRouterLogo}
          alt="React Router Logo"
          className="h-8 w-8 rounded-lg"
        />
        <Image src={CSSLogo} alt="CSS logo" className="h-8 w-8 rounded-lg" />
        <Image src={JestLogo} alt="Jest Logo" className="h-8 w-8 rounded-lg" />
        <Image
          src={StyledComponents}
          alt="Styled Components Logo"
          className="h-8 w-8 rounded-lg"
        />
      </TechIconContainer>

      <CardDescription className="text-black dark:text-white">
        An E-commerce Furniture Store mock-up with shopping cart. Built with{' '}
        <OrangeWavy>modern</OrangeWavy> React, Functional Components with Hooks.
        Simple State management with Context API.
      </CardDescription>

      <TechnologyDescription className="text-black dark:text-[#ffe0c3]">
        React | React Router | Jest | Styled - Components
      </TechnologyDescription>
      <ActionButtonHolder>
        <Link href="https://earth-hominid.github.io/Chair-Mart/">
          <a target="_blank">
            <WebsiteButton
              className="
            hover:bg-[#ffe0c3] 
            hover:text-black
            dark:bg-[#ffe0c3] 
            dark:text-black
            dark:hover:text-white
            dark:hover:bg-[#ff7b54]"
            >
              Website
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
            </WebsiteButton>
          </a>
        </Link>
        <Link href="https://github.com/Earth-Hominid/Chair-Mart">
          <a target="_blank">
            <WebsiteButton
              className="
            hover:bg-[#ffe0c3] 
            bg-white 
            hover:text-black
            dark:bg-[#ffe0c3]
            dark:text-black
            dark:hover:text-white
            dark:hover:bg-[#ff7b54]
            "
            >
              Code
              {GithubIcon}
            </WebsiteButton>
          </a>
        </Link>
      </ActionButtonHolder>
    </motion.div>
  );
};

export default CardThree;
