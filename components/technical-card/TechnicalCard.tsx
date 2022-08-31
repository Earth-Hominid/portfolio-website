import Image from 'next/image';

import { CardContainer, Title, ImageHolder, ParagraphText } from './Styles';

interface Props {
  title: string;
  description: string;
  src: string;
}

const TechnicalCard: React.FC<Props> = ({ title, description, src }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <ImageHolder>
        <Image
          src={src}
          width={200}
          height={200}
          alt="3D render of computer"
          layout="fill"
          objectFit="contain"
          priority={true}
          className="rounded-full"
        />
      </ImageHolder>
      <ParagraphText>{description}</ParagraphText>
    </CardContainer>
  );
};

export default TechnicalCard;

<HTMLImageElement.prototype></HTMLImageElement.prototype>;
