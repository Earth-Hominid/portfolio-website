import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  styles: string;
}

import {
  RelativeContainer,
  CallToActionButton,
  ActionButtonSecondSpan,
  AbsoluteContainer,
} from './Styles';

export const CallToAction: React.FC<Props> = ({ title, styles }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.065 }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      <AbsoluteContainer></AbsoluteContainer>
      <Link href="#contact">
        <CallToActionButton className={styles}>
          <ActionButtonSecondSpan>{title}</ActionButtonSecondSpan>
        </CallToActionButton>
      </Link>
    </motion.div>
  );
};

export default CallToAction;
