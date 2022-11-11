import Image from 'next/future/image';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

import ProjectTwo from '@/public/images/projects/project-two.png';

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
  DarkIndigoWavy,
} from './Styles';

// Icons
import NodeLogo from '@/public/svgs/icons/node-icon.svg';
import ReactLogo from '@/public/svgs/icons/react.svg';
import ReduxLogo from '@/public/svgs/icons/redux.svg';
import ExpressLogo from '@/public/svgs/icons/expressjs-icon.svg';
import DarkExpressLogo from '@/public/svgs/icons/expressjs-white.svg';
import MongoDBLogo from '@/public/svgs/icons/mongodb.svg';
import TailwindIcon from '@/public/svgs/icons/tailwind.svg';

type Props = {};

function CardTwo({}: Props) {
  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-white dark:fill-white transition duration-300`}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
  const { darkMode } = useContext(DarkContext);
  return (
    <CardArticle className="bg-indigo-50 dark:bg-[#121212]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image src={ProjectTwo} alt="Image of Learning Platform wesbite" />
      </motion.div>
      <Title className="text-indigo-600 dark:text-[#BB86FC]">
        Blog Creator API
      </Title>
      <TechIconContainer>
        <Image
          src={ReactLogo}
          alt="Redux logo"
          className="h-7 w-7 rounded-lg"
        />
        <Image
          src={ReduxLogo}
          alt="React logo"
          className="h-7 w-7 rounded-lg"
        />
        {darkMode ? (
          <Image
            src={DarkExpressLogo}
            alt="ExpressJS"
            className="h-7 w-7 rounded-lg"
          />
        ) : (
          <Image
            src={ExpressLogo}
            alt="ExpressJS"
            className="h-7 w-7 rounded-lg"
          />
        )}

        <Image src={NodeLogo} alt="NodeJS" className="h-7 w-7 rounded-lg" />
        <Image src={MongoDBLogo} alt="Mongodb logo" className="h-7 w-7" />
        <Image
          src={TailwindIcon}
          alt="Tailwindcss"
          className="h-7 w-7 rounded-lg"
        />
      </TechIconContainer>
      {darkMode ? (
        <Description className="dark:text-white">
          Designed with Model-View-Controller architecture and a RESTful API.
          Users can signup for an account. Once{' '}
          <DarkIndigoWavy>authenticated</DarkIndigoWavy>, they can create and
          publish their own blog.
        </Description>
      ) : (
        <Description className="dark:text-white">
          Designed with Model-View-Controller architecture and a RESTful API.
          Users can signup for an account. Once{' '}
          <IndigoWavy>authenticated</IndigoWavy>, they can create and publish
          their own blog.
        </Description>
      )}
      <TechnologyDescription className="text-black dark:text-[#BB86FC]">
        React | Redux | Express | Node | MongoDB | Mongoose | Tailwind CSS
      </TechnologyDescription>
      <ActionButtonHolder>
        <Link href="https://blog-creator-mern-app.herokuapp.com/">
          <a target="_blank">
            <WebsiteButton
              className="
              hover:bg-sky-500 
              dark:bg-[#bb86fc]
              hover:text-white  
              border-[1px] 
              border-transparent
              text-black
              dark:text-white
              dark:hover:bg-[#7F39FB]
              dark:border-none
              bg-white
              border-gray-50
              hover:border-transparent
              "
            >
              Website
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
            </WebsiteButton>
          </a>
        </Link>
        <Link href="https://github.com/Earth-Hominid/Blog-Creator-API">
          <a target="_blank">
            <WebsiteButton
              className="
             hover:bg-sky-500 
              hover:text-white  
              dark:hover:bg-[#7F39FB]
              dark:bg-[#bb86fc]
              dark:border-none
              border-[1px] 
              border-transparent
              text-black
              dark:text-white
              bg-white
              border-gray-50
              hover:border-transparent"
            >
              Code
              {GithubIcon}
            </WebsiteButton>
          </a>
        </Link>
      </ActionButtonHolder>
    </CardArticle>
  );
}

export default CardTwo;
