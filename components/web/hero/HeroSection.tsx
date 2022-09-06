import BackgroundOne from '@/public/svgs/layer1.svg';
import BackgroundTwo from '@/public/svgs/layer2.svg';
import BackgroundThree from '@/public/svgs/layer3.svg';
import BackgroundFour from '@/public/svgs/layer4.svg';

import { MainContainer, Spacer } from './Styles';

const HeroSection = () => {
  return (
    <MainContainer>
      <Spacer
        style={{
          backgroundImage: `url(${BackgroundTwo.src})`,
          width: '100%',
          height: '100%',
        }}
      ></Spacer>
    </MainContainer>
  );
};

export default HeroSection;
