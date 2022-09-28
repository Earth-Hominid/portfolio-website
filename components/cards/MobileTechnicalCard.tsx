import Image, { StaticImageData } from 'next/future/image';
import { motion } from 'framer-motion';

import { MobileContainer, MobileDescription, MobileTitle } from './Styles';

type initial = {
  x: number;
  y: number;
};

type transition = {
  duration: number;
};

type viewport = {
  once: boolean;
};

type whileInView = {
  x: number;
  y: number;
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
}

const MobileTechnicalCard: React.FC<Props> = ({
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
}) => {
  return (
    <MobileContainer>
      <MobileTitle className={color}>{title}</MobileTitle>
      <motion.div
        initial={initial}
        transition={transition}
        whileInView={whileInView}
        viewport={viewport}
        className={divstyle}
      >
        <Image
          src={src}
          priority={priority}
          alt={alt}
          className={styles}
          placeholder="blur"
        ></Image>
      </motion.div>
      <MobileDescription>{description}</MobileDescription>
    </MobileContainer>
  );
};

export default MobileTechnicalCard;
