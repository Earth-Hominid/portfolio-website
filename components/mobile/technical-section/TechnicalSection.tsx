import Image from 'next/future/image';
import BackgroundWave from '@/public/svgs/wave.svg';
import SpacerWave from '@/public/svgs/wave-blue.svg';

import {
  MainContainer,
  ImageHolder,
  VerticalContainer,
  TextHolder,
  CardText,
  Title,
  Spacer,
  VerticalSpace,
} from './Styles';

import Computer from '@/public/images/3d-computer.png';
import Doll from '@/public/images/dall-doll.png';

const TechnicalSection = () => {
  return (
    <MainContainer>
      <Spacer
        style={{
          backgroundImage: `url(${BackgroundWave.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <VerticalSpace>
          <VerticalContainer>
            <Title>Software Development</Title>
            <ImageHolder>
              <Image
                src={Computer}
                priority={true}
                alt="3D render of computer"
                className="
                rounded-full object-cover 
                w-52 
                h-52 
                shadow-xl"
              />
            </ImageHolder>
            <TextHolder>
              <CardText>
                I build rich web products in collaboration with clients. I use
                the latest technology, creating blazingly fast API's with coding
                best practices.
              </CardText>
            </TextHolder>
          </VerticalContainer>

          <VerticalContainer>
            <Title>Product Design</Title>
            <ImageHolder>
              <Image
                src={Doll}
                alt="3d charature"
                className="
                h-auto 
                w-52 
                shadow-xl object-cover rounded-full"
              />
            </ImageHolder>
            <TextHolder>
              <CardText>
                I create products that are easy to use, look beautiful, and
                achieve your business goals.
              </CardText>
            </TextHolder>
          </VerticalContainer>
        </VerticalSpace>
      </Spacer>
    </MainContainer>
  );
};

export default TechnicalSection;
