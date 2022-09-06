import Image from 'next/future/image';
import { CarouselContainer, Row, Container } from './Styles';



const CarouselSection = ({ slides }) => {
  return (
    <CarouselContainer>
      <Container>
        <Row>
          {slides.map((url, index) => (
            <Container key={index}>
              <Image
                alt={`photo${index}`}
                src={url}
                width="100"
                height="100"
                className="w-80 h-80 object-fill"
              />
            </Container>
          ))}
        </Row>
      </Container>
    </CarouselContainer>
  );
};

export default CarouselSection;
