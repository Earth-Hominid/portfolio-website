import Link from 'next/link';

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
    <div className="relative group">
      <AbsoluteContainer></AbsoluteContainer>
      <Link href="#contact">
        <CallToActionButton className={styles}>
          <ActionButtonSecondSpan>{title}</ActionButtonSecondSpan>
        </CallToActionButton>
      </Link>
    </div>
  );
};

export default CallToAction;
