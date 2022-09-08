import CallToAction from '@/components/call-to-action/CallToAction';

import { BottomNavigationMenu, ActionButtonHolder, ActionLink } from './Styles';

const BottomNavigation = () => {
  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <ActionLink href="#project_section">My Work</ActionLink>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <ActionLink href="#technical_section">Software Development</ActionLink>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <CallToAction title="Work With Me" />
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
