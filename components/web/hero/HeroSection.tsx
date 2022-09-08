import {
  HeroContainer,
  BlueUnderline,
  HeroText,
  MainContainer,
  Spacer,
} from './Styles';

const HeroSection = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroText>
          {`Let's Create Something`} <BlueUnderline>Great </BlueUnderline>{' '}
          Together
        </HeroText>
      </HeroContainer>
    </MainContainer>
  );
};

export default HeroSection;
