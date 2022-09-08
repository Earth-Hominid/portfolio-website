import Image from 'next/future/image';

import { CardContainer, Title, ParagraphText } from './Styles';

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

      <Image
        src={src}
        alt="3D render of computer"
        priority={true}
        className="rounded-full object-cover w-52 h-52 shadow-xl"
      />

      <ParagraphText>{description}</ParagraphText>
    </CardContainer>
  );
};

export default TechnicalCard;
