import Image from 'next/future/image';
import Link from 'next/link';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

import {
  CardContainer,
  CardTitle,
  CardDescription,
  TechnologyDescription,
  ActionButtonHolder,
  IconHolder,
  WebsiteButton,
} from './Styles';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Props {
  id: string;
  title: string;
  description: string;
  technology: string;
  textColor: string;
  src: StaticImageData;
  styles: string;
  buttonColor: string;
  websiteAddress: string;
  githubAddress: string;
  fillColor: string;
}

const ProjectCard: React.FC<Props> = ({
  id,
  title,
  src,
  description,
  technology,
  textColor,
  styles,
  buttonColor,
  websiteAddress,
  githubAddress,
  fillColor,
}) => {
  const GithubIcon = (
    <svg className={`h-6 w-6 ml-2 ${fillColor} transition duration-300`}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );

  return (
    <CardContainer className={styles}>
      <Image
        src={src}
        alt={`Project ${id}`}
        priority={true}
        className="rounded-t-xl h-auto w-auto"
      />

      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <TechnologyDescription className={textColor}>
        {technology}
      </TechnologyDescription>
      <ActionButtonHolder>
        <Link href={websiteAddress}>
          <a target="_blank">
            <WebsiteButton className={buttonColor}>
              Website
              <IconHolder>
                <ComputerDesktopIcon />
              </IconHolder>
            </WebsiteButton>
          </a>
        </Link>
        <Link href={githubAddress}>
          <a target="_blank">
            <WebsiteButton className={buttonColor}>
              Code
              {GithubIcon}
            </WebsiteButton>
          </a>
        </Link>
      </ActionButtonHolder>
    </CardContainer>
  );
};

export default ProjectCard;
