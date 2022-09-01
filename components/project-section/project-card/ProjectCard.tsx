import Image from 'next/image';

import {
  CardContainer,
  ImageHolder,
  CardTitle,
  CardDescription,
  TechnologyDescription,
} from './Styles';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

interface Props {
  title: string;
  description: string;
  technology: string;
  textColor: string;
  src: string | StaticImageData;
  styles: string;
}

const ProjectCard: React.FC<Props> = ({
  src,
  title,
  description,
  styles,
  technology,
  textColor,
}) => {
  return (
    <CardContainer className={styles}>
      <ImageHolder>
        <Image
          src={src}
          width={200}
          height={200}
          alt="Portfolio Project"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </ImageHolder>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <TechnologyDescription className={textColor}>
        {technology}
      </TechnologyDescription>
    </CardContainer>
  );
};

export default ProjectCard;
