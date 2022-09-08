import CallToAction from '@/components/call-to-action/CallToAction';

import {
  HeroContainer,
  BlueUnderline,
  HeroText,
  MainContainer,
  SubHeroContainer,
  ParagraphText,
  BlueText,
  IndigoText,
  ActionButtonHolder,
} from './Styles';

const HeroSection = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroText>
          {`Let's Create Something`} <BlueUnderline>Great </BlueUnderline>{' '}
          Together
        </HeroText>
        <SubHeroContainer>
          <ParagraphText>
            I am a<BlueText> developer </BlueText>
            and a<IndigoText> designer </IndigoText>
            that works closely with clients to create custom software and web
            applications.
          </ParagraphText>
        </SubHeroContainer>
        <ActionButtonHolder>
          <CallToAction title="Work With Me" />
        </ActionButtonHolder>
      </HeroContainer>
    </MainContainer>
  );
};

export default HeroSection;
