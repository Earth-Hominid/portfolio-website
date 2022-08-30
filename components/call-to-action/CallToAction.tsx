import { HandThumbUpIcon } from '@heroicons/react/24/outline';

interface Props {
  title: string;
}

import {
  CallToActionButton,
  ActionButtonSecondSpan,
  IconHolder,
  RelativeContainer,
  AbsoluteContainer,
} from './Styles';

export const CallToAction: React.FC<Props> = ({ title }) => {
  return (
    <RelativeContainer>
      <AbsoluteContainer></AbsoluteContainer>
      <CallToActionButton>
        <ActionButtonSecondSpan>{title}</ActionButtonSecondSpan>
        <IconHolder>
          <HandThumbUpIcon />
        </IconHolder>
      </CallToActionButton>
    </RelativeContainer>
  );
};

export default CallToAction;
