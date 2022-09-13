import Image from 'next/future/image';
import Link from 'next/link';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import ProjectTwo from '@/public/images/vivacity.png';

import {
  CardContainer,
  CardTitle,
  CardDescription,
  TechnologyDescription,
  ActionButtonHolder,
  IconHolder,
  WebsiteButton,
  Wavy,
} from './Styles';

const CustomTwo = () => {
  const VivacityIcon = (
    <svg
      width="100pt"
      height="100pt"
      viewBox="0 0 100 100"
      className="fill-sky-500 stroke-sky-500 w-6 h-6 stroke-2"
    >
      <path d="M25.2 20.2c-1.6 1.6-1.5 5.1.2 11.5.8 2.9 1.2 5.3 1 5.3-.2 0 .1 1.1.6 2.6.6 1.4 1.2 3.7 1.5 5.2.6 3.3 3.8 17.2 6 26.2s3.4 10 11.4 10c5.6 0 7-.4 8.9-2.3C57.4 76.1 62 69.3 62 68c0-.4.4-1 .8-1.2.5-.2 3.3-4.4 6.3-9.3 3-5 5.6-9.2 5.9-9.5.3-.3 1.1-1.7 1.9-3.3.8-1.5 1.8-2.7 2.3-2.7.4 0 .8-.5.8-1.1 0-.6 1.7-3.7 3.8-6.8 2.1-3.1 4.4-7.1 5-9 1.8-5 .4-6.1-8.1-6.1-6.9 0-7 0-10.9 4.2-2.1 2.3-3.8 4.5-3.8 5 0 .9-11.6 19.4-13.9 22.1-.8.9-1.8 1.4-2.2 1-.4-.5-2.1-6.8-3.8-14.2C42 19.4 41.8 19 33.2 19c-4 0-7.3.5-8 1.2zm18.2 17c2 9 3.9 18 4.3 20 .6 3.9 1.7 4.9 2.6 2.4.3-.7 5.8-9.7 12.3-20L74.4 21H89l-5.4 8.2c-3 4.6-11.3 17.5-18.4 28.8l-13 20.5-6.5.3c-5.6.2-6.6 0-7.1-1.5C37.7 74.2 26 22.9 26 21.9c0-.5 3.1-.9 6.8-.9h6.9l3.7 16.2z" />
    </svg>
  );

  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-white transition duration-300`}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );

  return (
    <CardContainer className="text-black bg-gray-100 border-gray-300 border-[1px] shadow-xl">
      <Image
        src={ProjectTwo}
        alt="Project Two"
        priority={true}
        className="rounded-t-xl h-auto w-auto"
      />
      <CardTitle className="text-indigo-500">Blog Creator API</CardTitle>

      <CardDescription>
        Designed with Model-View-Controller architecture along with the
        blazingly fast RESTful API methodology. Online users can signup for an
        account. Once <Wavy>authenticated</Wavy>, they can create, save, edit
        and view blog entries.
      </CardDescription>

      <TechnologyDescription className="text-black">
        Node | React | Express | MongoDB | Mongoose ORM
      </TechnologyDescription>
      <ActionButtonHolder>
        <Link href="https://blog-creator-mern-app.herokuapp.com/">
          <a target="_blank">
            <WebsiteButton className="hover:bg-indigo-500 bg-white hover:text-white">
              Website
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
            </WebsiteButton>
          </a>
        </Link>
        <Link href="https://github.com/Earth-Hominid/Blog-Creator-API">
          <a target="_blank">
            <WebsiteButton className="hover:bg-indigo-500 bg-white hover:text-white">
              Code
              {GithubIcon}
            </WebsiteButton>
          </a>
        </Link>
      </ActionButtonHolder>
    </CardContainer>
  );
};

export default CustomTwo;
