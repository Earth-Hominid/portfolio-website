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
            <LinkText>My Work</LinkText>
          </BorderContainer>
          <BorderContainer>
            <LinkText>Software Development</LinkText>
          </BorderContainer>
          <LinkText>Work With Me</LinkText>
        </LinkContainer>
        <BrandIconContainer>
          <Link href={'https://github.com/Earth-Hominid'}>
            <a>
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
          </Link>
        </BrandIconContainer>
      </MainContainer>
    </FooterContainerSmall>
  );
};

export default Footer;
