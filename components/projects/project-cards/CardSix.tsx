import Image from 'next/future/image';
import { useContext } from 'react';
import ThemeContext from '@/context/darkModeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

import ProjectSix from '@/public/images/projects/project-six.png';

// Icons
import ReactLogo from '@/public/svgs/icons/react.svg';
import JSLogo from '@/public/svgs/icons/js.svg';
import CSSLogo from '@/public/svgs/icons/css3.svg';
import HtmlLogo from '@/public/svgs/icons/html5.svg';

import {
  CardArticle,
  ActionButtonHolder,
  TechIconContainer,
  Title,
  Description,
  TechnologyDescription,
  WebsiteButton,
  IconHolder,
  BlackWavy,
  DarkGreenWavy,
} from './Styles';

type Props = {};

const CardSix = (props: Props) => {
  const GithubIcon = (
    <svg
      className={`h-6 w-6 ml-2 group-hover:fill-white transition duration-300 dark:fill-white`}
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
            <Image src={ProjectSix} alt="Resume Builder wesbite" />
          </motion.div>
          <Title className="text-[#03DAC5]">Resume Builder 2.0</Title>
          <TechIconContainer>
            <Image
              src={ReactLogo}
              alt="React logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={JSLogo}
              alt="JavaScript logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={HtmlLogo}
              alt="Html5 logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={CSSLogo}
              alt="CSS3 Logo"
              className="h-7 w-7 rounded-lg"
            />
          </TechIconContainer>
          <Description className="text-white">
            Blazingly fast modern React SPA. Architected with switch-statements
            to provide a {`"stepping through process"`}, this one page
            application has the feel of <DarkGreenWavy>multiple</DarkGreenWavy>{' '}
            pages.
          </Description>
          <TechnologyDescription className="text-[#03DAC5]">
            React | CSS3
          </TechnologyDescription>
          <ActionButtonHolder>
            <Link href="https://earth-hominid.github.io/Resume-Builder-2.0/">
              <a target="_blank">
                <WebsiteButton className="bg-[#00B3A6] hover:bg-[#03DAC5] text-white">
                  Website
                  <IconHolder>
                    <ComputerDesktopIcon />
                  </IconHolder>
                </WebsiteButton>
              </a>
            </Link>
            <Link href="https://github.com/Earth-Hominid/Resume-Builder-2.0">
              <a target="_blank">
                <WebsiteButton className="bg-[#00B3A6] text-white hover:bg-[#03DAC5]">
                  Code
                  {GithubIcon}
                </WebsiteButton>
              </a>
            </Link>
          </ActionButtonHolder>
        </CardArticle>
      ) : (
        <CardArticle className="green-gradient">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image src={ProjectSix} alt="Resume Builder wesbite" />
          </motion.div>
          <Title className="text-black">Resume Builder 2.0</Title>
          <TechIconContainer>
            <Image
              src={ReactLogo}
              alt="React logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={JSLogo}
              alt="JavaScript logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={HtmlLogo}
              alt="Html5 logo"
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src={CSSLogo}
              alt="CSS3 Logo"
              className="h-7 w-7 rounded-lg"
            />
          </TechIconContainer>
          <Description>
            Blazingly fast modern React SPA. Architected with switch-statements
            to provide a {`"stepping through process"`}, this one page
            application has the feel of <BlackWavy>multiple</BlackWavy> pages.
          </Description>
          <TechnologyDescription className="text-black">
            React | CSS3
          </TechnologyDescription>
          <ActionButtonHolder>
            <Link href="https://earth-hominid.github.io/Resume-Builder-2.0/">
              <a target="_blank">
                <WebsiteButton className="bg-white hover:bg-[#02BD9D] hover:text-white">
                  Website
                  <IconHolder>
                    <ComputerDesktopIcon />
                  </IconHolder>
                </WebsiteButton>
              </a>
            </Link>
            <Link href="https://github.com/Earth-Hominid/Resume-Builder-2.0">
              <a target="_blank">
                <WebsiteButton className="bg-white hover:bg-[#02BD9D] hover:text-white">
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

export default CardSix;
