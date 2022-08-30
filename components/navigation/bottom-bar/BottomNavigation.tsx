import { HandThumbUpIcon } from '@heroicons/react/24/outline';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ActionButton,
  CallToActionButton,
  ActionButtonSecondSpan,
  IconHolder,
  RelativeContainer,
  AbsoluteContainer,
} from './Styles';

const BottomNavigation = () => {
  const BusinessObject = {
    title: 'My Work',
    datapoints: [{ name: '', id: '1', url: '/about/' }],
  };

  const LearningObject = {
    title: 'About',
    datapoints: [
      {
        name: 'About 1',
        id: '1',
        url: '',
      },
    ],
  };

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <ActionButton>My Work</ActionButton>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <ActionButton>Software Development</ActionButton>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <RelativeContainer>
          <AbsoluteContainer></AbsoluteContainer>
          <CallToActionButton>
            <ActionButtonSecondSpan>Work With Me</ActionButtonSecondSpan>
            <IconHolder>
              <HandThumbUpIcon />
            </IconHolder>
          </CallToActionButton>
        </RelativeContainer>
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
