import Image from 'next/future/image';

import BackgroundWave from '@/public/svgs/wave.svg';

import {
  MainContainer,
  ImageHolder,
  HorizontalContainer,
  TextHolder,
  CardText,
  CardTitle,
  Spacer,
  VerticalSpace,
} from './Styles';
import Computer from '@/public/images/3d-computer.png';
import Doll from '@/public/images/dall-doll.png';
const WebTechnicalSection = () => {
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
          <HorizontalContainer>
            <ImageHolder>
              <Image
                src={Computer}
                alt="computer 3d image"
                className="h-52 w-72 rounded-2xl shadow-xl object-fit"
              />
            </ImageHolder>
            <TextHolder>
              <CardTitle>Software Development</CardTitle>

              <CardText>
                I build rich web products in collaboration with clients. I use
                the latest technology, creating blazingly fast API's with coding
                best practices.
              </CardText>
            </TextHolder>
          </HorizontalContainer>
          <HorizontalContainer>
            <TextHolder>
              <CardTitle>Product Design</CardTitle>
              <CardText>
                I create products that are easy to use, look beautiful, and
                achieve your business goals.
              </CardText>
            </TextHolder>
            <ImageHolder>
              <Image
                src={Doll}
                alt="3d charature"
                className="h-52 w-72 shadow-xl object-fit rounded-2xl"
              />
            </ImageHolder>
          </HorizontalContainer>
        </VerticalSpace>
      </Spacer>
    </MainContainer>
  );
};

export default WebTechnicalSection;
