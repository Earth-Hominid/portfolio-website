import { useTypewriter, Cursor } from 'react-simple-typewriter';
import CallToAction from '@/components/call-to-action/CallToAction';
import LightWave from '@/public/svgs/light-wave.svg';
import DarkWave from '@/public/svgs/dark-wave.svg';

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

type Props = {};

const Hero = ({ darkMode }: { darkMode: boolean | undefined }) => {
  const [text] = useTypewriter({
    words: ['Great', 'Wonderful', 'Amazing', 'Marvelous', 'Incredible'],
    loop: 1,
    delaySpeed: 1500,
    typeSpeed: 160,
    deleteSpeed: 100,
  });
  return (
    <MainContainer>
      {darkMode ? (
        <Spacer
          style={{
            backgroundImage: `url(${DarkWave.src})`,
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
                    that works closely with clients to create custom software
                    and web applications.
                  </ParagraphText>
                </ParagraphContainer>
              </SubHeroContainer>
            </HeroTextContainer>
            <ActionButtonHolder>
              <CallToAction styles="" title="Work With Me" />
            </ActionButtonHolder>
          </HeroContainer>
        </Spacer>
      ) : (
        <Spacer
          style={{
            backgroundImage: `url(${LightWave.src})`,
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
                    that works closely with clients to create custom software
                    and web applications.
                  </ParagraphText>
                </ParagraphContainer>
              </SubHeroContainer>
            </HeroTextContainer>
            <ActionButtonHolder>
              <CallToAction styles="" title="Work With Me" />
            </ActionButtonHolder>
          </HeroContainer>
        </Spacer>
      )}
    </MainContainer>
  );
};

export default Hero;
