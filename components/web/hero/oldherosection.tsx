import BackgroundOne from '@/public/svgs/layer1.svg';
import BackgroundTwo from '@/public/svgs/layer2.svg';
import BackgroundThree from '@/public/svgs/layer3.svg';
import BackgroundFour from '@/public/svgs/layer4.svg';

import {
  HeroTextContainer,
  Navigation,
  LogoHolder,
  ActionButtonsContainer,
  ActionButtonHolder,
  ActionButtonText,
  LogoText,
  BlueUnderline,
  HeroText,
  MainContainer,
  Spacer,
} from './Styles';

const HeroSection = () => {
  return (
    <MainContainer>
      <Spacer
        style={{
          backgroundImage: `url(${BackgroundTwo.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <Navigation>
          <LogoHolder>
            <LogoText>Chris Doll</LogoText>
          </LogoHolder>
          <ActionButtonsContainer>
            <ActionButtonHolder>
              <ActionButtonText href="contact-section">
                Contact
              </ActionButtonText>
            </ActionButtonHolder>

            <ActionButtonHolder>
              <ActionButtonText href="technical-section">
                Software Development
              </ActionButtonText>
            </ActionButtonHolder>
            <ActionButtonHolder>
              <ActionButtonText href="project-section">
                My Work
              </ActionButtonText>
            </ActionButtonHolder>
          </ActionButtonsContainer>
        </Navigation>

        <HeroTextContainer>
          <HeroText>
            {`Let's Create Something`} <BlueUnderline>Great </BlueUnderline>{' '}
            Together
          </HeroText>
        </HeroTextContainer>
      </Spacer>
    </MainContainer>
  );
};

export default HeroSection;
