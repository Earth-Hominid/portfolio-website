import Image from 'next/image';

import { CardContainer, Title, ImageHolder, ParagraphText } from './Styles';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Props {
  title: string;
  description: string;
  src: string | StaticImageData;
  styles: string;
}

const TechnicalCard: React.FC<Props> = ({
  title,
  description,
  src,
  styles,
}) => {
  return (
    <CardContainer>
      <Title className={`${styles}`}>{title}</Title>
      <ImageHolder>
        <Image
          src={src}
          width={200}
          height={200}
          alt="3D render of computer"
          layout="fill"
          objectFit="contain"
          priority={true}
          className="rounded-lg"
        />
      </ImageHolder>
      <ParagraphText>{description}</ParagraphText>
    </CardContainer>
  );
};

export default TechnicalCard;
