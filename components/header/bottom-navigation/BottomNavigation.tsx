import Link from 'next/link';
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
        <Link href="#projects">
          <div className="hover:text-blue-600 cursor-pointer">My Work</div>
        </Link>
      </ActionButtonHolder>
      <ActionButtonHolder>
        <Link href="#contact">
          <div className="hover:text-blue-600 cursor-pointer">Contact</div>
        </Link>
      </ActionButtonHolder>
    </BottomNavigationMenu>
  );
}

export default BottomNavigation;
