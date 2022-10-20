import React from 'react';
import MobileTechnical from './mobile/MobileTechnical';
import WebTechnical from './web/WebTechnical';
import LightWave from '@/public/svgs/tech-light.svg';
import DarkWave from '@/public/svgs/tech-dark.svg';
import { MainContainer, Spacer } from './Styles';

type Props = {};

const Technical = ({ darkMode }: { darkMode: boolean | undefined }) => {
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
          <MobileTechnical />
          <WebTechnical />
        </Spacer>
      ) : (
        <Spacer
          style={{
            backgroundImage: `url(${LightWave.src})`,
            width: '100%',
            height: '100%',
          }}
        >
          <MobileTechnical />
          <WebTechnical />
        </Spacer>
      )}
    </MainContainer>
  );
};

export default Technical;
