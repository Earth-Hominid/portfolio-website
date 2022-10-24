import { motion } from 'framer-motion';

interface Props {
  title: string;
  styles: string;
}

import {
  RelativeContainer,
  StyledButton,
  ActionButtonSecondSpan,
  AbsoluteContainer,
} from './Styles';

export const FormButton: React.FC<Props> = ({ title, styles }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.065 }}
      whileTap={{ scale: 0.9 }}
      className="relative group"
    >
      <AbsoluteContainer></AbsoluteContainer>
      <StyledButton type="submit" className={styles}>
        <ActionButtonSecondSpan>{title}</ActionButtonSecondSpan>
      </StyledButton>
    </motion.div>
  );
};

export default FormButton;
