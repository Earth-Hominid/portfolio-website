import BackgroundWave from '@/public/svgs/wave.svg';
import MobileTechnical from './mobile/MobileTechnical';
import WebTechnical from './web/WebTechnical';

import { BackgroundContainer, VerticalSpace, Spacer } from './Styles';

type Props = {};

function Technical({}: Props) {
  return (
    <BackgroundContainer>
      <Spacer
        style={{
          backgroundImage: `url(${BackgroundWave.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <VerticalSpace>
          <MobileTechnical />
          <WebTechnical />
        </VerticalSpace>
      </Spacer>
    </BackgroundContainer>
  );
}

export default Technical;
