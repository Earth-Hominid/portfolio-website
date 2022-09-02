interface Props {
  title: string;
}

import {
  CallToActionButton,
  ActionButtonSecondSpan,
  RelativeContainer,
  AbsoluteContainer,
} from './Styles';

export const CallToAction: React.FC<Props> = ({ title }) => {
  return (
    <RelativeContainer>
      <AbsoluteContainer></AbsoluteContainer>
      <CallToActionButton>
        <ActionButtonSecondSpan>{title}</ActionButtonSecondSpan>
      </CallToActionButton>
    </RelativeContainer>
  );
};

export default CallToAction;
