import Image from 'next/image';
import Link from 'next/link';

import GithubLogo from '@/public/Octocat.png';
import LinkedinLogo from '@/public/linkedin.svg';

import {
  FooterContainerSmall,
  MainContainer,
  FooterText,
  LinkContainer,
  LinkText,
  BorderContainer,
  BrandIconContainer,
  IconHolder,
} from './Styles';

const Footer = () => {
  return (
    <FooterContainerSmall>
      <MainContainer>
        <FooterText>Chris Doll</FooterText>
        <LinkContainer>
          <BorderContainer>
            <Link href="#projects">
              <LinkText>My Work</LinkText>
            </Link>
          </BorderContainer>
          <BorderContainer>
            <Link href="#technical">
              <LinkText>Software Development</LinkText>
            </Link>
          </BorderContainer>
          <Link href="#contact">
            <LinkText>Work With Me</LinkText>
          </Link>
        </LinkContainer>
        <BrandIconContainer>
          <a
            target="_blank"
            rel="noreferrer"
            href={'https://github.com/Earth-Hominid'}
          >
            <IconHolder>
              <Image
                src={GithubLogo}
                alt="github logo"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </IconHolder>
          </a>
        </BrandIconContainer>
      </MainContainer>
    </FooterContainerSmall>
  );
};

export default Footer;
