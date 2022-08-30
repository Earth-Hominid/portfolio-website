import CallToAction from '@/components/call-to-action/CallToAction';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ActionButton,
} from './Styles';

const BottomNavigation = () => {
  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <ActionButton>My Work</ActionButton>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <ActionButton>Software Development</ActionButton>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <CallToAction title="Work With Me" />
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
