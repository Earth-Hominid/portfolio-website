import {
  HeroContainer,
  SubHeroContainer,
  ParagraphContainer,
  ParagraphText,
  HeroText,
  HeroTextContainer,
  BlueText,
  IndigoText,
} from './Styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroText>Let's Create Something Great Together</HeroText>
        <SubHeroContainer>
          <ParagraphContainer>
            <ParagraphText>
              I am a<BlueText> developer </BlueText>
              and a<IndigoText> designer </IndigoText>
              that works closely with clients to create custom software and web
              applications.
            </ParagraphText>
          </ParagraphContainer>
        </SubHeroContainer>
      </HeroTextContainer>
    </HeroContainer>
  );
};

export default Hero;
