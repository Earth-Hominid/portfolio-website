import Image, { StaticImageData } from 'next/future/image';
import { motion } from 'framer-motion';

import {
  WebContainer,
  WebHorizontalContainer,
  TextHolder,
  CardTitle,
  CardText,
} from './Styles';

type initial = {
  x: number;
  y: number;
  opacity: number;
};

type transition = {
  duration: number;
  ease: string;
};
type viewport = {
  once: boolean;
};
type whileInView = {
  x: number;
  y: number;
  opacity: number;
};

interface Props {
  title: string;
  src: StaticImageData;
  priority: boolean;
  alt: string;
  styles: string;
  description: string;
  initial: initial;
  transition: transition;
  whileInView: whileInView;
  viewport: viewport;
  divstyle: string;
  color: string;
  imageStyle: string;
}

const WebCard: React.FC<Props> = ({
  title,
  src,
  priority,
  alt,
  styles,
  description,
  initial,
  transition,
  whileInView,
  viewport,
  divstyle,
  color,
  imageStyle,
}) => {
  return (
    <WebContainer>
      <WebHorizontalContainer className={divstyle}>
        <TextHolder>
          <CardTitle className={color}>{title}</CardTitle>
          <CardText>{description}</CardText>
        </TextHolder>
        <motion.div
          initial={initial}
          transition={transition}
          whileInView={whileInView}
          viewport={viewport}
          className={imageStyle}
        >
          <Image
            src={src}
            priority={priority}
            alt={alt}
            className={styles}
            placeholder="blur"
          />
        </motion.div>
      </WebHorizontalContainer>
    </WebContainer>
  );
};

export default WebCard;
