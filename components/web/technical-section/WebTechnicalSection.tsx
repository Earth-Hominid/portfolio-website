import Image from 'next/future/image';
import {
  MainContainer,
  ImageHolder,
  HorizontalContainer,
  TextHolder,
  CardText,
  CardTitle,
} from './Styles';
import Computer from '@/public/images/3d-computer.png';
const WebTechnicalSection = () => {
  return (
    <MainContainer>
      <HorizontalContainer>
        <ImageHolder>
          <Image
            src={Computer}
            alt="computer 3d image"
            className="h-52 w-72 rounded-lg shadow-xl"
          />
        </ImageHolder>
        <TextHolder>
          <CardTitle>Software Development</CardTitle>

          <CardText>
            I build rich web products in collaboration with clients. I use the
            latest technology, creating blazingly fast API's with coding best
            practices.
          </CardText>
        </TextHolder>
      </HorizontalContainer>
    </MainContainer>
  );
};

export default WebTechnicalSection;
