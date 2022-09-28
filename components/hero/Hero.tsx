import CallToAction from '@/components/call-to-action/CallToAction';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SpacerWave from '@/public/svgs/wave-blue.svg';

import {
  MainContainer,
  HeroContainer,
  ActionButtonHolder,
  SubHeroContainer,
  ParagraphContainer,
  ParagraphText,
  HeroText,
  HeroTextContainer,
  BlueText,
  IndigoText,
  BlueUnderline,
  Spacer,
} from './Styles';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Great', 'Wonderful', 'Amazing', 'Marvelous', 'Incredible'],
    loop: 1,
    delaySpeed: 1500,
    typeSpeed: 160,
    deleteSpeed: 100,
  });

  return (
    <MainContainer>
      <Spacer
        style={{
          backgroundImage: `url(${SpacerWave.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <HeroContainer>
          <HeroTextContainer>
            <HeroText>
              <ul className="flex flex-col sm:space-y-3">
                <li>{`Let's Create`}</li>
                <li>
                  {`Something `}
                  <BlueUnderline>{text}</BlueUnderline>
                </li>
                <li>Together</li>
              </ul>
            </HeroText>
            <SubHeroContainer>
              <ParagraphContainer>
                <ParagraphText>
                  I am a<BlueText> developer </BlueText>
                  and a<IndigoText> designer </IndigoText>
                  that works closely with clients to create custom software and
                  web applications.
                </ParagraphText>
              </ParagraphContainer>
            </SubHeroContainer>
          </HeroTextContainer>
          <ActionButtonHolder>
            <CallToAction styles="" title="Work With Me" />
          </ActionButtonHolder>
        </HeroContainer>
      </Spacer>
    </MainContainer>
  );
};

export default Hero;
