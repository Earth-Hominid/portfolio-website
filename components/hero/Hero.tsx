import CallToAction from '@/components/call-to-action/CallToAction';
import {
  HeroContainer,
  ActionButtonHolder,
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
      <ActionButtonHolder>
        <CallToAction title="Work With Me" />
      </ActionButtonHolder>
    </HeroContainer>
  );
};

export default Hero;
