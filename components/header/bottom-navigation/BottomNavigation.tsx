import { BottomNavigationMenu, ActionButtonHolder, ActionLink } from './Styles';

function BottomNavigation({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) {
  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <ActionLink href="#projects">My Work</ActionLink>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <ActionLink href="#contact">Contact</ActionLink>
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
