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
      <HeroTextContainer>
        <HeroText>
          {`Let's Create Something`} <BlueUnderline>Great </BlueUnderline>{' '}
          Together
        </HeroText>
      </HeroTextContainer>
    </MainContainer>
  );
};

export default HeroSection;
